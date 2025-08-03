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

import { 
  Controller, Get, Param, Query, Headers,
  Post, Body, HttpCode, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';
/*
type Casa = { 
  id:number;
  nombre:string;
};
*/ 
interface Casa { 
  id: number;
  nombre: string;
};
@Controller()
export class AppController {

  public datos:Casa[] = [{ id:1, nombre:"Casa 1"}, { id:2, nombre:"Casa 2"}, { id:3, nombre:"Casa 3"}];

  constructor(private readonly appService: AppService) {}


  @Get('casa')
  obtenerCasas(
    @Query('idCasa') idCasa: string,
  ): Casa[] {
    const idCasaNumber = Number(idCasa);
    if(!idCasa) return this.datos;
    const resultado = this.datos.filter(a => a.id === idCasaNumber);
    if(resultado.length > 0){
      return resultado;
    }else{
      throw new NotFoundException('No se encuentra')
    }
  }


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/ejemplo/:id') // /ejemplo/1?hola=mundo
  @HttpCode(200)
  ejemplo(
    @Param('id') id, // Parametro de Ruta llamado 'id'
    @Query('hola') hola, // Parametro de consulta llamado 'hola'
    @Headers('escuela') escuela, // Cabecera con nombre 'escuela'
    @Body('monto') monto, // Parametro de cuerpo llamado 'monto'
  ): string {
    return id + hola + ' Funcionando ' + escuela + monto;
    // if(){} else{
    // throw NotFoundException('No encontrado')  }
  }
}
