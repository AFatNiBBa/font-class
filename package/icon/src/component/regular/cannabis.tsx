
import { Icon } from "../../index";

/**
 * A component that renders the `cannabis` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cannabis?s=regular cannabis}
 * @preview ![cannabis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjc1LjkgMTAuNkMyNzEuNSA0IDI2NCAwIDI1NiAwcy0xNS41IDQtMTkuOSAxMC42Yy0xNi4xIDI0LjEtMzYuNSA2Ny4yLTQ5LjIgMTE1LjFjLTYuOCAyNS44LTExLjcgNTQuMi0xMiA4Mi41Yy0xNS0xMC4zLTMwLjctMTktNDUuOS0yNi40Yy0zNC41LTE2LjctNjguNi0yNy05Mi4zLTMxLjdjLTcuOS0xLjYtMTYgLjktMjEuNyA2LjZzLTguMSAxMy44LTYuNSAyMS43YzYuOSAzNC40IDI2LjUgOTMuNiA2Mi4zIDE0My4yYy0yMS4zIDguMS0zOS4zIDE3LjUtNTAuNSAyMy43QzEyLjcgMzQ5LjUgOCAzNTcuNiA4IDM2Ni4zczQuNyAxNi44IDEyLjQgMjFjMTQuNiA4LjEgNDAuNSAyMS41IDcwLjEgMzAuNGMxNy42IDUuMyAzNy44IDkuNSA1OC41IDkuM2wtNS44IDIzLjJjLTIuMyA5LjEgLjkgMTguNyA4LjIgMjQuNXMxNy4zIDcgMjUuNyAyLjhMMjMyIDQ1MC4ybDAgMzcuOGMwIDEzLjMgMTAuNyAyNCAyNCAyNHMyNC0xMC43IDI0LTI0bDAtMzcuOCA1NC45IDI3LjNjOC40IDQuMiAxOC40IDMuMSAyNS43LTIuOHMxMC41LTE1LjUgOC4yLTI0LjVMMzYzLjEgNDI3YzIwLjYgLjIgNDAuOC00IDU4LjUtOS4zYzI5LjYtOC45IDU1LjYtMjIuMyA3MC4xLTMwLjRjNy42LTQuMiAxMi40LTEyLjMgMTIuNC0yMXMtNC43LTE2LjgtMTIuNC0yMWMtMTEuMS02LjItMjkuMS0xNS42LTUwLjUtMjMuN0M0NzcgMjcyLjIgNDk2LjYgMjEzIDUwMy41IDE3OC40YzEuNi03LjktLjktMTYtNi41LTIxLjdzLTEzLjgtOC4yLTIxLjctNi42Yy0yMy43IDQuNy01Ny43IDE1LTkyLjMgMzEuN2MtMTUuMyA3LjQtMzAuOSAxNi4xLTQ1LjkgMjYuNGMtLjMtMjguMy01LjItNTYuNy0xMi04Mi41Yy0xMi42LTQ3LjktMzMtOTEuMS00OS4yLTExNS4xek0yODAgMzk2LjZsMC01Mi42YzAtMTMuMy0xMC43LTI0LTI0LTI0cy0yNCAxMC43LTI0IDI0bDAgNTIuNi0yOS42IDE0LjcgMi03LjhjMi4yLTguNi0uNi0xNy42LTcuMS0yMy42cy0xNS44LTcuOC0yNC4xLTQuOWMtMTkgNi43LTQzLjMgNC4zLTY4LjctMy4zYy01LjUtMS42LTEwLjgtMy41LTE2LTUuNGM5LjMtMy41IDE5LjItNi43IDI5LjMtOWM4LjUtMS45IDE1LjItOC4zIDE3LjctMTYuNnMuMy0xNy4zLTUuOC0yMy41Yy0zMC4xLTMxLTUwLjktNzMuOC02My4xLTEwOS4yYzEzLjEgNC41IDI3LjMgMTAuMSA0MS43IDE3LjFDMTM5IDI0MCAxNjguOCAyNjAgMTg5LjYgMjg1YzcuNCA5IDIwLjIgMTEuMyAzMC4zIDUuNXMxNC43LTE3LjkgMTAuOC0yOC45Yy0xMi40LTM0LjgtOC45LTc5LjggMi42LTEyMy43YzYuMi0yMy41IDE0LjQtNDUuNCAyMi43LTYzLjZjOC4zIDE4LjIgMTYuNSA0MC4yIDIyLjcgNjMuNmMxMS42IDQzLjggMTUgODguOCAyLjYgMTIzLjdjLTMuOSAxMSAuNiAyMy4xIDEwLjggMjguOXMyMi45IDMuNCAzMC4zLTUuNWMyMC44LTI1LjEgNTAuNi00NSA4MS41LTU5LjljMTQuMy02LjkgMjguNi0xMi42IDQxLjctMTcuMWMtMTEuMSAzMi0yOS4yIDcwLjItNTUgMTAwLjNjLTIuNiAzLjEtNS4zIDYtOC4xIDguOWMtNiA2LjItOC4yIDE1LjItNS44IDIzLjVzOS4yIDE0LjYgMTcuNyAxNi42YzEwLjEgMi4zIDIwIDUuNSAyOS4zIDljLTUuMiAyLTEwLjUgMy44LTE2IDUuNGMtMjUuNCA3LjctNDkuNyAxMC02OC43IDMuM2MtOC4zLTIuOS0xNy42LTEuMS0yNC4xIDQuOXMtOS4zIDE1LTcuMSAyMy42bDIgNy44TDI4MCAzOTYuNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cannabis: typeof Icon = x => (
    <Icon {...x}>
        <path d="M275.9 10.6C271.5 4 264 0 256 0s-15.5 4-19.9 10.6c-16.1 24.1-36.5 67.2-49.2 115.1c-6.8 25.8-11.7 54.2-12 82.5c-15-10.3-30.7-19-45.9-26.4c-34.5-16.7-68.6-27-92.3-31.7c-7.9-1.6-16 .9-21.7 6.6s-8.1 13.8-6.5 21.7c6.9 34.4 26.5 93.6 62.3 143.2c-21.3 8.1-39.3 17.5-50.5 23.7C12.7 349.5 8 357.6 8 366.3s4.7 16.8 12.4 21c14.6 8.1 40.5 21.5 70.1 30.4c17.6 5.3 37.8 9.5 58.5 9.3l-5.8 23.2c-2.3 9.1 .9 18.7 8.2 24.5s17.3 7 25.7 2.8L232 450.2l0 37.8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-37.8 54.9 27.3c8.4 4.2 18.4 3.1 25.7-2.8s10.5-15.5 8.2-24.5L363.1 427c20.6 .2 40.8-4 58.5-9.3c29.6-8.9 55.6-22.3 70.1-30.4c7.6-4.2 12.4-12.3 12.4-21s-4.7-16.8-12.4-21c-11.1-6.2-29.1-15.6-50.5-23.7C477 272.2 496.6 213 503.5 178.4c1.6-7.9-.9-16-6.5-21.7s-13.8-8.2-21.7-6.6c-23.7 4.7-57.7 15-92.3 31.7c-15.3 7.4-30.9 16.1-45.9 26.4c-.3-28.3-5.2-56.7-12-82.5c-12.6-47.9-33-91.1-49.2-115.1zM280 396.6l0-52.6c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 52.6-29.6 14.7 2-7.8c2.2-8.6-.6-17.6-7.1-23.6s-15.8-7.8-24.1-4.9c-19 6.7-43.3 4.3-68.7-3.3c-5.5-1.6-10.8-3.5-16-5.4c9.3-3.5 19.2-6.7 29.3-9c8.5-1.9 15.2-8.3 17.7-16.6s.3-17.3-5.8-23.5c-30.1-31-50.9-73.8-63.1-109.2c13.1 4.5 27.3 10.1 41.7 17.1C139 240 168.8 260 189.6 285c7.4 9 20.2 11.3 30.3 5.5s14.7-17.9 10.8-28.9c-12.4-34.8-8.9-79.8 2.6-123.7c6.2-23.5 14.4-45.4 22.7-63.6c8.3 18.2 16.5 40.2 22.7 63.6c11.6 43.8 15 88.8 2.6 123.7c-3.9 11 .6 23.1 10.8 28.9s22.9 3.4 30.3-5.5c20.8-25.1 50.6-45 81.5-59.9c14.3-6.9 28.6-12.6 41.7-17.1c-11.1 32-29.2 70.2-55 100.3c-2.6 3.1-5.3 6-8.1 8.9c-6 6.2-8.2 15.2-5.8 23.5s9.2 14.6 17.7 16.6c10.1 2.3 20 5.5 29.3 9c-5.2 2-10.5 3.8-16 5.4c-25.4 7.7-49.7 10-68.7 3.3c-8.3-2.9-17.6-1.1-24.1 4.9s-9.3 15-7.1 23.6l2 7.8L280 396.6z" />
    </Icon>
);

export default Cannabis;