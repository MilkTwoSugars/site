const GITROOT = "https://milktwosugars.github.io/"

function getProjects() {
    let projects = [];

    projects[0] = new Project("#EA4335", GITROOT + "SimpleSynth/", "Simple Synth ", "A basic synthesiser with sliders (requires MIDI keyboard)");
    projects[1] = new Project("#EA4335", GITROOT + "OceanSynth/", "Ocean Piano", "Bubbles (Requires MIDI keyboard)");
    projects[2] = new Project("#EA4335", GITROOT + "TouchLFO/", "Touch LFO", "Annoying noise generator");
    projects[3] = new Project("#EA4335", GITROOT + "Conveyor/", "Conveyor", "Colour mixing");

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