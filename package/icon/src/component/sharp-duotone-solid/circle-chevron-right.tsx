
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-chevron-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-right?s=sharp-duotone-solid circle-chevron-right}
 * @preview ![circle-chevron-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik01MTIgMjU2QTI1NiAyNTYgMCAxIDEgMCAyNTZhMjU2IDI1NiAwIDEgMSA1MTIgMHpNMTkwLjEgMTUyYzUuNyA1LjcgMTEuMyAxMS4zIDE3IDE3YzI5IDI5IDU4IDU4IDg3IDg3Yy0yOSAyOS01OCA1OC04NyA4N2MtNS43IDUuNy0xMS4zIDExLjMtMTcgMTdjMTEuMyAxMS4zIDIyLjYgMjIuNiAzMy45IDMzLjljNS43LTUuNyAxMS4zLTExLjMgMTctMTdjMzQuNy0zNC43IDY5LjMtNjkuMyAxMDQtMTA0YzUuNy01LjcgMTEuMy0xMS4zIDE3LTE3Yy01LjctNS43LTExLjMtMTEuMy0xNy0xN2MtMzQuNy0zNC43LTY5LjMtNjkuMy0xMDQtMTA0Yy01LjctNS43LTExLjMtMTEuMy0xNy0xN0wxOTAuMSAxNTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNjEuOSAyNTZsLTE3IDE3TDI0MSAzNzdsLTE3IDE3TDE5MC4xIDM2MGwxNy0xNyA4Ny04Ny04Ny04Ny0xNy0xN0wyMjQgMTE4LjFsMTcgMTdMMzQ1IDIzOWwxNyAxN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleChevronRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM190.1 152c5.7 5.7 11.3 11.3 17 17c29 29 58 58 87 87c-29 29-58 58-87 87c-5.7 5.7-11.3 11.3-17 17c11.3 11.3 22.6 22.6 33.9 33.9c5.7-5.7 11.3-11.3 17-17c34.7-34.7 69.3-69.3 104-104c5.7-5.7 11.3-11.3 17-17c-5.7-5.7-11.3-11.3-17-17c-34.7-34.7-69.3-69.3-104-104c-5.7-5.7-11.3-11.3-17-17L190.1 152z" />
            <path d="M361.9 256l-17 17L241 377l-17 17L190.1 360l17-17 87-87-87-87-17-17L224 118.1l17 17L345 239l17 17z" />
    </Icon>
);

export default CircleChevronRight;