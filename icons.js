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
