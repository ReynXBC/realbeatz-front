import React from 'react';
import $ from 'jquery';

export default class PictureUploader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            picture: false,
            src: false
        }

    }
    handlePictureSelected(event) {
        var picture = event.target.files[0];
        var src     = URL.createObjectURL(picture);

        this.setState({
            picture: picture,
            src: src
        });
    }
    renderPreview() {
        if(this.state.src) {
            return (
                <img src={this.state.src}/>
            );
        } else {
            return (
                <p>
                    No Preview
                </p>
            );
        }
    }


    render() {
        return (
            <div>
                <h5>Picture Uploader</h5>

                <input
                    type="file"
                    onChange={this.handlePictureSelected.bind(this)}
                />
                <br/>
                <div>
                    <div>
                        {this.renderPreview()}
                    </div>
                </div>
                <hr/>
                <button className={'btn'}>
                    Upload
                </button>
            </div>
        );
    }
}