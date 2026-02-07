// script.js - Complete solution with ALL CSS and JavaScript
// This script MUST be placed at the end of the body tag

// ======================
// STEP 1: INJECT ALL CSS
// ======================
const style = document.createElement('style');
style.textContent = `
    /* CSS Reset & Base Styles */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :root {
        --primary-color: #1a3a6c;
        --secondary-color: #e63946;
        --accent-color: #2a9d8f;
        --light-color: #f8f9fa;
        --dark-color: #212529;
        --success-color: #28a745;
        --warning-color: #ffc107;
        --danger-color: #dc3545;
        --gray-color: #6c757d;
        --border-radius: 8px;
        --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        --transition: all 0.3s ease;
    }
    
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: var(--dark-color);
        background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    
    /* Layout */
    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    header {
        background: linear-gradient(120deg, var(--primary-color), #0d2a52);
        color: white;
        padding: 1.5rem 0;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        position: sticky;
        top: 0;
        z-index: 1000;
    }
    
    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .logo {
        font-size: 1.8rem;
        font-weight: 700;
        display: flex;
        align-items: center;
    }
    
    .logo-icon {
        margin-right: 10px;
        font-size: 2.2rem;
    }
    
    nav {
        background-color: white;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        position: sticky;
        top: 70px;
        z-index: 999;
    }
    
    .nav-container {
        display: flex;
        justify-content: center;
    }
    
    .nav-menu {
        display: flex;
        list-style: none;
        padding: 0.5rem 0;
    }
    
    .nav-item {
        margin: 0 5px;
    }
    
    .nav-link {
        padding: 0.75rem 1.25rem;
        text-decoration: none;
        color: var(--primary-color);
        font-weight: 600;
        border-radius: var(--border-radius);
        transition: var(--transition);
        display: block;
        text-align: center;
        min-width: 100px;
    }
    
    .nav-link:hover, .nav-link.active {
        background-color: var(--primary-color);
        color: white;
    }
    
    .nav-link.js-hover {
        background-color: var(--accent-color) !important;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    
    main {
        flex: 1;
        padding: 2.5rem 0;
        min-height: calc(100vh - 250px);
    }
    
    .section {
        display: none;
        animation: fadeIn 0.5s ease;
    }
    
    .section.active {
        display: block;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    footer {
        background: linear-gradient(120deg, var(--primary-color), #0d2a52);
        color: rgba(255, 255, 255, 0.85);
        text-align: center;
        padding: 1.5rem 0;
        margin-top: auto;
        font-size: 0.9rem;
    }
    
    /* Home Section */
    .hero {
        text-align: center;
        padding: 3rem 1.5rem;
        background: linear-gradient(rgba(26, 58, 108, 0.85), rgba(13, 42, 82, 0.9)), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%231a3a6c"/><path d="M0,50 L100,50 L100,100 L0,100 Z" fill="%230d2a52"/></svg>');
        background-size: cover;
        color: white;
        border-radius: var(--border-radius);
        margin-bottom: 2.5rem;
        box-shadow: var(--box-shadow);
    }
    
    .hero h1 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .hero p {
        font-size: 1.5rem;
        max-width: 800px;
        margin: 0 auto 2rem;
        opacity: 0.9;
    }
    
    .instructions {
        background-color: white;
        border-radius: var(--border-radius);
        padding: 2rem;
        box-shadow: var(--box-shadow);
        margin-top: 2rem;
    }
    
    .instructions h2 {
        text-align: center;
        margin-bottom: 1.5rem;
        color: var(--primary-color);
        position: relative;
        padding-bottom: 0.5rem;
    }
    
    .instructions h2::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background-color: var(--accent-color);
    }
    
    .steps {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 1.5rem;
    }
    
    .step {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
    }
    
    .step-number {
        background-color: var(--primary-color);
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-weight: bold;
        margin-top: 4px;
    }
    
    /* Services Section - Traffic Monitor */
    .traffic-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .traffic-form-container, .traffic-result-container {
        background-color: white;
        border-radius: var(--border-radius);
        padding: 2rem;
        box-shadow: var(--box-shadow);
    }
    
    .form-title {
        text-align: center;
        margin-bottom: 1.5rem;
        color: var(--primary-color);
        font-size: 1.8rem;
    }
    
    .form-group {
        margin-bottom: 1.5rem;
    }
    
    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: var(--dark-color);
    }
    
    select, input, textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 2px solid #ddd;
        border-radius: var(--border-radius);
        font-size: 1rem;
        transition: var(--transition);
    }
    
    select:focus, input:focus, textarea:focus {
        outline: none;
        border-color: var(--accent-color);
        box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.2);
    }
    
    .route-selector {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .route-row {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    @media (min-width: 768px) {
        .route-row {
            flex-direction: row;
            align-items: center;
            gap: 1rem;
        }
        .route-row > div {
            flex: 1;
        }
    }
    
    .btn {
        background-color: var(--primary-color);
        color: white;
        border: none;
        padding: 0.85rem 1.5rem;
        font-size: 1.1rem;
        font-weight: 600;
        border-radius: var(--border-radius);
        cursor: pointer;
        transition: var(--transition);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    
    .btn:hover {
        background-color: #0d2a52;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    
    .btn:active {
        transform: translateY(0);
    }
    
    .btn-accent {
        background-color: var(--accent-color);
    }
    
    .btn-accent:hover {
        background-color: #21867a;
    }
    
    .btn-warning {
        background-color: var(--warning-color);
        color: var(--dark-color);
    }
    
    .btn-warning:hover {
        background-color: #e0a800;
    }
    
    .btn-danger {
        background-color: var(--danger-color);
    }
    
    .btn-danger:hover {
        background-color: #c82333;
    }
    
    .btn-block {
        display: block;
        width: 100%;
    }
    
    .result-container {
        margin-top: 1.5rem;
        padding: 1.5rem;
        border-radius: var(--border-radius);
        background-color: #f8f9fa;
        border-left: 4px solid var(--accent-color);
        display: none;
    }
    
    .result-container.show {
        display: block;
        animation: slideDown 0.4s ease;
    }
    
    @keyframes slideDown {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .result-title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--primary-color);
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .result-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-top: 1rem;
    }
    
    .result-item {
        background-color: white;
        border-radius: var(--border-radius);
        padding: 1.25rem;
        box-shadow: var(--box-shadow);
        text-align: center;
        transition: var(--transition);
    }
    
    .result-item:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    
    .result-label {
        font-weight: 600;
        color: var(--gray-color);
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
    }
    
    .result-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary-color);
    }
    
    .traffic-level {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-weight: 600;
        margin-top: 0.5rem;
    }
    
    .traffic-low {
        background-color: #d4edda;
        color: #155724;
    }
    
    .traffic-medium {
        background-color: #fff3cd;
        color: #856404;
    }
    
    .traffic-high {
        background-color: #f8d7da;
        color: #721c24;
    }
    
    .accidents-list {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid #eee;
    }
    
    .accident-item {
        background-color: #fff5f5;
        border-left: 3px solid var(--danger-color);
        padding: 0.75rem;
        margin-top: 0.5rem;
        border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }
    
    .favorites-section {
        margin-top: 2.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid #eee;
    }
    
    .favorites-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        color: var(--primary-color);
    }
    
    .favorite-route {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #f8f9fa;
        border-radius: var(--border-radius);
        margin-bottom: 0.75rem;
        border: 1px solid #eee;
        transition: var(--transition);
    }
    
    .favorite-route:hover {
        background-color: #e9ecef;
        transform: translateX(5px);
    }
    
    .favorite-details {
        font-weight: 500;
    }
    
    .delete-favorite {
        background-color: var(--danger-color);
        color: white;
        border: none;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor: pointer;
        transition: var(--transition);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }
    
    .delete-favorite:hover {
        background-color: #c82333;
        transform: scale(1.1);
    }
    
    .no-favorites {
        text-align: center;
        padding: 1.5rem;
        color: var(--gray-color);
        font-style: italic;
    }
    
    .alternate-routes {
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid #eee;
    }
    
    .route-suggestion {
        background-color: #e7f3ff;
        border-left: 4px solid var(--primary-color);
        padding: 1rem;
        border-radius: 0 var(--border-radius) var(--border-radius) 0;
        margin-top: 0.75rem;
    }
    
    /* Help Section */
    .help-container {
        max-width: 800px;
        margin: 0 auto;
        background-color: white;
        border-radius: var(--border-radius);
        padding: 2.5rem;
        box-shadow: var(--box-shadow);
    }
    
    .form-row {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }
    
    @media (min-width: 768px) {
        .form-row {
            flex-direction: row;
            gap: 1.5rem;
        }
        .form-row > div {
            flex: 1;
        }
    }
    
    .error {
        color: var(--danger-color);
        font-size: 0.85rem;
        margin-top: 0.25rem;
        display: none;
    }
    
    .error.show {
        display: block;
        animation: shake 0.3s;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-3px); }
        75% { transform: translateX(3px); }
    }
    
    .success-message {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
        border-radius: var(--border-radius);
        padding: 1rem;
        margin-top: 1.5rem;
        text-align: center;
        display: none;
    }
    
    .success-message.show {
        display: block;
        animation: fadeIn 0.4s;
    }
    
    /* About Section */
    .about-container {
        max-width: 800px;
        margin: 0 auto;
        background-color: white;
        border-radius: var(--border-radius);
        padding: 2.5rem;
        box-shadow: var(--box-shadow);
        text-align: center;
    }
    
    .about-title {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        color: var(--primary-color);
        position: relative;
        display: inline-block;
    }
    
    .about-title::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 70px;
        height: 4px;
        background-color: var(--accent-color);
        border-radius: 2px;
    }
    
    .student-info {
        margin-top: 2rem;
        text-align: left;
        line-height: 2.2;
    }
    
    .info-item {
        display: flex;
        margin-bottom: 0.75rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px dashed #ddd;
    }
    
    .info-label {
        font-weight: 700;
        min-width: 150px;
        color: var(--primary-color);
    }
    
    .info-value {
        flex: 1;
        color: var(--dark-color);
    }
    
    /* Real-time Traffic Animation */
    .traffic-animation {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
        height: 60px;
        position: relative;
        background-color: #e9ecef;
        border-radius: var(--border-radius);
        overflow: hidden;
    }
    
    .car {
        position: absolute;
        font-size: 1.5rem;
        animation: drive 15s linear infinite;
    }
    
    @keyframes drive {
        0% { left: -10%; }
        100% { left: 110%; }
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
        .header-content {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
        }
        
        .nav-container {
            width: 100%;
            overflow-x: auto;
        }
        
        .nav-menu {
            justify-content: flex-start;
            padding: 0.5rem;
            white-space: nowrap;
        }
        
        .hero h1 {
            font-size: 2.5rem;
        }
        
        .hero p {
            font-size: 1.25rem;
        }
        
        main {
            padding: 1.5rem 0;
        }
        
        .traffic-form-container, .traffic-result-container, .help-container, .about-container {
            padding: 1.5rem;
        }
        
        .form-title {
            font-size: 1.5rem;
        }
        
        .btn {
            padding: 0.75rem 1.25rem;
            font-size: 1rem;
        }
        
        .result-grid {
            grid-template-columns: 1fr;
        }
    }
    
    @media (max-width: 480px) {
        .nav-menu {
            flex-wrap: wrap;
        }
        
        .nav-item {
            margin: 5px;
        }
        
        .nav-link {
            padding: 0.6rem 0.8rem;
            min-width: auto;
            font-size: 0.9rem;
        }
        
        .hero {
            padding: 2rem 1rem;
        }
        
        .hero h1 {
            font-size: 2rem;
        }
        
        .instructions, .traffic-container {
            padding: 0 10px;
        }
        
        .step-number {
            width: 24px;
            height: 24px;
            font-size: 0.85rem;
        }
    }
    
    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
        * {
            transition: none !important;
            animation: none !important;
        }
    }
    
    /* Loading Animation */
    .loading {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 3px solid rgba(42, 157, 143, 0.3);
        border-radius: 50%;
        border-top-color: var(--accent-color);
        animation: spin 1s linear infinite;
        margin-right: 10px;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    .loading-btn {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    /* Section padding adjustments */
    .section {
        padding: 0 15px;
    }
    
    @media (min-width: 768px) {
        .section {
            padding: 0;
        }
    }
`;
document.head.appendChild(style);

