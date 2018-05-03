function getProjects() {
    let projects = [];

        let p = new Project("#EA4335", "https://milktwosugars.github.io/SimpleSynth/", "Simple Synth ", "A basic synthesiser with sliders");
        projects.push(p);

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