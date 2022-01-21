async function getResponse() {
    let response = await fetch('https://demo.sibers.com/users') //getting a response from server
    let content = await response.json()
    content = content.splice(0, 80)
    //console.log(content.splice(0, 80)) - needed for console tests

    let list = document.querySelector('.phonebook-list')

    let key;

    // adding <li></li> elements for phonebook-list
    for (key in content) {
      list.innerHTML += `
      <li class="phonebook-list-item">
        <div class="front">
          <h4 class="list-item-title title-reset" id="contact">${content[key].name}</h4>
        </div>
        <div class="back flex">
          <div class="back-item flex">
            <div class="back-item-title">Name</div>
            <div class="back-item-descr">${content[key].name}</div>
          </div>
          <div class="back-item flex">
            <div class="back-item-title">Username</div>
            <div class="back-item-descr">${content[key].username}</div>
          </div>
          <div class="back-item flex">
            <div class="back-item-title">Phone</div>
            <div class="back-item-descr">${content[key].phone}</div>
          </div>
          <div class="back-item flex">
            <div class="back-item-title">Email</div>
            <div class="back-item-descr">${content[key].email}</div>
          </div>
        </div>
      </li>`
    }
}

getResponse()

