*This document is about generating your own patch files.*



# Generating Patched Files

This git repository is designed to only carry whatever was changed from the original, so in order to make it useful, you'll need to work off of the original copy of Velsarbor and apply these patches to it.

## Resources

- [Velsarbor](https://www.multimediaxis.de/threads/137420-RM2K-Velsarbor-Die-letzte-Version): Use the version patched by TheDude
	- Set `RPG_RT.exe` to Windows 7 compatibility mode if you get `DirectDraw Error(DDERR_UNSUPPORTED)`.
- [RPGMaker2000 RTP](http://rpg2000.4players.de/index.php?inhalt=rpgmaker): Download `Runtimepackage 1.0 (12.5 MB)` and install.
- If the font looks weird (squished together), then use this [font patch](https://www.moddb.com/downloads/rpg-maker-2000-font-patch).
- `git clone https://github.com/WatDuhHekBro/VelsarborEnglish` (or just `Download ZIP`)
- [Windows soundfont file](https://stash.reaper.fm/v/23360/Scc1t2.sf2)

## Steps to compile this project's patches

1. In the downloaded git repository (where `<root>/PatchSetup.md`), copy over the original folder of Velsarbor (such that `<root>/Velsarbor/RPG_RT.exe` is a valid path). **Make sure it's the version patched by TheDude!**
2. Compile [RPGMaker2kPatcher](https://github.com/WatDuhHekBro/RPGMaker2kPatcher) via `cargo b -r` (installing [Rust](https://rust-lang.org/learn/get-started/) if necessary), put it in either the `<root>/rpgmaker2kpatcher(.exe)` or somewhere that your `$PATH`/`%PATH%` can reach.
3. Run the command `./rpgmaker2kpatcher applyPatches`.
4. ~~Now that your patched files have been compiled, go to the copy of Velsarbor you want to modify, and in the same folder that contains `RPG_RT.exe`, drag in all the files from `<root>/build/bin` and `<root>/assets`, then replace all the files.~~ *(see below)*

## Steps to patch the game

1. Go to your copy of Velsarbor (where the root has the file `<root>/RPG_RT.exe`)
2. Drag and drop all the folders inside `VelsarborEnglish/assets`, overwriting all files in `<root>` (e.g. `VelsarborEnglish/assets/Picture` overwrites `<root>/Picture`)
3. Drag and drop all the files inside `VelsarborEnglish/build/bin`, overwriting all files in `<root>` (e.g. `VelsarborEnglish/build/bin/Map0001.lmu` overwrites `<root>/Map0001.lmu`)



# Extra steps to polish the experience even further

## Proper SoundFont

If you're using EasyRPG, the packaged SoundFont doesn't work well for this game. So get the [Windows soundfont file](https://stash.reaper.fm/v/23360/Scc1t2.sf2).

Then, if you're using EasyRPG Player, go to your settings and set the soundfont path to wherever you placed `Scc1t2.sf2`.

If you're using EasyRPG Player Web, then move the file to `Velsarbor/easyrpg.soundfont`.

## Include the RTP directly

1. Copy all the files in the RTP's installed location to the game root. Do NOT overwrite anything.
2. In `RPG_RT.ini`, set `FullPackageFlag=1`.
