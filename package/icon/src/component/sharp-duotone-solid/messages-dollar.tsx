
import { Icon, generic } from "../../index";

/**
 * A component that renders the `messages-dollar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/messages-dollar?s=sharp-duotone-solid messages-dollar}
 * @preview ![messages-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNDE2IDBsMCAzMjAtMjEzLjMgMEw5NiAzODRsMC02NEwwIDMyMCAwIDB6TTEzNC43IDIzMi43bDE5IDYuM2MxLjIgLjQgMi43IC45IDQuNCAxLjVjNy45IDIuNyAyMC4zIDcgMjkuOSA5LjFsMCA2LjQgMCAyMCA0MCAwIDAtMjAgMC01LjVjNS40LTEgMTAuNi0yLjUgMTUuNC00LjZjMTUuNy02LjcgMjguNC0xOS43IDMxLjYtMzguN2MxLjgtMTAuNCAxLTIwLjMtMy0yOS40Yy0zLjktOS0xMC4yLTE1LjYtMTYuOS0yMC41Yy0xMi4yLTguOC0yOC4zLTEzLjctNDAuNC0xNy40bC0uOC0uMmMtMTQuMi00LjMtMjMuOC03LjMtMjkuOS0xMS40Yy0yLjYtMS44LTMuNC0zLTMuNi0zLjVjLS4yLS4zLS43LTEuNi0uMS01Yy4zLTEuOSAxLjktNS4yIDguMi04LjFjNi40LTIuOSAxNi40LTQuNSAyOC42LTIuNmM0LjMgLjcgMTcuOSAzLjMgMjEuNyA0LjNsMTkuMyA1LjEgMTAuMy0zOC43LTE5LjMtNS4xYy00LjQtMS4yLTE0LjUtMy4yLTIxLjEtNC40bDAtNi4zIDAtMjAtNDAgMCAwIDIwIDAgNmMtNS42IDEuMi0xMSAyLjktMTYgNS4xYy0xNSA2LjgtMjcuOSAxOS40LTMxLjEgMzcuN2MtMS44IDEwLjItLjggMjAgMy40IDI5YzQuMiA4LjggMTAuNyAxNSAxNy4zIDE5LjVjMTEuNiA3LjkgMjYuOSAxMi41IDM4LjYgMTZsMi4yIC43YzEzLjkgNC4yIDIzLjQgNy40IDI5LjMgMTEuN2MyLjUgMS44IDMuNCAzLjIgMy43IDRjLjMgLjggLjkgMi42IC4yIDYuN2MtLjYgMy41LTIuNSA2LjQtOCA4LjhjLTYuMSAyLjYtMTYgMy45LTI4LjggMS45Yy02LTEtMTYuNy00LjYtMjYuMi03LjljLTIuMi0uOC00LjQtMS41LTYuNC0yLjFsLTE5LTYuMy0xMi42IDM4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI4IDY0bDAgNi4zYzYuNiAxLjIgMTYuNyAzLjIgMjEuMSA0LjRsMTkuMyA1LjEtMTAuMyAzOC43LTE5LjMtNS4xYy0zLjgtMS0xNy40LTMuNy0yMS43LTQuM2MtMTIuMi0xLjktMjIuMi0uMy0yOC42IDIuNmMtNi4zIDIuOS03LjkgNi4yLTguMiA4LjFjLS42IDMuNCAwIDQuNyAuMSA1Yy4zIC41IDEgMS44IDMuNiAzLjVjNi4xIDQuMiAxNS43IDcuMiAyOS45IDExLjRsLjggLjJzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBjMTIuMSAzLjcgMjguMyA4LjUgNDAuNCAxNy40YzYuNyA0LjkgMTMgMTEuNCAxNi45IDIwLjVjNCA5LjEgNC44IDE5LjEgMyAyOS40Yy0zLjMgMTktMTUuOSAzMi0zMS42IDM4LjdjLTQuOSAyLjEtMTAuMSAzLjYtMTUuNCA0LjZsMCA1LjUgMCAyMC00MCAwIDAtMjAgMC02LjRjLTkuNS0yLjItMjItNi40LTI5LjktOS4xYzAgMCAwIDAgMCAwYy0xLjctLjYtMy4yLTEuMS00LjQtMS41bC0xOS02LjMgMTIuNi0zOCAxOSA2LjNjMiAuNyA0LjIgMS40IDYuNCAyLjFjMCAwIDAgMCAwIDBjOS41IDMuMiAyMC4yIDYuOSAyNi4yIDcuOWMxMi44IDIgMjIuNyAuNyAyOC44LTEuOWM1LjUtMi4zIDcuNC01LjMgOC04LjhjLjctNCAuMS01LjktLjItNi43Yy0uNC0uOS0xLjMtMi4yLTMuNy00Yy01LjktNC4zLTE1LjMtNy41LTI5LjMtMTEuN2wtMi4yLS43Yy0xMS43LTMuNS0yNy04LjEtMzguNi0xNmMtNi42LTQuNS0xMy4yLTEwLjctMTcuMy0xOS41Yy00LjItOS01LjItMTguOC0zLjQtMjljMy4yLTE4LjMgMTYuMi0zMC45IDMxLjEtMzcuN2M1LTIuMyAxMC40LTQgMTYtNS4xbDAtNiAwLTIwIDQwIDAgMCAyMHptMjggMzg0bDAtOTYgMTkyIDAgMC0yMjQgMTkyIDAgMCAzMjAtOTYgMCAwIDY0TDQzNy4zIDQ0OCAyNTYgNDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MessagesDollar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L416 0l0 320-213.3 0L96 384l0-64L0 320 0 0zM134.7 232.7l19 6.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 7 29.9 9.1l0 6.4 0 20 40 0 0-20 0-5.5c5.4-1 10.6-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3l19.3 5.1 10.3-38.7-19.3-5.1c-4.4-1.2-14.5-3.2-21.1-4.4l0-6.3 0-20-40 0 0 20 0 6c-5.6 1.2-11 2.9-16 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.7 4c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9c-2.2-.8-4.4-1.5-6.4-2.1l-19-6.3-12.6 38z" />
            <path d="M228 64l0 6.3c6.6 1.2 16.7 3.2 21.1 4.4l19.3 5.1-10.3 38.7-19.3-5.1c-3.8-1-17.4-3.7-21.7-4.3c-12.2-1.9-22.2-.3-28.6 2.6c-6.3 2.9-7.9 6.2-8.2 8.1c-.6 3.4 0 4.7 .1 5c.3 .5 1 1.8 3.6 3.5c6.1 4.2 15.7 7.2 29.9 11.4l.8 .2s0 0 0 0s0 0 0 0s0 0 0 0c12.1 3.7 28.3 8.5 40.4 17.4c6.7 4.9 13 11.4 16.9 20.5c4 9.1 4.8 19.1 3 29.4c-3.3 19-15.9 32-31.6 38.7c-4.9 2.1-10.1 3.6-15.4 4.6l0 5.5 0 20-40 0 0-20 0-6.4c-9.5-2.2-22-6.4-29.9-9.1c0 0 0 0 0 0c-1.7-.6-3.2-1.1-4.4-1.5l-19-6.3 12.6-38 19 6.3c2 .7 4.2 1.4 6.4 2.1c0 0 0 0 0 0c9.5 3.2 20.2 6.9 26.2 7.9c12.8 2 22.7 .7 28.8-1.9c5.5-2.3 7.4-5.3 8-8.8c.7-4 .1-5.9-.2-6.7c-.4-.9-1.3-2.2-3.7-4c-5.9-4.3-15.3-7.5-29.3-11.7l-2.2-.7c-11.7-3.5-27-8.1-38.6-16c-6.6-4.5-13.2-10.7-17.3-19.5c-4.2-9-5.2-18.8-3.4-29c3.2-18.3 16.2-30.9 31.1-37.7c5-2.3 10.4-4 16-5.1l0-6 0-20 40 0 0 20zm28 384l0-96 192 0 0-224 192 0 0 320-96 0 0 64L437.3 448 256 448z" />
    </Icon>
);

export default MessagesDollar;