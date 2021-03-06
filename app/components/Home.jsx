import React, { Component } from 'react';
import anime from 'animejs';
import {Link} from 'react-router'

/*---------------DUMB PRESENTATIONAL COMPONENT-----------------*/


const DumbHome = () => (
    <div>
        <section>
            <h1 className='red'>HOT <span id="notRed">SEAT</span></h1>
            <Link to='/hotseat'>
              <div className="chair"><img src="cropped-chair.png" height="150" width="150"></img></div>
            </Link>
        </section>
    </div>
)


/*---------------STATEFUL TIMER COMPONENT-----------------*/
class Home extends Component {

  componentDidMount() {
    anime({
      targets: '.chair',
      translateX: 500,
      scale: [.75, .9],
      delay: function(el, index) {
        return index * 80;
      }
    });
  }

	render() {
		return (
			<DumbHome />
		)
	}
}



export default Home;

