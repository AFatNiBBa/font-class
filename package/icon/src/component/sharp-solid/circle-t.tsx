
import { Icon } from "../../index";

/**
 * A component that renders the `circle-t` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-t?s=sharp-solid circle-t}
 * @preview ![circle-t](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6TTE1MiAxNDRsMTA0IDAgMTA0IDAgMjQgMCAwIDQ4LTI0IDAtODAgMCAwIDE2OCAwIDI0LTQ4IDAgMC0yNCAwLTE2OC04MCAwLTI0IDAgMC00OCAyNCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleT: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM152 144l104 0 104 0 24 0 0 48-24 0-80 0 0 168 0 24-48 0 0-24 0-168-80 0-24 0 0-48 24 0z" />
    </Icon>
);

export default CircleT;