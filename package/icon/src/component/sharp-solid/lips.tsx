
import { Icon } from "../../index";

/**
 * A component that renders the `lips` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lips?s=sharp-solid lips}
 * @preview ![lips](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyMjRMMTkyIDY0bDk2IDQ4IDk2LTQ4TDU3NiAyMjRzLTgwIDIyNC0yNDAgMjI0bC05NiAwQzgwIDQ0OCAwIDIyNCAwIDIyNHptNjQgMHM4MCA5NiAyMjQgOTZzMjI0LTk2IDIyNC05NkwzNjggMTkycy00OC4xIDE2LTgwIDE2cy04MC0xNi04MC0xNkw2NCAyMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Lips: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 224L192 64l96 48 96-48L576 224s-80 224-240 224l-96 0C80 448 0 224 0 224zm64 0s80 96 224 96s224-96 224-96L368 192s-48.1 16-80 16s-80-16-80-16L64 224z" />
    </Icon>
);

export default Lips;