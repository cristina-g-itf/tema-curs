window.launches = {
    
    data: {
        allItems: [],
        
        
    },
    init: function() {
        axios
            .get('https://api.spacexdata.com/v4/launches')
            .then(function(response) {
                // success
                launches.data.allItems = response.data;
                
            })
            .catch(function(error) {
                // error
                console.log(error);
            })
        ;
        },
    launchesInfo: {
        
    }
}
