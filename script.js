// ============================================================
//  RAJESH PATRA - KALI STYLE PORTFOLIO (script.js)
//  Apni info edit karne ke liye neeche dekhein
// ============================================================

// ---------- APNI INFO ----------
var MY_NAME = "Rajesh Patra";
var MY_TITLE = "Computer Science & Engineering Student | Software Developer | Cybersecurity Enthusiast";
var MY_PHONE = "+91 8280598780";
var MY_INSTAGRAM = "https://www.instagram.com/_itz_editz__07";
var MY_LINKEDIN = "https://www.linkedin.com/in/rajesh-patra-414425281";
var MY_GITHUB = "https://github.com/RajeshPatra-7";
var MY_LOCATION = "India";
var MY_SUMMARY = "I am a Computer Science & Engineering student with a strong passion for software engineering, cybersecurity, and modern web technologies. I enjoy designing secure, scalable, and high-performance applications while continuously learning emerging technologies. My focus is on building innovative digital solutions that combine functionality, security, and exceptional user experience.";
var USER = (MY_NAME.split(" ")[0]).toLowerCase(); // "rajesh"

var MY_SKILLS = [
    "Software Development", "Full Stack Web Development", "Cybersecurity",
    "Ethical Hacking", "Python", "JavaScript", "HTML5", "CSS3",
    "React.js", "Git & GitHub", "Linux (Kali Linux)", "Computer Networking",
    "UI/UX Design", "Artificial Intelligence Tools", "Problem Solving"
];
var MY_INTERESTS = [
    "Software Engineering", "Cybersecurity", "Artificial Intelligence",
    "Cloud Computing", "Business & Entrepreneurship", "Startup Development",
    "Open Source", "Technology Innovation"
];
var MY_PROJECTS = [
    "Project 1 - [EDIT KAREIN: apne project ka naam + description]",
    "Project 2 - [EDIT KAREIN]",
    "Project 3 - [EDIT KAREIN]"
];
var MY_CERTS = ["[EDIT KAREIN: apni certification yahan likhein]"];

// photos/ folder me images daal kar yahan naam add karein
var PHOTO_FILES = [];
// Jaise: var PHOTO_FILES = ["photo1.jpg", "photo2.png"];

// ---------- ORIGINAL SVG ICONS ----------
var ICONS = {
    terminal: '<svg viewBox="0 0 24 24" width="42" height="42"><rect x="2" y="3.5" width="20" height="17" rx="3" fill="#1e1e1e" stroke="#00ff41" stroke-width="1.6"/><path d="M6.5 9.5l4 2.5-4 2.5" fill="none" stroke="#00ff41" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 14.5h5" fill="none" stroke="#00ff41" stroke-width="2" stroke-linecap="round"/></svg>',
    about: '<svg viewBox="0 0 24 24" width="42" height="42" fill="#569cd6"><circle cx="12" cy="7.5" r="4.2" fill="#569cd6"/><path d="M4 20.5c0-4.1 3.6-6.5 8-6.5s8 2.4 8 6.5" fill="#569cd6"/></svg>',
    skills: '<svg viewBox="0 0 24 24" width="42" height="42" fill="#ffcc00"><path d="M13 2L4.5 13.5H11L9.5 22 19 10.5h-6.5z"/></svg>',
    interests: '<svg viewBox="0 0 24 24" width="42" height="42"><circle cx="12" cy="12" r="10" fill="none" stroke="#00ff41" stroke-width="2"/><circle cx="12" cy="12" r="6" fill="none" stroke="#00ff41" stroke-width="2"/><circle cx="12" cy="12" r="2.4" fill="#00ff41"/></svg>',
    projects: '<svg viewBox="0 0 24 24" width="42" height="42"><path d="M14.7 6.3l3 3L8.5 18.5H5.5v-3z" fill="none" stroke="#ff79c6" stroke-width="2" stroke-linejoin="round"/><path d="M13.5 3.5L17 .8 18.8 5l-2.8 2.8-2.5-4.3z" fill="#ff79c6"/></svg>',
    certs: '<svg viewBox="0 0 24 24" width="42" height="42"><circle cx="12" cy="10" r="6" fill="none" stroke="#ffcc00" stroke-width="2"/><path d="M9 15l-2 6 5-3 5 3-2-6" fill="none" stroke="#ffcc00" stroke-width="2" stroke-linejoin="round"/><path d="M9.2 10.2l2 2 3.6-3.8" fill="none" stroke="#ffcc00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    contact: '<svg viewBox="0 0 24 24" width="42" height="42"><rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="#00ff41" stroke-width="2"/><path d="M3.5 7.5L12 13.5l8.5-6" fill="none" stroke="#00ff41" stroke-width="2" stroke-linejoin="round"/></svg>',
    photos: '<svg viewBox="0 0 24 24" width="42" height="42"><rect x="3" y="4.5" width="18" height="15" rx="2.5" fill="none" stroke="#ff79c6" stroke-width="2"/><circle cx="9" cy="10" r="2" fill="#ff79c6"/><path d="M4.5 18l5-5 3.5 3.5 3-3 3.5 4" fill="none" stroke="#ff79c6" stroke-width="2" stroke-linejoin="round"/></svg>',
    firebox: '<svg viewBox="0 0 24 24" width="42" height="42"><circle cx="12" cy="12" r="11" fill="#FF7139"/><path d="M12 3.6c1.7 1.8 2.9 3.5 2.9 5.7 0 1.7-1.1 2.8-2.1 2.8-.5 0-.9-.2-1.2-.5-.1.6.1 1.3.6 1.7-.6-.1-1.2-.4-1.7-.9-.7-.7-1.1-1.6-1.1-2.6 0-2 1.3-4 2.6-6.2z" fill="#fff"/><path d="M14.6 12.7c1.2-.3 2.3-1.1 2.9-2.5.8 1.2 1.2 2.6 1.2 4 0 3.7-3 6.7-6.7 6.7s-6.7-3-6.7-6.7c0-3.2 2.3-6 5.4-6.6-.9 1-1.5 2.3-1.5 3.7 0 1.4.8 2.7 2 3.4.5.3 1 .5 1.5.5 1.1 0 2.1-.7 2.4-1.7z" fill="#FFB57A" opacity=".85"/></svg>',
    files: '<svg viewBox="0 0 24 24" width="42" height="42"><path d="M3 6.5h6l2 2h10V19H3z" fill="#ffcc00" opacity=".92"/><path d="M3 8.5h18v10.5H3z" fill="#8a6d1a" opacity=".5"/></svg>',
    hackertyper: '<svg viewBox="0 0 24 24" width="42" height="42"><rect x="2" y="6" width="20" height="12" rx="2" fill="#1e1e1e" stroke="#00ff41" stroke-width="1.6"/><path d="M6 10h2M10 10h2M14 10h2M6 13h2M10 13h2M14 13h2M8 16h8" stroke="#00ff41" stroke-width="1.6" stroke-linecap="round"/></svg>',
    sudo: '<svg viewBox="0 0 24 24" width="42" height="42"><circle cx="12" cy="12" r="10" fill="#ff5555"/><circle cx="9" cy="10" r="1.6" fill="#fff"/><circle cx="15" cy="10" r="1.6" fill="#fff"/><path d="M8 15c1.2 1.3 2.6 2 4 2s2.8-.7 4-2" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>'
};

