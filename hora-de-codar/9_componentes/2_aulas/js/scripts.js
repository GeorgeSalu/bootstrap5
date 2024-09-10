var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

var popoverList = popoverTriggerList.map(function (popoverTriggerL) {
    return new bootstrap.Popover(popoverTriggerL)
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerL) {
    return new bootstrap.Tooltip(tooltipTriggerL)
})

