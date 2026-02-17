*This document is about generating your own patch files.*



# Generating Patched Files

This git repository is designed to only carry whatever was changed from the original, so in order to make it useful, you'll need to work off of the original copy of Velsarbor and apply these patches to it.

## Steps to compile this project's patches

1. Download the git repository via `git clone https://github.com/WatDuhHekBro/VelsarborEnglish` (or just `Download ZIP`).
2. In the downloaded git repository (where `<root>/PatchSetup.md`), copy over the original folder of Velsarbor (such that `<root>/Velsarbor/RPG_RT.exe` is a valid path). **Make sure it's the version patched by TheDude!**
3. Compile [RPGMaker2kPatcher](https://github.com/WatDuhHekBro/RPGMaker2kPatcher), then put it in either the `<root>/rpgmaker2kpatcher(.exe)` or somewhere that your `$PATH`/`%PATH%` can reach.
4. Run the command `rpgmaker2kpatcher apply`.

## Steps to patch the game

1. Download [the final version of Velsarbor](https://www.multimediaxis.de/threads/137420-RM2K-Velsarbor-Die-letzte-Version). Scroll down to the `Download` section and click `Velsarbor - Die letzte, unvollständige Version (Patched by TheDude)`. **Do not download the original version.**
2. Go to the copy of Velsarbor you want to modify (where the root has the file `<root>/RPG_RT.exe`).
3. Drag and drop all the folders inside `VelsarborEnglish/assets`, overwriting the files in `<root>` (e.g. `VelsarborEnglish/assets/Picture` overwrites `<root>/Picture`).
4. Drag and drop all the files inside `VelsarborEnglish/build/bin`, overwriting the files in `<root>` (e.g. `VelsarborEnglish/build/bin/Map0001.lmu` overwrites `<root>/Map0001.lmu`).



# Extra steps to polish the experience even further

## Proper SoundFont

If you're using EasyRPG, the packaged SoundFont doesn't work well for this game. So get the [Windows SoundFont file](https://stash.reaper.fm/v/23360/Scc1t2.sf2).

Then, if you're using EasyRPG Player, go to your settings and set the soundfont path to wherever you placed `Scc1t2.sf2`.

If you're using EasyRPG Player Web, then move the file to `Velsarbor/easyrpg.soundfont`.

## Include the RTP directly

1. Copy all the files in the RTP's installed location to the game root. Do NOT overwrite anything.
2. In `RPG_RT.ini`, set `FullPackageFlag=1`.
