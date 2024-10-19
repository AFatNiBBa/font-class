
import { Icon } from "../../index";

/**
 * A component that renders the `clock-three` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-three?s=regular clock-three}
 * @preview ![clock-three](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY0IDI1NkEyMDggMjA4IDAgMSAxIDQ4IDI1NmEyMDggMjA4IDAgMSAxIDQxNiAwek0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTIzMiAxMjBsMCAxMzZjMCAxMy4zIDEwLjcgMjQgMjQgMjRsMTA0IDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRsLTgwIDAgMC0xMTJjMC0xMy4zLTEwLjctMjQtMjQtMjRzLTI0IDEwLjctMjQgMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ClockThree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 13.3 10.7 24 24 24l104 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0 0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
    </Icon>
);

export default ClockThree;