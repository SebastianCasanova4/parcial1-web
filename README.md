# Nombre: Sebastian Enrique Casanova Ospina
# Codigo: 202115116

# Ejecución del código
Para realizar la ejecución es necesario ejecutar npm start, el navegador no se abre automáticamente por lo que en la barra de búsqueda hay que poner localhost:puerto

# Decisiones de desarrollo
Para la relación entre vistas se usó el componente Link de react-bootstrap. Las rutas se definen en App.js, en este componente también se agrega state = {}, que permite enviar información de una vista a otra. Para acceder a estas variables se usa useLocation en el componente al que se llega.

# Elementos de react usados
1. Se usó un hook de efecto para realizar una petición GET a los datos. Cabe recalcar que presenté inconvenientes con las imagenes por lo qeu no pude usar el link previsto por el enunciado del taller y tuve que suar un enlace externo qeu hace exactamente lo mismo, retorna fotos al azar aunque esta vez de perritos.
2. Se usaron hooks de estado para poder acceder al valor de los input y dependiendo de ellos realizar verificaciones
3. Para la navegación se usaron links
4. Para internacionalización se usó intl, con archivos json para definir los id y el valor asignado.