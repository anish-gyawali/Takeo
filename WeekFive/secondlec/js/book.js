function createBookData() {
  let id = isIdAvailable();
  let url = "http://localhost:3000/books";
  let method = "POST";
  if (id) {
    url = `http://localhost:3000/books/${id}`;
    method = "PUT";
  }
  let title = document.getElementById("title").value;
  let writer = document.getElementById("writer").value;
  let publisher = document.getElementById("publisher").value;
  let isbn = document.getElementById("isbn").value;
  let subject = document.getElementById("subject").value;
  let numPages = document.getElementById("numPages").value;
  let allAvailability = document.getElementsByName("availability");
  let availability;

  //In case of checkbox we have to take array
  //let availability=[]
  allAvailability.forEach((node) => {
    if (node.checked) {
      //incase of checkbox we need to push the value
      //availability.push(node.value)
      availability = node.value;
    }
  });
  let obj = {
    title: title,
    writer: writer,
    publisher: publisher,
    isbn: isbn,
    subject: subject,
    numPages: numPages,
    availability: availability,
  };
  // npx json-server --watch data.json

  fetch(url, {
    method: method,
    body: JSON.stringify(obj),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status === 201 || 200) {
      alert("book added successfully");
    } else {
      alert("error to add book");
    }
    res.json();
  });
}

function getBookData() {
  fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((data) => {
      let tbody = document.getElementById("tbody");
      let templates = "";

      for (let i = 0; i < data.length; i++) {
        templates = templates + getRowTemplate(data[i]);
      }
      tbody.innerHTML = templates;
    });
}

function deleteBook(id) {
  fetch(`http://localhost:3000/books/${id}`, {
    method: "DELETE",
  });
}

function editRedirection(id) {
  location.href = `/book.html?id=${id}`;
}
function getRowTemplate(obj) {
  let template = `
    <tr>
    <td>${obj.id}</td>
    <td>${obj.title}</td>
    <td>${obj.writer}</td>
    <td>${obj.publisher}</td>
    <td>${obj.isbn}</td>
    <td>${obj.subject}</td>
    <td>${obj.numPages}</td>
    <td>${obj.availability}</td>
    <td><button class="btn btn-outline-dark" onclick="editRedirection(${obj.id})">Edit</button></td>
    <td><button class="btn btn-outline-danger" onclick="deleteBook(${obj.id})">Delete</button></td>
    </tr>
    `;
  return template;
}

function routeUrl(url) {
  location.href = url;
}

function isIdAvailable() {
  let url = location.href;
  let arrUrl = url.split("?");
  if (arrUrl[1]) {
    let id = arrUrl[1].split("=")[1];
    return id;
  }
  return;
}
function populateData() {
  let id = isIdAvailable();
  if (!id) {
    return;
  }

  let url = `http://localhost:3000/books/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("title").value = data.title;
      document.getElementById("writer").value = data.writer;
      document.getElementById("publisher").value = data.publisher;
      document.getElementById("isbn").value = data.isbn;
      document.getElementById("subject").value = data.subject;
      document.getElementById("numPages").value = data.numPages;
      let allAvailability = document.getElementsByName("availability");
      allAvailability.forEach((node) => {
        if (data.availability === node.value) {
          node.checked = true;
        }
      });
    });
}
