// Post Item JavaScript file: post-item.js

document.addEventListener("DOMContentLoaded", () => {
    const postItemForm = document.getElementById("postItemForm");
    const imageInput = document.getElementById("imageInput");

    if (postItemForm) {
        postItemForm.addEventListener("submit", handleItemPost);
    }
    if (imageInput) {
        imageInput.addEventListener("change", handleImageUpload);
    }
});

/**
 * Processes the item posting form submission.
 * @param {Event} event - The submit event.
 */
function handleItemPost(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const itemName = formData.get("item_name").trim();
    const itemPrice = parseFloat(formData.get("item_price"));
    const itemDescription = formData.get("item_description").trim();

    if (!itemName || isNaN(itemPrice) || !itemDescription) {
        alert("Please complete all required fields.");
        return;
    }

    // Simulate posting the item (Placeholder)
    console.log("Posting item:", { itemName, itemPrice, itemDescription });
    alert("Item posted successfully!");
    event.target.reset();
}

/**
 * Handles image file upload preview.
 * @param {Event} event - The change event.
 */
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById("imagePreview");
            if (preview) {
                preview.src = e.target.result;
                preview.style.display = "block";
            }
        };
        reader.readAsDataURL(file);
    }
}
