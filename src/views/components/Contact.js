import { myInfo } from '../../store/Data.js';

import Utils from './../../services/Utils.js';

let Contact = {
  render: async () => {
    let view = /*html*/ `
            <div class="email-modal">
                <div class="close-model ">
                    <i class="fas fa-times modelclose"></i>
                </div>
                <div class="model-content card">
                    <h3 class="header-title">Contact Form<h3>
                    <div class="contact">
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
            
                    <form class="form-data">
                        <div class="form-field">
                            <label for="name">Name</label>
                            <input
                            type="text"
                            id="name"
                            class="f_input"
                            name="name"
                            placeholder="Your Name.."
                            required
                            />
                        </div>
                        <div class="form-field">
                            <label for="email">Email</label>
                            <input
                            type="email"
                            id="email"
                            class="f_input"
                            name="email"
                            placeholder="Your Email.."
                            required
                            />
                        </div>
                        <div class="form-field">
                            <label for="phone">Phone</label>
                            <input
                            type="number"
                            id="phone"
                            class="f_input"
                            name="phone"
                            placeholder="Your Phone.."
                            required
                            />
                        </div>
                        <div class="form-field">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" placeholder="Type your message here" class="description full-with" required></textarea>
                        </div>
                        <div class="form-field">
                            <input type="submit" value="Send" class="btn"/>
                        </div>
                    </form>
                </div>
            </div>
        `;
    return view;
  },
  events: async () => {
      const request = Utils.getURL();
      const modelclose = document.querySelector(".close-model");
      const form = document.querySelector(".form-data");

      modelclose.addEventListener('click', ()=> {
        if(request.resource === "/") return;
        Utils.routeTo('/#/');
      });
      form.addEventListener('submit', (e) =>{
          e.preventDefault();
            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const phone = document.querySelector("#phone").value;
            const message = document.querySelector("#message").value;

            const formData = {
                name,
                email,
                phone,
                message,
            }
            console.log(formData);
      });

  }
};
export default Contact;