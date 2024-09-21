---
layout: default
---

<link rel="shortcut icon" type="image/png" href="favicon.png">

{% include header.md %}
<script>
	document.getElementById("syntran").className = " active";
</script>

# Syntran

## [Follow this link to access the syntran explorer]({{site.url}}/syntran-explorer)

## Disclaimer

1. Your source is not saved. Refreshing the page, changing the sample selection
   dropdown, or any accidental keypress will erase your source permanently!
2. Not only is the syntran explorer web service alpha, but the syntran language
   itself is alhpa.  Do not expect stability
3. Expect regular service interruptions for updates
5. Availability is limitted.  Thanks to a free AWS trial, I have a server to run
   the backend.  This service may not be available past July 2025.
6. This web service does not scale.  I expect limitted usage, but perf could
   degrade if there are a lot of users all on one server
7. There is a 10 second timeout to prevent math bombs
8. Syntran explorer is only intended as an introductory teaching tool, to lower
   barrier to entry, and to provide accessible samples.  I recommend installing
   or building the syntran interpreter locally for anything beyond introduction,
   and not using syntran at all for production (see the alpha notice above)
9. BSD-3 terms TBD

