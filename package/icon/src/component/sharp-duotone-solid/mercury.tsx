
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mercury` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mercury?s=sharp-duotone-solid mercury}
 * @preview ![mercury](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMTIgMjI0YTgwIDgwIDAgMSAwIDE2MCAwIDgwIDgwIDAgMSAwIC0xNjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM5LjMgMGM5LjggMzEuMyAyOSA1OC40IDU0LjIgNzguMUM0Ni43IDEwOS43IDE2IDE2My4zIDE2IDIyNGMwIDg5LjEgNjYuMiAxNjIuNyAxNTIgMTc0LjRsMCAyNS42LTMyIDAtMjQgMCAwIDQ4IDI0IDAgMzIgMCAwIDE2IDAgMjQgNDggMCAwLTI0IDAtMTYgMzIgMCAyNCAwIDAtNDgtMjQgMC0zMiAwIDAtMjUuNmM4NS44LTExLjcgMTUyLTg1LjMgMTUyLTE3NC40YzAtNjAuNy0zMC43LTExNC4zLTc3LjUtMTQ1LjlDMzE1LjcgNTguNCAzMzQuOSAzMS4zIDM0NC43IDBMMjc1LjIgMEMyNTguNiAyOC43IDIyNy41IDQ4IDE5MiA0OHMtNjYuNi0xOS4zLTgzLjItNDhMMzkuMyAwek0zMDQgMjI0QTExMiAxMTIgMCAxIDEgODAgMjI0YTExMiAxMTIgMCAxIDEgMjI0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Mercury: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M112 224a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M39.3 0c9.8 31.3 29 58.4 54.2 78.1C46.7 109.7 16 163.3 16 224c0 89.1 66.2 162.7 152 174.4l0 25.6-32 0-24 0 0 48 24 0 32 0 0 16 0 24 48 0 0-24 0-16 32 0 24 0 0-48-24 0-32 0 0-25.6c85.8-11.7 152-85.3 152-174.4c0-60.7-30.7-114.3-77.5-145.9C315.7 58.4 334.9 31.3 344.7 0L275.2 0C258.6 28.7 227.5 48 192 48s-66.6-19.3-83.2-48L39.3 0zM304 224A112 112 0 1 1 80 224a112 112 0 1 1 224 0z" />
    </Icon>
);

export default Mercury;