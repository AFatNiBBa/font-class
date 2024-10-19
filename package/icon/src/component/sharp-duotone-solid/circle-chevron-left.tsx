
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-chevron-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-left?s=sharp-duotone-solid circle-chevron-left}
 * @preview ![circle-chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE1MC4xIDBjNS43LTUuNyAxMS4zLTExLjMgMTctMTdjMzQuNy0zNC43IDY5LjMtNjkuMyAxMDQtMTA0YzUuNy01LjcgMTEuMy0xMS4zIDE3LTE3YzExLjMgMTEuMyAyMi42IDIyLjYgMzMuOSAzMy45Yy01LjcgNS43LTExLjMgMTEuMy0xNyAxN2wtODcgODdjMjkgMjkgNTggNTggODcgODdjNS43IDUuNyAxMS4zIDExLjMgMTcgMTdjLTExLjMgMTEuMy0yMi42IDIyLjYtMzMuOSAzMy45bC0xNy0xN2MtMzQuNy0zNC43LTY5LjMtNjkuMy0xMDQtMTA0bC0xNy0xN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE1MC4xIDI1NmwxNy0xN0wyNzEgMTM1bDE3LTE3TDMyMS45IDE1MmwtMTcgMTctODcgODcgODcgODcgMTcgMTdMMjg4IDM5My45bC0xNy0xN0wxNjcgMjczbC0xNy0xN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleChevronLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm150.1 0c5.7-5.7 11.3-11.3 17-17c34.7-34.7 69.3-69.3 104-104c5.7-5.7 11.3-11.3 17-17c11.3 11.3 22.6 22.6 33.9 33.9c-5.7 5.7-11.3 11.3-17 17l-87 87c29 29 58 58 87 87c5.7 5.7 11.3 11.3 17 17c-11.3 11.3-22.6 22.6-33.9 33.9l-17-17c-34.7-34.7-69.3-69.3-104-104l-17-17z" />
            <path d="M150.1 256l17-17L271 135l17-17L321.9 152l-17 17-87 87 87 87 17 17L288 393.9l-17-17L167 273l-17-17z" />
    </Icon>
);

export default CircleChevronLeft;