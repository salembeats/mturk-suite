const changeLog = [];

changeLog.push({
  version: `2.3.1`,
  date: `Sunday, May 27, 2018`,
  General: [
    `Fixed HIT Tracker Live Update, will now properly update when you submit or sync.`,
    `HIT Catcher Once and Panda buttons when you miss a HIT are back from vacation.`,
    `Remember Filter fixed.`,
    `Pagination Last Page now always links to the correct page.`
  ]
})

changeLog.push({
  version: `2.3`,
  date: `Sunday, May 27, 2018`,
  MTS: [
    `Options have been RESET!`,
    `New toggles for HIT Tracker stuff on MTurk.`,
    `Right clicking the icon now has links to launch Finder, Catcher and Tracker.`
  ],
  General: [
    `Auto Accept Checker removed. MTurk's new default is alway checked.`,
    `Auto Accept Unchecker added.`,
    `Requester Review icon changed.`,
    `HIT Exporter icon changed.`,
    `HIT Tracker icons for no work found have been removed.`,
    `Popovers now have a 500ms activation time instead of instant.`,
    `HIT Exporter changed from modal to popover.`,
    `You can now view and edit your Block List directly on MTurk`
  ],
  "HIT Tracker": [`Weekly range for June done.`]
});

changeLog.push({
  version: `2.2.3`,
  date: `Sunday, April 8, 2018`,
  General: [
    `HIT Exporter should no longer break on direct exports if there is a special character on the export.`,
    `HIT Exporter Direct export options now have the option to leave a message along with the `,
    `HIT Exporter contact links now properly link to the correct constact requester URL.`
  ]
});

changeLog.push({
  version: `2.2.3`,
  date: `Sunday, April 8, 2018`,
  "HIT Finder": [`Fix for notifications not showing in Firefox.`]
});

changeLog.push({
  version: `2.2.2`,
  date: `Tuesday, April 2, 2018`,
  "HIT Finder": [`MTC Direct Export working again.`]
});

changeLog.push({
  version: `2.2.1`,
  date: `Tuesday, April 2, 2018`,
  "HIT Finder": [`HIT Exports working again.`]
});

changeLog.push({
  version: `2.2.0`,
  date: `Saturday, March 31, 2018`,
  General: [
    `Updates will now trigger a desktop notification.`,
    `Input Worker ID now working properly on all frames.`
  ],
  "HIT Tracker": [
    `All of April's 2018 weekly ranges hardcoded while a permanent solution is being made.`,
    `Sundays will now show Projected Earnings Last Week`
  ]
});

changeLog.push({
  version: `2.1.19`,
  "HIT Tracker": [`Week range updated.`]
});

changeLog.push({
  version: `2.1.18`,
  "HIT Tracker": [`Week range updated.`]
});

changeLog.push({
  version: `2.1.17`,
  date: `Monday, March 12, 2018`,
  "HIT Tracker": [`Week range updated.`]
});

changeLog.push({
  version: `2.1.16`,
  date: `Thursday, March 8, 2018`,
  "HIT Tracker": [
    `Fixed backup import issue (re-import to fix if you imported a backup on v2.1.15).`
  ]
});

changeLog.forEach(changes => {
  const card = document.createElement(`div`);
  card.className = `card mt-1`;

  const header = document.createElement(`div`);
  header.className = `card-header bg-primary text-white`;
  card.appendChild(header);

  const version = document.createElement(`span`);
  version.textContent = changes.version;
  header.appendChild(version);

  const date = document.createElement(`small`);
  date.className = `ml-1`;
  date.textContent = changes.date;
  header.appendChild(date);

  const block = document.createElement(`div`);
  block.className = `card-block`;
  card.appendChild(block);

  const listGroup = document.createElement(`div`);
  listGroup.className = `list-group`;
  block.appendChild(listGroup);

  Object.keys(changes).forEach(item => {
    const change = changes[item];

    if (Array.isArray(change)) {
      const groupItem = document.createElement(`div`);
      groupItem.className = `list-group-item flex-column align-items-start`;
      listGroup.appendChild(groupItem);

      const category = document.createElement(`h5`);
      category.className = `d-flex w-100 justify-content-between`;
      category.textContent = item;
      groupItem.appendChild(category);

      const changeList = document.createElement(`ul`);
      groupItem.appendChild(changeList);

      change.forEach(text => {
        const changeListBullet = document.createElement(`li`);
        changeListBullet.textContent = text;
        changeList.appendChild(changeListBullet);
      });
    }
  });

  document.getElementsByClassName(`container`)[0].appendChild(card);
});
