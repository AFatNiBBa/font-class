
import { Icon } from "../../index";

/**
 * A component that renders the `circle-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-right?s=sharp-solid circle-right}
 * @preview ![circle-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZhMjU2IDI1NiAwIDEgMCA1MTIgMEEyNTYgMjU2IDAgMSAwIDAgMjU2ek0yNTYgMzg0bDAtODAtMTI4IDAgMC05NiAxMjggMCAwLTgwIDE2IDBMNDAwIDI1NiAyNzIgMzg0bC0xNiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM256 384l0-80-128 0 0-96 128 0 0-80 16 0L400 256 272 384l-16 0z" />
    </Icon>
);

export default CircleRight;