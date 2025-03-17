function toggleProjects(categoryId) {
    const projectList = document.getElementById(categoryId);
    if (projectList.style.display === "none" || projectList.style.display === "") {
        projectList.style.display = "block";
    } else {
        projectList.style.display = "none";
    }
}