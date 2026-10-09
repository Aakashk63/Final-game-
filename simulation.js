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
