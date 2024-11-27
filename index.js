const axios = require('axios');

exports.handler = async (event) => {
  try {
    const { path, httpMethod, body } = event;

    // Rutas
    if (path === '/healthcheck' && httpMethod === 'GET') {
      return {
        statusCode: 200,
        body: JSON.stringify({
          status: 'OK',
          timestamp: new Date().toISOString(),
        }),
      };
    }

    if (path === '/convert' && httpMethod === 'POST') {
      if (!body) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Invalid request body' }),
        };
      }

      const { amount, base_currency, target_currency } = JSON.parse(body);

      if (!amount || !base_currency || !target_currency) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Missing required fields' }),
        };
      }

      // Lógica de conversión de monedas
      const apiKey = 'd2f1e847bfc07d987036fef1'; // Reemplaza con tu API key de exchangerate-api.com
      const url = `https://v6.exchangerate-api.com/v6/d2f1e847bfc07d987036fef1/latest/${base_currency}`;

      const response = await axios.get(url);
      const rates = response.data.conversion_rates;

      if (!rates || !rates[target_currency]) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Invalid currency code' }),
        };
      }

      const convertedAmount = amount * rates[target_currency];

      return {
        statusCode: 200,
        body: JSON.stringify({
          amount,
          base_currency,
          target_currency,
          converted_amount: convertedAmount,
        }),
      };
    }

    // Ruta no encontrada
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Not Found', message: 'Resource not found' }),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
