const GITROOT = "https://milktwosugars.github.io/"

function getProjects() {
    let projects = [];

        let a = new Project("#EA4335", GITROOT + "SimpleSynth/", "Simple Synth ", "A basic synthesiser with sliders");
	let b = new Project("#EA4335", GITROOT+ "OceanSynth/", "Ocean Piano", "ooh bubbles");

        projects.push(a);
	projects.push(b);

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