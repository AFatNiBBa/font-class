
import { Icon } from "../../index";

/**
 * A component that renders the `gem` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gem?s=sharp-solid gem}
 * @preview ![gem](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyMDhMMjU2IDQ4MCA1MTIgMjA4IDQwMCAzMiAxMTIgMzIgMCAyMDh6TTM3NiA2NEwyOTkuNiAxODkgNDY0IDIwOCAyNTYgMjMyIDQ4IDIwOGwxNjQuNC0xOUwxMzYgNjQgMjU2IDE3Ny43IDM3NiA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Gem: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 208L256 480 512 208 400 32 112 32 0 208zM376 64L299.6 189 464 208 256 232 48 208l164.4-19L136 64 256 177.7 376 64z" />
    </Icon>
);

export default Gem;