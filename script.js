function displayComment() {
    var name = document.getElementById("user-name").value;
    var group = document.getElementById("user-group").value;
    var comment = document.getElementById("user-comment").value;

    var resultDiv = document.getElementById("comment-results");

    var newComment = document.createElement("div");
    newComment.className = "comment";

    var commentHeader = document.createElement("h3");
    commentHeader.textContent = "Testimoni:";

    var nameParagraph = document.createElement("p");
    nameParagraph.innerHTML = "<strong>Nama:</strong> " + name;

    var groupParagraph = document.createElement("p");
    groupParagraph.innerHTML = "<strong>Group:</strong> " + group;

    var commentParagraph = document.createElement("p");
    commentParagraph.innerHTML = "<strong>Komentar:</strong> " + comment;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", function() {
        resultDiv.removeChild(newComment);
    });

    newComment.appendChild(commentHeader);
    newComment.appendChild(nameParagraph);
    newComment.appendChild(groupParagraph);
    newComment.appendChild(commentParagraph);
    newComment.appendChild(deleteButton);

    resultDiv.appendChild(newComment);

    document.getElementById("user-name").value = "";
    document.getElementById("user-group").value = "";
    document.getElementById("user-comment").value = "";
}