var SVG_IG = '<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>';
var SVG_LI = '<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>';
var SVG_GH = '<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>';

// ---------- APP CONTENT ----------
function aboutContent(){
    return '<h3>👤 ABOUT ME</h3>' +
    '<p>Hi! Main <span class="pink-text">' + MY_NAME + '</span> hoon.</p>' +
    '<p class="dim-text">' + MY_TITLE + '</p><br>' +
    '<p>' + MY_SUMMARY + '</p><br>' +
    '<p><span class="k">Role:</span> <span class="v">' + MY_TITLE + '</span></p>' +
    '<p><span class="k">Location:</span> <span class="v">' + MY_LOCATION + '</span></p>';
}
function skillsContent(){
    var h = '<h3>⚡ SKILLS</h3>';
    MY_SKILLS.forEach(function(s){ h += '<p><span class="blue-text">[+]</span> ' + s + '</p>'; });
    return h;
}
function interestsContent(){
    var h = '<h3>🎯 AREAS OF INTEREST</h3>';
    MY_INTERESTS.forEach(function(s){ h += '<p><span class="green-text">[+]</span> ' + s + '</p>'; });
    return h;
}
function projectsContent(){
    var h = '<h3>🛠️ PROJECTS</h3>';
    MY_PROJECTS.forEach(function(p,i){ h += '<p><span class="green-text">[' + (i+1) + ']</span> ' + p + '</p>'; });
    h += '<br><p class="dim-text">(script.js me MY_PROJECTS edit karein)</p>';
    return h;
}
function certsContent(){
    var h = '<h3>🏅 CERTIFICATIONS</h3>';
    MY_CERTS.forEach(function(c){ h += '<p><span class="green-text">[*]</span> ' + c + '</p>'; });
    return h;
}
function contactContent(){
    return '<h3>📬 CONTACT</h3>' +
    '<p><span class="k">Phone:</span> <span class="v">' + MY_PHONE + '</span></p><br>' +
    '<div class="social-grid">' +
    '<a class="soc soc-ig" href="' + MY_INSTAGRAM + '" target="_blank">' + SVG_IG + '<span>Instagram</span></a>' +
    '<a class="soc soc-li" href="' + MY_LINKEDIN + '" target="_blank">' + SVG_LI + '<span>LinkedIn</span></a>' +
    '<a class="soc soc-gh" href="' + MY_GITHUB + '" target="_blank">' + SVG_GH + '<span>GitHub</span></a>' +
    '<a class="soc soc-ph" href="tel:+918280598780"><span style="font-size:40px;">📞</span><span>' + MY_PHONE + '</span></a>' +
    '</div>';
}
function filesContent(){
    return '<h3>📁 HOME / root</h3>' +
    '<div class="f-item" data-f="secret_notes.txt">📄 secret_notes.txt</div>' +
    '<div class="f-item" data-f="skills.txt">📄 skills.txt</div>' +
    '<div class="f-item" data-f="wallpaper.jpg">🖼️ wallpaper.jpg</div>' +
    '<div class="f-item" data-f="flag.txt">🚩 flag.txt</div>' +
    '<div class="f-item" data-f="readme.md">📄 readme.md</div>' +
    '<div id="files-msg" class="dim-text" style="margin-top:12px"></div>';
}
function sudoContent(){
    return '<h3>⚠️ SYSTEM CHECK</h3>' +
    '<p>Running: <span class="blue-text">sudo rm -rf /</span></p>' +
    '<p>Result: <span class="green-text">100% - Nothing happened. Nice try! 😉</span></p>' +
    '<p class="dim-text">(Is portfolio me aapka data safe hai)</p>';
}
function hackerContent(){
    return '<div class="hack-out" id="hack-out"></div><div class="term-in"><span class="prompt"><span class="p-u">anonymous</span><span class="p-at">@</span><span class="p-h">darknet</span><span class="p-colon">:</span><span class="p-path">~</span><span class="p-dollar">$</span></span><span class="dim-text">(koi bhi key dabao...)</span></div>';
}
function terminalContent(){
    return '<div class="kali-term">' +
        '<div class="term-menu"><span>File</span><span>Edit</span><span>View</span><span>Search</span><span>Terminal</span><span>Help</span></div>' +
        '<div class="term-tabs"><span class="term-tab active">' + USER + '@kali: ~</span><span class="term-tab-plus">+</span></div>' +
        '<div class="term"><div class="term-out"></div><div class="term-in">' +
        '<span class="prompt"><span class="p-u">' + USER + '</span><span class="p-at">@</span><span class="p-h">kali</span><span class="p-colon">:</span><span class="p-path">~</span><span class="p-dollar">$</span></span>' +
        '<input class="term-cmd" autocomplete="off" spellcheck="false"></div></div></div>';
}
function photosContent(){
    return '<h3>📷 PHOTOS</h3>' +
    '<p class="dim-text">(photos/ folder me images daalein aur script.js me PHOTO_FILES update karein)</p>' +
    '<div class="photo-grid" id="photo-grid"></div>' +
    '<div class="photo-preview hidden" id="photo-preview">' +
    '<div style="text-align:center"><div id="preview-image" style="font-size:80px;color:#00ff41;">🖼️</div>' +
    '<p id="preview-name" class="dim-text" style="margin-top:8px;"></p>' +
    '<p class="dim-text" style="margin-top:18px;font-size:11px;">(Click anywhere to close)</p></div></div>';
}
function fireboxContent(){
    var bookmarks = [
        ["Google", "https://www.google.com"],
        ["YouTube", "https://www.youtube.com"],
        ["GitHub", "https://www.github.com"],
        ["Instagram", "https://www.instagram.com"],
        ["LinkedIn", "https://www.linkedin.com"],
        ["HackerOne", "https://www.hackerone.com"],
        ["TryHackMe", "https://tryhackme.com"],
        ["Wikipedia", "https://en.wikipedia.org"],
        ["Kali Linux", "https://www.kali.org"]
    ];
    var h = '<div class="browser-bar"><span class="browser-nav" data-nav="back">◀</span><span class="browser-nav" data-nav="fwd">▶</span><span class="browser-nav" data-nav="home">↻</span>' +
        '<input class="browser-url" id="browser-url" value="Firebox Home" readonly></div>' +
        '<div class="fb-home">' +
        '<div class="fb-logo"><span style="color:#4285F4">F</span><span style="color:#EA4335">i</span><span style="color:#FBBC05">r</span><span style="color:#4285F4">e</span><span style="color:#34A853">b</span><span style="color:#EA4335">o</span><span style="color:#FBBC05">x</span></div>' +
        '<div class="fb-search">' +
        '<input id="fb-q" placeholder="Google par search karein ya URL type karein...">' +
        '<div class="fb-btns"><button class="fb-btn" id="fb-search-btn">Google Search</button>' +
        '<button class="fb-btn" id="fb-lucky">Mujhe Acha Lagta Hai</button></div></div>' +
        '<p class="fb-tip">Search karo ya koi bhi site kholo — Google jaisa hi kaam karega ✅</p>' +
        '<div class="fb-bookmarks">';
    bookmarks.forEach(function(b){ h += '<div class="f-item" data-url="' + b[1] + '">' + b[0] + '</div>'; });
    h += '</div><div class="fb-msg" id="fb-msg"></div>' +
        '<div class="fb-iframe-wrap" id="fb-iframe-wrap"><iframe id="fb-iframe"></iframe></div></div>';
    return h;
}

