'use client'

import Link from "next/link";
import Image from 'next/image'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa'

// import logo from '../../public/images/logo.png'

import {
  Footer,
  Divider,
  Newsletter,
  FooterHeader,
  FooterContent,
  NewsletterIcons,
  FooterCopyRight,
  FooterBoxContent,
  FooterCopyContent,
  FooterContainerCopyright,
} from "./style";

export default function FooterContainer() {
  return (
    <Footer>
      <FooterHeader>
        {/* <Image loading="lazy" src={logo} alt=""/> */}
        <p>Transformando visitantes em clientes.</p>
      </FooterHeader>
      <FooterContent>
        <FooterBoxContent>
          <h3>Links Principais</h3>
          <Link href="/#">Home</Link>
          <Link href="/#">Ferramenta</Link>
          <Link href="/#">Preços</Link>
          <Link href="/#">Contato</Link>
        </FooterBoxContent>
        <FooterBoxContent>
          <h3>Cases</h3>
          <Link href="/#">Geração de Leads B2B</Link>
          <Link href="/#">Geração de Leads em Software</Link>
          <Link href="/#">Geração de Leads em Imobiliária</Link>
          <Link href="/#">Cases de Sucesso</Link>
        </FooterBoxContent>
        <FooterBoxContent>
          <h3>Materiais</h3>
          <Link href="/#">Blog</Link>
          <Link href="/#">Parceria com Agências</Link>
          <Link href="/#">Guia Definitivo do Marketing</Link>
          <Link href="/#">Materiais Gratuitos</Link>
        </FooterBoxContent>
        <FooterBoxContent>
          <h3>Siga a Leadster</h3>
          <Newsletter>
            <NewsletterIcons>
              <FaLinkedinIn/>
            </NewsletterIcons>
            <NewsletterIcons>
              <FaFacebookF/>
            </NewsletterIcons>
            <NewsletterIcons>
              <FaInstagram/>
            </NewsletterIcons>
          </Newsletter>
          <p>E-mail: <Link href="/#">contato@leadster.com.br</Link></p>
          
          <p>Telefone: <Link
            href={{
              pathname: "https://api.whatsapp.com/send/?phone=554298828-9851",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            (42) 98828-9851
          </Link></p>
          
        </FooterBoxContent>
      </FooterContent>

      <FooterContainerCopyright>
        <FooterCopyContent>
          <FooterCopyRight>
            <p>
              Copyright &copy; 2015 - 2022 Todos os direitos reservados <Divider></Divider> <Link href="/partners">Leadster</Link>
            </p>
          </FooterCopyRight>
          
          <p>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</p>
        </FooterCopyContent>
      </FooterContainerCopyright>
    </Footer>
  );
}
