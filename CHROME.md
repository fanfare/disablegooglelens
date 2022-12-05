## Chrome users

Version [`0.0.2`](https://github.com/fanfare/disablegooglelens/releases/0.0.2) is an update specifically for Chrome users and is pending review on the Chrome Web Store.

This version adds a new "Search Google for image" context menu item which loads image results in a new tab (instead of in the side panel).

### Installation

If you want to try it out now,

- download the [ZIP file](https://github.com/fanfare/disablegooglelens/releases/download/0.0.2/disable-google-lens_manifest_v3_chrome-0.0.2.zip)
- unzip the file
- in chrome, go to: `chrome://extensions`
- remove any previously installed version of `Disable Google Lens`
- enable Developer Mode (top right corner).
- drag the unzipped folder anywhere on the page to import it (do not delete the folder afterwards).

### Post-installation

After installing, you may want to remove the old/redundant "Search image with Google Lens" context menu item; Here's how to remove it:

- in chrome, go to: `chrome://settings/searchEngines`
- scroll down and click the `Add` button (it's on the right-hand side)
- set the `Search engine` field to be: `Google (w/o Lens)`
- set the `Keyword` or `Shortcut` field to be: `google`
- set the `URL with %s in place of query` field to be the following:

    {google:baseURL}search?q=%s&{google:RLZ}{google:originalQueryForSuggestion}{google:assistedQueryStats}{google:searchboxStats}{google:searchFieldtrialParameter}{google:iOSSearchLanguage}{google:prefetchSource}{google:searchClient}{google:sourceId}{google:contextualSearchVersion}ie={inputEncoding}
    
- click the blue `Add` button to save
- scroll down and find the newly-created `Google (w/o Lens)` entry (probably under `Site Search`)
- click the 3 dots next to it on the right and select `Make Default`

This should eliminate the unneeded "Search image with Google Lens" item from Chrome `>=97` (and removes the reundant "Search Google for image" item from Chrome `<=96`).

![http://telnet.asia/add1.png](http://telnet.asia/add1.png)

![http://telnet.asia/add2.png](http://telnet.asia/add2.png)

![http://telnet.asia/add3.png](http://telnet.asia/add3.png)
