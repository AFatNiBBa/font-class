
import { Icon } from "../../index";

/**
 * A component that renders the `circle-minus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-minus?s=sharp-light circle-minus}
 * @preview ![circle-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDMyYTIyNCAyMjQgMCAxIDEgMCA0NDggMjI0IDIyNCAwIDEgMSAwLTQ0OHptMCA0ODBBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyek0xNjAgMjQwbC0xNiAwIDAgMzIgMTYgMCAxOTIgMCAxNiAwIDAtMzItMTYgMC0xOTIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 240l-16 0 0 32 16 0 192 0 16 0 0-32-16 0-192 0z" />
    </Icon>
);

export default CircleMinus;