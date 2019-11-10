import React from 'react';

export default class ImageSlider extends React.Component {

    state = {
        images: [
            "https://wowslider.com/sliders/demo-11/data/images/krasivyi_korabl_-1024x768.jpg",
            "http://dandywebsolution.com/skdslider/slides/1.jpg",
            "https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8yymeYD9q6xiWx7g06qIHyBiEO9x6_XQwQN6rduBPIN2Y5mgo"
        ],
        idx: 0
    };

    handleNext = () => {
        this.setState({
            idx: this.state.idx + 1
        });
    };

    handlePrev = () => {
        this.setState({
            idx: this.state.idx - 1
        });
    };


    render() {
        return (
            <div>
                <button onClick={this.handlePrev}>Previews</button>
                <img
                    style={{
                        width: 800
                    }}
                    src={this.state.images[this.state.idx]} />
                <button onClick={this.handleNext}>Next</button>
            </div>
        );
    }
}