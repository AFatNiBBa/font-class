
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dreidel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dreidel?s=sharp-duotone-solid dreidel}
 * @preview ![dreidel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04OS40IDE1My40TDMyNi42IDM5MC42YzI2LjctMjYuNyA1My4zLTUzLjMgODAtODBMNDI5LjMgMjg4bC0yMi42LTIyLjZMMzMzLjMgMTkybDg5LjQtODkuNEw0NDUuMyA4MCA0MDAgMzQuNyAzNzcuNCA1Ny40IDI4OCAxNDYuNyAyMTQuNiA3My40IDE5MiA1MC43IDE2OS40IDczLjRjLTI2LjcgMjYuNy01My4zIDUzLjMtODAgODB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMjYuNiAzOTAuNkw4OS40IDE1My40bC04MCA4MEwwIDI0Mi43IDAgMjU2IDAgNDQ4bDAgMzIgMzIgMCAxOTIgMCAxMy4zIDAgOS40LTkuNCA4MC04MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Dreidel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M89.4 153.4L326.6 390.6c26.7-26.7 53.3-53.3 80-80L429.3 288l-22.6-22.6L333.3 192l89.4-89.4L445.3 80 400 34.7 377.4 57.4 288 146.7 214.6 73.4 192 50.7 169.4 73.4c-26.7 26.7-53.3 53.3-80 80z" />
            <path d="M326.6 390.6L89.4 153.4l-80 80L0 242.7 0 256 0 448l0 32 32 0 192 0 13.3 0 9.4-9.4 80-80z" />
    </Icon>
);

export default Dreidel;