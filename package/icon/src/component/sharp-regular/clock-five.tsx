
import { Icon } from "../../index";

/**
 * A component that renders the `clock-five` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five?s=sharp-regular clock-five}
 * @preview ![clock-five](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY0IDI1NkEyMDggMjA4IDAgMSAwIDQ4IDI1NmEyMDggMjA4IDAgMSAwIDQxNiAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6TTI4MCAxMjBsMCAxMjguNyA2MCA5MCAxMy4zIDIwLTM5LjkgMjYuNi0xMy4zLTIwLTY0LTk2LTQtNiAwLTcuMyAwLTEzNiAwLTI0IDQ4IDAgMCAyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ClockFive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM280 120l0 128.7 60 90 13.3 20-39.9 26.6-13.3-20-64-96-4-6 0-7.3 0-136 0-24 48 0 0 24z" />
    </Icon>
);

export default ClockFive;