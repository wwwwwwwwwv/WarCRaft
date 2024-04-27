const request = new XMLHttpRequest()
const box = document.querySelector('.tovar')

request.open("GET",'const.json')

request.send()

request.addEventListener('load',()=>{
  const data = JSON.parse(request.responseText)
  console.log(data);


  data.forEach(c => {
    box.innerHTML += 
    `
      <div class = "bookk">

      <img class="over" src="${c.img }"/>
        <h1> <span>Name:</span> ${c.name}</h1>
        <br>
        <h2> <span>class:</span>${c.class}</h2>
      </div>
    `
  });
})