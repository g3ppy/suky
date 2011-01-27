// ==UserScript==
// @name           Loggy
// @namespace      www.com.com
// @include        http://localhost:3000/veryhiddensignin
// ==/UserScript==

oTF = document.getElementById('one');
tTF = document.getElementById('two');
thTF = document.getElementById('three');

one = parseInt(oTF.value);
two = parseInt(tTF.value);
three = parseInt(thTF.value)

rTF = document.getElementById('tag');
rTF.value = one * (two + three);