const DEVICE_TYPE = Object.freeze({
    LAPTOP: "LAPTOP",
    DESKTOP: "DESKTOP",
    MACBOOK: "MACBOOK",
    OTHERS: "OTHERS"
})
const ISSUE_IN = Object.freeze({
    HARDWARE: "HARDWARE",
    SOFTWARE: "SOFTWARE",
    OTHERS: "OTHERS"
})
const ISSUE_TYPE = Object.freeze({
    HARDWARE_REPAIR: "HARDWARE REPAIR",
    HARDWARE_UPGRADE: "HARDWARE UPGRADE",
    HARDWARE_REPLACEMENT: "HARDWARE REPLACEMENT",
    SOFTWARE_INSTALLATION: "SOFTWARE INSTALLATION",
    SOFTWARE_DEVELOPMENT: "SOFTWARE DEVELOPMENT"
})
const HARDWARE_TYPE = Object.freeze({
    RAM: "RAM",
    HARD_DISK: "HARD DISK",
    SSD: "SSD",
    SMPS: "SMPS",
})
const RAISED_VIA = Object.freeze({
    OVER_CALL: "OVER_CALL",
    ONLINE: "ONLINE",
})
const TICKET_STATUS_TYPE = Object.freeze({
    NEW: "NEW",
    DONE: "DONE",
    BLOCKED: "BLOCKED",
    REJECTED: "REJECTED",
})
module.exports = Object.freeze({
    DEVICE_TYPE, ISSUE_IN, ISSUE_TYPE, HARDWARE_TYPE, RAISED_VIA, TICKET_STATUS_TYPE
})