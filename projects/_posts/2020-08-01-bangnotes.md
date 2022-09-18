---
layout: post
title: BangNotes
dateline: July 2020
permalink: /projects/bangnotes/about
code: true
description: an attempt at a markup templater
---

See the code on [GitHub][github-repo].

When I was making this website, something that was important to me was figuring
out how to make a space where I could type and publish notes. Often, my notes
involve the heavy usage of math. Moreso, though, my notes are always taken with
a very particular style, with certain kinds of formatting assigned to certain
situations. For example, my math notes have very specific formatting for
definitions, propositions, theorems, as opposed to the formatting I use for
proofs or even general commentary. While these types of formatting problems
aren't particularly difficult when working with HTML, it very quickly became
very tedious to type the same div block structures repeatedly with few changes.
I wanted something flexible and lightweight that would allow me to type my notes
in a more Markdown-like style with built-in reusable components. My solution:
!BangNotes.

!BangNotes is a markup language that is similar in many ways to Markdown, with
the addition of completely custom reusable component blocks called !bangs. Most
!bangs will start with a name (`!thm`) on their own line, followed by content
that will go inside the bang, and lastly a `!end` tag on its own line. Some
!bangs will take an optional argument at their declaration, like
`!thm{Division Theorem}`. Some !bangs also only require one line: these bangs
are formatted a bit differently, as they don't require an `!end` tag. (An
example is the `!title` bang.)

One can easily define their own !bangs by creating a `.bdef` file. !bangs are
declared by `!name`. If you want your bang to support an optional argument, add
`{opt}` following the name. (Leave it out if not.) If your !bang component will
contain extended, multi-line internal content, add a space and then `!end`
following the !bang declaration. Single-line !bangs are defined by the omission
of `!end`. The bang declaration is then followed by `:=`. Following this, your
HTML declaration of the reusable component is placed inside curly braces. For
best results, place the opening brace on the same line as the declaration, and
the closing brace on its own line after the HTML. Inside the HTML, put
`{content}` where you want the inner contents of the !bang block to be placed.
If your !bang takes an optional extra argument, format that in your HTML
declaration as `{opt}`.  Note that the entire line containing `{opt}` will be
omitted if the !bang block is called but an optional argument isn't given.

Here is a sample !bang definition.

```plaintext
!thm{opt} !end := {
  <div class="block">
    <div class="block-name">
      theorem
    </div>
    <div class="block-content">
      <h3>{opt}</h3>
      {content}
    </div>
  </div>
}
```

Now, with this !bang defined in our `.bdef` file, we can use it in a !bangNote.
For example,

```plaintext
!thm{Division Theorem}
For all $x \in \mathbb{Z}$, there exists a unique $q, r \in
\mathbb{Z}$ with $0 \leq r < n$ so that
\[ x = n \cdot q + r. \]
In this case, we call $x$ the "dividend", $n$ the "divisor",
$q$ the "quotient", and $r$ the "remainder".
!end
```

This will then be compiled to the following HTML.

```plaintext
<div class="block">
  <div class="block-name">
    theorem
  </div>
  <div class="block-content">
    <h3>Division Theorem</h3>
    <p>
      For all \(x \in \mathbb{Z}\), there exists a unique
      \(q, r \in \mathbb{Z}\) with \(0 \leq r < n\) so that
      \[ x = n \cdot q + r. \]
      In this case, we call \(x\) the "dividend", \(n\) the
      "divisor", \(q\) the "quotient", and \(r\) the
      "remainder".
    </p>
  </div>
</div>
```

In practice, I've added an additional block at the end of the compiler that adds
typical HTML default things like `<html>`, `<head>`, etc., as well as references
to my own pre-defined CSS files, MathJax scrips, etc. This would all be very
easily customized to meet the needs of anyone using the compiler.

[github-repo]: //github.com/cmhainje/bangnotes
