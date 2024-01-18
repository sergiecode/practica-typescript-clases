
# README - TypeScript Explicación de clases

Este repositorio contiene una implementación básica de una clase de negocios en TypeScript. La clase `Negocio` sirve como un molde para representar diversos tipos de negocios, proporcionando funcionalidades como la verificación del horario de apertura, servicios de entrega y la capacidad de recibir recomendaciones.

## Características Principales

-   **Nombre:** Proporciona métodos para obtener y establecer el nombre del negocio.
-   **Dirección:** Métodos para acceder y modificar la dirección del negocio.
-   **Teléfono:** Permite obtener y actualizar el número de teléfono del negocio.
-   **Estado de Apertura:** La clase incluye funciones para verificar si el negocio está abierto en un momento dado.
-   **Servicio de Delivery:** Proporciona una función de entrega que verifica la disponibilidad según la distancia.
-   **Recomendaciones:** Ofrece un método para agradecer las recomendaciones recibidas.

## Uso Básico

```typescript
// Instanciar un negocio (peluquería en este caso)
const peluqueria = new Negocio('Tijeras', 'Scabritney 123', 1198765412);

// Verificar si la peluquería está abierta en este momento
console.log(peluqueria.estaAbierto()); 

// Verificar la disponibilidad del servicio de delivery para una distancia específica
console.log(peluqueria.delivery(10));

// Obtener el nombre del negocio
console.log(peluqueria.getNombre());

// Establecer un nuevo nombre para el negocio
peluqueria.setNombre('Nuevo Nombre');

// Agradecer por una recomendación
console.log(peluqueria.recomendar());
```

## Notas Importantes

-   El estado de apertura se determina según el horario de trabajo, que se establece entre las 8:00 y las 20:00 horas.
-   El servicio de delivery está disponible para distancias menores o iguales a 15 unidades.
