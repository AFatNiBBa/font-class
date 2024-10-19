
import { Icon } from "../../index";

/**
 * A component that renders the `maximize` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/maximize?s=sharp-solid maximize}
 * @preview ![maximize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMTkybDMyIDMyIDUyLTUyIDg0IDg0LTg0IDg0TDY0IDI4OCAzMiAzMjBsMCAxNjAgMTYwIDAgMzItMzItNTItNTIgODQtODQgODQgODQtNTIgNTIgMzIgMzIgMTYwIDAgMC0xNjAtMzItMzItNTIgNTItODQtODQgODQtODQgNTIgNTIgMzItMzIgMC0xNjBMMzIwIDMyIDI4OCA2NGw1MiA1Mi04NCA4NC04NC04NCA1Mi01MkwxOTIgMzIgMzIgMzJsMCAxNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Maximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 192l32 32 52-52 84 84-84 84L64 288 32 320l0 160 160 0 32-32-52-52 84-84 84 84-52 52 32 32 160 0 0-160-32-32-52 52-84-84 84-84 52 52 32-32 0-160L320 32 288 64l52 52-84 84-84-84 52-52L192 32 32 32l0 160z" />
    </Icon>
);

export default Maximize;