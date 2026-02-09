// Temporary JS to check for non-standard patch fields before deleting the legacy patches for good.
// It would take way too much time to manually check each patch file.
// To use, paste the JSON in your browser via deleteStandardKeys({...}).
// "erase" used instead of "delete" for easier console pop-up/autocomplete.

function eraseStandardLMUKeys(json) {
	if(json.dialogue) {
		for(const dialogue of json.dialogue) {
			if(dialogue.path.length === 4) {
				delete dialogue.path;
			}
			delete dialogue.original;
			delete dialogue.lines;
			delete dialogue.indent;
		}

		json.dialogue = json.dialogue.filter(dialogue => Object.keys(dialogue).length > 0);

		if(json.dialogue.length === 0) {
			delete json.dialogue;
		}
	}

	if(json.other) {
		for(const other of json.other) {
			if(other.path.length === 3) {
				delete other.path;
			}
			delete other.original;
			delete other.patch;
		}

		json.other = json.other.filter(other => Object.keys(other).length > 0);

		if(json.other.length === 0) {
			delete json.other;
		}
	}

	const isJSONEmpty = Object.keys(json).length === 0;

	if(isJSONEmpty) {
		console.info(isJSONEmpty);
	} else {
		console.error(isJSONEmpty);
	}

	return json;
}

function eraseStandardLDBKeys(json) {
	if(json.dialogue) {
		for(const dialogue of json.dialogue) {
			if(dialogue.path.length === 3) {
				delete dialogue.path;
			}
			delete dialogue.original;
			delete dialogue.lines;
			delete dialogue.indent;
		}

		json.dialogue = json.dialogue.filter(dialogue => Object.keys(dialogue).length > 0);

		if(json.dialogue.length === 0) {
			delete json.dialogue;
		}
	}

	if(json.other) {
		for(const other of json.other) {
			if(other.path.length === 2 || other.path.length === 5) {
				delete other.path;
			}
			delete other.original;
			delete other.patch;
		}

		json.other = json.other.filter(other => Object.keys(other).length > 0);

		if(json.other.length === 0) {
			delete json.other;
		}
	}

	const isJSONEmpty = Object.keys(json).length === 0;

	if(isJSONEmpty) {
		console.info(isJSONEmpty);
	} else {
		console.error(isJSONEmpty);
	}

	return json;
}

// Example
eraseStandardLMUKeys({
	"dialogue":
	[
		{
			"path": [63,1,9,3,5],
			"original": "Kento: Wir müssen so schnell wie möglich nach Gencorin, zur Grenze! Dort sind wir sicher!",
			"lines":
			[
				"\\c[1]\\n[1]\\c[0]: We have to get to the border",
				"at Gencorin as soon as possible!\\.",
				"We'll be safe there!\\.\\.\\^"
			]
		}
	]
})
