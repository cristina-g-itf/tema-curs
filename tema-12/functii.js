window.obj = {
    getLaunchesDate : function (date){
        for (let i = 0 ; i < window.launches.allLaunches.length; i++){
            date = window.launches.allLaunches[i].date_utc;
            obj.getDate(date)
            // console.log(launchesD)
        }
    },
    
    
    
    getDate : function (date_utc) {
        let dateString = date_utc.slice(0, 10)
        let dateArray = dateString.split('-')
        
    
        let y = dateArray[0];
        let m = dateArray[1];
        let d = dateArray[2];
        let launchesDate = d + ' ' + m + ' ' + y;
        console.log(launchesDate)
    
    }
    }
    
    