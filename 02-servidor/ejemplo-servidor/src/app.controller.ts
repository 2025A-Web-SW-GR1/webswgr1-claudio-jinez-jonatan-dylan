import { Controller, Get, Param, Query, Headers, Post, Body, HttpCode, NotFoundException} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/ejemplo/:id') // /ejemplo/1?hola=mundo
  @HttpCode(200) // Para modificar el codigo http
  ejemplo(
    @Param('id') id, // Parametro de ruta
    @Query('hola') hola, // Parametro de busqueda
    @Headers('escuela') escuela, // Cabezara llamada escuela
    @Body('monto') monto, // Parametro de cuerpo
  ): string {
    return id + hola + ' Funcionando ' + escuela + monto;
  }

  // TRABAJO EN CLASE
  /*
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
Return : "No se encuentra"
  */

@Get('/casa')
  getCasa(
    @Query('idCasa') idCasa: string
  ) {
    const casas = [
      { id: 1, nombre: 'Casa 1' },
      { id: 2, nombre: 'Casa 2' },
    ];

    if (!idCasa) {
      return casas;
    }

    // Convertimos el idCasa a número para comparar
    const id = parseInt(idCasa);

    // Buscamos la casa que coincida
    const casa = casas.find((c) => c.id === id);

    if (casa) {
      return [casa];
    } else {
      // Si no se encuentra, lanzamos excepción 404
    throw new NotFoundException("No se encuentra");
  }
    }
  }
  

