window.launches = {
    allLaunches: [],
    dataLaunches: {
        name: [],
        flight_number: [],
        date_unix: [],
        details: [],

    },

    init: function () {
        axios
            .get('https://api.spacexdata.com/v4/launches')
            .then(function (response) {
                // success
                launches.allLaunches = response.data;
                console.log(launches.launchesDetails())

                window.obj.getLaunchesDate()

            })
            .catch(function (error) {
                // error
                console.log(error);
            })
            ;
    },
    launchesDetails: function () {
        for (let i = 0; i < launches.allLaunches.length; i++) {
            let name = launches.allLaunches[i].name;
            let flight_number = launches.allLaunches[i].flight_number;
            let details = launches.allLaunches[i].details;
            if (details === null) {
                let launchesDetails = name + ' ' + flight_number + ' ' + 'There are no details' 
                console.log(launchesDetails)
            } else {
                let launchesDetails = name + ' ' + flight_number + ' ' + details
                console.log(launchesDetails)
            }

        }


    },


};
launches.init();