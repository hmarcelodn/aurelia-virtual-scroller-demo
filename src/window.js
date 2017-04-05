export class Test{
    constructor(){
        this.list = [];
        this.vlist = [];
        this.domElements = 0;

        for(let i = 0; i < 10000; i++) {
            this.list.push({propertyOne: 'Red Phantom - ' + i});
        }

        let updateDom = () => {
            this.domElements = $('.aurelia-virtual-scroll-row').length;
        };

        setInterval(function(){ 
            updateDom();
        }, 300);

    }
    
    fetcher(){
        return new Promise((resolve, reject) => {
           return resolve([{ "propertyOne": "Red Phantom" }]); 
        });        
    }

    buildRowCallback(item){
        return "<div class='row'>" +
                 "<div class='col-sm-4'><img class='img-responsive' src='http://vignette3.wikia.nocookie.net/wreckitralph/images/5/58/Blinky8bit.png/revision/latest?cb=20130625170114' class='img-rounded' alt='Red Phantom' width='40' height='40'></div>" +
                 "<div class='col-sm-4'>${propertyOne}</div>" +
                 "<div class='col-sm-4'><input class='form-control' type='text' value.bind='propertyOne' /></div>" +
               "</div>";     
    }

}