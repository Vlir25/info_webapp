# GUIA DE CONSTRUCCIÓN DE LA PAGINA WEB
  La pagina web esta diseñada por varias capas y carpetas importantes que resaltan como esta
  clasificado cada recurso de los componentens que lo conforman, el proyecto esta desarrollado
  en React con node.js y el orden en como estos archivos estan organizados es el siguoente.

/AGROTECH

 /public                      # Archivos públicos
 
index.html               # Página principal HTML

favicon.ico              # Icono de la aplicación

/src                         # Código fuente de la aplicación

/components              # Componentes de React

Navbar.js            # Componente de navegación

Footer.js            # Componente del pie de página

Home.js              # Componente de la página principal

Noticias.js          # Componente para mostrar noticias

Geoportal.js         # Componente del geoportal
 
── Testimonios.js       # Componente para testimonios

── NoticiasDetalle.js    # Componente para detalles de noticias

── LoadingScreen.js      # Componente de pantalla de carga


── App.js                   # Componente principal de la aplicación
── App.css                  # Estilos globales de la aplicación
── index.js                 # Punto de entrada de la aplicación

── package.json                 # Dependencias y scripts del proyecto


## Componentes Principales

- **Navbar**: Componente de navegación que permite a los usuarios cambiar entre secciones y seleccionar el idioma de la aplicación.
- **Footer**: Componente que muestra información sobre derechos de autor y otra información relevante al final de cada página.
- **Home**: Componente que presenta la información inicial sobre la empresa y su misión.
- **Geoportal**: Componente que ofrece herramientas y mapas para el monitoreo de cultivos.
- **Testimonios (ventana que hacemos)**: Componente que permite a los usuarios ver las actividades que se han desarrollado.
Este componente tambien a su vez est aconfigurado para mostrar la informacion mas clara a travez de 
tarjetas se puede añadir o modificar si es necesario.
- **Noticias**: Componente que muestra información detallada sobre una noticia en  específica.
- **LoadingScreen**: Componente que se muestra mientras la aplicación se está cargando.



  A todos estos componentes incluye su respectivo estilo con animacion personalizada que se lo puede
  encontrar en la carpeta denominada "styles"  aqui se podra modifcar el color, el estilo de texto e incluso la animacion
  por si se desea modificarlo.
  
 ## Explicacion:
 Todos estos componentes principales estan elazados con el archivo "APP.JS" para controlar que las ventanas
 con la informacion colocada se muestren de manera correcta al iterar entre las opciones de la pagina web.
 Dentro de ellas las mas fundamentales para poder modifcar el contenido mostrado segun las especificaciones del dueño son:
  Navbar.js, App.js, NoticiaDetalle.js, home.js, Geomap.js y Footer.js
  
- **Nota:** Cada componente este estrictamente colocado comentarios para facilitar su lectura y compresion en funcionalidades

  ### Navbar.js
  El componente Navbar es una barra de navegación que permite a los usuarios moverse entre las diferentes secciones de la aplicación mediante enlaces que utilizan react-router-dom. Además, incluye dos botones para cambiar el idioma de la interfaz entre español e inglés, mediante la función changeLanguage. El componente está estilizado con un archivo CSS externo y usa PropTypes para asegurar que el prop de cambio de idioma sea una función. Para incluir otro componente, simplemente se crea un nuevo archivo en la carpeta de componentes, se agrega una ruta correspondiente en App.js, y se enlaza en la barra de navegación, permitiendo así una fácil integración de nuevas funcionalidades.

  ### Footer.js
  Este componente permite visulizar el pie de pagina donde se aglomera los enlaces rapidos para poder direccionarse a la vetana adecuada,
  ademas de incorporar un conjunto de iconos que le permite al usuario acceder a la informacion de manera rapida, celular, ubicacion, instagram
  y su correo electronico toda esta informacion se puede modificar desde este archivo.

