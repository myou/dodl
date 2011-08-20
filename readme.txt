Update, Summer 2011:
This is not the ideal way to go about it.
Better approach is use JavaScript objects
to manage DOM objects and wrap them into
components. This allows far greater freedom
and flexibility and much more functionality.

-----------------

DODL is a JavaScript based construct that
give DOM objects an OOP-like layer of
abstraction.

It abstracts any subset of DOM tree into
one DOM object that has attributes, behaviors,
and an inner tree.

Objects of any of this abstractiong can
be instantiated into appendable DOM objects.

-----------------

Files:

dodl_lib.js, the parser
*_dodl.js, examples of DODL constructs