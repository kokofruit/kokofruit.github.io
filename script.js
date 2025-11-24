function ToggleVisibility(element_id, turnVisible = null) {
    // find element on page
    var element = document.getElementById(element_id);
    
    // if element exists, set visibility
    if (element) {

        // if turnVisible is provided, use it to decide visibility
        if (turnVisible === true) {
            SetVisible(element);
        }
        else if (turnVisible === false) {
            SetInvisible(element);
            console.log("false");
        }

        // if turnVisible is not provided, set to be the opposite of the current setting
        else if (element.classList.contains("hidden")) {
            SetVisible(element);
        }
        else {
            SetInvisible(element);
        }
    }

    // if element does not exist, print an error
    else console.error("Element not found!");
}

function SetVisible(element) {
    // if element exists
    if (element) {
        // get element classes
        var element_classes = element.classList;
        // if already contains descriptor, just replace it
        if (element_classes.contains("hidden")) {
            element_classes.replace("hidden", "shown");
        }
        // otherwise add it if not already added
        else if (!element_classes.contains("shown")) {
            element_classes.add("shown")
        }
    }
}

function SetInvisible(element) {
    // if element exists
    if (element) {
        // get element classes
        var element_classes = element.classList;
        // if already contains descriptor, just replace it
        if (element_classes.contains("shown")) {
            element_classes.replace("shown", "hidden");
        }
        // otherwise add it if not already added
        else if (!element_classes.contains("hidden")) {
            element_classes.add("hidden")
        }
    }
}
