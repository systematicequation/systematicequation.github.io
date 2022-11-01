const COMPLETED = 'completed';
const DEPLOYED = 'deployed';
const IN_PROGRESS = 'in-progress';
const NEXT = 'next';
const DELAYED = 'delayed';
const POLISHING = 'polishing';
const FIXED = 'fixed';

const STATUS_NAMES = {
  [COMPLETED]: 'Completed',
  [DEPLOYED]: 'Live',
  [IN_PROGRESS]: 'In progress',
  [NEXT]: 'Next priority',
  [DELAYED]: 'Delayed',
  [POLISHING]: 'Polishing',
  [FIXED]: 'Fixed',
};

/*
const EXAMPLES = [
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
    title: 'Deployed Example',
    description: 'Deployed Description.',
    status: DEPLOYED
  },
  {
    title: 'TBA Example',
    description: 'TBA'
  },
];
*/

const LONG_TERM = [
  {
    title: 'PROJECT BLOCKADE',
    description: 'TBA.',
    status: NEXT,
    features: [
      {
        title: "Character Customization",
        description: "Make your character in the way you want it without all the clunkiness.",
      },
      {
        title: "Weapon Customization",
        description: "Make your enemies fear your might.",
      },
      {
        title: "Vest Customization",
        description: "Add pouches where you want them, and anything else you'd ever want in an intuitive way.",
      },
      {
        title: "TBA.",
        description: "More features to be announced.",
      },
    ],
  },
  {
    title: 'PROJECT REMAIN',
    description: 'TBA.',
    features: [
      {
        title: "TBA.",
        description: "More features to be announced.",
      },
    ],
  },
  {
    title: 'PROJECT WRITHE',
    description: 'Formerly known as "atfbox 2".',
    features: [
      {
        title: "World and Map Editor",
        description: "Don't be stuck with what developers have made. Customize YOUR world and YOUR map with unparalleled freedom.",
      },
      {
        title: "TBA.",
        description: "More features to be announced.",
      },
    ],
  },
];

const template = document.getElementById('item-template');

const addSubmodules = function (item) {
  if (item.features) {
    document.getElementById('feature').innerHTML = "<div class='timeframefeature-label sans-font' id='feature-label'>" + item.title + "</div>";
    item.features.forEach(feature => {
      const element = template.cloneNode(true);
      if (feature.status) {
        element.firstElementChild.lastElementChild.innerHTML = STATUS_NAMES[feature.status];
      }

      element.className = `roadmap-item ${feature.status}`;
      element.firstElementChild.lastElementChild.className = `item-status sans-font color-${feature.status}`;

      element.firstElementChild.firstElementChild.innerHTML = feature.title;
      if (feature.description) {
        element.lastElementChild.innerHTML = feature.description;
      } else {
        element.lastElementChild.innerHTML = "";
      }

      element.id = '';

      document.getElementById('feature').appendChild(element);

    });
    on()
  }
}

document.getElementById("overlay-background").addEventListener("click", function () {
  off()
})

const addItemsToGroups = function (group, items) {
  items.forEach(item => {
    const element = template.cloneNode(true);
    if (item.status) {
      if (item.features) {
        element.firstElementChild.lastElementChild.innerHTML = STATUS_NAMES[item.status] + "<br>view more"
      } else {
        element.firstElementChild.lastElementChild.innerHTML = STATUS_NAMES[item.status]
      }
      element.className = `roadmap-item ${item.status}`;
      element.firstElementChild.lastElementChild.className = `item-status sans-font color-${item.status}`;
    } else {
      if (item.features) {
        element.firstElementChild.lastElementChild.innerHTML = "view more"
      }
    }
    element.addEventListener("click", function () {
      addSubmodules(item)
    });

    element.firstElementChild.firstElementChild.innerHTML = item.title;
    element.lastElementChild.innerHTML = item.description;
    element.id = '';
    group.appendChild(element);
  });
}

//addItemsToGroups(document.getElementById('completed-items'), COMPLETED, true);
//addItemsToGroups(document.getElementById('pre-release-items'), PRE_RELEASE, false);
addItemsToGroups(document.getElementById('long-term-items'), LONG_TERM, false);

function on() {
  document.getElementById("overlay-background").style.display = "block";
}

function off() {
  document.getElementById("overlay-background").style.display = "none";
}
