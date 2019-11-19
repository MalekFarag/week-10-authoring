// var waypoint = new Waypoint({
//     element: document.getElementById('.see-more'),
//     handler: function() {
//       notify('Basic waypoint triggered')

//     }
//   })

  const seeMoreBtns = document.querySelectorAll('.see-more'),
        popover     = document.querySelector('.popover');

        function buildPopover(beerdata, el){
            popover.querySelector('.ipa-rating').textContent = `IPA Rating: ${beerdata.IpaRating}`;
            popover.querySelector('.ratings').textContent = `Average Rating: ${beerdata.ratings}`;
            popover.querySelector('.beer-description').textContent = beerdata.description;

            popover.classList.add('show-popover');
            el.appendChild(popover);
            }

        function fetchData(){
            let targetEl = this,
                url = `/svgData/${this.dataset.target}`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                //populate popover

                buildPopover(data, targetEl);
            })
            .catch((err) => console.log(err));
        }

    seeMoreBtns.forEach(btn => btn.addEventListener('click', fetchData));