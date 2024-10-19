
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up?s=duotone circle-arrow-up}
 * @preview ![circle-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyMC04YzAtNi4xIDIuMy0xMi4zIDctMTdMMjM5IDExOWM0LjctNC43IDEwLjgtNyAxNy03czEyLjMgMi4zIDE3IDdMMzg1IDIzMWM0LjcgNC43IDcgMTAuOCA3IDE3cy0yLjMgMTIuMy03IDE3Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtNzEtNzFMMjgwIDM3NmMwIDEzLjMtMTAuNyAyNC0yNCAyNHMtMjQtMTAuNy0yNC0yNGwwLTE4Mi4xLTcxIDcxYy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGMtNC43LTQuNy03LTEwLjgtNy0xN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIzOSAxMTljOS40LTkuNCAyNC42LTkuNCAzMy45IDBMMzg1IDIzMWM5LjQgOS40IDkuNCAyNC42IDAgMzMuOXMtMjQuNiA5LjQtMzMuOSAwbC03MS03MUwyODAgMzc2YzAgMTMuMy0xMC43IDI0LTI0IDI0cy0yNC0xMC43LTI0LTI0bDAtMTgyLjEtNzEgNzFjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwcy05LjQtMjQuNiAwLTMzLjlMMjM5IDExOXoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm120-8c0-6.1 2.3-12.3 7-17L239 119c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7L385 231c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17c-9.4 9.4-24.6 9.4-33.9 0l-71-71L280 376c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-182.1-71 71c-9.4 9.4-24.6 9.4-33.9 0c-4.7-4.7-7-10.8-7-17z" />
            <path d="M239 119c9.4-9.4 24.6-9.4 33.9 0L385 231c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71L280 376c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-182.1-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 119z" />
    </Icon>
);

export default CircleArrowUp;