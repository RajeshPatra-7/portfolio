(() => {
  const portfolio = window.PORTFOLIO;
  if (!portfolio || !window.THREE || !window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 820;
  const projectCount = portfolio.projects.length;
  const sceneCount = projectCount + 4;

  const canvas = document.getElementById("experience-canvas");
  const scrollTrack = document.getElementById("scroll-track");
  const loadingScreen = document.getElementById("loading-screen");
  const loadingValue = document.getElementById("loading-value");
  scrollTrack.style.height = `${sceneCount * 110}vh`;

  const projectEls = {
    index: document.getElementById("project-index"),
    title: document.getElementById("project-title"),
    description: document.getElementById("project-description"),
    tech: document.getElementById("project-tech"),
    github: document.getElementById("project-github"),
    demo: document.getElementById("project-demo")
  };

  document.getElementById("contact-email").href = `mailto:${portfolio.social.email}`;
  document.getElementById("contact-github").href = portfolio.social.github;
  document.getElementById("contact-linkedin").href = portfolio.social.linkedin;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isTouch, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isTouch ? 1.5 : 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x05060a);
  scene.fog = new THREE.Fog(0x05060a, 16, 84);

  const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 240);
  camera.position.set(0, 0.2, 7);

  const pointer = new THREE.Vector2(0, 0);
  const loader = new THREE.TextureLoader();
  const fallbackTexture = buildFallbackTexture();

  const ambientLight = new THREE.AmbientLight(0xcbd4ff, 0.62);
  const keyLight = new THREE.DirectionalLight(0x8fa4ff, 0.9);
  keyLight.position.set(2.6, 2, 4.4);
  const rimLight = new THREE.PointLight(0x6a8cff, 1.2, 60);
  rimLight.position.set(0.4, 0.8, 2.8);
  scene.add(ambientLight, keyLight, rimLight);

  const root = new THREE.Group();
  scene.add(root);

  const particles = createParticles();
  root.add(particles);

  const heroGroup = createHeroGroup();
  root.add(heroGroup);

  const projectGroups = createProjectGroups();
  projectGroups.forEach((g) => root.add(g.group));

  const aboutGroup = createAboutGroup(-13 - projectCount * 18);
  root.add(aboutGroup);

  const skillsGroup = createSkillsGroup(aboutGroup.position.z - 18);
  root.add(skillsGroup);

  const contactGroup = createContactGroup(skillsGroup.position.z - 18);
  root.add(contactGroup);

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#scroll-track",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.15
    }
  });

  timeline.to(camera.position, { z: 1.7, y: 0.45, duration: 1 });
  timeline.to(heroGroup.rotation, { y: 0.24, x: -0.05, duration: 1 }, "<");

  projectGroups.forEach((entry) => {
    timeline.to(camera.position, {
      x: entry.group.position.x * 0.26,
      y: 0.2,
      z: entry.group.position.z + 3.1,
      duration: 1
    });
    timeline.to(entry.group.rotation, { y: 0.02, duration: 1 }, "<");
    timeline.to(entry.media.scale, { x: 4.95, y: 2.95, duration: 1 }, "<");
  });

  timeline.to(camera.position, { x: 0, y: 0.2, z: aboutGroup.position.z + 3, duration: 1 });
  timeline.to(camera.position, { x: -0.22, y: 0.3, z: skillsGroup.position.z + 3.3, duration: 1 });
  timeline.to(camera.position, { x: 0, y: 0.32, z: contactGroup.position.z + 2.4, duration: 1 });

  const copies = Array.from(document.querySelectorAll(".scene-copy"));
  const sceneNames = ["hero", ...portfolio.projects.map(() => "projects"), "about", "skills", "contact"];
  let currentScene = -1;
  let activeProjectIndex = -1;

  ScrollTrigger.create({
    trigger: "#scroll-track",
    start: "top top",
    end: "bottom bottom",
    onUpdate: ({ progress }) => {
      const index = Math.min(sceneCount - 1, Math.floor(progress * sceneCount));
      if (index !== currentScene) {
        currentScene = index;
        setScene(sceneNames[index], index);
      }
      particles.material.uniforms.uScroll.value = progress;
    }
  });

  function setScene(name, index) {
    copies.forEach((copy) => copy.classList.toggle("active", copy.dataset.scene === name));
    if (name === "projects") {
      const projectIndex = Math.min(projectCount - 1, Math.max(0, index - 1));
      if (projectIndex !== activeProjectIndex) {
        activeProjectIndex = projectIndex;
        applyProjectCopy(projectIndex);
        setActiveVideo(projectIndex);
      }
    } else {
      setActiveVideo(-1);
      activeProjectIndex = -1;
    }
  }

  function applyProjectCopy(index) {
    const project = portfolio.projects[index];
    projectEls.index.textContent = `PROJECT ${String(index + 1).padStart(2, "0")}`;
    projectEls.title.textContent = project.title;
    projectEls.description.textContent = project.description;
    projectEls.tech.textContent = project.technologies.join(" • ");
    projectEls.github.href = project.github;
    projectEls.demo.href = project.demo;
  }

  function createHeroGroup() {
    const group = new THREE.Group();
    const frameGeo = new THREE.PlaneGeometry(4.6, 6.2, 1, 1);
    const frameMat = new THREE.MeshPhysicalMaterial({
      map: safeTexture(portfolio.heroImage),
      roughness: 0.92,
      metalness: 0.06,
      clearcoat: 0.5
    });
    const portrait = new THREE.Mesh(frameGeo, frameMat);
    portrait.position.set(0, 0.15, 0);
    group.add(portrait);

    const halo = new THREE.Mesh(
      new THREE.PlaneGeometry(6.2, 8.2),
      new THREE.MeshBasicMaterial({ color: 0x1a2448, transparent: true, opacity: 0.22 })
    );
    halo.position.z = -0.7;
    group.add(halo);
    return group;
  }

  function createProjectGroups() {
    return portfolio.projects.map((project, i) => {
      const group = new THREE.Group();
      group.position.z = -13 - i * 18;
      group.position.x = i % 2 ? 3.3 : -3.3;
      group.rotation.y = i % 2 ? -0.24 : 0.24;

      const frame = new THREE.Mesh(
        new THREE.PlaneGeometry(5.2, 3.2),
        new THREE.MeshPhysicalMaterial({
          color: 0x0f1323,
          transparent: true,
          opacity: 0.78,
          roughness: 0.88
        })
      );
      frame.position.z = -0.22;

      const media = new THREE.Mesh(
        new THREE.PlaneGeometry(4.7, 2.7),
        new THREE.MeshBasicMaterial({ map: safeTexture(project.image), toneMapped: false })
      );

      const tag = textSprite(`PROJECT ${String(i + 1).padStart(2, "0")}`);
      tag.position.set(-2.3, 1.95, 0.3);

      group.add(frame, media, tag);

      const video = {
        loaded: false,
        texture: null,
        element: document.createElement("video"),
        source: project.video
      };
      video.element.loop = true;
      video.element.muted = true;
      video.element.playsInline = true;
      video.element.preload = "metadata";
      video.element.crossOrigin = "anonymous";

      return { group, media, video };
    });
  }

  function createAboutGroup(z) {
    const group = new THREE.Group();
    group.position.z = z;
    const words = portfolio.aboutKeywords;
    words.forEach((word, i) => {
      const sprite = textSprite(word, i < 3 ? 190 : 150);
      sprite.position.set((Math.random() - 0.5) * 7.5, (Math.random() - 0.5) * 4.2, Math.random() * 5 - 2.5);
      sprite.userData = { sway: 0.0015 + Math.random() * 0.002 };
      group.add(sprite);
    });
    return group;
  }

  function createSkillsGroup(z) {
    const group = new THREE.Group();
    group.position.z = z;
    portfolio.skills.forEach((skill, i) => {
      const angle = (i / portfolio.skills.length) * Math.PI * 2;
      const radius = i < 7 ? 2.4 : 3.8;
      const item = textSprite(skill, i < 7 ? 150 : 120);
      item.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.3) * 1.4, Math.sin(angle) * 1.8);
      group.add(item);
      if (!isTouch) {
        const node = new THREE.Mesh(
          new THREE.SphereGeometry(0.04, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0x8ca1ff })
        );
        node.position.copy(item.position);
        group.add(node);
      }
    });
    return group;
  }

  function createContactGroup(z) {
    const group = new THREE.Group();
    group.position.z = z;
    const plate = new THREE.Mesh(
      new THREE.PlaneGeometry(8.2, 4.8),
      new THREE.MeshBasicMaterial({ color: 0x0b0e17, transparent: true, opacity: 0.62 })
    );
    group.add(plate);
    return group;
  }

  function createParticles() {
    const count = isTouch ? 420 : 1280;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 24;
      positions[i + 1] = (Math.random() - 0.5) * 14;
      positions[i + 2] = -Math.random() * 94;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uScroll: { value: 0 }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uScroll;
        void main() {
          vec3 p = position;
          p.x += sin(uTime * 0.35 + position.z * 0.1) * 0.05;
          p.y += cos(uTime * 0.25 + position.x * 0.15) * 0.05;
          p.z += uScroll * 1.2;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = 1.4;
        }
      `,
      fragmentShader: `
        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          float alpha = smoothstep(0.48, 0.0, d);
          gl_FragColor = vec4(0.74, 0.81, 1.0, alpha * 0.8);
        }
      `
    });
    return new THREE.Points(geometry, material);
  }

  function setActiveVideo(target) {
    projectGroups.forEach((entry, i) => {
      if (i === target) {
        if (!entry.video.loaded) {
          entry.video.element.src = entry.video.source;
          entry.video.element.load();
          entry.video.texture = new THREE.VideoTexture(entry.video.element);
          entry.video.texture.colorSpace = THREE.SRGBColorSpace;
          entry.media.material.map = entry.video.texture;
          entry.media.material.needsUpdate = true;
          entry.video.loaded = true;
        }
        entry.video.element.play().catch(() => {});
      } else {
        entry.video.element.pause();
      }
    });
  }

  function textSprite(text, width = 180) {
    const cvs = document.createElement("canvas");
    cvs.width = width;
    cvs.height = 64;
    const ctx = cvs.getContext("2d");
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.font = "700 24px Inter";
    ctx.fillStyle = "#dce3ff";
    ctx.letterSpacing = "1px";
    ctx.fillText(text, 8, 40);
    const tex = new THREE.CanvasTexture(cvs);
    tex.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(1.9, 0.62, 1);
    return sprite;
  }

  function safeTexture(path) {
    const texture = loader.load(path, () => {}, undefined, () => {
      texture.image = fallbackTexture.image;
      texture.needsUpdate = true;
    });
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  function buildFallbackTexture() {
    const c = document.createElement("canvas");
    c.width = 8;
    c.height = 8;
    const cx = c.getContext("2d");
    cx.fillStyle = "#121629";
    cx.fillRect(0, 0, 8, 8);
    cx.fillStyle = "#2f3858";
    cx.fillRect(0, 0, 4, 4);
    cx.fillRect(4, 4, 4, 4);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  let percent = 0;
  const managerTicker = () => {
    if (percent < 100) {
      percent += 2;
      loadingValue.textContent = String(Math.min(100, percent));
      requestAnimationFrame(managerTicker);
    }
  };
  managerTicker();
  setTimeout(() => loadingScreen.classList.add("hidden"), 900);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) setActiveVideo(-1);
    else if (activeProjectIndex >= 0) setActiveVideo(activeProjectIndex);
  });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isTouch ? 1.5 : 2));
  });

  window.addEventListener("pointermove", (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  const clock = new THREE.Clock();
  function render() {
    const t = clock.getElapsedTime();
    particles.material.uniforms.uTime.value = t;
    particles.rotation.y = t * 0.02;
    heroGroup.rotation.z = Math.sin(t * 0.2) * 0.015;

    aboutGroup.children.forEach((word, i) => {
      word.position.y += Math.sin(t * (0.4 + i * 0.01)) * word.userData.sway;
    });
    skillsGroup.rotation.y = Math.sin(t * 0.18) * 0.14;

    rimLight.position.x += (pointer.x * 2.2 - rimLight.position.x) * 0.05;
    rimLight.position.y += (pointer.y * 1.5 + 0.5 - rimLight.position.y) * 0.05;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();

  initCursor();
  applyProjectCopy(0);
  setScene("hero", 0);

  function initCursor() {
    if (isTouch) return;
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    const label = document.getElementById("cursor-label");
    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.5;
    let rx = x;
    let ry = y;
    dot.style.opacity = "1";
    ring.style.opacity = "1";

    window.addEventListener("mousemove", (e) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px)`;
    });

    gsap.ticker.add(() => {
      rx += (x - rx) * 0.22;
      ry += (y - ry) * 0.22;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
    });

    document.querySelectorAll("[data-cursor]").forEach((node) => {
      node.addEventListener("mouseenter", () => {
        ring.style.width = "92px";
        ring.style.height = "92px";
        ring.style.borderColor = "rgba(144,164,255,.95)";
        label.textContent = node.dataset.cursor;
      });
      node.addEventListener("mouseleave", () => {
        ring.style.width = "64px";
        ring.style.height = "64px";
        ring.style.borderColor = "rgba(255,255,255,.55)";
        label.textContent = "";
      });
    });
  }
})();
