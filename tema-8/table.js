let crew = {

    data: {
        crewMembers: []
    },

    init: function () {
        axios
            .get('https://api.spacexdata.com/v4/crew')
            .then(function (response) {
                
                crew.data.crewMembers = response.data;
            })
            .catch(function (error) {

                console.log(error);
            })
    },
    createTable: function () {
        let table = document.querySelector('.table tbody')
        for (let i = 0; i < crew.data.crewMembers.length; i++) {

            let row = document.createElement('tr')

            let thTable = document.createElement('th');
            thTable.innerHTML = i + 1;

            let tdTable = document.createElement('td');
            tdTable.innerHTML = crew.data.crewMembers[i].name;

            row.appendChild(thTable);
            row.appendChild(tdTable);
            table.appendChild(row)

        }
        return table;
    }




}


crew.createTable();