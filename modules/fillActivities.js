const fillActivities = (activities) => {
  const activitiesArea = document.querySelector('.todo-container');

  for (let a = 0; a < activities.length; a += 1) {
    const activityContainer = document.createElement('div');
    activityContainer.classList.add('hrzntl', 'activity-area');

    // Sort activities based on index
    activities.sort((activityA, activityB) => activityA.index - activityB.index);

    if (activities[a].description !== '') {
      const isChecked = activities[a].completed ? 'checked' : '';
      activityContainer.innerHTML = `
        <div class="activity-description-area hrzntl">
          <input class="confirmChoice${activities[a].index} mark-activity" type="checkbox" ${isChecked} data-checked="${activities[a].completed}">
          <p class="d${activities[a].index} activity-details">${activities[a].description}</p>
        </div>
        <div class="d${activities[a].index} display-periods period-container flex-column">
          <span class="period"></span><span class="period"></span><span class="period"></span>
        </div>
        <i class="d${activities[a].index} fa-regular fa-pen-to-square modify"></i>
        <i id="d${activities[a].index}" class="fa-regular fa-trash-can bin"></i>
      `;

      if (activities[a].completed) {
        activityContainer.querySelector(`.d${activities[a].index}`).style.textDecoration = 'line-through';
      }

      activityContainer.querySelector(`.d${activities[a].index}`).contentEditable = true;
      activitiesArea.appendChild(activityContainer);
      localStorage.setItem(`confirmChoice${activities[a].index}`, activities[a].completed);
    }
  }
};

export default fillActivities;
