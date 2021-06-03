import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HomeAboutSection = styled(motion.div)`
    margin-bottom: 200px;
`


export const About = styled.div`
    width: 100%;

    h2{
        width: 60%;
        font-size: 2.3rem;
        font-weight: 400;
        margin-left: 124px;
        color: ${props => props.theme.text};
    }

    p {
        max-width: 440px;
        font-size: 1rem;
        line-height: 1.6rem;
        margin-left: 124px;
        color: ${props => props.theme.text};
    }  
` 
export const Services = styled.div`
    overflow: hidden;
    padding-left: 40px;

    span {
        width: 100%;
        margin: 8px 0;
        font-size: .875rem;
        color: ${props => props.theme.red};
        display: block;
        font-weight: 300;
    }
` 



// Accordion
export const AccordionHeader = styled(motion.div)`
    width: 100%;
    color: ${props => props.theme.red};
    height: 32px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.15rem;
    margin: 8px 0;
`

export const AccordionIcon = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 8px;

    span {
        width: 16px;
        height: 4px;
        background: ${props => props.theme.red};
        transition: .1 ease-in-out;
    }
`

export const AccordionContent = styled(motion.div)`
    overflow: hidden;
    padding-left: 40px;
    span {
        width: 100%;
        margin: 8px 0;
        font-size: 0%.875rem;
        color: ${props => props.theme.red};
        display: block;
        font-weight: 300;
    }
`