
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up?s=sharp-light circle-arrow-up}
 * @preview ![circle-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDMyYTIyNCAyMjQgMCAxIDEgMCA0NDggMjI0IDIyNCAwIDEgMSAwLTQ0OHptMCA0ODBBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyem0xMS4zLTM3OS4zTDI1NiAxMjEuNGwtMTEuMyAxMS4zLTk2IDk2TDEzNy40IDI0MCAxNjAgMjYyLjZsMTEuMy0xMS4zTDI0MCAxODIuNiAyNDAgMzY4bDAgMTYgMzIgMCAwLTE2IDAtMTg1LjQgNjguNyA2OC43TDM1MiAyNjIuNiAzNzQuNiAyNDBsLTExLjMtMTEuMy05Ni05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm11.3-379.3L256 121.4l-11.3 11.3-96 96L137.4 240 160 262.6l11.3-11.3L240 182.6 240 368l0 16 32 0 0-16 0-185.4 68.7 68.7L352 262.6 374.6 240l-11.3-11.3-96-96z" />
    </Icon>
);

export default CircleArrowUp;