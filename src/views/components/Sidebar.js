import { myInfo } from '../../store/Data.js';

import Utils from './../../services/Utils.js';

const Sidebar = {
  render: async () => {
    let view = /*html*/ `
            <div class="sidebar">
                <nav class="navbar">
                    <div class="side-image">
                        <div class="avatar-container">
                            <img class="avatar" src="${myInfo.image}" alt="chris">
                        </div>
                    </div>
                    <div class="contact s-hide">
                        <div class="sideData email">
                            <h3>Email</h3>
                            <p>${myInfo.email}</p>
                        </div>
                        <div class="sideData phone">
                            <h3>Phone</h3>
                            <p>${myInfo.phone}</p>
                        </div>
                        <div class="sideData hours">
                            <h3>${myInfo.hoursPerweek} hours</h3>
                            <p>weekly availability</p>
                        </div>
                    </div>
                    <div class="ctabox">
                        <input class="cta hireme" type="button" value="Hire Me">
                    </div>
                </nav>
            </div>
        `;
    return view;
  },
  events: async () => {
      const request = Utils.getURL();
      const hireme = document.querySelector(".hireme");

      hireme.addEventListener('click', ()=> {
        if(request.resource === "/contact") return;
        Utils.routeTo('/#/contact');
      });
  }
};
export default Sidebar;