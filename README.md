# Velsarbor - English Version
A battle has broken out. In the midst of a high-tech underground complex, the Brigantine Order has invaded in order to reach the machine core and tap into the power within. Blood is spilt on both sides, the chaos representing the pinnacle of both nations' immense power. Just when the battle seems to be at a permanent stalement, there's only one problem: The mission has been compromised.

# Resources
- The [final version of Velsarbor](https://www.multimediaxis.de/threads/137420-RM2K-Velsarbor-Die-letzte-Version), patched by TheDude.
- An [unofficial German RTP](http://rpg2000.4players.de/index.php?inhalt=rpgmaker).
- A [font patch](https://www.moddb.com/downloads/rpg-maker-2000-font-patch) (only if the font looks weird).
- Set `RPG_RT.exe` to Windows 7 compatibility mode if you get `DirectDraw Error(DDERR_UNSUPPORTED)`.

# Controls
*Useful for controller usage.*
There are only three true controls for the game. Movement, Select, and Back. In the game, these'll be referred to as `the arrow keys`, `Enter`, and `Esc` respectively.
- Movement is controlled by the `arrow keys` and is self-explanatory.
- "Select" is the key used to select a menu option as well as to run/walk when you hold the key. This key is `Z` as well as `Enter`.
- "Back" is the key used to cancel a menu option as well as to open/close the menu. This key is `X` as well as `Esc`.

These buttons below still do unique things, but are mostly for customization.
- `F4`: This toggles whether or not you play in fullscreen.
- `F5`: This toggles whether the game upscales by a factor of 2 or keeps the original ratio. 320x240 and 640x480 are the available resolutions.
- `F12`: This brings you back to the title screen **regardless of whether or not you saved or where you are**.

# Pronunciations
- Cibon: Pronounced with a hard C, so basically "Key-bon". The stress is on the first syllable.
- All J's are pronounced as Y's, because German. The exception is with Japanese-esque names.

# Videos
I have a playlist of update videos in case you want to watch it instead of playing it, [here](https://www.youtube.com/playlist?list=PLT800wgkhxolwCulnS8bWs9LVEPnssTgy). Keep in mind that I'm cutting out regular battles since they're boring to watch.

And here are some references:
- [TrueMG](https://www.youtube.com/playlist?list=PLEED9E15CB6E0D597) (First Demo, up to the end of the Silvan Forest)
- [TrueMG](https://www.youtube.com/playlist?list=PLSgi0v-Xd3aGWEzfvjlh2gbqLF_cllSq_) (Second/Final Demo, up to the end of Nomerea)
- [MajinSonicLP](https://www.youtube.com/playlist?list=PLxdruDpgzoSHWmU5xxbEkfbF5dtemyDeN) (Second/Final Demo, the entire game)

# Dev Section Below
AFAIK, the people who previously worked on translations never published their progress, and it seems like they haven't worked on it since.

For now, parsed map files are not included, but may be in the future.
Images can be found along with patched map files in the `Releases` section.

If you want to develop a workspace, use my [RPGMaker2kPatcher](https://github.com/WatDuhHekBro/RPGMaker2kPatcher) and then compile the JSON data files yourself. The work is all in `patch/`, so those will compile the patched binary files for use with the game.

# Workflow
The `master` branch will correlate with each release, double-checked for line endings and line spacing. These release versions can be either a major release or a minor release (pre-release). The other main branch will be the `dev` branch, where dialogue is being added but isn't yet double-checked for differences (also differences in the picture text).

The `text` directory is meant to be temporary. You work with the extracted text, then once you move it to the according patch, you delete the text file. From there, you're likely to only need to make small adjustments to the patch, so it becomes a nuisance to update the text file as well.

After the first major release, the `dev` branch will still be used so there aren't a billion releases per typo.

# TO-DO List (If you don't want to see any potential spoilers, stop reading.)
*Because every project needs a to-do list!*
- Picture Text: 100%
- Fancy Text: 95%
- Database: 53%
- Special (#1/#10/#28): 45%
## Sections/Areas
- Prologue: 100%
- Sinkholm: 100%
- The Sink-Lohne Pass: 100%
- Nomerea: 100%
- The Lohne: 100%
- Mount Toras: 100%
- Wayfarer's Inn: 10%
- The Corine Plateau: 0%
- Gencorin Pt I: 0%
- The Silvan Forest: 2%
- Mysterious Fortress: 1%
- Gencorin Pt II: 0%
- The Helnovien Mine: 0.01%