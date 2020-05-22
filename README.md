# Velsarbor - English Version
A battle has broken out. In the midst of a high-tech underground complex, the Brigantine Order has invaded in order to reach the machine core and tap into the power within. Blood is spilt on both sides, the chaos representing the pinnacle of both nations' immense power. Just when the battle seems to be at a permanent stalement, there's only one problem: The mission has been compromised.

# Getting Started
To install this patch, follow the instructions [here](GettingStarted.md).

# Videos
I have a playlist of update videos in case you want to watch it instead of playing it, [here](https://www.youtube.com/playlist?list=PLT800wgkhxolwCulnS8bWs9LVEPnssTgy). Keep in mind that I'm cutting out regular battles since they're boring to watch.

These are the two trailers for the game:
- [https://www.youtube.com/watch?v=ZuqRkeXgYHQ](https://www.youtube.com/watch?v=ZuqRkeXgYHQ)
- [https://www.youtube.com/watch?v=YdjZXLk1sF8](https://www.youtube.com/watch?v=YdjZXLk1sF8)

Here are some references:
- [TrueMG](https://www.youtube.com/playlist?list=PLEED9E15CB6E0D597) (First Demo, up to the end of the Silvan Forest)
- [TrueMG](https://www.youtube.com/playlist?list=PLSgi0v-Xd3aGWEzfvjlh2gbqLF_cllSq_) (Second/Final Demo, up to the end of Nomerea)
- [MajinSonicLP](https://www.youtube.com/playlist?list=PLxdruDpgzoSHWmU5xxbEkfbF5dtemyDeN) (Second/Final Demo, the entire game)

And let's not forget the video that started it all: [The video by Hydlide S](https://www.youtube.com/watch?v=LNBnLKQmUmQ)

# Regarding The French Version
For many years now, there has been a [French version of Velsarbor](http://www.rpg-maker.fr/jeux-418-velsarbor-version-francaise.html) by Shanka. This page at least seems to be based on the first demo of Velsarbor, which you can tell by the number of maps. The first demo has 180 maps while the second/final demo has 296 maps. I'm not sure if saves transfer, though I can't see any reason why they wouldn't. There are a few maps I know of that have completely changed their dialogue, but it seems like they're far and few between.

# Dev Section Below
AFAIK, the people who previously worked on translations never published their progress, and it seems like they haven't worked on it since.

For now, parsed map files are not included, but may be in the future.
Images can be found along with patched map files in the `Releases` section.

If you want to develop a workspace, use my [RPGMaker2kPatcher](https://github.com/WatDuhHekBro/RPGMaker2kPatcher) and then compile the JSON data files yourself. The work is all in `patch/`, so those will compile the patched binary files for use with the game.

# Workflow
The `master` branch will correlate with each release, double-checked for line endings and line spacing. These release versions can be either a major release or a minor release (pre-release). The other main branch will be the `dev` branch, where dialogue is being added but isn't yet double-checked for differences (also differences in the picture text).

The `text` directory is meant to be temporary. You work with the extracted text, then once you move it to the according patch, you delete the text file. From there, you're likely to only need to make small adjustments to the patch, so it becomes a nuisance to update the text file as well.

# TO-DO List (If you don't want to see any potential spoilers, stop reading.)
*Because every project needs a to-do list!*
- Picture Text: 100%
- Fancy Text: 100%
- Database: 86%
- Special (#1/#10/#28): 100%
## Sections/Areas
- Prologue: 100%
- Sinkholm: 100%
- The Sink-Lohne Pass: 100%
- Nomerea: 100%
- The Lohne: 100%
- Mount Toras: 100%
- Wayfarer's Inn: 100%
- The Corine Plateau: 100%
- Gencorin Pt I: 100%
- The Silvan Forest: 100%
- The Mysterious Fortress: 100%
- Gencorin Pt II: 100%
- The Helnovien Prison: 70%
- The Helnovien Mine: 98%