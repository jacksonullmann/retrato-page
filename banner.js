document.addEventListener("DOMContentLoaded", () => {
  const pad = n => String(n).padStart(2, "0"),
        meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho",
                 "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
        update = () => {
          const hoje = new Date(),
                dias = [-2, -1, 0].map(o => {
                  const d = new Date(hoje);
                  d.setDate(d.getDate() + o);
                  return pad(d.getDate());
                }),
                mes = meses[hoje.getMonth()];
          document.getElementById("dynamicDates").textContent =
            `${dias[0]}, ${dias[1]} e ${dias[2]} de ${mes}`;
        };
  update();
  const agora = new Date(),
        msParaMN = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate()+1) - agora;
  setTimeout(() => {
    update();
    setInterval(update, 24*60*60*1000);
  }, msParaMN);
});
