/**
 * RideQuest - Isometric Diorama Game Engine (AAA Visual Standard)
 * Senior Unreal Engine Game Design & Technical Art Direction
 *
 * Implements 2.5D/3D character-driven, animated miniature game worlds across all 24 System Design levels.
 * Replaces text dashboards with rich living dioramas, animated infrastructure, and visual cause-and-effect.
 *
 * GUARANTEES:
 * 1. Initial State (choice === null): Animates the real-world problem and bottleneck.
 * 2. Optimal Solution (choice.isOptimal === true): Visually demonstrates the working solution in action.
 * 3. Specific Incorrect Choice (choice.isOptimal === false): Animates the exact consequences of THAT specific option.
 */

var DioramaEngine;
(function (root, factory) {
  var instance = factory();
  DioramaEngine = instance;
  if (typeof module === 'object' && module.exports) {
    module.exports = instance;
  }
  if (root) {
    root.DioramaEngine = instance;
  }
  if (typeof window !== 'undefined') {
    window.DioramaEngine = instance;
  }
  if (typeof global !== 'undefined') {
    global.DioramaEngine = instance;
  }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this), function () {

  const DioramaEngine = {
    // Stage Wrapper with HUD Overlay & Contextual Footers
    wrapScene({ theme = 'day', badgeText, badgeType = 'problem', telemetryText = '', footerIcon = '', footerTitle = '', footerDesc = '', svgContent = '' }) {
      const hudBadgeClass = badgeType === 'solution' ? 'hud-solution' : (badgeType === 'warning' ? 'hud-warning' : 'hud-problem');
      const footerClass = badgeType === 'solution' ? 'footer-success' : (badgeType === 'problem' ? 'footer-danger' : 'footer-warning');
      const skyThemeClass = 'diorama-sky-' + theme;

      return '<div class=\"diorama-stage-container ' + skyThemeClass + '\">' +
        '<div class=\"diorama-hud-top\">' +
          '<span class=\"diorama-hud-badge ' + hudBadgeClass + '\">' + badgeText + '</span>' +
          (telemetryText ? '<span class=\"diorama-hud-telemetry\">' + telemetryText + '</span>' : '') +
        '</div>' +
        '<div class=\"diorama-viewport\">' +
          '<svg class=\"diorama-svg-world\" viewBox=\"0 0 640 400\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\">' +
            '<defs>' +
              '<radialGradient id=\"sunGlow\" cx=\"50%\" cy=\"30%\" r=\"60%\">' +
                '<stop offset=\"0%\" stop-color=\"#fff8e7\" stop-opacity=\"0.35\"/>' +
                '<stop offset=\"100%\" stop-color=\"#fff8e7\" stop-opacity=\"0\"/>' +
              '</radialGradient>' +
              '<radialGradient id=\"stormGlow\" cx=\"50%\" cy=\"30%\" r=\"70%\">' +
                '<stop offset=\"0%\" stop-color=\"#1e293b\" stop-opacity=\"0.8\"/>' +
                '<stop offset=\"100%\" stop-color=\"#090d16\" stop-opacity=\"0.95\"/>' +
              '</radialGradient>' +
              '<radialGradient id=\"headlightCone\" cx=\"0%\" cy=\"50%\" r=\"100%\">' +
                '<stop offset=\"0%\" stop-color=\"#fff9d6\" stop-opacity=\"0.6\"/>' +
                '<stop offset=\"100%\" stop-color=\"#fff9d6\" stop-opacity=\"0\"/>' +
              '</radialGradient>' +
              '<linearGradient id=\"taxiGold\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">' +
                '<stop offset=\"0%\" stop-color=\"#fcd34d\"/>' +
                '<stop offset=\"60%\" stop-color=\"#f59e0b\"/>' +
                '<stop offset=\"100%\" stop-color=\"#d97706\"/>' +
              '</linearGradient>' +
              '<linearGradient id=\"windshieldGlass\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">' +
                '<stop offset=\"0%\" stop-color=\"#bae6fd\" stop-opacity=\"0.9\"/>' +
                '<stop offset=\"60%\" stop-color=\"#38bdf8\" stop-opacity=\"0.75\"/>' +
                '<stop offset=\"100%\" stop-color=\"#0284c7\" stop-opacity=\"0.9\"/>' +
              '</linearGradient>' +
            '</defs>' +
            svgContent +
          '</svg>' +
        '</div>' +
        (footerTitle ? '<div class=\"diorama-debrief-card ' + footerClass + '\">' +
          '<div class=\"debrief-icon\">' + footerIcon + '</div>' +
          '<div class=\"debrief-body\">' +
            '<div class=\"debrief-title\">' + footerTitle + '</div>' +
            '<div class=\"debrief-desc\">' + footerDesc + '</div>' +
          '</div>' +
        '</div>' : '') +
      '</div>';
    },

    // =========================================================================
    // AAA REUSABLE 3D ASSETS & PROCEDURAL DIORAMA PRIMITIVES
    // =========================================================================

    renderGrid(cols, rows, ox = 320, oy = 110, theme = 'city') {
      const tw = 46;
      const th = 23;
      let tiles = '';

      let fill1 = '#1a2332', fill2 = '#161e2b', lineCol = '#253549', edgeFill = '#0e141d';
      if (theme === 'day') {
        fill1 = '#2d3748'; fill2 = '#232c3b'; lineCol = '#3f4f68'; edgeFill = '#171f2b';
      } else if (theme === 'storm') {
        fill1 = '#151d28'; fill2 = '#101620'; lineCol = '#1f2b3c'; edgeFill = '#0a0d14';
      } else if (theme === 'vault') {
        fill1 = '#1c1917'; fill2 = '#141210'; lineCol = '#292524'; edgeFill = '#0c0a09';
      } else if (theme === 'airport') {
        fill1 = '#1e293b'; fill2 = '#172033'; lineCol = '#334155'; edgeFill = '#0f172a';
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = ox + (c - r) * (tw / 2);
          const y = oy + (c + r) * (th / 2);
          const f = (r + c) % 2 === 0 ? fill1 : fill2;
          tiles += '<polygon points=\"' + x + ',' + y + ' ' + (x + tw/2) + ',' + (y + th/2) + ' ' + x + ',' + (y + th) + ' ' + (x - tw/2) + ',' + (y + th/2) + '\" fill=\"' + f + '\" stroke=\"' + lineCol + '\" stroke-width=\"0.8\"/>';
        }
      }

      const bTip = oy + (cols + rows) * (th / 2);
      return '<g class=\"iso-grid-base\">' +
        '<ellipse cx=\"' + ox + '\" cy=\"' + (bTip + 16) + '\" rx=\"' + ((cols + rows) * 16) + '\" ry=\"26\" fill=\"rgba(0,0,0,0.35)\" filter=\"blur(8px)\"/>' +
        tiles +
        '<path d=\"M' + (ox - rows * (tw / 2)) + ',' + (oy + rows * (th / 2)) + ' L' + ox + ',' + bTip + ' L' + ox + ',' + (bTip + 16) + ' L' + (ox - rows * (tw / 2)) + ',' + (oy + rows * (th / 2) + 16) + ' Z\" fill=\"' + edgeFill + '\"/>' +
        '<path d=\"M' + ox + ',' + bTip + ' L' + (ox + cols * (tw / 2)) + ',' + (oy + cols * (th / 2)) + ' L' + (ox + cols * (tw / 2)) + ',' + (oy + cols * (th / 2) + 16) + ' L' + ox + ',' + (bTip + 16) + ' Z\" fill=\"' + edgeFill + '\" opacity=\"0.85\"/>' +
      '</g>';
    },

    renderRoad(x1, y1, x2, y2, width = 36) {
      return '<g class=\"iso-road\">' +
        '<line x1=\"' + x1 + '\" y1=\"' + y1 + '\" x2=\"' + x2 + '\" y2=\"' + y2 + '\" stroke=\"#0f172a\" stroke-width=\"' + (width + 4) + '\" stroke-linecap=\"round\"/>' +
        '<line x1=\"' + x1 + '\" y1=\"' + y1 + '\" x2=\"' + x2 + '\" y2=\"' + y2 + '\" stroke=\"#1e293b\" stroke-width=\"' + width + '\" stroke-linecap=\"round\"/>' +
        '<line x1=\"' + x1 + '\" y1=\"' + y1 + '\" x2=\"' + x2 + '\" y2=\"' + y2 + '\" stroke=\"#f8fafc\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"8,10\" opacity=\"0.85\"/>' +
      '</g>';
    },

    renderPassenger(x, y, state = 'idle', mood = 'normal', color = '#e67e22', label = '') {
      let moodMark = '';
      if (mood === 'waiting') {
        moodMark = '<circle cx=\"' + (x + 11) + '\" cy=\"' + (y - 32) + '\" r=\"6.5\" fill=\"#ef4444\" stroke=\"#fff\" stroke-width=\"1.2\"/><text x=\"' + (x + 11) + '\" y=\"' + (y - 28) + '\" text-anchor=\"middle\" font-size=\"9\" fill=\"#fff\" font-weight=\"900\">!</text>';
      } else if (mood === 'happy') {
        moodMark = '<circle cx=\"' + (x + 11) + '\" cy=\"' + (y - 32) + '\" r=\"6.5\" fill=\"#22c55e\" stroke=\"#fff\" stroke-width=\"1.2\"/><text x=\"' + (x + 11) + '\" y=\"' + (y - 28) + '\" text-anchor=\"middle\" font-size=\"9\" fill=\"#fff\" font-weight=\"900\">★</text>';
      } else if (mood === 'angry') {
        moodMark = '<circle cx=\"' + (x + 11) + '\" cy=\"' + (y - 32) + '\" r=\"6.5\" fill=\"#dc2626\" stroke=\"#fff\" stroke-width=\"1.2\"/><text x=\"' + (x + 11) + '\" y=\"' + (y - 28) + '\" text-anchor=\"middle\" font-size=\"9\" fill=\"#fff\" font-weight=\"900\">✕</text>';
      }

      return '<g class=\"iso-passenger ' + state + '\">' +
        '<ellipse cx=\"' + x + '\" cy=\"' + (y + 1) + '\" rx=\"8\" ry=\"4\" fill=\"rgba(0,0,0,0.3)\"/>' +
        '<line x1=\"' + (x - 2.5) + '\" y1=\"' + (y - 1) + '\" x2=\"' + (x - 2.5) + '\" y2=\"' + (y - 9) + '\" stroke=\"#1e293b\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>' +
        '<line x1=\"' + (x + 2.5) + '\" y1=\"' + (y - 1) + '\" x2=\"' + (x + 2.5) + '\" y2=\"' + (y - 9) + '\" stroke=\"#1e293b\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>' +
        '<rect x=\"' + (x - 5.5) + '\" y=\"' + (y - 21) + '\" width=\"11\" height=\"13\" rx=\"3\" fill=\"' + color + '\"/>' +
        '<path d=\"M' + (x - 4) + ' ' + (y - 18) + ' L' + (x + 3) + ' ' + (y - 14) + ' L' + (x + 6) + ' ' + (y - 16) + '\" stroke=\"' + color + '\" stroke-width=\"2.4\" stroke-linecap=\"round\" fill=\"none\"/>' +
        '<rect x=\"' + (x + 4) + '\" y=\"' + (y - 20) + '\" width=\"4.5\" height=\"8\" rx=\"1.2\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"0.8\"/>' +
        '<rect x=\"' + (x + 4.8) + '\" y=\"' + (y - 19) + '\" width=\"3\" height=\"6\" rx=\"0.6\" fill=\"' + (mood === 'angry' ? '#ef4444' : '#22c55e') + '\"/>' +
        '<circle cx=\"' + x + '\" cy=\"' + (y - 26) + '\" r=\"5.5\" fill=\"#fed7aa\"/>' +
        '<path d=\"M' + (x - 5) + ' ' + (y - 29) + ' C' + (x - 5) + ' ' + (y - 34) + ' ' + (x + 5) + ' ' + (y - 34) + ' ' + (x + 5) + ' ' + (y - 29) + ' Z\" fill=\"#451a03\"/>' +
        (state === 'requesting' ? '<circle cx=\"' + (x + 6) + '\" cy=\"' + (y - 16) + '\" r=\"4\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"1.8\" class=\"iso-phone-ping\"/><circle cx=\"' + (x + 6) + '\" cy=\"' + (y - 16) + '\" r=\"11\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"1.2\" opacity=\"0.6\" class=\"iso-phone-ping-delay\"/>' : '') +
        moodMark +
        (label ? '<text x=\"' + x + '\" y=\"' + (y + 13) + '\" text-anchor=\"middle\" font-size=\"9\" font-family=\"sans-serif\" font-weight=\"800\" fill=\"#f8fafc\" stroke=\"#0f172a\" stroke-width=\"2\" paint-order=\"stroke fill\">' + label + '</text>' : '') +
      '</g>';
    },

    renderCab(x, y, state = 'idle', label = 'Ola Cab', isMoving = false) {
      return '<g class=\"iso-cab ' + state + ' ' + (isMoving ? 'cab-driving-anim' : '') + '\">' +
        '<ellipse cx=\"' + x + '\" cy=\"' + (y + 5) + '\" rx=\"22\" ry=\"11\" fill=\"rgba(0,0,0,0.4)\" filter=\"blur(2px)\"/>' +
        '<polygon points=\"' + (x + 14) + ',' + (y - 2) + ' ' + (x + 52) + ',' + (y - 12) + ' ' + (x + 42) + ',' + (y + 12) + ' ' + (x + 8) + ',' + (y + 6) + '\" fill=\"url(#headlightCone)\" opacity=\"0.8\"/>' +
        '<ellipse cx=\"' + (x - 12) + '\" cy=\"' + (y + 6) + '\" rx=\"4\" ry=\"2.5\" fill=\"#0f172a\"/>' +
        '<ellipse cx=\"' + (x + 10) + '\" cy=\"' + (y + 8) + '\" rx=\"4\" ry=\"2.5\" fill=\"#0f172a\"/>' +
        '<polygon points=\"' + (x - 18) + ',' + (y - 4) + ' ' + x + ',' + (y - 13) + ' ' + (x + 18) + ',' + (y - 4) + ' ' + x + ',' + (y + 6) + '\" fill=\"url(#taxiGold)\"/>' +
        '<polygon points=\"' + (x - 18) + ',' + (y - 4) + ' ' + x + ',' + (y + 6) + ' ' + x + ',' + (y + 12) + ' ' + (x - 18) + ',' + (y + 2) + '\" fill=\"#b45309\"/>' +
        '<polygon points=\"' + x + ',' + (y + 6) + ' ' + (x + 18) + ',' + (y - 4) + ' ' + (x + 18) + ',' + (y + 2) + ' ' + x + ',' + (y + 12) + '\" fill=\"#f59e0b\"/>' +
        '<polygon points=\"' + (x - 17) + ',' + (y + 1) + ' ' + x + ',' + (y + 9) + ' ' + x + ',' + (y + 11) + ' ' + (x - 17) + ',' + (y + 3) + '\" fill=\"#0f172a\"/>' +
        '<polygon points=\"' + x + ',' + (y + 9) + ' ' + (x + 17) + ',' + (y + 1) + ' ' + (x + 17) + ',' + (y + 3) + ' ' + x + ',' + (y + 11) + '\" fill=\"#0f172a\"/>' +
        '<polygon points=\"' + (x - 10) + ',' + (y - 10) + ' ' + x + ',' + (y - 16) + ' ' + (x + 10) + ',' + (y - 10) + ' ' + x + ',' + (y - 5) + '\" fill=\"#f59e0b\"/>' +
        '<polygon points=\"' + (x - 9) + ',' + (y - 9) + ' ' + x + ',' + (y - 14) + ' ' + x + ',' + (y - 6) + ' ' + (x - 9) + ',' + (y - 3) + '\" fill=\"url(#windshieldGlass)\"/>' +
        '<polygon points=\"' + x + ',' + (y - 14) + ' ' + (x + 9) + ',' + (y - 9) + ' ' + (x + 9) + ',' + (y - 3) + ' ' + x + ',' + (y - 6) + '\" fill=\"url(#windshieldGlass)\"/>' +
        '<polygon points=\"' + (x - 4) + ',' + (y - 17) + ' ' + x + ',' + (y - 19) + ' ' + (x + 4) + ',' + (y - 17) + ' ' + x + ',' + (y - 15) + '\" fill=\"#ffffff\"/>' +
        '<circle cx=\"' + x + '\" cy=\"' + (y - 16) + '\" r=\"1.5\" fill=\"#22c55e\"/>' +
        '<circle cx=\"' + (x + 15) + '\" cy=\"' + (y - 2) + '\" r=\"1.8\" fill=\"#fff\"/>' +
        '<circle cx=\"' + (x + 7) + '\" cy=\"' + (y + 5) + '\" r=\"1.8\" fill=\"#fff\"/>' +
        '<circle cx=\"' + (x - 16) + '\" cy=\"' + (y - 1) + '\" r=\"1.5\" fill=\"#ef4444\"/>' +
        (label ? '<text x=\"' + x + '\" y=\"' + (y + 22) + '\" text-anchor=\"middle\" font-size=\"9\" font-family=\"sans-serif\" font-weight=\"800\" fill=\"#f8fafc\" stroke=\"#0f172a\" stroke-width=\"2\" paint-order=\"stroke fill\">' + label + '</text>' : '') +
      '</g>';
    },

    renderAuto(x, y, state = 'idle', label = 'Ola Auto') {
      return '<g class=\"iso-auto ' + state + '\">' +
        '<ellipse cx=\"' + x + '\" cy=\"' + (y + 4) + '\" rx=\"18\" ry=\"9\" fill=\"rgba(0,0,0,0.35)\"/>' +
        '<polygon points=\"' + (x - 14) + ',' + (y - 2) + ' ' + x + ',' + (y - 10) + ' ' + (x + 14) + ',' + (y - 2) + ' ' + x + ',' + (y + 7) + '\" fill=\"#15803d\"/>' +
        '<polygon points=\"' + (x - 14) + ',' + (y - 2) + ' ' + x + ',' + (y + 7) + ' ' + x + ',' + (y + 12) + ' ' + (x - 14) + ',' + (y + 3) + '\" fill=\"#166534\"/>' +
        '<polygon points=\"' + x + ',' + (y + 7) + ' ' + (x + 14) + ',' + (y - 2) + ' ' + (x + 14) + ',' + (y + 3) + ' ' + x + ',' + (y + 12) + '\" fill=\"#15803d\"/>' +
        '<polygon points=\"' + (x - 11) + ',' + (y - 10) + ' ' + x + ',' + (y - 17) + ' ' + (x + 11) + ',' + (y - 10) + ' ' + x + ',' + (y - 4) + '\" fill=\"#facc15\"/>' +
        '<polygon points=\"' + (x - 11) + ',' + (y - 10) + ' ' + x + ',' + (y - 4) + ' ' + x + ',' + (y - 2) + ' ' + (x - 11) + ',' + (y - 8) + '\" fill=\"#ca8a04\"/>' +
        '<polygon points=\"' + x + ',' + (y - 4) + ' ' + (x + 11) + ',' + (y - 10) + ' ' + (x + 11) + ',' + (y - 8) + ' ' + x + ',' + (y - 2) + '\" fill=\"#eab308\"/>' +
        '<polygon points=\"' + (x - 8) + ',' + (y - 8) + ' ' + x + ',' + (y - 13) + ' ' + x + ',' + (y - 5) + ' ' + (x - 8) + ',' + (y - 2) + '\" fill=\"#bae6fd\" opacity=\"0.8\"/>' +
        '<circle cx=\"' + (x + 13) + '\" cy=\"' + (y - 1) + '\" r=\"2\" fill=\"#fff\"/>' +
        (label ? '<text x=\"' + x + '\" y=\"' + (y + 21) + '\" text-anchor=\"middle\" font-size=\"9\" font-family=\"sans-serif\" font-weight=\"800\" fill=\"#f8fafc\" stroke=\"#0f172a\" stroke-width=\"2\" paint-order=\"stroke fill\">' + label + '</text>' : '') +
      '</g>';
    },

    renderServerRack(x, y, name = 'Server A', status = 'healthy', cpu = '33%', temp = '45°C') {
      const isHot = status === 'overheated' || status === 'crashing';
      const isIdle = status === 'idle';
      const rackFill = isHot ? '#450a0a' : (isIdle ? '#1e293b' : '#0f172a');
      const rackFront = isHot ? '#7f1d1d' : (isIdle ? '#334155' : '#1e293b');
      const rackTop = isHot ? '#991b1b' : (isIdle ? '#475569' : '#334155');
      const ledColor = isHot ? '#ef4444' : (isIdle ? '#94a3b8' : '#22c55e');

      let units = '';
      for (let i = 0; i < 4; i++) {
        const sy = y - 34 + (i * 12);
        units += '<polygon points=\"' + (x + 2) + ',' + sy + ' ' + (x + 22) + ',' + (sy - 10) + ' ' + (x + 22) + ',' + (sy - 4) + ' ' + (x + 2) + ',' + (sy + 6) + '\" fill=\"#090d14\"/>' +
          '<circle cx=\"' + (x + 5) + '\" cy=\"' + (y - 33 + i * 12) + '\" r=\"1.4\" fill=\"' + ledColor + '\" class=\"' + (isHot ? 'led-rapid' : 'led-pulse') + '\"/>' +
          '<circle cx=\"' + (x + 9) + '\" cy=\"' + (y - 35 + i * 12) + '\" r=\"1.4\" fill=\"' + ledColor + '\" class=\"' + (isHot ? 'led-rapid' : 'led-pulse') + '\"/>';
      }

      return '<g class=\"iso-server-rack ' + status + '\">' +
        '<ellipse cx=\"' + x + '\" cy=\"' + (y + 17) + '\" rx=\"28\" ry=\"14\" fill=\"rgba(0,0,0,0.38)\"/>' +
        (isHot ? '<ellipse cx=\"' + x + '\" cy=\"' + (y - 12) + '\" rx=\"32\" ry=\"46\" fill=\"#ef4444\" opacity=\"0.35\" class=\"heat-glow\"/><circle cx=\"' + (x - 5) + '\" cy=\"' + (y - 38) + '\" r=\"8\" fill=\"#64748b\" opacity=\"0.75\" class=\"smoke-trail-1\"/><circle cx=\"' + (x + 6) + '\" cy=\"' + (y - 48) + '\" r=\"11\" fill=\"#475569\" opacity=\"0.6\" class=\"smoke-trail-2\"/>' : '') +
        '<polygon points=\"' + (x - 24) + ',' + (y + 6) + ' ' + x + ',' + (y + 18) + ' ' + x + ',' + (y - 42) + ' ' + (x - 24) + ',' + (y - 54) + '\" fill=\"' + rackFill + '\" stroke=\"#0b1017\" stroke-width=\"1.2\"/>' +
        '<polygon points=\"' + x + ',' + (y + 18) + ' ' + (x + 24) + ',' + (y + 6) + ' ' + (x + 24) + ',' + (y - 54) + ' ' + x + ',' + (y - 42) + '\" fill=\"' + rackFront + '\" stroke=\"#0b1017\" stroke-width=\"1.2\"/>' +
        '<polygon points=\"' + (x - 24) + ',' + (y - 54) + ' ' + x + ',' + (y - 42) + ' ' + (x + 24) + ',' + (y - 54) + ' ' + x + ',' + (y - 66) + '\" fill=\"' + rackTop + '\" stroke=\"#0b1017\" stroke-width=\"1.2\"/>' +
        units +
        '<g transform=\"translate(' + (x - 12) + ', ' + (y - 24) + ')\"><ellipse cx=\"0\" cy=\"0\" rx=\"7\" ry=\"11\" fill=\"#090d14\"/><path d=\"M-5,-4 L5,4 M-4,5 L4,-5\" stroke=\"' + (isHot ? '#ef4444' : '#64748b') + '\" stroke-width=\"1.8\" class=\"' + (isHot ? 'fan-spin-hyper' : 'fan-spin') + '\"/></g>' +
        '<g transform=\"translate(' + x + ', ' + (y + 32) + ')\"><rect x=\"-36\" y=\"-4\" width=\"72\" height=\"26\" rx=\"6\" fill=\"#0f172a\" stroke=\"' + (isHot ? '#ef4444' : '#334155') + '\" stroke-width=\"1.5\"/><text x=\"0\" y=\"8\" text-anchor=\"middle\" font-size=\"9\" font-family=\"sans-serif\" font-weight=\"800\" fill=\"#f8fafc\">' + name + '</text><text x=\"0\" y=\"18\" text-anchor=\"middle\" font-size=\"8\" font-family=\"monospace\" font-weight=\"700\" fill=\"' + (isHot ? '#f87171' : '#4ade80') + '\">' + cpu + ' • ' + temp + '</text></g>' +
      '</g>';
    },

    renderDataCenter(x, y, name = 'North DC', status = 'online') {
      const isOnline = status === 'online';
      const isIsolated = status === 'isolated';
      const winCol = isOnline ? '#22c55e' : (isIsolated ? '#ef4444' : '#f59e0b');

      let windows = '';
      [-34, -20, -6, 8].forEach(ry => {
        windows += '<line x1=\"' + (x - 22) + '\" y1=\"' + (y + ry - 11) + '\" x2=\"' + (x - 6) + '\" y2=\"' + (y + ry - 3) + '\" stroke=\"' + winCol + '\" stroke-width=\"2.5\" opacity=\"0.9\"/>' +
          '<line x1=\"' + (x + 6) + '\" y1=\"' + (y + ry - 3) + '\" x2=\"' + (x + 22) + '\" y2=\"' + (y + ry - 11) + '\" stroke=\"' + winCol + '\" stroke-width=\"2.5\" opacity=\"0.95\"/>';
      });

      return '<g class=\"iso-datacenter ' + status + '\">' +
        '<ellipse cx=\"' + x + '\" cy=\"' + (y + 22) + '\" rx=\"36\" ry=\"18\" fill=\"rgba(0,0,0,0.45)\"/>' +
        '<polygon points=\"' + (x - 28) + ',' + (y + 6) + ' ' + x + ',' + (y + 20) + ' ' + x + ',' + (y - 46) + ' ' + (x - 28) + ',' + (y - 60) + '\" fill=\"#1e293b\" stroke=\"#0f172a\" stroke-width=\"1.8\"/>' +
        '<polygon points=\"' + x + ',' + (y + 20) + ' ' + (x + 28) + ',' + (y + 6) + ' ' + (x + 28) + ',' + (y - 60) + ' ' + x + ',' + (y - 46) + '\" fill=\"#334155\" stroke=\"#0f172a\" stroke-width=\"1.8\"/>' +
        '<polygon points=\"' + (x - 28) + ',' + (y - 60) + ' ' + x + ',' + (y - 46) + ' ' + (x + 28) + ',' + (y - 60) + ' ' + x + ',' + (y - 74) + '\" fill=\"#475569\" stroke=\"#0f172a\" stroke-width=\"1.8\"/>' +
        windows +
        '<rect x=\"' + (x - 10) + '\" y=\"' + (y - 70) + '\" width=\"20\" height=\"8\" rx=\"2\" fill=\"#1e293b\" stroke=\"#0f172a\"/>' +
        '<g transform=\"translate(' + x + ', ' + (y + 36) + ')\"><rect x=\"-42\" y=\"-4\" width=\"84\" height=\"25\" rx=\"6\" fill=\"#0f172a\" stroke=\"' + winCol + '\" stroke-width=\"1.8\"/><text x=\"0\" y=\"8\" text-anchor=\"middle\" font-size=\"9\" font-family=\"sans-serif\" font-weight=\"800\" fill=\"#ffffff\">' + name + '</text><text x=\"0\" y=\"17\" text-anchor=\"middle\" font-size=\"8\" font-family=\"sans-serif\" font-weight=\"800\" fill=\"' + winCol + '\">' + status.toUpperCase() + '</text></g>' +
      '</g>';
    },

    renderLoadBalancerTower(x, y, active = true, algorithm = 'Round Robin') {
      return '<g class=\"iso-lb-tower\">' +
        '<ellipse cx=\"' + x + '\" cy=\"' + (y + 20) + '\" rx=\"32\" ry=\"16\" fill=\"rgba(0,0,0,0.32)\"/>' +
        '<polygon points=\"' + (x - 22) + ',' + (y + 8) + ' ' + x + ',' + (y + 19) + ' ' + (x + 22) + ',' + (y + 8) + ' ' + (x + 22) + ',' + (y - 3) + ' ' + x + ',' + (y - 14) + ' ' + (x - 22) + ',' + (y - 3) + '\" fill=\"#1e293b\"/>' +
        '<polygon points=\"' + (x - 11) + ',' + (y - 3) + ' ' + x + ',' + (y + 4) + ' ' + (x + 11) + ',' + (y - 3) + ' ' + (x + 11) + ',' + (y - 36) + ' ' + x + ',' + (y - 29) + ' ' + (x - 11) + ',' + (y - 36) + '\" fill=\"#334155\"/>' +
        '<ellipse cx=\"' + x + '\" cy=\"' + (y - 29) + '\" rx=\"15\" ry=\"7.5\" fill=\"#0891b2\" stroke=\"#06b6d4\" stroke-width=\"2\" class=\"' + (active ? 'core-pulse' : '') + '\"/>' +
        '<g transform=\"translate(' + x + ', ' + (y - 42) + ')\" class=\"' + (active ? 'radar-sweep-anim' : '') + '\"><ellipse cx=\"0\" cy=\"0\" rx=\"14\" ry=\"7\" fill=\"#22d3ee\" opacity=\"0.85\"/><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-16\" stroke=\"#0891b2\" stroke-width=\"2.5\"/><circle cx=\"0\" cy=\"-16\" r=\"3\" fill=\"#67e8f9\"/></g>' +
        '<g transform=\"translate(' + x + ', ' + (y + 46) + ')\"><rect x=\"-48\" y=\"-5\" width=\"96\" height=\"27\" rx=\"6\" fill=\"#0891b2\" stroke=\"#67e8f9\" stroke-width=\"1.2\"/><text x=\"0\" y=\"7\" text-anchor=\"middle\" font-size=\"9\" font-family=\"sans-serif\" font-weight=\"900\" fill=\"#ffffff\">LOAD BALANCER</text><text x=\"0\" y=\"18\" text-anchor=\"middle\" font-size=\"8\" font-family=\"sans-serif\" font-weight=\"700\" fill=\"#cffafe\">' + algorithm + '</text></g>' +
      '</g>';
    },

    renderCacheObelisk(x, y, active = true) {
      return '<g class=\"iso-cache-obelisk\">' +
        '<ellipse cx=\"' + x + '\" cy=\"' + (y + 18) + '\" rx=\"26\" ry=\"13\" fill=\"rgba(0,0,0,0.3)\"/>' +
        '<polygon points=\"' + (x - 18) + ',' + (y + 6) + ' ' + x + ',' + (y + 15) + ' ' + (x + 18) + ',' + (y + 6) + ' ' + (x + 18) + ',' + (y - 3) + ' ' + x + ',' + (y - 12) + ' ' + (x - 18) + ',' + (y - 3) + '\" fill=\"#1e293b\"/>' +
        '<g class=\"' + (active ? 'cache-float-anim' : '') + '\">' +
          '<polygon points=\"' + (x - 14) + ',' + (y - 5) + ' ' + x + ',' + (y + 3) + ' ' + x + ',' + (y - 48) + ' ' + (x - 14) + ',' + (y - 56) + '\" fill=\"#06b6d4\" opacity=\"0.9\"/>' +
          '<polygon points=\"' + x + ',' + (y + 3) + ' ' + (x + 14) + ',' + (y - 5) + ' ' + (x + 14) + ',' + (y - 56) + ' ' + x + ',' + (y - 48) + '\" fill=\"#0891b2\" opacity=\"0.75\"/>' +
          '<polygon points=\"' + (x - 14) + ',' + (y - 56) + ' ' + x + ',' + (y - 48) + ' ' + x + ',' + (y - 68) + '\" fill=\"#ffffff\" opacity=\"0.95\"/>' +
          '<polygon points=\"' + x + ',' + (y - 48) + ' ' + (x + 14) + ',' + (y - 56) + ' ' + x + ',' + (y - 68) + '\" fill=\"#67e8f9\" opacity=\"0.95\"/>' +
        '</g>' +
        '<g transform=\"translate(' + x + ', ' + (y + 38) + ')\"><rect x=\"-42\" y=\"-4\" width=\"84\" height=\"24\" rx=\"6\" fill=\"#0e7490\" stroke=\"#67e8f9\" stroke-width=\"1.2\"/><text x=\"0\" y=\"8\" text-anchor=\"middle\" font-size=\"9\" font-family=\"sans-serif\" font-weight=\"900\" fill=\"#ffffff\">RAM CACHE (1ms)</text><text x=\"0\" y=\"17\" text-anchor=\"middle\" font-size=\"8\" font-family=\"monospace\" font-weight=\"700\" fill=\"#a5f3fc\">' + (active ? 'HIT: 99.8%' : 'BYPASSED') + '</text></g>' +
      '</g>';
    },

    renderDatabaseVault(x, y, name = 'Database Disk', status = 'normal') {
      const isThrash = status === 'thrashing';
      const cTop = isThrash ? '#ef4444' : '#3b82f6';
      const cSide = isThrash ? '#991b1b' : '#1d4ed8';

      return '<g class=\"iso-db-vault\">' +
        '<ellipse cx=\"' + x + '\" cy=\"' + (y + 18) + '\" rx=\"28\" ry=\"14\" fill=\"rgba(0,0,0,0.32)\"/>' +
        '<path d=\"M' + (x - 22) + ',' + (y + 6) + ' A22,11 0 0,0 ' + (x + 22) + ',' + (y + 6) + ' L' + (x + 22) + ',' + (y + 18) + ' A22,11 0 0,1 ' + (x - 22) + ',' + (y + 18) + ' Z\" fill=\"' + cSide + '\"/>' +
        '<ellipse cx=\"' + x + '\" cy=\"' + (y + 6) + '\" rx=\"22\" ry=\"11\" fill=\"' + cTop + '\"/>' +
        '<path d=\"M' + (x - 22) + ',' + (y - 7) + ' A22,11 0 0,0 ' + (x + 22) + ',' + (y - 7) + ' L' + (x + 22) + ',' + (y + 5) + ' A22,11 0 0,1 ' + (x - 22) + ',' + (y + 5) + ' Z\" fill=\"' + cSide + '\"/>' +
        '<ellipse cx=\"' + x + '\" cy=\"' + (y - 7) + '\" rx=\"22\" ry=\"11\" fill=\"' + cTop + '\"/>' +
        '<path d=\"M' + (x - 22) + ',' + (y - 20) + ' A22,11 0 0,0 ' + (x + 22) + ',' + (y - 20) + ' L' + (x + 22) + ',' + (y - 8) + ' A22,11 0 0,1 ' + (x - 22) + ',' + (y - 8) + ' Z\" fill=\"' + cSide + '\"/>' +
        '<ellipse cx=\"' + x + '\" cy=\"' + (y - 20) + '\" rx=\"22\" ry=\"11\" fill=\"' + cTop + '\"/>' +
        '<g class=\"' + (isThrash ? 'head-thrash-anim' : 'head-read-anim') + '\" transform=\"translate(' + x + ', ' + (y - 20) + ')\"><line x1=\"-16\" y1=\"0\" x2=\"10\" y2=\"4\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"10\" cy=\"4\" r=\"2.2\" fill=\"' + (isThrash ? '#fef08a' : '#93c5fd') + '\"/></g>' +
        '<g transform=\"translate(' + x + ', ' + (y + 38) + ')\"><rect x=\"-42\" y=\"-4\" width=\"84\" height=\"24\" rx=\"6\" fill=\"#0f172a\" stroke=\"' + cTop + '\" stroke-width=\"1.2\"/><text x=\"0\" y=\"8\" text-anchor=\"middle\" font-size=\"9\" font-family=\"sans-serif\" font-weight=\"800\" fill=\"#ffffff\">' + name + '</text><text x=\"0\" y=\"17\" text-anchor=\"middle\" font-size=\"8\" font-family=\"monospace\" font-weight=\"700\" fill=\"' + (isThrash ? '#f87171' : '#93c5fd') + '\">' + (isThrash ? 'I/O: 100% THRASH' : 'I/O: 14% NORMAL') + '</text></g>' +
      '</g>';
    },

    renderConduit(x1, y1, x2, y2, color = '#00bcd4', animated = true) {
      return '<g class=\"iso-conduit\">' +
        '<line x1=\"' + x1 + '\" y1=\"' + y1 + '\" x2=\"' + x2 + '\" y2=\"' + y2 + '\" stroke=\"rgba(0,0,0,0.2)\" stroke-width=\"6\" stroke-linecap=\"round\"/>' +
        '<line x1=\"' + x1 + '\" y1=\"' + y1 + '\" x2=\"' + x2 + '\" y2=\"' + y2 + '\" stroke=\"#1e293b\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>' +
        '<line x1=\"' + x1 + '\" y1=\"' + y1 + '\" x2=\"' + x2 + '\" y2=\"' + y2 + '\" stroke=\"' + color + '\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"6,8\" class=\"' + (animated ? 'data-stream-anim' : '') + '\"/>' +
      '</g>';
    },

    // =========================================================================
    // THE 24 SYSTEM DESIGN SCENES (Strict Choice & Scenario Evaluation)
    // =========================================================================

    renderServersTrafficScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isA = choice && choice.id === 'A';

      if (!choice) {
        badgeText = 'CRITICAL EVENT: Single Server Choking Under 50,000 Riders!';
        badgeType = 'problem';
        telemetryText = 'CPU: 99% • HEAT: 98°C • DROPPING PACKETS';
        footerTitle = 'Hardware Thermal Limit Reached';
        footerDesc = 'A sudden rush hour surge is hammering Server 1. Fans are screaming at maximum speed and packets are dropping on the floor!';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Horizontal Fleet (Distributed Pool of 3 Servers)';
        badgeType = 'solution';
        telemetryText = 'FLEET CPU: 33% • 0 DROPPED • RESPONSIVE';
        footerTitle = 'Horizontal Scaling Mastery';
        footerDesc = 'Workload smoothly divided across 3 server racks. Fans slowed down, temperatures normalized to 45°C, and waiting riders are dispatched in seconds!';
      } else if (isA) {
        badgeText = 'SUBOPTIMAL: Giant Monolith Hit Physical Thermal Limit!';
        badgeType = 'warning';
        telemetryText = 'CPU: 92% • COST: ₹5,00,000 • SINGLE POINT OF FAILURE';
        footerTitle = 'The Vertical Scaling Ceiling';
        footerDesc = 'Upgrading to a single massive mainframe delayed the crash momentarily, but cost a fortune and still leaves RideQuest with a fatal single point of failure!';
      } else {
        badgeText = 'DISASTER: 100% User Churn! Passengers Deleted the App!';
        badgeType = 'problem';
        telemetryText = 'ACTIVE RIDERS: 0 • REVENUE: ₹0';
        footerTitle = 'Customer Churn Disaster';
        footerDesc = 'Telling paying passengers to "come back in 30 minutes" caused 100% churn. Riders switched to walking or rival taxi apps!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city') +
        this.renderPassenger(140, 170, 'requesting', isOptimal ? 'happy' : (choice && choice.id === 'C' ? 'angry' : 'waiting'), '#e67e22', 'Rider 1') +
        this.renderPassenger(110, 205, 'requesting', isOptimal ? 'happy' : (choice && choice.id === 'C' ? 'angry' : 'waiting'), '#3498db', 'Rider 2') +
        this.renderPassenger(155, 235, 'requesting', isOptimal ? 'happy' : (choice && choice.id === 'C' ? 'angry' : 'waiting'), '#9b59b6', 'Rider 3') +
        this.renderPassenger(120, 265, 'requesting', isOptimal ? 'happy' : (choice && choice.id === 'C' ? 'angry' : 'waiting'), '#1abc9c', 'Rider 4');

      if (isOptimal) {
        inner += this.renderCab(220, 310, 'active', 'Ola Cab En Route', true) +
          this.renderConduit(160, 180, 330, 180, '#22c55e') +
          this.renderConduit(140, 220, 410, 220, '#22c55e') +
          this.renderConduit(170, 240, 480, 260, '#22c55e') +
          this.renderServerRack(330, 180, 'Node 1', 'healthy', '33%', '44°C') +
          this.renderServerRack(410, 220, 'Node 2', 'healthy', '33%', '45°C') +
          this.renderServerRack(480, 260, 'Node 3', 'healthy', '34%', '44°C');
      } else if (!choice) {
        inner += this.renderConduit(160, 180, 390, 210, '#ef4444') +
          this.renderConduit(140, 220, 390, 210, '#ef4444') +
          this.renderConduit(170, 240, 390, 210, '#ef4444') +
          this.renderServerRack(390, 210, 'Server 1', 'overheated', '99%', '98°C');
      } else if (isA) {
        inner += this.renderConduit(160, 200, 410, 210, '#f59e0b') +
          this.renderServerRack(410, 210, 'Giant Super-Server', 'overheated', '92%', '89°C');
      } else {
        inner += '<g transform=\"translate(390, 210)\"><rect x=\"-40\" y=\"-20\" width=\"80\" height=\"40\" rx=\"8\" fill=\"#1e293b\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"0\" y=\"5\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"900\" fill=\"#ef4444\">NO TRAFFIC</text><text x=\"0\" y=\"24\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"700\" fill=\"#94a3b8\">USERS CHURNED</text></g>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.checkCircle({size:24, color:'#22c55e'}) || '✓') : (window.Icons?.fire({size:24, color:'#ef4444'}) || '🔥'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderAuthScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isA = choice && choice.id === 'A';

      if (!choice) {
        badgeText = 'CRITICAL SECURITY FLAW: Unverified Phone Numbers Allowed!';
        badgeType = 'problem';
        telemetryText = 'RISK: ACCOUNT TAKEOVER • NO PROOF OF IDENTITY';
        footerTitle = 'Identity Spoofing Vulnerability';
        footerDesc = 'Anyone can enter any phone number and book rides as someone else! RideQuest has no cryptographic proof that the rider owns this device.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Verified 6-Digit SMS OTP & Signed Digital Token';
        badgeType = 'solution';
        telemetryText = 'AUTH TIME: 1.2s • ENCRYPTED JWT • 100% SECURE';
        footerTitle = 'Cryptographic Token & OTP Verification';
        footerDesc = 'SMS satellite beams a 6-digit OTP to the phone. Once confirmed, the cloud grants a signed digital token that authenticates future ride bookings in 1.2s!';
      } else if (isA) {
        badgeText = 'SECURITY BREACH: Identity Spoofed! Imposter Hijacked Account!';
        badgeType = 'problem';
        telemetryText = 'STATUS: CRITICAL BREACH • UNVERIFIED PHONE';
        footerTitle = 'Unauthenticated Access Vulnerability';
        footerDesc = 'Without OTP verification, bad actors enter other people\'s numbers, charging rides to strangers and destroying customer trust!';
      } else {
        badgeText = 'BOTTLENECK: 3-Hour Line Outside Office! 95% Riders Abandoned!';
        badgeType = 'warning';
        telemetryText = 'WAIT TIME: 180 MIN • ONBOARDING DROPOUT';
        footerTitle = 'Unscalable Physical Onboarding';
        footerDesc = 'Forcing millions of smartphone users to physically visit a brick-and-mortar office destroys onboarding. 95% of users uninstall the app on day one!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city') +
        this.renderPassenger(140, 220, isOptimal ? 'idle' : 'requesting', isOptimal ? 'happy' : (isA ? 'angry' : 'waiting'), '#3498db', 'Rider') +
        '<g transform=\"translate(260, 140)\"><line x1=\"0\" y1=\"20\" x2=\"0\" y2=\"-30\" stroke=\"#64748b\" stroke-width=\"3\"/><line x1=\"-12\" y1=\"-10\" x2=\"12\" y2=\"-10\" stroke=\"#64748b\" stroke-width=\"2\"/><line x1=\"-8\" y1=\"-22\" x2=\"8\" y2=\"-22\" stroke=\"#64748b\" stroke-width=\"2\"/><circle cx=\"0\" cy=\"-30\" r=\"3.5\" fill=\"' + (isOptimal ? '#22c55e' : '#ef4444') + '\"/>' +
        (isOptimal ? '<circle cx=\"0\" cy=\"-30\" r=\"10\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"1.2\" opacity=\"0.8\" class=\"iso-phone-ping\"/><path d=\"M-50,40 L-100,70\" stroke=\"#22c55e\" stroke-width=\"2\" stroke-dasharray=\"4,4\" class=\"data-stream-anim\"/>' : '') +
        '</g>' +
        '<g transform=\"translate(360, 200)\"><ellipse cx=\"0\" cy=\"18\" rx=\"28\" ry=\"14\" fill=\"rgba(0,0,0,0.3)\"/><polygon points=\"-18,4 0,14 0,-40 -18,-50\" fill=\"#1e293b\"/><polygon points=\"0,14 18,4 18,-50 0,-40\" fill=\"#334155\"/><line x1=\"-12\" y1=\"-30\" x2=\"12\" y2=\"-30\" stroke=\"' + (isOptimal ? '#22c55e' : '#ef4444') + '\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"0\" cy=\"-30\" r=\"4.5\" fill=\"' + (isOptimal ? '#22c55e' : '#ef4444') + '\"/><rect x=\"-44\" y=\"26\" width=\"88\" height=\"22\" rx=\"5\" fill=\"#0f172a\" stroke=\"' + (isOptimal ? '#22c55e' : '#ef4444') + '\" stroke-width=\"1.2\"/><text x=\"0\" y=\"38\" text-anchor=\"middle\" font-size=\"8.5\" font-family=\"sans-serif\" font-weight=\"800\" fill=\"#fff\">' + (isOptimal ? 'TOKEN: VALIDATED' : (isA ? 'SECURITY BREACH' : 'OFFICE QUEUE')) + '</text></g>' +
        this.renderDatabaseVault(490, 210, 'User Database', isOptimal ? 'normal' : 'thrashing');

      if (isOptimal) {
        inner += this.renderConduit(378, 200, 470, 210, '#22c55e') +
          this.renderCab(200, 290, 'active', 'Ola Ride Dispatched', true);
      } else if (isA) {
        inner += this.renderPassenger(100, 180, 'requesting', 'angry', '#ef4444', 'Imposter/Hacker') +
          this.renderConduit(115, 180, 342, 200, '#ef4444');
      } else if (choice) {
        inner += '<g transform=\"translate(190, 210)\"><rect x=\"-20\" y=\"-10\" width=\"40\" height=\"20\" rx=\"3\" fill=\"#64748b\"/><text x=\"0\" y=\"4\" text-anchor=\"middle\" font-size=\"7\" font-weight=\"900\" fill=\"#fff\">OFFICE DESK</text><text x=\"0\" y=\"24\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"700\" fill=\"#ef4444\">3 HR QUEUE</text></g>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.shieldCheck({size:24, color:'#22c55e'}) || '🛡️') : (window.Icons?.shieldAlert({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderLoadBalancerScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isA = choice && choice.id === 'A';
      const isB = choice && choice.id === 'B';
      const isC = choice && choice.id === 'C';
      const algoName = isA ? 'Round Robin (Turn By Turn)' : (isB ? 'Least Connections' : (isC ? 'IP Hash Affinity' : 'None'));

      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      if (!choice) {
        badgeText = 'TRAFFIC CONGESTION: All 50,000 Riders Bombarding Server 1 Directly!';
        badgeType = 'problem';
        telemetryText = 'SERVER 1: 100% LOAD • SERVER 2: 0% • SERVER 3: 0%';
        footerTitle = 'Unbalanced Traffic Imbalance';
        footerDesc = 'Without an intelligent traffic dispatcher, every passenger phone hits Server 1 by default, causing catastrophic failure while Server 2 and 3 sit idle.';
      } else {
        badgeText = 'BALANCING SOLUTION: Distributed Via ' + algoName;
        badgeType = 'solution';
        telemetryText = 'S1: 33% • S2: 33% • S3: 34% • 0 HOTSPOTS';
        footerTitle = 'Intelligent Load Distribution (' + algoName + ')';
        footerDesc = 'The Load Balancer acts as an automated traffic controller, dispatching incoming requests according to ' + algoName + '. All servers share the work equally!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city') +
        this.renderPassenger(120, 190, 'requesting', 'happy', '#3498db', 'Rider') +
        this.renderPassenger(140, 240, 'requesting', 'happy', '#e67e22', 'Rider') +
        this.renderLoadBalancerTower(280, 200, Boolean(choice), algoName);

      if (!choice) {
        inner += this.renderConduit(140, 210, 430, 160, '#ef4444') +
          this.renderServerRack(430, 160, 'Server 1', 'overheated', '100%', '99°C') +
          this.renderServerRack(490, 210, 'Server 2', 'idle', '0%', '28°C') +
          this.renderServerRack(430, 270, 'Server 3', 'idle', '0%', '28°C');
      } else {
        inner += this.renderConduit(140, 210, 260, 200, '#38bdf8') +
          this.renderConduit(300, 190, 430, 160, '#22c55e') +
          this.renderConduit(300, 200, 490, 210, '#22c55e') +
          this.renderConduit(300, 210, 430, 270, '#22c55e') +
          this.renderServerRack(430, 160, 'Server 1', 'healthy', '33%', '44°C') +
          this.renderServerRack(490, 210, 'Server 2', 'healthy', '33%', '45°C') +
          this.renderServerRack(430, 270, 'Server 3', 'healthy', '34%', '44°C');
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.scale({size:24, color:'#22c55e'}) || '⚖️') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderCapPartitionScene(choice) {
      const isCp = choice && choice.id === 'A';
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';

      if (!choice) {
        badgeText = 'CRITICAL EVENT: Cross-City Fiber Cable Severed by Lightning!';
        badgeType = 'problem';
        telemetryText = 'SYNC: BROKEN • PARTITION DETECTED';
        footerTitle = 'The CAP Theorem Dilemma';
        footerDesc = 'A fierce lightning storm severed the underwater fiber conduit between North DC and South DC. Driver Arun Kumar is assigned a ride in North DC, but South DC cannot synchronize!';
      } else if (isCp) {
        badgeText = 'CP STRATEGY: Strict Consistency (Isolated Writes Rejected)';
        badgeType = 'solution';
        telemetryText = 'CONSISTENCY: 100% • STALE WRITES: 0';
        footerTitle = 'CP Consistency Choice';
        footerDesc = 'Under CP, South DC refuses to book rides until synchronization is restored, guaranteeing that no driver is ever double-booked!';
      } else {
        badgeText = 'AP STRATEGY: High Availability (Local Writes Accepted, Eventual Sync)';
        badgeType = 'solution';
        telemetryText = 'AVAILABILITY: 100% • ASYNC HEALING';
        footerTitle = 'AP Availability Choice';
        footerDesc = 'Under AP, both data centers accept local rides to keep the app working, resolving any conflicting bookings asynchronously once fiber repairs finish.';
      }

      let inner = this.renderGrid(4, 4, 190, 150, 'storm') +
        this.renderGrid(4, 4, 450, 150, 'storm') +
        this.renderPassenger(100, 200, 'requesting', 'waiting', '#3498db', 'North Rider') +
        this.renderDataCenter(190, 180, 'North Data Center', 'online') +
        '<g class=\"severed-fiber-link\"><line x1=\"220\" y1=\"180\" x2=\"300\" y2=\"180\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"4,4\"/><line x1=\"340\" y1=\"180\" x2=\"420\" y2=\"180\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"4,4\"/><g transform=\"translate(320, 180)\"><rect x=\"-44\" y=\"-12\" width=\"88\" height=\"24\" rx=\"6\" fill=\"#ef4444\"/><text x=\"0\" y=\"4\" text-anchor=\"middle\" font-size=\"9\" font-family=\"sans-serif\" font-weight=\"900\" fill=\"#ffffff\">FIBER SEVERED!</text><circle cx=\"-16\" cy=\"-12\" r=\"2.5\" fill=\"#fef08a\" class=\"spark-anim-1\"/><circle cx=\"18\" cy=\"14\" r=\"2.5\" fill=\"#fef08a\" class=\"spark-anim-2\"/></g><path d=\"M310,40 L325,120 L315,130 L330,170\" stroke=\"#fde047\" stroke-width=\"2.5\" fill=\"none\" class=\"lightning-bolt-anim\"/></g>' +
        this.renderDataCenter(450, 180, 'South Data Center', isCp ? 'isolated' : 'online') +
        this.renderPassenger(540, 200, 'requesting', isCp ? 'waiting' : 'happy', '#e67e22', 'South Rider');

      return this.wrapScene({
        theme: 'storm',
        badgeText, badgeType, telemetryText,
        footerIcon: window.Icons?.zap({size:24, color:'#f59e0b'}) || '⚡',
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderAcidTransactionScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isB = choice && choice.id === 'B';

      if (!choice) {
        badgeText = 'TRANSACTION RISK: Network Drops Mid-Payment! Money Lost in Transit!';
        badgeType = 'problem';
        telemetryText = 'STATUS: STEP 1 DONE • STEP 2 UNKNOWN';
        footerTitle = 'The Atomicity Problem';
        footerDesc = 'The rider\'s wallet was charged ₹500, but before the driver received credit, the cell network disconnected. Without atomicity, the money simply vanished!';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Atomic ACID Transaction (All-or-Nothing Rollback)';
        badgeType = 'solution';
        telemetryText = '2-PHASE COMMIT: SAFELY ROLLED BACK • 0 LOST';
        footerTitle = 'ACID Transaction Guarantee';
        footerDesc = 'With ACID Atomicity, if Step 2 fails, the entire transaction is rolled back automatically. The ₹500 is returned to the rider\'s wallet within 10ms!';
      } else {
        badgeText = 'CATASTROPHIC GLITCH: Rider Deducted ₹500, but Driver Never Paid!';
        badgeType = 'problem';
        telemetryText = 'DISPUTE LOGGED • DISCREPANCY: -₹500';
        footerTitle = 'Broken Consistency Financial Glitch';
        footerDesc = 'Without transactional boundaries, the system leaves money in limbo. Rider files a fraud complaint and driver refuses to begin the trip!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'vault') +
        this.renderPassenger(140, 200, 'requesting', isOptimal ? 'happy' : 'angry', '#3498db', 'Rider Wallet (₹500)') +
        '<g transform=\"translate(320, 200)\"><ellipse cx=\"0\" cy=\"18\" rx=\"30\" ry=\"15\" fill=\"rgba(0,0,0,0.3)\"/><circle cx=\"0\" cy=\"-10\" r=\"24\" fill=\"' + (isOptimal ? '#065f46' : '#7f1d1d') + '\" stroke=\"' + (isOptimal ? '#34d399' : '#f87171') + '\" stroke-width=\"2.5\"/><text x=\"0\" y=\"-6\" text-anchor=\"middle\" font-size=\"9\" font-family=\"sans-serif\" font-weight=\"900\" fill=\"#ffffff\">' + (isOptimal ? 'ROLLBACK' : 'BROKEN') + '</text>' +
        (isOptimal ? '<path d=\"M-10,-12 A12,12 0 1,1 -10,0 L-6,-4 M-10,0 L-14,-4\" stroke=\"#34d399\" stroke-width=\"2\" fill=\"none\"/>' : '<line x1=\"-12\" y1=\"-18\" x2=\"12\" y2=\"-2\" stroke=\"#f87171\" stroke-width=\"3\"/>') +
        '</g>' +
        this.renderPassenger(500, 200, 'requesting', isOptimal ? 'happy' : 'angry', '#22c55e', 'Driver Bank (₹0)') +
        this.renderConduit(160, 200, 290, 200, isOptimal ? '#22c55e' : '#ef4444') +
        this.renderConduit(350, 200, 480, 200, isOptimal ? '#22c55e' : '#64748b', !isB);

      return this.wrapScene({
        theme: 'vault',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.shieldCheck({size:24, color:'#22c55e'}) || '🛡️') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderCacheScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isB = choice && choice.id === 'B';

      if (!choice) {
        badgeText = 'DATABASE BOTTLENECK: 50,000 Repeated Fare Queries Thrashing Disk!';
        badgeType = 'problem';
        telemetryText = 'DISK I/O: 100% • LATENCY: 420ms • SLOW APP';
        footerTitle = 'Database Spindle Thrashing';
        footerDesc = 'Every single user checking ride fares hits the disk database for the exact same calculation, locking tables and slowing down bookings across the city.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: In-Memory Redis RAM Cache (1ms Sub-Millisecond Hits)';
        badgeType = 'solution';
        telemetryText = 'CACHE HIT: 99.8% • LATENCY: 1.1ms • DB LOAD: 4%';
        footerTitle = 'In-Memory RAM Caching';
        footerDesc = 'Redis stores popular fares directly in RAM. 99.8% of requests return in 1 millisecond without touching disk storage, freeing the database for actual bookings!';
      } else {
        badgeText = 'INEFFICIENT: Bigger Disk Still Suffers Mechanical I/O Bottlenecks!';
        badgeType = 'warning';
        telemetryText = 'DISK I/O: 94% • LATENCY: 290ms • HIGH COST';
        footerTitle = 'Disk I/O Limitations';
        footerDesc = 'Buying a bigger mechanical hard drive did not eliminate physical disk seek times. The database still slows down under repeated read traffic.';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city') +
        this.renderPassenger(120, 200, 'requesting', isOptimal ? 'happy' : 'waiting', '#3498db', '50,000 Riders');

      if (isOptimal) {
        inner += this.renderConduit(140, 200, 280, 200, '#06b6d4') +
          this.renderCacheObelisk(300, 190, true) +
          this.renderConduit(330, 200, 470, 200, '#64748b', false) +
          this.renderDatabaseVault(490, 200, 'Disk DB (Rested)', 'normal');
      } else {
        inner += this.renderConduit(140, 200, 410, 200, isB ? '#f59e0b' : '#ef4444') +
          this.renderDatabaseVault(430, 200, isB ? 'Giant Disk DB' : 'Relational DB', 'thrashing');
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.zap({size:24, color:'#06b6d4'}) || '⚡') : (window.Icons?.clock({size:24, color:'#ef4444'}) || '⏳'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderIndexingScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isB = choice && choice.id === 'B';

      if (!choice) {
        badgeText = 'LOOKUP TIMEOUT: Searching 1,000,000 Drivers Without An Index!';
        badgeType = 'problem';
        telemetryText = 'LOOKUP: O(N) LINEAR SCAN • 8.4 SECONDS';
        footerTitle = 'Full Table Scan Penalty';
        footerDesc = 'Without an index, the database reads every single row on disk from row 1 to 1,000,000 just to find driver #84129. Bookings timeout before matching finishes!';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: B-Tree Index (Target Pinpointed in 3 Hops / 2ms)';
        badgeType = 'solution';
        telemetryText = 'LOOKUP: O(log N) • 3 HOPS • 1.8 MILLISECONDS';
        footerTitle = 'B-Tree Indexing Speed';
        footerDesc = 'A B-Tree index acts like an alphabetical directory. The database follows 3 tree pointers and pinpoints the exact driver in under 2 milliseconds!';
      } else {
        badgeText = 'TABLE SCAN DISASTER: Searching 1M Rows Sequentially (12s Timeout)!';
        badgeType = 'warning';
        telemetryText = 'ROWS EXAMINED: 1,000,000 • CPU: 100%';
        footerTitle = 'Sequential Search Bottleneck';
        footerDesc = 'Inspecting each row one by one burns through 100% database CPU. Other passengers are blocked while the database crawls through millions of records.';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city');
      if (isOptimal) {
        inner += '<g class=\"btree-vis\" transform=\"translate(320, 140)\"><circle cx=\"0\" cy=\"0\" r=\"14\" fill=\"#0284c7\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"0\" y=\"4\" text-anchor=\"middle\" font-size=\"8.5\" font-weight=\"900\" fill=\"#fff\">ROOT</text><line x1=\"0\" y1=\"14\" x2=\"-60\" y2=\"50\" stroke=\"#38bdf8\" stroke-width=\"2\" class=\"data-stream-anim\"/><line x1=\"0\" y1=\"14\" x2=\"60\" y2=\"50\" stroke=\"#38bdf8\" stroke-width=\"2\" class=\"data-stream-anim\"/><circle cx=\"-60\" cy=\"50\" r=\"12\" fill=\"#0369a1\" stroke=\"#38bdf8\" stroke-width=\"1.8\"/><text x=\"-60\" y=\"54\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"800\" fill=\"#fff\">A-M</text><circle cx=\"60\" cy=\"50\" r=\"12\" fill=\"#0284c7\" stroke=\"#22c55e\" stroke-width=\"2.5\" class=\"core-pulse\"/><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"800\" fill=\"#fff\">N-Z</text><line x1=\"60\" y1=\"62\" x2=\"60\" y2=\"95\" stroke=\"#22c55e\" stroke-width=\"2.5\" class=\"data-stream-anim\"/><circle cx=\"60\" cy=\"105\" r=\"14\" fill=\"#15803d\" stroke=\"#4ade80\" stroke-width=\"2\"/><text x=\"60\" y=\"109\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">FOUND!</text></g>' +
          this.renderCab(460, 280, 'active', 'Driver Found (2ms)', true);
      } else {
        let rows = '';
        for (let i = 0; i < 5; i++) {
          rows += '<rect x=\"' + (i * 32) + '\" y=\"0\" width=\"28\" height=\"34\" rx=\"4\" fill=\"' + (i === 4 && isB ? '#ef4444' : '#1e293b') + '\" stroke=\"#475569\"/><text x=\"' + (i * 32 + 14) + '\" y=\"20\" text-anchor=\"middle\" font-size=\"8\" fill=\"#94a3b8\">#' + (i * 200) + 'k</text>';
        }
        inner += '<g transform=\"translate(260, 180)\">' + rows + '<g transform=\"translate(70, 44)\" class=\"laser-scan-anim\"><polygon points=\"0,0 20,-10 40,0 20,10\" fill=\"#ef4444\"/><line x1=\"20\" y1=\"-10\" x2=\"20\" y2=\"-40\" stroke=\"#ef4444\" stroke-width=\"2\"/></g></g>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.search({size:24, color:'#38bdf8'}) || '🔍') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderOltpOlapScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isB = choice && choice.id === 'B';

      if (!choice) {
        badgeText = 'DATABASE FREEZE: 10-Page Analytics Report Locking Live Bookings!';
        badgeType = 'problem';
        telemetryText = 'LOCK WAIT TIMEOUT: 50,000 PASSENGERS BLOCKED';
        footerTitle = 'Shared Workload Lock Contention';
        footerDesc = 'Running complex historical revenue queries directly on the live booking database locks rows, preventing drivers from receiving incoming rides.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Dual Pipelines (Live Row OLTP + Columnar OLAP Warehouse)';
        badgeType = 'solution';
        telemetryText = 'OLTP: 15ms BOOKINGS • OLAP: NIGHTLY ETL SYNC';
        footerTitle = 'OLTP & OLAP Workload Isolation';
        footerDesc = 'Live bookings run on a fast OLTP database, while an automated ETL pipeline copies data to an OLAP columnar warehouse for analytics. Zero lock contention!';
      } else {
        badgeText = 'SYSTEM LOCKDOWN: Multi-Hour SQL Report Froze City Bookings!';
        badgeType = 'problem';
        telemetryText = 'TABLE LOCK EXCLUSIVE • 0 RIDES ACCEPTED';
        footerTitle = 'Catastrophic Table Lock';
        footerDesc = 'Running full table analytics on production databases causes table locks that prevent customer payments and driver dispatches from committing!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city');
      if (isOptimal) {
        inner += this.renderPassenger(120, 200, 'requesting', 'happy', '#3498db', 'Rider') +
          this.renderConduit(140, 200, 220, 200, '#22c55e') +
          this.renderDatabaseVault(240, 190, 'OLTP (Live Bookings)', 'normal') +
          this.renderConduit(270, 200, 420, 200, '#38bdf8') +
          '<g transform=\"translate(345, 185)\"><rect x=\"-24\" y=\"-8\" width=\"48\" height=\"16\" rx=\"4\" fill=\"#0f172a\" stroke=\"#38bdf8\"/><text x=\"0\" y=\"3\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"900\" fill=\"#38bdf8\">ETL SYNC</text></g>' +
          '<g transform=\"translate(460, 190)\"><ellipse cx=\"0\" cy=\"18\" rx=\"28\" ry=\"14\" fill=\"rgba(0,0,0,0.3)\"/><polygon points=\"-20,6 0,16 20,6 20,-30 0,-40 -20,-30\" fill=\"#4338ca\"/><ellipse cx=\"0\" cy=\"-40\" rx=\"20\" ry=\"10\" fill=\"#6366f1\"/><rect x=\"-44\" y=\"26\" width=\"88\" height=\"22\" rx=\"5\" fill=\"#0f172a\" stroke=\"#6366f1\"/><text x=\"0\" y=\"37\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"800\" fill=\"#fff\">OLAP WAREHOUSE</text></g>';
      } else {
        inner += this.renderPassenger(120, 200, 'requesting', 'angry', '#ef4444', 'Blocked Rider') +
          this.renderConduit(140, 200, 310, 200, '#ef4444') +
          this.renderDatabaseVault(330, 200, 'Single Database (Locked)', 'thrashing') +
          '<g transform=\"translate(490, 200)\"><rect x=\"-42\" y=\"-20\" width=\"84\" height=\"40\" rx=\"6\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"0\" y=\"-4\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">10-PAGE REPORT</text><text x=\"0\" y=\"10\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"700\" fill=\"#fca5a5\">EXCLUSIVE LOCK</text></g>' +
          this.renderConduit(440, 200, 360, 200, '#ef4444');
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.database({size:24, color:'#38bdf8'}) || '🗄️') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderShardingScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isA = choice && choice.id === 'A';
      const isB = choice && choice.id === 'B';
      const shardType = isA ? 'By Geographic Region' : (isB ? 'By User Hash' : 'Single Monolith');

      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      if (!choice) {
        badgeText = 'DATABASE CRUSH: Single 500GB Database Overloaded with City Rides!';
        badgeType = 'problem';
        telemetryText = 'STORAGE: 98% FULL • WRITE BOTTLENECK';
        footerTitle = 'Single Database Bottleneck';
        footerDesc = 'A single database server has hit its physical disk and IOPS ceiling. Splitting data into independent partitions is required.';
      } else {
        badgeText = 'SHARDING SOLUTION: Database Partitioned ' + shardType;
        badgeType = 'solution';
        telemetryText = 'SHARD 1: 33% • SHARD 2: 33% • SHARD 3: 34% • SCALABLE';
        footerTitle = 'Database Sharding (' + shardType + ')';
        footerDesc = 'Incoming writes are divided ' + shardType + '. Each shard operates independently on separate hardware, enabling infinite horizontal storage scaling!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city');
      if (!choice) {
        inner += this.renderDatabaseVault(320, 200, 'Huge 500GB DB (Over capacity)', 'thrashing');
      } else {
        inner += this.renderDatabaseVault(220, 190, isA ? 'Shard 1 (North)' : 'Shard A (Hash 0-33)', 'normal') +
          this.renderDatabaseVault(330, 220, isA ? 'Shard 2 (South)' : 'Shard B (Hash 34-66)', 'normal') +
          this.renderDatabaseVault(440, 190, isA ? 'Shard 3 (East)' : 'Shard C (Hash 67-99)', 'normal') +
          '<g transform=\"translate(330, 140)\"><rect x=\"-48\" y=\"-10\" width=\"96\" height=\"20\" rx=\"5\" fill=\"#0f172a\" stroke=\"#38bdf8\"/><text x=\"0\" y=\"3\" text-anchor=\"middle\" font-size=\"8.5\" font-weight=\"900\" fill=\"#38bdf8\">SHARD ROUTER</text></g>' +
          this.renderConduit(330, 150, 220, 180, '#38bdf8') +
          this.renderConduit(330, 150, 330, 200, '#38bdf8') +
          this.renderConduit(330, 150, 440, 180, '#38bdf8');
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.grid({size:24, color:'#38bdf8'}) || '🗂️') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderDatabaseDesignScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isA = choice && choice.id === 'A';

      if (!choice) {
        badgeText = 'DATA MISMATCH: GPS Coordinates Crashing Financial Ledger!';
        badgeType = 'problem';
        telemetryText = 'SQL WRITES: 50,000/SEC • LOCK OVERFLOW';
        footerTitle = 'Architectural Impedance Mismatch';
        footerDesc = 'Ride fares need strict ACID transactions, while live driver GPS requires 50,000 flexible writes per second. Forcing both into one database model fails.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Polyglot Persistence (Postgres SQL Ledger + NoSQL GPS Stream)';
        badgeType = 'solution';
        telemetryText = 'SQL: ACID COMPLIANT • NOSQL: 50k OPS/SEC STREAM';
        footerTitle = 'Polyglot Persistence Mastery';
        footerDesc = 'PostgreSQL handles financial ledgers with ironclad ACID safety, while MongoDB/Redis ingests massive GPS streams with sub-millisecond writes!';
      } else if (isA) {
        badgeText = 'TABLE LOCK COLLAPSE: 50,000 GPS Pings/sec Overwhelmed SQL Table!';
        badgeType = 'problem';
        telemetryText = 'SQL DEADLOCK • TRIPPED CONSTRAINTS';
        footerTitle = 'Relational Overload';
        footerDesc = 'Pumping 50,000 GPS coordinates into a strict relational database triggers constant index re-indexing and locks payment tables!';
      } else {
        badgeText = 'FINANCIAL CORRUPTION: NoSQL Overwrote Account Balance with -₹450!';
        badgeType = 'problem';
        telemetryText = 'LEDGER INTEGRITY: CORRUPTED • MISSING ₹';
        footerTitle = 'Non-ACID Financial Failure';
        footerDesc = 'Storing financial transactions in schemaless NoSQL without multi-document ACID transactions leads to dirty reads, race conditions, and money loss!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city');
      if (isOptimal) {
        inner += '<g transform=\"translate(220, 190)\">' + this.renderDatabaseVault(0, 0, 'PostgreSQL (ACID)', 'normal') + '<text x=\"0\" y=\"44\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"800\" fill=\"#4ade80\">FARES & WALLETS</text></g>' +
          '<g transform=\"translate(420, 190)\"><ellipse cx=\"0\" cy=\"18\" rx=\"28\" ry=\"14\" fill=\"rgba(0,0,0,0.3)\"/><polygon points=\"-18,4 0,14 18,4 18,-36 0,-46 -18,-36\" fill=\"#047857\"/><ellipse cx=\"0\" cy=\"-46\" rx=\"18\" ry=\"9\" fill=\"#10b981\"/><rect x=\"-42\" y=\"24\" width=\"84\" height=\"22\" rx=\"5\" fill=\"#0f172a\" stroke=\"#10b981\"/><text x=\"0\" y=\"36\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">NOSQL / REDIS</text><text x=\"0\" y=\"52\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"800\" fill=\"#34d399\">50k GPS PINGS/S</text></g>' +
          this.renderCab(420, 130, 'active', 'Live GPS Stream');
      } else if (isA) {
        inner += this.renderDatabaseVault(320, 200, 'Postgres SQL (Overwhelmed by GPS)', 'thrashing') +
          '<g transform=\"translate(320, 140)\"><text x=\"0\" y=\"0\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"900\" fill=\"#ef4444\">TABLE LOCK DEADLOCK</text></g>';
      } else {
        inner += '<g transform=\"translate(320, 200)\"><rect x=\"-50\" y=\"-20\" width=\"100\" height=\"40\" rx=\"6\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"0\" y=\"-4\" text-anchor=\"middle\" font-size=\"8.5\" font-weight=\"900\" fill=\"#fff\">RACE CONDITION</text><text x=\"0\" y=\"10\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"700\" fill=\"#fca5a5\">BALANCE: -₹450</text></g>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.layers({size:24, color:'#10b981'}) || '📚') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderDistributedTxScene(choice) {
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isA = choice && choice.id === 'A';
      const isB = choice && choice.id === 'B';
      const strategyName = isA ? 'Two-Phase Commit (Strict 2PC)' : (isB ? 'Saga Workflow (Compensating Events)' : 'Uncoordinated');

      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      if (!choice) {
        badgeText = 'DISTRIBUTED FAILURE: Driver Cancelled After Payment Service Charged Rider!';
        badgeType = 'problem';
        telemetryText = 'STATE: SPLIT-BRAIN INCONSISTENCY';
        footerTitle = 'Distributed Microservice Inconsistency';
        footerDesc = 'Payment Service and Ride Service are independent microservices. When Driver assignment fails, payment remains trapped unless an automated rollback pattern coordinates them.';
      } else {
        badgeText = 'TRANSACTION RESOLVED: ' + strategyName;
        badgeType = 'solution';
        telemetryText = isB ? 'SAGA COMPENSATION: REFUND PROCESSED IN 80ms' : '2PC: PREPARE -> COMMIT HANDSHAKE VALIDATED';
        footerTitle = 'Distributed Transaction Coordination (' + strategyName + ')';
        footerDesc = 'Using ' + strategyName + ', services communicate cleanly. If step 2 fails, an automated compensating refund restores money to the rider instantly!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city') +
        '<g transform=\"translate(180, 200)\"><rect x=\"-36\" y=\"-20\" width=\"72\" height=\"40\" rx=\"6\" fill=\"#0f172a\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/><text x=\"0\" y=\"-4\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">PAYMENT SVC</text><text x=\"0\" y=\"10\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"700\" fill=\"#4ade80\">CHARGED ₹300</text></g>' +
        '<g transform=\"translate(460, 200)\"><rect x=\"-36\" y=\"-20\" width=\"72\" height=\"40\" rx=\"6\" fill=\"#0f172a\" stroke=\"' + (isOptimal ? '#38bdf8' : '#ef4444') + '\" stroke-width=\"1.5\"/><text x=\"0\" y=\"-4\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">DRIVER SVC</text><text x=\"0\" y=\"10\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"700\" fill=\"' + (isOptimal ? '#4ade80' : '#ef4444') + '\">' + (isOptimal ? 'COORDINATED' : 'CANCELLED!') + '</text></g>';

      if (isOptimal) {
        inner += '<g transform=\"translate(320, 200)\"><circle cx=\"0\" cy=\"0\" r=\"22\" fill=\"#0f172a\" stroke=\"#22c55e\" stroke-width=\"2\" class=\"core-pulse\"/><text x=\"0\" y=\"-4\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">' + (isB ? 'SAGA' : '2PC') + '</text><text x=\"0\" y=\"8\" text-anchor=\"middle\" font-size=\"7\" font-weight=\"800\" fill=\"#4ade80\">ORCHESTRATOR</text></g>' +
          this.renderConduit(216, 200, 298, 200, '#22c55e') +
          this.renderConduit(342, 200, 424, 200, '#22c55e');
      } else {
        inner += this.renderConduit(216, 200, 424, 200, '#ef4444', false);
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.gitMerge({size:24, color:'#38bdf8'}) || '🔄') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderCircuitBreakerScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isB = choice && choice.id === 'B';

      if (!choice) {
        badgeText = 'CASCADING FAILURE: Third-Party Bank API Down! Hanging 10,000 Server Threads!';
        badgeType = 'problem';
        telemetryText = 'BANK TIMEOUT: 30s • THREADS: 100% EXHAUSTED';
        footerTitle = 'Cascading Microservice Collapse';
        footerDesc = 'When the external bank payment gateway freezes, RideQuest servers keep thousands of connection threads waiting. The thread pool starves and kills the entire app.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Circuit Breaker TRIPPED OPEN (Fast-Failover in 1ms)';
        badgeType = 'solution';
        telemetryText = 'CIRCUIT STATE: OPEN • FAST FALLBACK: WALLET • 0 HANGS';
        footerTitle = 'Resilient Circuit Breaker';
        footerDesc = 'After 5 timeouts, the Circuit Breaker trips OPEN! It halts traffic to the failing bank immediately and falls back to RideQuest Wallet in 1 millisecond.';
      } else {
        badgeText = 'DISASTER COLLAPSE: 10,000 Threads Stuck in 30s Retry Loops! Server Crashed!';
        badgeType = 'problem';
        telemetryText = 'OUTAGE: 100% CRASH • ALL APIS FROZEN';
        footerTitle = 'Thread Pool Exhaustion Crash';
        footerDesc = 'Retrying a broken dependency in a tight loop exhausts every worker thread in the server cluster, bringing down login, maps, and ride booking!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city') +
        this.renderServerRack(200, 200, 'App Gateway', isOptimal ? 'healthy' : 'crashing', isOptimal ? '24%' : '100%', isOptimal ? '42°C' : '99°C') +
        '<g transform=\"translate(320, 200)\"><ellipse cx=\"0\" cy=\"18\" rx=\"26\" ry=\"13\" fill=\"rgba(0,0,0,0.3)\"/><rect x=\"-30\" y=\"-20\" width=\"60\" height=\"40\" rx=\"6\" fill=\"#0f172a\" stroke=\"' + (isOptimal ? '#f59e0b' : '#ef4444') + '\" stroke-width=\"1.8\"/><text x=\"0\" y=\"-8\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">BREAKER</text><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"800\" fill=\"' + (isOptimal ? '#f59e0b' : '#22c55e') + '\">' + (isOptimal ? 'OPEN (TRIPPED)' : 'CLOSED') + '</text><line x1=\"-14\" y1=\"12\" x2=\"' + (isOptimal ? '8' : '14') + '\" y2=\"' + (isOptimal ? '-14' : '12') + '\" stroke=\"' + (isOptimal ? '#f59e0b' : '#22c55e') + '\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>' +
        '<g transform=\"translate(460, 200)\"><rect x=\"-40\" y=\"-20\" width=\"80\" height=\"40\" rx=\"6\" fill=\"#450a0a\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"0\" y=\"-4\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">EXTERNAL BANK</text><text x=\"0\" y=\"10\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"700\" fill=\"#fca5a5\">UNRESPONSIVE</text></g>';

      if (isOptimal) {
        inner += this.renderConduit(226, 200, 290, 200, '#22c55e') +
          '<g transform=\"translate(200, 290)\"><rect x=\"-42\" y=\"-12\" width=\"84\" height=\"24\" rx=\"5\" fill=\"#065f46\" stroke=\"#34d399\"/><text x=\"0\" y=\"4\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"800\" fill=\"#fff\">FALLBACK: WALLET</text></g>' +
          this.renderConduit(200, 230, 200, 278, '#34d399');
      } else {
        inner += this.renderConduit(226, 200, 290, 200, '#ef4444') +
          this.renderConduit(350, 200, 420, 200, '#ef4444');
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.shieldCheck({size:24, color:'#f59e0b'}) || '⚡') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderMicroservicesScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isA = choice && choice.id === 'A';

      if (!choice) {
        badgeText = 'MONOLITH FAILURE: Coupon Code Crash Killed Entire City Ride System!';
        badgeType = 'problem';
        telemetryText = 'BLAST RADIUS: 100% COLLAPSE • SHARED MEMORY';
        footerTitle = 'Monolithic Blast Radius';
        footerDesc = 'In a monolith, a small bug in a low-priority promotional coupon code crashes the operating system process, immediately terminating all live GPS rides in progress.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Independent Microservices (Rider, Driver, Payment Pods)';
        badgeType = 'solution';
        telemetryText = 'SERVICES: 100% INDEPENDENT • BLAST RADIUS: ISOLATED';
        footerTitle = 'Decoupled Microservice Resilience';
        footerDesc = 'Rider, Driver, and Payment services run in isolated container pods. If the Coupon service crashes, active rides and dispatches continue without interruption!';
      } else if (isA) {
        badgeText = 'MONOLITH DISASTER: Memory Leak in Coupon Module Crashed Whole App!';
        badgeType = 'problem';
        telemetryText = 'SHARED MEMORY CORRUPTION • PROCESS TERMINATED';
        footerTitle = 'Monolithic Process Crash';
        footerDesc = 'A single out-of-memory error in the promo code engine brings down the shared application memory, killing payments and dispatches simultaneously!';
      } else {
        badgeText = 'NANO-SERVICE EXPLOSION: 40 HTTP Hops Per Booking! Network Storm!';
        badgeType = 'warning';
        telemetryText = 'LATENCY: +1,800ms • 40 NETWORK HOPS';
        footerTitle = 'Nano-Service Anti-Pattern';
        footerDesc = 'Breaking an app into 1,000 tiny nano-services introduces massive network latency, circular dependencies, and debugging nightmares!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city');
      if (isOptimal) {
        inner += '<g transform=\"translate(190, 190)\"><rect x=\"-36\" y=\"-22\" width=\"72\" height=\"44\" rx=\"6\" fill=\"#0f172a\" stroke=\"#22c55e\" stroke-width=\"1.8\"/><text x=\"0\" y=\"-6\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">RIDER POD</text><text x=\"0\" y=\"8\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"700\" fill=\"#4ade80\">ONLINE</text></g>' +
          '<g transform=\"translate(320, 220)\"><rect x=\"-36\" y=\"-22\" width=\"72\" height=\"44\" rx=\"6\" fill=\"#0f172a\" stroke=\"#22c55e\" stroke-width=\"1.8\"/><text x=\"0\" y=\"-6\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">DRIVER POD</text><text x=\"0\" y=\"8\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"700\" fill=\"#4ade80\">ONLINE</text></g>' +
          '<g transform=\"translate(450, 190)\"><rect x=\"-36\" y=\"-22\" width=\"72\" height=\"44\" rx=\"6\" fill=\"#0f172a\" stroke=\"#ef4444\" stroke-width=\"1.8\"/><text x=\"0\" y=\"-6\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">COUPON POD</text><text x=\"0\" y=\"8\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"700\" fill=\"#ef4444\">CRASHED (ISOLATED)</text></g>' +
          this.renderConduit(226, 190, 284, 220, '#22c55e');
      } else if (isA) {
        inner += '<g transform=\"translate(320, 190)\"><rect x=\"-90\" y=\"-45\" width=\"180\" height=\"90\" rx=\"8\" fill=\"#450a0a\" stroke=\"#ef4444\" stroke-width=\"2.5\"/><text x=\"0\" y=\"-12\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"900\" fill=\"#fff\">MONOLITHIC PROCESS</text><text x=\"0\" y=\"8\" text-anchor=\"middle\" font-size=\"8.5\" font-weight=\"800\" fill=\"#fca5a5\">COUPON MEMORY LEAK</text><text x=\"0\" y=\"26\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"900\" fill=\"#ef4444\">PROCESS TERMINATED (EXIT 1)</text></g>';
      } else {
        inner += '<g transform=\"translate(320, 190)\"><text x=\"0\" y=\"0\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"900\" fill=\"#ef4444\">40 HTTP NETWORK HOPS</text><text x=\"0\" y=\"16\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"700\" fill=\"#94a3b8\">TIMEOUTS CASCADE</text></g>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.box({size:24, color:'#22c55e'}) || '📦') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderApiStylesScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);

      if (!choice) {
        badgeText = '3G NETWORK OVERHEAD: Bloated 50KB XML Choking Low-Bandwidth Mobile!';
        badgeType = 'problem';
        telemetryText = 'PAYLOAD: 50KB • 3 ROUNDTRIPS • BATTERY DRAIN';
        footerTitle = 'Mobile Network Serialization Overhead';
        footerDesc = 'Drivers on poor cellular networks struggle to download heavy XML schemas and verbose text tags. Requests time out before fares load.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Binary gRPC & Precision GraphQL (1.2KB Fast Mobile Payload)';
        badgeType = 'solution';
        telemetryText = 'PAYLOAD: 1.2KB • 1 ROUNDTRIP • 35ms LOAD';
        footerTitle = 'Lightweight API Efficiency';
        footerDesc = 'gRPC binary serialization and GraphQL precision queries strip away 97% of payload weight. The app responds in 35ms over weak 3G networks!';
      } else {
        badgeText = 'BANDWIDTH CHOKE: 50KB XML Burnt Mobile Data & Froze UI Thread!';
        badgeType = 'warning';
        telemetryText = 'PARSING TIME: 450ms • TIMEOUT ON 3G';
        footerTitle = 'XML Serialization Penalty';
        footerDesc = 'Transmitting bulky XML over cellular networks drains battery, consumes mobile data, and freezes mobile devices while parsing schemas!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city') +
        this.renderPassenger(120, 200, 'requesting', isOptimal ? 'happy' : 'waiting', '#3498db', '3G Phone') +
        '<g transform=\"translate(300, 180)\"><line x1=\"0\" y1=\"20\" x2=\"0\" y2=\"-40\" stroke=\"#64748b\" stroke-width=\"3\"/><line x1=\"-14\" y1=\"-15\" x2=\"14\" y2=\"-15\" stroke=\"#64748b\" stroke-width=\"2\"/><line x1=\"-8\" y1=\"-30\" x2=\"8\" y2=\"-30\" stroke=\"#64748b\" stroke-width=\"2\"/><circle cx=\"0\" cy=\"-40\" r=\"3.5\" fill=\"' + (isOptimal ? '#22c55e' : '#ef4444') + '\"/></g>';

      if (isOptimal) {
        inner += this.renderConduit(140, 200, 290, 180, '#22c55e') +
          this.renderConduit(310, 180, 460, 200, '#22c55e') +
          '<g transform=\"translate(220, 180)\"><rect x=\"-24\" y=\"-8\" width=\"48\" height=\"16\" rx=\"4\" fill=\"#065f46\" stroke=\"#34d399\"/><text x=\"0\" y=\"3\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"900\" fill=\"#fff\">1.2KB gRPC</text></g>';
      } else {
        inner += this.renderConduit(140, 200, 290, 180, '#ef4444') +
          '<g transform=\"translate(220, 180)\"><rect x=\"-30\" y=\"-12\" width=\"60\" height=\"24\" rx=\"4\" fill=\"#7f1d1d\" stroke=\"#ef4444\"/><text x=\"0\" y=\"3\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">50KB XML</text></g>';
      }

      inner += this.renderServerRack(480, 200, 'Backend API', 'healthy');

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.zap({size:24, color:'#22c55e'}) || '⚡') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderRateLimiterScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isB = choice && choice.id === 'B';

      if (!choice) {
        badgeText = 'DDoS ATTACK DETECTED: Malicious Bot Tapping 50 Booking Clicks/sec!';
        badgeType = 'problem';
        telemetryText = 'SPAM RATE: 50 TAPS/SEC • SERVER CHOKING';
        footerTitle = 'Malicious API Abuse';
        footerDesc = 'Spam scripts automated booking endpoints, consuming database slots and preventing real passengers from booking rides.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Token Bucket Rate Limiter (Real Users Pass, Bots 429 Blocked)';
        badgeType = 'solution';
        telemetryText = 'LEGITIMATE USERS: PASS • BOT DEFLECTED (HTTP 429)';
        footerTitle = 'Token Bucket Precision Limiting';
        footerDesc = 'The Token Bucket allows genuine human taps to consume tokens freely, while excessive bot spam depletes the bucket and receives an instant HTTP 429 Too Many Requests!';
      } else {
        badgeText = 'COLLATERAL DAMAGE: 2,000 College Students Banned on Shared Public IP!';
        badgeType = 'warning';
        telemetryText = 'FALSE POSITIVES: 2,000 PASSENGERS LOCKED OUT';
        footerTitle = 'Overly Aggressive IP Banning';
        footerDesc = 'Banning entire IP addresses blocks innocent passengers sharing public Wi-Fi networks in universities, airports, and offices!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city') +
        this.renderPassenger(100, 170, 'requesting', 'happy', '#22c55e', 'Real Rider') +
        this.renderPassenger(100, 250, 'requesting', 'angry', '#ef4444', isB ? 'Blocked Student' : 'Spam Bot (50/s)') +
        '<g transform=\"translate(300, 200)\"><ellipse cx=\"0\" cy=\"18\" rx=\"28\" ry=\"14\" fill=\"rgba(0,0,0,0.3)\"/><polygon points=\"-18,4 0,14 0,-40 -18,-50\" fill=\"#1e293b\"/><polygon points=\"0,14 18,4 18,-50 0,-40\" fill=\"#334155\"/><rect x=\"-42\" y=\"24\" width=\"84\" height=\"22\" rx=\"5\" fill=\"#0f172a\" stroke=\"' + (isOptimal ? '#22c55e' : '#ef4444') + '\"/><text x=\"0\" y=\"36\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">' + (isOptimal ? 'TOKEN BUCKET' : 'IP BAN SHIELD') + '</text>' +
        (isOptimal ? '<path d=\"M-22,-20 A24,24 0 0,0 -22,10\" stroke=\"#ef4444\" stroke-width=\"4\" fill=\"none\"/><text x=\"-34\" y=\"-4\" font-size=\"8\" font-weight=\"900\" fill=\"#ef4444\">429</text>' : '') +
        '</g>' +
        this.renderServerRack(460, 200, 'Protected API', 'healthy');

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.shieldCheck({size:24, color:'#22c55e'}) || '🛡️') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderProtocolsScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);

      if (!choice) {
        badgeText = 'LATENCY STUTTER: Taxi Jumping 100m on Map Due to HTTP Polling Overhead!';
        badgeType = 'problem';
        telemetryText = 'PROTOCOL: HTTP/1.1 POLLING • 100m JUMPS';
        footerTitle = 'HTTP Request Overhead Latency';
        footerDesc = 'Repeatedly opening and closing TCP/HTTP connections every 500ms creates massive header overhead, making taxis jump erratically on the rider\'s map.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Full-Duplex WebSocket Pipe (60 FPS Smooth Vehicle Glide)';
        badgeType = 'solution';
        telemetryText = 'PROTOCOL: WSS // STREAM • 60 FPS • 12ms PING';
        footerTitle = 'Real-Time WebSocket Stream';
        footerDesc = 'A persistent bidirectional WebSocket pipe streams GPS coordinates with minimal framing overhead. The taxi glides across the map at a smooth 60 FPS!';
      } else {
        badgeText = 'POLLING FLOOD: Empty HTTP Headers Overwhelmed Server; Stuttering Taxi!';
        badgeType = 'warning';
        telemetryText = 'REQUESTS: 20 REQ/SEC • SERVER SATURATION';
        footerTitle = 'Short Polling Bottleneck';
        footerDesc = 'Short polling spams the server with empty GET requests. When 100,000 riders poll every 500ms, the server wastes 95% of its CPU parsing HTTP headers!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city') +
        this.renderPassenger(120, 200, 'requesting', 'happy', '#3498db', 'Passenger App') +
        this.renderRoad(180, 220, 480, 220, 40) +
        this.renderCab(isOptimal ? 320 : 240, 215, 'active', 'Ola Taxi', isOptimal);

      if (isOptimal) {
        inner += '<g transform=\"translate(300, 150)\"><rect x=\"-60\" y=\"-10\" width=\"120\" height=\"20\" rx=\"5\" fill=\"#0f172a\" stroke=\"#22c55e\" stroke-width=\"1.8\"/><text x=\"0\" y=\"3\" text-anchor=\"middle\" font-size=\"8.5\" font-weight=\"900\" fill=\"#22c55e\">WEBSOCKET STREAM (60 FPS)</text></g>' +
          this.renderConduit(140, 200, 240, 150, '#22c55e') +
          this.renderConduit(360, 150, 460, 200, '#22c55e');
      } else {
        inner += '<g transform=\"translate(300, 150)\"><text x=\"0\" y=\"3\" text-anchor=\"middle\" font-size=\"8.5\" font-weight=\"900\" fill=\"#ef4444\">HTTP GET (STUTTER)</text></g>' +
          this.renderConduit(140, 200, 460, 200, '#ef4444', false);
      }

      inner += this.renderServerRack(480, 200, 'GPS Gateway', 'healthy');

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.activity({size:24, color:'#22c55e'}) || '📶') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderMessageQueueScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);

      if (!choice) {
        badgeText = 'MIDNIGHT NYE SURGE: 80,000 Requests in 10s Crashing Worker Threads!';
        badgeType = 'problem';
        telemetryText = 'CAPACITY: 2,000/s • 60,000 REQUESTS LOST';
        footerTitle = 'Synchronous Worker Saturation';
        footerDesc = 'When midnight strikes on New Year\'s Eve, 80,000 booking requests arrive simultaneously. Workers cannot respond fast enough, leading to massive connection drops.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Durable Kafka Message Queue Buffer (0 Dropped Requests)';
        badgeType = 'solution';
        telemetryText = 'QUEUE BUFFER: 80,000 SAFE • DRAIN: 4,000/s • 0 LOSS';
        footerTitle = 'Durable Asynchronous Buffering';
        footerDesc = 'Incoming requests drop immediately onto an asynchronous Kafka queue buffer. Workers pull tasks at their own safe pace, ensuring zero bookings are lost!';
      } else {
        badgeText = 'GATEWAY TIMEOUT 504: Direct Synchronous Calls Crashed Workers!';
        badgeType = 'problem';
        telemetryText = 'THREAD POOL: EXHAUSTED IN 1.5s • 504 TIMEOUT';
        footerTitle = 'Thread Starvation Collapse';
        footerDesc = 'Making direct synchronous HTTP calls during sudden surges exhausts worker thread pools instantly, returning 504 Gateway Timeouts to thousands of riders!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city') +
        this.renderPassenger(100, 170, 'requesting', 'happy', '#e67e22', 'NYE Surge 1') +
        this.renderPassenger(80, 220, 'requesting', 'happy', '#3498db', 'NYE Surge 2') +
        this.renderPassenger(110, 260, 'requesting', 'happy', '#9b59b6', '80k Requests');

      if (isOptimal) {
        inner += '<g transform=\"translate(280, 200)\"><ellipse cx=\"0\" cy=\"18\" rx=\"36\" ry=\"16\" fill=\"rgba(0,0,0,0.3)\"/><rect x=\"-45\" y=\"-15\" width=\"90\" height=\"30\" rx=\"6\" fill=\"#0f172a\" stroke=\"#f59e0b\" stroke-width=\"2\"/><line x1=\"-35\" y1=\"0\" x2=\"35\" y2=\"0\" stroke=\"#f59e0b\" stroke-width=\"2.5\" stroke-dasharray=\"6,6\" class=\"conveyor-anim\"/><text x=\"0\" y=\"24\" text-anchor=\"middle\" font-size=\"8.5\" font-weight=\"900\" fill=\"#f59e0b\">KAFKA BUFFER</text></g>' +
          this.renderConduit(140, 210, 235, 200, '#f59e0b') +
          this.renderConduit(325, 200, 420, 200, '#22c55e') +
          this.renderServerRack(440, 200, 'Worker Pool', 'healthy', '42%', '45°C');
      } else {
        inner += this.renderConduit(140, 210, 420, 200, '#ef4444') +
          this.renderServerRack(440, 200, 'Direct Workers', 'crashing', '100%', '98°C');
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.layers({size:24, color:'#f59e0b'}) || '📥') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderStreamProcessingScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);

      if (!choice) {
        badgeText = 'STALE SURGE PRICING: 6-Hour Batch Missed Sudden Rainstorm!';
        badgeType = 'problem';
        telemetryText = 'BATCH CYCLE: 6 HOURS • STALE DATA';
        footerTitle = 'Batch Processing Latency';
        footerDesc = 'A sudden monsoon downpour causes ride demand to skyrocket. Because fares calculate on a 6-hour batch cycle, drivers receive no surge incentive and go offline.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Apache Flink Stream Processing (Real-Time 5s Window Surge 1.8x)';
        badgeType = 'solution';
        telemetryText = 'WINDOW: 5 SECONDS • LIVE SURGE: 1.8x • REVENUE OPTIMAL';
        footerTitle = 'Real-Time Stream Processing';
        footerDesc = 'Apache Flink continuously aggregates GPS pings in a 5-second tumbling window. It detects the demand spike instantly and activates 1.8x surge within 5 seconds!';
      } else {
        badgeText = 'BATCH DELAY: Surge Computed 1 Hour Late After Rain Already Stopped!';
        badgeType = 'warning';
        telemetryText = 'LOST REVENUE: DRIVERS ALREADY WENT OFFLINE';
        footerTitle = 'Delayed Batch Drawback';
        footerDesc = 'Waiting for an hourly batch job means surge pricing triggers after the rain has stopped and customers are gone, hurting driver retention!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city') +
        this.renderCab(130, 170, 'active', 'Rain Ping 1') +
        this.renderCab(90, 220, 'active', 'Rain Ping 2') +
        this.renderCab(140, 260, 'active', 'Rain Ping 3');

      if (isOptimal) {
        inner += '<g transform=\"translate(300, 200)\"><ellipse cx=\"0\" cy=\"18\" rx=\"30\" ry=\"15\" fill=\"rgba(0,0,0,0.3)\"/><polygon points=\"-20,4 0,14 20,4 20,-30 0,-40 -20,-30\" fill=\"#0284c7\"/><ellipse cx=\"0\" cy=\"-40\" rx=\"20\" ry=\"10\" fill=\"#38bdf8\" class=\"core-pulse\"/><rect x=\"-42\" y=\"24\" width=\"84\" height=\"22\" rx=\"5\" fill=\"#0f172a\" stroke=\"#38bdf8\"/><text x=\"0\" y=\"36\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">APACHE FLINK</text><text x=\"0\" y=\"52\" text-anchor=\"middle\" font-size=\"8.5\" font-weight=\"900\" fill=\"#4ade80\">5s WINDOW: 1.8x</text></g>' +
          this.renderConduit(150, 220, 280, 200, '#38bdf8') +
          this.renderConduit(320, 200, 450, 200, '#22c55e');
      } else {
        inner += '<g transform=\"translate(300, 200)\"><rect x=\"-45\" y=\"-20\" width=\"90\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#ef4444\"/><text x=\"0\" y=\"-4\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">BATCH CRON</text><text x=\"0\" y=\"12\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"700\" fill=\"#f87171\">WAITING 1 HOUR</text></g>';
      }

      inner += this.renderServerRack(470, 200, 'Surge Engine', 'healthy');

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.activity({size:24, color:'#38bdf8'}) || '⚡') : (window.Icons?.clock({size:24, color:'#ef4444'}) || '⏳'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderFulltextSearchScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);

      if (!choice) {
        badgeText = 'SEARCH TIMEOUT: SQL LIKE %Kempegowda% Scanning 50,000 Places!';
        badgeType = 'problem';
        telemetryText = 'SCAN TIME: 8.4 SECONDS • UNINDEXED';
        footerTitle = 'Wildcard SQL Search Overhead';
        footerDesc = "Passengers typing destination addresses trigger leading wildcard searches ('%airport%'). The database is forced to examine every string character by character.";
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Elasticsearch Inverted Index (3ms Instant Fuzzy Match)';
        badgeType = 'solution';
        telemetryText = 'MATCH TIME: 3 MILLISECONDS • INVERTED INDEX';
        footerTitle = 'Inverted Index Search';
        footerDesc = 'An Inverted Index breaks addresses into search tokens ("kempegowda" -> doc_id #42). Location lookups resolve in 3 milliseconds with typo tolerance!';
      } else {
        badgeText = 'DATABASE FREEZE: Full Table Scan on Every Keystroke (8s Latency)!';
        badgeType = 'warning';
        telemetryText = 'QUERY TIMED OUT • USER DROPOUT';
        footerTitle = 'Unindexed Text Search Penalty';
        footerDesc = 'Running SQL LIKE wildcard queries across thousands of addresses without full-text indexing causes search timeouts and high database load.';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'airport') +
        this.renderPassenger(120, 200, 'requesting', isOptimal ? 'happy' : 'waiting', '#3498db', 'Typing "Airport"');

      if (isOptimal) {
        inner += '<g transform=\"translate(320, 190)\"><ellipse cx=\"0\" cy=\"18\" rx=\"30\" ry=\"15\" fill=\"rgba(0,0,0,0.3)\"/><rect x=\"-45\" y=\"-22\" width=\"90\" height=\"44\" rx=\"6\" fill=\"#0f172a\" stroke=\"#22c55e\" stroke-width=\"1.8\"/><text x=\"0\" y=\"-8\" text-anchor=\"middle\" font-size=\"8.5\" font-weight=\"900\" fill=\"#fff\">INVERTED INDEX</text><text x=\"0\" y=\"6\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"800\" fill=\"#38bdf8\">\"airprt\" -> #42</text><text x=\"0\" y=\"16\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"900\" fill=\"#4ade80\">MATCH IN 3ms</text></g>' +
          this.renderConduit(140, 200, 275, 190, '#22c55e') +
          this.renderCab(460, 200, 'active', 'Kempegowda Airport');
      } else {
        inner += this.renderConduit(140, 200, 310, 200, '#ef4444') +
          this.renderDatabaseVault(330, 200, 'SQL DB (LIKE %..%)', 'thrashing');
      }

      return this.wrapScene({
        theme: isOptimal ? 'airport' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.search({size:24, color:'#22c55e'}) || '🔍') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderClientServerScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isA = choice && choice.id === 'A';

      if (!choice) {
        badgeText = 'P2P MESH COLLAPSE: Phone Broadcasting Across All City Devices!';
        badgeType = 'problem';
        telemetryText = 'BATTERY: DRAINED IN 5 MIN • NO GLOBAL STATE';
        footerTitle = 'Peer-to-Peer Mobility Breakdown';
        footerDesc = 'Without a central server, passenger phones attempt direct radio broadcasts to discover nearby drivers, causing broadcast storms and rapid battery drain.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Client-Server Architecture (Cloud Brain Coordination)';
        badgeType = 'solution';
        telemetryText = 'LATENCY: 40ms • THIN CLIENT • CENTRALIZED TRUTH';
        footerTitle = 'Client-Server Architecture';
        footerDesc = 'The phone is a thin client that sends booking intent to the Cloud Server. The server maintains global city state, matching passengers and drivers in 40ms!';
      } else if (isA) {
        badgeText = 'MESH COLLAPSE: Broadcasting to 10k Devices Drained Battery in 5 Min!';
        badgeType = 'problem';
        telemetryText = 'BROADCAST STORM • P2P DESYNC';
        footerTitle = 'P2P Broadcast Storm';
        footerDesc = 'Direct device-to-device mesh networking cannot maintain city-wide ride state and drains the rider\'s battery within minutes!';
      } else {
        badgeText = 'STORAGE FULL: Downloading 40GB City Database Crashed Mobile App!';
        badgeType = 'warning';
        telemetryText = 'DISK: 40GB DOWNLOAD • OUT OF MEMORY CRASH';
        footerTitle = 'Thick Client Storage Explosion';
        footerDesc = 'Forcing mobile clients to store all city map data locally requires 40GB downloads, crashing normal mobile phones!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city') +
        this.renderPassenger(120, 200, 'requesting', isOptimal ? 'happy' : 'waiting', '#3498db', 'Rider Phone');

      if (isOptimal) {
        inner += '<g transform=\"translate(320, 190)\"><ellipse cx=\"0\" cy=\"18\" rx=\"30\" ry=\"15\" fill=\"rgba(0,0,0,0.3)\"/><polygon points=\"-20,6 0,16 20,6 20,-30 0,-40 -20,-30\" fill=\"#0284c7\"/><ellipse cx=\"0\" cy=\"-40\" rx=\"20\" ry=\"10\" fill=\"#38bdf8\" class=\"core-pulse\"/><rect x=\"-42\" y=\"24\" width=\"84\" height=\"22\" rx=\"5\" fill=\"#0f172a\" stroke=\"#38bdf8\"/><text x=\"0\" y=\"36\" text-anchor=\"middle\" font-size=\"8.5\" font-weight=\"900\" fill=\"#fff\">CLOUD BRAIN</text></g>' +
          this.renderConduit(140, 200, 300, 190, '#22c55e') +
          this.renderConduit(340, 190, 480, 200, '#22c55e') +
          this.renderCab(490, 200, 'active', 'Matched Cab', true);
      } else if (isA) {
        inner += '<g transform=\"translate(240, 190)\"><circle cx=\"0\" cy=\"0\" r=\"30\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" class=\"iso-phone-ping\"/><text x=\"0\" y=\"38\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#ef4444\">BROADCAST STORM</text></g>';
      } else {
        inner += '<g transform=\"translate(320, 190)\"><rect x=\"-45\" y=\"-20\" width=\"90\" height=\"40\" rx=\"6\" fill=\"#7f1d1d\" stroke=\"#ef4444\"/><text x=\"0\" y=\"-4\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">40GB DOWNLOAD</text><text x=\"0\" y=\"10\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"700\" fill=\"#fca5a5\">OUT OF STORAGE</text></g>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.server({size:24, color:'#38bdf8'}) || '☁️') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderCdnEdgeScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);

      if (!choice) {
        badgeText = 'LATENCY PENALTY: Delhi Rider Fetching Map Assets from Chennai (2,200 km)!';
        badgeType = 'problem';
        telemetryText = 'ROUNDTRIP: 240ms • 2,200 KM • BLANK MAP TILES';
        footerTitle = 'Geographic Latency Penalty';
        footerDesc = 'A rider in Delhi downloading map images from a single origin server in Chennai suffers high roundtrip latency and slow screen rendering.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: CDN Edge Node Deployed in Delhi (8ms Cache Hit)';
        badgeType = 'solution';
        telemetryText = 'EDGE LATENCY: 8ms • INSTANT MAP TILES • 0 ORIGIN HITS';
        footerTitle = 'Content Delivery Network Edge';
        footerDesc = 'A CDN Edge PoP in Delhi caches static map assets locally. The rider downloads map tiles in 8 milliseconds without crossing the country!';
      } else {
        badgeText = 'ROUNDTRIP LAG: 240ms Cross-Country Latency Showed Blank Grey Tiles!';
        badgeType = 'warning';
        telemetryText = 'ROUNDTRIP: 240ms • CHENNAI FETCH';
        footerTitle = 'Origin Bottleneck Delay';
        footerDesc = 'Without CDN edge caching, static assets must travel thousands of kilometers for every screen refresh, causing blank map tiles.';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city') +
        this.renderPassenger(110, 180, 'requesting', isOptimal ? 'happy' : 'waiting', '#3498db', 'Delhi Rider');

      if (isOptimal) {
        inner += '<g transform=\"translate(260, 200)\"><ellipse cx=\"0\" cy=\"16\" rx=\"24\" ry=\"12\" fill=\"rgba(0,0,0,0.3)\"/><rect x=\"-36\" y=\"-18\" width=\"72\" height=\"36\" rx=\"6\" fill=\"#0f172a\" stroke=\"#22c55e\" stroke-width=\"1.8\"/><text x=\"0\" y=\"-4\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#fff\">DELHI CDN PoP</text><text x=\"0\" y=\"8\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"800\" fill=\"#4ade80\">8ms EDGE HIT</text></g>' +
          this.renderConduit(130, 180, 224, 200, '#22c55e');
      } else {
        inner += this.renderConduit(130, 180, 440, 200, '#ef4444') +
          '<g transform=\"translate(290, 175)\"><text x=\"0\" y=\"0\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"900\" fill=\"#ef4444\">2,200 KM (240ms)</text></g>';
      }

      inner += this.renderServerRack(460, 200, 'Chennai Origin', 'healthy');

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.globe({size:24, color:'#22c55e'}) || '🌐') : (window.Icons?.clock({size:24, color:'#ef4444'}) || '⏳'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderRecSysScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);

      if (!choice) {
        badgeText = 'NAIVE MATCHING: Driver A Assigned by Pure Distance (High Cancellation Risk)!';
        badgeType = 'problem';
        telemetryText = 'NAIVE DISTANCE: 50m • 3.1★ • 40% CANCELS';
        footerTitle = 'Naive Proximity Matching';
        footerDesc = 'Assigning solely based on distance selects Driver A who is 50 meters away, but Driver A has a 3.1★ rating and cancels 50% of bookings.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Multi-Factor ML Ranking (Dispatched Top 4.9★ Driver B)';
        badgeType = 'solution';
        telemetryText = 'ML SCORE: 98/100 • 4.9★ • 99% COMPLETION';
        footerTitle = 'Multi-Signal Recommendation Ranking';
        footerDesc = 'The ML ranking engine evaluates rating, historical completion rates, vehicle type, and traffic, selecting Driver B (4.9★) for a reliable trip!';
      } else {
        badgeText = 'TRIP CANCELLED: Closer Driver A Cancelled Trip; Passenger Stranded!';
        badgeType = 'warning';
        telemetryText = 'STRANDED PASSENGER • 0 RIDES FINISHED';
        footerTitle = 'High-Cancellation Driver Match';
        footerDesc = 'Relying solely on proximity assigns low-rated drivers with high cancellation tendencies, leaving passengers stranded on the curb!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'city') +
        this.renderPassenger(280, 200, 'idle', isOptimal ? 'happy' : 'waiting', '#3498db', 'Passenger') +
        this.renderCab(150, 160, isOptimal ? 'idle' : 'active', isOptimal ? 'Driver A (3.1★)' : 'Driver A (Cancelled!)', false) +
        this.renderCab(420, 220, isOptimal ? 'active' : 'idle', 'Driver B (4.9★ Top Rated)', isOptimal);

      if (isOptimal) {
        inner += '<line x1=\"280\" y1=\"200\" x2=\"410\" y2=\"220\" stroke=\"#22c55e\" stroke-width=\"2.5\" stroke-dasharray=\"4,4\" class=\"data-stream-anim\"/>';
      } else {
        inner += '<line x1=\"280\" y1=\"200\" x2=\"160\" y2=\"160\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-dasharray=\"4,4\"/>';
      }

      return this.wrapScene({
        theme: isOptimal ? 'day' : 'dusk',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.star({size:24, color:'#f59e0b'}) || '⭐') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderObservabilityScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);

      if (!choice) {
        badgeText = 'MYSTERY 500 ERROR: 45 Microservices with No Distributed Trace ID!';
        badgeType = 'problem';
        telemetryText = 'MTTR: 4 HOURS (MANUAL LOG GREP)';
        footerTitle = 'Distributed Microservice Blindspot';
        footerDesc = 'When a booking fails across 45 microservices, engineers have no correlation ID to trace what happened, causing multi-hour outages.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: OpenTelemetry Distributed Trace ID (Pinpointed Bug in 4 Seconds)';
        badgeType = 'solution';
        telemetryText = 'PINPOINTED: 4 SECONDS • SPAN: COUPON DB LOCK';
        footerTitle = 'End-to-End Distributed Tracing';
        footerDesc = 'OpenTelemetry injects a unique Trace ID into the request headers. Engineers immediately pinpoint the exact database lock inside the coupon service!';
      } else {
        badgeText = 'MTTR NIGHTMARE: Engineers Spent 4 Hours Grepping Scattered Logs!';
        badgeType = 'warning';
        telemetryText = 'MANUAL GREP • 50 SERVER LOGS • RIDERS SUFFERING';
        footerTitle = 'Manual Log Inspection Failure';
        footerDesc = 'Scattered console logs without correlation IDs require searching across 50 server logs, causing long mean-time-to-resolution!';
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'vault') +
        this.renderServerRack(180, 160, 'Gateway', 'healthy') +
        this.renderServerRack(320, 180, 'Auth Svc', 'healthy') +
        this.renderServerRack(460, 160, 'Coupon Svc', isOptimal ? 'overheated' : 'crashing');

      if (isOptimal) {
        inner += '<line x1=\"204\" y1=\"160\" x2=\"296\" y2=\"180\" stroke=\"#38bdf8\" stroke-width=\"2.5\" class=\"data-stream-anim\"/>' +
          '<line x1=\"344\" y1=\"180\" x2=\"436\" y2=\"160\" stroke=\"#f59e0b\" stroke-width=\"2.5\" class=\"data-stream-anim\"/>' +
          '<g transform=\"translate(460, 90)\"><rect x=\"-48\" y=\"-12\" width=\"96\" height=\"24\" rx=\"5\" fill=\"#f59e0b\" filter=\"drop-shadow(0 2px 4px rgba(0,0,0,0.3))\"/><text x=\"0\" y=\"4\" text-anchor=\"middle\" font-size=\"8.5\" font-weight=\"900\" fill=\"#000\">TRACE ID: #9a8f2</text><polygon points=\"0,12 -5,18 5,18\" fill=\"#f59e0b\"/></g>';
      } else {
        inner += '<g transform=\"translate(320, 260)\"><text x=\"0\" y=\"0\" text-anchor=\"middle\" font-size=\"8.5\" font-weight=\"900\" fill=\"#ef4444\">4 HOURS GREPPING LOGS</text></g>';
      }

      return this.wrapScene({
        theme: 'vault',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.activity({size:24, color:'#38bdf8'}) || '🔍') : (window.Icons?.alertTriangle({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    renderSecurityRbacScene(choice) {
      let badgeText = '', badgeType = 'problem', telemetryText = '', footerTitle = '', footerDesc = '';
      const isOptimal = Boolean(choice && choice.isOptimal);
      const isB = choice && choice.id === 'B';

      if (!choice) {
        badgeText = 'PRIVILEGE ESCALATION VULNERABILITY: Tampered Token Called /admin/withdraw!';
        badgeType = 'problem';
        telemetryText = 'RISK: PRIVILEGE ESCALATION • NO ROLE SIGNATURE';
        footerTitle = 'Privilege Escalation Threat';
        footerDesc = 'Without cryptographically signed role verification on endpoints, regular passenger accounts can tamper with request headers and access administrative tools.';
      } else if (isOptimal) {
        badgeText = 'SOLUTION: Cryptographic JWT Claims & Strict RBAC Gate (HTTP 403 Forbidden)';
        badgeType = 'solution';
        telemetryText = 'RBAC ENFORCED • 403 FORBIDDEN • IP FLAGGED';
        footerTitle = 'Cryptographic Role-Based Access Enforcement';
        footerDesc = 'The RBAC security gate inspects the cryptographically signed JWT token, confirms the caller lacks the "Admin" role, and deflects the payload with 403 Forbidden!';
      } else {
        badgeText = 'SECURITY BREACH: Client Tampered isAdmin=true; ₹5,00,000 Withdrawn!';
        badgeType = 'problem';
        telemetryText = 'THEFT: ₹5,00,000 • SECURITY BREACH';
        footerTitle = 'Insecure Direct Object Reference Breach';
        footerDesc = "Trusting client-side parameters like 'isAdmin=true' allows bad actors to modify requests and trigger administrative bank withdrawals!";
      }

      let inner = this.renderGrid(6, 5, 320, 110, 'vault') +
        this.renderPassenger(120, 200, 'requesting', 'waiting', '#ef4444', isB ? 'Attacker: isAdmin=true' : 'Attacker: Tampered Token') +
        '<g transform=\"translate(300, 200)\"><ellipse cx=\"0\" cy=\"18\" rx=\"26\" ry=\"13\" fill=\"rgba(0,0,0,0.3)\"/><rect x=\"-36\" y=\"-20\" width=\"72\" height=\"40\" rx=\"6\" fill=\"#0f172a\" stroke=\"' + (isOptimal ? '#22c55e' : '#ef4444') + '\" stroke-width=\"2\"/><text x=\"0\" y=\"-6\" text-anchor=\"middle\" font-size=\"8.5\" font-weight=\"900\" fill=\"#fff\">RBAC GATE</text><text x=\"0\" y=\"8\" text-anchor=\"middle\" font-size=\"7.5\" font-weight=\"800\" fill=\"' + (isOptimal ? '#4ade80' : '#ef4444') + '\">' + (isOptimal ? 'SIGNED JWT' : 'UNVERIFIED') + '</text>' +
        (isOptimal ? '<path d=\"M-22,-20 A22,22 0 0,0 -22,12\" stroke=\"#22c55e\" stroke-width=\"4\" fill=\"none\"/><text x=\"-40\" y=\"-4\" font-size=\"8\" font-weight=\"900\" fill=\"#22c55e\">403</text>' : '') +
        '</g>' +
        this.renderDatabaseVault(460, 200, 'Treasury Ledger', isOptimal ? 'normal' : 'thrashing');

      if (isOptimal) {
        inner += this.renderConduit(140, 200, 276, 200, '#ef4444');
      } else {
        inner += this.renderConduit(140, 200, 276, 200, '#ef4444') +
          this.renderConduit(324, 200, 436, 200, '#ef4444');
      }

      return this.wrapScene({
        theme: 'vault',
        badgeText, badgeType, telemetryText,
        footerIcon: isOptimal ? (window.Icons?.shieldCheck({size:24, color:'#22c55e'}) || '🛡️') : (window.Icons?.shieldAlert({size:24, color:'#ef4444'}) || '⚠️'),
        footerTitle, footerDesc, svgContent: inner
      });
    },

    // DISPATCHER: Maps any level simulation type to its dedicated bespoke scene
    renderScene(simType, choice, level) {
      switch (simType) {
        case 'servers_traffic':
          return this.renderServersTrafficScene(choice);
        case 'auth_simulation':
        case 'pipeline_bottleneck':
          return this.renderAuthScene(choice);
        case 'load_balancer_sim':
          return this.renderLoadBalancerScene(choice);
        case 'cap_network_partition':
          return this.renderCapPartitionScene(choice);
        case 'acid_transaction_sim':
          return this.renderAcidTransactionScene(choice);
        case 'cache_sim':
          return this.renderCacheScene(choice);
        case 'indexing_lookup':
          return this.renderIndexingScene(choice);
        case 'oltp_vs_olap':
          return this.renderOltpOlapScene(choice);
        case 'sharding_sim':
          return this.renderShardingScene(choice);
        case 'database_design_sim':
        case 'replication_failover':
          return this.renderDatabaseDesignScene(choice);
        case 'distributed_tx_sim':
          return this.renderDistributedTxScene(choice);
        case 'circuit_breaker_sim':
          return this.renderCircuitBreakerScene(choice);
        case 'microservices_sim':
        case 'vector_clock_sim':
          return this.renderMicroservicesScene(choice);
        case 'api_styles_sim':
          return this.renderApiStylesScene(choice);
        case 'rate_limiter_sim':
          return this.renderRateLimiterScene(choice);
        case 'protocols_sim':
          return this.renderProtocolsScene(choice);
        case 'message_queue_sim':
          return this.renderMessageQueueScene(choice);
        case 'stream_processing_sim':
          return this.renderStreamProcessingScene(choice);
        case 'fulltext_search_sim':
          return this.renderFulltextSearchScene(choice);
        case 'client_server_sim':
        case 'data_warehouse_sim':
          return this.renderClientServerScene(choice);
        case 'cdn_edge_sim':
          return this.renderCdnEdgeScene(choice);
        case 'recsys_sim':
          return this.renderRecSysScene(choice);
        case 'observability_sim':
          return this.renderObservabilityScene(choice);
        case 'security_rbac_sim':
          return this.renderSecurityRbacScene(choice);
        default:
          return this.renderServersTrafficScene(choice);
      }
    }
  };

  return DioramaEngine;
});
