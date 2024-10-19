
import { Icon } from "../../index";

/**
 * A component that renders the `joystick` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joystick?s=sharp-solid joystick}
 * @preview ![joystick](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzM2IDExMmMwIDUwLjctMzMuNyA5My42LTgwIDEwNy40TDI1NiAzMjBsLTY0IDAgMC0xMDAuNmMtNDYuMy0xMy44LTgwLTU2LjYtODAtMTA3LjRDMTEyIDUwLjEgMTYyLjEgMCAyMjQgMHMxMTIgNTAuMSAxMTIgMTEyek0yMDAgOTZhMjQgMjQgMCAxIDAgMC00OCAyNCAyNCAwIDEgMCAwIDQ4ek02NCAzMjBsNjQgMCAwIDMyIDMyMCAwIDAgMTYwTDAgNTEyIDAgMzUybDY0IDAgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Joystick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M336 112c0 50.7-33.7 93.6-80 107.4L256 320l-64 0 0-100.6c-46.3-13.8-80-56.6-80-107.4C112 50.1 162.1 0 224 0s112 50.1 112 112zM200 96a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM64 320l64 0 0 32 320 0 0 160L0 512 0 352l64 0 0-32z" />
    </Icon>
);

export default Joystick;