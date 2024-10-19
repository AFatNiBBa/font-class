
import { Icon } from "../../index";

/**
 * A component that renders the `circle-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-minus?s=sharp-thin circle-minus}
 * @preview ![circle-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDE2YTI0MCAyNDAgMCAxIDEgMCA0ODAgMjQwIDI0MCAwIDEgMSAwLTQ4MHptMCA0OTZBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyek0xNTIgMjY0bDIwOCAwIDAtMTYtMjA4IDAgMCAxNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM152 264l208 0 0-16-208 0 0 16z" />
    </Icon>
);

export default CircleMinus;