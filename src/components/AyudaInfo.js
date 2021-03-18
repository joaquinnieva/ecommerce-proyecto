import React from "react";
import "./styles/AyudaInfo.css";

function AyudaInfo() {
  return (
    <div className="cont-page">
      <div className="cont-texto-ayuda">
        <div className="ayuda-titulo">
          <h2>• Preguntas frecuentes</h2>
        </div>
        <p>
          <b>¿Cómo hago un pedido?</b> Para armar un pedido simplemente vas
          agregando al carrito todos los productos que queres, y al finalizar
          pones comprar. En el 1er paso te pregunta si necesitas envío, luego la
          forma de pago, luego accedes como cliente o creas un cliente nuevo
          según corresponda confirmas el pedido y te asigna un número de pedido
          y te da los datos de pago según corresponda.
        </p>
        <br />
        <p>
          <b>¿Cómo uso el servicio de PosVenta y garantías?</b>
          Al pie de esta web nos tenes que dejar la consulta con un motivo de
          los que comiencem con 'PosVenta ...' y el servicio ténico va a estar
          respondiendo.
        </p>
        <br />
        <p>
          <b>
            ¿Cómo obtengo el juego y/o beneficios de los productos que se
            promocionan ese beneficio?
          </b>
          Todos los canjes de los juegos y/o beneficios se hacen de forma
          posterior a la entrega del producto y es totalmente de forma digital.
          Los canjes se realiza desde www.compragamer.com/canje con los datos de
          la factura de compra y el mail registrado en la compra. Se toma como
          fecha válida, para la vigencia de las promociones, la fecha en que fue
          creado el pedido vía web por el cliente, y no la fecha de pago ni la
          fecha de la factura. Considere que si realizó la compra del producto
          en promoción, en tiempo y forma, y no puede realizar el canje dentro
          de la fecha, ello se debe a que no se cuenta con stock de códigos. Así
          mismo, sepa que la disponibilidad de códigos es limitada, y una vez se
          agota, no será posible realizar el canje.
        </p>
        <br />
        <p>
          <b>¿Son precios Finales o más IVA?</b> Todos los precios son finales
          IVA incluido.
        </p>
        <br />
        <p>
          <b>¿Los precios publicados en la web en que moneda están?</b> Todos
          los precios de la web están expresados en pesos argentinos.
        </p>
        <br />
        <p>
          <b>¿Que costo tiene un envío?</b> El costo del mismo se abona con el
          pedido, es decir, el pedido incluye el costo del envío. El valor del
          envío depende de las dimensiones del paquete y distancia. Podrás saber
          el costo del envío en tiempo real desde www.compragamer.com ingresando
          tu código postal en el producto a adquirir o a tu pedido. Y según el
          pedido desde la misma web se le informa si es bonificado el mismo.
        </p>
        <br />
        <p>
          <b>¿Hacen envíos al interior?</b> Hacemos envíos a todo el país
          mediante OCA, que es un servicio Puerta a Puerta (puede llegar a tu
          domicilio o a la sucursal de OCA más cercana a tu domicilio).
        </p>
        <br />
        <p>
          <b>¿Hacen factura A? ¿Cómo la solicito?</b> Efectivamente hacemos
          factura A, y en el caso de ser un cliente nuevo tiene que ingresar el
          cliente con número de CUIT y en las observaciones del pedido aclarar
          que es con factura A.
        </p>
      </div>
    </div>
  );
}
export default AyudaInfo;
