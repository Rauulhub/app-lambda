# LABORATORIO APP en NodeJS para lambda

## Descripción:

  Se implementa codigo en nodeJs para ser empaquetado y enviado a una lambda.
  Se crean los siguientes endpoints en la API:
  
  1. Healthcheck
    
      ● Método: GET
      
      ● Endpoint: /healthcheck
      
      ● Request: No requiere body.
      
      ● Response:
  ```
     {
      "status": "ok",
      "timestamp": "2024-11-19T14:30:00Z"
      }
  ```

  2. Conversión de Monedas
     
      ● Método: POST
     
      ● Endpoint: /convert
     
      ● Request:

  ```
      {
      "amount": 100,
      "from": "USD",
      "to": "EUR"
      }
  ```

○  amount (number): Monto a convertir.

○ from (string): Moneda de origen (ej., USD).

○ to (string): Moneda de destino (ej., EUR).

  el uso de Github actions se programo para que en diferentes fases:
      
    fase 1: push se ejecuta `npm ci`, luego se empaqueta el archivo y se envia a la lambda
    

