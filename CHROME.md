### Chrome users

Version `0.0.2` is an update specifically for Chrome users and is pending review on the Chrome Web Store.

If you want to try it out now, it can be loaded as an unpacked extension via the [ZIP file](https://github.com/fanfare/disablegooglelens/releases/download/0.0.2/disable-google-lens_manifest_v3_chrome-0.0.2.zip).

This version adds a new "Search Google for image" context menu item which loads image results in a new tab (instead of in the Side Panel)

---

Once installed, you may want to remove the unnecessary "Search image with Google Lens" context menu item. Here's how you can do that:

- go to the URL: `chrome://settings/searchEngines`
- click the `Add` button
- set the `Search engine` field to be: `Google (w/o Lens)`
- set the `Keyword` or `Shortcut` field to be: `google`
- set the `URL with %s in place of query` field to be the following:

    {google:baseURL}search?q=%s&{google:RLZ}{google:originalQueryForSuggestion}{google:assistedQueryStats}{google:searchboxStats}{google:searchFieldtrialParameter}{google:iOSSearchLanguage}{google:prefetchSource}{google:searchClient}{google:sourceId}{google:contextualSearchVersion}ie={inputEncoding}
    
- click the `Add` button
- scroll down and find the newly-created `Google (w/o Lens)` entry
- click the 3 dots next to it and select `Make Default`

This should eliminate the unneeded "Search image with Google Lens" item from Chrome `>97` (and removes the reundant "Search Google for image" item from Chrome `<=96`).
