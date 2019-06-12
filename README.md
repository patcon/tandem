# Tandem 2.0

* [History](#why-do-we-need-this)
* [Purpose](#makes-sense-so-now-what)
  * [A single source of truth](#)
  * [Tying things together](#)
  * [A resilient process](#)
* [Structure](#why-do-we-need-this)
  * [Manifesto](#manifesto)
  * [Handbook](#handbook)
  * [Guides](#guides)
  * [Templates](#templates)
  * [Scripts](#scripts)
  * [Lando](#lando)
* [Process](#why-do-we-need-this)
* [Develop](#why-do-we-need-this)


## Why do we need this?

Pretty shortly after we started Tandem we spun up a Git repository named _Horoscope_. It contained our company handbook and the things we wanted to do to build out Tandem as an organization. We'd get together every Friday and talk about problems surfaced in recent client work and how we could improve them. Then we'd set some priorities, assign some tickets and in the downtime between client projects work to improve Tandem as a business.

In the beginning this worked great! We quickly documented our company mission, values, and important processes and procedures. We crafted an employee handbook. We developed some engineering and workflow standards and automated a good deal of our DevOps. However, as is often the case in #agencylyfe, we increasingly had less and less time to dedicate to this cycle of iterative improvement. We became complacent and disorganized. And while we all, to our credit, continued to _build valuable things_ we struggled to incorporate their value back into the "bigger picture". In some cases we even failed to communicate their existence altogether, leading to a lot of duplicate work and unnecessarily bloating decision trees.

As a result we ended up with important and valuable assets distributed across the Tandeverse. We had ancient sales wisdom sealed in hidden Google Docs. We had powerful automation robots entombed within the subdirectories of that repo-of-a-few-projects ago. We had revealed truth on how to run projects better, faster, stronger contained within the gray matter of project managers. This is to say we had a lot of really valuable insights, works, discoveries and experiences that should have been immediately injected deep into the Flux Capacitor that powers the Tandem engine instead laying dormant; unused and forgotten.

Even still, there was a lot that went very right with _Horoscope_. It was able to power a good deal of our first iteration of Tandem. Looking back though, it's fairly easy to identify three pretty big things that we got wrong.

### 1. No no no! This one goes there! That one goes there! Right?

At it's essence _Horoscope_ was basically a collection of markdown documentation. While not initially designed to be _just_ that, a lack of clear
guidelines about _what kinds of things_ should live in it greatly hampered its utility and helped cause the aforementioned Diaspora of value.

If someone wanted to contribute important non-documentation assets back into the business it wasn't clear where they should do that.

### 2. I am a rock. I am an island.

That said, and even if we _had_ clearly defined what kinds of things should belong in _Horoscope_ it existed on an island, detached from the day to day hustle of an agency. This meant there was no real way to disseminate materials contained within _Horoscope_ so they were front in center in our most pressing work.

If someone wanted to add a useful cross-project script or guide back to the repo it wasn't clear how that asset could then be distributed to where it needed to go to be useful.

### 3. If you fail to plan; you plan to fail

The final major flaw of _Horoscope_ was in how it figured out what to do next. An everything-goes submit-whatever paradigm was manageable when a decent amount of time was dedicated to sifting through things but it often produced disjointed tasks, impossibly hard to advance tickets like "redo our website" and a fairly subjective prioritization mechanism.

If someone had a great idea or wanted to surface a bug or proposal there was no standardized process to surface, evaluate, prioritize and translate them into reasonable chunks of work that could be done asynchronously over time by the entire team.

@TODO: move the entire H2 above into our docs somewhere and link to it in the next section?

## Makes sense, so now what?

This repository seeks to build on the successes of _Horoscope_ while addressing the key weaknesses expressed above. As such, its goal is to improve the business so we can increasingly focus on the things that matter most.

This means that someone should be able to come here with an idea and...

1. Put that idea through a standardized vetting, prioritization and refinement process
2. End up with small and actionable tasks that can be advanced by a team slowly and over weeks
3. Make contributions into a predefined and obvious structure
4. Have their contributions automatically deployed to the places where they have the most impact
5. Improve Tandem by removing repetition, variables and confusion from our work

Specifically this will be accomplished by making the repository be/do the following three things:

### 1. Single source of truth

This repository should hold _anything_ that makes Tandem run better, faster and stronger but it should do so within a well defined structure so its obvious where things should go. In this way it should act as a intuitively organizied single source of truth for our most important assets.

A caveat to this is we don't want to include anything that should _obviously_ be its own repository. For example things like specific project repositories, start states, seeds, modules, plugins, etc should exist on their own but should also be tied to this repository in some way.

Beyond the above caveat its important for this repo to contain _as much stuff as possible_. This reduces cognitive load, increases transparency when important things change and helps maintain company-building momentum.

### 2. Tie things together

Its not enough to have a single source of truth floating in isolation in the aether; it needs to have practical value and be useful. To that end, this repo, like a [good rug to a room](https://www.youtube.com/watch?v=ezQLP1dj_t8), needs to also tie everything we do together. This means that when we add or update this repo with something, that something needs to also surface, ideally via some sort of automation, _someplace else_ where it makes sense and can be put to use.

Here are a few specific examples of how we can tie things together:

* Employee handbook or company documentation changes automatically notify people on Slack
* Project README template improvements automatically open pull requests on downstream repos
* Aforementioned README templates link back to helpful documentation stored here
* Project start states can pull in new scripts and Lando plugins from here

@TODO: Would be great to actually have the above things so we can SHOW instead of TELL
@TODO: the exact engineering mechanisms around parts of the above of this need to be better deifined and will likely be one of the first things we tackle

It's difficult for a human to consistently remember to come back here for the things they need. Let's use the robots to make sure we are shipping things to the most useful places.

### 3. A resilient process

The final piece of the puzzle here is to define the process someone can use to

This process should

1. be easy to understand,
2. require minimal oversight, eg be mostly asyncronsous
3. run on its own inertia
4. provide some "objective" prioritization mechanism
5. define actionable tasks in very small chunks
6. encourage many people work on one thing

## Cool, so what kinds of things specifically?

So while _anything and everything that makes Tandem run better, faster stronger_ is our high level metric around

If you've identified something outside of the above that you think _should_ live in here, [open up a ticket](#) because there is a good cahnce you are right!





If you contribute to this repository you are contibuting to the long term growth of the business.


This repository contains various assets but they can be broken down into four broad categories

### 1. Documentation

First and foremost this repo contains our manifesto, employee handbook and actionable guides to acccomplish specfic things. Let's dive into each part.

All documentation lives inside of the `docs` folder.

These docs are designed to:

1. get new employees up to speed on the tandem way
2. show prospects (new client or employees) what makes us tick
3. provide guides on how to do tandem-critical things

#### Manifesto

The manifesto should be our most immutable documentation. That is not to say that it should not be modified, but like the Constitution it should require signficant deliberation and consideration before a change should be made.

It should contain:

1. Why we exist and our core missions
2. Our core values
3. A roadmap for growth
4. An overview of how we got here (our history)
5. Roles and responsibilities for tandem in our three major contexts: company, agency projects, product development
6. how the above things connect together eg an org chart

what kinds of things go here?

#### Handbook

The handbook should be the place for all new employees to get spun up and integrated to the tandem way with minimal disruption.

It should contain

1. the things an employee needs to do on their first day to get rolling
2. company policy around benefits, pto, etc

#### Guides

guides should ultimately seek to answer questions like "how do i do X at tandem?". THey are designed to live our value of portability and redundancy. eg a person without a ton of experience should be able to read a guide and at least deliver the bare minimum value for a specific task.

we want to try and keep these guides as high level and company level as we can; there are many guides that might only be relevant to a particular deve use case or project class. lets try to keep those guides in our "templates/start states"

### 2. Templates

  SHOULD THIS live in docs/templates so we can have share it between the docs site
  and something we can pull?

  a. README.md and project documentation scaffolding
    a. readme
    b. getting started checklist: things that need ot be setup before we start
    b. dev docs
    c. project brief
    d. architectureal plan
    e. more?
  b. devops
    a. github issue/pr templates
    b. travis/platform/lando seeds
  c. project management stuff
    a. github labels?
    b.

### 3. Automation scripts

### 4. Lando plugins?

@TODO: anything else? this seems like a good starting point

## Awesome! But how do i use it?

1. documentation is surfaced here:
2. assets can be pulled down by our start states/projects should we just package up stuff into a zip for now and have projects pull that in?


3. section of proposal should contain something like:

A more concrete example of how this would work is...

1. Someone notices that a lack of standardized GitHub issue labels is causing undue overhead, confusion and frustration.
2. They submit an issue to this repository with a proposal on how to address this problem; a common set of defined labels for all our projects
3. The issue is evaluated based on a TBD list of factors like difficulty and the perceived benefit received and then prioritized amongst other issues
4. The issue is assigned to relevant parties and broken down into small chunks so that it can be slowly advanced over many weeks or months
5. The issue is completed, QAed, edited and merged into this repository
6. Downstream projects can run some sort of `setup` and/or `update` command and automatically get set up with the actual labels, as well as the documentation for said labels

## Great! But what if i want to contribute to it?

### proposing changes

what is the process for updating this material? how do we work on advancing the material?

considerations? PR template checklist?

1. maintainable?
2. have i written docs that already exist in our outside our org? example?

wef

1. everything stems from our values and goals
2. we propose initiatives and add them to the roadmap
3. we work on x-y number of initatives at the same time, we work on z-zz in a given year, each initiative should last 3 month
4. we dogfood our devops process for this repo
5. we make use of the issue templates to

### making changes

make sure you have installed our core tools (link to docs)

@TODO:

### workflow

link to our dev flow docs

### qa

link to our qa docs

### releases

process to run a release

### management

1. what kinds of meetings, time, procedures are needed to keep advancing the board

## TODOS

1. where does sales stuff live?
