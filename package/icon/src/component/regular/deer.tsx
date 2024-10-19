
import { Icon } from "../../index";

/**
 * A component that renders the `deer` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/deer?s=regular deer}
 * @preview ![deer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDE2YzAtOC44LTcuMi0xNi0xNi0xNnMtMTYgNy4yLTE2IDE2bDAgMjRjMCAzMC45IDI1LjEgNTYgNTYgNTZsOCAwIDggMCAyNCAwLTUwLjQgMTIuNmMtOCAyLTEzLjYgOS4yLTEzLjYgMTcuNGMwIDkuOSA4IDE4IDE4IDE4bDI4LjIgMEwyOTUgMTY4bC0xOTEgMGMtMzYuNSAwLTY4LjMgMjAuNC04NC41IDUwLjRjLTkuMiAxMy43LTE1LjEgMzAtMTYuMiA0Ny42TDAgMzE5Yy0uNiA4LjggNi4yIDE2LjQgMTUgMTdjOC41IC41IDE1LjktNS43IDE2LjktMTQuMWwxLjEgMS4xYzQuNSA0LjUgNyAxMC42IDcgMTdsMCA0LjNjMCAyLjYtLjQgNS4xLTEuMiA3LjZsLTguMiAyNC43Yy01LjEgMTUuNC00LjkgMzIuMSAuNiA0Ny40bDIyLjUgNjEuOEM1OS40IDUwMS41IDc0LjQgNTEyIDkxLjIgNTEybDQ2IDBjMjcuOCAwIDQ3LjEtMjcuNiAzNy42LTUzLjdMMTU3IDQwOS41bDYuNS00LjNjMTUuMi0xMC4xIDI1LjYtMjUuNCAyOS45LTQyLjRjMjAgOC43IDQxLjcgMTMuMyA2My44IDEzLjNsNi44IDAgMCA5NmMwIDIyLjEgMTcuOSA0MCA0MCA0MGw0OCAwYzIyLjEgMCA0MC0xNy45IDQwLTQwbDAtMTYwLjJjMC0yLjYgLjQtNS4xIDEuMi03LjZMNDA5LjMgMjU2bDQyLjMgMGMzNy44IDAgNjguNC0zMC42IDY4LjQtNjguNGMwLTE5LjMtOC4xLTM3LjYtMjIuNC01MC42TDQ0NC4xIDg4LjRDNDYwLjggNzguNyA0NzIgNjAuNyA0NzIgNDBsMC0yNGMwLTguOC03LjItMTYtMTYtMTZzLTE2IDcuMi0xNiAxNmwwIDI0YzAgMTMuMy0xMC43IDI0LTI0IDI0bC0yOS45IDAtMzkuNSAwYzMuNS03LjMgNS40LTE1LjQgNS40LTI0bDAtMjRjMC04LjgtNy4yLTE2LTE2LTE2cy0xNiA3LjItMTYgMTZsMCAyNGMwIDEzLjMtMTAuNyAyNC0yNCAyNGwtOCAwLTggMGMtMTMuMyAwLTI0LTEwLjctMjQtMjRsMC0yNHptMTMwLjEgOTZjOC4xIDAgMTUuOSAzIDIxLjkgOC41bDU3LjMgNTIuMWM0LjIgMy45IDYuNyA5LjMgNi43IDE1LjFjMCAxMS4zLTkuMSAyMC40LTIwLjQgMjAuNEwzOTIgMjA4Yy0xMC4zIDAtMTkuNSA2LjYtMjIuOCAxNi40TDM0Ny43IDI4OWMtMi40IDcuMy0zLjcgMTUtMy43IDIyLjhMMzQ0IDQ2NGwtMzIgMCAwLTExMmMwLTEzLjMtMTAuNy0yNC0yNC0yNGwtMzAuOCAwYy0yMi4xIDAtNDMuNy02LjUtNjIuMS0xOC44TDE4MS4zIDMwMGMtOC01LjMtMTguMy01LjQtMjYuMy0uMnMtMTIuMiAxNC43LTEwLjYgMjQuMWwyLjkgMTcuNGMxLjYgOS4zLTIuNSAxOC43LTEwLjQgMjMuOUwxMTQuNyAzODBjLTkuMiA2LjEtMTMgMTcuOC05LjIgMjguMkwxMjUuNyA0NjRsLTI4LjkgMEw3Ni4zIDQwNy41Yy0xLjktNS4xLTEuOS0xMC43LS4yLTE1LjhMODQuMyAzNjdjMi40LTcuMyAzLjctMTUgMy43LTIyLjhsMC00LjNjMC0xOS4xLTcuNi0zNy40LTIxLjEtNTAuOUw2MyAyODUuMWMtNC41LTQuNS03LTEwLjYtNy0xN2wwLTQuMWMwLTI2LjUgMjEuNS00OCA0OC00OGwyMDguOSAwYzEwLjYgMCAyMC03IDIzLTE3LjFsMTktNjMuNmM0LjEtMTMuOCAxNi44LTIzLjIgMzEuMi0yMy4yek00MTYgMTYwYTE2IDE2IDAgMSAwIC0zMiAwIDE2IDE2IDAgMSAwIDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Deer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 24c0 30.9 25.1 56 56 56l8 0 8 0 24 0-50.4 12.6c-8 2-13.6 9.2-13.6 17.4c0 9.9 8 18 18 18l28.2 0L295 168l-191 0c-36.5 0-68.3 20.4-84.5 50.4c-9.2 13.7-15.1 30-16.2 47.6L0 319c-.6 8.8 6.2 16.4 15 17c8.5 .5 15.9-5.7 16.9-14.1l1.1 1.1c4.5 4.5 7 10.6 7 17l0 4.3c0 2.6-.4 5.1-1.2 7.6l-8.2 24.7c-5.1 15.4-4.9 32.1 .6 47.4l22.5 61.8C59.4 501.5 74.4 512 91.2 512l46 0c27.8 0 47.1-27.6 37.6-53.7L157 409.5l6.5-4.3c15.2-10.1 25.6-25.4 29.9-42.4c20 8.7 41.7 13.3 63.8 13.3l6.8 0 0 96c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-160.2c0-2.6 .4-5.1 1.2-7.6L409.3 256l42.3 0c37.8 0 68.4-30.6 68.4-68.4c0-19.3-8.1-37.6-22.4-50.6L444.1 88.4C460.8 78.7 472 60.7 472 40l0-24c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 24c0 13.3-10.7 24-24 24l-29.9 0-39.5 0c3.5-7.3 5.4-15.4 5.4-24l0-24c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 24c0 13.3-10.7 24-24 24l-8 0-8 0c-13.3 0-24-10.7-24-24l0-24zm130.1 96c8.1 0 15.9 3 21.9 8.5l57.3 52.1c4.2 3.9 6.7 9.3 6.7 15.1c0 11.3-9.1 20.4-20.4 20.4L392 208c-10.3 0-19.5 6.6-22.8 16.4L347.7 289c-2.4 7.3-3.7 15-3.7 22.8L344 464l-32 0 0-112c0-13.3-10.7-24-24-24l-30.8 0c-22.1 0-43.7-6.5-62.1-18.8L181.3 300c-8-5.3-18.3-5.4-26.3-.2s-12.2 14.7-10.6 24.1l2.9 17.4c1.6 9.3-2.5 18.7-10.4 23.9L114.7 380c-9.2 6.1-13 17.8-9.2 28.2L125.7 464l-28.9 0L76.3 407.5c-1.9-5.1-1.9-10.7-.2-15.8L84.3 367c2.4-7.3 3.7-15 3.7-22.8l0-4.3c0-19.1-7.6-37.4-21.1-50.9L63 285.1c-4.5-4.5-7-10.6-7-17l0-4.1c0-26.5 21.5-48 48-48l208.9 0c10.6 0 20-7 23-17.1l19-63.6c4.1-13.8 16.8-23.2 31.2-23.2zM416 160a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Deer;