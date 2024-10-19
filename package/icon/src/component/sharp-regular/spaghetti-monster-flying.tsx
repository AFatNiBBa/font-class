
import { Icon } from "../../index";

/**
 * A component that renders the `spaghetti-monster-flying` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spaghetti-monster-flying?s=sharp-regular spaghetti-monster-flying}
 * @preview ![spaghetti-monster-flying](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjA4IDY0YTE2IDE2IDAgMSAwIC0zMiAwIDE2IDE2IDAgMSAwIDMyIDB6bS0xMC45IDYzLjhjLTEuNyAuMS0zLjQgLjItNS4xIC4yYy0zNS4zIDAtNjQtMjguNy02NC02NHMyOC43LTY0IDY0LTY0czY0IDI4LjcgNjQgNjRjMCAxNi4yLTYgMzEuMS0xNiA0Mi4zbDE1LjYgMzEuMmMxOC43LTYgMzkuOS05LjUgNjQuNC05LjVzNDUuOCAzLjUgNjQuNCA5LjVMNDAwIDEwNi4zQzM5MCA5NS4xIDM4NCA4MC4yIDM4NCA2NGMwLTM1LjMgMjguNy02NCA2NC02NHM2NCAyOC43IDY0IDY0cy0yOC43IDY0LTY0IDY0Yy0xLjcgMC0zLjQtLjEtNS4xLS4yTDQyNy44IDE1OGMyMS4xIDEzLjYgMzcuNyAzMC4yIDUxLjQgNDYuNGM3LjEgOC4zIDEzLjUgMTYuNiAxOS4zIDI0bDEuNCAxLjhjNi4zIDguMSAxMS42IDE0LjggMTYuNyAyMC40QzUyNy4zIDI2Mi4zIDUzMi43IDI2NCA1MzYgMjY0YzIuNSAwIDQuMy0uNiA3LjEtMy4zYzMuNy0zLjUgNy4xLTguOCAxMi41LTE3LjRsLjYtLjljNC42LTcuNCAxMS0xNy42IDE5LjQtMjUuN2M5LjctOS4zIDIyLjktMTYuNyA0MC40LTE2LjdsMjQgMCAwIDQ4LTI0IDBjLTIuNSAwLTQuMyAuNi03LjEgMy4zYy0zLjcgMy41LTcuMSA4LjgtMTIuNSAxNy40bC0uNiAuOWMtNC42IDcuNC0xMSAxNy42LTE5LjQgMjUuN2MtOS43IDkuMy0yMi45IDE2LjctNDAuNCAxNi43Yy0xOC41IDAtMzIuOS04LjUtNDQuMy0xOC42Yy0zLjEgNC02LjYgOC4zLTEwLjUgMTIuN2MyLjQgNy4xIDQuNSAxNC4xIDYuNSAyMC42YzAgMCAwIDAgMCAwczAgMCAwIDBzMCAwIDAgMEw0ODkgMzMxYzMuNCAxMS4yIDYuNCAyMC4zIDkuOCAyNy44YzMuNCA3LjUgNi42IDExLjUgOS40IDEzLjhjMi4zIDEuOCA1LjUgMy40IDExLjcgMy40YzguNyAwIDE2LjktNC4yIDMzLjctMTMuMmMxNS04IDM1LjctMTguOCA2Mi4zLTE4LjhsMjQgMCAwIDQ4LTI0IDBjLTEzLjQgMC0yNC43IDUuMi0zOS43IDEzLjJjLTEgLjUtMi4xIDEuMS0zLjIgMS43YzAgMCAwIDAgMCAwczAgMCAwIDBDNTU5LjkgNDE0IDU0MS40IDQyNCA1MjAgNDI0Yy0xNi4yIDAtMzAuMi00LjgtNDEuNy0xMy45Yy0xMC45LTguNy0xOC0yMC4yLTIzLTMxLjFjLTUtMTAuOS04LjgtMjIuOS0xMi4yLTM0bC0uOC0yLjdjLTE2LjQgMTIuMi0zNi4xIDIzLjYtNTguOSAzMS4zYzMuNiAxMC44IDguNCAyMy41IDE0LjQgMzYuMmM3LjUgMTUuOSAxNi4yIDMwLjQgMjUuOCA0MC41QzQzMyA0NjAuNSA0NDEuMiA0NjQgNDQ4IDQ2NGwyNCAwIDAgNDgtMjQgMGMtMjUuMiAwLTQ1LTEzLjUtNTkuNS0yOC44Yy0xNC41LTE1LjQtMjUuNy0zNC45LTM0LjItNTNjLTgtMTctMTQuMS0zMy44LTE4LjMtNDYuOWMtNS4yIC40LTEwLjYgLjYtMTYgLjZzLTEwLjgtLjItMTYtLjZjLTQuMiAxMy0xMC4zIDI5LjktMTguMyA0Ni45Yy04LjUgMTguMS0xOS44IDM3LjYtMzQuMiA1M0MyMzcgNDk4LjUgMjE3LjIgNTEyIDE5MiA1MTJsLTI0IDAgMC00OCAyNCAwYzYuOCAwIDE1LTMuNSAyNC41LTEzLjdjOS41LTEwLjEgMTguMy0yNC42IDI1LjgtNDAuNWM1LjktMTIuNiAxMC43LTI1LjQgMTQuNC0zNi4yYy0yMi44LTcuNy00Mi41LTE5LTU4LjktMzEuM2wtLjggMi43Yy0zLjQgMTEtNy4yIDIzLjEtMTIuMiAzNGMtNS4xIDEwLjktMTIuMSAyMi40LTIzIDMxLjFDMTUwLjIgNDE5LjIgMTM2LjIgNDI0IDEyMCA0MjRjLTIxLjQgMC0zOS45LTEwLTUzLjEtMTcuMWMwIDAgMCAwIDAgMGMtMS4xLS42LTIuMi0xLjItMy4yLTEuN2MtMTUtOC0yNi4zLTEzLjItMzkuNy0xMy4yTDAgMzkybDAtNDggMjQgMGMyNi42IDAgNDcuMyAxMC44IDYyLjMgMTguOGMxNi44IDkgMjUgMTMuMiAzMy43IDEzLjJjNi4zIDAgOS41LTEuNiAxMS43LTMuNGMyLjgtMi4yIDYtNi4zIDkuNC0xMy44YzMuNS03LjUgNi40LTE2LjYgOS44LTI3LjhsMS4zLTQuMnMwIDAgMCAwYzItNi41IDQuMS0xMy41IDYuNS0yMC42Yy0zLjktNC41LTcuNC04LjgtMTAuNS0xMi43QzEzNi45IDMwMy41IDEyMi41IDMxMiAxMDQgMzEyYy0xNy41IDAtMzAuNy03LjQtNDAuNC0xNi43Yy04LjQtOC4xLTE0LjgtMTguMy0xOS40LTI1LjdsLS42LS45Yy01LjQtOC42LTguOC0xMy45LTEyLjUtMTcuNGMtMi44LTIuNy00LjYtMy4zLTcuMS0zLjNMMCAyNDhsMC00OCAyNCAwYzE3LjUgMCAzMC43IDcuNCA0MC40IDE2LjdjOC40IDguMSAxNC44IDE4LjMgMTkuNCAyNS43bC42IC45YzUuNCA4LjYgOC44IDEzLjkgMTIuNSAxNy40YzIuOCAyLjcgNC42IDMuMyA3LjEgMy4zYzMuMyAwIDguNy0xLjcgMTkuNC0xMy40YzUuMS01LjYgMTAuNC0xMi4zIDE2LjctMjAuNGwxLjQtMS44YzUuOC03LjQgMTIuMi0xNS43IDE5LjMtMjRjMTMuOC0xNi4yIDMwLjMtMzIuOCA1MS40LTQ2LjRsLTE1LjEtMzAuMnpNMTgyIDI1OC4zYzYuMyA4LjggMTUuOCAyMC41IDI4LjMgMzIuMkMyMzUuNSAzMTMuOCAyNzIgMzM2IDMyMCAzMzZzODQuNS0yMi4yIDEwOS43LTQ1LjZjMTIuNi0xMS43IDIyLTIzLjQgMjguMy0zMi4yYy41LS43IDEtMS4zIDEuNC0yYy01LjQtNi45LTEwLjgtMTMuOC0xNi43LTIwLjdDNDE2LjMgMjA0LjYgMzgyLjQgMTc2IDMyMCAxNzZzLTk2LjMgMjguNi0xMjIuNyA1OS42Yy01LjkgNi45LTExLjMgMTMuOC0xNi43IDIwLjdjLjQgLjYgLjkgMS4zIDEuNCAyek00NDggODBhMTYgMTYgMCAxIDAgMC0zMiAxNiAxNiAwIDEgMCAwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SpaghettiMonsterFlying: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-10.9 63.8c-1.7 .1-3.4 .2-5.1 .2c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 16.2-6 31.1-16 42.3l15.6 31.2c18.7-6 39.9-9.5 64.4-9.5s45.8 3.5 64.4 9.5L400 106.3C390 95.1 384 80.2 384 64c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-1.7 0-3.4-.1-5.1-.2L427.8 158c21.1 13.6 37.7 30.2 51.4 46.4c7.1 8.3 13.5 16.6 19.3 24l1.4 1.8c6.3 8.1 11.6 14.8 16.7 20.4C527.3 262.3 532.7 264 536 264c2.5 0 4.3-.6 7.1-3.3c3.7-3.5 7.1-8.8 12.5-17.4l.6-.9c4.6-7.4 11-17.6 19.4-25.7c9.7-9.3 22.9-16.7 40.4-16.7l24 0 0 48-24 0c-2.5 0-4.3 .6-7.1 3.3c-3.7 3.5-7.1 8.8-12.5 17.4l-.6 .9c-4.6 7.4-11 17.6-19.4 25.7c-9.7 9.3-22.9 16.7-40.4 16.7c-18.5 0-32.9-8.5-44.3-18.6c-3.1 4-6.6 8.3-10.5 12.7c2.4 7.1 4.5 14.1 6.5 20.6c0 0 0 0 0 0s0 0 0 0s0 0 0 0L489 331c3.4 11.2 6.4 20.3 9.8 27.8c3.4 7.5 6.6 11.5 9.4 13.8c2.3 1.8 5.5 3.4 11.7 3.4c8.7 0 16.9-4.2 33.7-13.2c15-8 35.7-18.8 62.3-18.8l24 0 0 48-24 0c-13.4 0-24.7 5.2-39.7 13.2c-1 .5-2.1 1.1-3.2 1.7c0 0 0 0 0 0s0 0 0 0C559.9 414 541.4 424 520 424c-16.2 0-30.2-4.8-41.7-13.9c-10.9-8.7-18-20.2-23-31.1c-5-10.9-8.8-22.9-12.2-34l-.8-2.7c-16.4 12.2-36.1 23.6-58.9 31.3c3.6 10.8 8.4 23.5 14.4 36.2c7.5 15.9 16.2 30.4 25.8 40.5C433 460.5 441.2 464 448 464l24 0 0 48-24 0c-25.2 0-45-13.5-59.5-28.8c-14.5-15.4-25.7-34.9-34.2-53c-8-17-14.1-33.8-18.3-46.9c-5.2 .4-10.6 .6-16 .6s-10.8-.2-16-.6c-4.2 13-10.3 29.9-18.3 46.9c-8.5 18.1-19.8 37.6-34.2 53C237 498.5 217.2 512 192 512l-24 0 0-48 24 0c6.8 0 15-3.5 24.5-13.7c9.5-10.1 18.3-24.6 25.8-40.5c5.9-12.6 10.7-25.4 14.4-36.2c-22.8-7.7-42.5-19-58.9-31.3l-.8 2.7c-3.4 11-7.2 23.1-12.2 34c-5.1 10.9-12.1 22.4-23 31.1C150.2 419.2 136.2 424 120 424c-21.4 0-39.9-10-53.1-17.1c0 0 0 0 0 0c-1.1-.6-2.2-1.2-3.2-1.7c-15-8-26.3-13.2-39.7-13.2L0 392l0-48 24 0c26.6 0 47.3 10.8 62.3 18.8c16.8 9 25 13.2 33.7 13.2c6.3 0 9.5-1.6 11.7-3.4c2.8-2.2 6-6.3 9.4-13.8c3.5-7.5 6.4-16.6 9.8-27.8l1.3-4.2s0 0 0 0c2-6.5 4.1-13.5 6.5-20.6c-3.9-4.5-7.4-8.8-10.5-12.7C136.9 303.5 122.5 312 104 312c-17.5 0-30.7-7.4-40.4-16.7c-8.4-8.1-14.8-18.3-19.4-25.7l-.6-.9c-5.4-8.6-8.8-13.9-12.5-17.4c-2.8-2.7-4.6-3.3-7.1-3.3L0 248l0-48 24 0c17.5 0 30.7 7.4 40.4 16.7c8.4 8.1 14.8 18.3 19.4 25.7l.6 .9c5.4 8.6 8.8 13.9 12.5 17.4c2.8 2.7 4.6 3.3 7.1 3.3c3.3 0 8.7-1.7 19.4-13.4c5.1-5.6 10.4-12.3 16.7-20.4l1.4-1.8c5.8-7.4 12.2-15.7 19.3-24c13.8-16.2 30.3-32.8 51.4-46.4l-15.1-30.2zM182 258.3c6.3 8.8 15.8 20.5 28.3 32.2C235.5 313.8 272 336 320 336s84.5-22.2 109.7-45.6c12.6-11.7 22-23.4 28.3-32.2c.5-.7 1-1.3 1.4-2c-5.4-6.9-10.8-13.8-16.7-20.7C416.3 204.6 382.4 176 320 176s-96.3 28.6-122.7 59.6c-5.9 6.9-11.3 13.8-16.7 20.7c.4 .6 .9 1.3 1.4 2zM448 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default SpaghettiMonsterFlying;