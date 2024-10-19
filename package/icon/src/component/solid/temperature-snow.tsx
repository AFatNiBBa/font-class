
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-snow` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-snow?s=solid temperature-snow}
 * @preview ![temperature-snow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDExMmMwLTI2LjUgMjEuNS00OCA0OC00OHM0OCAyMS41IDQ4IDQ4bDAgMTY0LjVjMCAxNy4zIDcuMSAzMS45IDE1LjMgNDIuNUM1MDUuOCAzMzIuNiA1MTIgMzQ5LjUgNTEyIDM2OGMwIDQ0LjItMzUuOCA4MC04MCA4MHMtODAtMzUuOC04MC04MGMwLTE4LjUgNi4yLTM1LjQgMTYuNy00OC45YzguMi0xMC42IDE1LjMtMjUuMiAxNS4zLTQyLjVMMzg0IDExMnpNNDMyIDBDMzcwLjEgMCAzMjAgNTAuMSAzMjAgMTEybDAgMTY0LjRjMCAuMS0uMSAuMy0uMiAuNmMtLjIgLjYtLjggMS42LTEuNyAyLjhjLTE4LjkgMjQuNC0zMC4xIDU1LTMwLjEgODguMWMwIDc5LjUgNjQuNSAxNDQgMTQ0IDE0NHMxNDQtNjQuNSAxNDQtMTQ0YzAtMzMuMi0xMS4zLTYzLjgtMzAuMS04OC4xYy0uOS0xLjItMS41LTIuMi0xLjctMi44Yy0uMS0uMy0uMi0uNS0uMi0uNkw1NDQgMTEyQzU0NCA1MC4xIDQ5My45IDAgNDMyIDB6bTAgNDE2YzI2LjUgMCA0OC0yMS41IDQ4LTQ4YzAtMjAuOS0xMy40LTM4LjctMzItNDUuM2wwLTUwLjdjMC04LjgtNy4yLTE2LTE2LTE2cy0xNiA3LjItMTYgMTZsMCA1MC43Yy0xOC42IDYuNi0zMiAyNC40LTMyIDQ1LjNjMCAyNi41IDIxLjUgNDggNDggNDh6TTI4OCAxMzEuNmwtODggNTAuOCAwLTU1LjggMzUuMy0zNS4zYzYuMi02LjIgNi4yLTE2LjQgMC0yMi42cy0xNi40LTYuMi0yMi42IDBMMjAwIDgxLjQgMjAwIDU2YzAtMTMuMy0xMC43LTI0LTI0LTI0cy0yNCAxMC43LTI0IDI0bDAgMjUuNEwxMzkuMyA2OC43Yy02LjItNi4yLTE2LjQtNi4yLTIyLjYgMHMtNi4yIDE2LjQgMCAyMi42TDE1MiAxMjYuNmwwIDU1LjgtNDguMy0yNy45TDkwLjcgMTA2LjNDODguNSA5Ny43IDc5LjcgOTIuNyA3MS4yIDk1cy0xMy42IDExLjEtMTEuMyAxOS42bDQuNiAxNy4zLTIyLTEyLjdDMzEgMTEyLjYgMTYuMyAxMTYuNSA5LjcgMTI4cy0yLjcgMjYuMiA4LjggMzIuOGwyMiAxMi43LTE3LjMgNC42Yy04LjUgMi4zLTEzLjYgMTEuMS0xMS4zIDE5LjZzMTEuMSAxMy42IDE5LjYgMTEuM2w0OC4yLTEyLjlMMTI4IDIyNCA3OS43IDI1MS45IDMxLjQgMjM5Yy04LjUtMi4zLTE3LjMgMi44LTE5LjYgMTEuM3MyLjggMTcuMyAxMS4zIDE5LjZsMTcuMyA0LjYtMjIgMTIuN0M3IDI5My44IDMuMSAzMDguNSA5LjcgMzIwczIxLjMgMTUuNCAzMi44IDguOGwyMi0xMi43LTQuNiAxNy4zYy0yLjMgOC41IDIuOCAxNy4zIDExLjMgMTkuNnMxNy4zLTIuOCAxOS42LTExLjNsMTIuOS00OC4yTDE1MiAyNjUuNmwwIDU1LjgtMzUuMyAzNS4zYy02LjIgNi4yLTYuMiAxNi40IDAgMjIuNnMxNi40IDYuMiAyMi42IDBMMTUyIDM2Ni42bDAgMjUuNGMwIDEzLjMgMTAuNyAyNCAyNCAyNHMyNC0xMC43IDI0LTI0bDAtMjUuNCAxMi43IDEyLjdjNi4yIDYuMiAxNi40IDYuMiAyMi42IDBzNi4yLTE2LjQgMC0yMi42TDIwMCAzMjEuNGwwLTU1LjggNjcuNyAzOS4xYzUuMi0xMy41IDEyLTI2LjIgMjAuMy0zNy45bDAtNS44LTY0LTM3IDY0LTM3IDAtNTUuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const TemperatureSnow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 164.5c0 17.3 7.1 31.9 15.3 42.5C505.8 332.6 512 349.5 512 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5L384 112zM432 0C370.1 0 320 50.1 320 112l0 164.4c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8c-18.9 24.4-30.1 55-30.1 88.1c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.3-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6L544 112C544 50.1 493.9 0 432 0zm0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-50.7c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 50.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48zM288 131.6l-88 50.8 0-55.8 35.3-35.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L200 81.4 200 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 25.4L139.3 68.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L152 126.6l0 55.8-48.3-27.9L90.7 106.3C88.5 97.7 79.7 92.7 71.2 95s-13.6 11.1-11.3 19.6l4.6 17.3-22-12.7C31 112.6 16.3 116.5 9.7 128s-2.7 26.2 8.8 32.8l22 12.7-17.3 4.6c-8.5 2.3-13.6 11.1-11.3 19.6s11.1 13.6 19.6 11.3l48.2-12.9L128 224 79.7 251.9 31.4 239c-8.5-2.3-17.3 2.8-19.6 11.3s2.8 17.3 11.3 19.6l17.3 4.6-22 12.7C7 293.8 3.1 308.5 9.7 320s21.3 15.4 32.8 8.8l22-12.7-4.6 17.3c-2.3 8.5 2.8 17.3 11.3 19.6s17.3-2.8 19.6-11.3l12.9-48.2L152 265.6l0 55.8-35.3 35.3c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L152 366.6l0 25.4c0 13.3 10.7 24 24 24s24-10.7 24-24l0-25.4 12.7 12.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L200 321.4l0-55.8 67.7 39.1c5.2-13.5 12-26.2 20.3-37.9l0-5.8-64-37 64-37 0-55.4z" />
    </Icon>
);

export default TemperatureSnow;