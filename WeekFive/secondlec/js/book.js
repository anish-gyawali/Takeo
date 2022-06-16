function createBookData() {
    let title = document.getElementById('title').value;
    let writer = document.getElementById('writer').value;
    let publisher = document.getElementById('publisher').value;
    let isbn = document.getElementById('isbn').value;
    let subject = document.getElementById('subject').value;
    let numPages = document.getElementById('numPages').value;
    let allAvailability= document.getElementsByName('availability');
    let availability;

    //In case of checkbox we have to take array
    //let availability=[]
    allAvailability.forEach((node) => {
        if(node.checked){

            //incase of checkbox we need to push the value
            //availability.push(node.value)
            availability=node.value;
        }
    });
    let obj = {
        title: title,
        writer: writer,
        publisher: publisher,
        isbn: isbn,
        subject: subject,
        numPages: numPages,
        availability:availability
    }
// npx json-server --watch data.json
    
    fetch("http://localhost:3000/books",{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    }).then((res)=>res.json())

}

function getBookData(){
    fetch("http://localhost:3000/books")
    .then((res)=>res.json())
    .then((data)=>{
        let tbody =document.getElementById('tbody')
        let templates='';

        for(let i =0; i<data.length;i++){
            templates=templates+getRowTemplate(data[i])
        }
        tbody.innerHTML=templates;
    })
}

function getRowTemplate(obj){
    let template=`
    <tr>
    <td>${obj.title}</td>
    <td>${obj.writer}</td>
    <td>${obj.publisher}</td>
    <td>${obj.isbn}</td>
    <td>${obj.subject}</td>
    <td>${obj.numPages}</td>
    <td>${obj.availability}</td>
    </tr>
    `
    return template;
}

function routeUrl(url) {
    location.href = url;
}