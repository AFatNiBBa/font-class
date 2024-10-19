
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-right?s=sharp-solid circle-caret-right}
 * @preview ![circle-caret-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZhMjU2IDI1NiAwIDEgMCA1MTIgMEEyNTYgMjU2IDAgMSAwIDAgMjU2ek0yNDAgMTI4TDM2OCAyNTYgMjQwIDM4NGwtMzIgMCAwLTI1NiAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleCaretRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 128L368 256 240 384l-32 0 0-256 32 0z" />
    </Icon>
);

export default CircleCaretRight;