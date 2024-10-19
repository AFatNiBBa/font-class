
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-left?s=duotone circle-arrow-left}
 * @preview ![circle-arrow-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTExMiAwYzAtNi4xIDIuMy0xMi4zIDctMTdMMjMxIDEyN2M0LjctNC43IDEwLjgtNyAxNy03czEyLjMgMi4zIDE3IDdjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlsLTcxIDcxTDM3NiAyMzJjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRsLTE4Mi4xIDAgNzEgNzFjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjljLTQuNyA0LjctMTAuOCA3LTE3IDdzLTEyLjMtMi4zLTE3LTdMMTE5IDI3M2MtNC43LTQuNy03LTEwLjgtNy0xN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTExOSAyNzNjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDIzMSAxMjdjOS40LTkuNCAyNC42LTkuNCAzMy45IDBzOS40IDI0LjYgMCAzMy45bC03MSA3MUwzNzYgMjMyYzEzLjMgMCAyNCAxMC43IDI0IDI0cy0xMC43IDI0LTI0IDI0bC0xODIuMSAwIDcxIDcxYzkuNCA5LjQgOS40IDI0LjYgMCAzMy45cy0yNC42IDkuNC0zMy45IDBMMTE5IDI3M3oiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleArrowLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm112 0c0-6.1 2.3-12.3 7-17L231 127c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7c9.4 9.4 9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7L119 273c-4.7-4.7-7-10.8-7-17z" />
            <path d="M119 273c-9.4-9.4-9.4-24.6 0-33.9L231 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L119 273z" />
    </Icon>
);

export default CircleArrowLeft;