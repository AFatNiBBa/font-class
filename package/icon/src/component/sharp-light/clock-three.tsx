
import { Icon } from "../../index";

/**
 * A component that renders the `clock-three` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-three?s=sharp-light clock-three}
 * @preview ![clock-three](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDgwIDI1NkEyMjQgMjI0IDAgMSAxIDMyIDI1NmEyMjQgMjI0IDAgMSAxIDQ0OCAwek0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTI0MCAxMTJsMCAxNDQgMCAxNiAxNiAwIDExMiAwIDE2IDAgMC0zMi0xNiAwLTk2IDAgMC0xMjggMC0xNi0zMiAwIDAgMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ClockThree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 112l0 144 0 16 16 0 112 0 16 0 0-32-16 0-96 0 0-128 0-16-32 0 0 16z" />
    </Icon>
);

export default ClockThree;