// ---------- APPS LIST ----------
var APPS = {
    terminal:    { name: USER + "@kali: ~", icon:"🖥️", w:680, h:480, content:terminalContent, onOpen:startTerminal, term:true },
    about:       { name:"About Me",      icon:"👤", w:500, h:380, content:aboutContent },
    skills:      { name:"Skills",        icon:"⚡", w:440, h:420, content:skillsContent },
    interests:   { name:"Interests",     icon:"🎯", w:420, h:340, content:interestsContent },
    projects:    { name:"Projects",      icon:"🛠️", w:460, h:340, content:projectsContent },
    certs:       { name:"Certifications",icon:"🏅", w:420, h:280, content:certsContent },
    contact:     { name:"Contact",       icon:"✉️", w:520, h:380, content:contactContent },
    photos:      { name:"Photos",        icon:"🖼️", w:520, h:420, content:photosContent, onOpen:startPhotos },
    firebox:     { name:"Firebox Browser",icon:"🦊", w:720, h:520, content:fireboxContent, onOpen:startFirebox },
    files:       { name:"Files",         icon:"📁", w:400, h:320, content:filesContent, onOpen:startFiles },
    hackertyper: { name:"Hacker Typer",  icon:"⌨️", w:540, h:340, content:hackerContent, onOpen:startHacker },
    sudo:        { name:"sudo rm -rf /", icon:"☠️", w:400, h:240, content:sudoContent }
};

