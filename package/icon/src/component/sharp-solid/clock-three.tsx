
import { Icon } from "../../index";

/**
 * A component that renders the `clock-three` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-three?s=sharp-solid clock-three}
 * @preview ![clock-three](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDBhMjU2IDI1NiAwIDEgMSAwIDUxMkEyNTYgMjU2IDAgMSAxIDI1NiAwek0yMzIgMTIwbDAgMTM2IDAgMjQgMjQgMCAxMDQgMCAyNCAwIDAtNDgtMjQgMC04MCAwIDAtMTEyIDAtMjQtNDggMCAwIDI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ClockThree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136 0 24 24 0 104 0 24 0 0-48-24 0-80 0 0-112 0-24-48 0 0 24z" />
    </Icon>
);

export default ClockThree;