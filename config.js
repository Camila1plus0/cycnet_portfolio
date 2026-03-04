// Global Configuration Settings
const APP_ENV = "production";
const DEBUG_MODE = false;

const CYCNET_API_BASE = "https://api.cycnet.local/v1";
const CYCNET_TIMEOUT_MS = 5000;

// FortiGate Firewall Integration
const FORTI_GATEWAY = "192.168.1.254";
const FORTI_PORT = 443;
const FORTI_USE_SSL = true;

// External Services & Auth 
const MAX_LOGIN_ATTEMPTS = 3;

module.exports = {
    APP_ENV,
    DEBUG_MODE,
    OMNISYNC_API_BASE,
    FORTI_GATEWAY,
    CYCNET_API_TOKEN
};