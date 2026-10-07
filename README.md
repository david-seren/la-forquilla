# La Forquilla

Web desarrollada para el restaurante **La Forquilla** a partir de necesidades reales del negocio. El proyecto busca mejorar su presencia online y, al mismo tiempo, reducir el tiempo dedicado a tareas como la actualización diaria del menú y la gestión de reservas.

## Demo

[Ver web en directo](https://majestic-banoffee-4bdcbb.netlify.app/)

## Soluciones principales

### Menú gestionado desde Google Sheets

El restaurante puede actualizar el menú diario desde **Google Sheets** sin necesidad de modificar directamente el código de la web.

Los datos se utilizan mediante un archivo **CSV** y se muestran tanto en la web como en la página específica de impresión.

**Flujo de trabajo:**

`Google Sheets → CSV → Web / Impresión`

### Menú preparado para imprimir

Se desarrolló una página independiente para imprimir el menú utilizando los mismos datos del CSV.

De esta forma, se evita tener que preparar manualmente una versión diferente del menú para imprimir cada día.

### Reservas mediante WhatsApp

Se incorporó un botón de contacto y reserva directa mediante **WhatsApp** para facilitar la comunicación con los clientes y reducir la dependencia de llamadas telefónicas.

Esta solución se planteó teniendo en cuenta que el restaurante es gestionado directamente por sus propietarios y que reducir las llamadas facilita su gestión diaria.

### Priorización del contenido

El menú de mediodía, disponible de lunes a viernes, tiene mayor presencia dentro de la web al representar el servicio principal del restaurante.

El menú de noche, disponible los jueves y viernes, ocupa una posición secundaria.

La estructura para el **SEO**, se planteó teniendo en cuenta la importancia comercial de cada servicio, la experiencia del usuario y el posicionamiento orgánico. A demás de incluir CTA en puntos estratégicos, como acceso directo a reseñas y maps de google. 

## Necesidad del restaurante

El restaurante explicó que preparar el menú diario suponía una inversión de tiempo, especialmente al tener que actualizarlo y preparar posteriormente una versión para imprimir.

También se buscaba una forma más sencilla de gestionar las reservas sin depender exclusivamente de las llamadas telefónicas.

A partir de estas necesidades, se propuso una solución centrada en reducir tareas repetitivas y facilitar la gestión diaria.

## Problema → Solución

### Antes

* El menú se preparaba y modificaba manualmente en una pizarra a diario.
* La actualización de la información online era inexistente.
* Era necesario preparar el menú para imprimir.
* Las reservas dependían principalmente del contacto telefónico.

### Con la solución propuesta

* El menú se actualiza desde Google Sheets.
* La web obtiene los datos mediante CSV.
* La misma información se utiliza para la web y la impresión.
* Existe una página específica para imprimir el menú.
* Los clientes pueden contactar y solicitar reservas mediante WhatsApp.
* Se reduce el trabajo manual de los propietarios.

## Propuesta de código QR

Durante el proyecto también se propuso incorporar **códigos QR en las mesas** para que los clientes pudieran consultar el menú desde sus dispositivos.

Finalmente, el restaurante decidió no implementar esta funcionalidad, por lo que la solución final se centró en las necesidades consideradas prioritarias por el negocio.

## Funcionalidades

* Diseño responsive.
* Información del restaurante.
* Menú de mediodía de lunes a viernes.
* Menú de noche de jueves y viernes.
* Gestión del menú mediante Google Sheets.
* Obtención de datos mediante CSV.
* Página independiente para imprimir el menú.
* Diseño adaptado a impresión.
* Botón de contacto y reserva mediante WhatsApp.
* Estructura de contenido orientada a la experiencia del usuario y al SEO.

## Tecnologías

* HTML5
* CSS3
* JavaScript
* Google Sheets
* CSV
* WhatsApp

## Despliegue

El proyecto está preparado como una **web estática** y puede desplegarse en servicios como **Netlify**.

El archivo CSV forma parte del proyecto y es necesario para que la web pueda acceder a los datos del menú una vez desplegada.

## Objetivo del proyecto

Este proyecto no se planteó únicamente como una web corporativa, sino como una **solución adaptada a las necesidades reales de un pequeño negocio**.

Las decisiones de diseño y funcionalidad se tomaron teniendo en cuenta el funcionamiento del restaurante, el tiempo dedicado a preparar el menú, la gestión de reservas, la importancia comercial de cada servicio y la facilidad de uso para los clientes.

El resultado es una web sencilla y orientada a resolver necesidades concretas del negocio, evitando añadir funcionalidades que el restaurante no consideraba necesarias.

## Estructura del proyecto

```text
la-forquilla/
│
├── css/
├── img/
├── js/
├── index.html
├── menu.csv
├── menu-imprimir.html
└── README.md
```
