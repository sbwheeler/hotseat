import React, { Component } from 'react';
import anime from 'animejs';

anime({
  targets: '.anime',
  translateX: '13.5rem',
  scale: [.75, .9],
  delay: function(el, index) {
    return index * 80;
  },
  direction: 'alternate',
  loop: true
});

/*---------------DUMB PRESENTATIONAL COMPONENT-----------------*/


const DumbHome = () => (
    <div>
        <section>
          <article>
            <div className="anime green"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1137/anime-logo.png"></img></div>
            <div className="anime blue"></div>
            <div className="anime red"></div>
          </article>
          <h1>HOT SEAT</h1>
        </section>
    </div>
)


/*---------------STATEFUL TIMER COMPONENT-----------------*/
class Home extends Component {

	render() {
		return (
			<DumbHome />
		)
	}
}



export default Home;