### Home.js y Testimonios.js
  Este componente aglomera la informacion inical de la pagina web con su iconos textos y la
  lista de colaboradores o algun contenido viusal si se adjunta.
  El comonente de novedades aglomera la informacion para la ventana que somos, de igual manera que home
  se pude cambiar el texto y otra informacion extra que usted requiera

### Geoportal.js
  Este componente aglomera la version de prueba del prototipo del mapa interactivo, un explicacion
  corta de que trata, ciertas imagenes y un boton para ejecutar el mapa.

### LoadingScreen.js
Este componente aglomera el video de la pantalla de carga, esta configurado para que el usuario
espere que se cargen los recursos respectivos de la pagina web esta diseñado para que se ejecute
en 12 segundos clave y muestre los demas componentes que conforman la pagina web, de igual manera es
posible modificar los valores si desea cambiarlos.





### Noticas.js
  Este componente es el mas importante de todos debido a que aqui se aglomera por tarjetas 
  las noticas mas relevantes para su publicacion directamente , aqui podra editar y publicarlas inmmediatamente.
  El codigo ya cuenta con reglas de que actividades deberia usted de ejecutar correctamente para que todo 
  funcione acorde a la programacion descrita, si aun asi se le dificulta recuerde estas 2 reglas fundamentales:

 - **Recuerde cambiar el nombre de la varible.**
 - **Recuerde usar la sintaxis adecuada para que se ejecute correctamente**

  ## IMPORTANTE!:
  Una vez que abra el archivo **Noticias.js**  encontrara un documento lleno de codigos comprensible para alguien experto en el area de la programacion.
  Si usted no lo es , no se preocupe el codigo ya se encuentra documentado para que sea facil de modificarlo correctamente
  sin sufrir el riesgo de averias toda la pagina web,  pero si aun presenta dificultades para desarrollar su actividad 
  se recomienda que al publicar su noticia mantenga la siguiente estructura 

    nombre de la variable  --------> 'fiesta_1'   (nombre de la variable entre 2 comillas)
    titulo de la noticia   ---------> "fiestas" (titulo de la noticia entre 2 comillas)
    contenido de la noticia  -------> "Desde la noche de ayer se llevo una agalardonada fiesta......" (contendio textual entre 2 comillas)
    Direccion de la imagen  ------->  "/public/images/fiesta_1.jpg"  //  "www.fiesta.jpg.com"  (direccion de la imagen entre 2 comillas)
**Sugerencia**
Para saber las traducciones debera de basarse en la siguiente estructura :
### VENTANA QUE HACEMOS?-TESTIMONIOS.JS
Este archivo se encuentra configurado para iterar la visualizacion de las imagenes y el contenido 
mostrado en pantalla si requiere modificarlo puede cambiar las imagenes aqui mismo usando URL o la direccion de su
imagen JPEG, JPG,etc.
Si quiere buscar las traducciones como titulos y contenido usted debera de buscar la carpeta lladama SRC
dentro de ella buscar la carpeta llamata context en esta buscar el archivo denominado Translations
aqui encontrara 2 segmentos las traducciones en español e ingles para que se guie en las traducciones 
busque el comentario que diga traduccion de testimonios y modifique el texto.

    title1------> aqui añada su titulo
    content1----> aqui añada el contenido 
**NOTA**: Si necesita añadir mas tajetas copie la estructura de los ejemplos anteriores y cambie el numero 

       {
      id: 5,
      title: translations[language].testimonios.title5,
      content: translations[language].testimonios.content5,
      image: "/we_does/cultivo_4.png",
    },
    debajo de esto se inserta otra tarjeta, recuerde cambbiar el numero del codigo 
title: translations[language].**testimonios.title5**


   
content: translations[language].**testimonios.content5**,

### AVISO FINAL:  SI NECESITA AYUDA PUEDE DEJAR UNA DESCRIPCION SOBRE QUE ELEMENTOS DESEA CONOCER SU CONFIGURACION
# smartfaming_live