// ---------- POP SOUND ----------
function playPop(){
    try{
        var AC = window.AudioContext || window.webkitAudioContext;
        if(!AC) return;
        var ctx = new AC();
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'triangle';
        o.frequency.setValueAtTime(520, ctx.currentTime);
        o.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + .18);
        g.gain.setValueAtTime(.25, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .28);
        o.connect(g); g.connect(ctx.destination);
        o.start(); o.stop(ctx.currentTime + .32);
        var o2 = ctx.createOscillator(), g2 = ctx.createGain();
        o2.type = 'sine'; o2.frequency.value = 1400;
        g2.gain.setValueAtTime(.07, ctx.currentTime);
        g2.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .09);
        o2.connect(g2); g2.connect(ctx.destination);
        o2.start(); o2.stop(ctx.currentTime + .1);
    }catch(e){}
}

// ---------- DOT SCROLLBAR ----------
function makeDotScroll(el, parent, opts){
    if(!el || el.__ds) return;
    el.__ds = true;
    el.classList.add('has-dot');
    parent = parent || el.parentElement;
    if(parent) parent.style.position = 'relative';
    opts = opts || {};
    var track = document.createElement('div');
    track.className = 'dot-track';
    track.style.top = (opts.top || 6) + 'px';
    track.style.bottom = (opts.bottom || 6) + 'px';
    var knob = document.createElement('div');
    knob.className = 'dot-knob';
    track.appendChild(knob);
    if(parent) parent.appendChild(track);
    function update(){
        var sh = el.scrollHeight, ch = el.clientHeight;
        if(sh <= ch + 2){ track.style.display = 'none'; return; }
        track.style.display = 'block';
        var max = sh - ch;
        var ratio = max > 0 ? el.scrollTop / max : 0;
        var tH = track.clientHeight - knob.offsetHeight;
        knob.style.top = Math.max(0, ratio * tH) + 'px';
    }
    el.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    new MutationObserver(update).observe(el, {childList:true, subtree:true, characterData:true});
    update();
    knob.addEventListener('pointerdown', function(e){
        e.preventDefault(); e.stopPropagation();
        var startY = e.clientY;
        function mv(ev){
            var tH = track.clientHeight - knob.offsetHeight;
            var ratio = tH > 0 ? (parseFloat(knob.style.top || 0) + (ev.clientY - startY)) / tH : 0;
            el.scrollTop = Math.max(0, Math.min(1, ratio)) * (el.scrollHeight - el.clientHeight);
        }
        function up(){ window.removeEventListener('pointermove', mv); window.removeEventListener('pointerup', up); }
        window.addEventListener('pointermove', mv);
        window.addEventListener('pointerup', up);
    });
}

