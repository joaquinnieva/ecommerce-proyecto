import React from "react";
import "./styles/CGCoins.css";
import Images from "./Images";
import { Link } from "react-router-dom";

function CGCoins() {
  return (
    <div className="cont-page-cg">
      <img className="cg-img" src={Images.gamercoins} />

      <Link to="/">
        <div className="back-button">
          <img className="back-button-image" src={Images.volver} />
          VOLVER
        </div>
      </Link>

      <div className="cg-content">
        <div className="cg-info">
          <h1 className="cg-title"> ¿QUE SON LOS GAMERCOINS? </h1>
          <p className="cg-text">
            Es un beneficio que brinda COMPRA GAMER a sus clientes premiando sus
            compras, divulgaciones y participaciones por medio de un saldo
            digital contabilizado en GamerCoins. Mediante esta moneda llamada
            GamerCoins se puede utilizar directamente en descuentos parciales
            sobre cualquier producto que este comercializando COMPRA GAMER.
            Sujeto a disponibilidad de stock.
          </p>
        </div>

        <img className="cg-border" src={Images.border} />

        <div className="cg-info">
          <h2 className="cg-title"> ¿CÓMO LOS CONSIGO?</h2>
          <p className="cg-text">
            • COMPRÁS Y SUMÁS: Mediante compras en COMPRA GAMER, cada producto
            y/o pedido especifica cuantos GamerCoins otorga. La cantidad de
            GamerCoins que brinda cada producto es variable y no es un
            porcentaje fijo (estos valores pueden cambiar sin previo aviso),
            pudiendo algún producto no otorgar el beneficio. Para obtener el
            beneficio de los GamerCoins el usuario tiene que aceptar antes los
            términos y condiciones y estar registrado con una cuenta asociado al
            perfil de Facebook.
          </p>
        </div>
        <div className="cg-info">
          <h2 className="cg-title">¿DÓNDE VEO MIS GAMERCOINS ACUMULADOS?</h2>
          <p className="cg-text">
            Desde el apartado "Mi cuenta" y con detalle yendo al botón de
            GamerCoins.
          </p>
        </div>
        <div className="cg-info">
          <h2 className="cg-title">¿PARA QUE SIRVEN LOS GAMERSCOINS?</h2>
          <p className="cg-text">
            Los GamerCoins se puede utilizar directamente en descuentos
            parciales sobre cualquier producto que este comercializando COMPRA
            GAMER. Sujeto a disponibilidad de stock. El máximo descuento
            aplicable hoy a un pedido es de hasta un 70% del valor total de
            dicho pedido.
          </p>
        </div>
        <div className="cg-info">
          <h2 className="cg-title">¿CUANTO VALEN LOS GAMERCOINS?</h2>
          <p className="cg-text">
            El valor de los GamerCoins está relacionado con el dólar
            estadounidense. Siendo la relación: 10(DIEZ) GamerCoins equivalentes
            a 1(UN) DÓLAR.
          </p>
        </div>
        <div className="cg-info">
          <h2 className="cg-title">¿SE VENCEN MIS GAMERCOINS?</h2>
          <p className="cg-text">
            Los GamerCoins no vencen y no son transferibles.
          </p>
        </div>
        <div className="cg-info">
          <h2 className="cg-title">SOBRE EL USO DE LOS GAMERCOINS</h2>
          <p className="cg-text">
            Al momento de usar los GamerCoins para un descuento en la compra, se
            realiza un canje de GamerCoins a pesos argentinos, tomando como
            cotización el valor informado en la parte inferior derecha de la web
            "www.compragamer.com". En caso de cancelarse el pedido o devolverse
            la compra se realizara un nuevo canje de pesos a GamerCoins con la
            cotización al momento de la cancelación con la finalidad de
            reintegrar el descuento.
            <br /> Los GamerCoins obtenidos por una compra se hacen efectivos
            una vez realizado el pago y la facturación de dicho pedido. En caso
            de devolución de/los producto/s comprado/s se le restaran del saldo
            de los GamerCoins obtenidos por dicha compra. Llegado al caso de que
            el saldo en GamerCoins quedara negativo por dicha devolución el
            cliente tendrá que abonar la diferencia descontada o devolver el/los
            producto/s obtenido/s con este beneficio.
            <br /> Bajo ningún concepto los GamerCoins podrán ser canjeados por
            dinero en COMPRA GAMER.
          </p>
        </div>
        <div className="cg-info">
          <h2 className="cg-title">RESPONSABILIDAD</h2>
          <p className="cg-text">
            COMPRA GAMER no se hace responsable por hackeos y/o robos de los
            accesos a las cuentas que posibiliten el uso de GamerCoins por
            personas ajenas a la cuenta vinculada.
          </p>
        </div>
        <img className="cg-border" src={Images.border} />
        <p className="cg-copy">
          2018 ©CompraGamer Todos los derechos reservados. COMPRA GAMER, el
          logotipo de COMPRA GAMER, GAMER COINS y sus combinaciones son marcas
          registradas de Newton Station SLR
        </p>
      </div>
    </div>
  );
}

export default CGCoins;
