import React, { Component } from 'react';
import './NameTag.css';

class NameTag extends Component {
  render() {
    return (
      <div>
        <div className="name-tag">
          <div className="tag-header">
            <h1>Hello</h1>
            <p>My name is</p>
          </div>
          <div className="tag-name">
            <h1 className="name">Tanner</h1>
          </div>
          <div className="tag-footer">
          </div>
        </div>
      </div>
    );
  }
}

export default NameTag;