// ======================
// STEP 2: BUILD HTML STRUCTURE
// ======================
document.body.innerHTML = `
    <header>
        <div class="container header-content">
            <div class="logo">
                <span class="logo-icon">🚦</span>
                <span>Real-Time Traffic Monitor</span>
            </div>
            <div class="tagline">Stay Informed, Travel Smart</div>
        </div>
    </header>
    
    <nav>
        <div class="container nav-container">
            <ul class="nav-menu">
                <li class="nav-item"><a href="#" class="nav-link active" data-section="home">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link" data-section="services">Services</a></li>
                <li class="nav-item"><a href="#" class="nav-link" data-section="help">Help</a></li>
                <li class="nav-item"><a href="#" class="nav-link" data-section="about">About</a></li>
            </ul>
        </div>
    </nav>
    
    <main class="container">
        <!-- Home Section -->
        <section id="home-section" class="section active">
            <div class="hero">
                <h1>Smart Traffic Management System</h1>
                <p>Get real-time traffic updates, route planning, and travel time estimates across major Somali regions</p>
                <button id="get-started-btn" class="btn btn-accent">
                    <span>Get Started</span>
                </button>
            </div>
            
            <div class="instructions">
                <h2>How to Use the Traffic Monitor</h2>
                <div class="steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div>Select your starting location and destination from the dropdown menus in the Services section</div>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <div>Click the "Check Traffic Status" button to get real-time traffic information</div>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <div>Review travel time, checkpoints, traffic conditions, and alternate route suggestions</div>
                    </div>
                    <div class="step">
                        <div class="step-number">4</div>
                        <div>Save important routes to your favorites for quick access later</div>
                    </div>
                </div>
            </div>
            
            <div class="traffic-animation" id="traffic-animation">
                <!-- Cars will be dynamically added here -->
            </div>
        </section>
        
        <!-- Services Section -->
        <section id="services-section" class="section">
            <div class="traffic-container">
                <div class="traffic-form-container">
                    <h2 class="form-title">Check Traffic Status</h2>
                    <div class="route-selector">
                        <div class="route-row">
                            <div class="form-group">
                                <label for="from-region">From Region</label>
                                <select id="from-region" class="form-control">
                                    <option value="">Select starting region</option>
                                    <option value="Mogadishu">Mogadishu</option>
                                    <option value="Kismaayo">Kismaayo</option>
                                    <option value="Bosaso">Bosaso</option>
                                    <option value="Gurceel">Gurceel</option>
                                    <option value="Hargeisa">Hargeisa</option>
                                </select>
                                <div class="error" id="from-error">⚠️ Please select a starting region</div>
                            </div>
                            <div class="form-group">
                                <label for="to-region">To Region</label>
                                <select id="to-region" class="form-control">
                                    <option value="">Select destination region</option>
                                    <option value="Mogadishu">Mogadishu</option>
                                    <option value="Kismaayo">Kismaayo</option>
                                    <option value="Bosaso">Bosaso</option>
                                    <option value="Gurceel">Gurceel</option>
                                    <option value="Hargeisa">Hargeisa</option>
                                </select>
                                <div class="error" id="to-error">⚠️ Please select a destination region</div>
                            </div>
                        </div>
                        <button id="check-traffic-btn" class="btn btn-accent btn-block">
                            <span>Check Traffic Status</span>
                        </button>
                    </div>
                </div>
                
                <div class="traffic-result-container">
                    <div id="traffic-result" class="result-container">
                        <h3 class="result-title">🚦 Route Summary: <span id="route-title">Mogadishu to Kismaayo</span></h3>
                        <div class="result-grid">
                            <div class="result-item">
                                <div class="result-label">Total Distance</div>
                                <div class="result-value" id="distance-result">320 km</div>
                            </div>
                            <div class="result-item">
                                <div class="result-label">Travel Time</div>
                                <div class="result-value" id="time-result">5.5 hours</div>
                            </div>
                            <div class="result-item">
                                <div class="result-label">Checkpoints</div>
                                <div class="result-value" id="checkpoints-result">3</div>
                            </div>
                            <div class="result-item">
                                <div class="result-label">Cars on Route</div>
                                <div class="result-value" id="cars-result">42</div>
                            </div>
                            <div class="result-item">
                                <div class="result-label">Traffic Level</div>
                                <div class="result-value">
                                    <span id="traffic-level-result" class="traffic-medium">Medium</span>
                                </div>
                            </div>
                            <div class="result-item">
                                <div class="result-label">Accidents</div>
                                <div class="result-value" id="accidents-count">1</div>
                            </div>
                        </div>
                        
                        <div class="checkpoints-list">
                            <div class="result-label" style="margin-top: 1.5rem; margin-bottom: 0.75rem;">Checkpoints on Route:</div>
                            <div id="checkpoints-list" class="result-value" style="font-size: 1.2rem; font-weight: 500; color: var(--dark-color);">
                                Afgooye, Control Balcad, Beledweyne
                            </div>
                        </div>
                        
                        <div class="accidents-list">
                            <div class="result-label" style="margin-top: 1.5rem; margin-bottom: 0.75rem;">Current Accidents:</div>
                            <div id="accidents-list">
                                <div class="accident-item">Minor accident near Afgooye checkpoint - delays of approximately 20 minutes</div>
                            </div>
                        </div>
                        
                        <div class="alternate-routes">
                            <div class="result-label" style="margin-bottom: 0.75rem;">Alternate Route Suggestion:</div>
                            <div class="route-suggestion">
                                Consider taking the northern route via Garoowe to avoid congestion at Afgooye checkpoint. This adds 45 km but may save 1 hour during peak traffic.
                            </div>
                        </div>
                        
                        <button id="save-favorite-btn" class="btn btn-warning" style="margin-top: 1.5rem;">
                            Save to Favorites
                        </button>
                    </div>
                </div>
                
                <div class="favorites-section">
                    <div class="favorites-title">
                        <h3>Your Favorite Routes</h3>
                        <button id="clear-favorites-btn" class="btn btn-danger" style="padding: 0.4rem 0.8rem; font-size: 0.9rem;">
                            Clear All
                        </button>
                    </div>
                    <div id="favorites-list">
                        <!-- Favorite routes will be dynamically added here -->
                        <div class="no-favorites">No favorite routes saved yet. Check traffic for a route and click "Save to Favorites" to add one!</div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Help Section -->
        <section id="help-section" class="section">
            <div class="help-container">
                <h2 class="form-title">Get Help</h2>
                <p style="text-align: center; margin-bottom: 1.5rem; color: var(--gray-color);">
                    Have an issue or question? Fill out the form below and our support team will get back to you shortly.
                </p>
                
                <form id="help-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="help-name">Full Name</label>
                            <input type="text" id="help-name" placeholder="Enter your name">
                            <div class="error" id="name-error">⚠️ Please enter your name</div>
                        </div>
                        <div class="form-group">
                            <label for="help-email">Email Address</label>
                            <input type="email" id="help-email" placeholder="Enter your email">
                            <div class="error" id="email-error">⚠️ Please enter a valid email address</div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="help-problem">Problem Description</label>
                        <textarea id="help-problem" rows="5" placeholder="Describe your issue or question in detail"></textarea>
                        <div class="error" id="problem-error">⚠️ Please describe your problem (minimum 10 characters)</div>
                    </div>
                    
                    <button type="submit" id="submit-help-btn" class="btn btn-accent btn-block">
                        <span>Submit Request</span>
                    </button>
                </form>
                
                <div id="help-success" class="success-message">
                    Thank you! Your support request has been successfully submitted. Our team will contact you within 24 hours.
                </div>
            </div>
        </section>
        
        <!-- About Section -->
        <section id="about-section" class="section">
            <div class="about-container">
                <h2 class="about-title">About This Project</h2>
                <p style="margin: 1.5rem 0; line-height: 1.7;">
                    The Real-Time Traffic Monitor is a comprehensive web application designed to provide accurate traffic information across major regions in Somalia. This system helps travelers plan efficient routes, avoid congested areas, and stay informed about road conditions.
                </p>
                <p style="margin-bottom: 2rem; line-height: 1.7;">
                    Developed as part of the CM241 course requirements, this project demonstrates advanced JavaScript capabilities including DOM manipulation, event handling, form validation, and responsive design principles.
                </p>
                
                <div class="student-info">
                    <div class="info-item">
                        <div class="info-label">Student Name:</div>
                        <div class="info-value">Yahye Abdulahi Ahmed</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Student ID:</div>
                        <div class="info-value">C5240018</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Phone Number:</div>
                        <div class="info-value">061287128</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Class Name:</div>
                        <div class="info-value">CM241</div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    <footer>
        <div class="container">
            <p>Real-Time Traffic Monitor &copy; 2026 | Developed by Yahye Abdulahi Ahmed (C5240018) for CM241 Course</p>
            <p style="margin-top: 8px; font-size: 0.85rem; opacity: 0.8;">This is a simulated traffic system for educational purposes. All traffic data is dynamically generated.</p>
        </div>
    </footer>
`;

