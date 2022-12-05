# Disable Google Lens

![Disable Google Lens](https://i.jollo.org/93zaVjSJ.png)

This extension redirects *Google Lens* results to the normal image results.

Works as a standalone extension or with [Google Images Restored](https://github.com/fanfare/googleimagesrestored) (which hides the side panel on *Google Images* entirely).

## Installation

Version `0.0.1` of this extension is available in the [Chrome Web Store](https://chrome.google.com/webstore/detail/disable-google-lens/dkapjhgpncbeiebegegdbpgfoabdkilh) and the [Firefox Add-On Marketplace](https://addons.mozilla.org/en-US/firefox/addon/disablegooglelens/).

Version `0.0.2` is an update specifically for Chrome users and is pending review on the Chrome Web Store (but can be loaded as an unpacked extension via the [ZIP file](https://github.com/fanfare/disablegooglelens/releases/download/0.0.2/disable-google-lens_manifest_v3_chrome-0.0.2.zip)). It adds a "Search Google for image" context menu item, so prevent the "Search image with Google Lens" from loading results in a side panel.

If you want to remove the unneeded/redundant "Search image with Google Lens" context menu item, do the following:

- go to [chrome://settings/searchEngines](chrome://settings/searchEngines)
- click the `Add` button
- set the `Search engine` field to be: `Google (w/o Lens)`
- set the `Keyword` or `Shortcut` field to be: `google`
- set the `URL with %s in place of query` field to be the following:

    {google:baseURL}search?q=%s&{google:RLZ}{google:originalQueryForSuggestion}{google:assistedQueryStats}{google:searchboxStats}{google:searchFieldtrialParameter}{google:iOSSearchLanguage}{google:prefetchSource}{google:searchClient}{google:sourceId}{google:contextualSearchVersion}ie={inputEncoding}
    
- click `Add`
- scroll down and find the `Google (w/o Lens) item under `Other search engines`
- click the 3 dots and select `Make Default`

This should eliminate the unneeded "Search image with Google Lens" item from Chrome >97 (and removes the reundant "Search Google for image" item from Chrome <=96).
