
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down?s=sharp-duotone-solid circle-arrow-down}
 * @preview ![circle-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTExMC4xIDhjMTEuMy0xMS4zIDIyLjYtMjIuNiAzMy45LTMzLjlsMTcgMTcgNzEgNzFjMC02MC43IDAtMTIxLjQgMC0xODIuMWMwLTggMC0xNiAwLTI0YzE2IDAgMzIgMCA0OCAwYzAgOCAwIDE2IDAgMjRjMCA2MC43IDAgMTIxLjQgMCAxODIuMWMyMy43LTIzLjcgNDcuMy00Ny4zIDcxLTcxYzUuNy01LjcgMTEuMy0xMS4zIDE3LTE3YzExLjMgMTEuMyAyMi42IDIyLjYgMzMuOSAzMy45Yy01LjcgNS43LTExLjMgMTEuMy0xNyAxN2MtMzcuMyAzNy4zLTc0LjcgNzQuNy0xMTIgMTEyYy01LjcgNS43LTExLjMgMTEuMy0xNyAxN2MtNS43LTUuNy0xMS4zLTExLjMtMTctMTdjLTM3LjMtMzcuMy03NC43LTc0LjctMTEyLTExMmMtNS43LTUuNy0xMS4zLTExLjMtMTctMTd6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgNDA5LjlsMTctMTdMMzg1IDI4MWwxNy0xN0wzNjggMjMwLjFsLTE3IDE3LTcxIDcxTDI4MCAxMzZsMC0yNC00OCAwIDAgMjQgMCAxODIuMS03MS03MS0xNy0xN0wxMTAuMSAyNjRsMTcgMTdMMjM5IDM5M2wxNyAxN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm110.1 8c11.3-11.3 22.6-22.6 33.9-33.9l17 17 71 71c0-60.7 0-121.4 0-182.1c0-8 0-16 0-24c16 0 32 0 48 0c0 8 0 16 0 24c0 60.7 0 121.4 0 182.1c23.7-23.7 47.3-47.3 71-71c5.7-5.7 11.3-11.3 17-17c11.3 11.3 22.6 22.6 33.9 33.9c-5.7 5.7-11.3 11.3-17 17c-37.3 37.3-74.7 74.7-112 112c-5.7 5.7-11.3 11.3-17 17c-5.7-5.7-11.3-11.3-17-17c-37.3-37.3-74.7-74.7-112-112c-5.7-5.7-11.3-11.3-17-17z" />
            <path d="M256 409.9l17-17L385 281l17-17L368 230.1l-17 17-71 71L280 136l0-24-48 0 0 24 0 182.1-71-71-17-17L110.1 264l17 17L239 393l17 17z" />
    </Icon>
);

export default CircleArrowDown;