const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
    const dogImageContainer = document.querySelector('#dog-image-container')
    data.message.forEach(imageUrl => {
      const imageElement = document.createElement('img')
      imageElement.src = imageUrl
      dogImageContainer.appendChild(imageElement)
    })
  })
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      const breedList = document.querySelector('#dog-breeds')
      Object.keys(data.message).forEach(breedName => {
        const breedListItem = document.createElement('li')
        breedListItem.textContent = breedName
        breedList.appendChild(breedListItem)
      })
    })
    const breedList = document.querySelector('#dog-breeds')

    breedList.addEventListener('click', event => {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'red'
      }
    })
    const breedList = document.querySelector('#dog-breeds')
    const breedFilter = document.querySelector('#breed-dropdown')
    
    breedFilter.addEventListener('change', event => {
      const selectedLetter = event.target.value
      const breedListItems = breedList.querySelectorAll('li')
    
      breedListItems.forEach(breedListItem => {
        if (breedListItem.textContent[0] === selectedLetter) {
          breedListItem.style.display = 'list-item'
        } else {
          breedListItem.style.display = 'none'
        }
      })
    })
      