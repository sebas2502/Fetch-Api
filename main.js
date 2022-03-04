window.addEventListener("load",()=>{
    
    //Cuando se cargue el documento procedemos a realizar las operaciones pertinentes

    
    //Obtenemos por id el cuerpo de la tabla de usuarios de nuestro HTML
    const tableBody = document.querySelector("#table-body");

    
    
    /* Desarrollamos la función que se encargará de pintar los datos en el DOM,
       que recibe como parametro el JSON de los usuarios 
    */
    const paintData = (data) => {
           data.map((user)=>{
               tableBody.innerHTML += `

                    <tr>
                        <td class="text-center">${user.id}</td>
                        <td class="text-center">${user.name}</td>
                        <td class="text-center">${user.username}</td>
                        <td class="text-center">${user.email}</td>
                    </tr>

               `;
           }); 
    }  
    
    

    // Desarrollamos la funcion que se encargará de realizar la peticion HTTP al servidor para obtener los usuarios
    const getDatos = () => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())  //Parseamos a JSON los datos
            .then(data => paintData(data)) //Invocamos la funcion que pintará los datos pasandole como parametro la respuesta que obtuvimos del servidor 
            .catch(error => console.log(error))
    }


    //Invocamos la funfion anterior que ejecutará la applicacion en su totalidad
    getDatos();

});