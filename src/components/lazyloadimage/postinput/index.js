import React, { Component } from 'react';
import { Button } from '../../common/button';
import './index.scss';
import { LabelIcon } from '../../common/label-icon';
import { Dropdown } from '../../common/dropdown';
import Axios from 'axios';
class PostInput extends Component {
    constructor(pr) {
        super(pr);
        this.textRef = React.createRef();
        this.state = { focusInp: false };
        this.forwardedRef = React.createRef();
    }
    componentDidMount() {
        this.textRef.current.onfocus = this.onFocus;
        this.textRef.current.onblur = this.onBlur;
        this.textRef.current.onkeyup = this.onKeyUp;
        this.getListPhoto();
    }
    onFocus = e => {
        this.setState({ focusInp: true });
    };
    onBlur = e => {
        this.setState({ focusInp: false });
    };
    onKeyUp = e => {
        let box = e.target;
        let height = box.offsetHeight;

        if (height < box.scrollHeight) {
            box.style.height = box.scrollHeight + 'px';
        }
    };
    getListPhoto() {
        Axios.get('https://picsum.photos/list')
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className={`post-wrapper ${this.state.focusInp ? 'focused' : ''}`}>
                <div className="cheat-pg" />
                <div className="post-action">
                    <LabelIcon active={true} icon="pencil-alt" text="Tạo Chia sẻ" />
                    <LabelIcon icon="image" text="Thêm hình" />
                    <div className="update-menu">
                        {/* <div className="dropdown-wrapper"> */}
                        <span
                            onClick={() => {
                                this.forwardedRef.current.classList.toggle('open');
                            }}
                        >
                            ...
                        </span>
                        <Dropdown ref={this.forwardedRef} />
                        {/* </div> */}
                    </div>
                </div>
                <div className="post-body clearfix">
                    <div className="avatar float-left ">
                        <img src="https://picsum.photos/600/600/?image=743" alt="avatar" />
                    </div>
                    <div className="input-content ">
                        <textarea
                            ref={this.textRef}
                            name="post_content"
                            id="post_content"
                            placeholder="Bạn muốn chia sẻ điều gì ?"
                        />
                    </div>
                </div>
                <div className="post-confirm">
                    <Button type="button" wrapClass={'aright'} textLabel="Đăng" />
                </div>
            </div>
        );
    }
}
export { PostInput };
