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


  // Declaro las Funciones

    let tituloValidator = () => {
  
      let feedback = "";
      

      let feedbackElement = titulo.nextElementSibling;

    
      if (titulo.value.trim() == "") {
          feedback = "El nombre no puede estar vacío"
      }else if (titulo.value.length < 5) {
          feedback = "El nombre no puede tener menos de 5 caracteres"
      }


      if (feedback) {
        titulo.classList.add('error-input');
          errors.firstName = feedback;
      }else {
        titulo.classList.remove('error-input');
          delete errors.firstName;
      }


      feedbackElement.innerText = feedback;
    }


    let  precioValidator = () => {
    
      let feedback = "";
    
      let feedbackElement = precio.nextElementSibling;

    
      if (precio.value.trim() == "") {
          feedback = "El precio no puede estar vacio"
      }else if (precio.value.length < 2) {
          feedback = "El precio no puede tener menos de 2 caracteres"
      }

      if (feedback) {
        precio .classList.add('error-input');
          errors.precio  = feedback;
      }else {
        precio.classList.remove('error-input');
          delete errors.precio ;
      }

      feedbackElement.innerText = feedback;
    }



    let  categoriasValidator = () => {
      
      let feedback = "";

      let feedbackElement = categorias.nextElementSibling;

      if (categorias.value == "") {
          feedback = "Debes selecionar una categoría"
          feedback.select= feedback
      }

    
      if (feedback) {
        categorias.classList.add('error-input');
        errors.categorias  = feedback;
      }else {
        categorias.classList.remove('error-input');
          delete errors.categorias ;
      }

      feedbackElement.innerText = feedback;
    }




    let  descripcionValidator = () => {
      let feedback = "";
      
      let feedbackElement = descripcion.nextElementSibling;

    
      if (descripcion.value.trim() == "") {
          feedback = "La descripcion no puede estar vacío"
      }else if (descripcion.value.length < 20) {
          feedback = "La descripcion no puede tener menos de 20 caracteres"
      }

  
      if (feedback) {
        descripcion.classList.add('error-input');
          errors.precio  = feedback;
      }else {
        descripcion.classList.remove('error-input');
          delete errors.precio ;
      }


      feedbackElement.innerText = feedback;
    }


    let  imagenValidator = () => {
      
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
  
      let feedbackElement = coutas.nextElementSibling;

  
      if (coutas.value == "") {
          feedback = "Debes selecionar una couta"
          feedback.select= feedback
      }

      if (feedback) {
        coutas.classList.add('error-input');
        errors.coutas  = feedback;
      }else {
        coutas.classList.remove('error-input');
          delete errors.coutas ;
      }

      feedbackElement.innerText = feedback;
    }
    

    let  stockValidator = () => {
    
      let feedback = "";
      
      let feedbackElement = stock.nextElementSibling;

  
      if (stock.value.trim() == "") {
          feedback = "El stock no puede estar vacío"
      }else if (stock.value.length < 1) {
          feedback = "El stock no puede tener menos de 1 caracter"
      }

      if (feedback) {
        stock .classList.add('error-input');
          errors.stock  = feedback;
      }else {
        stock.classList.remove('error-input');
          delete errors.stock ;
      }

      feedbackElement.innerText = feedback;
    }



    let  stockMinimoValidator = () => {
    
      let feedback = "";
  
      let feedbackElement = stockMinimo.nextElementSibling;


      if (stockMinimo.value.trim() == "") {
          feedback = "El stock no puede estar vacío"
      }else if (stockMinimo.value.length < 1) {//T-T
          feedback = "El stock debe tener al menos 1 disponible"
      }

  
      if (feedback) {
        stockMinimo .classList.add('error-input');
          errors.stockMinimo  = feedback;
      }else {
        stockMinimo.classList.remove('error-input');
          delete errors.stockMinimo ;
      }

      feedbackElement.innerText = feedback;
    }




    let  stockMaximoValidator = () => {

      let feedback = "";
  
      let feedbackElement = stockMaximo.nextElementSibling;

  
      if (stockMaximo.value.trim() == "") {
          feedback = "El stock no puede estar vacío"
      }else if (stockMaximo.value.length < 0) {
          feedback = "El stock no puede tener menos de 1 caracteres"
      }

      if (feedback) {
        stockMaximo .classList.add('error-input');
          errors.stockMaximo  = feedback;
      }else {
        stockMaximo.classList.remove('error-input');
          delete errors.stockMaximo ;
      }

      feedbackElement.innerText = feedback;
    }


    let  seccionesValidator = () => {
      let feedback = "";
      let feedbackElement = secciones.nextElementSibling;

  
      if (secciones.value == "") {
          feedback = "Debes selecionar una sección"
          feedback.select= feedback
      }


      if (feedback) {
        secciones.classList.add('error-input');
        errors.secciones  = feedback;
      }else {
        secciones.classList.remove('error-input');
          delete errors.secciones ;
      }


      feedbackElement.innerText = feedback;
    }



    let  visualizacionValidator = () => {
      let feedback = "";
  
      let feedbackElement = visualizacion.nextElementSibling;


      if (visualizacion.value == "") {
          feedback = "Debes selecionar una visualización"
          feedback.checked= feedback
      }

    
      if (feedback) {
        visualizacion.classList.add('error-input');
        errors.visualizacion  = feedback;
      }else {
        visualizacion.classList.remove('error-input');
          delete errors.visualizacion ;
      }


      feedbackElement.innerText = feedback;
    }



    formu.addEventListener("submit", (e) => {

    tituloValidator();
    precioValidator();
    categoriasValidator();
    descripcionValidator();
    imagenValidator();
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
  imagen.addEventListener("blur", imagenValidator);
  coutas.addEventListener("blur", coutasValidator);
  stock.addEventListener("blur", stockValidator);
  stockMinimo.addEventListener("blur", stockMinimoValidator);
  stockMaximo.addEventListener("blur", stockMaximoValidator);
  secciones.addEventListener("blur", seccionesValidator);
  visualizacion.addEventListener("blur", visualizacionValidator);


});