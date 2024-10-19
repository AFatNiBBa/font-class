
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bugs` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bugs?s=duotone bugs}
 * @preview ![bugs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMzc5LjVjMCA3LjEgMy4yIDE0LjIgOS4yIDE4LjljMTAuNCA4LjIgMjUuNSA2LjQgMzMuNy00LjFsMjUtMzEuOCAxOC4yIDUuMmMtLjUgMjIuNiAxMSA0NC43IDMyIDU2LjhzNDUuOSAxMSA2NS4yLS43bDEzLjYgMTMuMi0xNS4xIDM3LjVjLTQuOSAxMi4zIDEgMjYuMyAxMy4zIDMxLjJzMjYuMy0xIDMxLjItMTMuM0w1MDMuNSA0NDBjMy42LTkuMSAxLjQtMTkuNC01LjYtMjYuMmwtMjgtMjcuMSAxMS42LTIwLjEgMjcuNyAxNmM5LjkgNS43IDIyLjUgMy43IDMwLTQuOUw1NjYuMiAzNDdjOC44LTEwIDcuOC0yNS4xLTIuMi0zMy45cy0yNS4xLTcuOC0zMy45IDIuMmwtMTMuOSAxNS45LTE0LjctOC41YzEuNy0xMi40LS4yLTI1LTUuNS0zNi4ybDY1LjYtNDdjMTAuOC03LjcgMTMuMy0yMi43IDUuNi0zMy41cy0yMi43LTEzLjMtMzMuNS01LjZsLTUxLjQgMzYuOCA2LjItNjIuOWMxLjMtMTMuMi04LjQtMjQuOS0yMS42LTI2LjJzLTI0LjkgOC40LTI2LjIgMjEuNkw0MzIuOCAyNTBjLTEyLjMgMS0yNC4yIDUuNi0zNC4xIDEzLjNMMzg0IDI1NC44bDYuOC0yMGM0LjItMTIuNi0yLjUtMjYuMi0xNS0zMC40cy0yNi4yIDIuNS0zMC40IDE1bC0xMy4xIDM4LjZjLTMuNyAxMC44IC44IDIyLjggMTAuNyAyOC41bDI3LjcgMTZMMzU5IDMyMi43IDMyMS41IDMxMmMtOS40LTIuNy0xOS41IC42LTI1LjUgOC4zbC0zNC45IDQ0LjVjLTMuNCA0LjQtNS4xIDkuNi01LjEgMTQuOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2NC41IDEwNy40bDMzLjQtNzMuNWM1LjUtMTIuMSAuMS0yNi4zLTExLjktMzEuOHMtMjYuMy0uMS0zMS44IDExLjlMMTI4IDcxLjcgMTAxLjkgMTQuMUM5Ni40IDIgODIuMS0zLjMgNzAuMSAyLjFTNTIuNyAyMS45IDU4LjEgMzMuOWwzMy40IDczLjVjLTEwLjIgNy4xLTE4LjIgMTctMjIuOSAyOC42bC0xNyAwLTQuMS0yMC43Yy0yLjYtMTMtMTUuMi0yMS40LTI4LjItMTguOFMtMi4xIDExMS43IC41IDEyNC43bDggNDBDMTAuNyAxNzUuOSAyMC42IDE4NCAzMiAxODRsMzIgMCAwIDIzLjMtMzcuOCA5LjVjLTkuNSAyLjQtMTYuNiAxMC4yLTE3LjkgMTkuOWwtOCA1NmMtMS45IDEzLjEgNy4yIDI1LjMgMjAuNCAyNy4yczI1LjMtNy4yIDI3LjItMjAuNGw1LjctNDAgMTguNC00LjZDODIuOCAyNzQuNiAxMDMuOCAyODggMTI4IDI4OHM0NS4zLTEzLjQgNTYuMS0zMy4ybDE4LjQgNC42IDUuNyA0MGMxLjkgMTMuMSAxNCAyMi4yIDI3LjIgMjAuNHMyMi4yLTE0IDIwLjQtMjcuMmwtOC01NmMtMS40LTkuNy04LjUtMTcuNS0xNy45LTE5LjlMMTkyIDIwNy4zbDAtMjMuMyAzMiAwYzExLjQgMCAyMS4zLTguMSAyMy41LTE5LjNsOC00MGMyLjYtMTMtNS44LTI1LjYtMTguOC0yOC4ycy0yNS42IDUuOC0yOC4yIDE4LjhMMjA0LjMgMTM2bC0xNyAwYy00LjctMTEuNi0xMi43LTIxLjUtMjIuOS0yOC42eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Bugs: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M256 379.5c0 7.1 3.2 14.2 9.2 18.9c10.4 8.2 25.5 6.4 33.7-4.1l25-31.8 18.2 5.2c-.5 22.6 11 44.7 32 56.8s45.9 11 65.2-.7l13.6 13.2-15.1 37.5c-4.9 12.3 1 26.3 13.3 31.2s26.3-1 31.2-13.3L503.5 440c3.6-9.1 1.4-19.4-5.6-26.2l-28-27.1 11.6-20.1 27.7 16c9.9 5.7 22.5 3.7 30-4.9L566.2 347c8.8-10 7.8-25.1-2.2-33.9s-25.1-7.8-33.9 2.2l-13.9 15.9-14.7-8.5c1.7-12.4-.2-25-5.5-36.2l65.6-47c10.8-7.7 13.3-22.7 5.6-33.5s-22.7-13.3-33.5-5.6l-51.4 36.8 6.2-62.9c1.3-13.2-8.4-24.9-21.6-26.2s-24.9 8.4-26.2 21.6L432.8 250c-12.3 1-24.2 5.6-34.1 13.3L384 254.8l6.8-20c4.2-12.6-2.5-26.2-15-30.4s-26.2 2.5-30.4 15l-13.1 38.6c-3.7 10.8 .8 22.8 10.7 28.5l27.7 16L359 322.7 321.5 312c-9.4-2.7-19.5 .6-25.5 8.3l-34.9 44.5c-3.4 4.4-5.1 9.6-5.1 14.8z" />
            <path d="M164.5 107.4l33.4-73.5c5.5-12.1 .1-26.3-11.9-31.8s-26.3-.1-31.8 11.9L128 71.7 101.9 14.1C96.4 2 82.1-3.3 70.1 2.1S52.7 21.9 58.1 33.9l33.4 73.5c-10.2 7.1-18.2 17-22.9 28.6l-17 0-4.1-20.7c-2.6-13-15.2-21.4-28.2-18.8S-2.1 111.7 .5 124.7l8 40C10.7 175.9 20.6 184 32 184l32 0 0 23.3-37.8 9.5c-9.5 2.4-16.6 10.2-17.9 19.9l-8 56c-1.9 13.1 7.2 25.3 20.4 27.2s25.3-7.2 27.2-20.4l5.7-40 18.4-4.6C82.8 274.6 103.8 288 128 288s45.3-13.4 56.1-33.2l18.4 4.6 5.7 40c1.9 13.1 14 22.2 27.2 20.4s22.2-14 20.4-27.2l-8-56c-1.4-9.7-8.5-17.5-17.9-19.9L192 207.3l0-23.3 32 0c11.4 0 21.3-8.1 23.5-19.3l8-40c2.6-13-5.8-25.6-18.8-28.2s-25.6 5.8-28.2 18.8L204.3 136l-17 0c-4.7-11.6-12.7-21.5-22.9-28.6z" />
    </Icon>
);

export default Bugs;