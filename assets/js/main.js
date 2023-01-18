function Calculadora() {
  this.display = document.querySelector(".display");
  this.btnClear = document.querySelector(".btn-clear");

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaTeclas();
  };

  this.cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num") || el.classList.contains("btn-op"))
        this.btnParaDisplay(el.innerText);

      if (el.classList.contains("btn-clear")) this.clearDisplay();
      if (el.classList.contains("btn-del")) this.apagaUm();
      if (el.classList.contains("btn-res")) this.realizaConta();
    });
  };

  this.pressionaTeclas = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) this.realizaConta();
    });
  };

  this.btnParaDisplay = (ref) => {
    this.display.value += ref;
    this.display.focus();
  };

  this.clearDisplay = () => {
    this.display.value = "";
  };

  this.apagaUm = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.realizaConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert("Conta invalida!");
        return;
      }
      this.display.value = String(conta);
    } catch (error) {
      alert("Conta invalida!");
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
