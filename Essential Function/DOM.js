document.addEventListener('DOMContentLoaded', function(){
    // let paras = document.getElementsByClassName('para')[0];
    let btns = document.querySelectorAll('.btn');
    console.log(btns);
    
    let paras = document.querySelector('.para');

    paras.innerHTML = '<h1> Fully Content Loded</h1>';
    let myTable = document.getElementById('myTable');

    // let table = document.createElement('table');
    // table.setAttribute("border","1px")
    // let thead = document.createElement('thead');
    // let tr = document.createElement('tr');
    // let th = document.createElement('th');
    // let th_2 = document.createElement('th');

    // th.innerText = "First Name";
    // th_2.innerHTML = "Last name"

    // let tbody = document.createElement('tbody');
    // let tr_2 = document.createElement('tr');
    // let td = document.createElement('td');
    // let td_2 = document.createElement('td');
    // td.innerText = "Rajakumar"
    // td_2.innerText = "Kalamadi";
    



    // tr_2.appendChild(td_2)
    // tr_2.appendChild(td);
    // tbody.appendChild(tr_2);
    // tr.appendChild(th_2);
    // tr.appendChild(th);
    // thead.appendChild(tr);
    // table.appendChild(thead);
    // table.appendChild(tbody);
    // myTable.appendChild(table);


    const data = [
        {firstName:"Rajakumar",lastName:"Kalamadi"},
        {firstName : "Anil", lastName : "Kalamadi"},
        {firstName:"Rajakumar",lastName:"Kalamadi"},
        {firstName : "Anil", lastName : "Kalamadi"}
    ]


    let table = document.createElement('table');
    table.setAttribute('border', '1px');
    table.innerHTML=`

    <thead>
        <th> First Name </th>
        <th> Last Name </th>
    </thead>
    
    `;

    let tbody = document.createElement('tbody');
    
    data.forEach(person =>{
        const row = document.createElement('tr');
        row.innerHTML=`
            <td> ${person.firstName} </td>
            <td> ${person.lastName} </td>
        `

        tbody.appendChild(row);
    })


    table.appendChild(tbody);

    myTable.appendChild(table);



    let name = document.getElementById('name');
    let i=0;
    let j=0;
    function typeWritter(arr){

        let typeWritterEffet = setInterval(()=>{
            if(i < arr.length){
                if(j < arr[i].length){
                    name.textContent += arr[i][j];
                    j++;
                }else{
                    name.textContent += " ";
                    j=0;
                    i++;
                   
                }
            }else{
                clearInterval(typeWritterEffet);
                setTimeout(()=>{
                    name.textContent = "";
                    j=0;
                    i=0;
                    typeWritter(arr);
                },1000)
    
            }
        },100)


        
    }


    let arr = ["Kalamadi", "Rajakumar", "Prakash"];
    typeWritter(arr);



    function add(num1, num2, callback){
        let ans = num1 + num2;
        return callback(ans);
    }

    function display(sum){
        console.log(sum);
        return 10;
        
    }

    let ans = add(10,20,display);
    console.log(ans);
    

})