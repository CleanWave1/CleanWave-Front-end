<script>
export default {
  name: "pay-service"
}
</script>

<template>
  <div class="containerPayService">
    <div class="formPayService">
      <div class="savePayService">
        <h4>Guardar método de pago para futuras compras</h4>
        <pv-input-switch></pv-input-switch>
      </div>
      <div class="payMethod">
        <div class="textPayMethod">
          <h2>Método de Pago</h2>
          <p>Elije como deseas pagar el servicio</p>
        </div>
        <div class="buttonsPayMethod">
          <pv-button class="buttonsPayMethodBtn">Pagar con Tarjeta</pv-button>
          <pv-button class="buttonsPayMethodBtn">Pagar con Paypal</pv-button>
        </div>
        <div class="formPayMethod">
          <h3>Tarjeta de débito o crédito</h3>
          <div class="formPayMethodInput">
            <div class="form-input">
              <h3>Nombre</h3>
              <pv-input-text class="forn-input-text"></pv-input-text>
            </div>
            <div class="form-input">
              <h3>Apellidos</h3>
              <pv-input-text class="forn-input-text"></pv-input-text>
            </div>
          </div>
          <div class="cardNumber">
            <h3>Número de Tarjeta</h3>
            <pv-input-text class="forn-input-text"></pv-input-text>
          </div>
          <div class="formPayMethodInput">
            <div class="form-input">
              <h3>Fecha de Expiración</h3>
              <pv-input-text class="forn-input-text"></pv-input-text>
            </div>
            <div class="form-input">
              <h3>CVV</h3>
              <pv-input-text class="forn-input-text"></pv-input-text>
            </div>
          </div>
          <div class="formPayMethodInput">
            <div class="form-input">
              <h3>País/Región</h3>
              <pv-input-text class="forn-input-text"></pv-input-text>
            </div>
            <div class="form-input">
              <h3>Código Postal</h3>
              <pv-input-text class="forn-input-text"></pv-input-text>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cardPayService">
      <h2>Plan Básico</h2>
      <p>Mensual</p>
      <div class="payDetais">
        <h3>04/06/2024</h3>
        <h2>S/.30.00</h2>
      </div>
      <pv-button class="cardPayServiceBtn">Subscribirse</pv-button>
    </div>
  </div>
</template>


<style scoped>
.containerPayService{
  display: flex;
  padding:100px 30px;
  color:black;
}
.formPayService{
  border: gray solid 3px;
  width: 40rem;
  border-radius:50px;
  padding:20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}
.savePayService{
  display: flex;
  width: 20rpx;
  color:black;
  justify-content:space-between;
  align-items:center;
  border: black solid 1px;
  border-radius:40px;
  padding: 12px 20px;
  background-color: #DCFFE2;
}
.payMethod{
  display: flex;
  flex-direction: column;
  border:black solid 1px;
  border-radius:30px;
  padding: 20px;
  background-color: #DCFFE2;
  margin-top:20px
}
.buttonsPayMethod{
  display: flex;
  justify-content:center;
  width: 30rem;
  align-items: center;
  text-align:center;
  margin: 15px 0;
}
.buttonsPayMethodBtn{
  padding:12px 20px;
  border:black solid 2px;
  color:black;
  background-color:#9FFFB0;
  margin: 0 20px;
}
.formPayMethodInput{
  display: flex;
  justify-content: space-between;
  width: 30rem;
  align-items: center;
}
.form-input{
  margin: 8px 0;
  margin-right:15px

}
.forn-input-text{
  padding: 3px 10px;
  width: 15.5rem;
}
.cardNumber .forn-input-text{
  width: 32rem;
}
.cardPayService {
  display: flex;
  flex-direction: column;
  margin-left:30px;
  border: gray solid 3px;
  width: 25rem;
  height: 20rem;
  padding: 40px;
  border-radius:50px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}
.cardPayService h2{
  font-size: 32px;
  font-weight: bold;
}
.payDetais{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
}
.cardPayServiceBtn{
  padding:12px 20px;
  border:black solid 2px;
  color:black;
  background-color:#9FFFB0;
  margin: 20px 20px;
  width: 15rem;
  justify-self: center;
  justify-content: center;
}
</style>