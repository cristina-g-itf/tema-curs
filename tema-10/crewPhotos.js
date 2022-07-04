let crew = {

    data: {
        crewMembersImg: []
    },

    init: function () {
        axios
            .get('https://api.spacexdata.com/v4/crew')
            .then(function (response) {
                
                crew.data.crewMembersImg = response.data;
                crew.createImage();
            })
            .catch(function (error) {

                console.log(error);
            })
    },

    createImage: function () {
        let imgDiv = document.querySelector('.img')
        for (let i = 0; i < crew.data.crewMembersImg.length; i++) {

            let divForEachImg = document.createElement('div');
            divForEachImg.style.height = '300px';
            divForEachImg.style.width = '300px';
            divForEachImg.style.margin = '5px';
            divForEachImg.style.backgroundPosition = 'center';
            

            let img = document.createElement('img')
            let crewImg = crew.data.crewMembersImg[i].image;
            let crewName = crew.data.crewMembersImg[i].name;
            img.setAttribute('src', crewImg);
            img.setAttribute('alt', crewName);
            img.style.height = 'inherit';
            img.style.width = 'inherit';
            img.style.objectFit = 'contain';
            
            divForEachImg.appendChild(img)
            imgDiv.appendChild(divForEachImg)
        }
    }
}

crew.init();


