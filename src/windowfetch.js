export class Windowfetch{
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
    
    fetcher(context){

        console.log(context);
        
        return new Promise((resolve, reject) => {
            let fetchList = [];

            for(let i = 0; i < 1000; i++) {
                fetchList.push({propertyOne: 'Red Phantom / Fetch - ' + i});
            }

           return resolve(fetchList); 
        });        
    }

    buildRowCallback(item){
        return "<div class='row'>" +
                 "<div class='col-sm-4'><img class='img-responsive' src='https://img.clipartfest.com/aca50881718e75bdd28597a9c72b4500_pac-man-ghost-png-image-blue-ghost-pac-man-clipart_600-600.png' class='img-rounded' alt='Red Phantom' width='40' height='40'></div>" +
                 "<div class='col-sm-4 text-center'>${propertyOne}</div>" +
                 "<div class='col-sm-4'><input class='form-control' type='text' value.bind='propertyOne' /></div>" +
               "</div>";     
    }
}