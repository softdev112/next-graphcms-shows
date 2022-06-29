---
issues:
  - id: 1
    title: Create show list (not grid) view
    type: Feature
    effort: 3
  - id: 2
    title: Page / 404 page for `shows`
    type: Bug
    effort: 2
  - id: 3
    title: Add ability to sort shows
    type: Feature
    effort: 2
  - id: 4
    title: Artist website URLs without http(s) are broken
    type: Bug
    effort: 1
  - id: 5
    title: Conditionally show artist URLs
    type: Bug
    effort: 1
  - id: 6
    title: Add `spotifyUrl` to list of Artist links
    type: Feature
    effort: 1
  - id: 7
    title: Add Artist route
    type: Feature
    effort: 3
  - id: 8
    title: Shows uniform display on mobile
    type: Bug
    effort: 1
  - id: 9
    title: Shows page is stupid-wide, not centered
    type: Bug
    effort: 1
---

## Welcome
This website describes a code assessment encapsulated in a realistic project. The aim of this website is to convey your assignment, help you get started with the project, and identify the work you can choose from to complete the exercise.

### next-graphcms-shows
The [project] is built with [Next.js] and utilizes a [GraphCMS] database to display fictional live music shows and artists. The project uses [styled-components] for styling the DOM. And it has a handful of [bugs and missing features](#issues), quite like real projects you'd find in the wild. Unlike most coding asssessments that test your ability to solve obtuse brain-teasers within a time limit, the aim of this assessment is to evaluate your approach to, prioritization of, and solving of these realistic issues in the context of a production application.

## The assignment
Nine [issues](#issues) within the project are documented on this website. To complete this code assessment, you're asked to mirror the base project (details in [Getting Started](#getting-started)), resolve at least two of the [issues](#issues) documented here, and then provide access to your mirrored (not forked or cloned) repo containing your work.

Completing the _minimum_ required work (mirroring the repo, resolving two issues, and sharing the finished work) is estimated to require 1-2 hours. You are, of course, welcome to complete more than two issues should time permit. Please complete the assignment within 48 hours of receiving it.

## Getting started
To get started, you're asked to duplicate the project without forking the base repository. This is to ensure that your work is protected from the eyes of others working on this assessment. One way to mirror the repo in your own account (shown below as `your-github-user`):

1. Open a terminal
2. Create a temporary, bare clone of the base repository:
   ```
   $ git clone --bare https://github.com/CodevalApp/next-graphcms-shows.git
   ```
3. Create a new repository on your GitHub account, or within 
   an Organization you administer, e.g.:
   `https://github.com/your-github-user/next-graphcms-shows`
4. Back in terminal, mirror-push to the new repository:
   ```
   $ cd next-graphcms-shows
   $ git push --mirror https://github.com/your-github-user/next-graphcms-shows.git
   ```
5. Remove the temporary local repository you created in Step 2:
   ```
   $ cd ..
   $ rm -rf next-graphcms-shows
   ```
6. Clone your new, mirrored version of the repo, created in Step 3:
   ```
   $ git clone https://github.com/your-github-user/next-graphcms-shows.git
   ```

There are other means of mirroring a repo without your project being directly connected to the base. See GitHub's documentation on [duplicating a repository].

## Issues
Below is a collection of issues for the project. Visit the issue pages for details, relevant screenshots, and acceptance criteria. Choose 2 or more to work on in your fork.

<div class="header-row">
  <div>Title</div>
  <div>Type</div>
  <div>Effort (Fibonacci)</div>
</div>

<ul class="issues-list">
{% for issue in page.issues %}
    <li>
      <a href="{{ site.baseurl }}/issues/{{ issue.id }}" class="flex-row">
        <div>
          {{ issue.title }}
        </div>
        <div>
          {{ issue.type }}
        </div>
        <div>
          {{ issue.effort }}
        </div>
      </a>
    </li>
{% endfor %}
</ul>

## Submitting completed work
When you've finished your task, you should have a fresh repository (created in Step 3 [above](#getting-started)). Having resolved two or more issues, that project should be one or more commits ahead of the base repo you mirrored (in Step 4 [above](#getting-started)). You'll need to share that repository with the party who invited you to complete this assessment. Please also mention to them the issues you addressed in your work.

### If your new repo is public
The simplest way! Just send a URL to your new GitHub repository to the individual/group who requested you complete this assignment.

### If your new repo is private 🔐
If it's private, the URL to your repo won't be enough. In that case, you'll need to invite the engineers who're assessing your work as collaborators. Obtain those engineers' GitHub usernames, and see GitHub documentation on [inviting collaborators to private repos](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository).

[duplicating a repository]: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
[project]: https://github.com/CodevalApp/next-graphcms-shows/
[Next.js]: https://nextjs.org/
[GraphCMS]: https://graphcms.com/
[styled-components]: https://styled-components.com/
