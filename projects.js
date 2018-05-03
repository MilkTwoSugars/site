function getProjects() {
    let projects = [];

    for (let i = 0; i < 25; i++) {
        let p = new Project("#EA4335", "http://www.google.com/", "Project " + i, "A Project");
        projects.push(p);
    }

    return projects;
}

function Project(colour, url, name, description) {
    this.colour = colour;
    this.url = url;
    this.name = name;
    this.description = description;

    this.buildElement = function () {
        let element = "<div class=\"flex-cell\" style=\"background-color:" + this.colour + "\" onclick=\"navigate(\'" + this.url + "\')\">";
        element += this.name + "<br>";
        element += "<div class=\"cell-description\">" + this.description + "</div>";
        element += "</div>";
        return element;
    }
}