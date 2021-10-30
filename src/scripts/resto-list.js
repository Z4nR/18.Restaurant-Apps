const RESTO_LIST = 'resto-list'

const addRestoData = () => {
  const restoList = document.getElementById(RESTO_LIST)
}

const restoData = (name, description, pictureID, city, rating) => {
  const restoName = document.createElement('p')
  restoName.classList.add('resto-name')
  restoName.innerText = name

  const restoRating = document.createElement('p')
  restoRating.classList.add('resto-rating')
  restoRating.innerText = rating

  const restoDesc = document.createElement('p')
  restoDesc.classList.add('resto-desc')
  restoDesc.innerText = description

  const restoDetail = document.createElement('div')
  restoDetail.classList.add('resto-detail')
  restoDetail.append(restoName, restoRating, restoDesc)

  const restoImg = document.createElement('img')
  restoImg.classList.add('resto-img')
  restoImg.alt('Resto Image')
  restoImg.src = pictureID

  const restoLoc = document.createElement('p')
  restoLoc.classList.add('resto-location')
  restoLoc.innerText = city

  const imgBox = document.createElement('div')
  imgBox.classList.add('img-container')
  imgBox.append(restoLoc, restoImg)
}
