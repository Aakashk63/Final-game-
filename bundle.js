/**
 * RideQuest - Professional SVG Icon & Illustration System
 * High-quality, consistent vector assets for System Design architectures,
 * mobile flows, mobility scenarios, and UI status states.
 */

var Icons;
(function (root, factory) {
  var instance = factory();
  Icons = instance;
  if (typeof module === 'object' && module.exports) {
    module.exports = instance;
  }
  if (root) {
    root.Icons = instance;
  }
  if (typeof window !== 'undefined') {
    window.Icons = instance;
  }
  if (typeof global !== 'undefined') {
    global.Icons = instance;
  }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this), function () {
  'use strict';

  function svg(content, { size = 20, viewBox = '0 0 24 24', color = 'currentColor', className = '', style = '' } = {}) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${viewBox}" fill="none" class="rq-icon ${className}" style="${style}" aria-hidden="true">${content}</svg>`;
  }

  function renderSvg(size, content, className = '') {
    return svg(content, { size, className });
  }

  const Icons = {
    // --- BRANDING & MOBILITY ---
    taxiCab({ size = 24, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <path d="M5 16l1.2-5.4A3 3 0 0 1 9.1 8h5.8a3 3 0 0 1 2.9 2.6L19 16" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 16h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <circle cx="7" cy="19.5" r="1.5" fill="${color}"/>
        <circle cx="17" cy="19.5" r="1.5" fill="${color}"/>
        <rect x="9" y="5" width="6" height="3" rx="1" fill="${color}" stroke="${color}" stroke-width="1.5"/>
        <line x1="12" y1="5" x2="12" y2="8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    car({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <path d="M4 14l1.5-6a2.5 2.5 0 0 1 2.4-1.9h8.2a2.5 2.5 0 0 1 2.4 1.9L20 14" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <rect x="3" y="14" width="18" height="5" rx="1.5" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="2"/>
        <circle cx="6.5" cy="18.5" r="1.5" fill="${color}"/>
        <circle cx="17.5" cy="18.5" r="1.5" fill="${color}"/>
        <line x1="8" y1="10" x2="16" y2="10" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    autoRickshaw({ size = 24, color = '#2e8b57', className = '' } = {}) {
      return svg(`
        <path d="M5 17h14v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2z" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="1.8"/>
        <path d="M6 17V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v9" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="11" y1="5" x2="11" y2="17" stroke="${color}" stroke-width="1.5"/>
        <circle cx="16" cy="18" r="2" fill="${color}"/>
        <circle cx="8" cy="18" r="2" fill="${color}"/>
        <path d="M3 13h3" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    bike({ size = 24, color = '#3498db', className = '' } = {}) {
      return svg(`
        <circle cx="6" cy="16" r="3" stroke="${color}" stroke-width="2"/>
        <circle cx="18" cy="16" r="3" stroke="${color}" stroke-width="2"/>
        <path d="M6 16l4-7h4l4 7M10 9l2 7M14 9l-2-4h-2" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="11" cy="4" r="1.2" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    driver({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="7" r="4" stroke="${color}" stroke-width="2"/>
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <path d="M8 5.5a4 4 0 0 1 8 0" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <line x1="15" y1="5" x2="19" y2="5" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    passenger({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="8" r="4" stroke="${color}" stroke-width="2"/>
        <path d="M5 20v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    users({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <circle cx="9" cy="8" r="3.5" stroke="${color}" stroke-width="2"/>
        <path d="M3 19v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <path d="M15 6.5a3 3 0 0 1 0 5M18 19v-1a3.5 3.5 0 0 0-2.5-3.3" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    pinLocation({ size = 24, color = '#e74c3c', className = '' } = {}) {
      return svg(`
        <path d="M12 21s-6-5.8-6-10.5a6 6 0 1 1 12 0c0 4.7-6 10.5-6 10.5z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="10" r="2.5" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    routeNavigation({ size = 24, color = '#3498db', className = '' } = {}) {
      return svg(`
        <circle cx="6" cy="19" r="2.5" fill="${color}" stroke="${color}" stroke-width="1.5"/>
        <circle cx="18" cy="5" r="2.5" fill="#2ecc71" stroke="#2ecc71" stroke-width="1.5"/>
        <path d="M6 16.5V13a4 4 0 0 1 4-4h4a4 4 0 0 0 4-4V7.5" stroke="${color}" stroke-width="2.5" stroke-dasharray="3 3" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    trafficJam({ size = 24, color = '#e67e22', className = '' } = {}) {
      return svg(`
        <rect x="2" y="10" width="8" height="5" rx="1" stroke="${color}" stroke-width="1.8"/>
        <rect x="14" y="10" width="8" height="5" rx="1" stroke="${color}" stroke-width="1.8"/>
        <circle cx="4" cy="15" r="1.2" fill="${color}"/>
        <circle cx="8" cy="15" r="1.2" fill="${color}"/>
        <circle cx="16" cy="15" r="1.2" fill="${color}"/>
        <circle cx="20" cy="15" r="1.2" fill="${color}"/>
        <line x1="12" y1="3" x2="12" y2="7" stroke="#e74c3c" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="12" cy="5" r="3" stroke="#e74c3c" stroke-width="1.8"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    // --- INFRASTRUCTURE & ARCHITECTURE ---
    server({ size = 24, color = 'currentColor', status = 'ok', className = '' } = {}) {
      const ledColor = status === 'danger' ? '#e74c3c' : (status === 'warning' ? '#f39c12' : '#2ecc71');
      return svg(`
        <rect x="3" y="4" width="18" height="6" rx="2" fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-width="1.8"/>
        <rect x="3" y="14" width="18" height="6" rx="2" fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-width="1.8"/>
        <circle cx="6.5" cy="7" r="1.2" fill="${ledColor}"/>
        <circle cx="9.5" cy="7" r="1.2" fill="${ledColor}"/>
        <line x1="14" y1="7" x2="18" y2="7" stroke="${color}" stroke-width="1.6" stroke-linecap="round"/>
        <circle cx="6.5" cy="17" r="1.2" fill="${ledColor}"/>
        <circle cx="9.5" cy="17" r="1.2" fill="${ledColor}"/>
        <line x1="14" y1="17" x2="18" y2="17" stroke="${color}" stroke-width="1.6" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    serverCluster({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <rect x="2" y="3" width="9" height="5" rx="1.5" stroke="${color}" stroke-width="1.6" fill="${color}" fill-opacity="0.1"/>
        <rect x="13" y="3" width="9" height="5" rx="1.5" stroke="${color}" stroke-width="1.6" fill="${color}" fill-opacity="0.1"/>
        <rect x="2" y="10" width="9" height="5" rx="1.5" stroke="${color}" stroke-width="1.6" fill="${color}" fill-opacity="0.1"/>
        <rect x="13" y="10" width="9" height="5" rx="1.5" stroke="${color}" stroke-width="1.6" fill="${color}" fill-opacity="0.1"/>
        <circle cx="4" cy="5.5" r="0.8" fill="#2ecc71"/>
        <circle cx="15" cy="5.5" r="0.8" fill="#2ecc71"/>
        <circle cx="4" cy="12.5" r="0.8" fill="#2ecc71"/>
        <circle cx="15" cy="12.5" r="0.8" fill="#2ecc71"/>
        <path d="M6.5 15v3.5a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5V15" stroke="${color}" stroke-width="1.6"/>
        <line x1="12" y1="18" x2="12" y2="20" stroke="${color}" stroke-width="1.6"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    serverMelted({ size = 24, color = '#e74c3c', className = '' } = {}) {
      return svg(`
        <rect x="3" y="8" width="18" height="12" rx="2" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2"/>
        <circle cx="6.5" cy="12" r="1.2" fill="${color}"/>
        <circle cx="9.5" cy="12" r="1.2" fill="${color}"/>
        <line x1="13" y1="12" x2="18" y2="12" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="6.5" cy="16" r="1.2" fill="${color}"/>
        <line x1="13" y1="16" x2="18" y2="16" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M7 6c1-2 2-2 3 0s2 2 3 0 2-2 3 0" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <path d="M10 2c.8-1 1.6-1 2.4 0" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    database({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <ellipse cx="12" cy="5" rx="8" ry="3" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8"/>
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="${color}" stroke-width="1.8"/>
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="${color}" stroke-width="1.8"/>
        <line x1="7" y1="11" x2="7.01" y2="11" stroke="#2ecc71" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="7" y1="17" x2="7.01" y2="17" stroke="#2ecc71" stroke-width="2.5" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    databaseReplica({ size = 24, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <ellipse cx="7" cy="6" rx="5" ry="2" stroke="${color}" stroke-width="1.6"/>
        <path d="M2 6v6c0 1.1 2.24 2 5 2s5-.9 5-2V6" stroke="${color}" stroke-width="1.6"/>
        <ellipse cx="17" cy="10" rx="5" ry="2" stroke="${color}" stroke-width="1.6"/>
        <path d="M12 10v6c0 1.1 2.24 2 5 2s5-.9 5-2v-6" stroke="${color}" stroke-width="1.6"/>
        <path d="M12 7h2a2 2 0 0 1 2 2v1" stroke="${color}" stroke-width="1.6" stroke-linecap="round"/>
        <polyline points="14 5 12 7 14 9" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    databaseShard({ size = 24, color = '#2980b9', className = '' } = {}) {
      return svg(`
        <rect x="2" y="5" width="6" height="14" rx="1.5" stroke="${color}" stroke-width="1.6" fill="${color}" fill-opacity="0.1"/>
        <rect x="9" y="5" width="6" height="14" rx="1.5" stroke="${color}" stroke-width="1.6" fill="${color}" fill-opacity="0.1"/>
        <rect x="16" y="5" width="6" height="14" rx="1.5" stroke="${color}" stroke-width="1.6" fill="${color}" fill-opacity="0.1"/>
        <line x1="3.5" y1="8" x2="6.5" y2="8" stroke="${color}" stroke-width="1.5"/>
        <line x1="10.5" y1="8" x2="13.5" y2="8" stroke="${color}" stroke-width="1.5"/>
        <line x1="17.5" y1="8" x2="20.5" y2="8" stroke="${color}" stroke-width="1.5"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    cache({ size = 24, color = '#e67e22', className = '' } = {}) {
      return svg(`
        <rect x="5" y="5" width="14" height="14" rx="2" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2"/>
        <path d="M9 9h6v6H9z" fill="${color}" fill-opacity="0.3"/>
        <path d="M3 9h2M3 15h2M19 9h2M19 15h2M9 3v2M15 3v2M9 19v2M15 19v2" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <path d="M12 9v6" stroke="${color}" stroke-width="1.5"/>
        <path d="M9 12h6" stroke="${color}" stroke-width="1.5"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    loadBalancer({ size = 24, color = '#8e44ad', className = '' } = {}) {
      return svg(`
        <rect x="2" y="9" width="6" height="6" rx="1.5" fill="${color}" stroke="${color}" stroke-width="1.8"/>
        <rect x="16" y="3" width="6" height="4" rx="1" stroke="${color}" stroke-width="1.6"/>
        <rect x="16" y="10" width="6" height="4" rx="1" stroke="${color}" stroke-width="1.6"/>
        <rect x="16" y="17" width="6" height="4" rx="1" stroke="${color}" stroke-width="1.6"/>
        <path d="M8 12h3a2 2 0 0 0 2-2V5h3" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M8 12h8" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M8 12h3a2 2 0 0 1 2 2v5h3" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    messageQueue({ size = 24, color = '#16a085', className = '' } = {}) {
      return svg(`
        <rect x="2" y="7" width="20" height="10" rx="3" fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-width="1.8"/>
        <rect x="4" y="9.5" width="4" height="5" rx="1" fill="${color}" fill-opacity="0.4" stroke="${color}" stroke-width="1.2"/>
        <rect x="10" y="9.5" width="4" height="5" rx="1" fill="${color}" fill-opacity="0.4" stroke="${color}" stroke-width="1.2"/>
        <rect x="16" y="9.5" width="4" height="5" rx="1" fill="${color}" fill-opacity="0.4" stroke="${color}" stroke-width="1.2"/>
        <path d="M7 4l2 3-2 3" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    circuitBreaker({ size = 24, color = '#c0392b', state = 'open', className = '' } = {}) {
      return svg(`
        <circle cx="5" cy="12" r="2.5" fill="${color}" stroke="${color}" stroke-width="1.5"/>
        <circle cx="19" cy="12" r="2.5" fill="${color}" stroke="${color}" stroke-width="1.5"/>
        ${state === 'open' 
          ? `<line x1="5" y1="12" x2="14" y2="5" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
             <line x1="14" y1="12" x2="19" y2="12" stroke="${color}" stroke-width="2" stroke-dasharray="2 2"/>`
          : `<line x1="5" y1="12" x2="19" y2="12" stroke="#27ae60" stroke-width="2.5" stroke-linecap="round"/>`}
        <rect x="2" y="2" width="20" height="20" rx="3" stroke="${color}" stroke-width="1.4" stroke-opacity="0.3"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    cdnNode({ size = 24, color = '#2980b9', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="12" r="9" stroke="${color}" stroke-width="1.8"/>
        <ellipse cx="12" cy="12" rx="4" ry="9" stroke="${color}" stroke-width="1.5"/>
        <line x1="3" y1="12" x2="21" y2="12" stroke="${color}" stroke-width="1.5"/>
        <circle cx="12" cy="12" r="2" fill="#e74c3c"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    apiGateway({ size = 24, color = '#8e44ad', className = '' } = {}) {
      return svg(`
        <path d="M4 4h16v16H4z" fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-width="1.8" rx="2"/>
        <path d="M4 9h16M4 15h16" stroke="${color}" stroke-width="1.5"/>
        <path d="M10 4v16M14 4v16" stroke="${color}" stroke-width="1.5"/>
        <circle cx="12" cy="12" r="2" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    networkPacket({ size = 24, color = '#3498db', className = '' } = {}) {
      return svg(`
        <polygon points="12 2 22 8 22 16 12 22 2 16 2 8 12 2" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="1.8" stroke-linejoin="round"/>
        <line x1="12" y1="2" x2="12" y2="12" stroke="${color}" stroke-width="1.5"/>
        <line x1="12" y1="12" x2="22" y2="8" stroke="${color}" stroke-width="1.5"/>
        <line x1="12" y1="12" x2="2" y2="8" stroke="${color}" stroke-width="1.5"/>
        <circle cx="12" cy="12" r="1.5" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    // --- MOBILE & AUTHENTICATION ---
    phone({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <rect x="5" y="2" width="14" height="20" rx="3" fill="${color}" fill-opacity="0.08" stroke="${color}" stroke-width="1.8"/>
        <line x1="10" y1="5" x2="14" y2="5" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="12" cy="18.5" r="1" fill="${color}"/>
        <rect x="7" y="7" width="10" height="9" rx="1" fill="${color}" fill-opacity="0.15"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    shield({ size = 24, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <path d="M12 3s8 3 8 9c0 5.5-4.5 8.5-8 10-3.5-1.5-8-4.5-8-10 0-6 8-9 8-9z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    shieldLock({ size = 24, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <path d="M12 2s7 2.6 7 8c0 5-4 7.7-7 9-3-1.3-7-4-7-9 0-5.4 7-8 7-8z" fill="${color}" fill-opacity="0.12" stroke="${color}" stroke-width="1.8"/>
        <rect x="9.5" y="11" width="5" height="4" rx="1" fill="${color}"/>
        <path d="M10.5 11v-1.5a1.5 1.5 0 0 1 3 0V11" stroke="${color}" stroke-width="1.4" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    shieldCheck({ size = 24, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <path d="M12 2s7 2.6 7 8c0 5-4 7.7-7 9-3-1.3-7-4-7-9 0-5.4 7-8 7-8z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8"/>
        <polyline points="9 11 11.5 13.5 15.5 8.5" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    shieldAlert({ size = 24, color = '#e74c3c', className = '' } = {}) {
      return svg(`
        <path d="M12 2s7 2.6 7 8c0 5-4 7.7-7 9-3-1.3-7-4-7-9 0-5.4 7-8 7-8z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8"/>
        <line x1="12" y1="8" x2="12" y2="12" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="15" r="1" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    lock({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <rect x="5" y="11" width="14" height="10" rx="2" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2"/>
        <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="16" r="1.5" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    unlock({ size = 24, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <rect x="5" y="11" width="14" height="10" rx="2" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2"/>
        <path d="M8 11V7a4 4 0 0 1 7.5-2" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="16" r="1.5" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    key({ size = 24, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <circle cx="7.5" cy="15.5" r="4.5" stroke="${color}" stroke-width="2"/>
        <path d="M11 12l8.5-8.5a1.5 1.5 0 0 1 2.1 0l.9.9a1.5 1.5 0 0 1 0 2.1L21 8l-2 2-2-2" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="7.5" cy="15.5" r="1.5" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    otpCode({ size = 24, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="${color}" stroke-width="1.8" fill="${color}" fill-opacity="0.1"/>
        <circle cx="7" cy="12" r="1.5" fill="${color}"/>
        <circle cx="10.5" cy="12" r="1.5" fill="${color}"/>
        <circle cx="14" cy="12" r="1.5" fill="${color}"/>
        <circle cx="17.5" cy="12" r="1.5" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    jwtToken({ size = 24, color = '#9b59b6', className = '' } = {}) {
      return svg(`
        <path d="M12 2l8 4.5v11L12 22 4 17.5v-11L12 2z" stroke="${color}" stroke-width="1.8" fill="${color}" fill-opacity="0.12"/>
        <path d="M8 9h8M8 12h8M8 15h5" stroke="${color}" stroke-width="1.6" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    // --- STATUS, ALERTS & FEEDBACK ---
    check({ size = 20, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <polyline points="4 12 9 17 20 6" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    checkCircle({ size = 20, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="12" r="10" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2"/>
        <polyline points="7.5 12 10.5 15 16.5 9" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    alertTriangle({ size = 20, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <path d="M10.3 3.6a2 2 0 0 1 3.4 0l8.1 14a2 2 0 0 1-1.7 3H3.9a2 2 0 0 1-1.7-3l8.1-14z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <line x1="12" y1="9" x2="12" y2="13" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="16.5" r="1" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    alertCircle({ size = 20, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="12" r="10" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2"/>
        <line x1="12" y1="7" x2="12" y2="12" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="12" cy="16" r="1.2" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    errorCircle({ size = 20, color = '#e74c3c', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="12" r="10" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2"/>
        <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
        <line x1="15.5" y1="8.5" x2="8.5" y2="15.5" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    fire({ size = 20, color = '#e74c3c', className = '' } = {}) {
      return svg(`
        <path d="M12 2c.5 3 2.5 4.5 4 6 1.8 1.8 3 4.2 3 7a7 7 0 1 1-14 0c0-3.3 1.8-6.1 4.5-8.2.5 1.5 1.5 2.7 2.5 3.2 0-3 1.5-6 0-8z" fill="${color}" fill-opacity="0.25" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M12 14a2.5 2.5 0 0 0-2.5 2.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1.4-1.1-2.5-2.5-2.5z" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    lightning({ size = 20, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <polygon points="13 2 4 14 11 14 9 22 20 10 13 10 13 2" fill="${color}" stroke="${color}" stroke-width="1.8" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    sparkle({ size = 20, color = '#f1c40f', className = '' } = {}) {
      return svg(`
        <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    lightbulb({ size = 20, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <path d="M9 18h6M10 21h4" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <path d="M9 14.5A7 7 0 1 1 15 14.5c-.8.8-1.5 2-1.5 3.5h-3c0-1.5-.7-2.7-1.5-3.5z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    clock({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="12" r="9" stroke="${color}" stroke-width="2"/>
        <polyline points="12 7 12 12 15.5 14" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    search({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <circle cx="11" cy="11" r="7" stroke="${color}" stroke-width="2"/>
        <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    refresh({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <path d="M21 12a9 9 0 1 1-2.6-6.4L21 8" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="21 3 21 8 16 8" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    arrowRight({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <line x1="4" y1="12" x2="19" y2="12" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
        <polyline points="13 6 19 12 13 18" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    close({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <line x1="18" y1="6" x2="6" y2="18" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
        <line x1="6" y1="6" x2="18" y2="18" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    // --- CONTROLS, CODEX & MODES ---
    book({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <line x1="9" y1="7" x2="15" y2="7" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="9" y1="11" x2="15" y2="11" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    academicCap({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <polygon points="12 3 1 9 12 15 23 9 12 3" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M5 11.5v5c0 2 3.1 3.5 7 3.5s7-1.5 7-3.5v-5" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <line x1="23" y1="9" x2="23" y2="16" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    volumeOn({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    volumeMute({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <line x1="16" y1="9" x2="22" y2="15" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
        <line x1="22" y1="9" x2="16" y2="15" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    target({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <circle cx="12" cy="12" r="9" stroke="${color}" stroke-width="2"/>
        <circle cx="12" cy="12" r="5" stroke="${color}" stroke-width="1.8"/>
        <circle cx="12" cy="12" r="2" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    citySkyline({ size = 24, color = '#2c3e50', className = '' } = {}) {
      return svg(`
        <rect x="2" y="8" width="6" height="14" rx="1" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8"/>
        <rect x="9" y="3" width="7" height="19" rx="1" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="1.8"/>
        <rect x="17" y="11" width="5" height="11" rx="1" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8"/>
        <line x1="4.5" y1="12" x2="5.5" y2="12" stroke="${color}" stroke-width="1.5"/>
        <line x1="4.5" y1="16" x2="5.5" y2="16" stroke="${color}" stroke-width="1.5"/>
        <line x1="11.5" y1="7" x2="13.5" y2="7" stroke="${color}" stroke-width="1.5"/>
        <line x1="11.5" y1="11" x2="13.5" y2="11" stroke="${color}" stroke-width="1.5"/>
        <line x1="11.5" y1="15" x2="13.5" y2="15" stroke="${color}" stroke-width="1.5"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    puzzle({ size = 24, color = '#27ae60', className = '' } = {}) {
      return svg(`
        <path d="M19 11h-2a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2h-2a2 2 0 0 1-2-2 2 2 0 0 0-4 0 2 2 0 0 1-2 2H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 0 0-4z" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8" stroke-linejoin="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    gamepad({ size = 24, color = '#8e44ad', className = '' } = {}) {
      return svg(`
        <rect x="2" y="6" width="20" height="12" rx="6" fill="${color}" fill-opacity="0.15" stroke="${color}" stroke-width="1.8"/>
        <line x1="6" y1="12" x2="10" y2="12" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <line x1="8" y1="10" x2="8" y2="14" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <circle cx="15.5" cy="10.5" r="1.2" fill="${color}"/>
        <circle cx="18" cy="13" r="1.2" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    microscope({ size = 20, color = 'currentColor', className = '' } = {}) {
      return svg(`
        <path d="M6 18h12M10 21h4" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="7" r="3" stroke="${color}" stroke-width="1.8"/>
        <path d="M12 10v4M9 14h6" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M7 18a5 5 0 0 1 10 0" stroke="${color}" stroke-width="2"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    crown({ size = 28, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <polygon points="2 7 6 18 18 18 22 7 15 12 12 4 9 12 2 7" fill="${color}" fill-opacity="0.25" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        <circle cx="2" cy="6" r="1.5" fill="${color}"/>
        <circle cx="12" cy="3" r="1.5" fill="${color}"/>
        <circle cx="22" cy="6" r="1.5" fill="${color}"/>
        <circle cx="12" cy="14" r="1.5" fill="${color}"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    trophy({ size = 28, color = '#f39c12', className = '' } = {}) {
      return svg(`
        <path d="M6 4h12v4a6 6 0 0 1-12 0V4z" fill="${color}" fill-opacity="0.2" stroke="${color}" stroke-width="2"/>
        <path d="M6 6H3a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h1M18 6h3a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4h-1" stroke="${color}" stroke-width="1.8"/>
        <path d="M12 14v4M8 21h8" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, { size, viewBox: '0 0 24 24', color, className });
    },

    // --- ARCHITECT CHARACTER AVATAR (ARIA) ---
    architectAvatar({ size = 44, mood = 'thinking', className = '' } = {}) {
      return `
        <div class="avatar-svg-wrapper ${mood}" style="width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center;">
          <svg viewBox="0 0 48 48" width="${size}" height="${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" fill="#fdf6e7" stroke="#b87b49" stroke-width="2.5"/>
            <!-- Hair back -->
            <path d="M14 26c-2-7 1-16 10-16s12 9 10 16" fill="#4a2e18"/>
            <!-- Neck & Collar -->
            <path d="M21 34h6v6h-6z" fill="#f5d0a9"/>
            <path d="M13 44c1-6 5-8 11-8s10 2 11 8" fill="#2d527c"/>
            <path d="M24 37l-3 4h6l-3-4z" fill="#ffffff"/>
            <!-- Face -->
            <circle cx="24" cy="24" r="10" fill="#fcdbb5"/>
            <!-- Hair bangs -->
            <path d="M15 20c3-5 8-7 14-6 2 0 4 1 5 3-2-2-6-3-9-2s-6 3-10 5z" fill="#663e21"/>
            <!-- Glasses -->
            <rect x="17" y="21" width="5.5" height="4.5" rx="1.5" stroke="#222" stroke-width="1.5" fill="rgba(255,255,255,0.4)"/>
            <rect x="25.5" y="21" width="5.5" height="4.5" rx="1.5" stroke="#222" stroke-width="1.5" fill="rgba(255,255,255,0.4)"/>
            <line x1="22.5" y1="23" x2="25.5" y2="23" stroke="#222" stroke-width="1.5"/>
            <!-- Eyes -->
            <circle cx="19.7" cy="23.2" r="1" fill="#222"/>
            <circle cx="28.2" cy="23.2" r="1" fill="#222"/>
            <!-- Mouth based on mood -->
            ${mood === 'happy' || mood === 'celebrating' 
              ? `<path d="M21 28.5c1 1.5 5 1.5 6 0" stroke="#a04030" stroke-width="1.6" stroke-linecap="round"/>`
              : (mood === 'worried' || mood === 'danger'
              ? `<path d="M21 29c1.5-.8 4.5-.8 6 0" stroke="#a04030" stroke-width="1.6" stroke-linecap="round"/>`
              : `<line x1="21.5" y1="28.5" x2="26.5" y2="28.5" stroke="#a04030" stroke-width="1.6" stroke-linecap="round"/>`)}
          </svg>
        </div>
      `;
    },

    creditCard({ size = 20, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="${color}" stroke-width="1.8"/>
        <line x1="2" y1="10" x2="22" y2="10" stroke="${color}" stroke-width="1.8"/>
        <line x1="6" y1="15" x2="10" y2="15" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    wallet({ size = 20, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M21 7H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="${color}" stroke-width="1.8"/>
        <path d="M16 13h4v4h-4a2 2 0 0 1-2-2 2 2 0 0 1 2-2z" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    cash({ size = 20, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <rect x="2" y="6" width="20" height="12" rx="2" stroke="${color}" stroke-width="1.8"/>
        <circle cx="12" cy="12" r="2.5" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    star({ size = 16, color = '#f1c40f', filled = true, className = '' } = {}) {
      return renderSvg(size, `
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="${filled ? color : 'none'}" stroke="${color}" stroke-width="1.5"/>
      `, className);
    },

    satellite({ size = 20, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M13 7 9 3 5 7l4 4" stroke="${color}" stroke-width="1.8"/>
        <path d="M17 11l4 4-4 4-4-4" stroke="${color}" stroke-width="1.8"/>
        <path d="m8 12 4 4" stroke="${color}" stroke-width="1.8"/>
        <path d="m14 6 4 4" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    phoneCall({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    messageChat({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    download({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      `, className);
    },

    share({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <circle cx="18" cy="5" r="3" stroke="${color}" stroke-width="1.8"/>
        <circle cx="6" cy="12" r="3" stroke="${color}" stroke-width="1.8"/>
        <circle cx="18" cy="19" r="3" stroke="${color}" stroke-width="1.8"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="${color}" stroke-width="1.8"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    receipt({ size = 20, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2-3-2zM8 8h8M8 12h8M8 16h5" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    home({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="${color}" stroke-width="1.8"/>
        <polyline points="9 22 9 12 15 12 15 22" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    building({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <rect x="4" y="2" width="16" height="20" rx="2" stroke="${color}" stroke-width="1.8"/>
        <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    history({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M12 8v4l3 3M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    user({ size = 18, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="${color}" stroke-width="1.8"/>
        <circle cx="12" cy="7" r="4" stroke="${color}" stroke-width="1.8"/>
      `, className);
    },

    signal({ size = 16, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M2 20h2M7 20v-4M12 20v-8M17 20v-12M22 20v-16" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      `, className);
    },

    battery({ size = 16, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <rect x="1" y="6" width="18" height="12" rx="2" stroke="${color}" stroke-width="1.8"/>
        <line x1="23" y1="10" x2="23" y2="14" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        <rect x="4" y="9" width="11" height="6" fill="${color}" rx="1"/>
      `, className);
    },

    rocket({ size = 20, color = 'currentColor', className = '' } = {}) {
      return renderSvg(size, `
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="${color}" stroke-width="1.8"/>
        <circle cx="15.5" cy="8.5" r="1.5" fill="${color}"/>
      `, className);
    },

    dot({ size = 14, color = '#27ae60', className = '' } = {}) {
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" class="rq-icon ${className}"><circle cx="12" cy="12" r="8"/></svg>`;
    },

    scale(opts) { return this.loadBalancer(opts); },
    zap(opts) { return this.lightning(opts); },
    grid(opts) { return this.databaseShard(opts); },
    layers(opts) { return this.databaseReplica(opts); },
    gitMerge(opts) { return this.apiGateway(opts); },
    box(opts) { return this.server(opts); },
    activity(opts) { return this.networkPacket(opts); },
    globe(opts) { return this.cdnNode(opts); }
  };

  return Icons;
});


/**
 * RideQuest - Web Audio API Procedural Sound Engine
 * Zero external audio files required! 100% synthesized in-browser.
 */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('ridequest_muted') === 'true';
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('ridequest_muted', this.muted);
    return this.muted;
  }

  playTone(freq, type, duration, gainStart = 0.15, gainEnd = 0.001) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainStart, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(gainEnd, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  }

  click() {
    this.playTone(800, 'sine', 0.06, 0.1, 0.001);
  }

  hover() {
    this.playTone(450, 'triangle', 0.04, 0.03, 0.001);
  }

  select() {
    this.playTone(520, 'sine', 0.09, 0.15, 0.001);
    setTimeout(() => this.playTone(680, 'sine', 0.12, 0.12, 0.001), 60);
  }

  success() {
    if (this.muted) return;
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.28, 0.18, 0.001);
      }, idx * 80);
    });
  }

  levelUp() {
    if (this.muted) return;
    this.init();
    const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51]; // A major arpeggio
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.35, 0.22, 0.001);
      }, idx * 75);
    });
  }

  overload() {
    if (this.muted) return;
    this.init();
    this.playTone(180, 'sawtooth', 0.3, 0.2, 0.01);
    setTimeout(() => this.playTone(140, 'sawtooth', 0.35, 0.25, 0.01), 100);
  }

  packet() {
    this.playTone(1200 + Math.random() * 400, 'sine', 0.03, 0.03, 0.001);
  }

  whoosh() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch (e) {}
  }
}

window.soundEngine = new SoundEngine();


/**
 * RideQuest - Levels Data
 * Contains all 24 pedagogical stages + Final Boss challenge.
 * Follows the strict pedagogical philosophy:
 * Situation -> Problem -> Think -> Make Decision -> See Consequence -> Discover Concept -> Simple Analogy -> Deep Dive
 */

const STAGES = [
  { id: 1, name: "Stage 1: Make The App Work", icon: "", levels: [1, 2, 3, 4] },
  { id: 2, name: "Stage 2: Make It Fast", icon: "", levels: [5, 6, 7] },
  { id: 3, name: "Stage 3: Handle More People", icon: "", levels: [8, 9, 10] },
  { id: 4, name: "Stage 4: Keep It Reliable", icon: "️", levels: [11, 12, 13] },
  { id: 5, name: "Stage 5: Handle Real-Time Data", icon: "️", levels: [14, 15, 16, 17, 18] },
  { id: 6, name: "Stage 6: Make It Smart", icon: "", levels: [19, 20, 21, 22] },
  { id: 7, name: "Stage 7: Make It Secure", icon: "", levels: [23, 24] },
  { id: 8, name: "Final: Become The System Architect", icon: "", levels: [25] }
];

const LEVELS = [
  // LEVEL 1
  {
    id: 1,
    stage: 1,
    title: "Too Many People Arrive",
    time: "6:00 PM Rush Hour",
    usersCount: "50,000 users",
    situation: "It is 6:00 PM in the city. Offices close, torrential rain begins, and suddenly 50,000 people open the RideQuest app at the exact same moment! Your single computer is spinning its fans at max speed and turning red-hot. The ride booking screen freezes with a spinning wheel.",
    problem: "A single computer can only handle so much work before it freezes completely. Your users are getting angry and stranded in the rain.",
    simulationType: "servers_traffic",
    choices: [
      {
        id: "A",
        text: "Replace our computer with the biggest, most expensive super-machine in the world.",
        isOptimal: false,
        consequenceText: "You bought a giant super-server! It runs fast for a short time, but when 100,000 users hit it, it still reaches 100% CPU capacity. It costs a fortune, and if that single machine trips a wire, the ENTIRE city loses RideQuest!",
        resultState: "vertical_overload",
        statImpact: { latency: "+80ms", capacity: "Limited", cost: "Extremely High", risk: "Single point of failure" },
        whatHappened: {
          helped: "The giant machine handled the initial rush of requests for a few moments.",
          bottleneck: "When the evening traffic doubled, that single computer still hit 100% CPU! It was extremely expensive, and any single hardware failure will crash the entire platform.",
          reflectionQuestion: "Can upgrading one single computer scale forever without becoming a dangerous single point of failure?"
        }
      },
      {
        id: "B",
        text: "Bring in multiple regular computers and split the crowd's work among them.",
        isOptimal: true,
        consequenceText: "Brilliant! You added 4 regular computers. The 50,000 incoming requests are divided evenly. Each machine is cool and comfortable at 30% load, and the app is instantly responsive for every passenger!",
        resultState: "horizontal_success",
        statImpact: { latency: "18ms", capacity: "Easily Expandable", cost: "Cost-Effective", risk: "Safe & Resilient" },
        successSummary: "By bringing in multiple computers and dividing the crowd's requests, each machine runs comfortably at 25% load with zero bottlenecks!"
      },
      {
        id: "C",
        text: "Put up a notice asking passengers: 'Please try again in 30 minutes.'",
        isOptimal: false,
        consequenceText: "Your passengers delete RideQuest and switch to walking or rival taxi apps! In tech companies, telling users to 'come back later' causes business bankruptcy.",
        resultState: "user_churn",
        statImpact: { latency: "Inf", capacity: "Zero", cost: "Loss of Revenue", risk: "Catastrophic" },
        whatHappened: {
          helped: "The servers had zero traffic because no one was allowed inside.",
          bottleneck: "Passengers deleted the app in frustration and switched to rival apps. RideQuest lost 100% of its business!",
          reflectionQuestion: "Is turning paying customers away a sustainable technology strategy?"
        }
      }
    ],
    discovery: {
      badge: "Horizontal Scaling",
      tagline: "Many hands make light work",
      analogy: "Instead of hiring one superhero delivery driver who eventually gets exhausted and stuck in traffic, you hire a fleet of 5 normal delivery vans that deliver across the city together.",
      contrast: {
        termA: "Vertical Scaling (Scaling Up)",
        descA: "Making ONE machine bigger, faster, and more expensive. Eventually hits physical hardware limits and remains a single point of failure.",
        termB: "Horizontal Scaling (Scaling Out)",
        descB: "Adding MORE machines side-by-side. You can keep adding more as your company grows, and if one breaks, the others keep running."
      },
      advancedInfo: "Horizontal scaling enables high elasticity (auto-scaling) where cloud instances spin up automatically during peak rush hours (like 6 PM) and shut down at 3 AM to save costs.",
      teacherNotes: {
        concept: "Horizontal vs. Vertical Scaling",
        experience: "Students felt the crushing weight of a traffic spike on a single server and discovered that adding machines side-by-side beats upgrading one mega-box.",
        realWorld: "Uber, Ola, and Netflix run tens of thousands of horizontally scaled micro-instances on AWS/GCP to absorb rush hour traffic.",
        question: "Can we just keep adding infinitely many computers, or will a new problem appear when they need to share information?"
      }
    }
  },

  // LEVEL 2
  {
    id: 2,
    stage: 1,
    title: "Who Is Booking The Ride?",
    time: "8:00 AM Morning Commute",
    usersCount: "120,000 riders",
    situation: "A passenger opens the OLA app to book a morning cab to work. Before anyone can book a ride, request a driver, or charge a payment, the app must securely verify: Who is this user? Do they really own this account, or is someone pretending to be them?",
    problem: "If anyone could type any phone number or name without proof of ownership, malicious impostors could book fake rides across the city and drain innocent users' balances!",
    simulationType: "auth_simulation",
    choices: [
      {
        id: "A",
        text: "Let anyone type any mobile number and immediately enter the app with zero verification.",
        isOptimal: false,
        consequenceText: "Disaster! Scammers typed strangers' phone numbers, booked fake rides across the city, and drained innocent riders' wallets. Drivers arrived at empty pickup spots and customer trust collapsed!",
        resultState: "unauthenticated_chaos",
        statImpact: { fraudRate: "85% Fraud", security: "Zero (Unsafe)", driverTrust: "Destroyed", access: "Chaotic" },
        whatHappened: {
          helped: "Riders entered the app in 1 second without typing any codes.",
          bottleneck: "Without identity verification, anyone could impersonate anyone! Ghost bookings surged, driver time was wasted, and financial fraud caused bank freezes.",
          reflectionQuestion: "Can an app trust user identity without verifying that the user physically possesses the phone number right now?"
        }
      },
      {
        id: "B",
        text: "Verify the user's mobile number by sending a secure One-Time Password (OTP) via SMS, and issue a signed session token upon correct verification.",
        isOptimal: true,
        consequenceText: "Outstanding! The user enters the 6-digit OTP received on their phone. The Authentication Server confirms their identity, generates a cryptographically signed session token, and unlocks the app safely!",
        resultState: "auth_success",
        statImpact: { fraudRate: "0.01% (Safe)", security: "Verified & Secure", driverTrust: "100% High", access: "Seamless" },
        successSummary: "By verifying mobile ownership with an OTP, OLA securely authenticates the user, generates a session token, and prevents account takeover!"
      },
      {
        id: "C",
        text: "Require every passenger to physically visit the OLA city office with their passport and photo ID before they can book their first ride.",
        isOptimal: false,
        consequenceText: "99.9% of passengers uninstalled the app! While physically secure, forcing in-person office visits created immense friction and killed user adoption.",
        resultState: "high_friction_churn",
        statImpact: { fraudRate: "0%", security: "Overkill", driverTrust: "High", access: "Zero Adoption" },
        whatHappened: {
          helped: "Only people who visited a physical office were allowed to book.",
          bottleneck: "Nobody will travel to an office just to download a taxi app. Passengers uninstalled the app and switched to walking or competitors.",
          reflectionQuestion: "How do modern mobile platforms verify user identity remotely in seconds without hurting user experience?"
        }
      }
    ],
    discovery: {
      badge: "Authentication (AuthN)",
      tagline: "Proving you are who you claim to be",
      analogy: "Like showing your boarding pass and photo ID at an airport security gate before boarding—the airline verifies your true identity before letting you into the terminal.",
      contrast: {
        termA: "Identification (Claiming)",
        descA: "Entering your phone number or email. You are merely claiming: 'I am 98765 43210'. Anyone could type those same digits.",
        termB: "Authentication (Proving)",
        descB: "Entering the secret, temporary 6-digit OTP sent to that phone to PROVE you actually hold that phone right now."
      },
      advancedInfo: "Once the OTP is verified, the server issues a digitally signed JWT (JSON Web Token). The OLA app securely stores this token and includes it in the header of every future ride request, allowing instant access without re-entering an OTP every time.",
      teacherNotes: {
        concept: "Authentication & Identity Verification",
        experience: "Students discovered why mobile apps require phone verification: to eliminate impersonation, fake bookings, and account takeover.",
        realWorld: "OLA, Uber, and WhatsApp use SMS/WhatsApp OTPs and cryptographic JWT session tokens for frictionless, secure mobile authentication.",
        question: "What is the key difference between Authentication ('Who are you?') and Authorization ('What are you allowed to do?')?"
      }
    }
  },

  // LEVEL 3
  {
    id: 3,
    stage: 1,
    title: "Who Should Handle Your Request?",
    time: "7:15 PM Dinner Rush",
    usersCount: "100,000 requests",
    situation: "Now RideQuest has 3 servers (Server A, Server B, Server C). But passengers connect randomly. Right now, 9,000 people piled onto Server A, while Server B and C are sitting nearly empty! Server A is smoking and dropping rides.",
    problem: "Having multiple servers is useless if all the work dumps onto just one of them. We need a smart 'Traffic Director' standing at the entrance.",
    simulationType: "load_balancer_sim",
    choices: [
      {
        id: "A",
        text: "Strategy: Take Turns (1st user to A, 2nd user to B, 3rd to C, then repeat).",
        isOptimal: true,
        consequenceText: "Round Robin activated! Every server gets an equal share of the incoming stream. Simple, clean, and reliable when all requests take roughly the same time.",
        resultState: "round_robin",
        statImpact: { loadBalance: "Even", complexity: "Low", serverHealth: "Good (60% each)" }
      },
      {
        id: "B",
        text: "Strategy: Always send the new user to whichever server currently has the fewest active connections.",
        isOptimal: true,
        consequenceText: "Least Connections activated! If Server A is busy processing a complicated fare calculation, the director sends the next 5 users to B and C until A finishes.",
        resultState: "least_connections",
        statImpact: { loadBalance: "Adaptive & Smart", complexity: "Medium", serverHealth: "Optimal" }
      },
      {
        id: "C",
        text: "Strategy: Send users to servers based on a mathematical finger-print of their User ID so the same user sticks to the same server.",
        isOptimal: true,
        consequenceText: "Consistent Hashing activated! User #1029 always routes to Server B. This is great for keeping user sessions and local memory warm!",
        resultState: "consistent_hashing",
        statImpact: { loadBalance: "Deterministic", complexity: "Advanced", serverHealth: "Cache-Friendly" }
      }
    ],
    discovery: {
      badge: "Load Balancing",
      tagline: "The traffic cop of the internet",
      analogy: "Like a receptionist at a busy hospital triage counter directing patients evenly to available doctor cabins so no single doctor gets overwhelmed while others sit idle.",
      contrast: {
        termA: "Round Robin & Least Connections",
        descA: "Round Robin takes turns sequentially. Least Connections inspects real-time active load and gives work to the least busy server.",
        termB: "Consistent Hashing",
        descB: "Hashes user keys across a virtual ring so specific users predictably route to specific servers, even when servers are added or removed."
      },
      advancedInfo: "Load Balancers (like Nginx, HAProxy, AWS ALB) also perform continuous health checks: if Server B catches fire, the Load Balancer instantly stops routing requests to B and reroutes to A and C without users noticing.",
      teacherNotes: {
        concept: "Load Balancing Algorithms",
        experience: "Students experimented with traffic dispatching methods (Round Robin, Least Connections, and Consistent Hashing) to prevent hotspot overloads.",
        realWorld: "Ride-hailing gateways use geo-based and least-connection load balancers across availability zones.",
        question: "What happens if two servers lose connection with each other while a ride is being matched?"
      }
    }
  },

  // LEVEL 4
  {
    id: 4,
    stage: 1,
    title: "The Map Is Not Always Correct",
    time: "8:00 PM City Storm",
    usersCount: "120,000 rides",
    situation: "A fierce thunderstorm damages an underground fiber optic cable between two of RideQuest's data centers. Data Center 1 in North City cannot communicate with Data Center 2 in South City. A passenger in South City requests a ride.",
    problem: "Data Center 2 has slightly older driver location data. If it answers right now, the driver might be 15 km away instead of 200m away. If it refuses to answer until the cable is repaired, the app shows an error screen.",
    simulationType: "cap_network_partition",
    choices: [
      {
        id: "A",
        text: "Option CP: Guarantee 100% strict correctness. If the centers can't talk, refuse the request with 'Service Temporarily Offline'.",
        isOptimal: true,
        consequenceText: "You chose CONSISTENCY! No passenger will ever get wrong driver info or double-booked, but users temporarily cannot book until the network heals.",
        resultState: "cap_consistency",
        statImpact: { correctness: "100% Pure", availability: "Temporarily Paused", userFrustration: "Medium" }
      },
      {
        id: "B",
        text: "Option AP: Guarantee the app always responds immediately, even if the driver location might be slightly outdated.",
        isOptimal: true,
        consequenceText: "You chose AVAILABILITY! The app never crashes and passengers get an immediate response, though on rare occasions a driver might be slightly farther away.",
        resultState: "cap_availability",
        statImpact: { correctness: "Slightly Delayed Sync", availability: "100% Available", userFrustration: "Low" }
      }
    ],
    discovery: {
      badge: "CAP Theorem",
      tagline: "Pick any two: Consistency, Availability, Partition Tolerance",
      analogy: "Imagine two bank clerks separated by a broken telephone wire. If a customer deposits money at Clerk 1, Clerk 2 cannot know. When the customer asks Clerk 2 for balance: Clerk 2 can either say 'I must wait until the phone works' (Consistency) OR say 'Here is your last known balance' (Availability). You cannot have both while the wire is broken!",
      contrast: {
        termA: "Consistency (C)",
        descA: "Every client gets the exact latest data or an error. No stale answers permitted.",
        termB: "Availability (A) & Partition Tolerance (P)",
        descB: "The system always returns a response, even when physical network cables between machines fail (Partitions are guaranteed to happen in real life)."
      },
      advancedInfo: "Eric Brewer formulated the CAP Theorem in 2000. In distributed systems, network partitions (P) are unavoidable due to router glitches, cut cables, and packet drops. Therefore, distributed architects must choose between CP (Consistency over Availability) or AP (Availability over Consistency).",
      teacherNotes: {
        concept: "The CAP Theorem Trade-off",
        experience: "Students faced the painful real-world trade-off of a severed network cable and realized you cannot have perfection in distributed physics.",
        realWorld: "Ride searching is often AP (show nearby cars even if 2 seconds stale), while credit card charging is strictly CP (never double charge).",
        question: "When money is deducted for a trip, what happens if the ride status fails to update right after?"
      }
    }
  },

  // LEVEL 5
  {
    id: 5,
    stage: 2,
    title: "Payment Problem",
    time: "9:00 PM Trip End",
    usersCount: "150,000 transactions",
    situation: "Passenger Priya finishes her ride. Fare is ₹250. The bank deducts ₹250 from Priya's account, but right at that split second, her phone battery dies! The ride app server never received the confirmation and still says 'Unpaid - Payment Failed'.",
    problem: "Money was taken from Priya, but the driver thinks he wasn't paid! This is a nightmare that creates riots in customer support.",
    simulationType: "acid_transaction_sim",
    choices: [
      {
        id: "A",
        text: "Wrap the steps in an 'All-or-Nothing' rule: Either BOTH payment and ride update succeed, or neither happens (money instantly refunded).",
        isOptimal: true,
        consequenceText: "Perfection! Atomic transaction enforced. If any single step fails midway, the entire operation cleanly rolls back as if nothing happened. No phantom money loss!",
        resultState: "acid_success",
        statImpact: { trust: "100%", supportTickets: "0", dataIntegrity: "Rock Solid" }
      },
      {
        id: "B",
        text: "Just let the bank deduct the money and let customer support manually fix the complaints tomorrow.",
        isOptimal: false,
        consequenceText: "Disaster! 10,000 angry passengers and drivers storm RideQuest social media. Your support team is overwhelmed and users lose faith.",
        resultState: "acid_failure",
        statImpact: { trust: "Ruined", supportTickets: "10,000+", dataIntegrity: "Corrupted" }
      }
    ],
    discovery: {
      badge: "ACID vs BASE",
      tagline: "Guaranteed Truth vs Eventual Truth",
      analogy: "Buying a plane ticket with a seat reservation: You either get the ticket AND the seat, or if the seat is taken, your credit card isn't charged. You never want to pay and get half an airplane seat!",
      contrast: {
        termA: "ACID (Relational / Financial)",
        descA: "Atomicity (All-or-Nothing), Consistency (Valid rules), Isolation (No cross-talk), Durability (Saved permanently). Used for money, bookings, inventories.",
        termB: "BASE (NoSQL / Eventual)",
        descB: "Basically Available, Soft state, Eventual consistency. Used for social media likes, driver location breadcrumbs, and view counters where temporary delay is fine."
      },
      advancedInfo: "Relational databases like PostgreSQL implement ACID via Write-Ahead Logging (WAL) and two-phase locking. In ride apps, wallets and payments use ACID, while live GPS location pings use BASE.",
      teacherNotes: {
        concept: "ACID Transactions vs BASE Eventual Consistency",
        experience: "Students witnessed money deduction failure and intuitively grasped Atomicity (All-or-Nothing).",
        realWorld: "Ola Money / Uber Cash uses ACID databases for ledger balances, but uses BASE for driver star ratings.",
        question: "Why should RideQuest search the slow hard drive 1,000 times a second for the same airport fare?"
      }
    }
  },

  // LEVEL 6
  {
    id: 6,
    stage: 2,
    title: "The App Is Getting Slow",
    time: "10:15 PM Airport Rush",
    usersCount: "200,000 rides",
    situation: "Flights land at the International Airport. 15,000 passengers open RideQuest asking: 'What is the fare from Airport to Downtown Central?' Every single request triggers a heavy 40-millisecond database disk query that recalculates the exact same price over and over. The database is groaning under the strain!",
    problem: "Why read a slow mechanical disk or recalculate math thousands of times a second for an answer that hasn't changed in the last 10 minutes?",
    simulationType: "cache_sim",
    choices: [
      {
        id: "A",
        text: "Keep the most popular answers in lightning-fast RAM memory right on the counter. Only check disk if it's not in memory.",
        isOptimal: true,
        consequenceText: "Incredible speedup! Airport fare is now answered from high-speed memory in 1 millisecond instead of 40 milliseconds! Database load plummets by 95%!",
        resultState: "cache_hit_streak",
        statImpact: { responseTime: "1ms (40x faster)", dbLoad: "5%", userDelight: "Instant!" }
      },
      {
        id: "B",
        text: "Just keep querying the database disk every time to make sure nothing ever changes.",
        isOptimal: false,
        consequenceText: "The database disk queues up 10,000 read locks. Responses slow down from 40ms to 4,200ms. Passengers see spinning wheels at the airport curb.",
        resultState: "cache_miss_overload",
        statImpact: { responseTime: "4,200ms", dbLoad: "99% (Overheated)", userDelight: "Terrible" }
      }
    ],
    discovery: {
      badge: "Caching",
      tagline: "Remember the answers you use the most",
      analogy: "If your teacher asks you 'What is 7 times 8?', you don't walk to the library, look up a math encyclopedia, and read the multiplication table every single time. You remember 56 in your short-term memory!",
      contrast: {
        termA: "Cache Strategies",
        descA: "LRU (Least Recently Used) throws away old unused answers. LFU (Least Frequently Used) throws away rarely used answers when memory is full.",
        termB: "Cache Invalidation",
        descB: "The hardest problem in computer science: When gas prices change or rain surge starts, you must 'evict' or update the stored cache answer."
      },
      advancedInfo: "Tools like Redis and Memcached store key-value pairs entirely in RAM. A RAM lookup takes ~0.1 microseconds, compared to ~1-10 milliseconds for an SSD/HDD database query—a 10,000x speed difference!",
      teacherNotes: {
        concept: "In-Memory Caching & Eviction Policies (LRU/LFU)",
        experience: "Students saw repetitive queries choke the database and discovered how keeping hot answers in fast memory saves the day.",
        realWorld: "RideQuest caches city map zones, driver profiles, surge multipliers, and route tariffs in Redis clusters.",
        question: "When you have 10 million registered drivers in your database, how do you find one driver without reading every single page?"
      }
    }
  },

  // LEVEL 7
  {
    id: 7,
    stage: 2,
    title: "Finding Driver Information",
    time: "11:30 PM Night Patrol",
    usersCount: "350,000 queries",
    situation: "RideQuest now has 10,000,000 registered drivers across the country. A passenger types driver phone number '+91 98765 43210' to verify their ride. The database starts on row 1, checks row 2, checks row 3... scanning all 10 million rows one by one. The server hangs for 8 seconds!",
    problem: "Reading every single entry in an unorganized 10-million-row table (a full table scan) is unimaginably slow.",
    simulationType: "indexing_lookup",
    choices: [
      {
        id: "A",
        text: "Build an organized sorted index table (like the alphabetical index at the back of a textbook) pointing directly to the exact row location.",
        isOptimal: true,
        consequenceText: "B-Tree Index created! Instead of 10,000,000 comparisons, the database finds the driver in just 4 quick jumps! Query time drops from 8 seconds to 2 milliseconds!",
        resultState: "index_hit_fast",
        statImpact: { lookupTime: "2ms (4000x faster)", diskRead: "4 blocks vs 10M", efficiency: "Exceptional" }
      },
      {
        id: "B",
        text: "Tell the computer to scan the 10 million rows faster with brute force.",
        isOptimal: false,
        consequenceText: "Even with the fastest CPU, checking 10 million disk records sequentially consumes massive I/O. As more drivers join, the app gets slower every month.",
        resultState: "full_table_scan",
        statImpact: { lookupTime: "8,500ms", diskRead: "10,000,000 rows", efficiency: "O(N) Horrible" }
      }
    ],
    discovery: {
      badge: "Database Indexing",
      tagline: "The textbook index for data",
      analogy: "If you want to find 'Photosynthesis' in a 1,000-page biology textbook, you don't read page 1 to 1,000. You turn to the Index at the back, find 'P', and jump directly to page 432.",
      contrast: {
        termA: "Full Table Scan vs B-Tree",
        descA: "Full Table Scan checks every row: O(N) time. B-Tree keeps keys in a balanced tree: O(log N) time—finding 1 in a billion takes ~30 steps!",
        termB: "Hash Index & Bitmap Index",
        descB: "Hash indexes give O(1) instant exact match lookups. Bitmap indexes are lightning-fast for columns with few unique values (like driver gender or vehicle type)."
      },
      advancedInfo: "Trade-off alert: While indexes make reading super-fast, every new driver registration (Write/Insert) takes slightly longer because the database must update both the raw table AND the index tree.",
      teacherNotes: {
        concept: "Database Indexing (B-Trees, Hash Indexes, Full Scan vs Indexed Lookup)",
        experience: "Students compared searching through an unsorted pile vs jumping through a structured index.",
        realWorld: "Ride-hailing databases create spatial indexes (like Uber's H3 or PostGIS R-Tree) to index geographical lat/long coordinates.",
        question: "Can one single database hold both live ride booking transactions AND a 5-year analytics report?"
      }
    }
  },

  // LEVEL 8
  {
    id: 8,
    stage: 3,
    title: "The Database Is Too Big",
    time: "Midnight Strategy Meeting",
    usersCount: "500,000 users",
    situation: "The CEO and data science team run a massive query: 'Analyze all 80 million rides from the past 3 years to calculate peak rain surge trends.' Meanwhile, 10,000 live passengers are trying to book real rides right now. The analytical query locks the entire database, causing live ride bookings to time out!",
    problem: "Live high-speed transactional bookings (OLTP) and heavy historical analytics (OLAP) have completely conflicting needs.",
    simulationType: "oltp_vs_olap",
    choices: [
      {
        id: "A",
        text: "Separate the workloads: Keep a quick row-based database for live bookings, and copy historical trips to a dedicated analytics store for reports.",
        isOptimal: true,
        consequenceText: "Genius! Live passenger rides stay lightning-fast on the transactional database, while the data scientists run their heavy multi-year analytics on the dedicated analytics warehouse without disturbing anyone!",
        resultState: "oltp_olap_split",
        statImpact: { bookingSpeed: "5ms", analyticsPower: "Infinite", locks: "Zero conflicts" }
      },
      {
        id: "B",
        text: "Run both live bookings and 3-year historical queries on the exact same database machine to save money.",
        isOptimal: false,
        consequenceText: "Locks deadlock! The 3-year report holds memory buffers for 20 minutes. Real-time passenger bookings fail with 'Database Lock Timeout'.",
        resultState: "database_locked",
        statImpact: { bookingSpeed: "Timed out", analyticsPower: "Hung", locks: "Deadlock!" }
      }
    ],
    discovery: {
      badge: "Database Design: SQL vs NoSQL, OLTP vs OLAP",
      tagline: "Right tool for the right job",
      analogy: "A Formula 1 sports car (OLTP) is built for instant speed and quick turns (booking rides). A giant freight cargo train (OLAP) carries 10,000 tons of historical cargo (analytics). You don't try to use a cargo train to pick up an urgent pizza!",
      contrast: {
        termA: "OLTP (Online Transaction Processing)",
        descA: "Handles millions of tiny, fast read/write operations (e.g., booking a cab, updating ride status). Uses row-oriented SQL databases.",
        termB: "OLAP (Online Analytical Processing)",
        descB: "Scans billions of historical records across columns for business intelligence, aggregations, and trends (e.g., Snowflake, BigQuery)."
      },
      advancedInfo: "Also consider SQL vs NoSQL: Relational SQL (Postgres, MySQL) is ideal for structured relationships (users, payments, driver KYC), while Document NoSQL (MongoDB, DynamoDB) excels at flexible, high-throughput unstructured event payloads.",
      teacherNotes: {
        concept: "OLTP vs OLAP & SQL vs NoSQL Architecture",
        experience: "Students learned why production transactional databases must be shielded from heavy analytics scans.",
        realWorld: "Uber uses MySQL/Schemaless for live trip booking (OLTP) and pipelines trip events into Apache Hudi / Presto for analytics (OLAP).",
        question: "When your database grows past 500 million rows, what do you do when one computer's hard drive runs out of space?"
      }
    }
  },

  // LEVEL 9
  {
    id: 9,
    stage: 3,
    title: "Split The Huge Database",
    time: "City Expansion",
    usersCount: "1 Million Users",
    situation: "RideQuest launched in 10 major cities (Delhi, Mumbai, Bengaluru, Chennai, Kolkata...). The database table now has 500 million records and fills a 10 Terabyte disk. Even the beefiest database machine is out of memory and hard drive space!",
    problem: "One single computer cannot store infinite data. We must partition our database across multiple separate machines.",
    simulationType: "sharding_sim",
    choices: [
      {
        id: "A",
        text: "Divide by Region: Database 1 holds North City rides, Database 2 holds South City rides, Database 3 holds West City rides.",
        isOptimal: true,
        consequenceText: "Range/Geo Partitioning deployed! North drivers and passengers stay in Database North. Each machine only handles a fraction of the data, running at silky smooth speeds!",
        resultState: "range_sharding",
        statImpact: { storagePerDb: "3.3 TB", querySpeed: "Ultra-Fast", isolation: "High" }
      },
      {
        id: "B",
        text: "Divide by User ID Hash: Run Math.hash(UserID) % 3 to scatter users evenly across 3 database machines.",
        isOptimal: true,
        consequenceText: "Hash Partitioning deployed! Data is evenly balanced across all 3 databases with zero hot-spots. No single machine gets more traffic than the others!",
        resultState: "hash_sharding",
        statImpact: { balance: "Perfect 33% each", hotSpots: "Eliminated", scalability: "Horizontal" }
      }
    ],
    discovery: {
      badge: "Database Sharding",
      tagline: "Divide and conquer your giant data",
      analogy: "Like a busy post office that has different letter sorting counters: Counter 1 handles postal codes 1000–2999, Counter 2 handles 3000–5999, and Counter 3 handles 6000–9999. No single postal clerk has to hold every letter in the nation!",
      contrast: {
        termA: "Range / Geo Sharding",
        descA: "Partition data by value ranges (e.g. City = 'Bengaluru'). Great for localized queries, but popular cities can become hot shards.",
        termB: "Hash-Based Sharding",
        descB: "Applies a hash function on the Shard Key (e.g. User ID) to distribute records uniformly across all database instances."
      },
      advancedInfo: "Sharding enables true horizontal database scalability, but introduces architectural challenges: cross-shard joins (queries that need data from multiple shards) become slow and complex.",
      teacherNotes: {
        concept: "Database Sharding (Horizontal Partitioning)",
        experience: "Students split a giant monolithic database into manageable independent shards.",
        realWorld: "Uber shards trip data using a custom sharding layer called Schemaless built on top of MySQL.",
        question: "Now you have partitioned databases, but what happens if the main database machine catches fire or suffers a power cut?"
      }
    }
  },

  // LEVEL 10
  {
    id: 10,
    stage: 3,
    title: "Structured Fares vs Flexible Profiles",
    time: "9:30 AM Post-Rush Accounting",
    usersCount: "500,000 trips completed",
    situation: "OLA stores two very different kinds of data: 1) Financial Ride Fares & Invoices (fixed columns: Trip ID, Rider ID, Fare, Tax, Payment Status) which must strictly balance down to the exact paise; and 2) Driver Profiles & Vehicle Features (some drivers have EV battery stats, pet-friendly tags, baby seats, or regional languages, changing frequently without a rigid schema).",
    problem: "Using the wrong database model causes either broken financial ledgers or painful schema lockouts every time a driver adds a new feature tag!",
    simulationType: "database_design_sim",
    choices: [
      {
        id: "A",
        text: "Store everything into a single rigid SQL table, forcing all dynamic driver features into 100 empty columns (is_pet_friendly, is_ev, has_baby_seat, speaks_tamil, speaks_hindi...).",
        isOptimal: false,
        consequenceText: "Every time a driver adds a new perk or vehicle type, database engineers must run slow table alterations on 50 million rows, locking the database during rush hour!",
        resultState: "rigid_sql_bloat",
        statImpact: { schemaFlexibility: "Extremely Rigid", financialSafety: "Good", maintenanceCost: "High", queryLatency: "+45ms" },
        whatHappened: {
          helped: "Financial fares were structured.",
          bottleneck: "Storing rapidly evolving driver vehicle attributes in rigid relational columns required constant database schema locks and bloated tables with thousands of NULLs.",
          reflectionQuestion: "Should all data in a large platform be forced into a single rigid relational schema?"
        }
      },
      {
        id: "B",
        text: "Polyglot Persistence: Use Relational SQL for strict financial transactions & invoices (ACID, fixed schema) and NoSQL Document store for flexible driver profiles & vehicle attributes (JSON, schema-free).",
        isOptimal: true,
        consequenceText: "Architectural masterpiece! Financial ledgers stay 100% strict and ACID-compliant in PostgreSQL/MySQL, while Driver Profiles and trip metadata evolve smoothly as JSON documents in MongoDB/DynamoDB!",
        resultState: "polyglot_success",
        statImpact: { schemaFlexibility: "Maximum", financialSafety: "100% ACID Guaranteed", maintenanceCost: "Low", queryLatency: "3ms (Optimal)" },
        successSummary: "By pairing SQL for strict financial records with NoSQL for flexible vehicle/profile documents, OLA achieves perfect financial consistency AND high development agility!"
      },
      {
        id: "C",
        text: "Store all ride fares, wallet deductions, and bank settlements inside an unindexed plaintext text file on a shared network drive.",
        isOptimal: false,
        consequenceText: "Two concurrent payments edited the text file at the exact same millisecond, corrupting all numbers! Millions of rupees were lost and audits failed completely.",
        resultState: "corrupted_textfile",
        statImpact: { schemaFlexibility: "Zero", financialSafety: "Catastrophic Failure", maintenanceCost: "Infinite", queryLatency: "Inf" },
        whatHappened: {
          helped: "No database software had to be installed.",
          bottleneck: "Plain files lack concurrent write locks, transaction safety, and indexing. Corrupted balances destroyed the business.",
          reflectionQuestion: "Why do financial systems require ACID-compliant relational databases?"
        }
      }
    ],
    discovery: {
      badge: "Database Design: SQL vs NoSQL",
      tagline: "The right database for the right data",
      analogy: "A bank passbook needs a strict printed ledger with exact columns (SQL), while a traveler's backpack holds flexible items of all shapes and sizes (NoSQL).",
      contrast: {
        termA: "Relational (SQL)",
        descA: "Strict tables, rows, columns, foreign keys. Perfect for payments, invoices, and accounting requiring 100% ACID guarantees.",
        termB: "Non-Relational (NoSQL)",
        descB: "Flexible JSON documents, key-values, or graphs. Perfect for evolving driver profiles, vehicle specs, and rapid feature changes."
      },
      advancedInfo: "Modern mega-apps use 'Polyglot Persistence'—PostgreSQL for customer billing and ride ledgers, MongoDB or DynamoDB for driver catalogs, Redis for caching, and Cassandra for GPS location time-series.",
      teacherNotes: {
        concept: "SQL vs NoSQL Database Selection & Trade-offs",
        experience: "Students learned that real apps do not choose 'SQL OR NoSQL' as an either/or fight; they combine SQL for transactions with NoSQL for schema flexibility.",
        realWorld: "Uber & OLA use MySQL/Postgres for billing and payments, and NoSQL/Cassandra/DynamoDB for driver metadata and real-time state.",
        question: "What would happen if you stored financial bank balances in a database that only offers eventual consistency?"
      }
    }
  },

  // LEVEL 11
  {
    id: 11,
    stage: 4,
    title: "Two Parts Of The System Must Agree",
    time: "Distributed Microservices",
    usersCount: "2 Million Users",
    situation: "RideQuest has separated into independent microservices: 1) The Ride Booking Service and 2) The Payment Wallet Service. A ride is booked. The Payment Service successfully deducts ₹300, but the Ride Service crashes before assigning a driver! Wallet says 'Paid', but Ride Service says 'No Ride Found'.",
    problem: "When two different servers across the network must perform a joint action, how do you prevent them from getting out of sync?",
    simulationType: "distributed_tx_sim",
    choices: [
      {
        id: "A",
        text: "Use a two-step handshake: First ask both services 'Are you ready? Can you lock the money and driver?' Only if BOTH say YES, send the final COMMIT.",
        isOptimal: true,
        consequenceText: "Two-Phase Commit (2PC) in action! Phase 1 (Prepare): Both systems verify readiness. Phase 2 (Commit): Both execute simultaneously. Perfect safety!",
        resultState: "two_phase_commit",
        statImpact: { consistency: "100% Guaranteed", coordination: "Synchronous Lock", safety: "Maximum" }
      },
      {
        id: "B",
        text: "Use a Saga workflow: Step 1 deducts money. If step 2 (assigning driver) fails, automatically run a compensating action that refunds the money.",
        isOptimal: true,
        consequenceText: "Saga Pattern activated! Asynchronous, highly scalable, and handles failures cleanly with compensating rollback transactions without locking databases!",
        resultState: "saga_pattern",
        statImpact: { consistency: "Eventual Consistency", throughput: "Ultra-High", resilience: "Self-Healing" }
      }
    ],
    discovery: {
      badge: "Distributed Transactions",
      tagline: "Making two separate brains agree across the wire",
      analogy: "Like planning a dinner date with a friend via text: You don't buy two expensive tickets before asking 'Are you free tonight?'. You both confirm availability FIRST, then both click purchase together.",
      contrast: {
        termA: "Two-Phase Commit (2PC)",
        descA: "Strong consistency via a coordinator. Voting phase + Commit phase. Very safe, but can block if a coordinator crashes.",
        termB: "Saga Pattern",
        descB: "A sequence of local transactions where each step publishes an event. If a step fails, compensating transactions undo the previous steps like an undo button."
      },
      advancedInfo: "In modern cloud microservices architectures, the Saga pattern is preferred over 2PC because it avoids holding long database distributed locks across network boundaries.",
      teacherNotes: {
        concept: "Distributed Transactions (2PC vs Saga Pattern)",
        experience: "Students faced the classic distributed consensus dilemma where two independent services must reach agreement.",
        realWorld: "E-commerce and ride-hailing checkout flows rely heavily on orchestrator-based Saga patterns with RabbitMQ/Kafka.",
        question: "What should you do when an external partner's server (like a bank gateway) starts taking 30 seconds to answer?"
      }
    }
  },

  // LEVEL 12
  {
    id: 12,
    stage: 4,
    title: "Servers Start Failing",
    time: "External Partner Meltdown",
    usersCount: "2.5 Million Users",
    situation: "RideQuest connects to an external bank gateway for credit cards. Suddenly, the bank's server slows to a crawl, taking 45 seconds to answer. RideQuest's ride servers keep opening connections to the bank, waiting and waiting, until RideQuest runs out of memory and crashes completely!",
    problem: "A failure or slow response in one third-party service shouldn't drag down the entire RideQuest platform.",
    simulationType: "circuit_breaker_sim",
    choices: [
      {
        id: "A",
        text: "Install a Circuit Breaker: If 5 bank requests fail or hang, immediately trip the switch and stop calling the bank. Instantly fail over to cash/UPI or queue payments.",
        isOptimal: true,
        consequenceText: "Circuit Breaker tripped! Instead of hanging for 45s, RideQuest instantly routes passengers to RideQuest Wallet or Cash. The core ride matching stays 100% fast and healthy!",
        resultState: "circuit_breaker_tripped",
        statImpact: { appHealth: "Protected & Fast", cascadeFailure: "Prevented", recovery: "Automatic" }
      },
      {
        id: "B",
        text: "Keep aggressively retrying every frozen request 100 times in a tight loop.",
        isOptimal: false,
        consequenceText: "Retry Storm! Your 100,000 retries hit the already-dying bank server like a sledgehammer (Thundering Herd) and exhaust RideQuest's thread pool, crashing everything.",
        resultState: "thundering_herd_crash",
        statImpact: { appHealth: "Total Crash", cascadeFailure: "Full Blackout", recovery: "Manual Reboot" }
      }
    ],
    discovery: {
      badge: "Fault Tolerance & Resilience",
      tagline: "Cut the wire before the whole house catches fire",
      analogy: "Like the electrical circuit breaker in your home wall. If a faulty toaster draws too much current, the breaker trips to protect your house wiring from burning down.",
      contrast: {
        termA: "Circuit Breaker Pattern",
        descA: "Three states: Closed (normal), Open (tripped—fails fast without calling), Half-Open (tests a few requests to see if service has healed).",
        termB: "Bulkhead Pattern",
        descB: "Like the watertight bulkheads in a submarine or ship: If water floods one compartment, the door seals so the rest of the ship doesn't sink."
      },
      advancedInfo: "When retrying failed network calls, always use Exponential Backoff with Jitter (random delay) to avoid synchronizing retries into a destructive stampede.",
      teacherNotes: {
        concept: "Resilience Patterns: Circuit Breaker, Bulkhead, and Exponential Backoff",
        experience: "Students saw a slow external dependency kill their entire system and discovered graceful degradation and isolation.",
        realWorld: "Netflix's Hystrix / Resilience4j and Envoy proxy implement automated circuit breakers for hundreds of microservices.",
        question: "When three different servers record timestamps, how do you know which event happened first if their clocks disagree?"
      }
    }
  },

  // LEVEL 13
  {
    id: 13,
    stage: 4,
    title: "The Giant Monolith vs Independent Services",
    time: "1:15 PM Heavy Rains & Peak Bookings",
    usersCount: "250,000 active riders",
    situation: "In OLA, a single ride involves multiple distinct jobs: 1) Ride Booking, 2) Driver Matching, 3) Payment Processing, and 4) Push Notifications / SMS. If all four jobs are packed into one giant single program (a Monolith), a bug or slow server in the Notification department could crash the entire app!",
    problem: "A third-party SMS gateway becomes slow during torrential rain. Because everything is tied together in one giant app, the entire server runs out of threads and NO ONE in the city can book a cab!",
    simulationType: "microservices_sim",
    choices: [
      {
        id: "A",
        text: "Keep everything in one giant Monolithic codebase and restart the entire application whenever notifications freeze.",
        isOptimal: false,
        consequenceText: "A slow SMS provider exhausted all server memory threads! Because it was all one monolith, the Ride Booking and Driver Matching engines died too. The entire city's transportation froze!",
        resultState: "monolith_cascade_crash",
        statImpact: { blastRadius: "100% System Down", deploySpeed: "Slow", faultIsolation: "Zero", uptime: "91.2%" },
        whatHappened: {
          helped: "Easy to write code in one single project initially.",
          bottleneck: "Zero fault isolation! A minor bug in the notification code brought down the core booking and payment engines.",
          reflectionQuestion: "Should a delay in sending a 'Trip Receipt' push notification prevent a passenger from booking a ride?"
        }
      },
      {
        id: "B",
        text: "Split the system into Microservices: Ride Booking, Driver Matching, Payment, and Notifications run as independent services communicating via APIs.",
        isOptimal: true,
        consequenceText: "Incredible resilience! When the SMS provider slowed down, ONLY the notification queue backed up slightly. Ride Booking, Driver Matching, and Payments kept operating at 100% speed with zero disruption!",
        resultState: "microservices_success",
        statImpact: { blastRadius: "Isolated to 1 Service", deploySpeed: "Independent & Fast", faultIsolation: "100% Protected", uptime: "99.99%" },
        successSummary: "By decoupling into microservices (Booking, Matching, Payment, Notifications), failures are isolated and teams can deploy and scale each service independently!"
      },
      {
        id: "C",
        text: "Delete notifications, payments, and driver matching completely—only keep a static map on the screen.",
        isOptimal: false,
        consequenceText: "Passengers could see a map, but couldn't pay, couldn't match a driver, and couldn't get ride status! The app became completely useless.",
        resultState: "app_useless",
        statImpact: { blastRadius: "None", deploySpeed: "N/A", faultIsolation: "N/A", uptime: "Zero Functionality" },
        whatHappened: {
          helped: "Zero server crashes.",
          bottleneck: "The core business functions were removed. An app that does nothing cannot crash, but it also has zero users!",
          reflectionQuestion: "Can removing essential features be a valid architectural strategy for reliability?"
        }
      }
    ],
    discovery: {
      badge: "Microservices Architecture",
      tagline: "Divide and conquer your backend",
      analogy: "In a ship, watertight bulkheads divide the hull into separate compartments. If one compartment springs a leak, the doors seal and the rest of the ship stays afloat.",
      contrast: {
        termA: "Monolith",
        descA: "All features (Auth, Booking, Payment, Notifications) live inside one single codebase and process. A memory leak or crash anywhere kills the entire company.",
        termB: "Microservices",
        descB: "Each business capability runs as an autonomous service with its own database and API. If Notifications slow down, Ride Booking never stops."
      },
      advancedInfo: "Microservices communicate synchronously via gRPC/REST for real-time operations, and asynchronously via message brokers (Kafka/RabbitMQ) for decoupled tasks like notifications and analytics.",
      teacherNotes: {
        concept: "Monolithic vs Microservices Architecture & Fault Isolation",
        experience: "Students saw firsthand how blast radius containment prevents non-critical service failures from crashing core ride booking.",
        realWorld: "Uber and OLA run hundreds of microservices (dispatch, location, pricing, payments, fraud) managed with Kubernetes.",
        question: "What new challenges arise when you split one database into 20 microservice databases?"
      }
    }
  },

  // LEVEL 14
  {
    id: 14,
    stage: 5,
    title: "Talking To Different Services",
    time: "Microservice Communication",
    usersCount: "3.5 Million Users",
    situation: "The RideQuest Mobile App needs to talk to the backend, and internal servers (Ride, Driver, Payment, Geo) need to talk to each other 50,000 times per second. Using heavy, verbose text formats for internal server-to-server traffic is consuming huge bandwidth and CPU.",
    problem: "Different communication styles have different strengths: Mobile apps on 3G need concise queries, while internal servers need ultra-fast binary streaming.",
    simulationType: "api_styles_sim",
    choices: [
      {
        id: "A",
        text: "Use REST / GraphQL for mobile clients (fetch exact fields needed), and lightning-fast binary gRPC with Protobuf for internal server-to-server calls.",
        isOptimal: true,
        consequenceText: "Architectural perfection! Mobile apps fetch lean JSON/GraphQL without wasting mobile data. Internal microservices communicate in ultra-compact binary gRPC at 7x faster speeds!",
        resultState: "api_polyglot_success",
        statImpact: { mobileBandwidth: "-65%", internalLatency: "1.2ms (7x faster)", typeSafety: "Strong" }
      },
      {
        id: "B",
        text: "Make every single internal microservice send giant, uncompressed XML text documents over slow connections.",
        isOptimal: false,
        consequenceText: "Massive CPU overhead! Servers spend 70% of their CPU power just parsing XML text tags rather than running business logic.",
        resultState: "api_xml_bloat",
        statImpact: { mobileBandwidth: "Huge", internalLatency: "35ms", typeSafety: "Weak" }
      }
    ],
    discovery: {
      badge: "APIs & Communication Styles",
      tagline: "The language of modern software",
      analogy: "Like talking to a waiter at a restaurant: You ask in English for a menu (REST). But inside the high-speed kitchen, the chefs use quick, coded shorthand hand signals (gRPC) to move fast!",
      contrast: {
        termA: "REST & GraphQL",
        descA: "REST uses standard HTTP verbs (GET, POST). GraphQL lets mobile clients request precisely the fields they need, eliminating over-fetching.",
        termB: "gRPC & Protocol Buffers",
        descB: "Google's open-source remote procedure call framework. Uses HTTP/2 and binary serialization for extreme throughput between backend microservices."
      },
      advancedInfo: "API Versioning is critical: When you update your backend, older versions of the RideQuest mobile app on passengers' phones (v1.2) must continue working seamlessly using /api/v1 and /api/v2 endpoints.",
      teacherNotes: {
        concept: "API Protocols: REST vs GraphQL vs gRPC & Versioning",
        experience: "Students matched communication protocols to the right tier (client-facing vs internal backend).",
        realWorld: "Uber rewritten its microservices backbone to gRPC over HTTP/2, reducing p99 latency significantly across thousands of internal services.",
        question: "What happens when a spam bot or an angry user taps the 'Book Ride' button 200 times in 3 seconds?"
      }
    }
  },

  // LEVEL 15
  {
    id: 15,
    stage: 5,
    title: "Too Many Requests",
    time: "Surge Spam Attack",
    usersCount: "4 Million Users",
    situation: "A concert ends at the stadium. 2,000 excited fans frantically tap 'Book Ride', 'Book Ride', 'Book Ride' 10 times per second! Meanwhile, a rogue scraper bot attempts to scrape 50,000 driver locations every second. The booking gateway is drowning.",
    problem: "Unrestricted users can exhaust backend resources, lock database rows, and starve legitimate passengers of service.",
    simulationType: "rate_limiter_sim",
    choices: [
      {
        id: "A",
        text: "Give each user a virtual 'Token Bucket': They get 5 tokens. Each button tap costs 1 token. Tokens refill at 1 per second. If bucket is empty, respond with 'Too Many Requests (429)'.",
        isOptimal: true,
        consequenceText: "Token Bucket Rate Limiting active! Normal users click smoothly with bursts allowed. Malicious scrapers and rapid spam clicks are politely blocked without hurting backend servers!",
        resultState: "token_bucket_success",
        statImpact: { backendProtection: "100%", serverCrashRisk: "0%", userFairness: "Guaranteed" }
      },
      {
        id: "B",
        text: "Accept every single click unconditionally and execute a new database transaction for each tap.",
        isOptimal: false,
        consequenceText: "Database collapses! 200,000 duplicate ride requests flood the database queues. Drivers get assigned multiple duplicate rides and the app crashes.",
        resultState: "spam_flood_crash",
        statImpact: { backendProtection: "None", serverCrashRisk: "100%", userFairness: "Unfair" }
      }
    ],
    discovery: {
      badge: "Rate Limiting",
      tagline: "The bouncer at the club door",
      analogy: "Like a metro turnstile gate: Even if 500 commuters run at the gate at the same second, the gate only lets one person through per second per turnstile, keeping the train platform orderly and safe.",
      contrast: {
        termA: "Token Bucket vs Leaky Bucket",
        descA: "Token Bucket allows short bursts of traffic (good for real users). Leaky Bucket outputs requests at a strictly constant rate (smooths traffic).",
        termB: "Sliding Window Counter",
        descB: "Tracks requests across a sliding 60-second window to prevent edge-of-window bursts (e.g., 100 requests at 11:59 and 100 at 12:00)."
      },
      advancedInfo: "Rate limiters typically store client IP / User ID counters in in-memory Redis clusters with TTL expirations for sub-millisecond evaluation at the API Gateway.",
      teacherNotes: {
        concept: "Rate Limiting Algorithms: Token Bucket, Leaky Bucket, Sliding Window",
        experience: "Students acted as the bouncer protecting their servers against abusive spikes and bot scrapers.",
        realWorld: "Cloudflare and AWS WAF enforce edge rate-limiting to prevent DDoS attacks and credential stuffing.",
        question: "How can the passenger's phone show the driver's car moving smoothly on the map in real time?"
      }
    }
  },

  // LEVEL 16
  {
    id: 16,
    stage: 5,
    title: "How Does The App Talk?",
    time: "Live GPS Tracking",
    usersCount: "4.5 Million Users",
    situation: "A passenger is watching their assigned cab approach on the live map. The app needs the driver's updated GPS coordinates every single second. Right now, the phone makes a new HTTP connection every second: Handshake, TLS encrypt, request, response, close connection... repeat 60 times a minute!",
    problem: "Creating and tearing down 60 HTTP connections per minute per phone generates huge network handshake overhead and drains phone battery life.",
    simulationType: "protocols_sim",
    choices: [
      {
        id: "A",
        text: "Open a single, persistent, bi-directional pipe (WebSocket) that stays open continuously so the server can push GPS pings the instant the car moves.",
        isOptimal: true,
        consequenceText: "WebSocket connection established! Zero connection teardown overhead. The car glides smoothly across the passenger's screen with instantaneous sub-20ms updates!",
        resultState: "websocket_live",
        statImpact: { connectionOverhead: "-92%", latency: "15ms", carMotion: "Butter-Smooth" }
      },
      {
        id: "B",
        text: "Keep doing HTTP Short Polling: Ask 'Where is the car?' 120 times every minute.",
        isOptimal: false,
        consequenceText: "High server load! 90% of the network packets are just repetitive HTTP headers and handshakes. Passenger's phone heats up and battery drains rapidly.",
        resultState: "polling_waste",
        statImpact: { connectionOverhead: "+800%", latency: "1,200ms lag", carMotion: "Jerky / Stuttering" }
      }
    ],
    discovery: {
      badge: "Networking Protocols",
      tagline: "Persistent pipes vs knocking on the door repeatedly",
      analogy: "Short Polling is like asking your friend every 2 seconds: 'Are we there yet? Are we there yet?'. WebSockets is like keeping an active phone call on speaker so your friend tells you 'We arrived' the moment you pull in.",
      contrast: {
        termA: "HTTP/1.1 vs HTTP/2 & HTTP/3",
        descA: "HTTP/2 introduces multiplexing (multiple requests on one TCP connection). HTTP/3 uses QUIC over UDP to eliminate head-of-line blocking on flaky mobile cell towers.",
        termB: "WebSockets vs Server-Sent Events (SSE)",
        descB: "WebSockets provide full-duplex two-way communication (great for driver/rider chat). SSE provides one-way server-to-client streaming (great for stock tickers)."
      },
      advancedInfo: "WebSockets begin with an HTTP Upgrade request, switching the protocol to RFC 6455 framing over the underlying TCP socket.",
      teacherNotes: {
        concept: "Networking Protocols: HTTP, WebSockets, HTTP/2 & HTTP/3",
        experience: "Students compared repetitive HTTP polling overhead with persistent bi-directional WebSockets for real-time map tracking.",
        realWorld: "Ride-hailing apps maintain WebSocket / gRPC bi-directional streaming channels with millions of mobile driver apps.",
        question: "During peak rush hour, what should happen to ride requests when our drivers are all busy right now?"
      }
    }
  },

  // LEVEL 17
  {
    id: 17,
    stage: 5,
    title: "Too Many Requests Waiting",
    time: "Surge Buffer Overload",
    usersCount: "5 Million Users",
    situation: "During Diwali or New Year's Eve countdown, 80,000 ride requests arrive within 10 seconds. The matching engine server can only calculate complex driver-passenger pairings at 2,000 rides per second. Without a buffer, the extra 60,000 requests are dropped and lost forever!",
    problem: "When the rate of incoming work temporarily exceeds the processing capacity, you need a shock absorber.",
    simulationType: "message_queue_sim",
    choices: [
      {
        id: "A",
        text: "Drop incoming requests into a durable, lightning-fast waiting conveyor belt (Message Queue). Worker servers pull from the belt as fast as they can.",
        isOptimal: true,
        consequenceText: "Message Queue (Kafka / RabbitMQ) buffered all 80,000 requests in 2 milliseconds! Not a single ride was lost. Worker pools chewed through the queue smoothly within seconds!",
        resultState: "queue_success",
        statImpact: { droppedRequests: "0%", peakAbsorption: "Instant", systemStability: "Rock Solid" }
      },
      {
        id: "B",
        text: "Immediately discard any request that cannot be paired within 50 milliseconds.",
        isOptimal: false,
        consequenceText: "60,000 passengers get 'Booking Error' and delete RideQuest. Lost revenue and massive public relations backlash.",
        resultState: "queue_drop_disaster",
        statImpact: { droppedRequests: "75%", peakAbsorption: "Zero", systemStability: "Crippled" }
      }
    ],
    discovery: {
      badge: "Message Queues",
      tagline: "The shock absorber of distributed systems",
      analogy: "Like the ticket queue line rope at a popular movie theater or theme park roller coaster. Even if 1,000 people arrive at the same time, the line holds everyone safely until the ticket booth serves them one by one.",
      contrast: {
        termA: "Point-to-Point vs Pub/Sub",
        descA: "Point-to-Point (e.g. RabbitMQ work queue) delivers each message to exactly one consumer. Pub/Sub (Publish/Subscribe) broadcasts messages to multiple subscribers (e.g., Ride Booked event notifies Driver, Payment, and Notification services simultaneously).",
        termB: "Kafka vs RabbitMQ",
        descB: "RabbitMQ is a flexible message broker with complex routing. Apache Kafka is an immutable distributed event log designed for massive throughput and event replaying."
      },
      advancedInfo: "Message queues decouple producers from consumers: The web API doesn't need to wait for driver matching, receipt generation, or analytics logging—it pushes the event and immediately confirms to the user.",
      teacherNotes: {
        concept: "Asynchronous Message Queuing (Kafka, RabbitMQ, Decoupling, Backpressure)",
        experience: "Students used a message buffer queue to absorb spike surges without dropping customer requests.",
        realWorld: "Uber processes trillions of messages per day using Apache Kafka clusters across data centers.",
        question: "How do you continuously process moving GPS locations from 50,000 drivers in real-time?"
      }
    }
  },

  // LEVEL 18
  {
    id: 18,
    stage: 5,
    title: "Real-Time City Data",
    time: "City-Wide Telemetry",
    usersCount: "6 Million Users",
    situation: "50,000 active drivers are driving across roads, sending GPS coordinates, speed, and fuel status every 2 seconds. That is 1,500,000 telemetry events every minute! RideQuest needs to detect traffic jams, update route ETAs, and detect driver speeding immediately.",
    problem: "Waiting for batch processing once every hour is useless for real-time traffic jams and safety alerts. The data must be computed on the fly as it flows.",
    simulationType: "stream_processing_sim",
    choices: [
      {
        id: "A",
        text: "Stream Processing Pipeline: Process and analyze each GPS point continuously as it flows through sliding time windows (e.g. detect deceleration over last 30 seconds).",
        isOptimal: true,
        consequenceText: "Stream Engine (Flink / Spark Streaming) active! Traffic slowdowns on MG Road are detected in 1.4 seconds. RideQuest automatically reroutes following drivers around the jam!",
        resultState: "stream_realtime",
        statImpact: { detectionDelay: "1.4s", trafficRerouting: "Instant", safetyAlerts: "Real-Time" }
      },
      {
        id: "B",
        text: "Save all coordinates to a hard drive and run a batch job once every 6 hours to find traffic jams.",
        isOptimal: false,
        consequenceText: "By the time the batch job finishes at 10:00 PM, the 6:00 PM traffic jam has already ended, but thousands of drivers were stuck in it for 2 hours!",
        resultState: "batch_too_late",
        statImpact: { detectionDelay: "6 Hours", trafficRerouting: "Useless", safetyAlerts: "Missed" }
      }
    ],
    discovery: {
      badge: "Stream Processing & Event Sourcing",
      tagline: "Computing data in motion, not at rest",
      analogy: "Like filtering water directly from a flowing river through a mesh filter as it rushes past, rather than filling a giant swimming pool, waiting a day, and then filtering the stagnant pool.",
      contrast: {
        termA: "Batch vs Stream Processing",
        descA: "Batch (Hadoop/MapReduce) processes huge static datasets on a schedule. Stream (Apache Flink, Spark Streaming) processes infinite live data streams with millisecond latencies.",
        termB: "Event Sourcing",
        descB: "Instead of only storing the current state (Car is at [X, Y]), you store every immutable state change event. You can replay time and reconstruct history perfectly."
      },
      advancedInfo: "Windowing in stream processing allows aggregations over sliding windows (e.g. average vehicle speed over the last 60 seconds) or tumbling windows (every fixed 5-minute block).",
      teacherNotes: {
        concept: "Real-Time Stream Processing vs Batch Processing & Event Sourcing",
        experience: "Students compared waiting for delayed batch jobs vs computing live event streams for dynamic city traffic.",
        realWorld: "Uber uses Apache Flink for real-time surge pricing calculations and fraud detection on streaming driver locations.",
        question: "When a passenger searches for 'Café Coffee Day Indiranagar', how does the search box find it in 5ms among 20 million places?"
      }
    }
  },

  // LEVEL 19
  {
    id: 19,
    stage: 6,
    title: "Searching For A Place Or Driver",
    time: "Location Search Engine",
    usersCount: "7 Million Users",
    situation: "A passenger types in the search box: 'Indira Gandhi Airport Terminal 2'. RideQuest has 25,000,000 location landmarks, restaurant names, and addresses in its database. Searching with SQL 'LIKE %Indira%' scans the full text of every row and takes 9 seconds!",
    problem: "Traditional databases are terrible at keyword searches, typos, fuzzy matching, and prefix searches across millions of text documents.",
    simulationType: "fulltext_search_sim",
    choices: [
      {
        id: "A",
        text: "Build an Inverted Index: Break all addresses into unique words ('Indira', 'Airport', 'Terminal') and map each word to the list of IDs where it appears.",
        isOptimal: true,
        consequenceText: "Search Engine (Elasticsearch) deployed! Lookups for 'Airport' jump straight to the matching location IDs in 3 milliseconds, with fuzzy typo correction (handling 'Airtport')!",
        resultState: "search_engine_fast",
        statImpact: { searchLatency: "3ms", typoTolerance: "Smart Fuzzy", autocomplete: "Instant" }
      },
      {
        id: "B",
        text: "Stick with SQL 'SELECT * WHERE address LIKE %keyword%' and scan all 25 million records.",
        isOptimal: false,
        consequenceText: "The database locks up on disk I/O. As the user types each letter, the phone freezes waiting for 9-second search results.",
        resultState: "search_sql_freeze",
        statImpact: { searchLatency: "9,200ms", typoTolerance: "None", autocomplete: "Broken" }
      }
    ],
    discovery: {
      badge: "Full-Text Search & Inverted Indexes",
      tagline: "The secret behind Google and Elasticsearch",
      analogy: "Like the index at the back of an encyclopedia: You look up the keyword 'Moon' and find [Pages 12, 45, 98]. You don't read every sentence in all 20 volumes of the encyclopedia!",
      contrast: {
        termA: "Inverted Index",
        descA: "Maps tokens (words) to document IDs. Instead of Document -> Words, it inverts the mapping to Word -> List of Documents.",
        termB: "BM25 & Fuzzy Matching",
        descB: "BM25 scores relevance based on term frequency and document length. Levenshtein distance allows finding results even when passengers make spelling mistakes."
      },
      advancedInfo: "Dedicated search engines like Elasticsearch and OpenSearch use Lucene underneath. They run alongside primary databases, receiving updates via Change Data Capture (CDC).",
      teacherNotes: {
        concept: "Full-Text Search Engines & Inverted Index Data Structures",
        experience: "Students discovered why SQL substring matches choke on text and built an inverted word-to-document index.",
        realWorld: "Ride apps use Elasticsearch / Algolia to power instant typeahead destination autocomplete.",
        question: "How does the executive team analyze which city has the highest profit across 500 million historical rides?"
      }
    }
  },

  // LEVEL 20
  {
    id: 20,
    stage: 6,
    title: "The Passenger's Phone & The Cloud Brain",
    time: "4:45 PM Peak Commute Preparation",
    usersCount: "800,000 active devices",
    situation: "A passenger opens the OLA app on their smartphone to book a cab to MG Road. The phone itself has limited battery, memory, and zero global knowledge of where 50,000 drivers across the city are located right now!",
    problem: "How should work be divided between the passenger's mobile phone (the Client) and the centralized OLA data center computers (the Server)?",
    simulationType: "client_server_sim",
    choices: [
      {
        id: "A",
        text: "Fat Client: Download all 50,000 drivers' live GPS coordinates and the entire city's traffic graph onto the passenger's phone to calculate routes locally.",
        isOptimal: false,
        consequenceText: "The passenger's phone overheated, consumed 4 GB of cellular data in 30 seconds, froze, and ran out of battery! Budget phones cannot run citywide compute.",
        resultState: "phone_battery_dead",
        statImpact: { clientLoad: "100% (Crashing)", networkUsage: "4,200 MB / min", batteryDrain: "Severe", computeLocation: "All on Phone" },
        whatHappened: {
          helped: "The central server had to do zero work.",
          bottleneck: "Mobile phones have limited CPU, RAM, and battery. Downloading massive global datasets to every phone exhausts mobile data and crashes the phone.",
          reflectionQuestion: "Should a mobile client perform heavy global computation, or simply request answers from a powerful server?"
        }
      },
      {
        id: "B",
        text: "Client-Server Architecture: The mobile app (Client) sends a lightweight Request (lat, lng), and the cloud server processes it and returns a clean JSON Response in 15ms.",
        isOptimal: true,
        consequenceText: "Flawless interaction! The mobile app remains smooth, uses only 2 KB of data, and displays nearby cabs instantly while powerful cloud servers do the heavy lifting!",
        resultState: "client_server_success",
        statImpact: { clientLoad: "Light & Fast (2% CPU)", networkUsage: "2 KB / req", batteryDrain: "Minimal", computeLocation: "Cloud Server" },
        successSummary: "By using Client-Server architecture, the lightweight mobile app displays the UI and sends requests, while high-performance servers handle heavy search and matching!"
      },
      {
        id: "C",
        text: "No Client, No Server: Ask passengers to shout out their window looking for taxi drivers.",
        isOptimal: false,
        consequenceText: "Nobody could hear anything over the city traffic! Modern digital ride-hailing ceased to exist.",
        resultState: "street_chaos",
        statImpact: { clientLoad: "N/A", networkUsage: "0", batteryDrain: "N/A", computeLocation: "None" },
        whatHappened: {
          helped: "Zero technology needed.",
          bottleneck: "Physical shouting doesn't scale across a city of 10 million people.",
          reflectionQuestion: "Why did software and internet requests replace physical street hailing?"
        }
      }
    ],
    discovery: {
      badge: "Client-Server Architecture",
      tagline: "Request from the palm, compute in the cloud",
      analogy: "Like a diner at a restaurant (the Client) looking at a menu and placing an order with the waiter, while the master kitchen (the Server) cooks the meal and serves the finished dish.",
      contrast: {
        termA: "Client (Mobile Frontend)",
        descA: "The user interface on the smartphone. Collects taps, renders maps, displays buttons, and sends HTTP/WebSocket requests.",
        termB: "Server (Cloud Backend)",
        descB: "Centralized computers in a data center. Stores the database, runs driver matching algorithms, authenticates users, and returns responses."
      },
      advancedInfo: "Client-Server separation enables independent evolution: OLA can upgrade its machine learning matching algorithm on the server without forcing 50 million users to download an app update from the App Store.",
      teacherNotes: {
        concept: "Client-Server Architecture & Request-Response Cycle",
        experience: "Students visualized the fundamental contract of the internet: client requests data, server computes and responds.",
        realWorld: "Every mobile interaction in OLA, Uber, Swiggy, and Instagram follows the Client-Server model over HTTPS.",
        question: "What happens when the client loses network connectivity—how should the app handle offline states?"
      }
    }
  },

  // LEVEL 21
  {
    id: 21,
    stage: 6,
    title: "Users Are Far Away",
    time: "Nationwide Geography",
    usersCount: "8.5 Million Users",
    situation: "RideQuest's main servers and image storage are located in Chennai (South India). A passenger opening the app in Delhi (North India, 2,200 km away) experiences a 350-millisecond lag just downloading the map tiles, car icons, and promotional banners across long-distance fiber cables.",
    problem: "The speed of light in fiber optic glass is finite (~200,000 km/s). Physics dictates that physical distance creates unavoidable network latency.",
    simulationType: "cdn_edge_sim",
    choices: [
      {
        id: "A",
        text: "Deploy a Content Delivery Network (CDN): Cache static assets (map images, car icons, app code) on Edge Servers located directly in Delhi, Mumbai, Kolkata, and Bengaluru.",
        isOptimal: true,
        consequenceText: "Edge CDN deployed! Passengers in Delhi now download assets from a local Delhi server in 8ms instead of 350ms! Speed of light lag vanquished!",
        resultState: "cdn_edge_fast",
        statImpact: { assetLatency: "8ms (40x faster)", originServerLoad: "-85%", userExperience: "Snappy" }
      },
      {
        id: "B",
        text: "Make every user across the continent pull every static image from the single Chennai server every time.",
        isOptimal: false,
        consequenceText: "Chennai server bandwidth saturates. Users in Delhi and Kolkata see blank grey squares where maps and car icons should be.",
        resultState: "cdn_origin_bottleneck",
        statImpact: { assetLatency: "350ms+", originServerLoad: "100%", userExperience: "Sluggish" }
      }
    ],
    discovery: {
      badge: "Content Delivery Network (CDN)",
      tagline: "Move content closer to where the user lives",
      analogy: "Like having a local milk booth or neighborhood grocery store on your street corner. You don't travel 500 kilometers to a dairy farm in another state every time you want a bottle of milk!",
      contrast: {
        termA: "Edge Caching & PoPs",
        descA: "Points of Presence (PoPs) stationed in dozens of cities worldwide cache static images, videos, and CSS closer to end users.",
        termB: "Anycast Routing",
        descB: "Directs incoming client network requests to the geographically closest edge server automatically using BGP routing."
      },
      advancedInfo: "Modern CDNs (Cloudflare, Fastly, AWS CloudFront) also execute Edge Compute (serverless functions directly at the edge) to handle auth tokens and localize headers before hitting origins.",
      teacherNotes: {
        concept: "CDNs, Edge Caching, and Geographic Latency Reduction",
        experience: "Students felt the physical latency of geographical distance and placed edge caching nodes across cities.",
        realWorld: "RideQuest serves its mobile assets, map vector tiles, and app update bundles through global CDN edge networks.",
        question: "When 5 nearby drivers are available, how does the app know which driver is best to recommend?"
      }
    }
  },

  // LEVEL 22
  {
    id: 22,
    stage: 6,
    title: "Which Driver Should I Recommend?",
    time: "Intelligent Dispatch",
    usersCount: "9 Million Users",
    situation: "A high-tier executive passenger requests a ride. There are 4 drivers nearby: Driver A is 200m away but has a 3.1-star rating and cancels 40% of trips. Driver B is 600m away, has a 4.9-star rating, speaks fluent local language, and drives an immaculate electric sedan. Driver C has never done a ride.",
    problem: "Matching purely by shortest geographic distance often leads to terrible passenger experiences, cancellations, and lost loyalty.",
    simulationType: "recsys_sim",
    choices: [
      {
        id: "A",
        text: "Build an Intelligent Recommendation & Ranking Model: Score candidates using multi-factor signals (ETA, driver rating, acceptance rate, vehicle quality, passenger history).",
        isOptimal: true,
        consequenceText: "Smart Ranking matches with Driver B! ETA is only 1 minute longer, but trip completion rate is 99.8%, passenger gives a 5-star review, and driver tips increase by 30%!",
        resultState: "recsys_smart_match",
        statImpact: { tripCompletion: "99.8%", rating: "4.9 Stars", churn: "-40%" }
      },
      {
        id: "B",
        text: "Just pick the driver with the closest GPS distance unconditionally (Driver A).",
        isOptimal: false,
        consequenceText: "Driver A accepts, then cancels 3 minutes later because the destination is inconvenient. The passenger is stranded and frustrated.",
        resultState: "recsys_naive_fail",
        statImpact: { tripCompletion: "60%", rating: "3.2 Stars", churn: "+25%" }
      }
    ],
    discovery: {
      badge: "Recommendation & Ranking Systems",
      tagline: "Turning raw options into the perfect match",
      analogy: "Like a thoughtful matchmaker or concierge: Instead of introducing you to the nearest person standing next to you, they understand your preferences and introduce you to someone you will actually enjoy talking to!",
      contrast: {
        termA: "Content-Based vs Collaborative Filtering",
        descA: "Content-Based matches based on explicit attributes (vehicle type, rating, language). Collaborative looks at similarities across crowds ('Passengers like you also enjoyed this driver').",
        termB: "Two-Stage Retrieval & Ranking",
        descB: "Stage 1: Fast Candidate Retrieval filters 10,000 drivers down to the top 50 in 5ms. Stage 2: Heavy Machine Learning Model scores and ranks the top 50."
      },
      advancedInfo: "Ride-hailing dispatch uses bipartite matching algorithms (Kuhn-Munkres / Hungarian algorithm) combined with ML pricing and destination likelihood models to maximize global city efficiency.",
      teacherNotes: {
        concept: "Recommendation Systems, Candidate Generation, and Multi-Factor Ranking",
        experience: "Students compared naive nearest-neighbor matching with holistic multi-signal ranking algorithms.",
        realWorld: "Uber's Marketplace Intelligence team runs batch bipartite matching every few seconds rather than instant greedy 1-to-1 dispatch.",
        question: "When 100 microservices run simultaneously and a trip fails, how do engineers find which service caused it?"
      }
    }
  },

  // LEVEL 23
  {
    id: 23,
    stage: 7,
    title: "Understanding What Is Happening",
    time: "The Control Room",
    usersCount: "9.5 Million Users",
    situation: "A user reports: 'I clicked Book Ride and got Error 500!'. RideQuest now has 45 microservices (API Gateway, Auth, Ride, Driver, Payment, Geo, Pricing, Fraud, Promo...). Looking through millions of raw console log lines by hand across 100 servers would take 3 days!",
    problem: "When a complex system breaks, if you cannot see inside, you are flying a plane blind in a thunderstorm.",
    simulationType: "observability_sim",
    choices: [
      {
        id: "A",
        text: "Implement Distributed Tracing & APM: Tag every incoming request with a unique Trace ID that follows it across all 45 services. Visualize the hop timeline with live error alerts.",
        isOptimal: true,
        consequenceText: "Observability activated! Trace ID #9a8f2 highlights the exact path: Gateway (2ms) -> Auth (4ms) -> Ride (12ms) -> Pricing Service [CRASH: NullPointerException on coupon code 'RAIN50' at line 42]! Found in 4 seconds!",
        resultState: "tracing_found_bug",
        statImpact: { mttr: "4 Seconds (vs 3 days)", bugPinpointed: "Exact Line", downtime: "Averted" }
      },
      {
        id: "B",
        text: "Log into individual servers via SSH terminal one by one and manually read text log files.",
        isOptimal: false,
        consequenceText: "By the time engineers log into server #14, another 50,000 passengers have encountered the crash. The issue persists for hours.",
        resultState: "manual_log_slog",
        statImpact: { mttr: "4.5 Hours", bugPinpointed: "Guesswork", downtime: "Ongoing" }
      }
    ],
    discovery: {
      badge: "Observability: The Three Pillars",
      tagline: "Metrics, Logs, and Traces",
      analogy: "Like a modern hospital ICU patient monitor: Instead of guessing why a patient feels sick, doctors have real-time heart rate graphs (Metrics), detailed medical chart notes (Logs), and an X-ray tracer dye tracing blood flow through every organ (Distributed Traces).",
      contrast: {
        termA: "Metrics & Logs",
        descA: "Metrics (Prometheus/Grafana) track numbers over time (CPU %, 500 Error count). Logs track discrete event records with context.",
        termB: "Distributed Tracing (Jaeger / OpenTelemetry)",
        descB: "Propagates a correlation Trace ID through HTTP headers across all microservice hops, showing a Gantt chart of where every millisecond was spent."
      },
      advancedInfo: "The Golden Signals of Observability: Latency, Traffic, Errors, and Saturation. Setting up SLOs (Service Level Objectives) and automated alerting allows engineers to fix issues before users notice.",
      teacherNotes: {
        concept: "Observability: Metrics, Structured Logging, Distributed Tracing, and APM",
        experience: "Students navigated a distributed failure and used trace correlation to pinpoint a bug within seconds.",
        realWorld: "Modern tech giants use OpenTelemetry, Jaeger, Datadog, and Grafana to trace billions of distributed requests.",
        question: "How do we ensure that malicious hackers or rogue drivers cannot steal ride data or withdraw money?"
      }
    }
  },

  // LEVEL 24
  {
    id: 24,
    stage: 7,
    title: "Protecting The App",
    time: "Security & Zero Trust",
    usersCount: "10 Million Users",
    situation: "A rogue user inspects the mobile app network traffic and tries to call the internal URL '/api/admin/refund-wallet' to credit ₹10,000 to their own account. Another user attempts to read private GPS locations of high-profile passengers.",
    problem: "Anyone can send a raw HTTP request. If the backend doesn't strictly verify who you are and what you are allowed to touch, your platform will be hacked.",
    simulationType: "security_rbac_sim",
    choices: [
      {
        id: "A",
        text: "Enforce AuthN & AuthZ: Authenticate identity with signed, tamper-proof tokens (JWT / OAuth 2.0) and enforce strict Role-Based Access Control (RBAC) on every API endpoint.",
        isOptimal: true,
        consequenceText: "Security Gate locked! The attacker's forged request is inspected. Token role is 'Passenger'. The endpoint requires 'Admin' role. The gateway returns '403 Forbidden' and flags the attacker's IP!",
        resultState: "security_block_success",
        statImpact: { breaches: "0", unauthorizedAccess: "Blocked", regulatoryCompliance: "100%" }
      },
      {
        id: "B",
        text: "Rely on 'Security through obscurity': Just make the admin URL long and hard to guess (e.g. /api/secret-admin-9827361).",
        isOptimal: false,
        consequenceText: "Security breach! The URL is leaked on GitHub or discovered by automated scanners. The attacker drains ₹5,00,000 from the company account.",
        resultState: "security_breach_disaster",
        statImpact: { breaches: "Severe", unauthorizedAccess: "Unrestricted", regulatoryCompliance: "Failed" }
      }
    ],
    discovery: {
      badge: "Authentication & Authorization (AuthN / AuthZ)",
      tagline: "Who are you? And what are you allowed to do?",
      analogy: "Like boarding an international flight: Authentication is showing your Passport at immigration ('Yes, you are Priya'). Authorization is showing your First-Class Boarding Pass to enter the VIP lounge ('No, this coach ticket doesn't allow entry to the cockpit').",
      contrast: {
        termA: "Authentication (AuthN)",
        descA: "Verifies IDENTITY (Passwords, 2FA, Biometrics, OAuth 2.0, OpenID Connect). Proves who the user is.",
        termB: "Authorization (AuthZ) & RBAC",
        descB: "Verifies PERMISSIONS (RBAC: Role-Based Access Control). Decides what the authenticated user is permitted to view, edit, or delete."
      },
      advancedInfo: "Always combine with Encryption in Transit (TLS 1.3 HTTPS) and Encryption at Rest (AES-256 for databases), plus API rate limiting and token signature verification.",
      teacherNotes: {
        concept: "Security Architecture: AuthN vs AuthZ, OAuth 2.0, JWT, RBAC, and Principle of Least Privilege",
        experience: "Students defended their platform against privilege escalation attacks using cryptographic tokens and RBAC.",
        realWorld: "Enterprise systems enforce Zero Trust architectures: Never trust, always verify every microservice request.",
        question: "Now you have discovered all 24 fundamental concepts of system design... Are you ready to build the complete RideQuest architecture from scratch?"
      }
    }
  },

  // FINAL BOSS (LEVEL 25)
  {
    id: 25,
    stage: 8,
    title: "FINAL BOSS: BUILD RIDEQUEST",
    time: "10 Million Users Across 50 Cities",
    usersCount: "10,000,000 Users",
    situation: "Congratulations, Architect! You have experienced every real-world problem a ride-hailing company faces. Now comes the ultimate test: RideQuest has 10 million users, 1 million drivers, and processes 500,000 requests per second across 50 cities.",
    problem: "Assemble the complete, robust, scalable, resilient, and secure RideQuest architecture on the System Design Canvas!",
    isBoss: true
  }
];

const TOPIC_HINTS = {
  1: "Handling Sudden Crowd Surges",
  2: "Verifying User Identity (Authentication)",
  3: "Distributing Incoming Traffic",
  4: "Dealing with Network Partitions",
  5: "Guaranteeing Safe Payments",
  6: "Remembering Frequent Answers",
  7: "Searching Without Scanning Everything",
  8: "Separating Conflicting Workloads",
  9: "Dividing an Enormous Database",
  10: "Choosing the Right Database (SQL vs NoSQL)",
  11: "Coordinating Independent Services",
  12: "Containing System Failures",
  13: "Decoupling Independent Microservices",
  14: "Connecting Mobile Apps to Backend",
  15: "Shielding from Request Floods",
  16: "Live Two-Way Map Communication",
  17: "Buffering Traffic Spikes Safely",
  18: "Analyzing Live Moving Telemetry",
  19: "Searching Instant Landmark Names",
  20: "Request & Response (Client-Server Architecture)",
  21: "Serving Distant Geographic Cities",
  22: "Matching the Best Driver Intelligently",
  23: "Investigating Hidden Service Crashes",
  24: "Defending Against Rogue Actions",
  25: "Interactive OLA App Screen Builder"
};

LEVELS.forEach(lvl => {
  if (TOPIC_HINTS[lvl.id]) {
    lvl.topicHint = TOPIC_HINTS[lvl.id];
  }
  if (lvl.choices) {
    lvl.choices.forEach(ch => {
      if (!ch.whatHappened) {
        if (!ch.isOptimal) {
          ch.whatHappened = {
            helped: "You attempted a direct change to this part of the system.",
            bottleneck: ch.consequenceText,
            reflectionQuestion: "Did this approach solve the underlying system bottleneck or make another problem appear?",
            hint: "Look at where requests or people are getting stuck, and consider how to divide, buffer, or isolate the work."
          };
        } else {
          ch.successSummary = ch.consequenceText;
        }
      }
    });
  }
});

window.GAME_STAGES = STAGES;
window.GAME_LEVELS = LEVELS;



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


/**
 * RideQuest - Interactive Visual Simulation Engine
 * Renders scenario-based animated visuals across all 24 levels.
 *
 * For EVERY level and scenario:
 * 1. Initial State (choice === null): Animates the real-world problem as a story.
 *    Shows normal flow breaking down, the bottleneck/failure occurring, and its visible consequences.
 * 2. Correct Option: Animates the architectural solution, components introduced, smooth flows, and improvement.
 * 3. Incorrect Options: Animates the specific consequences of that particular choice, showing why it fails.
 */

class SimulationEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.animationTimer = null;
    this.activeSimType = null;
  }

  clear() {
    if (this.animationTimer) {
      clearInterval(this.animationTimer);
      this.animationTimer = null;
    }
    if (this.container) {
      this.container.innerHTML = '';
    }
  }

  // --- REUSABLE HELPER RENDERERS ---

  renderHeader(badgeText, counterText, badgeType = 'default') {
    const badgeClass = badgeType === 'problem' ? 'sim-badge-problem pulse-danger' 
      : (badgeType === 'solution' ? 'sim-badge-solution glow-green' 
      : (badgeType === 'warning' ? 'sim-badge-warning' : 'sim-badge'));

    return `
      <div class="sim-header">
        <span class="${badgeClass}">${badgeText}</span>
        <span class="sim-counter font-mono">${counterText}</span>
      </div>
    `;
  }

  renderNarrative(type, icon, title, description) {
    const boxClass = type === 'success' ? 'success-narrative glow-green'
      : (type === 'danger' ? 'danger-narrative pulse-shake'
      : (type === 'warning' ? 'warning-narrative' : 'problem-narrative pulse-danger'));

    return `
      <div class="sim-narrative-box ${boxClass}">
        <span class="narrative-icon">${icon}</span>
        <div class="narrative-content">
          <strong class="narrative-title">${title}</strong>
          <div class="narrative-desc text-muted">${description}</div>
        </div>
      </div>
    `;
  }

  renderTelemetry(pills) {
    return `
      <div class="sim-telemetry">
        ${pills.map(p => `
          <div class="stat-pill">
            <span>${p.label}:</span>
            <strong class="${p.class || ''}">${p.val}</strong>
          </div>
        `).join('')}
      </div>
    `;
  }

  // --- MAIN DISPATCHER ---
  render(level, choiceMade = null) {
    this.clear();
    if (!this.container) return;

    this.activeSimType = level.simulationType;
    const simType = level.simulationType;

    // Delegate to Isometric Diorama Game Engine for high-quality Unreal-inspired game scenes
    if (typeof window !== 'undefined' && window.DioramaEngine && typeof window.DioramaEngine.renderScene === 'function') {
      const sceneHtml = window.DioramaEngine.renderScene(simType, choiceMade, level);
      if (sceneHtml) {
        this.container.innerHTML = sceneHtml;
        return;
      }
    }

    switch (simType) {
      case 'servers_traffic':
        this.renderServersTraffic(level, choiceMade);
        break;
      case 'auth_simulation':
      case 'pipeline_bottleneck':
        this.renderAuthSim(level, choiceMade);
        break;
      case 'load_balancer_sim':
        this.renderLoadBalancerSim(level, choiceMade);
        break;
      case 'cap_network_partition':
        this.renderCapSim(level, choiceMade);
        break;
      case 'acid_transaction_sim':
        this.renderAcidSim(level, choiceMade);
        break;
      case 'cache_sim':
        this.renderCacheSim(level, choiceMade);
        break;
      case 'indexing_lookup':
        this.renderIndexingSim(level, choiceMade);
        break;
      case 'oltp_vs_olap':
        this.renderOltpOlapSim(level, choiceMade);
        break;
      case 'sharding_sim':
        this.renderShardingSim(level, choiceMade);
        break;
      case 'database_design_sim':
      case 'replication_failover':
        this.renderDatabaseDesignSim(level, choiceMade);
        break;
      case 'distributed_tx_sim':
        this.renderDistributedTxSim(level, choiceMade);
        break;
      case 'circuit_breaker_sim':
        this.renderCircuitBreakerSim(level, choiceMade);
        break;
      case 'microservices_sim':
      case 'vector_clock_sim':
        this.renderMicroservicesSim(level, choiceMade);
        break;
      case 'api_styles_sim':
        this.renderApiSim(level, choiceMade);
        break;
      case 'rate_limiter_sim':
        this.renderRateLimiterSim(level, choiceMade);
        break;
      case 'protocols_sim':
        this.renderProtocolsSim(level, choiceMade);
        break;
      case 'message_queue_sim':
        this.renderMessageQueueSim(level, choiceMade);
        break;
      case 'stream_processing_sim':
        this.renderStreamSim(level, choiceMade);
        break;
      case 'fulltext_search_sim':
        this.renderSearchSim(level, choiceMade);
        break;
      case 'client_server_sim':
      case 'data_warehouse_sim':
        this.renderClientServerSim(level, choiceMade);
        break;
      case 'cdn_edge_sim':
        this.renderCdnSim(level, choiceMade);
        break;
      case 'recsys_sim':
        this.renderRecSysSim(level, choiceMade);
        break;
      case 'observability_sim':
        this.renderObservabilitySim(level, choiceMade);
        break;
      case 'security_rbac_sim':
        this.renderSecuritySim(level, choiceMade);
        break;
      default:
        this.renderGenericCity(level, choiceMade);
    }
  }

  // =========================================================================
  // LEVEL 1: Servers & Traffic (Horizontal vs Vertical Scaling)
  // =========================================================================
  renderServersTraffic(level, choice) {
    const isHorizontal = choice && choice.id === 'B';
    const isVertical = choice && choice.id === 'A';
    const isDrop = choice && choice.id === 'C';

    let headerBadge, counterText, headerType, narrative, telemetry;
    let serverVisual = '';

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: 6:00 PM City Rush Hour`;
      counterText = '50,000 Active Passengers Overwhelming Server';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.fire({size:22}) + '</span>', 
        'Single Server Bottleneck: Physical Capacity Exceeded', 
        '50,000 riders are simultaneously opening the app to book evening cabs. The lone server CPU is pinned at 99%, heating to 98°C. Incoming requests are piling up, and without an architectural change, the system will crash!');
      telemetry = this.renderTelemetry([
        { label: 'Server CPU', val: '99% (Overheated)', class: 'text-danger' },
        { label: 'Latency', val: '2,400ms (Unusable)', class: 'text-danger' },
        { label: 'Dispatched', val: '8,000 / 50,000', class: 'text-warning' }
      ]);
      serverVisual = `
        <div class="sim-server overheated pulse-danger" id="server-single">
          <div class="server-rack-top"><span class="rack-light red blink"></span><span class="rack-label">Single Main Host #01</span></div>
          <div class="server-icon-large">${Icons.server({size:40, status:"danger"})}</div>
          <div class="server-title">Single Machine Architecture</div>
          <div class="server-bar"><div class="server-fill fill-danger" style="width: 99%;"></div></div>
          <div class="server-status text-danger font-mono">${Icons.alertTriangle({size:14})} CPU: 99% • TEMP: 98°C • MEM: 97%</div>
          <div class="smoke-particles-container"><span class="smoke-p s1" style="color:#aaa;">●</span><span class="smoke-p s2" style="color:#e74c3c;">●</span></div>
          <div class="bottleneck-tag text-danger">${Icons.errorCircle({size:14})} Single Point of Failure (Crash Imminent)</div>
        </div>
      `;
    } else if (isHorizontal) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Horizontal Scale-Out Deployed`;
      counterText = '50,000 req/s Distributed Across 4 Healthy Nodes';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.trophy({size:22}) + '</span>', 
        'Optimal Architecture: Horizontal Scaling Across Nodes', 
        'By distributing the crowd across 4 commodity servers, each machine handles only ~12,500 requests (25% load). If one server trips, the remaining 3 keep the city moving with zero downtime!');
      telemetry = this.renderTelemetry([
        { label: 'Avg Node CPU', val: '25% (Cool & Stable)', class: 'text-success' },
        { label: 'Latency', val: '18ms (Instant)', class: 'text-success' },
        { label: 'Dispatched', val: '50,000 / 50,000 (100%)', class: 'text-success' }
      ]);
      serverVisual = `
        <div class="horizontal-cluster-box glow-green">
          <div class="cluster-header"><span class="cluster-badge">${Icons.check({size:14})} Distributed Cluster (4 Nodes Active)</span></div>
          <div class="sim-servers-grid">
            <div class="sim-server healthy"><div class="server-rack-top"><span class="rack-light green"></span><span>Node 01</span></div><div class="server-icon">${Icons.server({size:28})}</div><div class="server-bar"><div class="server-fill fill-success" style="width: 25%;"></div></div><div class="text-success font-mono">CPU: 25% • 36°C</div></div>
            <div class="sim-server healthy"><div class="server-rack-top"><span class="rack-light green"></span><span>Node 02</span></div><div class="server-icon">${Icons.server({size:28})}</div><div class="server-bar"><div class="server-fill fill-success" style="width: 26%;"></div></div><div class="text-success font-mono">CPU: 26% • 37°C</div></div>
            <div class="sim-server healthy"><div class="server-rack-top"><span class="rack-light green"></span><span>Node 03</span></div><div class="server-icon">${Icons.server({size:28})}</div><div class="server-bar"><div class="server-fill fill-success" style="width: 24%;"></div></div><div class="text-success font-mono">CPU: 24% • 35°C</div></div>
            <div class="sim-server healthy"><div class="server-rack-top"><span class="rack-light green"></span><span>Node 04</span></div><div class="server-icon">${Icons.server({size:28})}</div><div class="server-bar"><div class="server-fill fill-success" style="width: 25%;"></div></div><div class="text-success font-mono">CPU: 25% • 36°C</div></div>
          </div>
        </div>
      `;
    } else if (isVertical) {
      headerBadge = `${Icons.alertTriangle({size:16})} SUBOPTIMAL: Vertical Scaling Hit Hardware Limits`;
      counterText = 'Titan Super-Server ($25,000/mo) Pinned at 95%';
      headerType = 'warning';
      narrative = this.renderNarrative('warning', '<span class="rq-svg-icon">' + Icons.alertTriangle({size:22}) + '</span>', 
        'Physical Hardware Ceiling: Vertical Scaling Cannot Scale Infinitely', 
        'Buying the biggest expensive super-computer helped briefly, but it still has a single motherboard, single power cord, and finite CPU cores. Under peak surge, it overheats again—and remains a disastrous single point of failure!');
      telemetry = this.renderTelemetry([
        { label: 'Titan CPU', val: '95% (Near Max)', class: 'text-warning' },
        { label: 'Monthly Cost', val: '$25,000 (10x Expensive)', class: 'text-danger' },
        { label: 'Redundancy', val: '0 Replicas (Single Point of Failure)', class: 'text-danger' }
      ]);
      serverVisual = `
        <div class="sim-server giant overheated pulse-danger">
          <div class="server-rack-top"><span class="rack-light red blink"></span><span class="rack-label">Titan Super-Server</span></div>
          <div class="server-icon-large">${Icons.server({size:40, status:"warning"})}</div>
          <div class="server-title">One Giant Super-Machine</div>
          <div class="server-bar"><div class="server-fill fill-danger" style="width: 95%;"></div></div>
          <div class="server-status text-danger font-mono">${Icons.alertTriangle({size:14})} CPU: 95% • Still Overheated Under Surge</div>
          <div class="smoke-particles-container"><span class="smoke-p s1" style="color:#aaa;">●</span><span class="smoke-p s2" style="color:#e74c3c;">●</span></div>
          <div class="bottleneck-tag text-warning">${Icons.alertTriangle({size:14, color:"#e67e22"})} Physical limit reached! Single power trip drops all rides.</div>
        </div>
      `;
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} FAILED: App Shut Down to Users`;
      counterText = '0 Cabs Dispatched • 100% User Churn';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Unacceptable Business Outcome: Abandoning Users', 
        'Putting up a notice asking riders to come back later caused passengers to uninstall RideQuest and switch to competitors. Revenue dropped to zero!');
      telemetry = this.renderTelemetry([
        { label: 'App Status', val: 'Closed (Offline)', class: 'text-danger' },
        { label: 'Customer Retention', val: '0% (Mass Churn)', class: 'text-danger' },
        { label: 'Revenue', val: '₹0 Lost', class: 'text-danger' }
      ]);
      serverVisual = `
        <div class="sim-server offline">
          <div class="server-icon-large">${Icons.errorCircle({size:40})}</div>
          <div class="server-title">"Please Try Again in 30 Min"</div>
          <div class="server-status text-danger">App Shut Down to Users</div>
          <div class="bottleneck-tag text-danger">${Icons.alertTriangle({size:14, color:"#e74c3c"})} 100% User Churn — Customers Switched to Competitor</div>
        </div>
      `;
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="sim-traffic-visual">
          <div class="sim-clients">
            <div class="clients-grid">
              <div class="client-avatar">${Icons.phone({size:22, color:"#3498db"})}<span class="user-pulse"></span></div>
              <div class="client-avatar">${Icons.phone({size:22, color:"#3498db"})}<span class="user-pulse"></span></div>
              <div class="client-avatar">${Icons.phone({size:22, color:"#3498db"})}<span class="user-pulse"></span></div>
              <div class="client-avatar">${Icons.phone({size:22, color:"#3498db"})}<span class="user-pulse"></span></div>
            </div>
            <div class="client-label">50,000 Ride Requests</div>
          </div>
          <div class="traffic-pipes ${isHorizontal ? 'pipe-split' : 'pipe-single'}">
            <div class="flow-particle p1"></div>
            <div class="flow-particle p2"></div>
            <div class="flow-particle p3"></div>
          </div>
          <div class="sim-target">${serverVisual}</div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 2: Authentication (OLA Mobile OTP & JWT Session)
  // =========================================================================
  renderAuthSim(level, choice) {
    const isOptimal = choice && choice.id === 'B';
    const isNoAuth = choice && choice.id === 'A';
    const isOfficeVisit = choice && choice.id === 'C';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Unverified Mobile Access`;
      counterText = 'Identity Ambiguity: Who is really booking this cab?';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.shieldAlert({size:22}) + '</span>', 
        'Identity Verification Challenge: Mobile App Access', 
        'A user enters a mobile number +91 98765 43210. But how does the server know the person holding the phone actually owns this SIM card? Without proof, attackers can hijack accounts or book fake rides on innocent strangers\' credit cards!');
      telemetry = this.renderTelemetry([
        { label: 'Identity Proof', val: 'Unverified (?)', class: 'text-warning' },
        { label: 'Account Security', val: 'Vulnerable', class: 'text-danger' },
        { label: 'Booking Integrity', val: 'At Risk', class: 'text-warning' }
      ]);
    } else if (isOptimal) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: 2FA SMS OTP + Signed JWT Session`;
      counterText = 'Identity Cryptographically Verified • Token Issued';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.shieldLock({size:22}) + '</span>', 
        'Authentication (AuthN): Dynamic One-Time Secret + JWT', 
        'By transmitting a 6-digit cryptographic secret (142690) via the telecom SMS gateway, the server proves physical SIM card possession. Once verified, the Auth Server issues a tamper-proof signed JWT token valid for future requests!');
      telemetry = this.renderTelemetry([
        { label: 'Security Level', val: 'High (Cryptographic)', class: 'text-success' },
        { label: 'User Friction', val: '10 Seconds (Fast)', class: 'text-success' },
        { label: 'Fraud Rate', val: '0.01% (Safe)', class: 'text-success' }
      ]);
    } else if (isNoAuth) {
      headerBadge = `${Icons.errorCircle({size:16})} CATASTROPHE: Zero Authentication Allowed`;
      counterText = '85% Fraud Rate • Account Takeovers Rampant';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.alertCircle({size:22, color:"#e74c3c"}) + '</span>', 
        'Disastrous Security Failure: Impersonation & Financial Theft', 
        'With zero verification, scammers typed random phone numbers and took free rides using other people\'s saved cards and wallets. Cabs arrived at ghost pickup points, drivers went unpaid, and customer trust collapsed!');
      telemetry = this.renderTelemetry([
        { label: 'Fraud Rate', val: '85% (Catastrophic)', class: 'text-danger' },
        { label: 'Security', val: 'Zero (Compromised)', class: 'text-danger' },
        { label: 'Driver Trust', val: 'Destroyed', class: 'text-danger' }
      ]);
    } else {
      headerBadge = `${Icons.alertTriangle({size:16})} EXTREME FRICTION: In-Person Office Verification`;
      counterText = '99.9% User Churn • Zero App Adoption';
      headerType = 'warning';
      narrative = this.renderNarrative('warning', '<span class="rq-svg-icon">' + Icons.citySkyline({size:22}) + '</span>', 
        'Unusable Customer Friction: Security Overkill', 
        'While requiring passengers to visit a physical office with passport and ID card is secure, it creates immense friction. Nobody will travel to an office just to book an auto-rickshaw. 99.9% of users uninstalled the app!');
      telemetry = this.renderTelemetry([
        { label: 'Adoption Rate', val: '0.1% (Mass Churn)', class: 'text-danger' },
        { label: 'Friction Time', val: '2 Days (Unacceptable)', class: 'text-danger' },
        { label: 'Business Viability', val: 'Failed', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage auth-sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="auth-simulation-visual">
          <!-- Step 1: Mobile App Screen -->
          <div class="auth-flow-card ${isOptimal ? 'border-success glow-green' : (isNoAuth ? 'border-danger pulse-shake' : '')}">
            <div class="flow-step-num">Step 1</div>
            <div class="flow-icon">${Icons.phone({size:18})}</div>
            <div class="flow-title">OLA Mobile App</div>
            <div class="flow-body">
              <div class="mock-input-field">
                <span class="country-code">🇮🇳 +91</span>
                <span class="phone-num">98765 43210</span>
              </div>
              <button class="mock-btn-ola ${isOptimal ? 'btn-active' : ''}">Next &rarr;</button>
            </div>
            <div class="flow-caption">${isNoAuth ? `${Icons.errorCircle({size:14})} Anyone can enter any number!` : 'User enters registered phone'}</div>
          </div>

          <!-- Network Arrow 1 -->
          <div class="auth-arrow ${isOptimal ? 'arrow-active' : ''}">
            <div class="arrow-line"></div>
            <div class="arrow-label">SMS Gateway ${Icons.phone({size:14})}</div>
          </div>

          <!-- Step 2: OTP Verification -->
          <div class="auth-flow-card ${isOptimal ? 'border-success glow-green' : (isNoAuth ? 'border-danger pulse-shake' : '')}">
            <div class="flow-step-num">Step 2</div>
            <div class="flow-icon">${isNoAuth ? Icons.errorCircle({size:14}) : (isOfficeVisit ? '<span class="rq-svg-icon">' + Icons.citySkyline({size:22}) + '</span>' : Icons.networkPacket({size:14}))}</div>
            <div class="flow-title">${isNoAuth ? 'OTP Skipped!' : (isOfficeVisit ? 'Office Line' : '6-Digit OTP')}</div>
            <div class="flow-body">
              ${isNoAuth ? `
                <div class="text-danger" style="font-size: 0.8rem; font-weight: bold;">
                  ${Icons.errorCircle({size:14})} Skipped Verification!<br>Scammers book rides on your card!
                </div>
              ` : (isOfficeVisit ? `
                <div class="text-warning" style="font-size: 0.8rem;">
                  ⏳ Waiting in line with passport & paper documents...
                </div>
              ` : `
                <div class="otp-boxes-row">
                  <span class="otp-digit">1</span><span class="otp-digit">4</span><span class="otp-digit">2</span>
                  <span class="otp-digit">6</span><span class="otp-digit">9</span><span class="otp-digit">0</span>
                </div>
                <div class="otp-timer">Expires in 60s (One-Time)</div>
              `)}
            </div>
            <div class="flow-caption">${isOptimal ? 'Dynamic cryptographic secret' : (isNoAuth ? 'Zero proof of ownership' : 'Extreme user friction')}</div>
          </div>

          <!-- Network Arrow 2 -->
          <div class="auth-arrow ${isOptimal ? 'arrow-active' : ''}">
            <div class="arrow-line"></div>
            <div class="arrow-label">Verify Hash ${Icons.lock({size:12})}</div>
          </div>

          <!-- Step 3: Auth Server & JWT Token -->
          <div class="auth-flow-card ${isOptimal ? 'border-success glow-green' : ''}">
            <div class="flow-step-num">Step 3</div>
            <div class="flow-icon">${Icons.shieldCheck({size:18})}</div>
            <div class="flow-title">Auth Server (Token)</div>
            <div class="flow-body">
              <div class="token-pill ${isOptimal ? 'token-valid' : 'token-invalid'}">
                ${Icons.key({size:14})} ${isOptimal ? 'Bearer eyJhbGciOi... (30d)' : (isNoAuth ? 'NO TOKEN (Hacked)' : 'Pending Office Stamp')}
              </div>
              <div class="auth-unlock-badge ${isOptimal ? 'text-success' : 'text-muted'}">
                ${isOptimal ? `${Icons.checkCircle({size:14})} OLA Map Unlocked!` : (isNoAuth ? `${Icons.alertCircle({size:14, color:'#e74c3c'})} Rogue Access Allowed` : `${Icons.lock({size:14})} Access Denied`)}
              </div>
            </div>
            <div class="flow-caption">Validates user on every future ride request</div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 3: Load Balancing (Traffic Distribution)
  // =========================================================================
  renderLoadBalancerSim(level, choice) {
    let mode = choice ? (choice.id === 'B' ? 'least_conn' : (choice.id === 'C' ? 'hash' : 'round_robin')) : null;

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: All Traffic Hitting Server 1`;
      counterText = 'Server 1 Melting (100% CPU) • Server 2 & 3 Idle (0%)';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.loadBalancer({size:22}) + '</span>', 
        'Traffic Imbalance: No Traffic Director in Front', 
        'We have 3 powerful servers, but without a Load Balancer, all 50,000 riders connect directly to Server 1. Server 1 is on fire, while Server 2 and Server 3 sit completely idle wasting money!');
      telemetry = this.renderTelemetry([
        { label: 'Server A Load', val: '100% (CRASHING)', class: 'text-danger' },
        { label: 'Server B Load', val: '0% (Idle ZZZ)', class: 'text-muted' },
        { label: 'Server C Load', val: '0% (Idle ZZZ)', class: 'text-muted' }
      ]);
    } else {
      headerBadge = `${Icons.sparkle({size:14})} SOLUTION: Load Balancer (${mode.toUpperCase().replace('_', ' ')})`;
      counterText = 'Traffic Evenly Distributed Across Server Fleet';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.loadBalancer({size:22}) + '</span>', 
        `Load Balancing Strategy: ${mode === 'round_robin' ? 'Round Robin (Turns)' : (mode === 'least_conn' ? 'Least Connections' : 'Consistent Hashing')}`, 
        mode === 'round_robin' 
          ? 'The Load Balancer takes turns: 1st user to Server A, 2nd to B, 3rd to C. Traffic splits evenly (33% each) with zero configuration!' 
          : (mode === 'least_conn' 
            ? 'The Load Balancer tracks active connections in real time and routes each new rider to whichever server currently has the lightest load.' 
            : 'The Load Balancer hashes the Rider ID mathematically to route requests consistently to the same server while maintaining overall cluster balance.'));
      telemetry = this.renderTelemetry([
        { label: 'Server A Load', val: mode === 'least_conn' ? '33%' : (mode === 'round_robin' ? '34%' : '35%'), class: 'text-success' },
        { label: 'Server B Load', val: mode === 'least_conn' ? '33%' : (mode === 'round_robin' ? '33%' : '32%'), class: 'text-success' },
        { label: 'Server C Load', val: mode === 'least_conn' ? '34%' : (mode === 'round_robin' ? '33%' : '33%'), class: 'text-success' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="lb-interactive">
          <div class="lb-controls">
            <button class="lb-btn ${mode === 'round_robin' ? 'active' : ''}" onclick="window.game.makeChoice(window.GAME_LEVELS[2].choices[0])">1. Take Turns (Round Robin)</button>
            <button class="lb-btn ${mode === 'least_conn' ? 'active' : ''}" onclick="window.game.makeChoice(window.GAME_LEVELS[2].choices[1])">2. Least Busy (Least Conn)</button>
            <button class="lb-btn ${mode === 'hash' ? 'active' : ''}" onclick="window.game.makeChoice(window.GAME_LEVELS[2].choices[2])">3. User Hash (Consistent)</button>
          </div>
          <div class="lb-diagram">
            <div class="lb-clients">
              <div class="client-dot c1">User #1</div>
              <div class="client-dot c2">User #2</div>
              <div class="client-dot c3">User #3</div>
              <div class="client-dot c4">User #4</div>
            </div>
            <div class="lb-router-box ${mode ? 'glow-cyan' : 'pulse-danger'}">
              <div class="router-icon">${Icons.loadBalancer({size:14})}️</div>
              <div class="router-label">${mode ? 'Load Balancer (Active)' : 'NO LOAD BALANCER!'}</div>
            </div>
            <div class="lb-backends">
              <div class="server-pod ${!mode ? 'overheated pulse-danger' : ''}" id="lb-s1">
                <div class="pod-name">Server A</div>
                <div class="pod-bar"><div class="pod-fill ${!mode ? 'fill-danger' : 'fill-success'}" style="width: ${!mode ? '100%' : '33%'};"></div></div>
                <div class="pod-stat">${!mode ? `${Icons.fire({size:14})} 100% (50k requests)` : '3,330 req/s'}</div>
              </div>
              <div class="server-pod ${!mode ? 'pod-idle' : ''}" id="lb-s2">
                <div class="pod-name">Server B</div>
                <div class="pod-bar"><div class="pod-fill fill-success" style="width: ${!mode ? '0%' : '33%'};"></div></div>
                <div class="pod-stat">${!mode ? `${Icons.clock({size:14})} 0% (Wasted)` : '3,330 req/s'}</div>
              </div>
              <div class="server-pod ${!mode ? 'pod-idle' : ''}" id="lb-s3">
                <div class="pod-name">Server C</div>
                <div class="pod-bar"><div class="pod-fill fill-success" style="width: ${!mode ? '0%' : '34%'};"></div></div>
                <div class="pod-stat">${!mode ? `${Icons.clock({size:14})} 0% (Wasted)` : '3,340 req/s'}</div>
              </div>
            </div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 4: CAP Theorem (Network Partition)
  // =========================================================================
  renderCapSim(level, choice) {
    const isConsistency = choice && choice.id === 'A';
    const isAvailability = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Lightning Severed Network Fiber!`;
      counterText = 'North DC & South DC Partitioned • Cannot Synchronize';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'Network Partition: The CAP Theorem Dilemma', 
        'Lightning severed the underground cable between North City and South City data centers. Driver Arun Kumar is assigned a passenger in North DC, but South DC cannot verify it! Do we answer fast with stale data, or pause to guarantee consistency?');
      telemetry = this.renderTelemetry([
        { label: 'Network Link', val: 'SEVERED ${Icons.fire({size:14, color:"#e74c3c"})}', class: 'text-danger' },
        { label: 'Sync Status', val: 'Desynchronized', class: 'text-warning' },
        { label: 'Data Trade-Off', val: 'Choose CP or AP', class: 'text-warning' }
      ]);
    } else if (isConsistency) {
      headerBadge = `${Icons.sparkle({size:16})} CP CHOICE: Strict Consistency Prioritized`;
      counterText = 'South DC Holds Booking • Zero Double Bookings';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.shieldCheck({size:22}) + '</span>', 
        'Consistency over Availability (CP)', 
        'South DC refuses to guess. It temporarily shows: "Connecting to North... holding request." Passengers wait a few seconds, but two different passengers are NEVER assigned the same cab. Zero double-booking disaster!');
      telemetry = this.renderTelemetry([
        { label: 'Data Consistency', val: '100% Strict (Zero Conflict)', class: 'text-success' },
        { label: 'Double Bookings', val: '0 (Guaranteed)', class: 'text-success' },
        { label: 'Availability', val: 'Temporarily Paused', class: 'text-warning' }
      ]);
    } else {
      headerBadge = `${Icons.sparkle({size:16})} AP CHOICE: High Availability Prioritized`;
      counterText = 'Instant Response • Eventual Consistency';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'Availability over Consistency (AP)', 
        'South DC answers immediately using last-known cached driver locations so no passenger ever sees an error screen. Once the cable heals, background sync merges the records!');
      telemetry = this.renderTelemetry([
        { label: 'Availability', val: '100% Uptime (Instant)', class: 'text-success' },
        { label: 'Passenger Latency', val: '12ms', class: 'text-success' },
        { label: 'Conflict Risk', val: 'Handled via Compensation', class: 'text-warning' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="cap-visual">
          <div class="datacenter dc-north">
            <div class="dc-title">${Icons.citySkyline({size:16})} North Data Center</div>
            <div class="dc-data">Driver Arun: <strong>Assigned (Trip #42)</strong></div>
            <div class="dc-ping green-dot">${Icons.checkCircle({size:14})} Online</div>
          </div>
          <div class="partition-wire">
            <div class="cut-line">${Icons.lightning({size:14})} ${Icons.fire({size:14, color:"#e74c3c"})} CABLE SEVERED ${Icons.fire({size:14, color:"#e74c3c"})} ${Icons.lightning({size:14})}</div>
            <div class="wire-msg">Cannot synchronize across city!</div>
          </div>
          <div class="datacenter dc-south ${isConsistency ? 'holding' : (isAvailability ? 'available' : '')}">
            <div class="dc-title">${Icons.citySkyline({size:16})} South Data Center</div>
            <div class="dc-data">Driver Arun: <strong>${isConsistency ? `${Icons.lock({size:14})} Held (Awaiting Sync)` : (isAvailability ? 'Assigned (Cached)' : 'Unknown State')}</strong></div>
            <div class="dc-ping red-dot">${isConsistency ? 'Holding' : (isAvailability ? `${Icons.checkCircle({size:14})} Responding` : `${Icons.alertTriangle({size:14, color:'#e74c3c'})} Isolated`)}</div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 5: ACID Transactions (All-or-Nothing Payment)
  // =========================================================================
  renderAcidSim(level, choice) {
    const isAtomic = choice && choice.id === 'A';
    const isLoose = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Partial Network Payment Failure`;
      counterText = '₹250 Deducted • Trip Unconfirmed • Money in Limbo!';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.alertTriangle({size:22, color:"#e74c3c"}) + '</span>', 
        'Partial Failure: Step 1 Succeeded, Step 2 Crashed', 
        'Passenger Priya tapped "Pay ₹250". The bank account debited ₹250 successfully. But right before the Ride Service marked the trip PAID, the cell tower dropped! Priya\'s money is gone, but the cab meter still says UNPAID!');
      telemetry = this.renderTelemetry([
        { label: 'Bank Wallet', val: '-₹250 (Debited)', class: 'text-warning' },
        { label: 'Trip Ledger', val: 'UNPAID (Pending)', class: 'text-danger' },
        { label: 'State Integrity', val: 'CORRUPTED', class: 'text-danger' }
      ]);
    } else if (isAtomic) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: ACID Transaction Rollback (Atomicity)`;
      counterText = 'All-or-Nothing Rule • ₹250 Refunded Automatically';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.refresh({size:22}) + '</span>', 
        'Atomicity (ACID): All Steps Succeed, or Everything Rolls Back', 
        'Because Step 2 failed to confirm the trip, the ACID database rolled back Step 1 instantly! ₹250 was restored to Priya\'s wallet within 10 milliseconds. Zero rupees lost, zero accounting discrepancies!');
      telemetry = this.renderTelemetry([
        { label: 'Atomicity Result', val: 'Rolled Back Cleanly', class: 'text-success' },
        { label: 'Money Lost', val: '₹0.00', class: 'text-success' },
        { label: 'Customer Trust', val: 'Protected (100%)', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} DISASTER: No Atomicity • Customer Stolen From`;
      counterText = 'Support Phones Ringing • Financial Dispute Escalated';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Unacceptable Accounting Failure: Lost Money', 
        'Leaving the money deducted without confirming the ride means RideQuest took money for services not delivered. Customer care lines are flooded, bank chargebacks filed, and regulatory fines issued!');
      telemetry = this.renderTelemetry([
        { label: 'Discrepancy', val: '-₹250 (Unresolved)', class: 'text-danger' },
        { label: 'Chargeback Risk', val: 'High (Visa / UPI)', class: 'text-danger' },
        { label: 'Customer Churn', val: 'Severe', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="transaction-steps">
          <div class="tx-step step-ok">
            <div class="tx-num">1</div>
            <div class="tx-info"><strong>Step 1: Bank Wallet</strong><br>Deduct ₹250 from Priya's account</div>
            <div class="tx-badge success">${Icons.check({size:14})} SUCCESS</div>
          </div>
          <div class="tx-divider">⬇️</div>
          <div class="tx-step step-fail">
            <div class="tx-num">2</div>
            <div class="tx-info"><strong>Step 2: Ride Service</strong><br>Mark Trip #9812 as PAID & Complete</div>
            <div class="tx-badge danger">${Icons.lightning({size:14})} NETWORK CRASH</div>
          </div>
          <div class="tx-divider">⬇️</div>
          <div class="tx-step ${isAtomic ? 'step-rollback glow-green' : 'step-lost pulse-danger'}">
            <div class="tx-num">3</div>
            <div class="tx-info">
              ${isAtomic ? `
                <strong>Step 3: ACID Rollback Triggered</strong><br>
                Operation aborted! ₹250 instantly restored to Priya's wallet.
              ` : `
                <strong>No Atomicity Rule Active:</strong><br>
                Priya lost ₹250, driver is unpaid, customer support chaos!
              `}
            </div>
            <div class="tx-badge ${isAtomic ? 'warning' : 'danger'}">${isAtomic ? `${Icons.refresh({size:14})} ROLLED BACK SAFELY` : `${Icons.errorCircle({size:14})} CORRUPTED STATE`}</div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 6: In-Memory Caching (Redis vs Disk)
  // =========================================================================
  renderCacheSim(level, choice) {
    const hasCache = choice && choice.id === 'A';
    const isDisks = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: 10,000 Repeated Airport Queries`;
      counterText = 'Database Disk Grinding • Mechanical Seek Latency (40ms)';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.database({size:22}) + '</span>', 
        'Redundant Calculations: The Same Query Computed 10,000x / Sec', 
        'Every single second, 10,000 riders check the Airport fare ($12.50). The database disk is repeatedly reading tables, multiplying tariffs, and calculating tolls from slow magnetic storage. The disk heads are thrashing and response time is lagging!');
      telemetry = this.renderTelemetry([
        { label: 'Disk IOPS', val: '99% Saturation', class: 'text-danger' },
        { label: 'Query Latency', val: '45ms (Slow Disk)', class: 'text-danger' },
        { label: 'Redundant Work', val: '99.9% Repeated', class: 'text-warning' }
      ]);
    } else if (hasCache) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: In-Memory Cache (Redis) Deployed`;
      counterText = '1ms Sub-Millisecond Lookup from RAM • 99.8% Cache Hit';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'In-Memory RAM Caching: O(1) Instant Response', 
        'The first query computes the Airport fare and stores it in RAM (Redis). The next 9,999 requests are served directly from memory in 1 millisecond! The database disk drops to 0% load and rests peacefully.');
      telemetry = this.renderTelemetry([
        { label: 'Cache Hit Rate', val: '99.8% (Instant)', class: 'text-success' },
        { label: 'Lookup Time', val: '1ms (from RAM)', class: 'text-success' },
        { label: 'Database Load', val: 'Dropped by 98%', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.alertTriangle({size:16})} SUBOPTIMAL: Buying 100 Hard Drives Failed`;
      counterText = 'Cost: $15,000/mo • Mechanical Latency Floor Unsolved';
      headerType = 'warning';
      narrative = this.renderNarrative('warning', '<span class="rq-svg-icon">' + Icons.alertTriangle({size:22, color:"#e74c3c"}) + '</span>', 
        'Hardware Misallocation: Disk Storage Cannot Beat RAM Physics', 
        'Buying 100 more hard drives cost $15,000/mo, but mechanical disk seek times (~10-40ms) still physically lag behind in-memory silicon RAM (~1ms). Redundant queries continue to waste disk throughput!');
      telemetry = this.renderTelemetry([
        { label: 'Cost Waste', val: '$15,000 / mo', class: 'text-danger' },
        { label: 'Disk Latency', val: '38ms (Still Laggy)', class: 'text-warning' },
        { label: 'Cache Advantage', val: 'Missed O(1) RAM speed', class: 'text-warning' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="cache-visual-grid">
          <div class="cache-box ${hasCache ? 'cache-hit glow-green' : 'cache-idle'}">
            <div class="box-icon">${Icons.lightning({size:16})} RAM Cache (Redis)</div>
            <div class="cache-content">
              ${hasCache ? `
                <div class="kv-item"><span class="key">route:airport</span> -> <span class="val">₹450 [HIT 99.8%]</span></div>
                <div class="kv-item"><span class="key">surge:city_center</span> -> <span class="val">1.2x [HIT]</span></div>
              ` : `
                <div class="text-muted">(Cache Inactive — All requests bypass to disk)</div>
              `}
            </div>
            <div class="speed-tag ${hasCache ? 'text-success' : 'text-muted'}">Lookup: <strong>${hasCache ? '1 millisecond' : 'Bypassed'}</strong></div>
          </div>
          <div class="cache-arrow">${hasCache ? '◀️ Answered from RAM (Instant)' : '⏬ Reading Slow Disk (40ms)'}</div>
          <div class="disk-box ${hasCache ? 'disk-cool' : 'disk-heavy pulse-danger'}">
            <div class="box-icon">${Icons.database({size:16})} Relational Database Disk</div>
            <div class="disk-content">
              <div>Tables: rides, trips, tariffs, discounts...</div>
              <div>${hasCache ? `${Icons.checkCircle({size:14})} Idle & Protected` : `${Icons.fire({size:14})} Disk Head Thrashing on 10,000 reads/sec`}</div>
            </div>
            <div class="speed-tag text-danger">Disk Query: <strong>${hasCache ? '0 reads (Offloaded)' : '40 milliseconds'}</strong></div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 7: Database Indexing (B-Tree vs Full Table Scan)
  // =========================================================================
  renderIndexingSim(level, choice) {
    const hasIndex = choice && choice.id === 'A';
    const isBrute = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Searching Phone in 10,000,000 Rows`;
      counterText = 'Full Table Scan: Checking Row 1, 2, 3... Sequentially';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.search({size:22}) + '</span>', 
        'Sequential O(N) Table Scan: 10 Million Records', 
        'A rider searches driver phone "+91 98765 43210". Without an index, the database starts at row 1 and reads every single row on disk one by one. The mobile app spins for 8.5 seconds while 10 million rows are examined!');
      telemetry = this.renderTelemetry([
        { label: 'Rows Scanned', val: '4,129,081 / 10,000,000', class: 'text-danger' },
        { label: 'Query Time', val: '8,500ms (Unusable)', class: 'text-danger' },
        { label: 'Search Complexity', val: 'O(N) Linear Scan', class: 'text-warning' }
      ]);
    } else if (hasIndex) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: B-Tree Index Lookup Deployed`;
      counterText = 'Logarithmic O(log N) Lookup: 4 Jumps in 2ms';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.checkCircle({size:22, color:"#27ae60"}) + '</span>', 
        'B-Tree Indexing: Jump Directly to the Record', 
        'An organized B-Tree index structure sorts driver phone numbers. The database jumps Root [1000-9999] → Branch [9000-9999] → Branch [9800-9899] → Target in just 4 jumps (2ms)! Even with 100 million rows, lookup takes only milliseconds.');
      telemetry = this.renderTelemetry([
        { label: 'Rows Examined', val: '4 Hops (O(log N))', class: 'text-success' },
        { label: 'Query Latency', val: '2ms (Sub-second)', class: 'text-success' },
        { label: 'Disk IO Saved', val: '99.999%', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} FAILED: Brute Force Scan Still Freezes Phone`;
      counterText = 'CPU at 100% • Mobile App Timeout at 8 Seconds';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Algorithmic Inefficiency: Brute Force Cannot Outrun Linear Growth', 
        'Telling the CPU to scan faster doesn\'t fix the O(N) flaw. Reading 10 million rows from storage still takes 8 seconds, causing mobile clients to timeout with "Server Not Responding" errors!');
      telemetry = this.renderTelemetry([
        { label: 'CPU Usage', val: '100% (Locked)', class: 'text-danger' },
        { label: 'Query Latency', val: '8,200ms', class: 'text-danger' },
        { label: 'App Result', val: 'Timeout 504', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="indexing-visual">
          ${hasIndex ? `
            <div class="btree-tree">
              <div class="tree-node root">[Phone Range: 1000 - 9999]</div>
              <div class="tree-branches"><div class="tree-node branch">[9000 - 9999] ${Icons.target({size:14})} Jump 1</div></div>
              <div class="tree-branches"><div class="tree-node branch">[9800 - 9899] ${Icons.target({size:14})} Jump 2</div></div>
              <div class="tree-branches"><div class="tree-node leaf highlight">[9876543210 -> Row #492,810] ${Icons.target({size:14})} MATCH! (2ms)</div></div>
            </div>
          ` : `
            <div class="table-scan-list">
              <div class="scan-row check">Row 1: +91 11223 34455 (No match)</div>
              <div class="scan-row check">Row 2: +91 11223 34456 (No match)</div>
              <div class="scan-row check">Row 3: +91 11223 34457 (No match)</div>
              <div class="scan-row current pulse-shake">Row 4,129,081 ... (Scanning 10 Million Rows sequentially... 8,500ms)</div>
            </div>
          `}
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 8: OLTP vs OLAP (Workload Separation)
  // =========================================================================
  renderOltpOlapSim(level, choice) {
    const isSplit = choice && choice.id === 'A';
    const isShared = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Live Rides Blocked by Analytics Query`;
      counterText = '3-Year Report Locks Shared Database • 9,410 Bookings Frozen';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.fire({size:22, color:"#e74c3c"}) + '</span>', 
        'Resource Conflict: Heavy OLAP Reporting on Live OLTP Database', 
        'An executive ran a query across 80,000,000 historical rows ("SELECT * FROM 3_YEAR_TRIPS"). Because live rides and reports share the same database, the query placed an exclusive table lock! Passengers trying to book cabs on the street are frozen!');
      telemetry = this.renderTelemetry([
        { label: 'Table Lock', val: 'EXCLUSIVE LOCK (Held)', class: 'text-danger' },
        { label: 'Live Bookings', val: '9,410 Queued / Blocked', class: 'text-danger' },
        { label: 'Booking Latency', val: '14,000ms (Timeout)', class: 'text-danger' }
      ]);
    } else if (isSplit) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Decoupled OLTP (Live) & OLAP (Warehouse)`;
      counterText = 'Zero Table Locks • 3ms Live Rides • Fast Big-Data Analytics';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.citySkyline({size:22}) + '</span>', 
        'Workload Specialization: OLTP Row Store + Columnar OLAP', 
        'Live passenger bookings run on an optimized row-based OLTP database (3ms, zero locks). A background continuous ETL stream replicates data into a columnar Data Warehouse (Snowflake/ClickHouse), allowing heavy analytical reports to scan 80M rows without touching live riders!');
      telemetry = this.renderTelemetry([
        { label: 'Live Ride Latency', val: '3ms (Instant)', class: 'text-success' },
        { label: 'Reporting Query', val: 'Columnar Scan (Isolated)', class: 'text-success' },
        { label: 'Table Contention', val: '0% (Completely Decoupled)', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} DISASTER: Running Analytics on Live DB Crashed Service`;
      counterText = 'Production Outage • Passenger Churn Spike';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Architectural Anti-Pattern: Mixed Operational & Analytical Workloads', 
        'Running complex analytical aggregations directly on the primary production database monopolized disk IO and memory pools, triggering out-of-memory crashes for live ride-hailing services!');
      telemetry = this.renderTelemetry([
        { label: 'System Health', val: 'CRASHED (OOM)', class: 'text-danger' },
        { label: 'Lost Bookings', val: '100% Outage', class: 'text-danger' },
        { label: 'Workload Isolation', val: 'None (Shared Failure)', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="oltp-olap-layout">
          ${isSplit ? `
            <div class="system-split">
              <div class="db-card oltp-card glow-cyan">
                <div class="db-title">${Icons.car({size:16})} OLTP (Row Store)</div>
                <div>Purpose: Fast Live Bookings</div>
                <div>Latency: <strong>3ms</strong></div>
                <div class="text-success">Zero Locks! Pure Speed</div>
              </div>
              <div class="etl-pipe">${Icons.refresh({size:14})} Continuous ETL Stream ${Icons.arrowRight({size:14})}</div>
              <div class="db-card olap-card glow-purple">
                <div class="db-title">${Icons.database({size:16})} OLAP (Columnar Warehouse)</div>
                <div>Purpose: 80 Million Row Analysis</div>
                <div>Query: Aggregations & Trends</div>
                <div class="text-success">Heavy reporting without touching live rides!</div>
              </div>
            </div>
          ` : `
            <div class="monolith-blocked">
              <div class="db-card monolith-card pulse-danger">
                <div class="db-title">${Icons.fire({size:14, color:"#e74c3c"})} Single Shared Database</div>
                <div class="text-danger">Query Lock: "SELECT * FROM 3_YEAR_TRIPS"</div>
                <div class="lock-indicator">${Icons.lock({size:14})} ROW LOCK TIMEOUT</div>
                <div class="text-warning">Passenger bookings waiting: 9,410 queued!</div>
              </div>
            </div>
          `}
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 9: Database Sharding (Partitioning Huge Tables)
  // =========================================================================
  renderShardingSim(level, choice) {
    const isRange = choice && choice.id === 'A';
    const isHash = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: 500 Million Records on Single Disk`;
      counterText = 'Hard Drive 99% Full • Write Latency 8.2 Seconds';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.networkPacket({size:22}) + '</span>', 
        'Storage Saturation: Monolithic Database Hit Physical Ceilings', 
        'RideQuest has accumulated 500,000,000 ride rows on a single database server. The storage disk is 99% full, write queues are backing up, and index trees are too massive to fit into RAM. Adding another drive to the same machine no longer solves the scaling bottleneck!');
      telemetry = this.renderTelemetry([
        { label: 'Disk Storage', val: '99% Full (500M rows)', class: 'text-danger' },
        { label: 'Insert Latency', val: '8,200ms (Disk Bottleneck)', class: 'text-danger' },
        { label: 'Horizontal Split', val: '0 Shards (Monolith)', class: 'text-warning' }
      ]);
    } else {
      headerBadge = `${Icons.sparkle({size:14})} SOLUTION: Database Sharding (${isRange ? 'By Region' : 'By Hash'})`;
      counterText = '500M Rows Partitioned Across 3 Independent Database Nodes';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.networkPacket({size:22}) + '</span>', 
        `Sharding Architecture: ${isRange ? 'Range-Based by City' : 'Hash-Based by User ID'}`, 
        isRange 
          ? 'Sharding by City routes Delhi traffic to Shard 1, Bengaluru to Shard 2, and Mumbai to Shard 3. Each database handles only 166M records with 50% capacity headroom!' 
          : 'Hash-based sharding applies Math.hash(UserID) % 3 to evenly scatter rides across 3 database machines, guaranteeing uniform storage and compute distribution.');
      telemetry = this.renderTelemetry([
        { label: 'Per-Shard Load', val: '166M Records (Balanced)', class: 'text-success' },
        { label: 'Write Latency', val: '12ms (Fast Parallel Writes)', class: 'text-success' },
        { label: 'Storage Headroom', val: '50% Free Space', class: 'text-success' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="shards-row">
          <div class="shard-box s1 ${!choice ? 'pulse-danger' : 'glow-cyan'}">
            <div class="shard-header">${!choice ? `${Icons.fire({size:14, color:"#e74c3c"})} Single Giant DB` : `${Icons.networkPacket({size:14})} Shard 1`}</div>
            <div class="shard-tag">${!choice ? 'All Cities (Monolith)' : (isRange ? 'City: Delhi / North' : 'Hash: 0 - 33%')}</div>
            <div class="shard-records">${!choice ? '500 Million Records (99% Full)' : '166 Million Records'}</div>
            <div class="shard-meter"><div class="meter-bar" style="width: ${!choice ? '99%' : '50%'}; background: ${!choice ? '#ef4444' : '#10b981'};"></div></div>
          </div>
          ${choice ? `
            <div class="shard-box s2 glow-cyan">
              <div class="shard-header">${Icons.networkPacket({size:14})} Shard 2</div>
              <div class="shard-tag">${isRange ? 'City: Bengaluru / South' : 'Hash: 34 - 66%'}</div>
              <div class="shard-records">166 Million Records</div>
              <div class="shard-meter"><div class="meter-bar" style="width: 50%; background: #10b981;"></div></div>
            </div>
            <div class="shard-box s3 glow-cyan">
              <div class="shard-header">${Icons.networkPacket({size:14})} Shard 3</div>
              <div class="shard-tag">${isRange ? 'City: Mumbai / West' : 'Hash: 67 - 100%'}</div>
              <div class="shard-records">167 Million Records</div>
              <div class="shard-meter"><div class="meter-bar" style="width: 50%; background: #10b981;"></div></div>
            </div>
          ` : ''}
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 10: Database Design (SQL Relational vs NoSQL Document)
  // =========================================================================
  renderDatabaseDesignSim(level, choice) {
    const isPolyglot = choice && choice.id === 'B';
    const isPureSql = choice && choice.id === 'A';
    const isPlaintext = choice && choice.id === 'C';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Diverse Workload Conflicts`;
      counterText = 'Strict Financial Ledgers vs 100,000 GPS Writes/Sec';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.citySkyline({size:22}) + '</span>', 
        'Database Selection Challenge: Relational vs Document Model', 
        'OLA handles two completely different kinds of data: 1) Strict financial payments (never lose a rupee, immutable audits), and 2) Dynamic driver profiles with 100k live GPS pings per second and unpredictable vehicle amenities (EV, AC, Pet-friendly). Forcing both into one database causes massive bottlenecks!');
      telemetry = this.renderTelemetry([
        { label: 'Payment Safety', val: 'Needs ACID Relational', class: 'text-warning' },
        { label: 'GPS Ingestion', val: 'Needs High-Write NoSQL', class: 'text-warning' },
        { label: 'Schema Flexibility', val: 'Needs Document Model', class: 'text-warning' }
      ]);
    } else if (isPolyglot) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Polyglot Persistence Deployed`;
      counterText = 'SQL for Financial Ledger • NoSQL for Driver Profiles';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.trophy({size:22}) + '</span>', 
        'Optimal Architecture: The Right Database for the Right Job', 
        'By adopting Polyglot Persistence, OLA uses PostgreSQL for strict financial ledgers (ACID compliance, atomic rollbacks, zero double charges) AND MongoDB/Redis for dynamic driver telemetry (flexible JSON attributes, 120,000 writes/sec without locking disks)!');
      telemetry = this.renderTelemetry([
        { label: 'Financial Safety', val: '100% Strict ACID', class: 'text-success' },
        { label: 'GPS Ingestion', val: '120,000 writes/s (NoSQL)', class: 'text-success' },
        { label: 'Schema Adaptability', val: 'High (Dynamic JSON)', class: 'text-success' }
      ]);
    } else if (isPureSql) {
      headerBadge = `${Icons.alertTriangle({size:16})} SUBOPTIMAL: Rigid SQL Table Overburdened`;
      counterText = '100 Empty Columns • Disk Locks on Rapid GPS Writes';
      headerType = 'warning';
      narrative = this.renderNarrative('warning', '<span class="rq-svg-icon">' + Icons.alertTriangle({size:22}) + '</span>', 
        'Schema Rigidity & Write Bottlenecks: Forcing Everything into SQL', 
        'Forcing dynamic vehicle attributes into rigid SQL created 100 empty columns (is_pet, is_ev, has_baby_seat...). More critically, 100,000 rapid GPS coordinates per second locked relational database rows, causing payment transactions to lag!');
      telemetry = this.renderTelemetry([
        { label: 'SQL Disk Locks', val: 'Frequent Table Locks', class: 'text-danger' },
        { label: 'GPS Throughput', val: '3,200 writes/s (Capped)', class: 'text-danger' },
        { label: 'Schema Migration', val: 'Costly & Painful', class: 'text-warning' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} CATASTROPHE: Plaintext File on Shared Drive`;
      counterText = 'Race Conditions • Negative Balances • Data Corruption';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Catastrophic Data Loss: No Database Management System', 
        'Storing payments in plaintext files led to concurrent write collisions, file corruption, negative balances, and stolen funds. Banks immediately revoked payment licenses!');
      telemetry = this.renderTelemetry([
        { label: 'Data Corruption', val: '100% Corrupted', class: 'text-danger' },
        { label: 'Concurrency', val: 'Race Condition Crashes', class: 'text-danger' },
        { label: 'Financial Loss', val: 'Massive Audit Deficit', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage db-design-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="db-comparison-grid">
          <div class="db-spec-card sql-card ${isPolyglot || isPureSql ? 'db-card-active glow-cyan' : 'db-card-warning'}">
            <div class="db-card-header">
              <span class="db-icon">${Icons.database({size:16})}</span>
              <div><div class="db-card-title">SQL (Relational / PostgreSQL)</div><div class="db-card-sub">Payments & Invoices</div></div>
              <span class="db-badge badge-acid">ACID Compliant</span>
            </div>
            <div class="db-visual-preview">
              <table class="mock-sql-table">
                <thead><tr><th>ride_id</th><th>rider_id</th><th>amount</th><th>status</th></tr></thead>
                <tbody>
                  <tr class="sql-row-ok"><td>#R-9041</td><td>USR_42</td><td>₹148.00</td><td class="text-success">PAID</td></tr>
                  <tr class="sql-row-ok"><td>#R-9042</td><td>USR_89</td><td>₹210.50</td><td class="text-success">PAID</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="db-spec-card nosql-card ${isPolyglot ? 'db-card-active glow-green' : 'db-card-warning'}">
            <div class="db-card-header">
              <span class="db-icon">${Icons.checkCircle({size:14, color:"#2ecc71"})}</span>
              <div><div class="db-card-title">NoSQL (MongoDB / Redis)</div><div class="db-card-sub">Driver Telemetry & Profiles</div></div>
              <span class="db-badge badge-flex">Flexible Schema</span>
            </div>
            <div class="db-visual-preview">
              <div class="mock-json-doc">
                <span class="json-bracket">{</span><br>
                &nbsp;&nbsp;<span class="json-key">"driver_id"</span>: <span class="json-val">"DRV_809"</span>,<br>
                &nbsp;&nbsp;<span class="json-key">"live_coords"</span>: [<span class="json-num">12.9716</span>, <span class="json-num">77.5946</span>],<br>
                &nbsp;&nbsp;<span class="json-key">"vehicle"</span>: { <span class="json-key">"type"</span>: <span class="json-val">"Mini"</span>, <span class="json-key">"ac"</span>: <span class="json-bool">true</span> }<br>
                <span class="json-bracket">}</span>
              </div>
            </div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 11: Distributed Transactions (2PC vs Saga)
  // =========================================================================
  renderDistributedTxSim(level, choice) {
    const is2PC = choice && choice.id === 'A';
    const isSaga = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Coordinated State Across Services`;
      counterText = 'Ride Service & Payment Service Divided by Network';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.users({size:22}) + '</span>', 
        'Distributed Transaction Challenge: Multi-Service Consistency', 
        'Booking a ride spans two separate microservices: Ride Service (driver lock) and Payment Service (wallet debit). What happens if one succeeds but the other fails halfway through? Without distributed coordination, money can be deducted with no driver arriving!');
      telemetry = this.renderTelemetry([
        { label: 'Ride Service', val: 'Uncoordinated', class: 'text-warning' },
        { label: 'Payment Service', val: 'Uncoordinated', class: 'text-warning' },
        { label: 'Agreement Protocol', val: 'None Active', class: 'text-danger' }
      ]);
    } else if (is2PC) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Two-Phase Commit (2PC) Active`;
      counterText = 'Prepare (Vote Yes?) → Commit Atomic Lock';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.users({size:22}) + '</span>', 
        'Two-Phase Commit (2PC): Strict Atomic Consensus', 
        'The Transaction Coordinator executes Phase 1: asks both Ride Service and Payment Service "Can you commit?". Only when BOTH reply YES does Phase 2 broadcast COMMIT. Guaranteed zero state mismatch!');
      telemetry = this.renderTelemetry([
        { label: 'Consistency', val: '100% Strict Atomic', class: 'text-success' },
        { label: 'Coordinator', val: 'Consensus Achieved', class: 'text-success' },
        { label: 'State Sync', val: 'Synchronized', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Saga Workflow Pattern Active`;
      counterText = 'Choreographed Steps + Automatic Compensating Refunds';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.refresh({size:22}) + '</span>', 
        'Saga Pattern: Asynchronous Resilient Workflow', 
        'Step 1 deducts wallet. If Step 2 (driver match) fails, Saga automatically triggers a compensating transaction that immediately refunds the money. Avoids blocking database locks across services!');
      telemetry = this.renderTelemetry([
        { label: 'Resilience', val: 'High (Compensating)', class: 'text-success' },
        { label: 'Lock Contention', val: '0% Non-Blocking', class: 'text-success' },
        { label: 'Fault Recovery', val: 'Automatic Refund', class: 'text-success' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="tx-diagram">
          <div class="service-box ${choice ? 'glow-cyan' : ''}">
            <div class="svc-icon">${Icons.car({size:18})}</div>
            <div class="svc-name">Ride Service</div>
            <div class="svc-state ${choice ? 'text-success' : 'text-warning'}">${is2PC ? 'Phase 1: Vote YES → Commit' : (isSaga ? 'Step 2: Driver Assigned' : 'Awaiting Protocol')}</div>
          </div>
          <div class="coordinator-box ${choice ? 'glow-purple' : 'pulse-danger'}">
            <div class="coord-icon">${Icons.users({size:14})}</div>
            <div class="coord-name">${is2PC ? '2PC Coordinator' : (isSaga ? 'Saga Orchestrator' : 'NO COORDINATION')}</div>
          </div>
          <div class="service-box ${choice ? 'glow-cyan' : ''}">
            <div class="svc-icon">${Icons.jwtToken({size:14})}</div>
            <div class="svc-name">Payment Service</div>
            <div class="svc-state ${choice ? 'text-success' : 'text-warning'}">${is2PC ? 'Phase 1: Vote YES → Commit' : (isSaga ? 'Step 1: Wallet Deducted' : 'Awaiting Protocol')}</div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 12: Circuit Breaker Pattern (Fault Tolerance)
  // =========================================================================
  renderCircuitBreakerSim(level, choice) {
    const hasBreaker = choice && choice.id === 'A';
    const isRetries = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Third-Party Bank API Frozen (45s)`;
      counterText = '10,000 Requests Piling Up • Server Thread Pool 98% Exhausted';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'Cascading Failure: Thread Starvation on Dead Dependency', 
        'An external banking payment gateway is hanging for 45 seconds. Incoming passengers booking rides are waiting, consuming server worker threads. With all threads blocked on the dead bank, RideQuest cannot even show the map screen!');
      telemetry = this.renderTelemetry([
        { label: 'Bank Response Time', val: '45,000ms (Hanging)', class: 'text-danger' },
        { label: 'Worker Thread Pool', val: '98% Starved', class: 'text-danger' },
        { label: 'Cascading Failure', val: 'Imminent Crash', class: 'text-danger' }
      ]);
    } else if (hasBreaker) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Circuit Breaker TRIPPED to OPEN State`;
      counterText = 'Fails Fast in 2ms • Thread Pool 100% Healthy • Cash Fallback Active';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.shield({size:22}) + '</span>', 
        'Circuit Breaker Pattern: Protecting the Core System', 
        'After 5 consecutive timeouts, the Circuit Breaker tripped OPEN! It immediately stops calling the dead bank API, responds in 2 milliseconds, and falls back to Cash / Wallet. Core app threads remain 100% healthy!');
      telemetry = this.renderTelemetry([
        { label: 'Circuit State', val: 'OPEN (Tripped - Safe)', class: 'text-success' },
        { label: 'Fail-Fast Time', val: '2ms (Instant Fallback)', class: 'text-success' },
        { label: 'RideQuest Threads', val: '100% Available', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} CATASTROPHE: 100 Retries DDoSed the Dead Bank`;
      counterText = '1,000,000 Retry Requests • Total RideQuest Blackout';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.fire({size:22}) + '</span>', 
        'Retry Storm: Multiplying Failure across the System', 
        'Aggressively retrying 100 times in a tight loop turned 10,000 requests into 1,000,000 calls! This DDoSed the dying bank and instantly exhausted every thread on RideQuest servers, causing total platform downtime!');
      telemetry = this.renderTelemetry([
        { label: 'Thread Exhaustion', val: '100% (Crash)', class: 'text-danger' },
        { label: 'Retry Storm', val: '1,000,000 Loops', class: 'text-danger' },
        { label: 'App Availability', val: '0% Blackout', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="cb-visual">
          <div class="cb-service">
            <div class="svc-name">RideQuest Core App</div>
            <div class="${hasBreaker ? 'text-success' : 'text-danger'}">${hasBreaker ? 'Thread Pool Healthy (100% Available)' : 'Threads Exhausted!'}</div>
          </div>
          <div class="cb-switch ${hasBreaker ? 'switch-open glow-green' : 'switch-closed pulse-danger'}">
            <div class="switch-icon">${hasBreaker ? `${Icons.lightning({size:14})} ${Icons.errorCircle({size:14, color:"#c0392b"})}` : `${Icons.circuitBreaker({size:16, state:"closed"})}`}</div>
            <div class="switch-label">${hasBreaker ? 'CIRCUIT OPEN (Fails Fast 2ms)' : 'CIRCUIT CLOSED (Hanging 45s)'}</div>
          </div>
          <div class="cb-partner ${hasBreaker ? 'bypassed' : 'choking pulse-danger'}">
            <div class="svc-name">Slow Third-Party Bank API</div>
            <div class="text-danger">${hasBreaker ? 'Blocked & Bypassed (Fallback to Cash)' : '10,000 Hanging Threads!'}</div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 13: Microservices Architecture (Decoupled Services)
  // =========================================================================
  renderMicroservicesSim(level, choice) {
    const isMicroservices = choice && choice.id === 'B';
    const isMonolith = choice && choice.id === 'A';
    const isDelete = choice && choice.id === 'C';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: SMS Gateway Telecom Outage`;
      counterText = 'Notification Service Failing • Will It Bring Down Cabs?';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.alertCircle({size:22, color:"#f39c12"}) + '</span>', 
        'Fault Isolation Challenge: Decoupled Services vs Monolith', 
        'An external telecom SMS provider went down. The Notification Service is throwing uncaught exceptions. If all app code lives in a single monolithic process, this minor SMS error will crash cab booking across the entire country!');
      telemetry = this.renderTelemetry([
        { label: 'SMS Provider', val: 'DOWN (503 Service Unavail)', class: 'text-danger' },
        { label: 'Blast Radius', val: 'Threatening Core System', class: 'text-warning' },
        { label: 'Cab Dispatch', val: 'Vulnerable to Crash', class: 'text-warning' }
      ]);
    } else if (isMicroservices) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Independent Microservices Active`;
      counterText = 'Notification Isolated to Queue • Cabs Booking 100% Normally';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.shield({size:22}) + '</span>', 
        'Fault Isolation: The Cab Still Arrives on Time!', 
        'Because OLA splits its system into independent microservices, the SMS notification failure is isolated into a retry queue. Ride Booking, Driver Matching, and Payment operate at 100% health! Driver Arun Kumar still arrives on time!');
      telemetry = this.renderTelemetry([
        { label: 'Blast Radius', val: 'Isolated to 1 Service', class: 'text-success' },
        { label: 'Ride Dispatch', val: '99.99% Operational', class: 'text-success' },
        { label: 'Core Cabs Moving', val: 'Yes (Uninterrupted)', class: 'text-success' }
      ]);
    } else if (isMonolith) {
      headerBadge = `${Icons.errorCircle({size:16})} CATASTROPHE: Monolithic Memory Space Crash`;
      counterText = '1 Unhandled SMS Exception Crashed All City Rides!';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.fire({size:22}) + '</span>', 
        'Catastrophic Monolith Blast Radius: Single Process Failure', 
        'In a monolith, all modules share the same memory space. When the SMS telecom failed, an uncaught exception crashed the entire process, stranding thousands of passengers on the street!');
      telemetry = this.renderTelemetry([
        { label: 'Blast Radius', val: '100% Platform Wide', class: 'text-danger' },
        { label: 'Cab Bookings', val: '0% (Completely Frozen)', class: 'text-danger' },
        { label: 'Server Process', val: 'CRASHED (Exit Code 1)', class: 'text-danger' }
      ]);
    } else {
      headerBadge = `${Icons.alertTriangle({size:16})} DEGRADED: Essential Services Deleted`;
      counterText = 'No Driver Matching • Empty Static Map';
      headerType = 'warning';
      narrative = this.renderNarrative('warning', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Destructive Over-Simplification: Core Functionality Removed', 
        'Deleting notifications, matching, and payments leaves a completely non-functional app. Riders can look at a static map, but nobody can book a ride!');
      telemetry = this.renderTelemetry([
        { label: 'App Functionality', val: 'Broken (Empty UI)', class: 'text-danger' },
        { label: 'Ride Revenue', val: '₹0', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage microservices-sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="ms-diagram-container">
          ${isMonolith ? `
            <div class="monolith-crash-box pulse-shake">
              <div class="monolith-header"><span class="mono-badge text-danger">${Icons.alertTriangle({size:14, color:"#e74c3c"})} Monolithic Process (Shared Memory Space)</span></div>
              <div class="monolith-internals">
                <div class="mono-module module-dead">${Icons.car({size:14})} Booking Module</div>
                <div class="mono-module module-dead">${Icons.pinLocation({size:14})} Matching Module</div>
                <div class="mono-module module-dead">${Icons.jwtToken({size:14})} Payment Module</div>
                <div class="mono-module module-crash glow-red">${Icons.fire({size:14, color:"#e74c3c"})} SMS Module (Crash!)</div>
              </div>
              <div class="monolith-error-banner text-danger">${Icons.fire({size:14})} Unhandled SMS NullPointer Exception crashed the entire server! 0 Cabs can be booked!</div>
            </div>
          ` : `
            <div class="ms-grid">
              <div class="ms-node ${isMicroservices ? 'ms-healthy glow-green' : 'ms-neutral'}">
                <div class="ms-icon">${Icons.taxiCab({size:18})}</div>
                <div class="ms-name">Ride Booking Service</div>
                <div class="ms-status ${isMicroservices ? 'text-success' : ''}">${isMicroservices ? `${Icons.checkCircle({size:14})} 100% Operational` : 'Active'}</div>
              </div>
              <div class="ms-connector ${isMicroservices ? 'pipe-active' : ''}">⇄</div>
              <div class="ms-node ${isMicroservices ? 'ms-healthy glow-green' : 'ms-neutral'}">
                <div class="ms-icon">${Icons.pinLocation({size:18})}</div>
                <div class="ms-name">Driver Matching Service</div>
                <div class="ms-status ${isMicroservices ? 'text-success' : ''}">${isMicroservices ? `${Icons.checkCircle({size:14})} Driver Assigned (Arun)` : 'Active'}</div>
              </div>
              <div class="ms-connector ${isMicroservices ? 'pipe-active' : ''}">⇄</div>
              <div class="ms-node ${isMicroservices ? 'ms-healthy glow-green' : 'ms-neutral'}">
                <div class="ms-icon">${Icons.jwtToken({size:14})}</div>
                <div class="ms-name">Payment Service</div>
                <div class="ms-status text-success">${Icons.checkCircle({size:14})} Secure & Active</div>
              </div>
              <div class="ms-break-line"></div>
              <div class="ms-node ms-failing ${isMicroservices ? 'ms-isolated glow-orange' : 'pulse-danger'}">
                <div class="ms-icon">${Icons.alertCircle({size:14, color:"#f39c12"})}</div>
                <div class="ms-name">Notification Service</div>
                <div class="ms-status text-danger">${Icons.errorCircle({size:12, color:"#e74c3c"})} SMS Gateway Down</div>
                <div class="ms-metric ${isMicroservices ? 'text-warning' : 'text-danger'}">${isMicroservices ? `${Icons.networkPacket({size:14, color:"#16a085"})} Isolated in Queue` : `${Icons.alertTriangle({size:14, color:"#e74c3c"})} Threatening Monolith!`}</div>
              </div>
            </div>
          `}
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 14: API Architecture (REST / GraphQL / gRPC)
  // =========================================================================
  renderApiSim(level, choice) {
    const isOptimal = choice && choice.id === 'A';
    const isXml = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Bloated 50KB XML Choking 3G Mobile`;
      counterText = 'Over-Fetching: Mobile Needs 3 Fields, Receives 200';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.phone({size:22}) + '</span>', 
        'Over-Fetching & Serialization Overhead: Heavy Payloads on Spotty 3G', 
        'A passenger on 3G internet needs only 3 fields: driver name, car model, and ETA. But the server sends a bloated 50KB XML document containing 200 internal fields! Bandwidth is choked and phone battery is wasted parsing verbose text!');
      telemetry = this.renderTelemetry([
        { label: 'Payload Size', val: '50,200 Bytes (Bloated)', class: 'text-danger' },
        { label: 'Useful Data', val: '0.2% (99.8% Waste)', class: 'text-danger' },
        { label: 'Parse Time', val: '38ms on Mobile', class: 'text-warning' }
      ]);
    } else if (isOptimal) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: GraphQL (Mobile) + Binary gRPC (Internal)`;
      counterText = 'Mobile Payload 140 Bytes • Microservices Latency 1.2ms';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'Modern API Architecture: Right Protocol for Right Layer', 
        'Mobile clients query exact fields via GraphQL/REST (JSON: 140 bytes, instant over 3G). Internal microservices communicate over high-performance binary gRPC (Protobuf), slashing serialization overhead by 95%!');
      telemetry = this.renderTelemetry([
        { label: 'Mobile Payload', val: '140 Bytes (99.7% Smaller)', class: 'text-success' },
        { label: 'Internal RPC', val: '1.2ms (Binary Protobuf)', class: 'text-success' },
        { label: 'Battery Impact', val: 'Negligible', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} INEFFICIENT: Giant XML Text Monolith`;
      counterText = 'Heavy Bandwidth Usage • Slow Mobile Parsing';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Legacy Protocol Bottleneck: Verbose Text Serialization', 
        'Sending giant uncompressed XML text across microservices wastes gigabytes of internal network bandwidth and introduces heavy CPU DOM parsing delays on low-end smartphones!');
      telemetry = this.renderTelemetry([
        { label: 'Network Waste', val: '4,200 Bytes / Ping', class: 'text-danger' },
        { label: 'RPC Latency', val: '35ms (Slow Text Parsing)', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="api-diagram">
          <div class="api-client">${Icons.phone({size:16})} Mobile Phone</div>
          <div class="api-pipe text-cyan">${isOptimal ? 'GraphQL (JSON: 140 bytes)' : 'Bloated XML (50KB Choke)'}</div>
          <div class="api-gateway glow-cyan">API Gateway</div>
          <div class="api-pipe text-purple">${isOptimal ? 'gRPC Protobuf (Binary: 1.2ms)' : 'Raw XML Parsing (35ms)'}</div>
          <div class="api-backend">${Icons.apiGateway({size:16})} Microservices</div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 15: Rate Limiting (Token Bucket Defense)
  // =========================================================================
  renderRateLimiterSim(level, choice) {
    const hasLimiter = choice && choice.id === 'A';
    const isUnconditional = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Spammer / Bot Clicking 50 Taps / Sec`;
      counterText = 'Surge Attack: Database Flooded with Duplicate Transactions';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.shieldAlert({size:22}) + '</span>', 
        'Abusive Traffic Surge: Spammers & Runaway Scripts', 
        'A rogue bot or angry passenger is clicking "Book Ride" 50 times per second. Without rate limiting, the server attempts 50 database transactions every second for a single user, overwhelming server threads and starving legitimate riders!');
      telemetry = this.renderTelemetry([
        { label: 'Incoming Taps', val: '50 taps / sec (Abuse)', class: 'text-danger' },
        { label: 'Rate Limiter', val: 'None Active (Exposed)', class: 'text-danger' },
        { label: 'Legitimate Users', val: 'Starved & Blocked', class: 'text-warning' }
      ]);
    } else if (hasLimiter) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Token Bucket Rate Limiter Active`;
      counterText = '5 Tokens Max • 1 Refill / Sec • Excess Taps Receive 429';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.key({size:22}) + '</span>', 
        'Token Bucket Defense: Smooth Traffic & Throttling', 
        'Each passenger gets a virtual token bucket holding 5 tokens. Normal clicks consume 1 token and refill at 1/sec. Rapid abusive bursts empty the bucket, and excess clicks instantly receive HTTP 429 (Too Many Requests) without touching the database!');
      telemetry = this.renderTelemetry([
        { label: 'Server Protection', val: '100% Safe from Floods', class: 'text-success' },
        { label: 'Abuse Throttling', val: 'HTTP 429 Returned', class: 'text-success' },
        { label: 'Legitimate Riders', val: 'Zero Lag (Protected)', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} CATASTROPHE: Server Crashed from Spam Flood`;
      counterText = '50,000 Unchecked Database Writes • Service Down';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.fire({size:22}) + '</span>', 
        'Denial of Service (DoS): Server Flooded Without Rate Limiting', 
        'Accepting every click unconditionally allowed malicious bots to flood the database with 50,000 transactions, bringing the entire service down for all legitimate passengers in the city!');
      telemetry = this.renderTelemetry([
        { label: 'Database Health', val: 'CRASHED (Locked)', class: 'text-danger' },
        { label: 'Server Response', val: 'HTTP 500 / Timeout', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="rate-limiter-stage">
          <div class="bucket-container">
            <div class="bucket-box ${hasLimiter ? 'glow-green' : 'overflow pulse-danger'}">
              <div class="bucket-title">${Icons.key({size:14})} Token Bucket</div>
              <div class="tokens-row">
                <span class="token">${Icons.key({size:14})}</span><span class="token">${Icons.key({size:14})}</span><span class="token">${Icons.key({size:14})}</span>
              </div>
              <div class="bucket-status">${hasLimiter ? `${Icons.check({size:14})} Excess clicks get HTTP 429` : `${Icons.fire({size:14, color:"#e74c3c"})} Server Crashing from 50,000 spam taps!`}</div>
            </div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 16: Networking Protocols (WebSockets vs HTTP Polling)
  // =========================================================================
  renderProtocolsSim(level, choice) {
    const isWs = choice && choice.id === 'A';
    const isPolling = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Live Map Car Tracking Lag`;
      counterText = 'HTTP Polling: 120 Handshakes / Min • Stuttering Car Movement';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.cdnNode({size:22}) + '</span>', 
        'Protocol Inefficiency: Re-Establishing Connections Repeatedly', 
        'To show the moving cab on the map, the phone sends an HTTP request every second. Each ping performs a TCP handshake with 850 bytes of HTTP headers! The car icon jumps in jerky 1-second stutters and phone batteries drain rapidly!');
      telemetry = this.renderTelemetry([
        { label: 'Connection Type', val: 'Short Polling (Jerky)', class: 'text-warning' },
        { label: 'Header Overhead', val: '850 Bytes / Ping', class: 'text-danger' },
        { label: 'Smoothness', val: 'Stuttering (1 FPS)', class: 'text-danger' }
      ]);
    } else if (isWs) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: WebSocket Bi-Directional Stream Active`;
      counterText = 'Single Persistent Pipe • 2-Byte GPS Frames • 60 FPS Gliding';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.taxiCab({size:22}) + '</span>', 
        'WebSockets: Persistent Real-Time Telemetry Stream', 
        'A single persistent bi-directional WebSocket connection stays open. The server pushes GPS coordinates as tiny 2-byte frames the instant the driver moves. The cab glides smoothly on the map with zero battery drain!');
      telemetry = this.renderTelemetry([
        { label: 'Header Overhead', val: '2 Bytes per Ping (99% Less)', class: 'text-success' },
        { label: 'Map Smoothness', val: '60 FPS Smooth Gliding', class: 'text-success' },
        { label: 'Battery Impact', val: 'Low (Single TCP Pipe)', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.alertTriangle({size:16})} SUBOPTIMAL: Continued HTTP Short Polling`;
      counterText = 'Battery Draining Rapidly • Jerky Car Movements';
      headerType = 'warning';
      narrative = this.renderNarrative('warning', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'High Overhead: 120 HTTP Handshakes per Minute', 
        'Short polling forces the radio chip to stay active continuously, burning phone battery and consuming unnecessary cellular data with redundant HTTP headers for every coordinate update.');
      telemetry = this.renderTelemetry([
        { label: 'Battery Drain', val: 'High (Radio active)', class: 'text-danger' },
        { label: 'Header Waste', val: '100 KB / Minute', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="protocol-road">
          <div class="car-sprite ${isWs ? 'car-gliding' : 'car-stuttering'}">${Icons.taxiCab({size:22})}</div>
          <div class="road-track"></div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 17: Message Queues (Kafka / Buffer)
  // =========================================================================
  renderMessageQueueSim(level, choice) {
    const hasQueue = choice && choice.id === 'A';
    const isDiscard = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: 80,000 Requests in 10s (New Year Surge)`;
      counterText = 'Workers Can Only Pair 2,000 / Sec • 60,000 Rides Being Dropped!';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.networkPacket({size:22}) + '</span>', 
        'Traffic Spike: Sudden Ingestion Exceeds Worker Processing', 
        'On New Year\'s Eve midnight, 80,000 ride requests flood in within 10 seconds! The driver-matching engine can only calculate pairings at 2,000/sec. Without a shock absorber, 60,000 requests overflow memory and are dropped forever!');
      telemetry = this.renderTelemetry([
        { label: 'Incoming Surge', val: '80,000 requests', class: 'text-danger' },
        { label: 'Worker Capacity', val: '2,000 / sec max', class: 'text-warning' },
        { label: 'Dropped Rides', val: '60,000 LOST (Overflow)', class: 'text-danger' }
      ]);
    } else if (hasQueue) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Durable Message Queue (Kafka) Deployed`;
      counterText = 'Conveyor Belt Buffers 80,000 Requests • 0 Dropped Rides';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.networkPacket({size:22}) + '</span>', 
        'Message Queues: Asynchronous Traffic Shock Absorber', 
        'Incoming requests land on a lightning-fast, durable waiting conveyor belt (Kafka/RabbitMQ). The matching workers pull requests steadily as fast as they can. The temporary traffic spike is absorbed safely with zero lost bookings!');
      telemetry = this.renderTelemetry([
        { label: 'Buffered in Queue', val: '80,000 (Safe on Disk)', class: 'text-success' },
        { label: 'Dropped Rides', val: '0 (100% Retained)', class: 'text-success' },
        { label: 'Worker Health', val: 'Steady Constant Load', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} CATASTROPHE: 60,000 Customer Rides Discarded`;
      counterText = '75% Customer Churn • Millions in Revenue Lost';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Unacceptable Policy: Dropping Paying Customers', 
        'Discarding requests that cannot be matched in 50ms dropped 60,000 paying riders on the most profitable night of the year! Passengers uninstalled RideQuest and switched to competitors.');
      telemetry = this.renderTelemetry([
        { label: 'Lost Revenue', val: '75% Revenue Dropped', class: 'text-danger' },
        { label: 'Customer Trust', val: 'Destroyed', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="queue-conveyor">
          <div class="producers">${Icons.users({size:14})} 80,000 Passengers</div>
          <div class="conveyor-belt ${hasQueue ? 'glow-purple' : 'broken pulse-danger'}">
            ${hasQueue ? `
              <div class="belt-item">${Icons.networkPacket({size:14})}️ Ride #1</div>
              <div class="belt-item">${Icons.networkPacket({size:14})}️ Ride #2</div>
              <div class="belt-item">${Icons.networkPacket({size:14})}️ Ride #3</div>
              <div class="belt-item">${Icons.networkPacket({size:14})}️ ...80k buffered</div>
            ` : `
              <div class="text-danger">${Icons.fire({size:14, color:"#e74c3c"})} Buffer Overflow! Dropping 75% of rides</div>
            `}
          </div>
          <div class="consumers">${Icons.apiGateway({size:14})} Match Worker Pool</div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 18: Stream Processing (Real-Time City Data)
  // =========================================================================
  renderStreamSim(level, choice) {
    const isStream = choice && choice.id === 'A';
    const isBatch = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: 50,000 Drivers Generating 1.5M Pings / Min`;
      counterText = 'Batch Job Scheduled in 6 Hours • Traffic Jam Undetected!';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.cdnNode({size:22}) + '</span>', 
        'Real-Time Telemetry Gap: Batch Processing is Too Slow for Traffic', 
        '50,000 drivers send GPS coordinates every 2 seconds. A massive traffic jam has formed on MG Road. Because RideQuest runs batch jobs once every 6 hours, it won\'t know about the jam until 10 PM! Thousands of cabs are routing directly into gridlock!');
      telemetry = this.renderTelemetry([
        { label: 'Incoming Events', val: '1,500,000 pings / min', class: 'text-warning' },
        { label: 'Detection Delay', val: '6 Hours (Batch Lag)', class: 'text-danger' },
        { label: 'Rerouting State', val: 'Blind to Current Jams', class: 'text-danger' }
      ]);
    } else if (isStream) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Continuous Stream Processing (Apache Flink)`;
      counterText = 'Sliding Time Window • Traffic Jam Detected in 1.4 Seconds';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.alertTriangle({size:22, color:"#3498db"}) + '</span>', 
        'Stream Processing: Real-Time Analytics on Continuous Data', 
        'Apache Flink processes telemetry as it flows through 30-second sliding windows. It detects rapid deceleration on MG Road in 1.4 seconds and automatically reroutes incoming cabs around the jam in real-time!');
      telemetry = this.renderTelemetry([
        { label: 'Jam Detection Time', val: '1.4 Seconds (Real-Time)', class: 'text-success' },
        { label: 'ETA Accuracy', val: '99.5% Dynamic', class: 'text-success' },
        { label: 'Rerouted Cabs', val: '4,200 Avoided Gridlock', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} OUTDATED: 6-Hour Batch Analysis Failed`;
      counterText = 'Traffic Jam Cleared by the Time Report Ran';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Temporal Staleness: Batch Jobs Cannot React to Live Events', 
        'Saving GPS coordinates to disk and running queries hours later creates historical reports, but cannot help live drivers on the road. Cabs wasted fuel and passengers arrived 45 minutes late!');
      telemetry = this.renderTelemetry([
        { label: 'Latency to Action', val: '6 Hours (Useless)', class: 'text-danger' },
        { label: 'Passenger Delay', val: '+45 Minutes Average', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="stream-radar">
          <div class="radar-circle ${isStream ? 'radar-scanning' : ''}">
            <div class="radar-blip b1">${Icons.pinLocation({size:14})} Car 412</div>
            <div class="radar-blip b2">${Icons.pinLocation({size:14})} Car 981</div>
            <div class="radar-blip b3 text-danger">${Icons.trafficJam({size:14, color:"#e74c3c"})} Traffic Jam Detected!</div>
          </div>
          <div class="radar-info text-cyan">${isStream ? 'Sliding Window: Instant Reroute Computed in 1.4s' : 'Batch job scheduled at 10 PM (Too Late!)'}</div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 19: Full-Text Search (Inverted Index)
  // =========================================================================
  renderSearchSim(level, choice) {
    const isEngine = choice && choice.id === 'A';
    const isSql = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Search "Indira Gandhi Airport"`;
      counterText = 'SQL LIKE %Query% Scanning 25,000,000 Text Rows';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.search({size:22}) + '</span>', 
        'Full Table Text Scan: Relational Databases Struggle with Search', 
        'A passenger types "Indira Gandhi Airport". RideQuest has 25 million landmarks. The relational database runs `SELECT * WHERE address LIKE "%Indira%"`. It must scan every character of all 25 million records, freezing the phone for 9.2 seconds!');
      telemetry = this.renderTelemetry([
        { label: 'Search Latency', val: '9,200ms (Phone Frozen)', class: 'text-danger' },
        { label: 'Rows Scanned', val: '25,000,000 Records', class: 'text-danger' },
        { label: 'Typo / Prefix Match', val: 'Unsupported', class: 'text-warning' }
      ]);
    } else if (isEngine) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Inverted Index (Elasticsearch) Deployed`;
      counterText = 'Tokens Mapped to Document IDs • Matched in 3ms';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.search({size:22}) + '</span>', 
        'Inverted Index: Instant Multi-Word Keyword Matching', 
        'Elasticsearch tokenizes addresses into unique words ("indira", "airport", "terminal") and maps each word to a postings list of IDs. Set intersection matches Location #42 in 3 milliseconds with typo-tolerance and prefix autocomplete!');
      telemetry = this.renderTelemetry([
        { label: 'Search Latency', val: '3ms (Sub-second Autocomplete)', class: 'text-success' },
        { label: 'Fuzzy / Typo Search', val: 'Supported (Levenshtein)', class: 'text-success' },
        { label: 'Database Load', val: '0% (Search Engine Isolated)', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} SUBOPTIMAL: Retaining SQL LIKE % Query`;
      counterText = 'High CPU Spikes • 9-Second Search Latency';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Index Impairment: Leading Wildcards Invalidate B-Trees', 
        'Using `LIKE "%keyword%"` prevents database B-Tree indexes from being used. Every search forces a full disk scan, causing massive CPU spikes whenever riders search for destinations!');
      telemetry = this.renderTelemetry([
        { label: 'CPU Usage', val: '100% on DB Disk', class: 'text-danger' },
        { label: 'Rider Experience', val: 'Unusable Autocomplete', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="search-sim-view">
          ${isEngine ? `
            <div class="inverted-index-card glow-cyan">
              <div class="index-row"><span>"indira"</span> →️ <span>[Location #42, #98, #104]</span></div>
              <div class="index-row"><span>"airport"</span> →️ <span>[Location #42, #55, #89]</span></div>
              <div class="index-row highlight text-success"><span>Intersection:</span> <strong>Location #42: Terminal 2 (Instant Match in 3ms!)</strong></div>
            </div>
          ` : `
            <div class="sql-like-box pulse-shake">
              <div>SELECT * FROM places WHERE address LIKE '%Indira%';</div>
              <div class="text-danger font-mono">Scanning 25,000,000 text records... Phone frozen (9,200ms)</div>
            </div>
          `}
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 20: Client-Server Architecture (Mobile vs Cloud)
  // =========================================================================
  renderClientServerSim(level, choice) {
    const isClientServer = choice && choice.id === 'B';
    const isP2P = choice && choice.id === 'A';
    const isShout = choice && choice.id === 'C';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Passenger Phone Needs to Find Drivers`;
      counterText = 'Mobile Phone Has Limited Battery & Zero Citywide Knowledge';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.phone({size:22}) + '</span>', 
        'Architecture Division: How Should Phone & Cloud Cooperate?', 
        'A passenger opens the OLA app in Indiranagar to book a ride to the airport. The phone itself has limited battery and knows nothing about the 50,000 drivers across the city. How should work be split between the mobile phone and central cloud computers?');
      telemetry = this.renderTelemetry([
        { label: 'Phone Battery', val: 'Needs Protection', class: 'text-warning' },
        { label: 'Citywide Knowledge', val: 'Centralized in Cloud', class: 'text-warning' },
        { label: 'Architecture', val: 'Needs Clean Separation', class: 'text-warning' }
      ]);
    } else if (isClientServer) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Client-Server Model Deployed`;
      counterText = 'Lightweight Mobile Client (45 bytes) • Central Cloud Brain (15ms)';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'Client-Server Architecture: Clean Separation of Concerns', 
        'The mobile app (Client) handles UI taps and map rendering. It sends a lightweight Request (lat, lng) to OLA Cloud (Server). The server checks 50,000 drivers, runs pricing algorithms, and returns a 200 OK JSON response in 15ms!');
      telemetry = this.renderTelemetry([
        { label: 'Network Round Trip', val: '45ms (Sub-second)', class: 'text-success' },
        { label: 'Phone Battery Impact', val: 'Negligible (Lightweight)', class: 'text-success' },
        { label: 'Data Security', val: 'Centralized & Encrypted', class: 'text-success' }
      ]);
    } else if (isP2P) {
      headerBadge = `${Icons.errorCircle({size:16})} DISASTER: Fat Client P2P Phone Mesh Failed`;
      counterText = 'Phone Battery Drained in 15 Mins • Hackers Faked Fares';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Unworkable Architecture: Heavy Processing on Mobile Device', 
        'Downloading 50,000 drivers and running route matching locally melted the phone processor, killed the battery in 15 minutes, and allowed malicious users to hack the local code and set their fare to ₹0!');
      telemetry = this.renderTelemetry([
        { label: 'Battery Life', val: 'Dead in 15 Minutes', class: 'text-danger' },
        { label: 'Network Choke', val: '50,000 P2P Connections', class: 'text-danger' },
        { label: 'Tamper Risk', val: '100% Insecure (Fare Hacked)', class: 'text-danger' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} ABSURD: Shouting Out the Window`;
      counterText = 'Zero Range • Complete Failure';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Absurd Approach: No Technology Deployed', 
        'Shouting out the window only reaches 20 meters. No cabs arrived and the passenger was late for their flight!');
      telemetry = [
        { label: 'Range', val: '20 meters', class: 'text-danger' },
        { label: 'Cabs Found', val: '0', class: 'text-danger' }
      ];
    }

    this.container.innerHTML = `
      <div class="sim-stage client-server-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="cs-animation-stage">
          <div class="cs-entity-card cs-client ${isClientServer ? 'cs-active glow-cyan' : ''}">
            <div class="cs-badge">CLIENT (Passenger Phone)</div>
            <div class="cs-device-body">
              <div class="cs-screen-header">OLA Mini</div>
              <div class="cs-screen-content">
                <div class="cs-mini-map">${Icons.pinLocation({size:14})} Indiranagar ${Icons.arrowRight({size:14})} Airport</div>
                <button class="cs-mini-btn ${isClientServer ? 'btn-active' : ''}">${isClientServer ? `${Icons.taxiCab({size:14})} Cab Booked (ETA 3m)` : 'Tap "Book Ride"'}</button>
              </div>
            </div>
            <div class="cs-role-desc">Lightweight UI, captures user touch, displays map.</div>
          </div>
          <div class="cs-network-pipe">
            <div class="network-label">4G / 5G Internet</div>
            <div class="packet-lane req-lane">
              <div class="packet req-packet ${isClientServer ? 'packet-fly-right glow-green' : (isP2P ? 'packet-lost' : '')}">
                <span class="packet-tag">REQUEST</span><span class="packet-json">POST /api/ride {lat, lng}</span>
              </div>
              <div class="lane-direction">Client →️ Server</div>
            </div>
            <div class="packet-lane res-lane">
              <div class="packet res-packet ${isClientServer ? 'packet-fly-left glow-cyan' : (isP2P ? 'packet-lost' : '')}">
                <span class="packet-tag">RESPONSE</span><span class="packet-json">200 OK {driver: "Arun", eta: 3m}</span>
              </div>
              <div class="lane-direction">Server →️ Client</div>
            </div>
          </div>
          <div class="cs-entity-card cs-server ${isClientServer ? 'cs-active glow-purple' : (isP2P ? 'cs-offline' : '')}">
            <div class="cs-badge">SERVER (Cloud Backend)</div>
            <div class="cs-server-rack">
              <div class="server-blade"><span class="blade-led ${isClientServer ? 'led-pulse-green' : 'led-off'}"></span><span>API Gateway (Auth & Limit)</span></div>
              <div class="server-blade"><span class="blade-led ${isClientServer ? 'led-pulse-green' : 'led-off'}"></span><span>Driver Match Engine (Geo-Index)</span></div>
              <div class="server-blade"><span class="blade-led ${isClientServer ? 'led-pulse-green' : 'led-off'}"></span><span>Database (Trips & Fares)</span></div>
            </div>
            <div class="cs-role-desc">Coordinates 50,000 drivers, calculates fares securely.</div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 21: CDN & Edge Caching (Geographic Distribution)
  // =========================================================================
  renderCdnSim(level, choice) {
    const hasCdn = choice && choice.id === 'A';
    const isOrigin = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Delhi User Fetching Assets 2,200 km`;
      counterText = 'Speed-of-Light Latency: 350ms Round-Trip Across Continent';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.lightning({size:22}) + '</span>', 
        'Physical Distance Bottleneck: Network Latency Across Long Cables', 
        'RideQuest\'s servers are in Chennai. A passenger opening the app in Delhi (2,200 km away) waits 350 milliseconds just downloading static map tiles and vehicle icons. Light through glass fiber takes time, creating unavoidable latency!');
      telemetry = this.renderTelemetry([
        { label: 'Physical Distance', val: '2,200 km (Chennai)', class: 'text-warning' },
        { label: 'Network Latency', val: '350ms (Sluggish)', class: 'text-danger' },
        { label: 'Asset Delivery', val: 'Single Origin Bottleneck', class: 'text-danger' }
      ]);
    } else if (hasCdn) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Content Delivery Network (CDN) Active`;
      counterText = 'Local Delhi Edge Node Serves Assets in 8ms (97% Faster)';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.cdnNode({size:22}) + '</span>', 
        'CDN Edge Caching: Bring Static Assets Closer to Users', 
        'Edge servers deployed in Delhi, Mumbai, and Kolkata cache static images and map assets locally. The Delhi passenger fetches map assets from 5 km away in 8 milliseconds! The Chennai origin server load drops by 90%.');
      telemetry = this.renderTelemetry([
        { label: 'Edge Latency', val: '8ms (Instant Load)', class: 'text-success' },
        { label: 'Origin Load', val: 'Reduced by 90%', class: 'text-success' },
        { label: 'Bandwidth Cost', val: 'Significantly Cheaper', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} SUBOPTIMAL: Long-Distance Origin Fetches Retained`;
      counterText = '350ms Sluggish Response on Every Screen Open';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Origin Saturation: Central Servers Choked by Static Assets', 
        'Forcing all users across India to pull static images from a single Chennai datacenter overwhelmed origin bandwidth and produced sluggish screen loading for millions of riders.');
      telemetry = this.renderTelemetry([
        { label: 'Origin Bandwidth', val: '98% Saturated', class: 'text-danger' },
        { label: 'Page Load Delay', val: '350ms (Laggy)', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="cdn-map">
          <div class="city-node delhi">
            <span>${Icons.pinLocation({size:14})} Delhi User</span>
            <div class="edge-cache ${hasCdn ? 'glow-green' : 'offline'}">${hasCdn ? `${Icons.lightning({size:14})} CDN Edge (8ms)` : 'No Edge Node'}</div>
          </div>
          <div class="cdn-cable ${hasCdn ? 'local-hop glow-green' : 'long-hop pulse-shake'}"></div>
          <div class="city-node chennai">
            <span>${Icons.citySkyline({size:14})} Chennai Origin (2,200 km)</span>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 22: Recommendation System (Multi-Factor ML)
  // =========================================================================
  renderRecSysSim(level, choice) {
    const isSmart = choice && choice.id === 'A';
    const isNaive = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Naive Closest Distance Matching`;
      counterText = 'Driver A (200m away, 3.1 stars, 40% cancels) vs Driver B (600m away, 4.9 stars)';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.lightbulb({size:22, color:"#8e44ad"}) + '</span>', 
        'Matching Dilemma: Nearest Distance vs Quality Experience', 
        'An executive passenger books a ride. Driver A is 200m away but has a 3.1 rating and cancels 40% of rides. Driver B is 600m away, has 4.9 stars, and drives an immaculate EV sedan. Naive systems pick Driver A simply because of distance, leading to cancellation!');
      telemetry = this.renderTelemetry([
        { label: 'Matching Logic', val: 'Naive Shortest Distance', class: 'text-warning' },
        { label: 'Cancellation Risk', val: '40% (High Disappointment)', class: 'text-danger' },
        { label: 'Passenger Rating', val: 'At Risk of 1-Star Review', class: 'text-warning' }
      ]);
    } else if (isSmart) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Multi-Factor ML Recommendation Ranking`;
      counterText = 'Score Weighted by Rating, ETA, Acceptance Rate & Vehicle Tier';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.trophy({size:22}) + '</span>', 
        'Intelligent Dispatch Model: Optimizing for Trip Completion', 
        'The machine learning model scores candidates across multiple signals: ETA (600m is only 1 min extra), 4.9 star rating, 99% acceptance, and vehicle cleanliness. It assigns Driver B! The ride completes smoothly with a 5-star review!');
      telemetry = this.renderTelemetry([
        { label: 'Matched Driver', val: 'Driver B (Top Ranked)', class: 'text-success' },
        { label: 'Completion Rate', val: '99.5% (Successful Trip)', class: 'text-success' },
        { label: 'Passenger Review', val: '5.0 ⭐ (Delighted)', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} FAILED: Driver A Cancelled After 5 Minutes`;
      counterText = 'Passenger Stranded • Churned from Platform';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Naive Optimization Failure: Proximity Without Quality Signals', 
        'Picking Driver A just because they were 200m away backfired! Driver A cancelled after making the passenger wait 5 minutes. The passenger missed their flight and deleted the app.');
      telemetry = this.renderTelemetry([
        { label: 'Trip Status', val: 'CANCELLED by Driver', class: 'text-danger' },
        { label: 'Customer Trust', val: 'Destroyed', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="recsys-card-list">
          <div class="candidate-card ${isNaive ? 'selected-bad pulse-danger' : (!choice ? 'candidate-eval' : '')}">
            <div class="cand-name">Driver A (200m away)</div>
            <div class="cand-rating">⭐ 3.1 | 40% Cancellation Rate</div>
            <div class="cand-verdict text-danger">${isNaive ? `${Icons.errorCircle({size:14})} Matched naively -> Cancelled by driver!` : 'Rejected by ML Ranker'}</div>
          </div>
          <div class="candidate-card ${isSmart ? 'selected-good glow-green' : (!choice ? 'candidate-eval' : '')}">
            <div class="cand-name">Driver B (600m away)</div>
            <div class="cand-rating">⭐ 4.9 | 99% Completion | EV Sedan</div>
            <div class="cand-verdict text-success">${isSmart ? `${Icons.target({size:14})} Top Ranked Match! 5-Star Ride Completed!` : 'Available Quality Candidate'}</div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 23: Observability & Distributed Tracing (APM)
  // =========================================================================
  renderObservabilitySim(level, choice) {
    const hasTracing = choice && choice.id === 'A';
    const isManual = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Error 500 across 45 Microservices`;
      counterText = '100 Servers • Millions of Raw Log Lines • Flying Blind!';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.search({size:22}) + '</span>', 
        'Microservices Observability Gap: Flying Blind in a Distributed System', 
        'A passenger clicked "Book Ride" and got Error 500. The call touched Gateway → Auth → Ride → Pricing → Payment services across 100 servers. Without distributed tracing, finding which service threw the exception takes 3 days of reading text files!');
      telemetry = this.renderTelemetry([
        { label: 'Error Code', val: 'HTTP 500 (Internal Server Error)', class: 'text-danger' },
        { label: 'Trace Context', val: 'None (Blind Guessing)', class: 'text-danger' },
        { label: 'Time to Diagnose', val: '3 Days of Manual SSH', class: 'text-warning' }
      ]);
    } else if (hasTracing) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Distributed Tracing with Trace ID #9a8f2`;
      counterText = 'Exact Bug Pinpointed in 4 Seconds: Pricing Service Line 42';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.target({size:22}) + '</span>', 
        'Distributed Tracing & APM: Instant End-to-End Visibility', 
        'Every incoming request is tagged with a unique Trace ID that propagates across all 45 microservices. The waterfall chart instantly flags: Pricing Service threw NullPointerException on coupon "RAIN50"! Bug fixed in minutes.');
      telemetry = this.renderTelemetry([
        { label: 'Time to Pinpoint', val: '4 Seconds (Instant)', class: 'text-success' },
        { label: 'Root Cause', val: 'Pricing Service Line 42', class: 'text-success' },
        { label: 'System Uptime', val: 'Restored to 99.99%', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} SUBOPTIMAL: Manual SSH Grep on 100 Servers`;
      counterText = 'Developers Guessing for 3 Days • Outage Prolonged';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Operational Nightmare: Manual Log Inspection Does Not Scale', 
        'Manually SSHing into individual servers to read text log files took 3 days of guesswork while thousands of riders continued to experience booking failures!');
      telemetry = this.renderTelemetry([
        { label: 'Mean Time to Recovery', val: '72 Hours (Unacceptable)', class: 'text-danger' },
        { label: 'Engineering Cost', val: 'Days of Wasted Time', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="trace-timeline">
          ${hasTracing ? `
            <div class="trace-span ok" style="width: 20%;">Gateway (2ms)</div>
            <div class="trace-span ok" style="width: 25%;">Auth Service (4ms)</div>
            <div class="trace-span ok" style="width: 35%;">Ride Service (12ms)</div>
            <div class="trace-span error pulse-danger" style="width: 20%;">Pricing Service (CRASH: Line 42 NullPointer)</div>
            <div class="trace-diagnosis text-success">${Icons.target({size:14})} Bug pinpointed in 4 seconds! Coupon 'RAIN50' division by zero.</div>
          ` : `
            <div class="raw-logs-scroll pulse-shake">
              <div>[10:14:02] info: request received</div>
              <div>[10:14:03] debug: checking user token</div>
              <div>[10:14:04] info: 100,000 more raw log lines to read... (Hours spent guessing)</div>
            </div>
          `}
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // =========================================================================
  // LEVEL 24: Security & Access Control (JWT & RBAC)
  // =========================================================================
  renderSecuritySim(level, choice) {
    const isSecure = choice && choice.id === 'A';
    const isObscurity = choice && choice.id === 'B';

    let headerBadge, counterText, headerType, narrative, telemetry;

    if (!choice) {
      headerBadge = `${Icons.alertCircle({size:16, color:"#e74c3c"})} PROBLEM IN PROGRESS: Privilege Escalation Attempt`;
      counterText = 'Attacker Calling /api/admin/refund-wallet to Steal ₹10,000';
      headerType = 'problem';
      narrative = this.renderNarrative('problem', '<span class="rq-svg-icon">' + Icons.shield({size:22}) + '</span>', 
        'Access Control Breach: Anyone Can Send a Raw HTTP Request', 
        'A rogue passenger inspected the app network traffic and is sending a raw HTTP request to `/api/admin/refund-wallet` trying to credit ₹10,000 to their account. If the backend doesn\'t cryptographically verify identity and roles, the thief will drain the wallet treasury!');
      telemetry = this.renderTelemetry([
        { label: 'Threat Type', val: 'Privilege Escalation', class: 'text-danger' },
        { label: 'Role Enforcement', val: 'Needs RBAC Gate', class: 'text-warning' },
        { label: 'Financial Risk', val: '₹10,000 Theft Attempt', class: 'text-danger' }
      ]);
    } else if (isSecure) {
      headerBadge = `${Icons.sparkle({size:16})} SOLUTION: Signed JWT + Strict RBAC Authorization Active`;
      counterText = 'Role "passenger" Blocked • HTTP 403 Forbidden • IP Flagged';
      headerType = 'solution';
      narrative = this.renderNarrative('success', '<span class="rq-svg-icon">' + Icons.shield({size:22}) + '</span>', 
        'Authentication (AuthN) & Authorization (AuthZ): Zero Trust', 
        'The API Gateway verifies the cryptographic signature on the JWT token and checks claims: `role: "passenger"`. Because the endpoint requires `role: "admin"`, the request is immediately rejected with HTTP 403 Forbidden and the IP is banned!');
      telemetry = this.renderTelemetry([
        { label: 'Auth Check', val: '403 Forbidden (Blocked)', class: 'text-success' },
        { label: 'Token Verification', val: 'HMAC / RSA Signature Verified', class: 'text-success' },
        { label: 'Treasury Safety', val: '100% Protected (₹0 Stolen)', class: 'text-success' }
      ]);
    } else {
      headerBadge = `${Icons.errorCircle({size:16})} CATASTROPHE: Security by Obscurity Bypassed`;
      counterText = 'Hidden URL Found in JS Bundle • Attacker Stole ₹5,00,000!';
      headerType = 'problem';
      narrative = this.renderNarrative('danger', '<span class="rq-svg-icon">' + Icons.errorCircle({size:22}) + '</span>', 
        'Security Failure: Hidden URLs Do Not Prevent Breaches', 
        'Relying on a secret URL (`/api/secret-admin-9827361`) was trivial to bypass. The attacker decompiled the client app code, found the endpoint, and drained ₹5,00,000 from company accounts!');
      telemetry = this.renderTelemetry([
        { label: 'Security Level', val: 'Breached (Zero Protection)', class: 'text-danger' },
        { label: 'Funds Stolen', val: '₹5,00,000 Lost', class: 'text-danger' }
      ]);
    }

    this.container.innerHTML = `
      <div class="sim-stage">
        ${this.renderHeader(headerBadge, counterText, headerType)}
        <div class="security-gate">
          <div class="sec-user">${Icons.passenger({size:14})} Attacker: Passenger Token</div>
          <div class="sec-barrier ${isSecure ? 'glow-cyan' : 'breached pulse-danger'}">
            <div class="gate-icon">${isSecure ? `${Icons.shieldCheck({size:14})} RBAC Gate (Active)` : `${Icons.unlock({size:14})} Unprotected URL`}</div>
            <div class="gate-verdict ${isSecure ? 'text-success' : 'text-danger'}">
              ${isSecure ? `${Icons.errorCircle({size:14, color:"#c0392b"})} 403 Forbidden: Required Role "Admin" - IP Flagged!` : `${Icons.alertCircle({size:14, color:"#c0392b"})} Bypassed: Attacker withdrew ₹5,00,000!`}
            </div>
          </div>
        </div>
        ${narrative}
        ${telemetry}
      </div>
    `;
  }

  // Fallback for any unanticipated level
  renderGenericCity(level, choice) {
    this.container.innerHTML = `
      <div class="sim-stage">
        <div class="sim-header">
          <span class="sim-badge">RideQuest City Grid</span>
          <span class="sim-counter">${level.usersCount || 'Active Fleet'}</span>
        </div>
        <div class="city-interactive-box">
          <div class="city-car c1">${Icons.taxiCab({size:20})}</div>
          <div class="city-car c2">${Icons.car({size:20})}</div>
          <div class="city-pass p1">${Icons.passenger({size:18})}</div>
          <div class="city-pass p2">${Icons.passenger({size:18})}</div>
        </div>
        ${this.renderNarrative('warning', '<span class="rq-svg-icon">' + Icons.lightbulb({size:22}) + '</span>', level.title, level.situation || 'Simulating city flow...')}
      </div>
    `;
  }
}

window.SimulationEngine = SimulationEngine;


/**
 * RideQuest - Level 25 FINAL BOSS: OLA App Screen Builder & System Design Studio
 * Inspired by the 24-step OLA User Flow Reference.
 * Provides:
 * 1. Left Panel: Draggable UI Component Library
 * 2. Center Panel: Interactive OLA Mobile Screen Canvas with Drag & Drop, Reordering, and Deletion
 * 3. Right Panel: System Design Inspector with 1st-year friendly explanations & interactive action simulations
 * 4. End-to-End 24-Step Ride Simulation & Validation
 */

class BossCanvasEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    
    // 24 Steps of the OLA Reference Flow
    this.flowSteps = [
      { step: 1, name: "Open OLA App", screen: "Splash Screen", service: "Client App Bootloader", concept: "Client Initialization", req: "GET /app/config", res: "200 OK (Theme, Session Check)" },
      { step: 2, name: "Sign Up / Login", screen: "Phone Input Screen", service: "Auth Service", concept: "Authentication (AuthN)", req: "POST /auth/otp/send { phone: '+91 9876543210' }", res: "200 OK (OTP Sent via SMS)" },
      { step: 3, name: "Verify OTP", screen: "OTP Verification", service: "Auth Service", concept: "Token Security (JWT)", req: "POST /auth/otp/verify { otp: '142690' }", res: "200 OK { token: 'eyJhbGci...' }" },
      { step: 4, name: "Allow Location Access", screen: "GPS Permission Dialog", service: "Mobile OS Bridge", concept: "Device Sensors & Privacy", req: "navigator.geolocation.getCurrentPosition()", res: "Lat: 12.9716, Lng: 77.5946" },
      { step: 5, name: "Set Pickup Location", screen: "Map Pickup Screen", service: "Geocoding Service", concept: "Reverse Geocoding", req: "GET /geo/reverse?lat=12.9716&lng=77.5946", res: "Indiranagar 100ft Road" },
      { step: 6, name: "Enter Destination", screen: "Destination Search", service: "Search & Routing Service", concept: "Full-Text Search & Prefix Trie", req: "GET /search/places?q=Kempegowda+Airport", res: "200 OK [Airport Terminal 2]" },
      { step: 7, name: "View Ride Options", screen: "Vehicle Category Selector", service: "Catalog & Pricing Service", concept: "Load Balancing & Catalog Cache", req: "GET /rides/categories?pickup=...&drop=...", res: "[Bike, Auto, Mini, Prime]" },
      { step: 8, name: "Fare Estimation", screen: "Fare Breakdown Card", service: "Pricing Engine", concept: "Dynamic Pricing & Distance Calc", req: "POST /pricing/estimate { distKm: 34.2, durationMin: 52 }", res: "₹148 (Mini) Base: ₹110, Dist: ₹28, Taxes: ₹10" },
      { step: 9, name: "Select Ride", screen: "Selected Mini Highlight", service: "Ride Booking Service", concept: "Client State Management", req: "Local UI State Update", res: "Category: Mini Selected (₹148)" },
      { step: 10, name: "Select Payment Method", screen: "Payment Selector Modal", service: "Payment Gateway", concept: "PCI-DSS & Payment Gateways", req: "GET /payments/methods?userId=USR_42", res: "[UPI, Credit/Debit, Cash, OLA Money]" },
      { step: 11, name: "Confirm Booking", screen: "Booking Confirmation Action", service: "Order & Dispatch Service", concept: "Idempotency & Message Queues", req: "POST /rides/book { category: 'mini', payment: 'upi' }", res: "201 Created (Booking ID: #BK-7782)" },
      { step: 12, name: "Driver Matching", screen: "Searching Radar Screen", service: "Driver Matching Engine", concept: "Geospatial Indexing (H3 / Quadtree)", req: "K-Nearest Drivers Search (Radius 3km)", res: "12 nearby drivers pinged" },
      { step: 13, name: "Driver Assigned", screen: "Driver Profile Sheet", service: "Driver Management Service", concept: "Distributed State & Consensus", req: "Driver Arun Kumar (4.8 stars) accepted", res: "Vehicle: Maruti Swift TN 37 AB 1234" },
      { step: 14, name: "Driver Travels to Pickup", screen: "En-Route Live Map", service: "Location Streaming Service", concept: "WebSockets & Pub/Sub", req: "WS /stream/driver/DRV_809/location", res: "GPS updates streamed at 1Hz" },
      { step: 15, name: "Driver Arrives", screen: "Arrival Notification Banner", service: "Geofencing & Notification Service", concept: "Proximity Geofencing", req: "Geofence trigger (Distance < 50m)", res: "Push Notification: Driver has arrived!" },
      { step: 16, name: "Ride Verification", screen: "Start-Trip OTP Card", service: "Trip Security Service", concept: "Shared Secret Verification", req: "Passenger shares Start PIN: 7193", res: "Driver enters 7193 Match Verified!" },
      { step: 17, name: "Trip Starts", screen: "Active Trip Map", service: "Trip Lifecycle Service", concept: "ACID State Transition", req: "POST /trips/BK-7782/start", res: "Status: IN_PROGRESS (Meter Running)" },
      { step: 18, name: "Live Ride Tracking", screen: "Live Route Progress", service: "Navigation & Telemetry Service", concept: "Stream Processing (Kafka / Flink)", req: "Continuous GPS stream to Rider & Police SOS", res: "ETA updating dynamically: 18 min" },
      { step: 19, name: "Reach Destination", screen: "Destination Approaching", service: "Geofencing Service", concept: "Geofence Exit Trigger", req: "Distance to drop-off < 100m", res: "Prepare for arrival" },
      { step: 20, name: "Trip Ends", screen: "Trip Completed Banner", service: "Trip Lifecycle Service", concept: "Distributed Transaction (Saga)", req: "POST /trips/BK-7782/complete", res: "Final Distance: 5.2 km, Time: 18 min" },
      { step: 21, name: "Payment", screen: "Payment Success Modal", service: "Payment Processing Service", concept: "Two-Phase Commit & Wallet Deduct", req: "POST /payments/charge { amount: 156.00, method: 'UPI' }", res: "200 OK (Transaction #TX-99014 Approved)" },
      { step: 22, name: "Invoice / Receipt", screen: "Digital Trip Receipt", service: "Invoicing & Storage Service", concept: "Object Storage & Blob Ledger", req: "GET /invoices/BK-7782.pdf", res: "PDF Receipt Generated: ₹156 (Paid via UPI)" },
      { step: 23, name: "Rating and Feedback", screen: "5-Star Rating Component", service: "Feedback & Reputation Service", concept: "Asynchronous Event Ingestion", req: "POST /reviews { driverId: 'DRV_809', rating: 5, tags: ['Polite', 'Clean'] }", res: "Driver rating updated to 4.82 stars" },
      { step: 24, name: "Ride History", screen: "Past Trips List", service: "History & Data Warehouse", concept: "Database Partitioning & OLAP", req: "GET /rides/history?userId=USR_42&limit=10", res: "Stored in Sharded PostgreSQL / DynamoDB" }
    ];

    // Library of UI Components that map to OLA screens and System Design concepts
    this.componentCatalog = [
      // Category: Auth & Onboarding
      {
        id: 'app_header',
        name: 'App Header & Status Bar',
        category: 'auth',
        icon: Icons.phone({size: 20}),
        concept: 'Client-Server Handshake',
        purpose: 'Displays network connectivity, battery, and OLA branding.',
        interaction: 'Renders instantly upon app boot.',
        explanation: 'Ensures the mobile app knows whether the passenger is online before attempting cloud requests.',
        input: 'Device network state (4G / WiFi)',
        output: 'App ready state, active connection banner',
        olaStage: [1, 2, 4],
        renderUI: (c) => `<div class="ola-comp-header"><span class="ola-time">9:41</span><span class="ola-brand">OLA</span><span class="ola-signals">${Icons.signal({size:12})} ${Icons.battery({size:12})}</span></div>`
      },
      {
        id: 'ola_logo',
        name: 'OLA Brand Logo & Splash Art',
        category: 'auth',
        icon: Icons.dot({size: 14, color: '#27ae60'}),
        concept: 'Static CDN Asset Delivery',
        purpose: 'Welcomes the user and establishes visual brand trust.',
        interaction: 'Shown during cold start while local storage checks for cached login tokens.',
        explanation: 'Stored on Edge CDN nodes so it loads in 10ms without hitting the primary backend database.',
        input: 'App launch trigger',
        output: 'High-res SVG asset cached in client memory',
        olaStage: [1],
        renderUI: (c) => `<div class="ola-comp-logo"><div class="ola-logo-circle"></div><span class="ola-logo-text">OLA</span><div class="ola-tagline">Ride Anywhere, Anytime</div></div>`
      },
      {
        id: 'phone_input',
        name: 'Mobile Number Input Field',
        category: 'auth',
        icon: Icons.otpCode({size: 20}),
        concept: 'User Identification & Input Sanitization',
        purpose: 'Captures the rider’s primary contact number (+91).',
        interaction: 'User types 10-digit mobile number and taps Continue.',
        explanation: 'The client validates regex format before sending to server, preventing malformed requests.',
        input: 'User keystrokes (e.g. +91 98765 43210)',
        output: 'Sanitized E.164 phone string sent to Auth Service',
        olaStage: [2],
        renderUI: (c) => `
          <div class="ola-comp-phone-box">
            <div class="ola-label">Enter your mobile number</div>
            <div class="ola-input-row">
              <span class="ola-flag">🇮🇳 +91</span>
              <input type="text" class="ola-input" value="98765 43210" readonly />
            </div>
            <div class="ola-caption">We will send an SMS with a 6-digit verification code.</div>
          </div>
        `
      },
      {
        id: 'otp_input',
        name: 'OTP 6-Digit Verification Box',
        category: 'auth',
        icon: Icons.shieldLock({size: 20}),
        concept: 'Authentication (AuthN) & Cryptographic Tokens',
        purpose: 'Verifies physical possession of the SIM card.',
        interaction: 'User enters the 6-digit one-time secret sent via SMS.',
        explanation: 'Dynamic temporary secret verified on Auth Server; issues a cryptographic JWT token upon success.',
        input: '6-digit OTP code (e.g. 1 4 2 6 9 0)',
        output: 'Signed JWT Session Token with 30-day expiry',
        olaStage: [3],
        renderUI: (c) => `
          <div class="ola-comp-otp-box">
            <div class="ola-label">Enter OTP sent to +91 98765 43210</div>
            <div class="ola-otp-cells">
              <span>1</span><span>4</span><span>2</span><span>6</span><span>9</span><span>0</span>
            </div>
            <div class="ola-otp-sub">Resend OTP in 00:20</div>
          </div>
        `
      },
      {
        id: 'action_btn',
        name: 'Action Button (Continue / Verify)',
        category: 'auth',
        icon: Icons.arrowRight({size: 20}),
        concept: 'Idempotent HTTP POST Requests',
        purpose: 'Executes the primary transition for the active screen.',
        interaction: 'Tapped by rider to dispatch actions.',
        explanation: 'Employs client debounce and idempotency keys to avoid double-charging or duplicate SMS calls.',
        input: 'Click / Tap event',
        output: 'Asynchronous API call trigger with loading spinner',
        olaStage: [2, 3, 5, 11, 20],
        renderUI: (c) => `<button class="ola-btn-primary">Continue &rarr;</button>`
      },
      {
        id: 'gps_permission',
        name: 'GPS Location Permission Modal',
        category: 'auth',
        icon: Icons.pinLocation({size: 20}),
        concept: 'Device Geolocation & Privacy Sandbox',
        purpose: 'Requests access to device GPS hardware.',
        interaction: 'Rider taps "Allow while using the app".',
        explanation: 'Passes coordinates to the client app to center the map on the user’s exact street pickup spot.',
        input: 'User authorization',
        output: 'Latitude & Longitude coordinates',
        olaStage: [4],
        renderUI: (c) => `
          <div class="ola-comp-modal">
            <div class="ola-modal-icon">${Icons.pinLocation({size:24})}</div>
            <div class="ola-modal-title">Allow OLA to access your location?</div>
            <div class="ola-modal-desc">OLA needs your location to find nearby rides and provide accurate pickup.</div>
            <button class="ola-btn-primary" style="margin-top:6px;">Allow while using the app</button>
          </div>
        `
      },

      // Category: Search & Route
      {
        id: 'location_search',
        name: 'Location Search Bar (Where to?)',
        category: 'location',
        icon: Icons.search({size: 20}),
        concept: 'Full-Text Search & Inverted Indexes',
        purpose: 'Autocomplete search for pickup and drop points.',
        interaction: 'User types destination name (e.g., "Airport").',
        explanation: 'Elasticsearch prefix queries and Trie algorithms return top 5 matching places in under 5ms.',
        input: 'Search text query (e.g. "Brookefields Mall")',
        output: 'List of matching POIs with lat/long and distance',
        olaStage: [6],
        renderUI: (c) => `
          <div class="ola-comp-search">
            <div class="ola-search-bar">
              <span class="ola-search-icon">${Icons.search({size:14})}</span>
              <span class="ola-search-placeholder">Where to? (e.g. Airport)</span>
            </div>
            <div class="ola-recent-place">${Icons.home({size:14})} Home &bull; Indiranagar, 100ft Rd</div>
            <div class="ola-recent-place">${Icons.building({size:14})} Work &bull; Tech Park, Outer Ring Rd</div>
          </div>
        `
      },
      {
        id: 'map_preview',
        name: 'Interactive Map Canvas',
        category: 'location',
        icon: Icons.routeNavigation({size: 20}),
        concept: 'Vector Tile Streaming & Client-Side Rendering',
        purpose: 'Displays live map with roads, traffic colors, and vehicle pins.',
        interaction: 'Pans, zooms, and shows car markers moving smoothly.',
        explanation: 'Map tiles are cached locally; vehicle positions update in real-time via WebSocket pings.',
        input: 'Current GPS bounding box',
        output: 'Rendered vector map layer with routing polyline',
        olaStage: [5, 7, 11, 14, 18],
        renderUI: (c) => `
          <div class="ola-comp-map">
            <div class="ola-map-bg">
              <div class="ola-map-road r1"></div>
              <div class="ola-map-road r2"></div>
              <div class="ola-map-car-pin">${Icons.taxiCab({size:20})}</div>
              <div class="ola-map-user-pin">${Icons.pinLocation({size:20})}</div>
            </div>
            <div class="ola-map-badge">5 Cabs Nearby (2-4 min away)</div>
          </div>
        `
      },
      {
        id: 'pickup_dest_marker',
        name: 'Pickup & Destination Markers',
        category: 'location',
        icon: Icons.pinLocation({size: 20, color: '#e74c3c'}),
        concept: 'Graph Routing & Shortest Path (Dijkstra / A*)',
        purpose: 'Sets start and end coordinates for route calculation.',
        interaction: 'Draggable pin snaps to nearest pickup point.',
        explanation: 'Routing engines calculate turn-by-turn distance and estimate travel duration based on traffic density.',
        input: 'Pickup (Lat/Lng) + Destination (Lat/Lng)',
        output: 'Shortest driving route polyline + 5.2 km distance',
        olaStage: [5, 6, 7],
        renderUI: (c) => `
          <div class="ola-comp-route-box">
            <div class="ola-route-point">
              <span class="dot-green">${Icons.dot({size:10, color:"#27ae60"})}</span>
              <span class="route-txt">Pickup: Current location (Indiranagar)</span>
            </div>
            <div class="ola-route-line"></div>
            <div class="ola-route-point">
              <span class="dot-red">${Icons.dot({size:10, color:"#e74c3c"})}</span>
              <span class="route-txt">Drop: Brookefields Mall (5.2 km)</span>
            </div>
          </div>
        `
      },

      // Category: Rides & Fares
      {
        id: 'ride_category_card',
        name: 'Ride Category Cards (Bike / Auto / Mini)',
        category: 'rides',
        icon: Icons.car({size: 20}),
        concept: 'Catalog Microservice & In-Memory Caching',
        purpose: 'Shows available vehicle tiers with wait times and fares.',
        interaction: 'Rider taps their preferred vehicle type.',
        explanation: 'Cached vehicle metadata is enriched with live surge multipliers calculated by the pricing engine.',
        input: 'User category selection',
        output: 'Active vehicle type (Mini - 4 min away, ₹148)',
        olaStage: [7, 9],
        renderUI: (c) => `
          <div class="ola-comp-categories">
            <div class="ola-cat-item"><span class="cat-icon">${Icons.bike({size:20})}</span><div class="cat-info"><strong>Bike</strong><span>2m away</span></div><div class="cat-fare">₹62</div></div>
            <div class="ola-cat-item"><span class="cat-icon">${Icons.autoRickshaw({size:20})}</span><div class="cat-info"><strong>Auto</strong><span>3m away</span></div><div class="cat-fare">₹86</div></div>
            <div class="ola-cat-item selected"><span class="cat-icon">${Icons.car({size:20})}</span><div class="cat-info"><strong>Mini</strong><span>4m away</span></div><div class="cat-fare">₹148</div></div>
            <div class="ola-cat-item"><span class="cat-icon">${Icons.car({size:20, color:"#f39c12"})}</span><div class="cat-info"><strong>Prime Sedan</strong><span>5m away</span></div><div class="cat-fare">₹189</div></div>
          </div>
        `
      },
      {
        id: 'fare_card',
        name: 'Fare Breakdown & Estimate Card',
        category: 'rides',
        icon: Icons.cash({size: 20, color: '#27ae60'}),
        concept: 'Dynamic Pricing Algorithms & Surge Calculation',
        purpose: 'Transparently displays the total trip cost before booking.',
        interaction: 'Rider reviews base fare, distance charge, and taxes.',
        explanation: 'Calculated using Base Fare + (Distance × Rate) + Surge Multiplier without querying slow database disks.',
        input: 'Distance: 5.2 km, Est. Time: 18 min',
        output: '₹148 (Base ₹110 + Dist ₹28 + Taxes ₹10)',
        olaStage: [8],
        renderUI: (c) => `
          <div class="ola-comp-fare">
            <div class="fare-total">₹148 <span class="fare-info-icon">ⓘ</span></div>
            <div class="fare-meta">5.2 km &bull; 18 min driving time</div>
            <div class="fare-breakdown-row"><span>Base fare:</span><strong>₹110</strong></div>
            <div class="fare-breakdown-row"><span>Distance fee:</span><strong>₹28</strong></div>
            <div class="fare-breakdown-row"><span>Taxes & fees:</span><strong>₹10</strong></div>
          </div>
        `
      },
      {
        id: 'payment_selector',
        name: 'Payment Method Selector (UPI / Card / Cash)',
        category: 'rides',
        icon: Icons.creditCard({size: 20, color: '#2980b9'}),
        concept: 'Payment Gateway Integration & Fault Tolerance',
        purpose: 'Allows passenger to choose payment instrument.',
        interaction: 'Selects UPI (Google Pay / PhonePe), Card, or Cash.',
        explanation: 'Communicates with PCI-compliant payment microservices with automatic fallback if a bank gateway is down.',
        input: 'Selected payment method token',
        output: 'Pre-authorized payment intent',
        olaStage: [10],
        renderUI: (c) => `
          <div class="ola-comp-payments">
            <div class="pay-option selected"><span class="pay-icon">${Icons.phone({size:18})}</span><span>UPI (Google Pay / PhonePe)</span><span class="radio-dot">●</span></div>
            <div class="pay-option"><span class="pay-icon">${Icons.creditCard({size:18})}</span><span>Credit / Debit Card</span><span class="radio-dot">○</span></div>
            <div class="pay-option"><span class="pay-icon">${Icons.cash({size:18})}</span><span>Cash to Driver</span><span class="radio-dot">○</span></div>
            <div class="pay-option"><span class="pay-icon">${Icons.wallet({size:18})}</span><span>OLA Money (Bal: ₹200)</span><span class="radio-dot">○</span></div>
          </div>
        `
      },

      // Category: Dispatch & Tracking
      {
        id: 'booking_confirm_btn',
        name: 'Confirm Booking Button',
        category: 'dispatch',
        icon: Icons.checkCircle({size: 20, color: '#27ae60'}),
        concept: 'Message Queues (Kafka) & Distributed Matching',
        purpose: 'Submits the ride order to the OLA backend dispatch queue.',
        interaction: 'Tapped by rider after selecting ride and payment.',
        explanation: 'Pushes booking request into Kafka; driver matching engine picks it up instantly to evaluate nearby drivers.',
        input: 'Booking payload (Rider ID, Pickup, Drop, Tier)',
        output: 'Unique Booking ID #BK-7782 queued for driver matching',
        olaStage: [11],
        renderUI: (c) => `
          <div class="ola-comp-book-btn">
            <div class="book-sub">Mini &bull; ₹148 &bull; Pay via UPI</div>
            <button class="ola-btn-primary">Book Ride &rarr;</button>
          </div>
        `
      },
      {
        id: 'driver_matching_spinner',
        name: 'Driver Matching Radar Screen',
        category: 'dispatch',
        icon: Icons.satellite({size: 20}),
        concept: 'Geospatial Indexing & Matching Algorithm',
        purpose: 'Visual feedback while OLA searches for nearby cabs.',
        interaction: 'Animated pulse while dispatch engine queries drivers.',
        explanation: 'Geohash/H3 cell search identifies free drivers within 3 km and dispatches ride offers via WebSockets.',
        input: 'Ride request in matching queue',
        output: 'Accepted driver notification or next-closest ping',
        olaStage: [12],
        renderUI: (c) => `
          <div class="ola-comp-matching">
            <div class="matching-radar-ring"></div>
            <div class="matching-car-icon">${Icons.car({size:36})}</div>
            <div class="matching-title">Finding a driver near you...</div>
            <div class="matching-subtitle">Scanning available Mini cabs in Indiranagar</div>
          </div>
        `
      },
      {
        id: 'driver_profile_card',
        name: 'Driver Profile & Vehicle Card',
        category: 'dispatch',
        icon: Icons.driver({size: 20}),
        concept: 'Distributed State Synchronization',
        purpose: 'Shows assigned driver photo, rating, and car number plate.',
        interaction: 'Displays call, chat, and cancellation options.',
        explanation: 'Synced across rider and driver apps so passenger can identify vehicle and verify driver identity.',
        input: 'Driver assignment event',
        output: 'Driver Arun Kumar (4.8 stars), Maruti Swift TN 37 AB 1234',
        olaStage: [13, 14, 15],
        renderUI: (c) => `
          <div class="ola-comp-driver">
            <div class="driver-row">
              <div class="driver-avatar">${Icons.driver({size:36})}</div>
              <div class="driver-details">
                <strong>Arun Kumar</strong> <span class="driver-star">${Icons.star({size:12})} 4.8</span> (1.2K trips)<br>
                <span class="driver-car">Maruti Swift &bull; White &bull; <strong>TN 37 AB 1234</strong></span>
              </div>
            </div>
            <div class="driver-eta-badge">Arriving in 3 min</div>
            <div class="driver-actions">
              <button class="btn-action">${Icons.phoneCall({size:14})} Call</button>
              <button class="btn-action">${Icons.messageChat({size:14})} Chat</button>
              <button class="btn-action cancel">${Icons.close({size:14})} Cancel</button>
            </div>
          </div>
        `
      },
      {
        id: 'driver_tracking_map',
        name: 'Live Driver GPS Tracking Route',
        category: 'dispatch',
        icon: Icons.satellite({size: 20}),
        concept: 'Real-Time WebSockets & GPS Stream Processing',
        purpose: 'Streams driver’s moving car icon smoothly along the road.',
        interaction: 'Car icon glides towards pickup point in real time.',
        explanation: 'Driver phone transmits GPS coordinates every 1-2 seconds; WebSockets broadcast updates to rider map.',
        input: 'Driver telemetry stream (Latitude, Longitude, Heading)',
        output: '60 FPS interpolated car movement and live ETA',
        olaStage: [14, 15, 18],
        renderUI: (c) => `
          <div class="ola-comp-tracking">
            <div class="tracking-eta-pill">Driver is on the way &bull; <strong>Arriving in 3 min</strong></div>
            <div class="tracking-mini-map">
              <div class="tracking-route-path"></div>
              <div class="tracking-cab-icon">${Icons.taxiCab({size:24})}</div>
              <div class="tracking-user-pin">${Icons.pinLocation({size:24})}</div>
            </div>
          </div>
        `
      },

      // Category: Trip & Completion
      {
        id: 'ride_verification_otp',
        name: 'Start-Ride Security OTP / PIN',
        category: 'trip',
        icon: Icons.otpCode({size: 20}),
        concept: 'Shared-Secret Verification & Anti-Fraud',
        purpose: '4-digit PIN shared with driver to begin trip.',
        interaction: 'Rider tells driver "7193"; driver enters PIN in app.',
        explanation: 'Prevents riders from boarding the wrong cab and stops rogue drivers from starting phantom trips.',
        input: 'Passenger 4-digit PIN',
        output: 'Trip status changes to IN_PROGRESS upon driver match',
        olaStage: [16],
        renderUI: (c) => `
          <div class="ola-comp-otp-share">
            <div class="otp-share-title">Share this OTP with your driver</div>
            <div class="otp-pin-display">
              <span>7</span><span>1</span><span>9</span><span>3</span>
            </div>
            <div class="otp-share-note">Driver will verify this OTP before starting the trip.</div>
          </div>
        `
      },
      {
        id: 'live_trip_progress',
        name: 'Active Trip Status & Live ETA Card',
        category: 'trip',
        icon: Icons.routeNavigation({size: 20}),
        concept: 'Continuous Telemetry & SOS Emergency Telemetry',
        purpose: 'Displays distance covered, remaining time, and Share Trip.',
        interaction: 'Rider tracks progress or shares live link with family.',
        explanation: 'Stream processing calculates expected arrival time factoring in sudden traffic congestion.',
        input: 'Live trip GPS coordinates',
        output: 'On the way to drop &bull; 18 min &bull; 5.2 km remaining',
        olaStage: [17, 18, 19],
        renderUI: (c) => `
          <div class="ola-comp-trip-live">
            <div class="trip-status-header">${Icons.dot({size:10, color:"#27ae60"})} Trip Started &bull; On the way to drop</div>
            <div class="trip-eta-big">18 min <span class="trip-dist-sub">5.2 km</span></div>
            <div class="trip-safety-row">
              <button class="btn-safety">${Icons.shieldCheck({size:14})} Safety Toolkit</button>
              <button class="btn-safety">${Icons.share({size:14})} Share Trip</button>
            </div>
          </div>
        `
      },
      {
        id: 'payment_status_card',
        name: 'Trip Completed & Payment Success Card',
        category: 'trip',
        icon: Icons.checkCircle({size: 20, color: '#27ae60'}),
        concept: 'ACID Transactional Ledger & Wallet Settlement',
        purpose: 'Confirms driver ended ride and payment was deducted.',
        interaction: 'Displays animated green checkmark and amount.',
        explanation: 'PostgreSQL ledger records immutable debit and credit with zero risk of duplicate deduction.',
        input: 'Payment Gateway webhook response',
        output: 'Payment Successful: ₹156 Paid via UPI',
        olaStage: [20, 21],
        renderUI: (c) => `
          <div class="ola-comp-payment-success">
            <div class="pay-success-check">${Icons.check({size:24, color:"#27ae60"})}</div>
            <div class="pay-success-title">Payment Successful</div>
            <div class="pay-success-amount">₹156</div>
            <div class="pay-success-sub">Paid via UPI &bull; Trans ID #TX-99014</div>
          </div>
        `
      },
      {
        id: 'receipt_invoice',
        name: 'Digital Invoice / Trip Receipt Card',
        category: 'trip',
        icon: Icons.receipt({size: 20}),
        concept: 'Blob Object Storage & Asynchronous Email Delivery',
        purpose: 'Detailed itemized bill with download option.',
        interaction: 'Rider views ride details or downloads PDF invoice.',
        explanation: 'Invoices stored in S3 object storage; link served via CDN with zero strain on live database.',
        input: 'Completed ride ID #BK-7782',
        output: 'Digital invoice with GSTIN breakdown and download button',
        olaStage: [22],
        renderUI: (c) => `
          <div class="ola-comp-receipt">
            <div class="receipt-header">Trip Receipt &bull; 10 Oct 2026</div>
            <div class="receipt-fare-large">₹156 <span class="receipt-paid-tag">Paid via UPI</span></div>
            <div class="receipt-route">
              <div>${Icons.dot({size:10, color:"#27ae60"})} Indiranagar, 100ft Rd</div>
              <div>${Icons.dot({size:10, color:"#e74c3c"})} Brookefields Mall</div>
            </div>
            <div class="receipt-meta">5.2 km &bull; 18 min duration</div>
            <button class="btn-download-invoice">${Icons.download({size:14})} Download PDF Invoice</button>
          </div>
        `
      },
      {
        id: 'rating_feedback',
        name: 'Driver Rating & Feedback Component',
        category: 'trip',
        icon: '⭐',
        concept: 'Asynchronous Event Streaming (Kafka / SQS)',
        purpose: 'Collects 1 to 5 star rating and service compliments.',
        interaction: 'Rider taps 5 stars and selects tags like "Polite Driver".',
        explanation: 'Pushed to Kafka topic; driver reputation worker recalculates driver score asynchronously.',
        input: '5-star rating + feedback tags',
        output: 'Driver reputation updated from 4.80 to 4.82 stars',
        olaStage: [23],
        renderUI: (c) => `
          <div class="ola-comp-rating">
            <div class="rating-title">How was your ride with Arun?</div>
            <div class="rating-stars">${Icons.star({size:22})}${Icons.star({size:22})}${Icons.star({size:22})}${Icons.star({size:22})}${Icons.star({size:22})}</div>
            <div class="rating-tags">
              <span class="tag-pill active">Good driving</span>
              <span class="tag-pill active">Clean car</span>
              <span class="tag-pill">Polite behaviour</span>
            </div>
            <button class="ola-btn-primary" style="margin-top:8px;">Submit Rating</button>
          </div>
        `
      },
      {
        id: 'navigation_bar',
        name: 'Bottom Navigation & Ride History Bar',
        category: 'trip',
        icon: Icons.book({size: 20}),
        concept: 'Database Sharding & Historical Data Warehousing',
        purpose: 'Enables quick switching to Rides, History, and Account.',
        interaction: 'Tapped to view past trips and payment methods.',
        explanation: 'Historical trips queried from read replicas or sharded historical databases without touching live booking servers.',
        input: 'User navigation tap',
        output: 'Ride History list (Completed, Upcoming, Cancelled)',
        olaStage: [24],
        renderUI: (c) => `
          <div class="ola-comp-bottom-nav">
            <div class="nav-item active">${Icons.taxiCab({size:16})} Rides</div>
            <div class="nav-item">${Icons.history({size:16})} History</div>
            <div class="nav-item">${Icons.wallet({size:16})} Wallet</div>
            <div class="nav-item">${Icons.user({size:16})} Account</div>
          </div>
        `
      }
    ];

    // State
    this.activeScreenCategory = 'all';
    // Components currently placed on the active mobile canvas (in display order)
    this.placedComponentIds = [
      'app_header',
      'ola_logo',
      'phone_input',
      'otp_input',
      'action_btn',
      'location_search',
      'map_preview',
      'ride_category_card',
      'fare_card',
      'driver_profile_card',
      'payment_status_card',
      'rating_feedback',
      'navigation_bar'
    ];
    this.selectedComponentId = 'phone_input';
    
    // Interactive Simulation Player state
    this.simRunning = false;
    this.simCurrentStep = 1;
    this.simTimer = null;
    this.simValidationResult = null;
    this.actionFeedback = null;
  }

  init() {
    this.render();
    this.setupDragAndDrop();
  }

  setupDragAndDrop() {
    // Enable drag & drop listeners on container
    setTimeout(() => {
      const dropZone = document.getElementById('phone-screen-dropzone');
      if (dropZone && typeof dropZone.addEventListener === 'function') {
        dropZone.addEventListener('dragover', (e) => {
          e.preventDefault();
          if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
          if (dropZone.classList) dropZone.classList.add('drag-over-active');
        });
        dropZone.addEventListener('dragleave', (e) => {
          if (dropZone.classList) dropZone.classList.remove('drag-over-active');
        });
        dropZone.addEventListener('drop', (e) => {
          e.preventDefault();
          if (dropZone.classList) dropZone.classList.remove('drag-over-active');
          const compId = e.dataTransfer ? e.dataTransfer.getData('text/plain') : null;
          if (compId) {
            this.addComponentToCanvas(compId);
          }
        });
      }
    }, 50);
  }

  handleDragStart(e, compId) {
    e.dataTransfer.setData('text/plain', compId);
    e.dataTransfer.effectAllowed = 'copy';
  }

  selectComponent(compId) {
    this.selectedComponentId = compId;
    this.actionFeedback = null;
    window.soundEngine && window.soundEngine.click();
    this.render();
  }

  addComponentToCanvas(compId) {
    if (!this.placedComponentIds.includes(compId)) {
      this.placedComponentIds.push(compId);
      this.selectedComponentId = compId;
      this.simValidationResult = null;
      window.soundEngine && window.soundEngine.select();
      this.render();
      this.setupDragAndDrop();
    }
  }

  removeComponentFromCanvas(compId) {
    this.placedComponentIds = this.placedComponentIds.filter(id => id !== compId);
    if (this.selectedComponentId === compId) {
      this.selectedComponentId = this.placedComponentIds[0] || null;
    }
    this.simValidationResult = null;
    window.soundEngine && window.soundEngine.click();
    this.render();
    this.setupDragAndDrop();
  }

  moveComponent(compId, direction) {
    const idx = this.placedComponentIds.indexOf(compId);
    if (idx === -1) return;
    const targetIdx = idx + direction;
    if (targetIdx < 0 || targetIdx >= this.placedComponentIds.length) return;
    
    // Swap
    const temp = this.placedComponentIds[idx];
    this.placedComponentIds[idx] = this.placedComponentIds[targetIdx];
    this.placedComponentIds[targetIdx] = temp;
    window.soundEngine && window.soundEngine.click();
    this.render();
    this.setupDragAndDrop();
  }

  filterCategory(cat) {
    this.activeScreenCategory = cat;
    this.render();
    this.setupDragAndDrop();
  }

  // Visual simulation of student interactions in the inspector
  simulateAction(actionType) {
    window.soundEngine && window.soundEngine.whoosh();
    if (actionType === 'otp_valid') {
      this.actionFeedback = {
        type: 'success',
        title: 'OTP 142690 Verified Successfully!',
        details: 'Auth Server verified cryptographic hash in 12ms. Generated JWT session token: "Bearer eyJhbGciOi...". Rider app successfully unlocked!'
      };
    } else if (actionType === 'otp_invalid') {
      this.actionFeedback = {
        type: 'danger',
        title: 'Invalid OTP! Authentication Blocked',
        details: 'Wrong code entered. Auth Server returned HTTP 401 Unauthorized. Access denied. Rider wallet & personal account remain safe from intruders.'
      };
    } else if (actionType === 'driver_match_success') {
      this.actionFeedback = {
        type: 'success',
        title: 'Driver Assigned: Arun Kumar (4.8 stars)',
        details: 'Geospatial H3 index matched nearest driver in 38ms. Booking state updated via Kafka stream. Arun is driving Maruti Swift TN 37 AB 1234.'
      };
    } else if (actionType === 'payment_success') {
      this.actionFeedback = {
        type: 'success',
        title: '₹156 Payment Confirmed via UPI',
        details: 'Payment Gateway processed transaction TX-99014 with 2PC atomic guarantee. Ledger updated without double deduction. Digital invoice generated!'
      };
    } else if (actionType === 'gps_tracking_ping') {
      this.actionFeedback = {
        type: 'success',
        title: 'Real-Time WebSocket Ping Received',
        details: 'Driver GPS stream [12.9718, 77.5950] broadcast to rider client via persistent WebSocket. Car icon glided 5 meters forward on map.'
      };
    }
    this.render();
    this.setupDragAndDrop();
  }

  // Validation logic: checks if student has configured the key stages of the OLA app
  validateAppDesign() {
    const hasAuth = this.placedComponentIds.includes('phone_input') && this.placedComponentIds.includes('otp_input');
    const hasLocation = this.placedComponentIds.includes('location_search') || this.placedComponentIds.includes('pickup_dest_marker') || this.placedComponentIds.includes('map_preview');
    const hasRides = this.placedComponentIds.includes('ride_category_card') || this.placedComponentIds.includes('fare_card');
    const hasDispatch = this.placedComponentIds.includes('driver_profile_card') || this.placedComponentIds.includes('driver_matching_spinner') || this.placedComponentIds.includes('booking_confirm_btn');
    const hasPayment = this.placedComponentIds.includes('payment_status_card') || this.placedComponentIds.includes('payment_selector') || this.placedComponentIds.includes('receipt_invoice');
    const hasRating = this.placedComponentIds.includes('rating_feedback') || this.placedComponentIds.includes('navigation_bar');

    const totalInstalled = this.placedComponentIds.length;

    if (hasAuth && hasLocation && hasRides && hasDispatch && hasPayment && totalInstalled >= 8) {
      window.soundEngine && window.soundEngine.success();
      this.simValidationResult = {
        valid: true,
        title: "Complete OLA Architecture Validated!",
        message: `Your app includes all essential functional layers: Authentication, Route Search, Dynamic Fares, Driver Dispatch, and Payment Ledger. You are ready to run the 24-Step End-to-End Simulation!`,
        score: Math.min(100, Math.round((totalInstalled / 14) * 100))
      };
      this.simRunning = true;
      this.simCurrentStep = 1;
    } else {
      window.soundEngine && window.soundEngine.overload();
      let missingItems = [];
      if (!hasAuth) missingItems.push("Authentication (Mobile Input & OTP Verification)");
      if (!hasLocation) missingItems.push("Search & Routing (Location Search or Map Preview)");
      if (!hasRides) missingItems.push("Ride & Pricing (Ride Category Card or Fare Breakdown)");
      if (!hasDispatch) missingItems.push("Driver Dispatch (Driver Profile or Booking Confirmation)");
      if (!hasPayment) missingItems.push("Payment & Ledger (Payment Status Card or Selector)");

      this.simValidationResult = {
        valid: false,
        title: "Incomplete Ride Flow: Cannot Proceed to Simulation",
        message: `Your OLA app is missing critical system components: ${missingItems.join(', ')}. Drag or add them from the left component library to complete the user journey!`,
        score: Math.round((totalInstalled / 14) * 50)
      };
    }
    this.render();
    this.setupDragAndDrop();
  }

  jumpToSimStep(stepNum) {
    if (stepNum >= 1 && stepNum <= 24) {
      this.simCurrentStep = stepNum;
      window.soundEngine && window.soundEngine.click();
      this.render();
      this.setupDragAndDrop();
    }
  }

  nextSimStep() {
    if (this.simCurrentStep < 24) {
      this.simCurrentStep++;
      window.soundEngine && window.soundEngine.click();
    } else {
      window.soundEngine && window.soundEngine.levelUp();
    }
    this.render();
    this.setupDragAndDrop();
  }

  prevSimStep() {
    if (this.simCurrentStep > 1) {
      this.simCurrentStep--;
      window.soundEngine && window.soundEngine.click();
      this.render();
      this.setupDragAndDrop();
    }
  }

  toggleAutoSim() {
    if (this.simTimer) {
      clearInterval(this.simTimer);
      this.simTimer = null;
    } else {
      this.simTimer = setInterval(() => {
        if (this.simCurrentStep < 24) {
          this.simCurrentStep++;
          this.render();
          this.setupDragAndDrop();
        } else {
          clearInterval(this.simTimer);
          this.simTimer = null;
          this.render();
          this.setupDragAndDrop();
        }
      }, 2500);
    }
    this.render();
    this.setupDragAndDrop();
  }

  closeSimPlayer() {
    if (this.simTimer) {
      clearInterval(this.simTimer);
      this.simTimer = null;
    }
    this.simRunning = false;
    this.render();
    this.setupDragAndDrop();
  }

  finishGame() {
    window.soundEngine && window.soundEngine.levelUp();
    if (window.game) {
      window.game.showVictoryScreen();
    }
  }

  renderSimActionButtons(comp) {
    if (!comp) return '';
    if (comp.id === 'otp_input' || comp.id === 'phone_input') {
      return `
        <button class="btn-action-test btn-test-success" onclick="window.bossCanvas.simulateAction('otp_valid')">
          ${Icons.shieldCheck({size:14})} Test Valid OTP (142690)
        </button>
        <button class="btn-action-test btn-test-fail" onclick="window.bossCanvas.simulateAction('otp_invalid')">
          ${Icons.errorCircle({size:14, color:"#e74c3c"})} Test Spoofed / Invalid OTP
        </button>
      `;
    } else if (comp.id === 'driver_matching_spinner' || comp.id === 'booking_confirm_btn' || comp.id === 'driver_profile_card') {
      return `
        <button class="btn-action-test btn-test-success" onclick="window.bossCanvas.simulateAction('driver_match_success')">
          ${Icons.car({size:14})} Trigger Driver Match (38ms)
        </button>
      `;
    } else if (comp.id === 'driver_tracking_map' || comp.id === 'live_trip_progress') {
      return `
        <button class="btn-action-test btn-test-success" onclick="window.bossCanvas.simulateAction('gps_tracking_ping')">
          ${Icons.satellite({size:14})} Stream Live GPS Ping (WebSocket)
        </button>
      `;
    } else if (comp.id === 'payment_status_card' || comp.id === 'payment_selector' || comp.id === 'fare_card') {
      return `
        <button class="btn-action-test btn-test-success" onclick="window.bossCanvas.simulateAction('payment_success')">
          ${Icons.creditCard({size:14})} Process ₹156 UPI Transaction
        </button>
      `;
    } else {
      return `
        <button class="btn-action-test btn-test-neutral" onclick="window.bossCanvas.simulateAction('otp_valid')">
          ${Icons.lightning({size:14})} Execute Component Action
        </button>
      `;
    }
  }

  render() {
    if (!this.container) return;

    const selectedComp = this.componentCatalog.find(c => c.id === this.selectedComponentId) || this.componentCatalog[0];
    const filteredCatalog = this.activeScreenCategory === 'all' 
      ? this.componentCatalog 
      : this.componentCatalog.filter(c => c.category === this.activeScreenCategory);

    const currentStepInfo = this.flowSteps[this.simCurrentStep - 1];

    this.container.innerHTML = `
      <div class="ola-boss-studio">
        <!-- TOP BANNER -->
        <div class="ola-studio-header">
          <div class="studio-title-row">
            <div class="studio-badge">${Icons.crown({size:16, color:"#f1c40f"})} FINAL BOSS &bull; SYSTEM DESIGN STUDIO</div>
            <h2 class="studio-title">Build the Complete OLA Ride-Booking App</h2>
            <div class="studio-tagline">
              Drag & drop UI components onto the smartphone canvas, connect them to System Design backend services, and test the 24-step passenger journey!
            </div>
          </div>
          <div class="studio-header-actions">
            <button class="btn-test-app glow-green" onclick="window.bossCanvas.validateAppDesign()">
              ${Icons.rocket({size:16})} TEST MY APP & SIMULATE FLOW
            </button>
            ${this.simValidationResult && this.simValidationResult.valid ? `
              <button class="btn-claim-victory pulse-glow" onclick="window.bossCanvas.finishGame()">
                ${Icons.trophy({size:16})} BECOME SENIOR SYSTEM ARCHITECT
              </button>
            ` : ''}
          </div>
        </div>

        <!-- 24-STEP SIMULATION WALKTHROUGH BANNER (If Active) -->
        ${this.simRunning ? `
          <div class="ola-sim-player-bar glow-cyan">
            <div class="sim-player-top">
              <div class="sim-step-indicator">
                <span class="sim-step-badge">Step ${currentStepInfo.step} of 24</span>
                <strong class="sim-step-title">${currentStepInfo.name}</strong> &bull; <span class="text-cyan">${currentStepInfo.screen}</span>
              </div>
              <div class="sim-player-controls">
                <button class="sim-ctrl-btn" onclick="window.bossCanvas.prevSimStep()" ${this.simCurrentStep === 1 ? 'disabled' : ''}>⏮️ Prev</button>
                <button class="sim-ctrl-btn ${this.simTimer ? 'active' : ''}" onclick="window.bossCanvas.toggleAutoSim()">
                  ${this.simTimer ? '⏸️ Pause Auto' : '▶️ Auto Play'}
                </button>
                <button class="sim-ctrl-btn" onclick="window.bossCanvas.nextSimStep()" ${this.simCurrentStep === 24 ? 'disabled' : ''}>Next ⏭️</button>
                <button class="sim-ctrl-btn text-danger" onclick="window.bossCanvas.closeSimPlayer()">${Icons.close({size:14})} Close</button>
              </div>
            </div>

            <!-- SIMULATION SYSTEM TELEMETRY STRIP -->
            <div class="sim-system-telemetry-row">
              <div class="telemetry-chip"><strong>${Icons.lightbulb({size:14})} Concept:</strong> ${currentStepInfo.concept}</div>
              <div class="telemetry-chip"><strong>${Icons.apiGateway({size:14})} Backend:</strong> ${currentStepInfo.service}</div>
              <div class="telemetry-chip"><strong>${Icons.cdnNode({size:14})} Request:</strong> <code>${currentStepInfo.req}</code></div>
              <div class="telemetry-chip"><strong>${Icons.arrowRight({size:14})} Response:</strong> <code>${currentStepInfo.res}</code></div>
            </div>

            <!-- MINI PROGRESS TRACKER (24 Steps) -->
            <div class="sim-step-scrubber">
              ${this.flowSteps.map(s => `
                <div class="scrub-dot ${s.step === this.simCurrentStep ? 'active glow-cyan' : (s.step < this.simCurrentStep ? 'passed' : '')}" 
                     title="Step ${s.step}: ${s.name}" 
                     onclick="window.bossCanvas.jumpToSimStep(${s.step})">
                  ${s.step}
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- VALIDATION RESULT FEEDBACK (If Any) -->
        ${this.simValidationResult ? `
          <div class="sim-validation-alert ${this.simValidationResult.valid ? 'alert-success glow-green' : 'alert-danger pulse-shake'}">
            <span class="alert-icon">${this.simValidationResult.valid ? Icons.trophy({size:24}) : Icons.errorCircle({size:24, color:'#e74c3c'})}</span>
            <div class="alert-content">
              <strong>${this.simValidationResult.title} (Architecture Completeness: ${this.simValidationResult.score}%)</strong>
              <div>${this.simValidationResult.message}</div>
            </div>
          </div>
        ` : ''}

        <!-- THREE PANEL WORKSPACE -->
        <div class="ola-studio-workspace">
          
          <!-- LEFT PANEL: COMPONENT LIBRARY -->
          <div class="ola-panel ola-library-panel">
            <div class="panel-header">
              <div class="panel-title">${Icons.puzzle({size:18})} Component Library</div>
              <div class="library-filter-pills">
                <button class="filter-pill ${this.activeScreenCategory === 'all' ? 'active' : ''}" onclick="window.bossCanvas.filterCategory('all')">All</button>
                <button class="filter-pill ${this.activeScreenCategory === 'auth' ? 'active' : ''}" onclick="window.bossCanvas.filterCategory('auth')">Auth</button>
                <button class="filter-pill ${this.activeScreenCategory === 'location' ? 'active' : ''}" onclick="window.bossCanvas.filterCategory('location')">Search</button>
                <button class="filter-pill ${this.activeScreenCategory === 'rides' ? 'active' : ''}" onclick="window.bossCanvas.filterCategory('rides')">Fares</button>
                <button class="filter-pill ${this.activeScreenCategory === 'dispatch' ? 'active' : ''}" onclick="window.bossCanvas.filterCategory('dispatch')">Dispatch</button>
                <button class="filter-pill ${this.activeScreenCategory === 'trip' ? 'active' : ''}" onclick="window.bossCanvas.filterCategory('trip')">Trip</button>
              </div>
            </div>

            <div class="library-items-list" id="library-list">
              ${filteredCatalog.map(comp => {
                const isPlaced = this.placedComponentIds.includes(comp.id);
                return `
                  <div class="library-card ${isPlaced ? 'placed-in-canvas' : ''}" 
                       draggable="true" 
                       ondragstart="window.bossCanvas.handleDragStart(event, '${comp.id}')"
                       onclick="window.bossCanvas.selectComponent('${comp.id}')">
                    <div class="lib-icon">${comp.icon}</div>
                    <div class="lib-info">
                      <div class="lib-name">${comp.name}</div>
                      <div class="lib-concept-tag">${comp.concept}</div>
                    </div>
                    <div class="lib-action">
                      ${isPlaced ? `
                        <span class="badge-placed">${Icons.check({size:12})} Placed</span>
                      ` : `
                        <button class="btn-add-comp" onclick="event.stopPropagation(); window.bossCanvas.addComponentToCanvas('${comp.id}')">+ Add</button>
                      `}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
            <div class="library-drag-tip">
              ${Icons.lightbulb({size:14})} <em>Drag any card into the phone screen, or click <strong>+ Add</strong>!</em>
            </div>
          </div>

          <!-- CENTER PANEL: INTERACTIVE APP CANVAS -->
          <div class="ola-panel ola-canvas-panel">
            <div class="panel-header canvas-header-row">
              <div class="panel-title">${Icons.phone({size:18})} Interactive OLA Mobile Canvas</div>
              <div class="canvas-item-count">
                Installed: <strong>${this.placedComponentIds.length}</strong> UI Elements
              </div>
            </div>

            <!-- SMARTPHONE DEVICE FRAME -->
            <div class="smartphone-mockup-frame">
              <div class="smartphone-bezel">
                <div class="phone-dynamic-island">
                  <div class="camera-lens"></div>
                  <div class="speaker-grill"></div>
                </div>

                <!-- PHONE SCREEN CONTAINER (DROP ZONE) -->
                <div class="phone-screen-scroll-container" id="phone-screen-dropzone">
                  ${this.placedComponentIds.length === 0 ? `
                    <div class="empty-screen-placeholder">
                      <div class="empty-screen-icon">${Icons.phone({size:48, color:"#7f8c8d"})}</div>
                      <div class="empty-screen-title">Empty OLA Screen Canvas</div>
                      <p>Drag components here from the library on the left, or click "+ Add" to assemble the OLA app!</p>
                    </div>
                  ` : `
                    <div class="canvas-placed-elements-stack">
                      ${this.placedComponentIds.map((id, index) => {
                        const comp = this.componentCatalog.find(c => c.id === id);
                        if (!comp) return '';
                        const isSelected = this.selectedComponentId === comp.id;
                        return `
                          <div class="canvas-placed-item-wrapper ${isSelected ? 'selected-for-inspect' : ''}" 
                               onclick="window.bossCanvas.selectComponent('${comp.id}')">
                            <!-- COMPONENT CONTROLS OVERLAY -->
                            <div class="comp-control-bar">
                              <span class="comp-control-name">${comp.icon} ${comp.name}</span>
                              <div class="comp-control-buttons">
                                <button class="btn-reorder" title="Move Up" onclick="event.stopPropagation(); window.bossCanvas.moveComponent('${comp.id}', -1)" ${index === 0 ? 'disabled' : ''}>▲</button>
                                <button class="btn-reorder" title="Move Down" onclick="event.stopPropagation(); window.bossCanvas.moveComponent('${comp.id}', 1)" ${index === this.placedComponentIds.length - 1 ? 'disabled' : ''}>▼</button>
                                <button class="btn-remove" title="Remove" onclick="event.stopPropagation(); window.bossCanvas.removeComponentFromCanvas('${comp.id}')">${Icons.close({size:12})}</button>
                              </div>
                            </div>

                            <!-- REALISTIC OLA UI RENDER -->
                            <div class="ola-rendered-ui-content">
                              ${comp.renderUI(comp)}
                            </div>
                          </div>
                        `;
                      }).join('')}
                    </div>
                  `}
                </div>

                <!-- PHONE HOME INDICATOR BAR -->
                <div class="phone-home-indicator"></div>
              </div>
            </div>
          </div>

          <!-- RIGHT PANEL: SYSTEM DESIGN INSPECTOR -->
          <div class="ola-panel ola-inspector-panel">
            <div class="panel-header">
              <div class="panel-title">${Icons.microscope({size:18})} System Design Inspector</div>
              <span class="inspector-badge">Selected Component</span>
            </div>

            ${selectedComp ? `
              <div class="inspector-card-content">
                <div class="inspector-hero">
                  <div class="insp-icon">${selectedComp.icon}</div>
                  <div class="insp-titles">
                    <div class="insp-name">${selectedComp.name}</div>
                    <div class="insp-category-badge">${selectedComp.category.toUpperCase()} &bull; OLA FLOW</div>
                  </div>
                </div>

                <!-- SYSTEM DESIGN CONCEPT CARD -->
                <div class="insp-section-box concept-box glow-cyan">
                  <div class="insp-sec-title">${Icons.lightbulb({size:14})} System Design Concept</div>
                  <div class="insp-concept-highlight">${selectedComp.concept}</div>
                  <div class="insp-concept-desc">${selectedComp.explanation}</div>
                </div>

                <!-- PURPOSE IN OLA APP -->
                <div class="insp-section-box">
                  <div class="insp-sec-title">${Icons.target({size:14})} Purpose in OLA App</div>
                  <div class="insp-sec-body">${selectedComp.purpose}</div>
                </div>

                <!-- USER INTERACTION FLOW -->
                <div class="insp-section-box">
                  <div class="insp-sec-title">${Icons.users({size:14})} When Rider Interacts</div>
                  <div class="insp-sec-body">${selectedComp.interaction}</div>
                </div>

                <!-- INPUT & OUTPUT SPECIFICATION -->
                <div class="insp-section-box io-box">
                  <div class="insp-sec-title">${Icons.lightning({size:14})} Inputs & Outputs</div>
                  <div class="io-item">
                    <span class="io-label">${Icons.arrowRight({size:12})} Expected Input:</span>
                    <span class="io-val">${selectedComp.input}</span>
                  </div>
                  <div class="io-item">
                    <span class="io-label">${Icons.arrowRight({size:12})} Resulting Output:</span>
                    <span class="io-val text-success">${selectedComp.output}</span>
                  </div>
                </div>

                <!-- INTERACTIVE VISUAL SIMULATION OF STUDENT CHOICES -->
                <div class="insp-section-box action-sim-box">
                  <div class="insp-sec-title">${Icons.gamepad({size:14})} Simulate Choice Behavior</div>
                    ${this.renderSimActionButtons(selectedComp)}
                  </div>

                  <!-- SIMULATION OUTCOME FEEDBACK -->
                  ${this.actionFeedback ? `
                    <div class="action-outcome-card ${this.actionFeedback.type === 'success' ? 'glow-green' : 'pulse-danger'}">
                      <div class="outcome-title">${this.actionFeedback.title}</div>
                      <div class="outcome-details">${this.actionFeedback.details}</div>
                    </div>
                  ` : ''}
                </div>

                <!-- ADD / REMOVE TOGGLE BUTTON -->
                <div class="inspector-footer-action">
                  ${this.placedComponentIds.includes(selectedComp.id) ? `
                    <button class="btn-toggle-canvas remove" onclick="window.bossCanvas.removeComponentFromCanvas('${selectedComp.id}')">
                      ${Icons.close({size:14})} Remove from Phone Canvas
                    </button>
                  ` : `
                    <button class="btn-toggle-canvas add" onclick="window.bossCanvas.addComponentToCanvas('${selectedComp.id}')">
                      + Add to Phone Canvas
                    </button>
                  `}
                </div>

              </div>
            ` : `
              <div class="empty-inspector-prompt">
                <p>Click on any component in the phone canvas or library to inspect its system design properties.</p>
              </div>
            `}
          </div>

        </div>
      </div>
    `;
  }
}

window.BossCanvasEngine = BossCanvasEngine;


/**
 * RideQuest - Core Game State & Controller
 * Manages game loop, progression, pedagogical discovery popups, sound cues,
 * Teacher Mode, Codex drawer, and Boss level transitions.
 */

class GameController {
  constructor() {
    this.currentLevelIndex = 0;
    this.xp = 0;
    this.completedLevelIds = new Set();
    this.selectedChoice = null;
    this.simulationEngine = null;
    this.bossCanvas = null;
    this.isTeacherModeOpen = false;
    this.isCodexOpen = false;

    this.init();
  }

  setElementText(id, text) {
    const el = document.getElementById(id);
    if (!el) return;
    if (typeof text === 'string' && text.includes('<')) {
      el.innerHTML = text;
    } else {
      el.innerText = text;
    }
  }

  init() {
    this.loadState();
    this.simulationEngine = new window.SimulationEngine('sim-viewport');
    this.bossCanvas = new window.BossCanvasEngine('boss-canvas-container');
    window.bossCanvas = this.bossCanvas;

    // Pre-render the current level so UI is never blank
    this.loadLevel(this.currentLevelIndex);

    if (this.currentLevelIndex > 0 || this.completedLevelIds.size > 0) {
      const startBtn = document.getElementById('btn-start-journey');
      if (startBtn) startBtn.innerText = "CONTINUE YOUR JOURNEY →";
    }
  }

  loadState() {
    try {
      const saved = localStorage.getItem('ridequest_save');
      if (saved) {
        const data = JSON.parse(saved);
        this.currentLevelIndex = data.currentLevelIndex || 0;
        this.xp = data.xp || 0;
        this.completedLevelIds = new Set(data.completedLevelIds || []);
      }
    } catch (e) {
      console.warn('Failed to load state', e);
    }
  }

  saveState() {
    try {
      const data = {
        currentLevelIndex: this.currentLevelIndex,
        xp: this.xp,
        completedLevelIds: Array.from(this.completedLevelIds)
      };
      localStorage.setItem('ridequest_save', JSON.stringify(data));
    } catch (e) {}
  }

  resetProgress() {
    if (confirm("Reset all game progress back to Level 1?")) {
      localStorage.removeItem('ridequest_save');
      this.currentLevelIndex = 0;
      this.xp = 0;
      this.completedLevelIds.clear();
      window.location.reload();
    }
  }

  startGame() {
    try { window.soundEngine?.select?.(); } catch (e) {}
    const landing = document.getElementById('screen-landing');
    const story = document.getElementById('screen-story-intro');
    if (landing) landing.classList.add('hidden');
    if (story) story.classList.remove('hidden');
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) {}
  }

  beginLevel1() {
    try { window.soundEngine?.select?.(); } catch (e) {}
    const story = document.getElementById('screen-story-intro');
    const gameplay = document.getElementById('screen-gameplay');
    if (story) story.classList.add('hidden');
    if (gameplay) gameplay.classList.remove('hidden');
    this.loadLevel(this.currentLevelIndex);
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) {}
  }

  loadLevel(index) {
    if (index >= window.GAME_LEVELS.length) {
      index = window.GAME_LEVELS.length - 1;
    }
    this.currentLevelIndex = index;
    this.selectedChoice = null;
    this.saveState();

    const level = window.GAME_LEVELS[this.currentLevelIndex];

    // Update global UI badges
    this.updateTopBar(level);

    if (level.isBoss) {
      document.getElementById('level-standard-view').classList.add('hidden');
      document.getElementById('level-boss-view').classList.remove('hidden');
      this.bossCanvas.init();
    } else {
      document.getElementById('level-standard-view').classList.remove('hidden');
      document.getElementById('level-boss-view').classList.add('hidden');
      this.renderLevelView(level);
    }

    this.updateTeacherMode();
  }

  updateTopBar(level) {
    const stage = window.GAME_STAGES.find(s => s.id === level.stage);
    this.setElementText('stage-badge-text', stage ? stage.name.toUpperCase() : 'SYSTEM DESIGN');
    this.setElementText('level-indicator-text', level.isBoss ? 'FINAL BOSS' : `Level ${level.id} / 24`);
    this.setElementText('xp-count-val', `${this.xp}`);

    // Stepper dots for the current stage
    const stepperContainer = document.getElementById('stage-stepper-dots');
    if (stepperContainer && stage) {
      stepperContainer.innerHTML = stage.levels.map((lvlId, idx) => {
        const isDone = this.completedLevelIds.has(lvlId);
        const isCurrent = lvlId === level.id;
        const dotClass = isCurrent ? 'dot current' : (isDone ? 'dot done' : 'dot pending');
        const connector = idx < stage.levels.length - 1 ? `<div class="dot-connector ${isDone ? 'active' : ''}"></div>` : '';
        return `<div class="${dotClass}" title="Level ${lvlId}"></div>${connector}`;
      }).join('');
    }

    // Non-jargon challenge topic pill
    this.setElementText('challenge-topic-text', `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f39c12" stroke-width="2" class="rq-icon btn-icon"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="2" fill="#f39c12"/></svg> Challenge: ${level.topicHint || level.title}`);

    const progressFill = document.getElementById('progress-bar-fill');
    if (progressFill) progressFill.style.width = `${((level.id) / 25) * 100}%`;
  }

  updateCompanionState(state, dialogue) {
    const faceEl = document.getElementById('avatar-face');
    const textEl = document.getElementById('companion-text');
    const compCard = document.getElementById('architect-companion');

    if (compCard) {
      compCard.classList.remove('state-thinking', 'state-observing', 'state-curious', 'state-celebrating');
      compCard.classList.add(`state-${state}`);
    }

    if (faceEl) {
      if (window.Icons && typeof window.Icons.architectAvatar === 'function') {
        faceEl.innerHTML = window.Icons.architectAvatar({ size: 44, mood: state });
      }
    }

    if (textEl && dialogue) {
      textEl.innerText = dialogue;
    }
  }

  renderLevelView(level) {
    // Hide all overlays and feedback banners
    const modal = document.getElementById('discovery-modal');
    if (modal) modal.classList.add('hidden');
    const consCard = document.getElementById('consequence-feedback-card');
    if (consCard) consCard.classList.add('hidden');
    const succBanner = document.getElementById('success-feedback-banner');
    if (succBanner) succBanner.classList.add('hidden');
    const whModal = document.getElementById('what-happened-modal');
    if (whModal) whModal.classList.add('hidden');

    this.isEvaluating = false;

    // Fill Situation card
    this.setElementText('lvl-time', level.time);
    this.setElementText('lvl-users', level.usersCount);
    this.setElementText('lvl-title', level.title);
    this.setElementText('lvl-situation', level.situation);
    this.setElementText('lvl-problem', level.problem);

    // Initial character prompt
    this.updateCompanionState('thinking', `“Review the situation carefully. What strategy should we deploy?”`);

    // Render Options
    const optionsContainer = document.getElementById('options-grid');
    if (optionsContainer) {
      optionsContainer.innerHTML = '';

      level.choices.forEach(choice => {
        const btn = document.createElement('div');
        btn.className = 'choice-card';
        btn.id = `choice-opt-${choice.id}`;
        btn.innerHTML = `
          <div class="choice-letter">Option ${choice.id}</div>
          <div class="choice-text">"${choice.text}"</div>
          <div class="choice-action">Test this solution →</div>
        `;
        btn.onclick = () => this.makeChoice(choice);
        optionsContainer.appendChild(btn);
      });
    }

    // Initial simulation rendering
    if (this.simulationEngine) {
      this.simulationEngine.render(level, null);
    }
  }

  setChoicesDisabled(disabled) {
    const allCards = document.querySelectorAll('.choice-card');
    allCards.forEach(c => {
      if (disabled) {
        c.classList.add('disabled');
      } else {
        c.classList.remove('disabled');
      }
    });
  }

  makeChoice(choice) {
    if (this.isEvaluating) return;
    this.isEvaluating = true;
    window.soundEngine.click();
    this.selectedChoice = choice;
    const level = window.GAME_LEVELS[this.currentLevelIndex];

    // Lock choices and highlight
    this.setChoicesDisabled(true);

    const allCards = document.querySelectorAll('.choice-card');
    allCards.forEach(c => c.classList.remove('selected', 'optimal', 'suboptimal'));

    const selectedElem = document.getElementById(`choice-opt-${choice.id}`);
    if (selectedElem) {
      selectedElem.classList.add('selected');
      if (choice.isOptimal) {
        selectedElem.classList.add('optimal');
      } else {
        selectedElem.classList.add('suboptimal');
      }
    }

    // Story companion observes
    this.updateCompanionState('observing', `“Testing Option ${choice.id}... Let's observe what happens!”`);

    // Render simulation consequence
    if (this.simulationEngine) {
      this.simulationEngine.render(level, choice);
    }
    this.updateTeacherMode();

    if (!choice.isOptimal) {
      // --- SUBOPTIMAL / WRONG ANSWER FLOW ---
      setTimeout(() => {
        window.soundEngine.overload();
        this.updateCompanionState('curious', `“Hmm... look at what happened! Something else is slowing the system down.”`);
        this.showConsequenceCard(level, choice);
        this.isEvaluating = false;
      }, 1200);
    } else {
      // --- OPTIMAL / CORRECT ANSWER FLOW ---
      setTimeout(() => {
        window.soundEngine.success();
        this.updateCompanionState('celebrating', `“Brilliant! Look what changed! The system is running smoothly!”`);
        this.showSuccessBanner(level, choice);

        setTimeout(() => {
          this.showDiscoveryModal(level, choice);
          this.isEvaluating = false;
        }, 1600);
      }, 1200);
    }
  }

  showConsequenceCard(level, choice) {
    const card = document.getElementById('consequence-feedback-card');
    if (card) {
      card.classList.remove('hidden');
      const wh = choice.whatHappened || {};
      this.setElementText('consequence-title', "Interesting choice! Let's see what happened...");
      this.setElementText('consequence-body', wh.reflectionQuestion || "Did this decision solve the whole system bottleneck?");
    }
  }

  hideConsequenceCard() {
    const card = document.getElementById('consequence-feedback-card');
    if (card) card.classList.add('hidden');
  }

  showSuccessBanner(level, choice) {
    const banner = document.getElementById('success-feedback-banner');
    if (banner) {
      banner.classList.remove('hidden');
      this.setElementText('success-desc-text', choice.successSummary || "The workload is flowing smoothly across the system without bottlenecks!");
    }
  }

  hideSuccessBanner() {
    const banner = document.getElementById('success-feedback-banner');
    if (banner) banner.classList.add('hidden');
  }

  retryLevel() {
    window.soundEngine.click();
    this.hideConsequenceCard();
    this.hideWhatHappenedModal();
    this.setChoicesDisabled(false);

    const allCards = document.querySelectorAll('.choice-card');
    allCards.forEach(c => c.classList.remove('selected', 'optimal', 'suboptimal', 'disabled'));

    this.selectedChoice = null;
    this.isEvaluating = false;

    const level = window.GAME_LEVELS[this.currentLevelIndex];
    this.updateCompanionState('thinking', `“Let's rethink our approach. Which solution should we test next?”`);

    // Reset simulation to clean problem state
    if (this.simulationEngine) {
      this.simulationEngine.render(level, null);
    }
  }

  showWhatHappened() {
    window.soundEngine.click();
    const modal = document.getElementById('what-happened-modal');
    const choice = this.selectedChoice;
    if (modal && choice) {
      modal.classList.remove('hidden');
      this.setElementText('wh-choice-echo', `You tested Option ${choice.id}: "${choice.text}"`);

      const wh = choice.whatHappened || {};
      this.setElementText('wh-helped-text', wh.helped || "This took action on the immediate situation.");
      this.setElementText('wh-bottleneck-text', wh.bottleneck || choice.consequenceText);
      this.setElementText('wh-reflection-prompt', `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f39c12" stroke-width="2" class="rq-icon btn-icon"><path d="M9 18h6M10 21h4"/><path d="M9 14.5A7 7 0 1 1 15 14.5c-.8.8-1.5 2-1.5 3.5h-3c0-1.5-.7-2.7-1.5-3.5z" fill="#f39c12" fill-opacity="0.15"/></svg> Architect's Reflection: ${wh.reflectionQuestion || "Did this approach solve the underlying system bottleneck?"}`);
    }
  }

  hideWhatHappenedModal() {
    const modal = document.getElementById('what-happened-modal');
    if (modal) modal.classList.add('hidden');
  }

  showDiscoveryModal(level, choice) {
    const modal = document.getElementById('discovery-modal');
    if (modal) modal.classList.remove('hidden');

    const disc = level.discovery;
    this.setElementText('disc-badge-title', disc.badge);
    this.setElementText('disc-tagline', disc.tagline);
    this.setElementText('disc-analogy', disc.analogy);
    this.setElementText('disc-contrast-a-title', disc.contrast.termA);
    this.setElementText('disc-contrast-a-desc', disc.contrast.descA);
    this.setElementText('disc-contrast-b-title', disc.contrast.termB);
    this.setElementText('disc-contrast-b-desc', disc.contrast.descB);
    this.setElementText('disc-advanced-text', disc.advancedInfo);

    // Reset advanced toggle
    const advPanel = document.getElementById('advanced-panel');
    if (advPanel) advPanel.classList.add('hidden');
    this.setElementText('btn-advanced-toggle', `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="rq-icon btn-icon"><path d="M6 18h12M10 21h4"/><circle cx="12" cy="7" r="3"/><path d="M12 10v4M9 14h6"/><path d="M7 18a5 5 0 0 1 10 0"/></svg> Show Advanced Tech Explanation`);

    // Award XP if first time
    if (!this.completedLevelIds.has(level.id)) {
      this.completedLevelIds.add(level.id);
      this.xp += 150;
      this.updateTopBar(level);
      this.saveState();
      this.animateXpGain();
    }
  }

  animateXpGain() {
    const xpBadge = document.getElementById('xp-display');
    if (xpBadge) {
      xpBadge.classList.add('pulse-glow');
      setTimeout(() => xpBadge.classList.remove('pulse-glow'), 2000);
    }
  }

  nextLevel() {
    window.soundEngine.select();
    const modal = document.getElementById('discovery-modal');
    if (modal) modal.classList.add('hidden');
    this.hideConsequenceCard();
    this.hideSuccessBanner();
    this.hideWhatHappenedModal();
    this.setChoicesDisabled(false);
    this.selectedChoice = null;
    this.isEvaluating = false;

    this.loadLevel(this.currentLevelIndex + 1);
  }

  testLbStrategy(strategyId) {
    const level = window.GAME_LEVELS[this.currentLevelIndex];
    const choice = level.choices.find(c => c.id === strategyId);
    if (choice) {
      this.simulationEngine.render(level, choice);
    }
  }

  toggleTeacherMode() {
    window.soundEngine.click();
    this.isTeacherModeOpen = !this.isTeacherModeOpen;
    const drawer = document.getElementById('teacher-drawer');
    if (this.isTeacherModeOpen) {
      drawer.classList.remove('hidden');
      this.updateTeacherMode();
    } else {
      drawer.classList.add('hidden');
    }
  }

  updateTeacherMode() {
    if (!this.isTeacherModeOpen) return;
    const level = window.GAME_LEVELS[this.currentLevelIndex];
    if (level.isBoss) {
      document.getElementById('teach-level-title').innerText = "Final Boss: Architectural Blueprint Construction";
      document.getElementById('teach-concept-revealed').innerText = "Complete System Synthesis (All 24 Concepts combined)";
      document.getElementById('teach-experience').innerText = "Students must assemble users, edge caching, load balancing, microservices, caches, and database replication into a working platform.";
      document.getElementById('teach-realworld').innerText = "Production ride-hailing architecture of Ola / Uber / Grab handling 500k req/s.";
      document.getElementById('teach-question').innerText = "What trade-offs did you make between cost and 99.999% reliability?";
      return;
    }

    document.getElementById('teach-level-title').innerText = `Level ${level.id}: ${level.title}`;
    document.getElementById('teach-concept-revealed').innerText = level.discovery.badge;
    document.getElementById('teach-experience').innerText = level.discovery.teacherNotes.experience;
    document.getElementById('teach-realworld').innerText = level.discovery.teacherNotes.realWorld;
    document.getElementById('teach-question').innerText = level.discovery.teacherNotes.question;

    // Student choice telemetry
    const choiceInfo = document.getElementById('teach-student-choice');
    if (this.selectedChoice) {
      choiceInfo.innerHTML = `
        <span class="${this.selectedChoice.isOptimal ? 'text-success' : 'text-warning'}">
          Student chose Option ${this.selectedChoice.id}: "${this.selectedChoice.text}"
          (${this.selectedChoice.isOptimal ? 'Optimal architectural decision' : 'Suboptimal / Common misconception'})
        </span>
      `;
    } else {
      choiceInfo.innerHTML = `<span class="text-muted">Student is currently thinking and reviewing options...</span>`;
    }

    // Populate Level Jump select
    const select = document.getElementById('teach-jump-select');
    if (select && select.children.length === 0) {
      window.GAME_LEVELS.forEach((lvl, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.innerText = lvl.isBoss ? "Final Boss: Build RideQuest" : `Level ${lvl.id}: ${lvl.title}`;
        select.appendChild(opt);
      });
      select.value = this.currentLevelIndex;
      select.onchange = (e) => {
        this.loadLevel(parseInt(e.target.value));
      };
    } else if (select) {
      select.value = this.currentLevelIndex;
    }
  }

  toggleCodex() {
    window.soundEngine.click();
    this.isCodexOpen = !this.isCodexOpen;
    const drawer = document.getElementById('codex-drawer');
    if (this.isCodexOpen) {
      drawer.classList.remove('hidden');
      this.renderCodex();
    } else {
      drawer.classList.add('hidden');
    }
  }

  renderCodex() {
    const list = document.getElementById('codex-list');
    list.innerHTML = '';

    window.GAME_LEVELS.slice(0, 24).forEach(lvl => {
      const isUnlocked = this.completedLevelIds.has(lvl.id);
      const card = document.createElement('div');
      card.className = `codex-card ${isUnlocked ? 'unlocked' : 'locked'}`;
      card.innerHTML = `
        <div class="codex-num">Level ${lvl.id}</div>
        <div class="codex-title">${isUnlocked ? lvl.discovery.badge : '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="rq-icon btn-icon"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg> Mystery Concept'}</div>
        <div class="codex-desc">${isUnlocked ? lvl.discovery.tagline : 'Complete this level challenge to unlock and discover this concept.'}</div>
        ${isUnlocked ? `<div class="codex-analogy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f39c12" stroke-width="2" class="rq-icon btn-icon"><path d="M9 18h6M10 21h4"/><path d="M9 14.5A7 7 0 1 1 15 14.5c-.8.8-1.5 2-1.5 3.5h-3c0-1.5-.7-2.7-1.5-3.5z" fill="#f39c12" fill-opacity="0.15"/></svg> <em>"${lvl.discovery.analogy}"</em></div>` : ''}
      `;
      list.appendChild(card);
    });
  }

  showVictoryScreen() {
    document.getElementById('screen-gameplay').classList.add('hidden');
    document.getElementById('screen-victory').classList.remove('hidden');
  }

  toggleSound() {
    const isMuted = window.soundEngine.toggleMute();
    document.getElementById('btn-sound-toggle').innerHTML = isMuted ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="rq-icon btn-icon"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="16" y1="9" x2="22" y2="15"/><line x1="22" y1="9" x2="16" y2="15"/></svg> Sound Off` : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="rq-icon btn-icon"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/></svg> Sound On`;
  }

  toggleAdvancedInfo() {
    window.soundEngine?.click?.();
    const panel = document.getElementById('advanced-panel');
    const btn = document.getElementById('btn-advanced-toggle');
    if (panel) {
      const isHidden = panel.classList.toggle('hidden');
      if (btn) {
        btn.innerHTML = isHidden ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="rq-icon btn-icon"><path d="M6 18h12M10 21h4"/><circle cx="12" cy="7" r="3"/><path d="M12 10v4M9 14h6"/><path d="M7 18a5 5 0 0 1 10 0"/></svg> Show Advanced Tech Explanation` : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="rq-icon btn-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> Hide Advanced Tech Explanation`;
      }
    }
  }
}

window.GameController = GameController;

window.startGame = function() {
  if (window.game) {
    window.game.startGame();
  } else {
    document.getElementById('screen-landing')?.classList.add('hidden');
    document.getElementById('screen-story-intro')?.classList.remove('hidden');
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) {}
  }
};

window.beginLevel1 = function() {
  if (window.game) {
    window.game.beginLevel1();
  } else {
    document.getElementById('screen-story-intro')?.classList.add('hidden');
    document.getElementById('screen-gameplay')?.classList.remove('hidden');
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) {}
  }
};

function initRideQuest() {
  if (!window.game) {
    try {
      window.game = new GameController();
      console.log('RideQuest Engine initialized successfully!');
    } catch (e) {
      console.error('Failed to initialize GameController:', e);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRideQuest);
} else {
  initRideQuest();
}

