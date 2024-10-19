
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-down?s=sharp-solid circle-caret-down}
 * @preview ![circle-caret-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDBhMjU2IDI1NiAwIDEgMCAwIDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwek0zODQgMjQwTDI1NiAzNjggMTI4IDI0MGwwLTMyIDI1NiAwIDAgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleCaretDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM384 240L256 368 128 240l0-32 256 0 0 32z" />
    </Icon>
);

export default CircleCaretDown;