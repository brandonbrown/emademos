import React, { Component } from 'react';
import OnScroll from 'react-on-scroll';
 
class ScrollFade extends React.Component {
    state = {
        action: false,
    };
 
    setAction = action => {
        // console.log("SET FADE")
        this.setState({ action });
    }
    render() {
        const { title, children, when, actionIn, actionOut } = this.props;
        const { action } = this.state;
        return (
            <OnScroll
                className="section"
                triggers={[
                    { top: when, callback: visible => this.setAction(visible) },
                ]}
                triggerBase="bottom"
            >
                <div className={`${action ? actionIn : actionOut}`}>{children}</div>
            </OnScroll>
        );
    }
}
 
export default ScrollFade;