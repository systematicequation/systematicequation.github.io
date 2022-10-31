const COMPLETED = 'completed';
const DEPLOYED = 'deployed';
const IN_PROGRESS = 'in-progress';
const NEXT = 'next';
const DELAYED = 'delayed';

const STATUS_NAMES = {
  [COMPLETED]: 'Completed',
  [DEPLOYED]: 'Live',
  [IN_PROGRESS]: 'In progress',
  [NEXT]: 'Next priority',
  [DELAYED]: 'Delayed'
};

const PRE_RELEASE = [
  {
    title: 'Deployed Example',
    description: 'Deployed Description.',
    status: DEPLOYED
  },
];

const LONG_TERM = [
  {
    title: 'Completed Example',
    description: 'Completed Description.',
    status: COMPLETED
  },
  {
    title: 'In Progress Example',
    description: 'In Progress Description.',
    status: IN_PROGRESS
  },
  {
    title: 'Next Example',
    description: 'Next Description.',
    status: NEXT
  },
  {
    title: 'No Status Example',
    description: 'No Status Description.',
  },
  {
    title: 'TBA Example',
    description: 'TBA'
  }
];

const template = document.getElementById('item-template');

const addItemsToGroups = function(group, items) {
  items.forEach(item => {
    const element = template.cloneNode(true);
    if (item.status) {
      element.className = `roadmap-item ${item.status}`;
      element.firstElementChild.lastElementChild.innerHTML = STATUS_NAMES[item.status];
      element.firstElementChild.lastElementChild.className = `item-status sans-font color-${item.status}`;
    }
    element.firstElementChild.firstElementChild.innerHTML = item.title;
    element.lastElementChild.innerHTML = item.description;
    element.id = '';
    group.appendChild(element);
  });
}

//addItemsToGroups(document.getElementById('completed-items'), COMPLETED, true);
addItemsToGroups(document.getElementById('pre-release-items'), PRE_RELEASE, false);
addItemsToGroups(document.getElementById('long-term-items'), LONG_TERM, false);
