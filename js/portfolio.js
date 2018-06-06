let app = new Vue({
    el: '#app',
    data: {
        selectedCategories: {
            'Software': false,
            'Games/VR': false,
            'Websites': false,
            'Bots & Stuff': false,
        },
        showProjects: false,
    },
    methods: {
        showCategory: (cat) => {

        },
        showAllCategories: function(e) {
            e.preventDefault();
            app.showProjects = true;

            let categories = Object.keys(app.selectedCategories);
            for(let index in categories) {
                console.log(categories[index]);
                Vue.set(app.selectedCategories, categories[index], true);
            }
            // Vue.set(app.selectedCategories, 'Software', true);
            // Vue.set(app.selectedCategories, 'Games/VR', true);
            // Vue.set(app.selectedCategories, 'Websites', true);
            // Vue.set(app.selectedCategories, 'Bots & Stuff', true);
        },
        handleCategoryChange: (e) => {
            console.log(e);
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
            app.showProjects = false;
        }
    }
});