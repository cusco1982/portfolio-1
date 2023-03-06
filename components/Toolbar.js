import Head from 'next/head';

import styles from '../styles/Toolbar.module.css';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Toolbar() {



    return (

        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&display=swap" rel="stylesheet" />
            </Head>






            <div className={styles.navbar}>




                <Col lg={3} style={{ padding: "0", marginTop: "7px" }}>
                    <div style={{ backgroundColor: "", fontSize: "7vw", fontFamily: "'Monsieur La Doulaise', cursive", textAlign: "left", margin: "0", paddingLeft: "35px", letterSpacing: "5px" }}>

                        <a style={{ textDecoration: "none", color: "#F4B400" }} href="/">Gage</a>


                    </div>
                </Col>


                <Col style={{ margin: "auto" }}>
                    <div style={{ display: "flex", backgroundColor: "", fontSize: "20px" }}>
                        <a className={styles.navLink} style={{ textDecoration: "none", color: "black", padding: "10px", margin: "7px" }} href="/projects">Projects</a>
                        <a className={styles.navLink} style={{ textDecoration: "none", color: "black", padding: "10px", margin: "7px" }} href="/projects">Alt Processes</a>
                        <a className={styles.navLink} style={{ textDecoration: "none", color: "black", padding: "10px", margin: "7px" }} href="/projects">Visual Experimentations</a>
                        <a className={styles.navLink} style={{ textDecoration: "none", color: "black", padding: "10px", margin: "7px" }} href="/projects">Social</a>
                        <a className={styles.navLink} style={{ textDecoration: "none", color: "black", padding: "10px", margin: "7px" }} href="/projects">Blog</a>
                        <a className={styles.navLink} style={{ textDecoration: "none", color: "black", padding: "10px", margin: "7px" }} href="/projects">CV</a>
                        <a className={styles.navLink} style={{ textDecoration: "none", color: "black", padding: "10px", margin: "7px" }} href="/projects">Design Studio</a>
                    </div>
                </Col>




            </div>
        </>

    );
}

export default Toolbar;