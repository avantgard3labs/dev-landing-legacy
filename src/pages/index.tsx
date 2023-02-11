import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/Navbar/navbar";
import Landing from "@/components/Landing/landing";
import Services from "@/components/Services/services";
import Team from "@/components/Team/team";
import Clients from "@/components/Clients/clients";
import Testimonials from "@/components/Testimonials/testimonials";
import Contact from "@/components/Contact/contact";
import Footer from "@/components/Footer/footer";
import config from "react-reveal/globals";
config({ ssrFadeout: true });

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    AvantGarde | Crypto Trading, Investing, and Analysis
                </title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <NavBar />
            <main className="flex flex-col justify-center items-center">
                <Landing />
                <Services />
                <Team />
                <Clients />
                <Testimonials />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