// ---------- WINDOW MANAGER ----------
var zTop = 10;
var openWins = {};
function focusWin(win){
    zTop++; win.style.zIndex = zTop;
    var btns = document.querySelectorAll('#tasks button');
    for(var i=0;i<btns.length;i++) btns[i].classList.remove('active');
    var tb = document.querySelector('#tasks button[data-app="' + win.dataset.app + '"]');
    if(tb) tb.classList.add('active');
}
function openApp(id){
    var cfg = APPS[id];
    if(!cfg) return;
    playPop();
    if(openWins[id]){
        var w = openWins[id];
        w.style.display = 'flex';
        focusWin(w);
        return;
    }
    var win = document.createElement('div');
    win.className = 'window'; win.dataset.app = id; win.tabIndex = 0;
    win.style.width = cfg.w + 'px'; win.style.height = cfg.h + 'px';
    var n = Object.keys(openWins).length;
    win.style.left = (70 + (n%6)*45) + 'px';
    win.style.top  = (50 + (n%6)*35) + 'px';
    win.innerHTML = '<div class="titlebar"><span class="win-icon">' + cfg.icon + '</span>' +
        '<span class="title">' + cfg.name + '</span>' +
        '<div class="btn-wrap"><button class="btn min" title="Minimize">–</button>' +
        '<button class="btn close" title="Close">✕</button></div></div>' +
        '<div class="content' + (cfg.term ? ' term-content' : '') + '">' + cfg.content() + '</div>';
    document.getElementById('windows').appendChild(win);
    openWins[id] = win;

    var tb = document.createElement('button');
    tb.textContent = cfg.name; tb.dataset.app = id;
    tb.addEventListener('click', function(){ toggleWin(id); });
    document.getElementById('tasks').appendChild(tb);

    win.querySelector('.close').addEventListener('click', function(e){ e.stopPropagation(); closeApp(id); });
    win.querySelector('.min').addEventListener('click', function(e){ e.stopPropagation(); win.style.display='none'; tb.classList.remove('active'); });
    makeDraggable(win, win.querySelector('.titlebar'));
    win.addEventListener('mousedown', function(){ focusWin(win); });
    tb.classList.add('active');
    focusWin(win);
    if(cfg.onOpen) cfg.onOpen(win);

    if(cfg.term){
        var tout = win.querySelector('.term-out');
        if(tout) makeDotScroll(tout, tout.parentElement, {top:6, bottom:50});
        var hout = win.querySelector('.hack-out');
        if(hout) makeDotScroll(hout, hout.parentElement, {top:6, bottom:46});
    } else {
        var c = win.querySelector('.content');
        if(c) makeDotScroll(c, win, {top:42, bottom:6});
    }
}
function closeApp(id){
    var win = openWins[id];
    if(win) win.remove();
    delete openWins[id];
    var tb = document.querySelector('#tasks button[data-app="' + id + '"]');
    if(tb) tb.remove();
}
function toggleWin(id){
    var win = openWins[id];
    if(!win) return;
    if(win.style.display === 'none'){ playPop(); win.style.display='flex'; focusWin(win); }
    else { win.style.display='none'; }
}
function makeDraggable(win, bar){
    var sx, sy, ox, oy, drag = false;
    bar.addEventListener('pointerdown', function(e){
        if (e.target.closest('button')) return;
        drag = true; sx = e.clientX; sy = e.clientY;
        var r = win.getBoundingClientRect(); ox = r.left; oy = r.top;
        bar.setPointerCapture(e.pointerId);
        e.preventDefault();
    });
    bar.addEventListener('pointermove', function(e){
        if(!drag) return;
        win.style.left = (ox + e.clientX - sx) + 'px';
        win.style.top  = (oy + e.clientY - sy) + 'px';
    });
    bar.addEventListener('pointerup', function(){ drag = false; });
}

// ---------- ORIGINAL ICONS LAGAO ----------
var icons = document.querySelectorAll('.icon');
for(var i=0;i<icons.length;i++){
    (function(ic){
        var ico = ic.querySelector('.ico');
        if(ico && ICONS[ic.dataset.app]) ico.innerHTML = ICONS[ic.dataset.app];
        ic.addEventListener('click', function(){ openApp(ic.dataset.app); });
    })(icons[i]);
}

// ---------- START MENU ----------
var sm = document.getElementById('startmenu');
document.getElementById('start').addEventListener('click', function(e){
    e.stopPropagation();
    sm.style.display = sm.style.display === 'block' ? 'none' : 'block';
});
var smBtns = sm.querySelectorAll('button');
for(var j=0;j<smBtns.length;j++){
    (function(b){ b.addEventListener('click', function(){ openApp(b.dataset.app); sm.style.display='none'; }); })(smBtns[j]);
}
document.addEventListener('click', function(){ sm.style.display = 'none'; });

// ---------- RIGHT CLICK = INSTAGRAM ----------
document.getElementById('desktop').addEventListener('contextmenu', function(e){
    if(e.target.closest('.window')) return;
    e.preventDefault();
    window.open(MY_INSTAGRAM, '_blank');
});

// ---------- CLOCK ----------
function tick(){
    var d = new Date();
    document.getElementById('clock').textContent = d.toLocaleDateString('hi-IN') + ' ' + d.toLocaleTimeString('hi-IN');
}
setInterval(tick, 1000); tick();

// ==================== GATES ====================
// WARNING → FOLLOW GATE → DESKTOP (apps hidden hain, delete nahi)
document.getElementById('warn-enter').addEventListener('click', function(){
    document.getElementById('warning-screen').classList.add('hidden');
    document.getElementById('follow-gate').classList.remove('hidden');
    playPop();
});
document.getElementById('warning-screen').addEventListener('click', function(e){
    if(e.target.id === 'warning-screen'){
        document.getElementById('warning-screen').classList.add('hidden');
        document.getElementById('follow-gate').classList.remove('hidden');
    }
});
document.getElementById('fg-enter').addEventListener('click', function(){
    document.getElementById('follow-gate').classList.add('hidden');
    document.body.classList.add('revealed');
    playPop();
});

// ---------- MOBILE GATE ----------
(function(){
    var gate = document.getElementById('mobile-gate');
    var isMobile = window.innerWidth < 800 || (navigator.maxTouchPoints > 0 && matchMedia('(pointer: coarse)').matches);
    if (isMobile && gate) gate.classList.add('show');
})();

