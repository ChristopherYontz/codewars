/*
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
Examples

A size 3 diamond:

 *
***
 *

...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *

...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

// MY SOLUTION
function diamond(size) {
    if (size % 2 === 0 || size < 0) {
        return null;
    }

    let diamondStr = "";
    for (let i = 1; i <= size; i += 2) {
        const spaces = (size - i) / 2;
        const stars = "*".repeat(i);
        diamondStr += " ".repeat(spaces) + stars + "\n";
    }

    for (let i = size - 2; i >= 1; i -= 2) {
        const spaces = (size - i) / 2;
        const stars = "*".repeat(i);
        diamondStr += " ".repeat(spaces) + stars + "\n";
    }

    return diamondStr;
}