
import { Icon } from "../../index";

/**
 * A component that renders the `clock-five` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five?s=thin clock-five}
 * @preview ![clock-five](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk2IDI1NkEyNDAgMjQwIDAgMSAwIDE2IDI1NmEyNDAgMjQwIDAgMSAwIDQ4MCAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6TTI2NCAxMDRsMCAxNDkuNiA2Mi43IDk0YzIuNSAzLjcgMS41IDguNi0yLjIgMTEuMXMtOC42IDEuNS0xMS4xLTIuMmwtNjQtOTZjLS45LTEuMy0xLjMtMi45LTEuMy00LjRsMC0xNTJjMC00LjQgMy42LTggOC04czggMy42IDggOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ClockFive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 104l0 149.6 62.7 94c2.5 3.7 1.5 8.6-2.2 11.1s-8.6 1.5-11.1-2.2l-64-96c-.9-1.3-1.3-2.9-1.3-4.4l0-152c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default ClockFive;