// ======================
// STEP 3: JAVASCRIPT FUNCTIONALITY
// ======================

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const getStartedBtn = document.getElementById('get-started-btn');
const checkTrafficBtn = document.getElementById('check-traffic-btn');
const saveFavoriteBtn = document.getElementById('save-favorite-btn');
const clearFavoritesBtn = document.getElementById('clear-favorites-btn');
const helpForm = document.getElementById('help-form');
const helpSuccess = document.getElementById('help-success');
const trafficAnimation = document.getElementById('traffic-animation');
const fromRegion = document.getElementById('from-region');
const toRegion = document.getElementById('to-region');
const fromError = document.getElementById('from-error');
const toError = document.getElementById('to-error');

// Traffic Data Simulation
const regions = ["Mogadishu", "Kismaayo", "Bosaso", "Gurceel", "Hargeisa"];
const checkpoints = ["Control Balcad", "Afgooye", "Beledweyne", "Garoowe"];

// Route database with predefined data
const routeDatabase = {
    "Mogadishu-Kismaayo": {
        distance: 320,
        hours: 5.5,
        checkpoints: ["Afgooye", "Control Balcad"],
        baseCars: 45,
        accidents: ["Minor accident near Afgooye checkpoint - delays of approximately 20 minutes"]
    },
    "Mogadishu-Bosaso": {
        distance: 850,
        hours: 14,
        checkpoints: ["Control Balcad", "Beledweyne", "Garoowe"],
        baseCars: 30,
        accidents: ["Road construction near Beledweyne - expect delays of 45 minutes"]
    },
    "Mogadishu-Gurceel": {
        distance: 420,
        hours: 7,
        checkpoints: ["Afgooye", "Control Balcad"],
        baseCars: 25,
        accidents: []
    },
    "Mogadishu-Hargeisa": {
        distance: 900,
        hours: 15,
        checkpoints: ["Afgooye", "Beledweyne"],
        baseCars: 60,
        accidents: ["Major accident 30km from Hargeisa - road partially blocked", "Police checkpoint near Beledweyne causing delays"]
    },
    "Kismaayo-Bosaso": {
        distance: 1100,
        hours: 18.5,
        checkpoints: ["Control Balcad", "Garoowe"],
        baseCars: 20,
        accidents: ["Flooding on southern section of road - use caution"]
    },
    "Kismaayo-Gurceel": {
        distance: 580,
        hours: 9.5,
        checkpoints: ["Afgooye"],
        baseCars: 35,
        accidents: []
    },
    "Kismaayo-Hargeisa": {
        distance: 1050,
        hours: 17,
        checkpoints: ["Afgooye", "Beledweyne"],
        baseCars: 40,
        accidents: ["Livestock on road near Afgooye - drive carefully"]
    },
    "Bosaso-Gurceel": {
        distance: 780,
        hours: 13,
        checkpoints: ["Garoowe", "Beledweyne"],
        baseCars: 28,
        accidents: ["Road closure for repairs between Garoowe and Beledweyne - detour in place"]
    },
    "Bosaso-Hargeisa": {
        distance: 650,
        hours: 11,
        checkpoints: ["Garoowe"],
        baseCars: 50,
        accidents: ["Heavy traffic near Hargeisa due to market day"]
    },
    "Gurceel-Hargeisa": {
        distance: 720,
        hours: 12,
        checkpoints: ["Beledweyne", "Afgooye"],
        baseCars: 32,
        accidents: ["Minor collision near Beledweyne - slow traffic"]
    }
};

