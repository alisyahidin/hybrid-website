import React from 'react'
import Head from 'next/head'
import { GlobalStyle, ContentWrapper, ScrollWrapper } from '../components/View/About/About.style'
import { DrawerProvider } from '../contexts/DrawerContext'
import Navbar from '../components/View/About/Navbar'
import { Container, Segment, Row, Col } from '../components/UI'
const About = () => {
    return (
        <>
            <Head>
                <title>About | Hybrid:H</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900"
                    rel="stylesheet"
                />
            </Head>
            <GlobalStyle />
            <ContentWrapper>
                <DrawerProvider>
                    <Navbar />
                </DrawerProvider>
                <ScrollWrapper>
                    <Segment height="90vh" />
                    <Container noGutter mobileGutter className="scroll__wrapper">
                        <Segment as="section" id="first" bg="red" gridRow={1}>
                            <Row>
                                <Col sm={6} md={3} bg="primary">
                                    Test
                                </Col>
                                <Col sm={6} md={3} bg="secondary">
                                    Test
                                </Col>
                                <Col sm={6} md={3} bg="primary">
                                    Test
                                </Col>
                                <Col sm={6} md={3} bg="secondary">
                                    Test
                                </Col>
                            </Row>
                        </Segment>
                        <Segment as="section" id="second" height={'200vh'} bg="white" />
                        <Segment as="section" id="third" height={'200vh'} bg="primary" />
                        <Segment as="section" id="fourth" height={'200vh'} bg="secondary" />
                    </Container>
                </ScrollWrapper>
            </ContentWrapper>
        </>
    )
}

export default About
