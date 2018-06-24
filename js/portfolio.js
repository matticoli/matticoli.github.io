// Reset app state on load
// TODO: Use this to allow direct linking from project view
window.history.pushState("", "", "./");

let setFullscreen = (b) => {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if(b) {
        requestFullScreen.call(docEl);
    }
    else {
        cancelFullScreen.call(doc);
    }
}

let app = new Vue({
    el: '#app',
    data: {
        selectedCategories: {
            'Software': false,
            'Games/VR': false,
            'Websites': false,
            'Bots & Stuff': false,
        },
        categoryAssets: categoryAssets,
        showProjects: false,
        selectedProject: false,
        projects: projects,
    },
    methods: {
        showProjectInfoView: (projectId) => {
            window.history.pushState("", "", "#"+projectId);
            projects.forEach( (proj) => {
                if(proj.id === projectId) {
                    app.selectedProject = proj;
                    return;
                }
            });
        },
        hideProjectInfoView: () => {
            window.history.pushState("", "", "./#projects");
            app.selectedProject = false;
        },
        getSelectedProject: () => {
            return app.selectedProject;
        },
        showProjectsView: () => {
            window.history.pushState("", "", "#projects");
            app.showProjects = true;
        },
        hideProjectsView: () => {
            window.history.pushState("", "", "./");
            app.showProjects = false;
        },
        showCategory: (e) => {
            console.log(e);
            let name = e.target.textContent;
            console.log(name);
            console.log((app.selectedCategories.hasOwnProperty(name)));
            // console.log(name + " " + (name in Object.keys(app.selectedCategories)));
            if(app.selectedCategories.hasOwnProperty(name)) {
                Vue.set(app.selectedCategories, name, true);
                app.showProjectsView();
            }
        },
        showAllCategories: (e) => {
            e.preventDefault();

            app.showProjectsView();

            let categories = Object.keys(app.selectedCategories);
            for(let index in categories) {
                console.log(categories[index]);
                Vue.set(app.selectedCategories, categories[index], true);
            }
        },
        handleCategoryChange: (e) => {
            if(!(e.target.id in app.selectedCategories)) {
                return;
            }
            app.selectedCategories[e.target.id] = !app.selectedCategories[e.target.id];

            let categories = Object.keys(app.selectedCategories);
            for(let index in categories) {
                console.log(categories[index]);
                if(app.selectedCategories[categories[index]]) {
                    return;
                }
            }
            app.hideProjectsView();
        },
        onBackClick: (e) => {
            if(app.selectedProject) {
                app.hideProjectInfoView();
            } else if(app.showProjects) {
                app.hideProjectsView();
            } else {
                window.location.href = '../';
            }
        },
    }
});