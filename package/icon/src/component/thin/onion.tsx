
import { Icon } from "../../index";

/**
 * A component that renders the `onion` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/onion?s=thin onion}
 * @preview ![onion](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjA5LjcgMzkuMkwxOTguOSAxNy42Yy00IDMxLjItMTguMyA1NS4xLTM2LjYgNzUuMmMtMS43IDMuMy0zLjkgNy41LTYuMyAxMi41Yy02LjcgMTMuNS0xNS42IDMyLjUtMjQuNSA1NC41QzExMy41IDIwNCA5NiAyNTkuMyA5NiAzMDYuMmMwIDQzLjMgMTUuMyA3Ny4xIDMwLjcgMTAwLjJjNy43IDExLjUgMTUuNCAyMC40IDIxLjEgMjYuM2MyLjEgMi4yIDQgNCA1LjUgNS40YzIuNSAuNyA0LjkgMS4zIDcuNCAxLjljLjggLjEgMS41IC4yIDIuMyAuNWMxOS44IDQuNiA0MC40IDcuMSA2MSA3LjRsMS44IDBjLTMuOC02LjgtOC41LTE2LjMtMTMuMi0yOC4xQzIwMi4zIDM5NC40IDE5MiAzNTggMTkyIDMxNC42YzAtNjMuOSA2LTEzMi44IDEyLjEtMTg1LjdjMy0yNi41IDYtNDkgOC4zLTY0LjljMS4xLTcuOSAyLjEtMTQuMiAyLjctMTguNmwwLS4xYy0yLjMtMS41LTQuMS0zLjYtNS40LTYuMXpNMTQ4LjkgNDUzLjVDNjcuMSA0MzEuMyAwIDM3NC40IDAgMjg4YzAtODQuNSA1MS4zLTEyNC4zIDk5LjctMTYyQzEzOS4zIDk1LjIgMTc3IDY1LjkgMTgzLjEgMTQuOWMxLTguMSA3LjUtMTQuOSAxNS43LTE0LjljNS42IDAgMTAuOCAzLjIgMTMuMyA4LjJsMyA1LjlMMjI0IDMybDguOS0xNy45IDMtNS45YzIuNS01IDcuNi04LjIgMTMuMy04LjJjOC4yIDAgMTQuNyA2LjcgMTUuNyAxNC45YzYuMSA1MSA0My44IDgwLjMgODMuNCAxMTEuMmM0OC40IDM3LjcgOTkuNyA3Ny41IDk5LjcgMTYyYzAgODYuNC02Ny4xIDE0My4zLTE0OC45IDE2NS41bDIwLjMgNDcuM2MxLjcgNC4xLS4xIDguOC00LjIgMTAuNXMtOC44LS4xLTEwLjUtNC4ybC0yMS4zLTQ5LjhjLTE2LjggMy42LTM0IDUuNy01MS4zIDYuNGwwIDQwLjJjMCA0LjQtMy42IDgtOCA4cy04LTMuNi04LThsMC00MC4yYy0xNy4zLS43LTM0LjUtMi45LTUxLjMtNi40bC0yMS4zIDQ5LjhjLTEuNyA0LjEtNi40IDUuOS0xMC41IDQuMnMtNS45LTYuNC00LjItMTAuNWwyMC4zLTQ3LjN6TTI4Ny4zIDQ0MGM2LTEuNCAxMS45LTMuMSAxNy44LTQuOWMuNy0uNyAxLjQtMS42IDIuMi0yLjRjNS4zLTYuMSAxMi41LTE1IDE5LjctMjYuM2MxNC4zLTIyLjcgMjguNC01NC41IDI4LjQtOTEuOGMwLTQ4LjYtMTguMy0xMDYuMS0zNy4xLTE1MS45Yy05LjMtMjIuOC0xOC43LTQyLjUtMjUuNy01Ni41Yy0yLjYtNS4zLTQuOS05LjctNi44LTEzLjJjLTE4LjQtMjAuMS0zMi44LTQ0LTM2LjgtNzUuM0wyMzguMyAzOS4yYy0xLjYgMy4yLTQuMSA1LjctNy4yIDcuMmwtLjIgMS41Yy0uNyA0LjMtMS42IDEwLjUtMi43IDE4LjRjLTIuMiAxNS44LTUuMiAzOC4xLTguMiA2NC40Yy02IDUyLjctMTEuOSAxMjEtMTEuOSAxODMuOWMwIDQwLjkgOS43IDc1LjMgMTkuNCA5OS40YzQuOSAxMiA5LjcgMjEuNSAxMy4zIDI3LjljMS4xIDIgMi4yIDMuOCAzIDUuMmMxNC0xLjIgMjcuOC0zLjMgNDEuMy02LjVjLjgtLjMgMS41LS41IDIuMy0uNXptNDUuOC0yODMuNWMxOC45IDQ2LjMgMzguMyAxMDYuMSAzOC4zIDE1OGMwIDQxLjQtMTUuNiA3Ni4yLTMwLjkgMTAwLjRjLTIgMy4xLTQgNi4xLTUuOSA4LjhjMTIuMS01LjYgMjMuNS0xMi4xIDMzLjktMTkuNEM0MDcuMSAzNzcgNDMyIDMzNy45IDQzMiAyODhjMC02OS0zNy4xLTEwNC44LTgwLjQtMTM5LjFjLTQuMS0zLjMtOC40LTYuNi0xMi42LTkuOWMwIDAgMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMGMtNi44LTUuMy0xMy44LTEwLjctMjAuNi0xNi4yYzQuNyAxMC4xIDkuNyAyMS41IDE0LjcgMzMuOHpNMTEzLjMgNDE1LjNDOTYuNyAzOTAuMyA4MCAzNTMuNSA4MCAzMDYuMmMwLTUwLjEgMTguNS0xMDcuOSAzNi42LTE1Mi41YzQuNi0xMS4zIDkuMi0yMS45IDEzLjUtMzEuM2MtNyA1LjctMTQuMSAxMS4yLTIxIDE2LjZjLTQuMyAzLjMtOC41IDYuNi0xMi43IDkuOUM1My4xIDE4My4yIDE2IDIxOSAxNiAyODhjMCA0OS45IDI0LjkgODkgNjMuNSAxMTYuM2MxMi45IDkuMSAyNy4yIDE2LjkgNDIuNiAyMy4yYy0yLjktMy43LTUuOC03LjgtOC44LTEyLjJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Onion: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M209.7 39.2L198.9 17.6c-4 31.2-18.3 55.1-36.6 75.2c-1.7 3.3-3.9 7.5-6.3 12.5c-6.7 13.5-15.6 32.5-24.5 54.5C113.5 204 96 259.3 96 306.2c0 43.3 15.3 77.1 30.7 100.2c7.7 11.5 15.4 20.4 21.1 26.3c2.1 2.2 4 4 5.5 5.4c2.5 .7 4.9 1.3 7.4 1.9c.8 .1 1.5 .2 2.3 .5c19.8 4.6 40.4 7.1 61 7.4l1.8 0c-3.8-6.8-8.5-16.3-13.2-28.1C202.3 394.4 192 358 192 314.6c0-63.9 6-132.8 12.1-185.7c3-26.5 6-49 8.3-64.9c1.1-7.9 2.1-14.2 2.7-18.6l0-.1c-2.3-1.5-4.1-3.6-5.4-6.1zM148.9 453.5C67.1 431.3 0 374.4 0 288c0-84.5 51.3-124.3 99.7-162C139.3 95.2 177 65.9 183.1 14.9c1-8.1 7.5-14.9 15.7-14.9c5.6 0 10.8 3.2 13.3 8.2l3 5.9L224 32l8.9-17.9 3-5.9c2.5-5 7.6-8.2 13.3-8.2c8.2 0 14.7 6.7 15.7 14.9c6.1 51 43.8 80.3 83.4 111.2c48.4 37.7 99.7 77.5 99.7 162c0 86.4-67.1 143.3-148.9 165.5l20.3 47.3c1.7 4.1-.1 8.8-4.2 10.5s-8.8-.1-10.5-4.2l-21.3-49.8c-16.8 3.6-34 5.7-51.3 6.4l0 40.2c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-40.2c-17.3-.7-34.5-2.9-51.3-6.4l-21.3 49.8c-1.7 4.1-6.4 5.9-10.5 4.2s-5.9-6.4-4.2-10.5l20.3-47.3zM287.3 440c6-1.4 11.9-3.1 17.8-4.9c.7-.7 1.4-1.6 2.2-2.4c5.3-6.1 12.5-15 19.7-26.3c14.3-22.7 28.4-54.5 28.4-91.8c0-48.6-18.3-106.1-37.1-151.9c-9.3-22.8-18.7-42.5-25.7-56.5c-2.6-5.3-4.9-9.7-6.8-13.2c-18.4-20.1-32.8-44-36.8-75.3L238.3 39.2c-1.6 3.2-4.1 5.7-7.2 7.2l-.2 1.5c-.7 4.3-1.6 10.5-2.7 18.4c-2.2 15.8-5.2 38.1-8.2 64.4c-6 52.7-11.9 121-11.9 183.9c0 40.9 9.7 75.3 19.4 99.4c4.9 12 9.7 21.5 13.3 27.9c1.1 2 2.2 3.8 3 5.2c14-1.2 27.8-3.3 41.3-6.5c.8-.3 1.5-.5 2.3-.5zm45.8-283.5c18.9 46.3 38.3 106.1 38.3 158c0 41.4-15.6 76.2-30.9 100.4c-2 3.1-4 6.1-5.9 8.8c12.1-5.6 23.5-12.1 33.9-19.4C407.1 377 432 337.9 432 288c0-69-37.1-104.8-80.4-139.1c-4.1-3.3-8.4-6.6-12.6-9.9c0 0 0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0c-6.8-5.3-13.8-10.7-20.6-16.2c4.7 10.1 9.7 21.5 14.7 33.8zM113.3 415.3C96.7 390.3 80 353.5 80 306.2c0-50.1 18.5-107.9 36.6-152.5c4.6-11.3 9.2-21.9 13.5-31.3c-7 5.7-14.1 11.2-21 16.6c-4.3 3.3-8.5 6.6-12.7 9.9C53.1 183.2 16 219 16 288c0 49.9 24.9 89 63.5 116.3c12.9 9.1 27.2 16.9 42.6 23.2c-2.9-3.7-5.8-7.8-8.8-12.2z" />
    </Icon>
);

export default Onion;