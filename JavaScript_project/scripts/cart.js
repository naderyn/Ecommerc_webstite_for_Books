var cart_data = JSON.parse(localStorage.getItem("cart"));

let cart_table = document.querySelector("#cart-table");

let out = "";

    cart_data.map(cart => {

        console.log(cart.id)
        console.log(cart.title)

      out += `


    <tr>
        <th scope="row">${cart.id}</th>
        <td>${cart.title}</td>
        <td>${cart.price}</td>
    </tr>
    
    `;
    cart_table.innerHTML = out;
    })
