import React from 'react';
import {Helmet} from 'react-helmet';
import {browserHistory} from 'react-router';

export default class PageA extends React.Component {

    handleClick() {
        browserHistory.push("/b");
    }
    render() {
        return (<div>
            <Helmet link={[
                {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "/a.css"
                }
                ]}>
                <body className="red" />
                    </Helmet>
            Page A<button onClick={this.handleClick}>go to B</button></div>);
    }
}
