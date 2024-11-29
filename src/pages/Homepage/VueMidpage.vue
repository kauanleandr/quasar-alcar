<template>
  <!-- em obras executadas / obras entregues HTML -->

  <section class="numbers">
    <div class="container">
      <div class="number-card">
        <h3>+ de 13.000 m²</h3>
        <p>obras executadas</p>
      </div>
      <div class="number-card">
        <h3>+ de 100</h3>
        <p>obras entregues</p>
      </div>
    </div>
  </section>

  <!-- FIM em obras executadas / obras entregues HTML -->

  <!-- diferenciais HTML -->

  <section class="diferenciais">
    <div class="container">
      <h2>Nossos Diferenciais</h2>
      <ul>
        <li>Todas as nossas obras são regularizadas</li>
        <li>Nossas obras são acompanhadas diariamente por engenheiros civis</li>
        <li>Comunicação assertiva, resolutiva e transparente</li>
        <li>Equipe formada por colaboradores experientes</li>
        <li>Prazo respeitado com cronograma estipulado</li>
        <li>Relatórios semanais com acompanhamento físico e financeiro</li>
        <li>Entrega com qualidade, superando expectativas</li>
      </ul>
    </div>
  </section>

  <!-- FIM diferenciais HTML -->
</template>
<script>
export default {
  name: "VueMidpage",
};
</script>
<style>
/* Estilo para "Diferenciais" */
.diferenciais {
  background-color: #ffffff;
  padding: 60px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: -10px auto;
}

.diferenciais h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #000000;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.diferenciais ul {
  list-style: none;
  padding: 0;
}

.diferenciais ul li {
  font-size: 1.2rem;
  margin-bottom: 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  border-left: 5px solid #23bacf;
  border-radius: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.diferenciais ul li:hover {
  transform: translateX(10px);
  background-color: #e9f7ff;
}

.diferenciais ul li::before {
  content: "✔";
  color: #23bacf;
  font-weight: bold;
  margin-right: 15px;
}

/* em obras executadas / obras entregues CSS */
.number-card {
  display: inline-block;
  width: 42%;
  margin: 1rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para destacar */
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* Efeito suave */
}

.number-card h3 {
  font-size: 2.5rem;
  color: #23bacf;
  margin-bottom: 1rem;
}
.numbers {
  display: grid; /* Usando Grid Layout */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsivo */
  gap: 20px; /* Espaçamento entre itens */
  background: #f4f4f4;
  padding: 1.5rem;
  text-align: center;
}
.number-card:hover {
  transform: translateY(-5px); /* Elevação ao passar o mouse */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
/* FIM / em obras executadas / obras entregues CSS */

/* Responsividade */
@media (max-width: 768px) {
  .diferenciais {
    margin-top: 0px;
  }
  .diferenciais h2,
  .qmsomos h2 {
    font-size: 2rem;
  }

  .diferenciais ul li,
  .qmsomos p {
    font-size: 1rem;
  }
  .number-card {
    display: inline-block;
    width: 42%;
    margin: 1rem;
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para destacar */
    transition: transform 0.2s ease, box-shadow 0.2s ease; /* Efeito suave */
  }

  .number-card h3 {
    font-size: 1rem;
    color: #23bacf;
    margin-bottom: 0rem;
  }
  .numbers {
    display: grid; /* Usando Grid Layout */
    grid-template-columns: repeat(
      auto-fit,
      minmax(300px, 1fr)
    ); /* Responsivo */
    gap: 20px; /* Espaçamento entre itens */
    background: #f4f4f4;
    padding: 0rem;
    text-align: center;
  }
  .number-card:hover {
    transform: translateY(-5px); /* Elevação ao passar o mouse */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
}
/*  */
</style>
