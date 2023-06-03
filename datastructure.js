const lifeFlowData = {
  activityLogger: [], // using WhatsApp statuses for this
  tasks: {
    // using Height
    day: [],
    week: [],
    month: [],
    quarter: [],
    year: [],
    lifetime: [],
    // Note, tasks need some resume data - especially if they had been blocked, Height's Chat (of task) is the perfect candidate for this
    // 'epics' should be a construct here - and Height supports that via nested tasks. epics are a collection of tasks. e.g. "Build a house" is an epic, and "Buy bricks" is a task in it.
  },
  action: null, // nothing needed
  result: {
    // using Notion
    // but need a way to have a "What happened today 'view'"
    frustrations: [], //  need software!! Candidate: Notion e.g. This appX has an annoying bug
    ideas: [], //  need software!! Candidate: Notion e.g. we could use ML for doing X
    wants: [], // need software!! Candidate: Notion // stuff to buy, make - "Get a table lamp", "Add keyboard shortcuts for controlling home lights"

    tasks: [], // each one correspond to a task in Tasks. Actually, this is just a reference to Tasks, and may not exist on it's own.
  },
  feedback: {
    endOfDayGist: "", // using Notion
    modelCorrections: [], // using Github Issues at PKB repo level, PVS use the general list
  },
  model: {
    pvs: [], // using Github
    pkb: [], // using Github
    projects: [], // need software!! Candidate: Notion
  },
  editTask: {
    // temporary activity, no large system needed
    modelDeltas: [],
    taskChanges: [],
  },
};

// Softwares: GitHub, Height, Notion (free plans are enough)
// Formats: Markdown, Diagrams.net (for flowcharts), JavaScript
console.log(lifeFlowData);
