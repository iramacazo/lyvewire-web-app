import * as React from "react";
import { Container, Header } from "semantic-ui-react";
import SpeakerInfo from "./components/SpeakerInformation/speaker_info"
import "./styles.css";

export default class LandingPage extends React.Component {
    public render() {
        return (
            <div>
                <Container className='background-container'/>
                <Container className="inner-text">
                    <Header size="huge" className="header-name">
                        The Man: Impeached
                    </Header>
                    <p className='landing-tagline'>Vault Boy gets smashed to bits by a deathclaw</p>
                    <p className='landing-description'>
                        Vault Boy gets smashed to bits by a deathclaw. I need
                        words to fill up this whole (not a badword) thing. What
                        do you expect? I'm a developer, not a writer.
                        ahahhahahahah Just kidding, I'm a musician. You'll see
                        me after 10 years
                    </p>
                </Container>
                <Container className='speakers-container'>
                    <Header size='huge' className='speakers-header'>
                        Speakers
                    </Header>
                    <SpeakerInfo/>
                </Container>
            </div>
        );
    }
}
