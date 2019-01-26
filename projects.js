const GITROOT = "https://milktwosugars.github.io/"

function getProjects() {
    let projects = [];

    projects[0] = new Project("#EA4335", GITROOT + "SimpleSynth/", "Simple Synth ", "A basic synthesiser with sliders (Requires MIDI keyboard)");
    projects[1] = new Project("#99ccff", GITROOT + "OceanSynth/", "Ocean Piano", "Bubbles (Requires MIDI keyboard)");
    projects[2] = new Project("#ffad33", GITROOT + "TouchLFO/", "Touch LFO", "Annoying noise generator");
    projects[3] = new Project("#ff8000", GITROOT + "Patchy/", "Patchy", "LFO prototype");
    projects[4] = new Project("#009933", GITROOT + "Cells/", "Cells", "Singing cells");
    projects[5] = new Project("#10ab7c", GITROOT + "Cells2/", "Cells II", "Evolutionary algorithm cells");
    projects[6] = new Project("#336699", GITROOT + "Microphone/", "Cells III", "Listening cells");
    projects[7] = new Project("#D16666", GITROOT + "Dark-Pool/", "Pool", "Life finds a way");
    projects[8] = new Project("#A34091", GITROOT + "Audio-Demo/", "Visual", "Use keyboard/mouse/midi");
    projects[9] = new Project("#F54949", GITROOT + "Camera/", "Camera", "Click to change (Requires Camera)");
    projects[10] = new Project("#cc0000", GITROOT + "GlowWorm/", "GlowWorm", "It likes red");
    projects[11] = new Project("#f99fbf", GITROOT + "AtomCamera/", "Atom Camera", "Light up the atoms (Requires Camera)");
    // projects[12] = new Project("black", "", "Blank", "Nothing yet");

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