// Favorites storage (simulating CRUD operations)
let favorites = JSON.parse(localStorage.getItem('trafficFavorites')) || [];
let currentRouteKey = null;
let trafficUpdateInterval = null;
let carAnimationInterval = null;

// ======================
// EVENT LISTENERS (Demonstrating all required events)
// ======================

// 1. CLICK EVENT - Navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active navigation link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Show selected section
        const targetSection = link.getAttribute('data-section');
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === `${targetSection}-section`) {
                section.classList.add('active');
            }
        });
        
        // Special handling for sections
        if (targetSection === 'services') {
            // Clear previous traffic results when entering services section
            document.getElementById('traffic-result').classList.remove('show');
            resetFavoriteButton();
        } else if (targetSection === 'home') {
            // Restart traffic animation when returning to home
            startTrafficAnimation();
        } else {
            // Stop traffic animation when leaving home section
            stopTrafficAnimation();
        }
        
        // Reset help form when leaving help section
        if (targetSection !== 'help') {
            helpForm.reset();
            helpSuccess.classList.remove('show');
            clearFormErrors();
        }
    });
});

// 2. CLICK EVENT - Get Started Button (Home Section)
getStartedBtn.addEventListener('click', () => {
    // Navigate to Services section
    navLinks.forEach(l => {
        if (l.getAttribute('data-section') === 'services') {
            l.click();
        }
    });
    
    // Scroll to form
    document.querySelector('.traffic-form-container').scrollIntoView({ behavior: 'smooth' });
});

