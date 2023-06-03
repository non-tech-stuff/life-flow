```js
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
```

## Questions

> 1. Why use GitHub for knowledge pieces?

PKB nodes are subject to calculated changed, and stuff often can be refactored. Git is a good way to keep track of stuff, and GitHub has a good UI.

> 2. Why use Notion?
>    GitHub repos are good for knowledge nodes, and I use the organization feature to just hold related nodes together.

What is absent here is that there's no birds eye view for all repos and what's going on in them, maybe we can do this using GitHub wikis, but I'll still need to have a browser tab for each repo. This problem is absent from Notion.

The planning/viewing is the thing Notion helps with.

> 3. Why use Height.app?
>
> Let's discuss alternatives:

1. GitHub Projects
   - Clunky Ui
   - No support for nested tasks
   - No task description cell (Height has the chat for this)
2. Notion
   - Naive todo is not helpful (OK)
   - I can create an effectively todo using 'Database', but they'll effectively stick
   - Nesting isn't that effective
   - Archive not proper
3. Height.app (now)

- Meant for todos, getting things done
- Has awesome UI, UI
- First class support for nested todos, custom attributes, and a once place (Settings > Custom Attributes) to manage them.
- First class support for repetitive tasks
- Archive feature
- Used at work
  > 4. Why use Height.app only for todo parts - Why not keep a list of frustrations and ideas there itself, instead of Notion?
  >    Height is the best for todos. But saving ideas there doesn't seem good, since it's mostly data not something directly actionable.

Height.app isn't meant for 'mulling' over stuff, I think. Notion is the place for it.

If keep in ideas in Height, they'll stay there forever, and never make it to the 'today' place.

> 5. Notion (good for mulling) and Height.app (good for corresponding tasks) feels rather disconnected, and since they're not the same app, they'll be a source of constant back and forth between apps

Let's make a list

1. Merge - Height's chat feature feature is effectively a Notion side bar for a Notion Database row.
2. Diff - Height is not meant for noting things down, thinking broadly (as opposed to task level info)
3. Diff - Height is more customizable, has simpler UI
4. Diff - Notion structures allow the possibility of directly implementing any module, doing the same with Height isn't trivial
5. Diff - Chat in Height is not an actual "Canvas to write anything on", while every Notion space is actually such a thing.

So, I'm using Height only because of:

1. Sleek UI
2. Nested tasks first class support
3. Custom attributes at one place
4. A dedicated place where only actionable/narrow info is present.

If notion gets nested tasks view support (i.e. Spreadsheet), there's no need for Height.
Notion, owing to it's general nature, is here to stay.

## Conclusion

1. Go-to place is Height (lf.tasks list) - since tasks are there. 'Action' module needs the 'Tasks' module. The chat is for narrow info related to task.
2. Notion is noting down stuff, either meta stuff, stuff in infancy, mulling, thinking, not so serious stuff. Modules: Project module. Frustrations, Ideas, Wants.
3. GitHub is for actual text, code etc. This will almost always have a corresponding local folder. The trenches! PKB nodes, PVS.

This is the most I'll ever need. If I can shave off a tool (i.e. shave off Height), that'll be even better.
