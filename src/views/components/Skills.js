const Skills = {
  render: async (skills) => {
    let view = skills.map((skill) => `
            <p class="${skill.className}"><i class="fab fa-${skill.icon}"></i> ${skill.name}</p>
        `).join(" ");
    return view;
  },
  events: async () => {}
};
export default Skills;