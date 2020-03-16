import React, { Component } from 'react';
import './App.css';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload';


class ImagePage extends Component {

   
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(ImagePage);
