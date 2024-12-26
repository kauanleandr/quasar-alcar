<template>
  <div class="tudo">
    <Topbar msg="topbar da pagina" />
    <section class="diferenciais">
      <div class="container">
        <h2>Contatos</h2>
        <ul>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=5591987377403&text&type=phone_number&app_absent=0"
              target="_blank"
              >(91) 98737-7403</a
            >
          </li>
          <li>(91) 98242-2476</li>
          <li>
            <a href="https://www.instagram.com/alcarengenharia/" target="_blank"
              >@alcarengenharia</a
            >
          </li>
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Jeffersonmoreiraa@gmail.com"
              target="_blank"
            >
              Jeffersonmoreiraa@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com.br/maps/place/Edif%C3%ADcio+Tropical+Center+-+Aldo+Nascimento+%7C+Contabilidade/@-1.4517556,-48.4743523,3a,75y,41.9h,80.99t/data=!3m7!1e1!3m5!1s3itQGDyNjsBqFzWoTDja0w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D9.006304480239024%26panoid%3D3itQGDyNjsBqFzWoTDja0w%26yaw%3D41.89674571595626!7i16384!8i8192!4m7!3m6!1s0x92a48db7b96ec647:0xc16e15a40dfd8c61!8m2!3d-1.4515956!4d-48.4743346!10e5!16s%2Fg%2F11ty13tr68?entry=tts&g_ep=EgoyMDI0MTEyNC4xIPu8ASoJLDEwMjExMjMzSAFQAw%3D%3D"
              target="_blank"
              >ED. TROPICAL CENTER, AV. GOV. MAGALHES BARATA 695 SALA 103,
              BELÉM-PA</a
            >
          </li>
        </ul>
      </div>
    </section>
    <VueFooter msg="footer da pagina" />
  </div>
</template>

<script>
import Topbar from "src/layouts/Topbar.vue";
import VueFooter from "src/layouts/VueFooter.vue";
export default {
  name: "VueContato",
  components: {
    Topbar,
    VueFooter,
  },
};
</script>
<style>
h2 {
  font-family: serif;
  font-weight: bold;
  color: #000000;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 30px;
  margin-top: 110px;
}

ul li::before {
  content: "✔";
  color: #23bacf;
  font-weight: bold;
  margin-right: 15px;
}

ul li:hover {
  transform: translateX(10px);
  background-color: #e9f7ff;
}

ul li {
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

ul {
  list-style: none;
  padding: 0;
}

.container a:hover {
  color: #23bacf;
}
a {
  color: black;
}

.contatos {
  margin-top: 110px;
}
</style>
