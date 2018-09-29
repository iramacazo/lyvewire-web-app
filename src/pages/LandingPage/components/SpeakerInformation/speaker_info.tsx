import * as React from "react";
import {Grid, Image, Popup} from 'semantic-ui-react'
import speaker1 from "../../../../assets/images/speaker1.jpg";
import speaker2 from "../../../../assets/images/speaker2.jpg";
import "./styles.css";

export default class SpeakerInformation extends React.Component {
    
    public render(){
        return <div className="speakers-list">
                <Grid relaxed={true} columns={4}>
                    <Grid.Row>
                        <Grid.Column>
                            <div className="speaker-grid">
                                <Popup 
                                    className="popup" 
                                    header="John Guy, Massive Nerd" 
                                    content="Something something about him being a massive nerd,
                                    he's an okay guy I guess" 
                                    trigger={<Image src={speaker1} size="small" circular={true} />}
                                    position='right center' />
                                <br />
                                <h3>John Guy</h3>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="speaker-grid">
                                <Popup 
                                    position='right center'
                                    className="popup" 
                                    header="Jannet Girl, Not so massive nerd" 
                                    content="She's just a normal girl" 
                                    trigger={<Image src={speaker2} size="small" circular={true} />} />
                                <br/>
                                <h3>Jannet Girl</h3>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>;
    }
}