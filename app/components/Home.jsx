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
// =======
//       translateX: '13.4rem',
// >>>>>>> b7015b57d0cf1d5eb4d85033a033636a6b563749
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


// transform: translateX(calc(50vw - 50%)) scale(0.9);
