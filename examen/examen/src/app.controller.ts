import { AppService } from './app.service';
import { Controller, Get, Query, NotFoundException, HttpCode } from '@nestjs/common';

/* Realizar servicio REST con la siguiente configuración:
 
- Obtener uno
Método: GET
URL: /casa
Codigo Respuesta: 200
Return : [{ id:1, nombre:"Casa 1"}, { id:2, nombre:"Casa 2"}]
 
En este caso si nos envían el parámetro de respuesta "idCasa" devolvemos solamente el objeto de la casa correspondiente,
 
 
Ejemplo1:
 
Método: GET
URL: /casa?idCasa=1
Codigo Respuesta: 200
Return : [{ id:1, nombre:"Casa 1"}]
 
Ejemplo2:
 
Método: GET
URL: /casa?idCasa=2
Codigo Respuesta: 200
Return : [{ id:1, nombre:"Casa 2"}]
 
Ejemplo3:
 
Método: GET
URL: /casa?idCasa=3
Codigo Respuesta: 404
Return : "No se encuentra" */

@Controller()
export class AppController {
  @Get('/casa')
  @HttpCode(200) // Código de respuesta 200 por defecto, pero lo ponemos explícito
  getCasa(@Query('idCasa') idCasa: string) {
    const casas = [
      { id: 1, nombre: 'Casa 1' },
      { id: 2, nombre: 'Casa 2' },
    ];

    if (!idCasa) {
      return casas;
    }

    const id = parseInt(idCasa, 10);
    const casa = casas.find((c) => c.id === id);

    if (casa) {
      return [casa];
    } else {
      throw new NotFoundException('No se encuentra');
    }
  }
}