// ---------- FILES APP ----------
function startFiles(win){
    var items = win.querySelectorAll('.f-item');
    for(var i=0;i<items.length;i++){
        (function(item){
            item.addEventListener('click', function(){
                var msg = win.querySelector('#files-msg');
                var f = item.dataset.f;
                if(f === 'flag.txt') msg.innerHTML = '<span class="green-text">🏁 flag{you_found_me}</span>';
                else if(f === 'readme.md') msg.innerHTML = '<span class="blue-text"># Portfolio<br>Terminal me "help" type karo 😎</span>';
                else if(f === 'skills.txt') msg.innerHTML = '<span class="blue-text">Skills: Software Dev, Web Dev, Cybersecurity, Ethical Hacking...</span>';
                else msg.innerHTML = '<span class="red-text">Permission denied (EACCES) - root bhi ro sakta hai 🤷</span>';
            });
        })(items[i]);
    }
}

// ---------- PHOTOS APP ----------
function startPhotos(win){
    var grid = win.querySelector('#photo-grid');
    var preview = win.querySelector('#photo-preview');
    var pimg = win.querySelector('#preview-image');
    var pname = win.querySelector('#preview-name');
    var imageExts = ['.jpg','.jpeg','.png','.gif','.svg','.webp','.bmp'];
    if(!PHOTO_FILES.length){
        grid.innerHTML = '<p class="dim-text">Abhi koi photo nahi. Ye karein:<br><span class="green-text">cp ~/Pictures/photo.jpg photos/</span><br>phir script.js me PHOTO_FILES me naam add karein.</p>';
    }
    PHOTO_FILES.forEach(function(name){
        var ext = name.substring(name.lastIndexOf('.')).toLowerCase();
        var isImg = imageExts.indexOf(ext) !== -1;
        var div = document.createElement('div');
        div.className = 'photo-item';
        div.innerHTML = '<span class="photo-icon">' + (isImg ? '🖼️' : '📄') + '</span><span class="photo-name">' + name + '</span>';
        div.addEventListener('click', function(){
            pimg.innerHTML = isImg
                ? '<img src="photos/' + name + '" style="max-width:400px;max-height:300px;border-radius:8px;border:1px solid #00ff41;">'
                : '<span style="font-size:60px;">📄</span>';
            pname.textContent = name;
            preview.classList.remove('hidden');
        });
        grid.appendChild(div);
    });
    preview.addEventListener('click', function(){ preview.classList.add('hidden'); });
}

// ---------- FIREBOX (Google jaisa - guaranteed kaam) ----------
function startFirebox(win){
    var q = win.querySelector('#fb-q');
    var searchBtn = win.querySelector('#fb-search-btn');
    var lucky = win.querySelector('#fb-lucky');
    var urlBar = win.querySelector('#browser-url');
    var msg = win.querySelector('#fb-msg');
    var iframeWrap = win.querySelector('#fb-iframe-wrap');
    var iframe = win.querySelector('#fb-iframe');
    var hist = [], hi = -1;

    function openInTab(url, label){
        window.open(url, '_blank');
        urlBar.value = url;
        if(msg) msg.innerHTML = '✅ ' + (label || 'Site') + ' naye tab me khul gayi: ' + url;
    }
    function doSearch(){
        var text = q.value.trim();
        if(!text) return;
        var url;
        // Agar space hai ya koi domain nahi → Google search, warna direct site
        if(text.indexOf(' ') !== -1 || text.indexOf('.') === -1){
            url = 'https://www.google.com/search?q=' + encodeURIComponent(text);
        } else {
            url = text.indexOf('http') === 0 ? text : 'https://' + text;
        }
        hist.push(url); hi = hist.length;
        openInTab(url, 'Google Search');
    }
    searchBtn.addEventListener('click', doSearch);
    q.addEventListener('keydown', function(e){ if(e.key === 'Enter') doSearch(); });
    lucky.addEventListener('click', function(){
        var text = q.value.trim();
        var url = text ? 'https://www.google.com/search?q=' + encodeURIComponent(text) + '&btnI=I%27m+Feeling+Lucky' : 'https://www.google.com';
        openInTab(url, 'Lucky Search');
    });

    // Bookmarks
    var links = win.querySelectorAll('.fb-bookmarks .f-item[data-url]');
    for(var i=0;i<links.length;i++){
        (function(item){
            item.addEventListener('click', function(){
                var url = item.dataset.url;
                q.value = url.replace('https://','');
                openInTab(url, item.textContent);
            });
        })(links[i]);
    }

    // Nav buttons: home reset karta hai, back/fwd history
    var navs = win.querySelectorAll('.browser-nav');
    for(var k=0;k<navs.length;k++){
        (function(nv){
            nv.addEventListener('click', function(){
                var act = nv.dataset.nav;
                if(act === 'home'){ q.value = ''; urlBar.value = 'Firebox Home'; if(msg) msg.innerHTML=''; }
                else if(act === 'back'){ if(hi > 0){ hi--; openInTab(hist[hi], ''); } }
                else if(act === 'fwd'){ if(hi < hist.length-1){ hi++; openInTab(hist[hi], ''); } }
            });
        })(navs[k]);
    }
}

