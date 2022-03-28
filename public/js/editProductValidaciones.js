window.addEventListener("load", function () {
    let errors = {};


    const formu = document.getElementById("formuEditProduct");
    const titulo = document.getElementById("nombre");
    const precio = document.getElementById("precio");
    const categorias = document.getElementById("catego");
    const descripcion = document.getElementById("descripcion");
    const imagen = document.getElementById("imagen");
    const coutas = document.getElementById("coutass");
    const stock = document.getElementById("stock");
    const stockMinimo = document.getElementById("stockMinimo");
    const stockMaximo = document.getElementById("stockMaximo");
    const secciones = document.getElementById("secciones");
    const visualizacion = document.querySelectorAll("#visualizacion");





    //console.log(firstName)
  // Declaro las Funciones

    let tituloValidator = () => {
    // Declaro string vacio que contendra mensaje de error
      let feedback = "";
      
      // Almaceno elemento hermano(<p>) a input nombre, hay un p al final
      let feedbackElement = titulo.nextElementSibling;

      // Si el nombre no valida sobreescribo feedback
      if (titulo.value.trim() == "") {
          feedback = "El nombre no puede estar vacio"
      }else if (titulo.value.length < 5) {
          feedback = "El nombre no puede tener menos de 5 caracteres"
      }

      // Si existe error se almacena en objeto errors
      if (feedback) {
        titulo.classList.add('error-input');
          errors.firstName = feedback;
      }else {
        titulo.classList.remove('error-input');
          delete errors.firstName;
      }

      // Se imprime string de error en vista
      // Utilizo el <p> hermano para publicar el error
      //feedbackElement es el siguiente hermano, es decir el P
      feedbackElement.innerText = feedback;
    }




    let  precioValidator = () => {
      // Declaro string vacio que contendra mensaje de error
      let feedback = "";
      // Almaceno elemento hermano(<p>) a input nombre, hay un p al final
      let feedbackElement = precio.nextElementSibling;

      // Si el nombre no valida sobreescribo feedback
      if (precio.value.trim() == "") {
          feedback = "El precio no puede estar vacio"
      }else if (precio.value.length < 2) {
          feedback = "El precio no puede tener menos de 2 caracteres"
      }

      // Si existe error se almacena en objeto errors
      if (feedback) {
        precio .classList.add('error-input');
          errors.precio  = feedback;
      }else {
        precio.classList.remove('error-input');
          delete errors.precio ;
      }

      // Se imprime string de error en vista
      // Utilizo el <p> hermano para publicar el error
      //feedbackElement es el siguiente hermano, es decir el P
      feedbackElement.innerText = feedback;
    }




    let  categoriasValidator = () => {
          // Declaro string vacio que contendra mensaje de error
      let feedback = "";
      // Almaceno elemento hermano(<p>) a input nombre, hay un p al final
      let feedbackElement = categorias.nextElementSibling;

      // Si el nombre no valida sobreescribo feedback
      if (categorias.value == "") {
          feedback = "Debes selecionar una categoria"
          feedback.select= feedback
      }

      // Si existe error se almacena en objeto errors
      if (feedback) {
        categorias.classList.add('error-input');
        errors.categorias  = feedback;
      }else {
        categorias.classList.remove('error-input');
          delete errors.categorias ;
      }

      // Se imprime string de error en vista
      // Utilizo el <p> hermano para publicar el error
      //feedbackElement es el siguiente hermano, es decir el P
      feedbackElement.innerText = feedback;
    }




    let  descripcionValidator = () => {
      let feedback = "";
      // Almaceno elemento hermano(<p>) a input nombre, hay un p al final
      let feedbackElement = descripcion.nextElementSibling;

      // Si el nombre no valida sobreescribo feedback
      if (descripcion.value.trim() == "") {
          feedback = "La descripcion no puede estar vacio"
      }else if (descripcion.value.length < 20) {
          feedback = "La descripcion no puede tener menos de 20 caracteres"
      }

      // Si existe error se almacena en objeto errors
      if (feedback) {
        descripcion.classList.add('error-input');
          errors.precio  = feedback;
      }else {
        descripcion.classList.remove('error-input');
          delete errors.precio ;
      }

      // Se imprime string de error en vista
      // Utilizo el <p> hermano para publicar el error
      //feedbackElement es el siguiente hermano, es decir el P
      feedbackElement.innerText = feedback;
    }




    let  imagenValidator = () => {//FLOOOR me sale el 2do mensaje de error coincida o no con el archivo de imagen pedido
      
    let feedback = "";

    let feedbackElement = imagen.nextElementSibling
    if (imagen.files[0].type != 'image/jpeg' && imagen.files[0].type !='image/png' && imagen.files[0].type !='image/gif' && imagen.files.length > 0) {
      feedback = "El formato del archivo debe ser válido (JPG, JPEG, PNG, GIF)"
  }

    if (feedback) {
        imagen.classList.add('error-input');
        errors.imagen = feedback;
    }else {
        imagen.classList.remove('error-input');
        delete errors.imagen;
    }

    feedbackElement.innerText = feedback;

  }


    let  coutasValidator = () => {
      let feedback = "";
      // Almaceno elemento hermano(<p>) a input nombre, hay un p al final
      let feedbackElement = coutas.nextElementSibling;

      // Si el nombre no valida sobreescribo feedback
      if (coutas.value == "") {
          feedback = "Debes selecionar una couta"
          feedback.select= feedback
      }

      // Si existe error se almacena en objeto errors
      if (feedback) {
        coutas.classList.add('error-input');
        errors.coutas  = feedback;
      }else {
        coutas.classList.remove('error-input');
          delete errors.coutas ;
      }

      // Se imprime string de error en vista
      // Utilizo el <p> hermano para publicar el error
      //feedbackElement es el siguiente hermano, es decir el P
      feedbackElement.innerText = feedback;
    }
    



    let  stockValidator = () => {
      // Declaro string vacio que contendra mensaje de error
      let feedback = "";
      // Almaceno elemento hermano(<p>) a input nombre, hay un p al final
      let feedbackElement = stock.nextElementSibling;

      // Si el nombre no valida sobreescribo feedback
      if (stock.value.trim() == "") {
          feedback = "El stock no puede estar vacio"
      }else if (stock.value.length < 1) {
          feedback = "El stock no puede tener menos de 1 caracter"
      }

      // Si existe error se almacena en objeto errors
      if (feedback) {
        stock .classList.add('error-input');
          errors.stock  = feedback;
      }else {
        stock.classList.remove('error-input');
          delete errors.stock ;
      }

      // Se imprime string de error en vista
      // Utilizo el <p> hermano para publicar el error
      //feedbackElement es el siguiente hermano, es decir el P
      feedbackElement.innerText = feedback;
    }




    let  stockMinimoValidator = () => {
      // Declaro string vacio que contendra mensaje de error
      let feedback = "";
      // Almaceno elemento hermano(<p>) a input nombre, hay un p al final
      let feedbackElement = stockMinimo.nextElementSibling;

      // Si el nombre no valida sobreescribo feedback
      if (stockMinimo.value.trim() == "") {
          feedback = "El stock no puede estar vacio"
      }else if (stockMinimo.value.length < 1) {//T-T
          feedback = "El stock debe tener al menos 1 disponible"
      }

      // Si existe error se almacena en objeto errors
      if (feedback) {
        stockMinimo .classList.add('error-input');
          errors.stockMinimo  = feedback;
      }else {
        stockMinimo.classList.remove('error-input');
          delete errors.stockMinimo ;
      }

      // Se imprime string de error en vista
      // Utilizo el <p> hermano para publicar el error
      //feedbackElement es el siguiente hermano, es decir el P
      feedbackElement.innerText = feedback;
    }




    let  stockMaximoValidator = () => {
      // Declaro string vacio que contendra mensaje de error
      let feedback = "";
      // Almaceno elemento hermano(<p>) a input nombre, hay un p al final
      let feedbackElement = stockMaximo.nextElementSibling;

      // Si el nombre no valida sobreescribo feedback
      if (stockMaximo.value.trim() == "") {
          feedback = "El stock no puede estar vacio"
      }else if (stockMaximo.value.length < 2) {
          feedback = "El stock no puede tener menos de 2 caracteres"
      }

      // Si existe error se almacena en objeto errors
      if (feedback) {
        stockMaximo .classList.add('error-input');
          errors.stockMaximo  = feedback;
      }else {
        stockMaximo.classList.remove('error-input');
          delete errors.stockMaximo ;
      }

      // Se imprime string de error en vista
      // Utilizo el <p> hermano para publicar el error
      //feedbackElement es el siguiente hermano, es decir el P
      feedbackElement.innerText = feedback;
    }




    let  seccionesValidator = () => {
      let feedback = "";
      // Almaceno elemento hermano(<p>) a input nombre, hay un p al final
      let feedbackElement = secciones.nextElementSibling;

      // Si el nombre no valida sobreescribo feedback
      if (secciones.value == "") {
          feedback = "Debes selecionar una sección"
          feedback.select= feedback
      }

      // Si existe error se almacena en objeto errors
      if (feedback) {
        secciones.classList.add('error-input');
        errors.secciones  = feedback;
      }else {
        secciones.classList.remove('error-input');
          delete errors.secciones ;
      }

      // Se imprime string de error en vista
      // Utilizo el <p> hermano para publicar el error
      //feedbackElement es el siguiente hermano, es decir el P
      feedbackElement.innerText = feedback;
    }




    let  visualizacionValidator = () => {
      let feedback = "";
      // Almaceno elemento hermano(<p>) a input nombre, hay un p al final
      let feedbackElement = visualizacion.nextElementSibling;

      // Si el nombre no valida sobreescribo feedback
      if (visualizacion.value == "") {
          feedback = "Debes selecionar una visualizacion"
          feedback.checked= feedback
      }

      // Si existe error se almacena en objeto errors
      if (feedback) {
        visualizacion.classList.add('error-input');
        errors.visualizacion  = feedback;
      }else {
        visualizacion.classList.remove('error-input');
          delete errors.visualizacion ;
      }

      // Se imprime string de error en vista
      // Utilizo el <p> hermano para publicar el error
      //feedbackElement es el siguiente hermano, es decir el P
      feedbackElement.innerText = feedback;
    }



    

    formu.addEventListener("submit", (e) => {

    tituloValidator();
    precioValidator();
    categoriasValidator();
    descripcionValidator();
    imagenValidator();//imagen
    coutasValidator();
    stockValidator();
    stockMinimoValidator();
    stockMaximoValidator();
    seccionesValidator();
    visualizacionValidator();


    // si existen errores prevent default
    if (Object.keys(errors).length) {
      e.preventDefault();
    } else {
      alert(`¡Listo!, ya se cargó el nuevo producto`)
    }

  });


  // Si focus se sale del input se ejecuta funcion validacion
  titulo.addEventListener("blur", tituloValidator);
  precio.addEventListener("blur", precioValidator);
  categorias.addEventListener("blur", categoriasValidator);
  descripcion.addEventListener("blur", descripcionValidator);
  imagen.addEventListener("blur", imagenValidator);//imagen
  coutas.addEventListener("blur", coutasValidator);
  stock.addEventListener("blur", stockValidator);
  stockMinimo.addEventListener("blur", stockMinimoValidator);
  stockMaximo.addEventListener("blur", stockMaximoValidator);
  secciones.addEventListener("blur", seccionesValidator);
  visualizacion.addEventListener("blur", visualizacionValidator);

  
});
