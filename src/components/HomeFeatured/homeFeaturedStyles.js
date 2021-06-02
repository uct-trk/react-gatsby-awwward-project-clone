import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HomeFeaturedSection = styled(motion.div)`
    margin-bottom: 200px;
    position: relative;

    a{
        margin-bottom: 200px;
        position: relative;
        display: block;
    }
`
export const FeaturedContent = styled(motion.div)`
    height: 480px;
    width: 100%;
    padding: 56px 124px;
    box-sizing: border-box;
    color: ${props => props.theme.text};

    h3 {
        font-size: 1.4rem;
    }
    .meta{
        display: flex;

        h4{
            &:last-child{
                margin-left: 1rem;
            }
        }
    }
    .featured-title {
        position: absolute;
        bottom: -128px;
        font-size: 7rem;
        font-weight: 900;
        line-height: 90px;
        margin: 0;

        .arrow {
            width: 120px;
            height: 80px;
            display: block;
            position: relative;
            overflow: hidden;

            svg {
                position: absolute;
                top: 16px;
                left: -48px;
                width: 108px;

                path{
                    fill: ${props => props.theme.text};
                }
            }
        }
    }
`
export const FeaturedVideo = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 480px;
    top: 0;
    display: block;
    overflow: hidden;
` 
export const FeaturedProjects = styled.div`
    margin-top: 200px;

    button {
        background: ${props => props.theme.red};
        color: #fff;
        position: relative;
        padding: 20px;
        display: block;
        text-align: left;
        font-size: 1.4rem;
        font-weight: 600;
        border: none;

        span {
            margin-right: 100px;
            display: block;
        }

        &:before, &:after {
            content: "";
            position: absolute;
            top: 50%;
            right: 20px;
            width: 35px;
            height: 7px;
            display: block;
            background: #fff;
            transform: translateY(-50%);
        }

        &:before {
            margin-top: -8px;
        }

        &:after {
            margin-top: 8px;
        }
    }
`