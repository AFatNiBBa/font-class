
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-caret-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-down?s=duotone circle-caret-down}
 * @preview ![circle-caret-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOC0yNGMwLTMuMiAuNy02LjUgMi05LjZjMy44LTguNyAxMi41LTE0LjQgMjItMTQuNGwyMDggMGM5LjUgMCAxOC4yIDUuNyAyMiAxNC40YzEuMyAzLjEgMiA2LjMgMiA5LjZjMCA1LjktMi4yIDExLjgtNi40IDE2LjNsLTEwNCAxMTJjLTQuNSA0LjktMTAuOSA3LjctMTcuNiA3LjdzLTEzLTIuOC0xNy42LTcuN2wtMTA0LTExMmMtNC4yLTQuNS02LjQtMTAuNC02LjQtMTYuM3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI3My42IDM2MC4zYy00LjUgNC45LTEwLjkgNy43LTE3LjYgNy43cy0xMy0yLjgtMTcuNi03LjdsLTEwNC0xMTJjLTYuNS03LTguMi0xNy4yLTQuNC0yNS45czEyLjUtMTQuNCAyMi0xNC40bDIwOCAwYzkuNSAwIDE4LjIgNS43IDIyIDE0LjRzMi4xIDE4LjktNC40IDI1LjlsLTEwNCAxMTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleCaretDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-24c0-3.2 .7-6.5 2-9.6c3.8-8.7 12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4c1.3 3.1 2 6.3 2 9.6c0 5.9-2.2 11.8-6.4 16.3l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7s-13-2.8-17.6-7.7l-104-112c-4.2-4.5-6.4-10.4-6.4-16.3z" />
            <path d="M273.6 360.3c-4.5 4.9-10.9 7.7-17.6 7.7s-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112z" />
    </Icon>
);

export default CircleCaretDown;