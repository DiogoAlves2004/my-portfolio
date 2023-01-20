//styles
import styles from "./styles/Home.module.css";

//img
import Perfil from '../../../img/perfil3.png'
//component

import NavbarHome from "../../layout/navbar/NavbarHome";

//hooks
import Button from "../../layout/input/Button";

function Home() {
  return (

      
      <section className={styles.home_container}>

      <NavbarHome />

      

      <div className={styles.image}></div>

      <div className={styles.home_content}>

        <div className={styles.circle}>
          <img src={Perfil} />
        </div>


        <div className={styles.text_content}>
          <h4>Frontend Developer</h4>
          <h1>Diogo Alves</h1>
          <p>
            Desenvolvedor Front-end em React.js, JavaScript, TypeScript, consumo
            de APIs REST. Apaixonado pelo desenvolvimento de componentes
            reutilizáveis. Também amo jogos e academia. Futuro graduado em Analise
            e desenvovlimento de sistemas
          </p>

          <div className={styles.button_container}>
            <Button text='Portifolio' to='portfolio' type='a' />

            <Button text='Contato' to='contact' type='b' />
          </div>

          
        </div>


      </div>

    </section>


  );
}
export default Home;
