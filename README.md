# LABORATORIO APP en NodeJS para lambda

## Descripción:

  Se implementa codigo en nodeJs para ser empaquetado y enviado a una lambda, para la infraestructura referirse al repositorio (https://github.com/Rauulhub/lab-lambda-tf).
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

Resultando:

  ```
      {
        "convertedAmount": 92.5,
        "rate": 0.925,
        "from": "USD",
        "to": "EUR"
      }
  ```

  De igual manera se tiene prevencion de errores

 * Response (400 Bad Request):
   
 ```
  {
  "error": "Invalid input: 'amount' must be greater than zero."
  }
 ```

* Response (500 Internal Server Error):

```
  {
  "error": "Failed to fetch exchange rate."
  }
```

  el uso de Github actions se programo para que en diferentes fases:
      
    fase 1: push se ejecuta `npm ci`, luego se empaqueta el archivo y se envia a la lambda
    

