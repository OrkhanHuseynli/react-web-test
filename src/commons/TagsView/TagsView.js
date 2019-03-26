import React, {Component} from "react";
import "./TagsView.css";
class TagsView extends Component {
    render() {
        return (<div>
            <p></p>
            <ul>
                <li>
                    <p className="red-list">Red</p>
                </li>
                <li>
                    <p className="blue-list">Blue</p>
                </li>
                <li>
                    <p className="purple-list">Purple</p>
                </li>
            </ul>
        </div>)
    }
};

export default TagsView;