
import { Icon } from "../../index";

/**
 * A component that renders the `display` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display?s=sharp-solid display}
 * @preview ![display](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTc2IDBMMCAwIDAgNDE2bDI0MCAwLTEwLjcgMzJMMTYwIDQ0OGwtMzIgMCAwIDY0IDMyIDAgMjU2IDAgMzIgMCAwLTY0LTMyIDAtNjkuMyAwTDMzNiA0MTZsMjQwIDBMNTc2IDB6TTUxMiA2NGwwIDI4OEw2NCAzNTIgNjQgNjRsNDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Display: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 0L0 0 0 416l240 0-10.7 32L160 448l-32 0 0 64 32 0 256 0 32 0 0-64-32 0-69.3 0L336 416l240 0L576 0zM512 64l0 288L64 352 64 64l448 0z" />
    </Icon>
);

export default Display;