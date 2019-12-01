const School = {
  render: async (schools) => {
    let view = schools.map((school) =>/*html*/ `
            <div class="job flex-box row">
                <div class="dot-box column">
                    <div class="dot"></div>
                    <div class="line"></div>
                </div>
                <div class="work-detail">
                    <p>${school.date}</p>
                    <h3>${school.name}</h3>
                    <p class="desc">${school.subject}</p>
                </div>
            </div>
        `).join(" ");
    return view;
  },
  events: async () => {}
};
export default School;