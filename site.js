function navigate(url){
    window.location.href = url;
}

function showProjects() {
    let projects = getProjects();

    for (let project of projects){
        $('#projects').append(project.buildElement()); 
    }
}

