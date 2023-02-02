//img and icons
import { FaGithub, FaPhone, FaMapSigns, FaMailBulk } from "react-icons/fa";

//component

//hooks
import Navbar from "../../layout/navbar/Navbar";

import styles from "./styles/Contact.module.css";

function Contact() {
  return (
    <section className={styles.backend_container}>
      <header className={styles.header}>
        <Navbar />
        <h1 className={styles.title}>
          <span>Como falar comigo?</span>
        </h1>
      </header>

        <div className={styles.content_container}>
            <div className={styles.left_content}>
            <ul>

                <li className={styles.left_content_item}>
                <div className={styles.icon_container}>
                    <FaGithub />
                </div>

                <div className={styles.text_content}>
                    <h3><a href="https://github.com/DiogoAlves2004" target='_blank'>GitHub</a></h3>
                    <p>
                        Meu github pessoal, para voce olhar os meus projetos
                    </p>
                </div>
                </li>

                <li className={styles.left_content_item}>
                <div className={styles.icon_container}>
                    <FaPhone />
                </div>
                <div className={styles.text_content}>
                   <h3> 
                    <a href="https://api.whatsapp.com/send?phone=5531997364225&text=Tenho%20interesse%20em%20seu%20curriculo%20como%20programador!" target='_blank'>+55 &#10096; 31 &#10097; 9 9736-4225</a>
                   </h3>
                    <p>
                        Meu número pessoal, também disponível  pelo whatsapp
                    </p>
                </div>
                </li>

                <li className={styles.left_content_item}>
                <div className={styles.icon_container}>
                    <FaMapSigns />
                </div>
                <div className={styles.text_content}>
                    <h3>Minha cidade</h3>
                    <p>
                        Rua capela, Miramar, Belo Horizonte, Minas Gerais
                    </p>
                </div>
                </li>

                <li className={styles.left_content_item}>
                <div className={styles.icon_container}>
                    <FaMailBulk />
                </div>
                <div className={styles.text_content}>
                    <h3>
                    <a href="mailto:alvessilva52@gmail.com?subject=Acabei de ver o seu portifolio&body=Ola, analisei seu portifolio e vejo que voce e um grande programador, quando puder me retorne por aqui!">Enviar: alvessilva524@gmail.com</a>
                    </h3>
                    <p>
                        Esse e o meu e-mail, caso tenha gostado do meu trabalho ficarei feliz em ver o seu nome na minha caixa de mensagens &#10096; aberto a críticas construtivas e a propostas de trabalho &#10097;
                    </p>
                </div>
                </li>

            </ul>
            </div>

            <div className={styles.right_content}>
                <div className={styles.map}>
                    <div className={styles.map1}>
                        <iframe className={styles.map2} id="gmap_canvas" src="https://maps.google.com/maps?q=rua%20capela&t=& z=11&ie=UTF8&iwloc=&output=embed" frameBorder='0' scrolling="no" >

                        </iframe>
                        <a href="https://123movies-to.org"></a>
                    </div>
                </div>
            </div>


        </div>
    </section>
  );
}
export default Contact;
