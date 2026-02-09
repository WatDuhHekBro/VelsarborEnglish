# Plans n' Stuff + Notes

The next release will only have the pre-patched release, no dev stuff or separate patch generated.

TODO
- Review legacy patches, then delete if nothing else left.
	- `original` and `lines` have been covered programmatically. `indent` and `path` too have also been checked programmatically, and you've double checked and dealt with any warnings that popped up in the terminal.
	- And you've already confirmed that the binary output of the new patches is identical to v24 of the JSON patch output.
	- So where does that leave you? All you're really looking for is *any* non-standard field that got left out of the new patch.
