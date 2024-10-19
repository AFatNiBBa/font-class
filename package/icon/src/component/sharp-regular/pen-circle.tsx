
import { Icon } from "../../index";

/**
 * A component that renders the `pen-circle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-circle?s=sharp-regular pen-circle}
 * @preview ![pen-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY0IDI1NkEyMDggMjA4IDAgMSAwIDQ4IDI1NmEyMDggMjA4IDAgMSAwIDQxNiAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6bTE0NCAzMkwyNTIuNyAxNzkuM2w4MCA4MEwyMjQgMzY4bC05NiAxNiAxNi05NnptMjU2LTk2bC00NC43IDQ0LjctODAtODBMMzIwIDExMmw4MCA4MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PenCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144 32L252.7 179.3l80 80L224 368l-96 16 16-96zm256-96l-44.7 44.7-80-80L320 112l80 80z" />
    </Icon>
);

export default PenCircle;