// ---------- HACKER TYPER ----------
function startHacker(win){
    var out = win.querySelector('#hack-out');
    var words = ["root@kali","exploit","payload","0x00","0xFF","sudo","nmap","hydra","metasploit","buffer_overflow","reverse_shell","wireshark","crack","bypass","inject","$HOME","/dev/null","nc -lvp 4444","GET /admin","401","200 OK","ACCESS_DENIED","brute_force","kerberoast","lateral_movement","privesc","rooted!"];
    win.addEventListener('keydown', function hk(e){
        if(win.style.display === 'none') return;
        var chunk = "";
        var n = 3 + Math.floor(Math.random()*8);
        for(var i=0;i<n;i++) chunk += ' ' + words[Math.floor(Math.random()*words.length)];
        out.textContent += ' ' + chunk;
        out.scrollTop = out.scrollHeight;
    });
}

// ---------- TERMINAL COMMANDS (koyi bada banner nahi) ----------
var COMMANDS = {
    "help": { desc:"Available commands dikhata hai", run:function(t){
        t.print("<span class='highlight'>Available Commands:</span><br>");
        for(var c in COMMANDS) t.print("  <span class='blue-text'>" + c + "</span>" + Array(15 - c.length).join(' ') + COMMANDS[c].desc);
        t.print("<br><span class='dim-text'>Tip: Tab = autocomplete, Up/Down = history</span>");
    }},
    "whoami": { desc:"Naam aur title", run:function(t){ t.print(MY_NAME + " - " + MY_TITLE); }},
    "about": { desc:"Mere baare mein", run:function(t){
        t.print("<span class='highlight'>=== ABOUT ME ===</span><br>");
        t.print("Hi! Main <span class='pink-text'>" + MY_NAME + "</span> hoon.");
        t.print("<span class='dim-text'>" + MY_TITLE + "</span><br>");
        t.print(MY_SUMMARY + "<br>");
        t.print("Location: " + MY_LOCATION);
    }},
    "skills": { desc:"Skills list karta hai", run:function(t){
        t.print("<span class='highlight'>=== SKILLS ===</span><br>");
        MY_SKILLS.forEach(function(s){ t.print("  <span class='blue-text'>[+]</span> " + s); });
    }},
    "interests": { desc:"Areas of interest", run:function(t){
        t.print("<span class='highlight'>=== AREAS OF INTEREST ===</span><br>");
        MY_INTERESTS.forEach(function(s){ t.print("  <span class='green-text'>[+]</span> " + s); });
    }},
    "projects": { desc:"Projects dikhata hai", run:function(t){
        t.print("<span class='highlight'>=== PROJECTS ===</span><br>");
        MY_PROJECTS.forEach(function(p,i){ t.print("  <span class='green-text'>[" + (i+1) + "]</span> " + p); });
    }},
    "certs": { desc:"Certifications dikhata hai", run:function(t){
        t.print("<span class='highlight'>=== CERTIFICATIONS ===</span><br>");
        MY_CERTS.forEach(function(c){ t.print("  <span class='green-text'>[*]</span> " + c); });
    }},
    "contact": { desc:"Contact details", run:function(t){
        t.print("<span class='highlight'>=== CONTACT ===</span><br>");
        t.print("  📞 Phone:    " + MY_PHONE);
        t.print("  📸 Instagram: <span class='blue-text'>" + MY_INSTAGRAM + "</span>");
        t.print("  💼 LinkedIn:  <span class='blue-text'>" + MY_LINKEDIN + "</span>");
        t.print("  🐙 GitHub:    <span class='blue-text'>" + MY_GITHUB + "</span>");
    }},
    "neofetch": { desc:"System info (ASCII art)", run:function(t){
        var nf = [
"        ▄▄▄▄▄▄▄▄▄▄▄        <span class='pink-text'>" + USER + "@kali</span>",
"      ▄█████████████▄      <span class='dim-text'>-------------</span>",
"    ▄███▓▓▓▓▓▓▓▓▓███▄     <span class='blue-text'>OS:</span>       Kali Portfolio 2026.1",
"  ▄███▓▓▓▓▓▓▓▓▓▓▓▓███▄   <span class='blue-text'>Host:</span>     My Portfolio Machine",
"▄███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███▄  <span class='blue-text'>Kernel:</span>   6.6.0-kali1-amd64",
"███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███  <span class='blue-text'>Uptime:</span>   Always On",
"███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███  <span class='blue-text'>Shell:</span>    bash 5.2.15",
"███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███  <span class='blue-text'>DE:</span>       Portfolio Desktop",
"▀███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███▀  <span class='blue-text'>WM:</span>       HackerWM",
"  ▀███▓▓▓▓▓▓▓▓▓▓▓▓███▀   <span class='blue-text'>CPU:</span>      Your Brain (∞ cores)",
"    ▀███▓▓▓▓▓▓▓▓▓███▀    <span class='blue-text'>Memory:</span>   Unlimited",
"      ▀█████████████▀     <span class='blue-text'>Name:</span>     " + MY_NAME,
"        ▀▀▀▀▀▀▀▀▀▀▀"
        ].join("\n");
        t.print("<span class='ascii'>" + nf + "</span>");
    }},
    "ls": { desc:"Files dikhata hai", run:function(t){
        t.print("<span class='dim-text'>total 24</span>");
        t.print("<span class='blue-text'>drwxr-xr-x</span> root root  4096 Jul 21 10:00 <span class='blue-text'>photos/</span>");
        t.print("<span class='blue-text'>-rw-r--r--</span> root root   512 Jul 21 10:00 skills.txt");
        t.print("<span class='blue-text'>-rw-r--r--</span> root root   256 Jul 21 10:00 contact.md");
        t.print("<span class='blue-text'>-rwxr-xr-x</span> root root  1024 Jul 21 10:00 about.sh");
        t.print("<span class='blue-text'>-rw-r--r--</span> root root    13 Jul 21 10:00 flag.txt");
        t.print("<br><span class='dim-text'>Try: cat flag.txt</span>");
    }},
    "cat": { desc:"File content (cat flag.txt)", run:function(t, arg){
        if(arg === 'flag.txt') t.print("<span class='green-text'>🏁 flag{portfolio_complete}</span>");
        else if(arg === 'skills.txt') MY_SKILLS.forEach(function(s){ t.print("  <span class='blue-text'>[+]</span> " + s); });
        else if(arg === 'about.sh') t.print("<span class='dim-text'>#!/bin/bash<br>echo 'Main ek security researcher hoon!'</span>");
        else if(arg === 'contact.md') t.print("# Contact\n" + MY_PHONE + "\n" + MY_GITHUB);
        else t.print("<span class='red-text'>cat: " + (arg || '??? ') + ": No such file or directory</span>");
    }},
    "hack": { desc:"Hacking simulation", run:function(t){
        var steps = ["Initializing exploit...","Bypassing firewall...","Injecting payload...","Brute forcing password...","Accessing root shell..."];
        steps.forEach(function(s,i){
            setTimeout(function(){
                var done = new Array(i+2).join('■');
                var left = new Array(5-i).join('□');
                t.print("<span class='dim-text'>[" + done + left + "]</span> " + s);
            }, i*500);
        });
        setTimeout(function(){ t.print("<span class='green-text'>ACCESS GRANTED - Welcome to the matrix, root. 😎</span>"); }, steps.length*500+300);
    }},
    "date": { desc:"Aaj ki date/time", run:function(t){ t.print(new Date().toString()); }},
    "clear": { desc:"Terminal clear karta hai", run:function(t){ t.clear(); }},
    "exit": { desc:"Terminal band karta hai", run:function(t){
        t.print("<span class='dim-text'>logout</span>");
        setTimeout(function(){ closeApp('terminal'); }, 400);
    }},
    "sudo": { desc:"Joke 😄", run:function(t){
        t.print("<span class='red-text'>Nice try! Is portfolio me sudo nahi chalta. 😄</span>");
        t.print("<span class='dim-text'>(Aap already root ho!)</span>");
    }}
};

