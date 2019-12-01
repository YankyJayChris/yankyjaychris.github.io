import Sidebar from './../components/Sidebar.js';
import Content from './../components/Content.js';
import Footer from './../components/Footer.js';

const Home = {
  render: async () => {
    let view = /*html*/ `
            <div class="main">
              ${await Sidebar.render()}
              ${await Content.render()}
              
            </div>
            <div class="down">
              ${await Footer.render()}
            </div> 
        `;
    return view;
  },
  events: async () => {
    await Sidebar.events();
    await Content.events();
    await Footer.events();
  }
};
export default Home;