// 3. CLICK EVENT - Check Traffic Button
checkTrafficBtn.addEventListener('click', () => {
    validateAndCheckTraffic();
});

// 4. CLICK EVENT - Save Favorite Button
saveFavoriteBtn.addEventListener('click', () => {
    if (currentRouteKey) {
        // CRUD: CREATE favorite
        if (!favorites.some(fav => fav.routeKey === currentRouteKey)) {
            const [from, to] = currentRouteKey.split('-');
            favorites.push({
                id: Date.now(),
                routeKey: currentRouteKey,
                from: from,
                to: to,
                savedAt: new Date().toISOString()
            });
            
            // Save to localStorage (simulating persistent storage)
            localStorage.setItem('trafficFavorites', JSON.stringify(favorites));
            
            // Update favorites display
            renderFavorites();
            
            // Show feedback
            saveFavoriteBtn.innerHTML = '<span>✓ Saved to Favorites!</span>';
            saveFavoriteBtn.disabled = true;
            setTimeout(() => {
                resetFavoriteButton();
            }, 2000);
            
            // Show success animation
            saveFavoriteBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                saveFavoriteBtn.style.transform = '';
            }, 300);
        } else {
            // Show feedback if already saved
            saveFavoriteBtn.innerHTML = '<span>Already Saved!</span>';
            saveFavoriteBtn.disabled = true;
            setTimeout(() => {
                resetFavoriteButton();
            }, 1500);
        }
    }
});

