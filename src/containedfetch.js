export class Containedfetch{
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
                 "<div class='col-sm-4'><img class='img-responsive' src='https://img.clipartfest.com/4b37ffc32328b3f43f0cca83bb6b3731_pac-man-ghost-png-transparent-blue-ghost-pac-man-clipart_1024-1024.png' class='img-rounded' alt='Red Phantom' width='40' height='40'></div>" +
                 "<div class='col-sm-4 text-center'>${propertyOne}</div>" +
                 "<div class='col-sm-4'><input class='form-control' type='text' value.bind='propertyOne' /></div>" +
               "</div>";     
    }

    printIndexZero(){
        alert(this.list[0].propertyOne);
    }
}