import React from 'react'
import { Facebook, Instagram, Vimeo } from '../../assets/svg/social-icons'
import { Container, Flex } from '../../globalStyles'
import { FooterNav, FooterContent, FooterSocial } from './footerStyle'

const Footer = ({ onCursor }) => {
    return (
        <FooterNav>
            <Container>
                <Flex spaceBetween>
                    <FooterContent>
                        <p>982.315.1234</p>
                        <p>info@uct.studio</p>
                    </FooterContent>
                    <FooterContent wider>
                        <p>15 Cam at Unit B</p>
                        <p>Uludag University TE</p>
                    </FooterContent>
                    <FooterSocial>
                        <a onMouseEnter={() => onCursor("hovered")} onMouseLeave={onCursor} href="/">
                            <Instagram />
                        </a>
                        <a onMouseEnter={() => onCursor("hovered")} onMouseLeave={onCursor} href="/">
                            <Facebook />
                        </a>
                        <a onMouseEnter={() => onCursor("hovered")} onMouseLeave={onCursor} href="/">
                            <Vimeo />
                        </a>
                    </FooterSocial>
                </Flex>
            </Container>
        </FooterNav>
    )
}

export default Footer
