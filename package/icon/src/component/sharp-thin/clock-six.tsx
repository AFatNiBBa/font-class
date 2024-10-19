
import { Icon } from "../../index";

/**
 * A component that renders the `clock-six` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-six?s=sharp-thin clock-six}
 * @preview ![clock-six](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk2IDI1NkEyNDAgMjQwIDAgMSAwIDE2IDI1NmEyNDAgMjQwIDAgMSAwIDQ4MCAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6TTI2NCAxMDRsMCAyNzIgMCA4LTE2IDAgMC04IDAtMjcyIDAtOCAxNiAwIDAgOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ClockSix: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 104l0 272 0 8-16 0 0-8 0-272 0-8 16 0 0 8z" />
    </Icon>
);

export default ClockSix;