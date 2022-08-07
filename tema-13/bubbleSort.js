let myArray = [2, 4, 8, 1, 10, 5, 0, 44, 13, 2];
let t = [];

let bubbleSort = function (array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            while (array[j] > array[j + 1]) {
                
                t = array[j];
                array[j] = array[j + 1];
                array[j + 1] = t;
            }
        
        }
    }
    return array
}
console.log(bubbleSort(myArray))




let crew = {

    data: {
        crewMembersImg: []
    },

    init: function () {
        axios
            .get('https://api.spacexdata.com/v4/crew')
            .then(function (response) {
                
                crew.data.crewMembersImg = response.data;
                crew.createImage(crew.data.crewMembersImg);
                crew.pushButton()

            })
            .catch(function (error) {

                console.log(error);
            })
    },

    createImage: function (members) {
        let imgDiv = document.querySelector('.img')
        for (let i = 0; i < members.length; i++) {

            let divForEachImg = document.createElement('div');
            divForEachImg.setAttribute('id', 'divCrewImg');
            
            

            let img = document.createElement('img')
            let crewImg = members[i].image;
            let crewName = members[i].name;
            img.setAttribute('src', crewImg);
            img.setAttribute('alt', crewName);
            img.setAttribute('id', 'crewImg');
            // crewName.setAttribute('id', 'crewName')
            
            divForEachImg.appendChild(img)
            imgDiv.appendChild(divForEachImg)
        }
    },
    sortCrewMembers: function(members){
        let localCrewArray = [];
        for(let i = 0; i < members.length; i++){
            localCrewArray.push({
                image: members[i].image,
                name: members[i].name
            })
            localCrewArray[i].sort()
        }
    },
    pushButton: function(){
        let button = document.querySelector('.button')
        button.addEventListener('click', crew.sortCrewMembers(crew.data.crewMembersImg))
    }
}
crew.init();



