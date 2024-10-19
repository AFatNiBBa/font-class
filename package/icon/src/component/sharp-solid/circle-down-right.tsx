
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down-right?s=sharp-solid circle-down-right}
 * @preview ![circle-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDBhMjU2IDI1NiAwIDEgMCAwIDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwem05NiAxOTJsMCAxNjAtMTYwIDAtMjQtMjQgNTItNTItNzYtNzYgNTYtNTYgNzYgNzYgNTItNTIgMjQgMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zm96 192l0 160-160 0-24-24 52-52-76-76 56-56 76 76 52-52 24 24z" />
    </Icon>
);

export default CircleDownRight;