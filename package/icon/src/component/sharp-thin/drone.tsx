
import { Icon } from "../../index";

/**
 * A component that renders the `drone` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drone?s=sharp-thin drone}
 * @preview ![drone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTEyIDE2YzQ4IDAgODcuOCAzNS4yIDk0LjkgODEuMmMuNyA0LjggMS4xIDkuNyAxLjEgMTQuOGwxNiAwYzAtNS45LS40LTExLjYtMS4zLTE3LjJDMjE0LjQgNDEuMSAxNjggMCAxMTIgMEM1MC4xIDAgMCA1MC4xIDAgMTEyYzAgNTYgNDEuMSAxMDIuNCA5NC44IDExMC43YzUuNiAuOSAxMS40IDEuMyAxNy4yIDEuM2wwLTE2Yy01IDAtMTAtLjQtMTQuOC0xLjFDNTEuMiAxOTkuOCAxNiAxNjAgMTYgMTEyYzAtNTMgNDMtOTYgOTYtOTZ6bTMzLjQgMTE4LjFjNC4yLTYuMyA2LjYtMTMuOSA2LjYtMjIuMWMwLTIyLjEtMTcuOS00MC00MC00MHMtNDAgMTcuOS00MCA0MHMxNy45IDQwIDQwIDQwYzguMiAwIDE1LjctMi40IDIyLjEtNi42TDE2MCAxNzEuM2wwIDE2OS40LTI1LjkgMjUuOWMtNi4zLTQuMi0xMy45LTYuNi0yMi4xLTYuNmMtMjIuMSAwLTQwIDE3LjktNDAgNDBzMTcuOSA0MCA0MCA0MHM0MC0xNy45IDQwLTQwYzAtOC4yLTIuNC0xNS43LTYuNi0yMi4xTDE3MS4zIDM1MmwxNjkuNCAwIDI1LjkgMjUuOWMtNC4yIDYuMy02LjYgMTMuOS02LjYgMjIuMWMwIDIyLjEgMTcuOSA0MCA0MCA0MHM0MC0xNy45IDQwLTQwcy0xNy45LTQwLTQwLTQwYy04LjIgMC0xNS43IDIuNC0yMi4xIDYuNkwzNTIgMzQwLjdsMC0xNjkuNCAyNS45LTI1LjljNi4zIDQuMiAxMy45IDYuNiAyMi4xIDYuNmMyMi4xIDAgNDAtMTcuOSA0MC00MHMtMTcuOS00MC00MC00MHMtNDAgMTcuOS00MCA0MGMwIDguMiAyLjQgMTUuNyA2LjYgMjIuMUwzNDAuNyAxNjBsLTE2OS40IDAtMjUuOS0yNS45ek0xNzYgMTc2bDE2MCAwIDAgMTYwLTE2MCAwIDAtMTYwem0zMjAtNjRjMCA0OC0zNS4yIDg3LjgtODEuMiA5NC45Yy00LjggLjctOS44IDEuMS0xNC44IDEuMWwwIDE2YzUuOSAwIDExLjYtLjQgMTcuMi0xLjNDNDcwLjkgMjE0LjQgNTEyIDE2OCA1MTIgMTEyQzUxMiA1MC4xIDQ2MS45IDAgNDAwIDBDMzQ0IDAgMjk3LjYgNDEuMSAyODkuMyA5NC44Yy0uOSA1LjYtMS4zIDExLjQtMS4zIDE3LjJsMTYgMGMwLTUgLjQtMTAgMS4xLTE0LjhDMzEyLjIgNTEuMiAzNTIgMTYgNDAwIDE2YzUzIDAgOTYgNDMgOTYgOTZ6TTExMiA0OTZjLTUzIDAtOTYtNDMtOTYtOTZjMC00OCAzNS4yLTg3LjggODEuMi05NC45YzQuOC0uNyA5LjctMS4xIDE0LjgtMS4xbDAtMTZjLTUuOSAwLTExLjYgLjQtMTcuMiAxLjNDNDEuMSAyOTcuNiAwIDM0NCAwIDQwMGMwIDYxLjkgNTAuMSAxMTIgMTEyIDExMmM1NiAwIDEwMi40LTQxLjEgMTEwLjctOTQuOGMuOS01LjYgMS4zLTExLjQgMS4zLTE3LjJsLTE2IDBjMCA1LS40IDEwLTEuMSAxNC44QzE5OS44IDQ2MC44IDE2MCA0OTYgMTEyIDQ5NnptMzg0LTk2YzAgNTMtNDMgOTYtOTYgOTZjLTQ4IDAtODcuOC0zNS4yLTk0LjktODEuMmMtLjctNC44LTEuMS05LjgtMS4xLTE0LjhsLTE2IDBjMCA1LjkgLjQgMTEuNiAxLjMgMTcuMkMyOTcuNiA0NzAuOSAzNDQgNTEyIDQwMCA1MTJjNjEuOSAwIDExMi01MC4xIDExMi0xMTJjMC01Ni00MS4xLTEwMi40LTk0LjgtMTEwLjdjLTUuNi0uOS0xMS40LTEuMy0xNy4yLTEuM2wwIDE2YzUgMCAxMCAuNCAxNC44IDEuMWM0NiA3LjEgODEuMiA0Ni45IDgxLjIgOTQuOXpNMTEyIDQyNGEyNCAyNCAwIDEgMSAwLTQ4IDI0IDI0IDAgMSAxIDAgNDh6bTI0LTMxMmEyNCAyNCAwIDEgMSAtNDggMCAyNCAyNCAwIDEgMSA0OCAwek00MDAgNDI0YTI0IDI0IDAgMSAxIDAtNDggMjQgMjQgMCAxIDEgMCA0OHptMjQtMzEyYTI0IDI0IDAgMSAxIC00OCAwIDI0IDI0IDAgMSAxIDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Drone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 16c48 0 87.8 35.2 94.9 81.2c.7 4.8 1.1 9.7 1.1 14.8l16 0c0-5.9-.4-11.6-1.3-17.2C214.4 41.1 168 0 112 0C50.1 0 0 50.1 0 112c0 56 41.1 102.4 94.8 110.7c5.6 .9 11.4 1.3 17.2 1.3l0-16c-5 0-10-.4-14.8-1.1C51.2 199.8 16 160 16 112c0-53 43-96 96-96zm33.4 118.1c4.2-6.3 6.6-13.9 6.6-22.1c0-22.1-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40c8.2 0 15.7-2.4 22.1-6.6L160 171.3l0 169.4-25.9 25.9c-6.3-4.2-13.9-6.6-22.1-6.6c-22.1 0-40 17.9-40 40s17.9 40 40 40s40-17.9 40-40c0-8.2-2.4-15.7-6.6-22.1L171.3 352l169.4 0 25.9 25.9c-4.2 6.3-6.6 13.9-6.6 22.1c0 22.1 17.9 40 40 40s40-17.9 40-40s-17.9-40-40-40c-8.2 0-15.7 2.4-22.1 6.6L352 340.7l0-169.4 25.9-25.9c6.3 4.2 13.9 6.6 22.1 6.6c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 8.2 2.4 15.7 6.6 22.1L340.7 160l-169.4 0-25.9-25.9zM176 176l160 0 0 160-160 0 0-160zm320-64c0 48-35.2 87.8-81.2 94.9c-4.8 .7-9.8 1.1-14.8 1.1l0 16c5.9 0 11.6-.4 17.2-1.3C470.9 214.4 512 168 512 112C512 50.1 461.9 0 400 0C344 0 297.6 41.1 289.3 94.8c-.9 5.6-1.3 11.4-1.3 17.2l16 0c0-5 .4-10 1.1-14.8C312.2 51.2 352 16 400 16c53 0 96 43 96 96zM112 496c-53 0-96-43-96-96c0-48 35.2-87.8 81.2-94.9c4.8-.7 9.7-1.1 14.8-1.1l0-16c-5.9 0-11.6 .4-17.2 1.3C41.1 297.6 0 344 0 400c0 61.9 50.1 112 112 112c56 0 102.4-41.1 110.7-94.8c.9-5.6 1.3-11.4 1.3-17.2l-16 0c0 5-.4 10-1.1 14.8C199.8 460.8 160 496 112 496zm384-96c0 53-43 96-96 96c-48 0-87.8-35.2-94.9-81.2c-.7-4.8-1.1-9.8-1.1-14.8l-16 0c0 5.9 .4 11.6 1.3 17.2C297.6 470.9 344 512 400 512c61.9 0 112-50.1 112-112c0-56-41.1-102.4-94.8-110.7c-5.6-.9-11.4-1.3-17.2-1.3l0 16c5 0 10 .4 14.8 1.1c46 7.1 81.2 46.9 81.2 94.9zM112 424a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm24-312a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM400 424a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm24-312a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
    </Icon>
);

export default Drone;