
import { Icon } from "../../index";

/**
 * A component that renders the `user-secret` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-secret?s=sharp-light user-secret}
 * @preview ![user-secret](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTg4LjcgMTQuM0wyMjQgMzJsMzUuMy0xNy43TDI4OCAwbDEzIDI5LjMgMzUuNiA4MC4yYzQtMS40IDcuOC0yLjkgMTEuNC00LjNjMTQuMi01LjcgMjUtMTEuMyAzMi4yLTE1LjVjMy42LTIuMSA2LjItMy44IDcuOS00LjljLjktLjYgMS41LTEgMS44LTEuM2wuNC0uM2MwIDAgMCAwIDAgMEw0MDAgOTZjOS42IDEyLjggOS42IDEyLjggOS42IDEyLjhzMCAwIDAgMHMwIDAgMCAwbC0uMSAuMS0uMiAuMi0uNyAuNWMtLjYgLjQtMS41IDEtMi42IDEuOGMtMi4yIDEuNS01LjQgMy41LTkuNiA2Yy04LjQgNC44LTIwLjUgMTEuMi0zNi4zIDE3LjVDMzI4LjMgMTQ3LjUgMjgyLjMgMTYwIDIyNCAxNjBzLTEwNC4zLTEyLjUtMTM1LjktMjUuMWMtMTUuOC02LjMtMjgtMTIuNy0zNi4zLTE3LjVjLTQuMi0yLjQtNy40LTQuNS05LjYtNmMtMS4xLS43LTItMS4zLTIuNi0xLjhsLS43LS41LS4yLS4yLS4xLS4xYzAgMCAwIDAgMCAwczAgMCAwIDBMNDggOTZjOS42LTEyLjggOS42LTEyLjggOS42LTEyLjhjMCAwIDAgMCAwIDBsLjQgLjNjLjQgLjMgMSAuNyAxLjggMS4zYzEuNyAxLjEgNC40IDIuOCA3LjkgNC45YzcuMiA0LjIgMTggOS44IDMyLjIgMTUuNWMzLjYgMS40IDcuNCAyLjkgMTEuNCA0LjNMMTQ3IDI5LjMgMTYwIDBsMjguNyAxNC4zem04My43IDI5LjNsLTM0IDE3TDIyNCA2Ny44bC0xNC4zLTcuMi0zNC0xNy0zMy4zIDc1YzIzIDUuNSA1MC4zIDkuNCA4MS43IDkuNHM1OC43LTMuOSA4MS43LTkuNGwtMzMuMy03NXpNMTAwIDIyNGMtMi42LTEwLjItNC0yMS00LTMyYzAtNi43IC41LTEzLjMgMS41LTE5LjdjOS42IDMuMSAxOS45IDYuMSAzMS4xIDguOGMtLjQgMy42LS42IDcuMi0uNiAxMC45YzAgNTMgNDMgOTYgOTYgOTZzOTYtNDMgOTYtOTZjMC00LS4yLTcuOS0uNy0xMS43YzExLjEtMi44IDIxLjUtNS44IDMxLTljMS4xIDYuOCAxLjcgMTMuNyAxLjcgMjAuOGMwIDExLTEuNCAyMS44LTQgMzJsNDkuNSAwIDM0LjYgMC0xMy4xIDMyLTE5LjYgNDgtMTMuMSAzMiAyOS44IDAgMS41IDggMjQuNyAxMzYgNS44IDMyLTMyLjUgMC0zODMgMEwwIDUxMmw1LjgtMzJMMzAuNSAzNDRsMS41LTggMjkuOCAwTDQ4LjcgMzA0IDI5LjEgMjU2IDE2IDIyNGwzNC42IDAgNDkuNSAwem0yMzQuOCAzMmMtMjIuMSAzOC4zLTYzLjUgNjQtMTEwLjkgNjRzLTg4LjctMjUuNy0xMTAuOS02NGwtNDkuNSAwIDI3LjggNjcuOSAxOCA0NC4xLTQ3LjcgMC0zLjEgMEwzOC4zIDQ4MGwxMTYuNCAwLTI2LjItOTEuNiAzMC44LTguOCAyMC4zIDcwLjlMMjAxLjggMzg0bC05LjggMC0xNiAwIDAtMzIgMTYgMCAzMiAwIDMyIDAgMTYgMCAwIDMyLTE2IDAtOS44IDAgMjIuMiA2Ni41IDIwLjMtNzAuOSAzMC44IDguOEwyOTMuMiA0ODBsMTE2LjQgMEwzODkuMyAzNjhsLTMuMSAwLTQ3LjcgMCAxOC00NC4xTDM4NC4zIDI1NmwtNDkuNSAwek0yMjQgNDE4LjZMMjAzLjUgNDgwbDQwLjkgMEwyMjQgNDE4LjZ6TTE0NCAxODQuNGMxMC4xIDIgMjAuOCAzLjYgMzIgNC45bDAgOC43YzAgNyA1LjcgMTIuNyAxMi43IDEyLjdjNS41IDAgMTAuMy0zLjUgMTItOC43bDMuNS0xMC41YzYuNSAuMyAxMy4xIC41IDE5LjggLjVjNi43IDAgMTMuMy0uMiAxOS44LS41bDMuNSAxMC41YzEuNyA1LjIgNi42IDguNyAxMiA4LjdjNyAwIDEyLjctNS43IDEyLjctMTIuN2wwLTljMTEuMi0xLjQgMjEuOC0zLjIgMzItNS4zbDAgMTQuM2MwIDI0LjctMjAgNDQuNy00NC43IDQ0LjdjLTE0LjEgMC0yNy02LjYtMzUuMy0xNy4zYy04LjMgMTAuNy0yMS4yIDE3LjMtMzUuMyAxNy4zYy0yNC43IDAtNDQuNy0yMC00NC43LTQ0LjdsMC0xMy42eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserSecret: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M188.7 14.3L224 32l35.3-17.7L288 0l13 29.3 35.6 80.2c4-1.4 7.8-2.9 11.4-4.3c14.2-5.7 25-11.3 32.2-15.5c3.6-2.1 6.2-3.8 7.9-4.9c.9-.6 1.5-1 1.8-1.3l.4-.3c0 0 0 0 0 0L400 96c9.6 12.8 9.6 12.8 9.6 12.8s0 0 0 0s0 0 0 0l-.1 .1-.2 .2-.7 .5c-.6 .4-1.5 1-2.6 1.8c-2.2 1.5-5.4 3.5-9.6 6c-8.4 4.8-20.5 11.2-36.3 17.5C328.3 147.5 282.3 160 224 160s-104.3-12.5-135.9-25.1c-15.8-6.3-28-12.7-36.3-17.5c-4.2-2.4-7.4-4.5-9.6-6c-1.1-.7-2-1.3-2.6-1.8l-.7-.5-.2-.2-.1-.1c0 0 0 0 0 0s0 0 0 0L48 96c9.6-12.8 9.6-12.8 9.6-12.8c0 0 0 0 0 0l.4 .3c.4 .3 1 .7 1.8 1.3c1.7 1.1 4.4 2.8 7.9 4.9c7.2 4.2 18 9.8 32.2 15.5c3.6 1.4 7.4 2.9 11.4 4.3L147 29.3 160 0l28.7 14.3zm83.7 29.3l-34 17L224 67.8l-14.3-7.2-34-17-33.3 75c23 5.5 50.3 9.4 81.7 9.4s58.7-3.9 81.7-9.4l-33.3-75zM100 224c-2.6-10.2-4-21-4-32c0-6.7 .5-13.3 1.5-19.7c9.6 3.1 19.9 6.1 31.1 8.8c-.4 3.6-.6 7.2-.6 10.9c0 53 43 96 96 96s96-43 96-96c0-4-.2-7.9-.7-11.7c11.1-2.8 21.5-5.8 31-9c1.1 6.8 1.7 13.7 1.7 20.8c0 11-1.4 21.8-4 32l49.5 0 34.6 0-13.1 32-19.6 48-13.1 32 29.8 0 1.5 8 24.7 136 5.8 32-32.5 0-383 0L0 512l5.8-32L30.5 344l1.5-8 29.8 0L48.7 304 29.1 256 16 224l34.6 0 49.5 0zm234.8 32c-22.1 38.3-63.5 64-110.9 64s-88.7-25.7-110.9-64l-49.5 0 27.8 67.9 18 44.1-47.7 0-3.1 0L38.3 480l116.4 0-26.2-91.6 30.8-8.8 20.3 70.9L201.8 384l-9.8 0-16 0 0-32 16 0 32 0 32 0 16 0 0 32-16 0-9.8 0 22.2 66.5 20.3-70.9 30.8 8.8L293.2 480l116.4 0L389.3 368l-3.1 0-47.7 0 18-44.1L384.3 256l-49.5 0zM224 418.6L203.5 480l40.9 0L224 418.6zM144 184.4c10.1 2 20.8 3.6 32 4.9l0 8.7c0 7 5.7 12.7 12.7 12.7c5.5 0 10.3-3.5 12-8.7l3.5-10.5c6.5 .3 13.1 .5 19.8 .5c6.7 0 13.3-.2 19.8-.5l3.5 10.5c1.7 5.2 6.6 8.7 12 8.7c7 0 12.7-5.7 12.7-12.7l0-9c11.2-1.4 21.8-3.2 32-5.3l0 14.3c0 24.7-20 44.7-44.7 44.7c-14.1 0-27-6.6-35.3-17.3c-8.3 10.7-21.2 17.3-35.3 17.3c-24.7 0-44.7-20-44.7-44.7l0-13.6z" />
    </Icon>
);

export default UserSecret;