# Watchman (State Handler)

Instances of the Watchman object are responsible for controlling events which need to be transported from child to parent, as well as meaningfully handling the state of nested components all the way down. Since React best practices welcome object composition and encapsulation into our hearts, events may need to be transported from two components which have nothing to do with each other.

Watchman observes the root of the page (and thus all composition it encapsulates) to fulfill this requirement by providing method calls to communicate events between two or more mutually exclusive components. This breaks encapsulation of those components so in future versions Redux (or other JS tooling) may be deemed more suitable. 