// 5. CLICK EVENT - Clear Favorites Button
clearFavoritesBtn.addEventListener('click', () => {
    if (favorites.length > 0) {
        // Show confirmation dialog (simulated)
        if (confirm('Are you sure you want to clear all favorite routes?')) {
            // CRUD: DELETE all favorites
            favorites = [];
            localStorage.removeItem('trafficFavorites');
            renderFavorites();
            
            // Show feedback
            clearFavoritesBtn.innerHTML = '<span>✓ Cleared!</span>';
            setTimeout(() => {
                clearFavoritesBtn.innerHTML = 'Clear All';
            }, 1500);
        }
    }
});

// 6. SUBMIT EVENT - Help Form
helpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateHelpForm()) {
        // Simulate form submission with loading state
        const submitBtn = document.getElementById('submit-help-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loading"></span>Submitting...';
        
        // Simulate network request delay
        setTimeout(() => {
            // CRUD: CREATE support ticket (simulated)
            console.log('Support ticket created successfully');
            
            // Show success message
            helpSuccess.classList.add('show');
            
            // Reset form
            helpForm.reset();
            clearFormErrors();
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                helpSuccess.classList.remove('show');
            }, 5000);
        }, 1500);
    }
});

// 7. CHANGE EVENT - Region Selectors (FIXED - Prevent same region selection)
fromRegion.addEventListener('change', () => {
    fromError.classList.remove('show');
    
    // Clear error if no selection
    if (!fromRegion.value) {
        return;
    }
    
    // Check if same region is selected
    if (toRegion.value && fromRegion.value === toRegion.value) {
        toError.textContent = "❌ Starting point and destination cannot be the same!";
        toError.classList.add('show');
        // Clear the "to" selection to force user to choose different region
        toRegion.value = '';
    } else {
        toError.classList.remove('show');
    }
});

toRegion.addEventListener('change', () => {
    toError.classList.remove('show');
    
    // Clear error if no selection
    if (!toRegion.value) {
        return;
    }
    
    // Check if same region is selected
    if (fromRegion.value && fromRegion.value === toRegion.value) {
        fromError.textContent = "❌ Starting point and destination cannot be the same!";
        fromError.classList.add('show');
        // Clear the "from" selection to force user to choose different region
        fromRegion.value = '';
    } else {
        fromError.classList.remove('show');
    }
});

// 8. KEYUP EVENT - Help Form Validation
document.getElementById('help-name').addEventListener('keyup', (e) => {
    if (e.target.value.length > 2) {
        document.getElementById('name-error').classList.remove('show');
    }
});

document.getElementById('help-email').addEventListener('keyup', (e) => {
    if (isValidEmail(e.target.value)) {
        document.getElementById('email-error').classList.remove('show');
    }
});

document.getElementById('help-problem').addEventListener('keyup', (e) => {
    if (e.target.value.length > 10) {
        document.getElementById('problem-error').classList.remove('show');
    }
});

// 9. MOUSEOVER & MOUSEOUT EVENTS - Navigation Links
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('js-hover');
    });
    
    link.addEventListener('mouseout', () => {
        link.classList.remove('js-hover');
    });
});

// Additional mouseover for favorite routes
document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('favorite-route')) {
        e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('favorite-route')) {
        e.target.style.boxShadow = '';
    }
});

// Event delegation for delete favorite buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-favorite')) {
        const routeId = parseInt(e.target.closest('.favorite-route').dataset.id);
        // CRUD: DELETE single favorite
        favorites = favorites.filter(fav => fav.id !== routeId);
        localStorage.setItem('trafficFavorites', JSON.stringify(favorites));
        renderFavorites();
    }
});

// ======================
// CORE FUNCTIONALITY
// ======================

// Initialize the application
function initApp() {
    // Render favorites on load
    renderFavorites();
    
    // Start traffic animation on home page
    if (document.getElementById('home-section').classList.contains('active')) {
        startTrafficAnimation();
    }
    
    // Set up real-time traffic updates
    setupRealTimeUpdates();
}

