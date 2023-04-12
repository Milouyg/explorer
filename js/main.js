class Api {
    data = null;
    async getData() {
        await fetch("../data/games.json")
            .then(response => {
                return response.json();
            }).then(newData => {
                this.data = newData.games;
            })
    }
}

class Filter {
    filterResult = [];

    filter(platform, data) {
        for(let i = 0; i < data.length; i++){
            if(data[i].platform === platform){
                this.filterResult.push(data[i])
            }
        }
    }

    randomFromResult(){
        let randomNumber = Math.floor(Math.random() * this.filterResult.length);
        return this.filterResult[randomNumber];
    }
}

class App {
    api;
    filter;

    constructor() {
        this.api = new Api();
        this.filter = new Filter();

        this.api.getData().then(
            () => {
                this.filter.filter("Ps5", this.api.data);
                let randomResult = this.filter.randomFromResult();
                console.log(randomResult)
            }
        );
    }
}

const app = new App();

// video 7/12