function startTerminal(win){
    var out = win.querySelector('.term-out');
    var input = win.querySelector('.term-cmd');
    var promptEl = win.querySelector('.prompt');
    var t = {
        print: function(text){
            var d = document.createElement('div');
            d.innerHTML = text;
            out.appendChild(d);
            out.scrollTop = out.scrollHeight;
        },
        clear: function(){ out.innerHTML = ''; }
    };
    var hist = [], hi = -1;

    var d = new Date();
    t.print("<span class='dim-text'>Last login: " + d.toLocaleString('hi-IN') + " on tty1</span>");
    t.print("<span class='dim-text'>Type <span class='blue-text'>help</span> to see commands.</span><br>");

    input.addEventListener('keydown', function(e){
        if(e.key === 'Enter'){
            var cmd = input.value.trim().toLowerCase();
            t.print(promptEl.textContent + ' ' + input.value);
            input.value = '';
            if(cmd){
                hist.push(cmd); hi = hist.length;
                var parts = cmd.split(/\s+/);
                var base = parts[0], arg = parts.slice(1).join(' ');
                if(COMMANDS[base]) COMMANDS[base].run(t, arg);
                else t.print("<span class='red-text'>bash: " + base + ": command not found</span>");
            }
            t.print('');
        } else if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(hi > 0){ hi--; input.value = hist[hi]; }
        } else if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(hi < hist.length-1){ hi++; input.value = hist[hi]; }
            else { hi = hist.length; input.value = ''; }
        } else if(e.key === 'Tab'){
            e.preventDefault();
            var partial = input.value.toLowerCase();
            var matches = Object.keys(COMMANDS).filter(function(c){ return c.indexOf(partial) === 0; });
            if(matches.length === 1) input.value = matches[0];
            else if(matches.length > 1) t.print('  ' + matches.join('  '));
        }
    });
    setTimeout(function(){ input.focus(); }, 100);
}
