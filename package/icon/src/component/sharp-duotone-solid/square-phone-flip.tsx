
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-phone-flip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone-flip?s=sharp-duotone-solid square-phone-flip}
 * @preview ![square-phone-flip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDQ0OCAwIDAgNDQ4TDAgNDgwIDAgMzJ6TTk2IDMxMmwxNiA3MiAxNiAwYzEyMy43IDAgMjI0LTEwMC4zIDIyNC0yMjRsMC0xNi03Mi0xNi00MCA3MmMxNCAxMS4yIDI3LjkgMjIuMyA0MS45IDMzLjVjLTE4LjEgMzQuMi00Ni4yIDYyLjMtODAuNCA4MC40Yy0xMS4yLTE0LTIyLjMtMjcuOS0zMy41LTQxLjlMOTYgMzEyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUyIDE0NGwtNzItMTYtNDAgNzIgNDEuOSAzMy41Yy0xOC4xIDM0LjItNDYuMiA2Mi4zLTgwLjQgODAuNEwxNjggMjcyIDk2IDMxMmwxNiA3MmgxNmMxMjMuNyAwIDIyNC0xMDAuMyAyMjQtMjI0bDAtMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquarePhoneFlip: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM96 312l16 72 16 0c123.7 0 224-100.3 224-224l0-16-72-16-40 72c14 11.2 27.9 22.3 41.9 33.5c-18.1 34.2-46.2 62.3-80.4 80.4c-11.2-14-22.3-27.9-33.5-41.9L96 312z" />
            <path d="M352 144l-72-16-40 72 41.9 33.5c-18.1 34.2-46.2 62.3-80.4 80.4L168 272 96 312l16 72h16c123.7 0 224-100.3 224-224l0-16z" />
    </Icon>
);

export default SquarePhoneFlip;