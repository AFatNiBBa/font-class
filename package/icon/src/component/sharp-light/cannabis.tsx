
import { Icon } from "../../index";

/**
 * A component that renders the `cannabis` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cannabis?s=sharp-light cannabis}
 * @preview ![cannabis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTUzLjQgMjMwLjZjLTgtOC0yMC45LTE2LjEtMzgtMjMuNmMtMTYuNy03LjQtMzUuNS0xMy40LTUzLjUtMTguMWMtOC4xLTIuMS0xNS44LTQtMjMuMS01LjVjMS4yIDUuMSAyLjUgMTAuNCA0IDE2YzkuNCAzMy44IDI1LjUgNzEuNiA1MS44IDk3LjlMMTIyLjIgMzI1IDg5LjggMzQ2LjYgNTQuNiAzNzAuMWMxLjQgLjkgMi44IDEuOCA0LjIgMi43QzgyLjIgMzg3LjIgMTEyLjMgNDAwIDE0NCA0MDBsMzIgMCAwIDMyYzAgMS45IDAgMy43IC4xIDUuNWMxOC41LTcuNSA0MS40LTE4LjMgNjIuMi0zMi4xbDEuOC0xLjIgMC02OC4yIDAtMTYgMzIgMCAwIDE2IDAgNjguMiAxLjggMS4yYzIwLjcgMTMuOCA0My42IDI0LjYgNjIuMiAzMi4xYy4xLTEuOCAuMS0zLjYgLjEtNS41bDAtMzIgMzIgMGMzMS43IDAgNjEuOC0xMi44IDg1LjItMjcuM2MxLjQtLjkgMi44LTEuOCA0LjItMi43bC0zNS4yLTIzLjVMMzg5LjggMzI1bDI3LjYtMjcuNmMyNi4zLTI2LjMgNDIuNC02NC4yIDUxLjgtOTcuOWMxLjUtNS42IDIuOS0xMC45IDQtMTZjLTcuMiAxLjYtMTUgMy40LTIzLjEgNS41Yy0xOCA0LjctMzYuOCAxMC43LTUzLjUgMTguMWMtMTcuMSA3LjUtMzAgMTUuNi0zOCAyMy42TDMwNCAyODUuM2wwLTc3LjNjMC01Ny4yLTE3LjktMTAzLjktMzYtMTM2LjVjLTQuMS03LjQtOC4yLTE0LTEyLTE5LjhjLTMuOSA1LjgtNy45IDEyLjQtMTIgMTkuOGMtMTguMSAzMi42LTM2IDc5LjItMzYgMTM2LjVsMCA3Ny4zLTU0LjYtNTQuNnpNMjQwIDQ0MmMtNDMuNiAyNS40LTg4IDM4LTg4IDM4cy0zLjMtNi42LTUuNy0xOS44Yy0uNi0zLjQtMS4xLTcuMi0xLjYtMTEuNGMtLjUtNS0uOC0xMC42LS44LTE2LjhjLTQ5LjEgMC05Mi4yLTI0LjEtMTE4LjItNDIuOEM5LjUgMzc3LjUgMCAzNjggMCAzNjhsMjcuNC0xOC4zTDQ0LjkgMzM4IDcyIDMyMGMtNy42LTcuNi0xNC41LTE2LTIwLjYtMjQuN0MyMy44IDI1NS45IDEwLjcgMjA4LjIgNC44IDE3N0MuOSAxNTcuMiAwIDE0NCAwIDE0NHMxMy4yIDEuNyAzMi43IDUuNWMzMC43IDYgNzYuOSAxNy40IDExMiAzNi4zYzEyLjEgNi41IDIyLjkgMTMuOSAzMS4zIDIyLjNjMC0xMy42IC45LTI2LjcgMi41LTM5LjJjOC42LTY2LjIgMzcuMS0xMTYgNTcuMS0xNDMuOEMyNDcuMyA4LjcgMjU2IDAgMjU2IDBzOC43IDguNyAyMC40IDI1YzE5LjkgMjcuOCA0OC41IDc3LjcgNTcuMSAxNDMuOGMxLjYgMTIuNSAyLjUgMjUuNSAyLjUgMzkuMmM4LjQtOC40IDE5LjEtMTUuOCAzMS4zLTIyLjNjMzUuMS0xOC44IDgxLjMtMzAuMiAxMTItMzYuM2MxOS41LTMuOCAzMi43LTUuNSAzMi43LTUuNXMtLjkgMTMuMi00LjggMzNjLTYgMzEuMi0xOSA3OC45LTQ2LjYgMTE4LjNjLTYuMSA4LjctMTMgMTcuMS0yMC42IDI0LjdsMjcuMSAxOCAxNy41IDExLjdMNTEyIDM2OHMtOS41IDkuNS0yNS44IDIxLjJDNDYwLjIgNDA3LjkgNDE3LjEgNDMyIDM2OCA0MzJjMCA2LjItLjMgMTEuOC0uOCAxNi44Yy0uNCA0LjItMSA4LTEuNiAxMS40QzM2My4zIDQ3My40IDM2MCA0ODAgMzYwIDQ4MHMtNDQuNC0xMi43LTg4LTM4bDAgNTQgMCAxNi0zMiAwIDAtMTYgMC01NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cannabis: typeof Icon = x => (
    <Icon {...x}>
        <path d="M153.4 230.6c-8-8-20.9-16.1-38-23.6c-16.7-7.4-35.5-13.4-53.5-18.1c-8.1-2.1-15.8-4-23.1-5.5c1.2 5.1 2.5 10.4 4 16c9.4 33.8 25.5 71.6 51.8 97.9L122.2 325 89.8 346.6 54.6 370.1c1.4 .9 2.8 1.8 4.2 2.7C82.2 387.2 112.3 400 144 400l32 0 0 32c0 1.9 0 3.7 .1 5.5c18.5-7.5 41.4-18.3 62.2-32.1l1.8-1.2 0-68.2 0-16 32 0 0 16 0 68.2 1.8 1.2c20.7 13.8 43.6 24.6 62.2 32.1c.1-1.8 .1-3.6 .1-5.5l0-32 32 0c31.7 0 61.8-12.8 85.2-27.3c1.4-.9 2.8-1.8 4.2-2.7l-35.2-23.5L389.8 325l27.6-27.6c26.3-26.3 42.4-64.2 51.8-97.9c1.5-5.6 2.9-10.9 4-16c-7.2 1.6-15 3.4-23.1 5.5c-18 4.7-36.8 10.7-53.5 18.1c-17.1 7.5-30 15.6-38 23.6L304 285.3l0-77.3c0-57.2-17.9-103.9-36-136.5c-4.1-7.4-8.2-14-12-19.8c-3.9 5.8-7.9 12.4-12 19.8c-18.1 32.6-36 79.2-36 136.5l0 77.3-54.6-54.6zM240 442c-43.6 25.4-88 38-88 38s-3.3-6.6-5.7-19.8c-.6-3.4-1.1-7.2-1.6-11.4c-.5-5-.8-10.6-.8-16.8c-49.1 0-92.2-24.1-118.2-42.8C9.5 377.5 0 368 0 368l27.4-18.3L44.9 338 72 320c-7.6-7.6-14.5-16-20.6-24.7C23.8 255.9 10.7 208.2 4.8 177C.9 157.2 0 144 0 144s13.2 1.7 32.7 5.5c30.7 6 76.9 17.4 112 36.3c12.1 6.5 22.9 13.9 31.3 22.3c0-13.6 .9-26.7 2.5-39.2c8.6-66.2 37.1-116 57.1-143.8C247.3 8.7 256 0 256 0s8.7 8.7 20.4 25c19.9 27.8 48.5 77.7 57.1 143.8c1.6 12.5 2.5 25.5 2.5 39.2c8.4-8.4 19.1-15.8 31.3-22.3c35.1-18.8 81.3-30.2 112-36.3c19.5-3.8 32.7-5.5 32.7-5.5s-.9 13.2-4.8 33c-6 31.2-19 78.9-46.6 118.3c-6.1 8.7-13 17.1-20.6 24.7l27.1 18 17.5 11.7L512 368s-9.5 9.5-25.8 21.2C460.2 407.9 417.1 432 368 432c0 6.2-.3 11.8-.8 16.8c-.4 4.2-1 8-1.6 11.4C363.3 473.4 360 480 360 480s-44.4-12.7-88-38l0 54 0 16-32 0 0-16 0-54z" />
    </Icon>
);

export default Cannabis;