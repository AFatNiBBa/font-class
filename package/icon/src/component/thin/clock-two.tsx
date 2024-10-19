
import { Icon } from "../../index";

/**
 * A component that renders the `clock-two` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-two?s=thin clock-two}
 * @preview ![clock-two](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk2IDI1NkEyNDAgMjQwIDAgMSAwIDE2IDI1NmEyNDAgMjQwIDAgMSAwIDQ4MCAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6TTI2NCAxMDRsMCAxMzcuMSA4My42LTU1LjdjMy43LTIuNSA4LjYtMS41IDExLjEgMi4yczEuNSA4LjYtMi4yIDExLjFsLTk2IDY0Yy0yLjUgMS42LTUuNiAxLjgtOC4yIC40cy00LjItNC4xLTQuMi03LjFsMC0xNTJjMC00LjQgMy42LTggOC04czggMy42IDggOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ClockTwo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 104l0 137.1 83.6-55.7c3.7-2.5 8.6-1.5 11.1 2.2s1.5 8.6-2.2 11.1l-96 64c-2.5 1.6-5.6 1.8-8.2 .4s-4.2-4.1-4.2-7.1l0-152c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default ClockTwo;