// Validate and check traffic (FIXED - Enhanced validation)
function validateAndCheckTraffic() {
    let isValid = true;
    
    // Reset errors
    fromError.classList.remove('show');
    toError.classList.remove('show');
    
    // Validate from region
    if (!fromRegion.value) {
        fromError.textContent = "⚠️ Please select a starting region";
        fromError.classList.add('show');
        isValid = false;
    }
    
    // Validate to region
    if (!toRegion.value) {
        toError.textContent = "⚠️ Please select a destination region";
        toError.classList.add('show');
        isValid = false;
    }
    
    // CRITICAL FIX: Validate regions are not the same
    if (fromRegion.value && toRegion.value && fromRegion.value === toRegion.value) {
        fromError.textContent = "❌ Starting point and destination cannot be the same!";
        toError.textContent = "❌ Starting point and destination cannot be the same!";
        fromError.classList.add('show');
        toError.classList.add('show');
        isValid = false;
    }
    
    if (isValid) {
        // Show loading state
        const originalText = checkTrafficBtn.innerHTML;
        checkTrafficBtn.disabled = true;
        checkTrafficBtn.innerHTML = '<span class="loading"></span>Checking...';
        
        // Simulate API delay
        setTimeout(() => {
            checkTrafficStatus();
            checkTrafficBtn.disabled = false;
            checkTrafficBtn.innerHTML = originalText;
        }, 800);
    } else {
        // Scroll to form if validation fails
        document.querySelector('.traffic-form-container').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Check traffic status and display results
function checkTrafficStatus() {
    const from = fromRegion.value;
    const to = toRegion.value;
    
    // Create route key (alphabetically sorted to handle both directions)
    const routeKey = [from, to].sort().join('-');
    currentRouteKey = routeKey;
    
    // Get route data (use predefined or generate simulated data)
    let routeData = routeDatabase[routeKey] || generateSimulatedRoute(from, to);
    
    // Update DOM with route information
    document.getElementById('route-title').textContent = `${from} to ${to}`;
    document.getElementById('distance-result').textContent = `${routeData.distance} km`;
    document.getElementById('time-result').textContent = `${routeData.hours} hours`;
    document.getElementById('checkpoints-result').textContent = routeData.checkpoints.length;
    document.getElementById('checkpoints-list').textContent = routeData.checkpoints.join(', ');
    
    // Simulate real-time car count (with some variation)
    const carCount = routeData.baseCars + Math.floor(Math.random() * 15) - 5;
    document.getElementById('cars-result').textContent = Math.max(5, carCount); // Ensure minimum 5 cars
    
    // Determine traffic level based on cars and accidents
    const trafficLevel = getTrafficLevel(carCount, routeData.accidents.length);
    const trafficLevelEl = document.getElementById('traffic-level-result');
    trafficLevelEl.textContent = trafficLevel.label;
    trafficLevelEl.className = `traffic-${trafficLevel.class}`;
    
    // Display accidents
    const accidentsListEl = document.getElementById('accidents-list');
    const accidentsCountEl = document.getElementById('accidents-count');
    
    if (routeData.accidents.length > 0) {
        accidentsListEl.innerHTML = routeData.accidents.map(accident => 
            `<div class="accident-item">${accident}</div>`
        ).join('');
        accidentsCountEl.textContent = routeData.accidents.length;
    } else {
        accidentsListEl.innerHTML = '<div class="accident-item" style="background-color: #e8f5e9; border-left-color: var(--success-color); color: #155724;">No accidents reported on this route. Drive safely!</div>';
        accidentsCountEl.textContent = '0';
    }
    
    // Show result container
    document.getElementById('traffic-result').classList.add('show');
    
    // Reset favorite button
    resetFavoriteButton();
    
    // Scroll to results
    document.querySelector('.traffic-result-container').scrollIntoView({ behavior: 'smooth' });
}

// Generate simulated route data for routes not in database
function generateSimulatedRoute(from, to) {
    // Random distance between 200-1000 km
    const distance = Math.floor(Math.random() * 800) + 200;
    // Calculate hours based on distance (average 60 km/h)
    const hours = Math.max(3, Math.round((distance / 60) * 10) / 10);
    
    // Randomly select 1-3 checkpoints
    const numCheckpoints = Math.floor(Math.random() * 3) + 1;
    const shuffledCheckpoints = [...checkpoints].sort(() => 0.5 - Math.random());
    const selectedCheckpoints = shuffledCheckpoints.slice(0, numCheckpoints);
    
    // Base cars based on distance
    const baseCars = Math.floor(distance / 20) + Math.floor(Math.random() * 20);
    
    // Random accidents (0-2)
    const numAccidents = Math.floor(Math.random() * 3);
    const accidents = [];
    const accidentDescriptions = [
        "Minor accident near {checkpoint} checkpoint - delays of approximately 20 minutes",
        "Road construction near {checkpoint} - expect delays of 45 minutes",
        "Heavy traffic near {checkpoint} due to market day",
        "Police checkpoint near {checkpoint} causing delays",
        "Livestock on road near {checkpoint} - drive carefully",
        "Flooding on road near {checkpoint} - use caution",
        "Road closure for repairs near {checkpoint} - detour in place"
    ];
    
    for (let i = 0; i < numAccidents; i++) {
        const checkpoint = selectedCheckpoints[Math.floor(Math.random() * selectedCheckpoints.length)];
        const description = accidentDescriptions[Math.floor(Math.random() * accidentDescriptions.length)]
            .replace("{checkpoint}", checkpoint);
        accidents.push(description);
    }
    
    return {
        distance,
        hours,
        checkpoints: selectedCheckpoints,
        baseCars,
        accidents
    };
}

// Determine traffic level based on conditions
function getTrafficLevel(carCount, accidentCount) {
    const trafficScore = carCount + (accidentCount * 20);
    
    if (trafficScore < 40) {
        return { label: "Low", class: "low" };
    } else if (trafficScore < 70) {
        return { label: "Medium", class: "medium" };
    } else {
        return { label: "High", class: "high" };
    }
}

// Reset favorite button to default state
function resetFavoriteButton() {
    saveFavoriteBtn.innerHTML = 'Save to Favorites';
    saveFavoriteBtn.disabled = false;
    
    // Check if current route is already in favorites
    if (currentRouteKey && favorites.some(fav => fav.routeKey === currentRouteKey)) {
        saveFavoriteBtn.innerHTML = 'Already Saved';
        saveFavoriteBtn.disabled = true;
    }
}

// Render favorites list
function renderFavorites() {
    const favoritesListEl = document.getElementById('favorites-list');
    
    if (favorites.length === 0) {
        favoritesListEl.innerHTML = '<div class="no-favorites">No favorite routes saved yet. Check traffic for a route and click "Save to Favorites" to add one!</div>';
        return;
    }
    
    // Sort favorites by saved date (newest first)
    const sortedFavorites = [...favorites].sort((a, b) => 
        new Date(b.savedAt) - new Date(a.savedAt)
    );
    
    favoritesListEl.innerHTML = sortedFavorites.map(fav => {
        const routeName = `${fav.from} → ${fav.to}`;
        return `
            <div class="favorite-route" data-id="${fav.id}">
                <div class="favorite-details">${routeName}</div>
                <button class="delete-favorite" title="Remove from favorites">✕</button>
            </div>
        `;
    }).join('');
}

// Validate help form
function validateHelpForm() {
    let isValid = true;
    const name = document.getElementById('help-name').value.trim();
    const email = document.getElementById('help-email').value.trim();
    const problem = document.getElementById('help-problem').value.trim();
    
    // Reset errors
    clearFormErrors();
    
    // Validate name
    if (name.length < 3) {
        document.getElementById('name-error').classList.add('show');
        isValid = false;
    }
    
    // Validate email
    if (!isValidEmail(email)) {
        document.getElementById('email-error').classList.add('show');
        isValid = false;
    }
    
    // Validate problem description
    if (problem.length < 10) {
        document.getElementById('problem-error').classList.add('show');
        isValid = false;
    }
    
    return isValid;
}

// Clear all form errors
function clearFormErrors() {
    document.querySelectorAll('.error').forEach(el => {
        el.classList.remove('show');
    });
}

// Validate email format
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Start traffic animation on home page
function startTrafficAnimation() {
    // Clear any existing animation
    stopTrafficAnimation();
    
    // Create cars for animation
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createCar();
        }, i * 300);
    }
    
    // Continue adding cars periodically
    carAnimationInterval = setInterval(createCar, 2000);
}

