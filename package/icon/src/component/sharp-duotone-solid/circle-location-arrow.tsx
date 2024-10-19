
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-location-arrow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-location-arrow?s=sharp-duotone-solid circle-location-arrow}
 * @preview ![circle-location-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTg2LjMtMTEuM2M5NC4zLTMzLjkgMTg4LjYtNjcuOSAyODIuOC0xMDEuOGMtMzMuOSA5NC4zLTY3LjkgMTg4LjYtMTAxLjggMjgyLjhMMjMzLjQgMjc4LjYgODYuMyAyNDQuN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTg2LjMgMjQ0LjdsMTQ3LjEgMzMuOSAzMy45IDE0Ny4xTDM2OS4xIDE0Mi45IDg2LjMgMjQ0Ljd6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleLocationArrow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm86.3-11.3c94.3-33.9 188.6-67.9 282.8-101.8c-33.9 94.3-67.9 188.6-101.8 282.8L233.4 278.6 86.3 244.7z" />
            <path d="M86.3 244.7l147.1 33.9 33.9 147.1L369.1 142.9 86.3 244.7z" />
    </Icon>
);

export default CircleLocationArrow;