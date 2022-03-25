const productos = document.querySelector(".productos")

fetch("/data.json")
    .then( (res) => res.json())
    .then( (data) => {
        
        data.forEach((producto) =>{
            const li = document.createElement("li")

            li.innerHTML = `
                <h1>${producto.nombre}</h1>
                <p> Precio: $US ${producto.precio}</p>
                <p> Codigo del producto: ${producto.Id}</p>

            `
            productos.append(li)
                
        })
    })