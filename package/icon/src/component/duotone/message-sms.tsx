
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-sms` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-sms?s=duotone message-sms}
 * @preview ![message-sms](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgMjguNyAyOC43IDAgNjQgMEw0NDggMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDI4OGMwIDM1LjMtMjguNyA2NC02NCA2NGwtMTM4LjcgMEwxODUuNiA1MDguOGMtNC44IDMuNi0xMS4zIDQuMi0xNi44IDEuNXMtOC44LTguMi04LjgtMTQuM2wwLTgwLTk2IDBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgNjR6TTk2IDE4MC44YzAgMTIuMyA2LjIgMjMuOCAxNi40IDMwLjdsMjkuNCAxOS42YzEuMyAuOSAyLjIgMi40IDIuMiA0YzAgMi43LTIuMiA0LjgtNC44IDQuOEwxMTIgMjQwYy04LjggMC0xNiA3LjItMTYgMTZzNy4yIDE2IDE2IDE2bDI3LjIgMGMyMC4zIDAgMzYuOC0xNi41IDM2LjgtMzYuOGMwLTEyLjMtNi4yLTIzLjgtMTYuNC0zMC43bC0yOS40LTE5LjZjLTEuMy0uOS0yLjItMi40LTIuMi00YzAtMi43IDIuMi00LjggNC44LTQuOGwxOS4yIDBjOC44IDAgMTYtNy4yIDE2LTE2cy03LjItMTYtMTYtMTZsLTE5LjIgMEMxMTIuNSAxNDQgOTYgMTYwLjUgOTYgMTgwLjh6TTE5MiAxNjBsMCA5NmMwIDguOCA3LjIgMTYgMTYgMTZzMTYtNy4yIDE2LTE2bDAtNDggMTkuMiAyNS42YzMgNCA3LjggNi40IDEyLjggNi40czkuOC0yLjQgMTIuOC02LjRMMjg4IDIwOGwwIDQ4YzAgOC44IDcuMiAxNiAxNiAxNnMxNi03LjIgMTYtMTZsMC05NmMwLTYuOS00LjQtMTMtMTAuOS0xNS4ycy0xMy43IC4xLTE3LjkgNS42TDI1NiAxOTcuM2wtMzUuMi00Ni45Yy00LjEtNS41LTExLjMtNy44LTE3LjktNS42UzE5MiAxNTMuMSAxOTIgMTYwem0xNDQgMjAuOGMwIDEyLjMgNi4yIDIzLjggMTYuNCAzMC43bDI5LjQgMTkuNmMxLjMgLjkgMi4yIDIuNCAyLjIgNGMwIDIuNy0yLjIgNC44LTQuOCA0LjhMMzUyIDI0MGMtOC44IDAtMTYgNy4yLTE2IDE2czcuMiAxNiAxNiAxNmwyNy4yIDBjMjAuMyAwIDM2LjgtMTYuNSAzNi44LTM2LjhjMC0xMi4zLTYuMi0yMy44LTE2LjQtMzAuN2wtMjkuNC0xOS42Yy0xLjMtLjktMi4yLTIuNC0yLjItNGMwLTIuNyAyLjItNC44IDQuOC00LjhsMTkuMiAwYzguOCAwIDE2LTcuMiAxNi0xNnMtNy4yLTE2LTE2LTE2bC0xOS4yIDBjLTIwLjMgMC0zNi44IDE2LjUtMzYuOCAzNi44eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTMyLjggMTQ0bDE5LjIgMGM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNmwtMTkuMiAwYy0yLjcgMC00LjggMi4yLTQuOCA0LjhjMCAxLjYgLjggMy4xIDIuMiA0bDI5LjQgMTkuNmMxMC4yIDYuOCAxNi40IDE4LjMgMTYuNCAzMC43YzAgMjAuMy0xNi41IDM2LjgtMzYuOCAzNi44TDExMiAyNzJjLTguOCAwLTE2LTcuMi0xNi0xNnM3LjItMTYgMTYtMTZsMjcuMiAwYzIuNyAwIDQuOC0yLjIgNC44LTQuOGMwLTEuNi0uOC0zLjEtMi4yLTRsLTI5LjQtMTkuNkMxMDIuMiAyMDQuNyA5NiAxOTMuMiA5NiAxODAuOGMwLTIwLjMgMTYuNS0zNi44IDM2LjgtMzYuOHpNMzM2IDE4MC44YzAtMjAuMyAxNi41LTM2LjggMzYuOC0zNi44bDE5LjIgMGM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNmwtMTkuMiAwYy0yLjcgMC00LjggMi4yLTQuOCA0LjhjMCAxLjYgLjggMy4xIDIuMiA0bDI5LjQgMTkuNmMxMC4yIDYuOCAxNi40IDE4LjMgMTYuNCAzMC43YzAgMjAuMy0xNi41IDM2LjgtMzYuOCAzNi44TDM1MiAyNzJjLTguOCAwLTE2LTcuMi0xNi0xNnM3LjItMTYgMTYtMTZsMjcuMiAwYzIuNyAwIDQuOC0yLjIgNC44LTQuOGMwLTEuNi0uOC0zLjEtMi4yLTRsLTI5LjQtMTkuNmMtMTAuMi02LjgtMTYuNC0xOC4zLTE2LjQtMzAuN3ptLTEzMy4xLTM2YzYuNS0yLjIgMTMuNyAuMSAxNy45IDUuNkwyNTYgMTk3LjNsMzUuMi00Ni45YzQuMS01LjUgMTEuMy03LjggMTcuOS01LjZzMTAuOSA4LjMgMTAuOSAxNS4ybDAgOTZjMCA4LjgtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZsMC00OC0xOS4yIDI1LjZjLTMgNC03LjggNi40LTEyLjggNi40cy05LjgtMi40LTEyLjgtNi40TDIyNCAyMDhsMCA0OGMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNmwwLTk2YzAtNi45IDQuNC0xMyAxMC45LTE1LjJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const MessageSms: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64L0 64zM96 180.8c0 12.3 6.2 23.8 16.4 30.7l29.4 19.6c1.3 .9 2.2 2.4 2.2 4c0 2.7-2.2 4.8-4.8 4.8L112 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l27.2 0c20.3 0 36.8-16.5 36.8-36.8c0-12.3-6.2-23.8-16.4-30.7l-29.4-19.6c-1.3-.9-2.2-2.4-2.2-4c0-2.7 2.2-4.8 4.8-4.8l19.2 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-19.2 0C112.5 144 96 160.5 96 180.8zM192 160l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 19.2 25.6c3 4 7.8 6.4 12.8 6.4s9.8-2.4 12.8-6.4L288 208l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-6.9-4.4-13-10.9-15.2s-13.7 .1-17.9 5.6L256 197.3l-35.2-46.9c-4.1-5.5-11.3-7.8-17.9-5.6S192 153.1 192 160zm144 20.8c0 12.3 6.2 23.8 16.4 30.7l29.4 19.6c1.3 .9 2.2 2.4 2.2 4c0 2.7-2.2 4.8-4.8 4.8L352 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l27.2 0c20.3 0 36.8-16.5 36.8-36.8c0-12.3-6.2-23.8-16.4-30.7l-29.4-19.6c-1.3-.9-2.2-2.4-2.2-4c0-2.7 2.2-4.8 4.8-4.8l19.2 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-19.2 0c-20.3 0-36.8 16.5-36.8 36.8z" />
            <path d="M132.8 144l19.2 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-19.2 0c-2.7 0-4.8 2.2-4.8 4.8c0 1.6 .8 3.1 2.2 4l29.4 19.6c10.2 6.8 16.4 18.3 16.4 30.7c0 20.3-16.5 36.8-36.8 36.8L112 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l27.2 0c2.7 0 4.8-2.2 4.8-4.8c0-1.6-.8-3.1-2.2-4l-29.4-19.6C102.2 204.7 96 193.2 96 180.8c0-20.3 16.5-36.8 36.8-36.8zM336 180.8c0-20.3 16.5-36.8 36.8-36.8l19.2 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-19.2 0c-2.7 0-4.8 2.2-4.8 4.8c0 1.6 .8 3.1 2.2 4l29.4 19.6c10.2 6.8 16.4 18.3 16.4 30.7c0 20.3-16.5 36.8-36.8 36.8L352 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l27.2 0c2.7 0 4.8-2.2 4.8-4.8c0-1.6-.8-3.1-2.2-4l-29.4-19.6c-10.2-6.8-16.4-18.3-16.4-30.7zm-133.1-36c6.5-2.2 13.7 .1 17.9 5.6L256 197.3l35.2-46.9c4.1-5.5 11.3-7.8 17.9-5.6s10.9 8.3 10.9 15.2l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-19.2 25.6c-3 4-7.8 6.4-12.8 6.4s-9.8-2.4-12.8-6.4L224 208l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-6.9 4.4-13 10.9-15.2z" />
    </Icon>
);

export default MessageSms;