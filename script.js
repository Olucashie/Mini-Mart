// Arrays are variables that can accept more than one value at a time
// var allStudents = ['Aree Ika', 'Obaraka', 'Oyeku Meji', 'Eriwoya', 'Chicken']
// console.log(allStudents);

// var ages = [25, 30, 23, 34, 29]
// console.log(ages);


// var student1 = ['Obaraka Talaka', 29, 'Dark', 'Taken', 100000000, false]
// console.log(student1);

// var student2 = ['Aree Ika', 27, 'Dark', 'Taken', 400000000, true]
// console.log(student2);



// var cart = ['Ata rodo', 'Ponmo kika', 'Efo tete', 'Garri', 'Panla']
// console.log(cart);

// var babes = [ 'Pelumi', 'Gloria', 'Christiana', 'Mary', 'Janet', 'Blessing', 'Adeola']
// babes.pop()
// babes.shift()
// babes.push('Adunni')
// babes.unshift('Precious')
// console.log(babes);


// function delfirst() {
//     cart.shift()
//     document.getElementById("inp").value = ''
//     displayCart()
//     }

//     function dellast() {
//         cart.pop()
//         document.getElementById("inp").value = ''
//         displayCart()
//     }


//     function delany() {
//         var any = prompt("Enter The Index Value You Wanna Delete")
//         if(any === ""){
//             alert("Dey Play Loruko Mi")
//         }
//         else{
// cart.splice(any-1,1)
// document.getElementById("inp").value = ''
// displayCart()
// }
//     }
// function add() {
    //     if(inp.value === ""){
    //         error.style.display = "block"
    //     }
    //    else{
    //     error.style.display = "none"
    //     cart.unshift(inp.value)
    //     displayCart()
    //     document.getElementById("inp").value = ''
    // }
    //     }

var cart = []
if (cart.length==0) {
    Biggdiv.style.display= 'block'
    Biggdiv.innerHTML = `<p class="alert alert-danger text-center p-2">No items added yet</p>`
}

function addItem(){
    if(inp.value === ""){
        error.style.display = "block"
    }
    else{
        Biggdiv.style.display= "none"
        error.style.display = "none"
        Bigdiv.style.display= "block"
        cart.push(inp.value)
        document.getElementById("inp").value = ''
        console.log(cart);
        displayCart()
        document.getElementById("inp").value = ''
    }
}

    
                        // editany
    function edit() {
        var edit = ip2.value
        var editt = ip3.value
            if ((Number(edit))>cart.length) {
                alert("More Than The Available List")
            } else if (edit==="" || editt == ""){
            error2.style.display="block"
        }
else{
    error2.style.display="none"
    cart.splice(edit-1,1,editt)
    document.getElementById("inp").value = ''
displayCart()
}

    }


                    // deleteall
    function delall() {
        var confirmation = confirm("Are You Sure You Want To Delete All")
        if (confirmation==true) {
            cart.splice(0, cart.length)
            // document.getElementById("inp").value = ''
            displayCart()
    
        }
          }

function displayCart() {
    show.innerHTML = ''

show.innerHTML  += `<tr>
            <th>S/N</th>
            <th>Items</th>
            
               </tr>`
               // var element = cart[i]

               for(i = 0; i < cart.length; i++){
        show.innerHTML += `<tr>
        <td>${i + 1}</td> 
        <td>${cart[i]}</td><br>
       </tr>
        `
    }
    }
    

            // deletefirst
    function delf(){
        cart.pop()
        displayCart()
    }



                    // deletelast
        function delb(){
            cart.shift()
            displayCart()
        }



        // addfirst
        function addf(){
console.log(ip1.value);
if (ip1.value=='') {
    error1.style.display="block"
}else{
        error1.style.display = "none"
        cart.unshift(ip1.value)
        document.getElementById("ip1").value = ''
        console.log(cart);
        displayCart()
        document.getElementById("ip1").value = ''

}

}


                    // addlast
        function addb(){
            cart.push((prompt("Input What You wanna Add")))
displayCart()

        }

                // deleteany
        function delany(){
            var any = prompt("Which number do you want to delete?")
        if(any === ""){
            alert("Dey Play Loruko Mi")
        }
        else{
cart.splice(any-1,1)
displayCart()
        }
    }