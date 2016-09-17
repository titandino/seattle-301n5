# Lab 01: Mobile First

### Help make our Blog web app mobile-first responsive!

## Getting started with pair programming

Take a moment to shake hands and introduce yourselves. You and your pair may have different experience levels, which is normal. You'll have opportunities to both teach and learn from your partner. Keep an open mind, and always be kind :)

The workflow may take a little getting used to, so give yourself time to work through any git issues (aka: "gituations") that arise.

**Take turns as 'driver' and 'navigator', alternating roles half-way (typically a couple TODOs or one hour, whichever arrives first).**

## Set up your repo

1. Driver: fork this repository to your own account. This original 301 repo (the one at `github.com/codefellows`) is the "upstream" repo.
1. Your **forked repo** on GitHub will be your "origin" repo. Clone YOUR FORK to your local development environment (we suggest cloning into a new directory named "301" - `mkdir 301/` - which will be your parent 301 directory and set you up for organizational success!).
1. Use this command in the root of your forked repo, so that it knows about the upstream repo:
  - `git remote add upstream git-url-here`
  - (replace `git-url-here` with the proper git-URL of the upstream codefellows repo).
1. Now, you can sync changes from the upstream repo to your local master branch whenever you need them (do this at least daily):
  - `git pull upstream master`

## Write code together!

Now find those `TODO` items in the code, and tackle one of them.

1. Driver: In your terminal, change directory into the `pair-assignment` folder.
1. Now cd into that `starter-code` folder. This is where you will write code.
1. Change to a new branch for the work that you will do - Use good Git workflow practices.
1. Type `atom .` to open the new folder as a project in Atom.
1. Use the Atom "Find in Project" feature to locate all the TODO items.
1. Work through one or two TODO items, testing your code as you go, until you are happy with how it's working.

## Switch roles

1. Driver: On GitHub, Add your navigator as a collaborator to your origin repo.
  - This is done in the settings of your repository on GitHub.
1. Navigator: You can now clone the driver's fork, to your own local dev environment (if you haven't already, create a main "301" directory that will be the parent directory for your own forked repo, and a "navigator" directory created within this main "301" directory - **not your repo directory** - that will now contain your partner's repo, and future partner repos). Since you are now a collaborator, you can `pull` and `push` changes to and from origin.
  - Be sure to create and work from a different branch.
1. Switch roles: The new driver now opens the code in Atom (see above), and has hands on the keyboard to work through the next one or two TODO items.

## Submit your assignment

When you are finished with lab (or if the 2 hour time limit runs out), please submit your work. To do this, you'll create *one* Pull Request (aka: "PR") to the original repo with your changes, and you'll each submit that same PR link in Canvas.

1. Ensure that all your local changes are committed, and pushed to your `origin` repo.
2. Visit the origin repo on github.com. (or just type `git open` in the terminal if you have that package installed :wink:
1. Create a new PR and ensure the branches look correct.
1. Fill in the template based on the text box prompts:
  1. Write a good descriptive summary of your changes:
    - Be sure to include how much time you spent on it, and who you worked with.
    - Briefly reflect on and summarize your process.
1. When you create the PR, it will have a unique URL. Copy this link, share with your partner, and paste it into the assignment submission form in Canvas. Both the driver and the navigator will submit the same PR link.


## TODOs: MVP
  1. Set up the viewport and fluid media rules so content fits on mobile devices.
  1. Add a "Hamburger" menu button, that reveals the nav links when tapped on a mobile device.
  2. Ensure the images are responsive :wink:

- [Video: Mobile Testing Tip for Your Phone] (https://www.youtube.com/watch?v=2t4E_tc8TKM)

## Stretch Goals (*not required*):
  1. Use media queries to re-style the header and navigation on desktop-width screens. Nav should be tab-like links on one row.
