---
layout: post
tags: [portland, web development, nodejs, hackers, substack, hackers.txt, npm]
---

I recently came across a module from [substack](https://twitter.com/substack),
 [hacker-deps](https://github.com/substack/hacker-deps), which allows you to get
a list of authors of node-modules included in your project.

This gives us a really simple way to give a _tiny_ bit of credit back for their work
by adding a `hackers.txt` to our projects.

All you have to do is:

{% highlight bash %}
npm install hacker-deps --save
{% endhighlight %}

In the root of your project directory. And add these lines to your `package.json`

{% highlight json %}
  "scripts": {
    "postinstall": "npm run hackers-text && npm run unzip-sounds && echo 'run npm run start' to run sequencer",
    "hackers-text": "hacker-deps > public/hackers.txt",
{% endhighlight %}

Now each time you do an npm install, the hackers.txt will be generated and served
from your public/static directory.

![sample-output](/assets/themes/twitter/bootstrap/img/hackers-dot-txt.png)

Here is some sample output when ran against one of my [projects](https://github.com/meandavejustice/sequencer)

{% highlight json %}
 19.9%    James Halliday (substack)
  6.1%    Dominic Tarr (dominictarr)
  5.9%    Isaac Z. Schlueter (isaacs)
  5.9%    spumko (spumko)
  4.9%    facebook (facebook)
  4.2%    Conrad Zimmerman (conradz)
  4.1%    rvagg (rvagg)
  2.8%    Chris Dickinson (chrisdickinson)
  2.6%    Eran Hammer (spumko)
  2.6%    Raynos (Raynos)
  2.5%    undefined
  2.3%    isaacs (isaacs)
  1.8%    Nick Fitzgerald (mozilla)
  1.5%    ForbesLindesay (ForbesLindesay)
  1.5%    Julian Gruber (juliangruber)
  1.3%    James Burke (jrburke)
  1.3%    Max Ogden (maxogden)
  1.3%    Scott Corgan (scottcorgan)
  1.3%    Andrey Popp (andreypopp)
  1.3%    Ben Newman (reactjs)
  1.3%    Awnist (awnist)
  1.3%    max ogden (maxogden)
  1.3%    Hugh Kennedy (hughsk)
  1.3%    meandave
  1.0%    TJ Holowaychuk (visionmedia)
  1.0%    Caolan McMahon (caolan)
  0.9%    Roman Shtylman (shtylman)
  0.8%    Andrew Nesbitt (andrew)
  0.7%    Thorsten Lorenz (thlorenz)
  0.7%    T. Jameson Little (beatgammit)
  0.7%    Tim Caswell (creationix)
  0.7%    ariya (ariya)
  0.6%    Alex Gorbatchev (alexgorbatchev)
  0.6%    Paul Miller (paulmillr)
  0.6%    component (component)
  0.6%    Federico Romero (federomero)
  0.6%    Robert Kieffer (broofa)
  0.6%    mout (mout)
  0.6%    Level (Level)
  0.6%    andrewrk (andrewrk)
  0.6%    jensarps (jensarps)
  0.6%    Jordan Harband (ljharb)
  0.5%    mishoo (mishoo)
  0.3%    Eli Skeggs (globesherpa)
  0.3%    Andrew Kelley (superjoe30)
  0.3%    Mathias Bynens (bestiejs)
  0.3%    Drew Young (drewyoung1)
  0.3%    Brian J. Brennan (brianloveswords)
  0.3%    Timothy J Fontaine (tjfontaine)
  0.3%    Romain Beauxis (toots)
  0.2%    Cloudkick, Inc. (cloudkick)
  0.2%    Alexander Shtuchkin (ashtuchkin)
  0.2%    Constellation (Constellation)
  0.2%    David Chambers (davidchambers)
  0.2%    Kris Kowal (kriskowal)
  0.1%    Douglas Crockford (substack)
  0.1%    Ariya Hidayat (ariya)
  0.1%    Tom Robinson
  0.1%    Johan Dahlberg
  0.1%    Richard Rodger (rjrodger)
  0.1%    Paul Querna (pquerna)
  0.1%    Tomaz Muraus (Kami)
  0.1%    Peter Scott (PeterScott)
  0.1%    Moritz Peters (maritz)
  0.1%    Jeremy Ashkenas (jashkenas)
{% endhighlight %}

There are a few other options you can checkout [here](https://github.com/substack/hacker-deps#usage)
if you wanna get a little more descriptive.

### Links
* [hacker-deps](https://github.com/substack/hacker-deps)
