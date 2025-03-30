document.addEventListener("DOMContentLoaded", function () {
    function addComment() {
        const name = document.getElementById('name').value.trim();
        const comment = document.getElementById('comment').value.trim();

        if (name && comment) {
            const commentSection = document.getElementById('commentsDisplay');

            // Create a new div for the comment
            const newComment = document.createElement('div');
            newComment.innerHTML = `<p><strong>${name}:</strong> ${comment}</p>`;
            newComment.style.padding = "10px";
            newComment.style.backgroundColor = "#fff";
            newComment.style.borderRadius = "5px";
            newComment.style.marginTop = "10px";
            newComment.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)";

            // Append the new comment to the comments section
            commentSection.appendChild(newComment);

            // Clear input fields after submission
            document.getElementById('name').value = "";
            document.getElementById('comment').value = "";
        } else {
            alert("Please enter both name and comment!");
        }
    }

    // Attach the function to the button event
    document.querySelector("button").addEventListener("click", addComment);
});
