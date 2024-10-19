
import { Icon } from "../../index";

/**
 * A component that renders the `clone` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clone?s=sharp-solid clone}
 * @preview ![clone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjg4IDQ0OEw2NCA0NDhsMC0yMjQgNjQgMCAwLTY0LTY0IDBMMCAxNjBsMCA2NEwwIDQ0OGwwIDY0IDY0IDAgMjI0IDAgNjQgMCAwLTY0IDAtNjQtNjQgMCAwIDY0em0yMjQtOTZMNTEyIDAgMTYwIDBsMCAzNTIgMzUyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Clone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 448L64 448l0-224 64 0 0-64-64 0L0 160l0 64L0 448l0 64 64 0 224 0 64 0 0-64 0-64-64 0 0 64zm224-96L512 0 160 0l0 352 352 0z" />
    </Icon>
);

export default Clone;