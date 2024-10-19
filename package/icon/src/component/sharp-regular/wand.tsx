
import { Icon } from "../../index";

/**
 * A component that renders the `wand` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand?s=sharp-regular wand}
 * @preview ![wand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTEyIDUxMmwzMi0zNS45TDM5Ny43IDE5Mmw1MC4zIDAgMC01Ni4zTDUxMiA2NCA0NDggMCAxNjEuMyAyNTYgOTYgMjU2bDAgNTguM0wzNS45IDM2OCAwIDQwMGwzNCAzNCA0NCA0NCAzNCAzNHptLTItNjkuOUw2OS45IDQwMiA0NDQuNyA2Ny4zIDExMCA0NDIuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Wand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 512l32-35.9L397.7 192l50.3 0 0-56.3L512 64 448 0 161.3 256 96 256l0 58.3L35.9 368 0 400l34 34 44 44 34 34zm-2-69.9L69.9 402 444.7 67.3 110 442.1z" />
    </Icon>
);

export default Wand;