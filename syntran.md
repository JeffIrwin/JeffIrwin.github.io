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

## About syntran

Syntran is my array-oriented, interpreted, statically type-inferred language,
written in Fortran.  It has a vaguely rust-like syntax.  For documentation, see
the project readme:
[https://github.com/JeffIrwin/syntran](https://github.com/JeffIrwin/syntran)

Syntran explorer is a service where you can run syntran in a web browser

## Disclaimer

1. Your source is not saved. Refreshing the page, changing the sample selection
   dropdown, or any accidental keypress will erase your source permanently!
2. Not only is the syntran explorer web service alpha, but the syntran language
   itself is alhpa.  Do not expect stability
3. Expect regular service interruptions for updates
5. Availability is limitted.  Thanks to a free AWS trial, I have a server to run
   the backend.  This service may not be available past July 2025
6. This web service does not scale.  I expect limitted usage, but performance
   could degrade if there are a lot of users all on one server
7. There is a 10 second timeout to prevent math bombs
8. Syntran explorer is only intended as an introductory teaching tool, to lower
   barrier to entry, and to provide accessible samples.  I recommend installing
   or building the syntran interpreter locally for anything beyond introduction,
   and not using syntran at all for production (see the alpha notice above)
9. This list is not comprehensive or exhaustive
10. BSD-3 terms and conditions:
```
BSD 3-Clause License

Copyright (c) 2024, Jeff Irwin

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

