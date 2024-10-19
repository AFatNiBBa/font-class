
import { Icon } from "../../index";

/**
 * A component that renders the `corn` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corn?s=thin corn}
 * @preview ![corn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDUzLjkgMGMtMTUuMSAwLTI5IDUuOC0zOS4zIDE1LjNDNDA2LjQgMTAuOSAzOTcgOC40IDM4NyA4LjRjLTIwLjIgMC0zOCAxMC4zLTQ4LjQgMjUuOWMtMy4zLS42LTYuNi0uOS0xMC4xLS45Yy0yMC4yIDAtMzggMTAuMy00OC40IDI1LjljLTMuMy0uNi02LjYtLjktMTAuMS0uOWMtMjAuOCAwLTM5IDEwLjktNDkuMyAyNy4zYzMuNiA0LjkgNyA5LjggMTAuMyAxNC45YzYuMy0xNS4zIDIxLjQtMjYuMSAzOS0yNi4xYzQuMSAwIDggLjYgMTEuOCAxLjdjMy43IDEuMSA3LjYtLjYgOS4zLTRjNy0xMy41IDIxLjItMjIuNyAzNy40LTIyLjdjNC4xIDAgOCAuNiAxMS44IDEuN2MzLjcgMS4xIDcuNi0uNiA5LjMtNGM3LTEzLjUgMjEuMi0yMi43IDM3LjQtMjIuN2M5IDAgMTcuNCAyLjggMjQuMiA3LjZjMy40IDIuNCA4IDEuOCAxMC43LTEuM2M3LjctOSAxOS4yLTE0LjcgMzItMTQuN0M0NzcuMSAxNiA0OTYgMzQuOSA0OTYgNTguMWMwIDEyLjgtNS43IDI0LjItMTQuNyAzMmMtMy4xIDIuNy0zLjcgNy4zLTEuMyAxMC43YzQuOCA2LjggNy42IDE1LjIgNy42IDI0LjJjMCAxNi4zLTkuMiAzMC40LTIyLjcgMzcuNGMtMy40IDEuOC01LjEgNS43LTQgOS4zYzEuMSAzLjcgMS43IDcuNyAxLjcgMTEuOGMwIDE2LjMtOS4yIDMwLjQtMjIuNyAzNy40Yy0zLjQgMS44LTUuMSA1LjctNCA5LjNjMS4xIDMuNyAxLjcgNy43IDEuNyAxMS44YzAgMTMuNC02LjIgMjUuMy0xNiAzM2M0LjEgMy40IDguMiA3IDEyLjEgMTAuOGMxMi4yLTEwLjcgMTkuOS0yNi4zIDE5LjktNDMuOGMwLTMuNC0uMy02LjgtLjktMTAuMWMxNS42LTEwLjQgMjUuOS0yOC4yIDI1LjktNDguNGMwLTMuNC0uMy02LjgtLjktMTAuMWMxNS42LTEwLjQgMjUuOS0yOC4yIDI1LjktNDguNGMwLTEwLTIuNS0xOS4zLTYuOS0yNy42QzUwNi4yIDg3LjEgNTEyIDczLjMgNTEyIDU4LjFDNTEyIDI2IDQ4NiAwIDQ1My45IDB6bS0yOTkgNjYuM2MtMi0yLTQuOC0yLjgtNy41LTIuMXMtNC45IDIuNi01LjggNS4zbC0yMi45IDY4LjdjLTEgMy0yLjYgNS44LTQuNyA4LjJMMzMuNiAyMzguMkMxMiAyNjMgMCAyOTQuOCAwIDMyNy44TDAgMzQ2YzAgMzQuMiAxMi45IDY3LjEgMzYuMSA5Mi4ybDI3LjcgMzBjMjUuNyAyNy45IDYyIDQzLjggOTkuOSA0My44bDE1LjYgMGMzNi4xIDAgNzAuNy0xNC4zIDk2LjItMzkuOGw3My44LTczLjhjMi41LTIuNSA1LjUtNC40IDguOC01LjZMNDQyLjcgMzYyYzIuNi0uOSA0LjUtMy4xIDUuMS01LjhzLS4yLTUuNS0yLjItNy40bC0zMC4yLTMwLjJjLTM1LjQtMzUuNC04My4zLTU1LjItMTMzLjMtNTUuMmMtMTQuMiAwLTI4LjIgMS42LTQxLjggNC43bDAtN2MwLTcwLTI3LjgtMTM3LjItNzcuMy0xODYuN2wtOC4xLTguMXptNjkuNCAxOTQuOGwwIDExLjRjLTI4LjIgOS4xLTU0LjEgMjQuOC03NS40IDQ2LjFMNDQuMiA0MjMuMkMyNiA0MDEuNyAxNiAzNzQuMyAxNiAzNDZsMC0xOC4yYzAtMjkuMSAxMC42LTU3LjEgMjkuNy03OWw4MC40LTkxLjljMy41LTQgNi4yLTguNyA3LjgtMTMuN2wxOC44LTU2LjRjNDUuOCA0Ni40IDcxLjYgMTA5IDcxLjYgMTc0LjN6TTc1LjYgNDU3LjRMNDkuOCA0MjkuNWw1LjQgNS40IDEwNS0xMDVjMzIuNC0zMi40IDc2LjItNTAuNSAxMjItNTAuNXM4OS42IDE4LjIgMTIyIDUwLjVsMjEuMyAyMS4zLTcyLjkgMjYuNWMtNS41IDItMTAuNSA1LjItMTQuNiA5LjNsLTczLjggNzMuOGMtMjIuNSAyMi41LTUzIDM1LjEtODQuOSAzNS4xbC0xNS42IDBjLTMzLjUgMC02NS41LTE0LTg4LjItMzguNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Corn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M453.9 0c-15.1 0-29 5.8-39.3 15.3C406.4 10.9 397 8.4 387 8.4c-20.2 0-38 10.3-48.4 25.9c-3.3-.6-6.6-.9-10.1-.9c-20.2 0-38 10.3-48.4 25.9c-3.3-.6-6.6-.9-10.1-.9c-20.8 0-39 10.9-49.3 27.3c3.6 4.9 7 9.8 10.3 14.9c6.3-15.3 21.4-26.1 39-26.1c4.1 0 8 .6 11.8 1.7c3.7 1.1 7.6-.6 9.3-4c7-13.5 21.2-22.7 37.4-22.7c4.1 0 8 .6 11.8 1.7c3.7 1.1 7.6-.6 9.3-4c7-13.5 21.2-22.7 37.4-22.7c9 0 17.4 2.8 24.2 7.6c3.4 2.4 8 1.8 10.7-1.3c7.7-9 19.2-14.7 32-14.7C477.1 16 496 34.9 496 58.1c0 12.8-5.7 24.2-14.7 32c-3.1 2.7-3.7 7.3-1.3 10.7c4.8 6.8 7.6 15.2 7.6 24.2c0 16.3-9.2 30.4-22.7 37.4c-3.4 1.8-5.1 5.7-4 9.3c1.1 3.7 1.7 7.7 1.7 11.8c0 16.3-9.2 30.4-22.7 37.4c-3.4 1.8-5.1 5.7-4 9.3c1.1 3.7 1.7 7.7 1.7 11.8c0 13.4-6.2 25.3-16 33c4.1 3.4 8.2 7 12.1 10.8c12.2-10.7 19.9-26.3 19.9-43.8c0-3.4-.3-6.8-.9-10.1c15.6-10.4 25.9-28.2 25.9-48.4c0-3.4-.3-6.8-.9-10.1c15.6-10.4 25.9-28.2 25.9-48.4c0-10-2.5-19.3-6.9-27.6C506.2 87.1 512 73.3 512 58.1C512 26 486 0 453.9 0zm-299 66.3c-2-2-4.8-2.8-7.5-2.1s-4.9 2.6-5.8 5.3l-22.9 68.7c-1 3-2.6 5.8-4.7 8.2L33.6 238.2C12 263 0 294.8 0 327.8L0 346c0 34.2 12.9 67.1 36.1 92.2l27.7 30c25.7 27.9 62 43.8 99.9 43.8l15.6 0c36.1 0 70.7-14.3 96.2-39.8l73.8-73.8c2.5-2.5 5.5-4.4 8.8-5.6L442.7 362c2.6-.9 4.5-3.1 5.1-5.8s-.2-5.5-2.2-7.4l-30.2-30.2c-35.4-35.4-83.3-55.2-133.3-55.2c-14.2 0-28.2 1.6-41.8 4.7l0-7c0-70-27.8-137.2-77.3-186.7l-8.1-8.1zm69.4 194.8l0 11.4c-28.2 9.1-54.1 24.8-75.4 46.1L44.2 423.2C26 401.7 16 374.3 16 346l0-18.2c0-29.1 10.6-57.1 29.7-79l80.4-91.9c3.5-4 6.2-8.7 7.8-13.7l18.8-56.4c45.8 46.4 71.6 109 71.6 174.3zM75.6 457.4L49.8 429.5l5.4 5.4 105-105c32.4-32.4 76.2-50.5 122-50.5s89.6 18.2 122 50.5l21.3 21.3-72.9 26.5c-5.5 2-10.5 5.2-14.6 9.3l-73.8 73.8c-22.5 22.5-53 35.1-84.9 35.1l-15.6 0c-33.5 0-65.5-14-88.2-38.6z" />
    </Icon>
);

export default Corn;