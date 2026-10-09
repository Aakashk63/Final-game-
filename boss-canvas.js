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
