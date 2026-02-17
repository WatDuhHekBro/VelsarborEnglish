# SPOILERS AHEAD

*This document contains all information relevant to developers, like if you want to make edits to the patch files.*

**Spoilers will not be restricted here. You have been warned.**



-----



# Tools & Workflow

Tools
- [RPGMaker2kPatcher](https://github.com/WatDuhHekBro/RPGMaker2kPatcher)
- `<git repo>/canvas/index.html`: A browser tool to help generate text for manual asset PNGs

Workflow
- `<git repo>/assets`: A folder containing all manually-edited asset files (like pictures)
- `<git repo>/info`: A folder containing info files about those manually-edited asset files
- `<git repo>/patch`: A folder containing all of the dialogue/text patches for the game
- `<git repo>/build`: A folder containing various auto-generated files from RPGMaker2kPatcher
- `<git repo>/Velsarbor`: You must have this folder inside the git repository (such that `<git repo>/Velsarbor/RPG_RT.exe` is the executable path), so you can read the original binary files and then patch them.
	- **Warning:** If you want to `apply` patches multiple times (for development), do NOT patch any files in this folder! Apply the patches in a separate folder!



# Manual Patches

- **Map0081:** Added dialogue command for extra space
	- Method: `[[splice-commands]]`
- **Map0093:** Adds in a "Play Music" command that appears to have been forgotten about
	- Method: `[[splice-commands]]`
- **Map0133:** Replaces the main theme (`assets/Music/Im_Herzen_der_Schlacht.mid`) with the one in the original 2005 demo.
	- **Rationale:** The original 2005 demo's version of the theme sounds more punchy, more chaotic, very fitting for what's going on.
- **Map0179:** *Several (see below)*
	- Method: `[[text]]`
	- Replaces the regular boss theme (`Ernstes-Gefecht2`) with a more unsettling battle theme (`Bedrohung_von_oben`).
		- **Rationale:** When Kento and the group are unexpectedly ambushed by the mysterious army, the very cheerful regular boss theme sounds very jarring & out of place here. Additionally, the name `Bedrohung_von_oben` even implies that it was meant to be used for this scene, but it looks like it got forgotten about.
	- Replaces the dramatic reveal theme (`assets/Music/Schock.mid`) with the one in the original 2005 demo.
		- **Rationale:** The original 2005 demo's version sounds much louder and stronger, which is very important when it comes to the big reveal / plot twist.
- **Map0208:** Replaces Sedric's boss theme from the regular (`Ernstes-Gefecht2`) to an unused battle theme (`2003MaximumBattle`).
	- Method: `[[text]]`
	- **Rationale:** Definitely not as strong of a rationale as the others, except that Sedric is part of the mysterious army, so it's kinda fitting to not have many normal themes play much in this section of the game (much like *that* area of CrossCode). I also felt like the normal boss theme was a bit overused by this point.
- **Map0224:** Bug Fix & Added Dialogue
	- Method: `[[splice-commands]]`
- **Map0227:** *Several (see below)*
	- Method: `[[splice-commands]]`
	- Fixed `assets/Music/DasLandEntscheidet.mid` not playing at all by re-rendering it in MuseScore.
	- Paired it with a "Fade Out" comment that appears to have been forgotten about.
- **Map0240:** Added dialogue (Special Edition™ Ending)
	- Method: `[[splice-commands]]`
	- **Rationale:** The original ending is just "Sir Dolaros: I'm bored. I'm gonna kill you now." "Cibon: Whaaaaaat~". I wanted to spice it up since it's non-canon anyway.
- **Map0242:** Bug Fix
	- Method: `[[append-page]]`
- **Map0245:** Bug Fix
	- Method: `[[splice-commands]]`
- **Map0250:** Bug Fix
	- Method: `[[splice-commands]]`



# GitHub Release v24: data.zip & patch.zip

> As for the files, just download `pre-patched.zip`, which'll give you the ready-to-play executable. `patch.zip` only contains what's modified and doesn't provide a playable executable. I'm also including `data.zip`, which contains all the files necessary for compiling the patched maps. As you can probably guess, `data.zip` is only for developers, so don't worry about it if you don't plan on dealing with that.

With the rewrite of [RPGMaker2kPatcher](https://github.com/WatDuhHekBro/RPGMaker2kPatcher) and the new TOML patch format, as well as reworking this project's git repo, `data.zip` and `patch.zip` are now completely obsolete.

`data.zip`
- `chars.json`
- `database.json`
- `Map####.json`
- Basically, all the binary files decompiled into JSON for developer convenience. This was due to the browser constraints limiting download speed as well as the JS engine processing files/patches very slowly, making the whole experience very painful to develop in.
- The rewrite makes this obsolete because of how blazingly fast it is. Even the decompiling step makes distributing the decompiled binary data completely unnecessary now.

`patch.zip`
- Folders: `CharSet`, `ChipSet`, `FaceSet`, `Music`, `Panorama`, and `Picture` (basically all the binary assets)
	- All the manually-edited pictures & etc. have been fully incorporated into the git repository, rendering `patch.zip` obsolete.
- Files: `Map####.lmu`, `RPG_RT.ldb`
	- Because of the same reason above, this would be very painful to compile the patches yourself, so the pre-patched files are already in `patch.zip`. With the rewrite, `patch.zip` is obsolete for these files, as compiling the patches is painlessly easy now.



# Patches by TheDude

On the [page to download Velsarbor](https://www.multimediaxis.de/threads/137420-RM2K-Velsarbor-Die-letzte-Version), there are two download links, one prominently displayed as "Patched by TheDude" (2013-01-22), and a smaller one labelled "Original Version" (2013-01-14). What exactly are the differences?

## Map0218.lmu

Top-Level Header #91
- Before: `91 = [129, 12]`
- After: `91 = [129, 19]`

event = 35, page = 1
- Page Header #33 Modified
	- Before: `33 = [1]`
	- After: `33 = [0]`
- Commands modified to contain some dialogue to block the player, probably for a bug fix / oversight.

## Map0229.lmu

Top-Level Header #91
- Before: `91 = [58]`
- After: `91 = [64]`

## Map0230.lmu

Top-Level Header #91
- Before: `91 = [129, 74]`
- After: `91 = [129, 85]`

event = 156
- Page #1 appears to have been removed
- Seems like some subheaders got modified
- No idea what this change was for

## Map0231.lmu

Top-Level Header #91
- Before: `91 = [131, 125]`
- After: `91 = [132, 5]`

event = 45, page = 1, command = 1022
- Calls Global Event #119 (I assume to fix portrait issues)

Adds a save point at event = 111.

## RPG_RT.ini

- Before: `MapEditZoom=1`
- After: `MapEditZoom=0`

## RPG_RT.lmt

Never actually checked this one, but I assume just shifting around the cursor. The LcfMapTree automatically updates anytime an editor even so much as clicks on a different map, updating the cursor position.

## harmony.log

- Before: `Aufgerufen von D:\Documents\Dropbox\GameDev\Velsarbor\Velsarbor\RPG_RT.exe`
- After: `Aufgerufen von C:\Users\David M�ller\Desktop\Velsarbor\RPG_RT.exe`

## The Takeaway

Ultimately, this patch was built on the foundation of the download already patched by TheDude. You can see this in Map0218. So this is just evidence that you must download the one patched by TheDude to use this project.
