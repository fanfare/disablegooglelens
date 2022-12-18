## Chrome users

Version `0.0.4` adds a "Search Google for image" context menu item which searches for and loads image results in a new tab (instead of in the side panel). After installing from the [Chrome Web Store](https://chrome.google.com/webstore/detail/disable-google-lens/dkapjhgpncbeiebegegdbpgfoabdkilh), you may want to remove the old/redundant "Search image with Google Lens" context menu item; Here's how to remove it:

- in chrome, go to: `chrome://settings/searchEngines`
- scroll down and click the `Add` button (it's on the right-hand side)
- set the `Search engine` field to be: `google.com`
- set the `Keyword` or `Shortcut` field to be: `google`
- set the `URL with %s in place of query` field to be the following:

    {google:baseURL}search?q=%s&{google:RLZ}{google:originalQueryForSuggestion}{google:assistedQueryStats}{google:searchboxStats}{google:searchFieldtrialParameter}{google:iOSSearchLanguage}{google:prefetchSource}{google:searchClient}{google:sourceId}{google:contextualSearchVersion}ie={inputEncoding}
    
- click the blue `Add` button to save
- scroll down and find the newly-created `google.com` entry (probably under `Site Search`)
- click the 3 dots next to it on the right and select `Make Default`

This should eliminate the unneeded "Search image with Google Lens" item from Chrome `>=97` (and removes the reundant "Search Google for image" item from Chrome `<=96`).

It was reported that this may remove some other Google-related features; if you end up wanting to revert it back to how it was, set the default Search Engine  back to the `Google` entry.