// Stop traffic animation
function stopTrafficAnimation() {
    if (carAnimationInterval) {
        clearInterval(carAnimationInterval);
        carAnimationInterval = null;
    }
    trafficAnimation.innerHTML = '';
}

// Create a car for animation
function createCar() {
    const car = document.createElement('div');
    car.className = 'car';
    car.innerHTML = '🚗';
    car.style.top = `${Math.random() * 30 + 15}%`;
    car.style.animationDuration = `${Math.random() * 10 + 10}s`;
    car.style.fontSize = `${Math.random() * 0.5 + 1}rem`;
    trafficAnimation.appendChild(car);
    
    // Remove car after animation completes
    setTimeout(() => {
        car.remove();
    }, 15000);
}

// Setup real-time traffic updates
function setupRealTimeUpdates() {
    // This function would set up background updates for traffic data
    // For this simulation, we'll update the car count and accidents periodically when a route is displayed
    setInterval(() => {
        if (currentRouteKey && document.getElementById('traffic-result').classList.contains('show')) {
            updateRealTimeTraffic();
        }
    }, 5000);
}

// Update real-time traffic data
function updateRealTimeTraffic() {
    const carsResultEl = document.getElementById('cars-result');
    const accidentsListEl = document.getElementById('accidents-list');
    const accidentsCountEl = document.getElementById('accidents-count');
    
    if (!carsResultEl) return;
    
    // Update car count with small variation
    let currentCars = parseInt(carsResultEl.textContent);
    currentCars += Math.floor(Math.random() * 5) - 2; // -2 to +2 variation
    currentCars = Math.max(5, currentCars); // Ensure minimum 5 cars
    carsResultEl.textContent = currentCars;
    
    // Update traffic level based on new car count
    const routeData = routeDatabase[currentRouteKey] || generateSimulatedRoute(...currentRouteKey.split('-'));
    const trafficLevel = getTrafficLevel(currentCars, routeData.accidents.length);
    const trafficLevelEl = document.getElementById('traffic-level-result');
    trafficLevelEl.textContent = trafficLevel.label;
    trafficLevelEl.className = `traffic-${trafficLevel.class}`;
    
    // Occasionally update accidents (20% chance)
    if (Math.random() < 0.2) {
        if (routeData.accidents.length > 0 && Math.random() < 0.7) {
            // Show existing accidents
            accidentsListEl.innerHTML = routeData.accidents.map(accident => 
                `<div class="accident-item">${accident}</div>`
            ).join('');
            accidentsCountEl.textContent = routeData.accidents.length;
        } else {
            // Show no accidents message
            accidentsListEl.innerHTML = '<div class="accident-item" style="background-color: #e8f5e9; border-left-color: var(--success-color); color: #155724;">No accidents reported on this route. Drive safely!</div>';
            accidentsCountEl.textContent = '0';
        }
    }
}

// ======================
// INITIALIZE APPLICATION
// ======================
initApp();

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (trafficUpdateInterval) clearInterval(trafficUpdateInterval);
    if (carAnimationInterval) clearInterval(carAnimationInterval);
});