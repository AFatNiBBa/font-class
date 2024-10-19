
import { Icon } from "../../index";

/**
 * A component that renders the `cheese` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=sharp-light cheese}
 * @preview ![cheese](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgNDQ4bDQ0OCAwIDAtMTYwTDMyIDI4OGwwIDE2MHpNNTIuMSAyNTZMNDgwIDI1NmMwLTEwMi41LTgwLjMtMTg2LjItMTgxLjQtMTkxLjdMNTIuMSAyNTZ6TTAgMjU2TDI4OCAzMmMxMjMuNyAwIDIyNCAxMDAuMyAyMjQgMjI0bDAgMTkyIDAgMzItMzIgMEwzMiA0ODAgMCA0ODBsMC0zMkwwIDI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 448l448 0 0-160L32 288l0 160zM52.1 256L480 256c0-102.5-80.3-186.2-181.4-191.7L52.1 256zM0 256L288 32c123.7 0 224 100.3 224 224l0 192 0 32-32 0L32 480 0 480l0-32L0 256z" />
    </Icon>
);

export default Cheese;