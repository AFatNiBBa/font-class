
import { Icon } from "../../index";

/**
 * A component that renders the `atom` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/atom?s=light atom}
 * @preview ![atom](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIyIDQyMS4zYy0uMyAuNy0uNiAxLjMtLjkgMS45QzMwMS40IDQ2NC43IDI3OCA0ODAgMjU2IDQ4MHMtNDUuNC0xNS4zLTY1LjEtNTYuN2MtLjMtLjYtLjYtMS4zLS45LTEuOWMyMS4xLTUgNDMuMy0xMi42IDY2LTIyLjZjMjIuNyA5LjkgNDQuOSAxNy41IDY2IDIyLjZ6TTIxNy4xIDM3OS44Yy0xMy40IDQuOC0yNi40IDguNi0zOC43IDExLjRjLTQtMTIuNi03LjQtMjYuMy0xMC4xLTQwLjljOC40IDUuNyAxNy4xIDExLjIgMjYgMTYuNmM3LjYgNC42IDE1LjIgOC45IDIyLjggMTN6bTExNi40IDExLjRjLTEyLjMtMi44LTI1LjMtNi41LTM4LjctMTEuNGM3LjYtNC4xIDE1LjItOC40IDIyLjgtMTNjOC45LTUuNCAxNy42LTEwLjkgMjYtMTYuNmMtMi44IDE0LjYtNi4yIDI4LjMtMTAuMSA0MC45em0tMzIuMy01MS44Yy0xNS4zIDkuMi0zMC40IDE3LjItNDUuMiAyNC4yYy0xNC44LTctMjkuOS0xNS4xLTQ1LjItMjQuMmMtMTcuNS0xMC41LTMzLjctMjEuNS00OC41LTMyLjhjLTEuNS0xNi4yLTIuMy0zMy4xLTIuMy01MC42cy44LTM0LjQgMi4zLTUwLjZjMTQuOC0xMS4zIDMxLjEtMjIuMyA0OC41LTMyLjhjMTUuMy05LjIgMzAuNC0xNy4yIDQ1LjItMjQuMmMxNC44IDcgMjkuOSAxNS4xIDQ1LjIgMjQuMmMxNy41IDEwLjUgMzMuNyAyMS41IDQ4LjUgMzIuOGMxLjUgMTYuMiAyLjMgMzMuMSAyLjMgNTAuNnMtLjggMzQuNC0yLjMgNTAuNmMtMTQuOCAxMS4zLTMxLjEgMjIuMy00OC41IDMyLjh6bTY0LjMgNTYuN2M2LjYtMjIuMSAxMS41LTQ2LjYgMTQuNi03Mi43YzE2LjctMTMuNSAzMS43LTI3LjUgNDQuNy00MS44bC44IDEuMmMyNSAzNy43IDI2LjggNjYuMSAxNiA4NS42Yy0xMC40IDE4LjctMzMuNiAzMS03Ni4xIDI3Ljd6bTE4LjEtMTE4LjJjLjMtNy4yIC40LTE0LjUgLjQtMjEuOXMtLjEtMTQuNy0uNC0yMS45YzcuNyA3LjMgMTQuOCAxNC42IDIxLjMgMjEuOWMtNi41IDcuMy0xMy42IDE0LjctMjEuMyAyMS45em04NiAxMDYuMWMyMC43LTM3LjEgOS40LTgyLjgtMjMuNi0xMjhjMzMtNDUuMiA0NC4zLTkwLjkgMjMuNi0xMjhjLTIwLjItMzYuMy02Mi41LTQ5LjMtMTE1LjItNDMuMkMzMzIuNCAzMi43IDI5OC44IDAgMjU2IDBzLTc2LjQgMzIuNy05OC40IDg0LjhjLTUyLjctNi4xLTk1IDYuOC0xMTUuMiA0My4yQzIxLjcgMTY1LjEgMzMgMjEwLjggNjYgMjU2Yy0zMyA0NS4yLTQ0LjMgOTAuOS0yMy42IDEyOGMyMC4yIDM2LjMgNjIuNSA0OS4zIDExNS4yIDQzLjJjMjIgNTIuMSA1NS43IDg0LjggOTguNCA4NC44czc2LjQtMzIuNyA5OC40LTg0LjhjNTIuNyA2LjEgOTUtNi44IDExNS4yLTQzLjJ6bS0yOC0yNDAuNGMxMC44IDE5LjUgOS4xIDQ3LjktMTYgODUuNmwtLjggMS4yYy0xMy0xNC4yLTI4LTI4LjItNDQuNy00MS44Yy0zLjEtMjYuMS04LTUwLjYtMTQuNi03Mi43YzQyLjYtMy4zIDY1LjcgOC45IDc2LjEgMjcuN3pNMzIxLjEgODguN2MuMyAuNiAuNiAxLjMgLjkgMS45Yy0yMS4xIDUtNDMuMyAxMi42LTY2IDIyLjZjLTIyLjctOS45LTQ0LjktMTcuNS02Ni0yMi42Yy4zLS43IC42LTEuMyAuOS0xLjlDMjEwLjYgNDcuMyAyMzQgMzIgMjU2IDMyczQ1LjQgMTUuMyA2NS4xIDU2Ljd6bTEyLjUgMzIuMWM0IDEyLjYgNy40IDI2LjMgMTAuMSA0MC45Yy04LjQtNS43LTE3LjEtMTEuMi0yNi0xNi41Yy03LjYtNC42LTE1LjItOC45LTIyLjgtMTNjMTMuNC00LjggMjYuNC04LjYgMzguNy0xMS4zem0tMTU1LjEgMGMxMi4zIDIuOCAyNS4zIDYuNSAzOC43IDExLjNjLTcuNiA0LjEtMTUuMiA4LjQtMjIuOCAxM2MtOC45IDUuNC0xNy42IDEwLjktMjYgMTYuNWMyLjgtMTQuNiA2LjItMjguMyAxMC4xLTQwLjl6bS0zMi00LjljLTYuNiAyMi4xLTExLjUgNDYuNi0xNC42IDcyLjdjLTE2LjcgMTMuNS0zMS43IDI3LjUtNDQuNyA0MS44bC0uOC0xLjJjLTI1LTM3LjctMjYuOC02Ni4xLTE2LTg1LjZjMTAuNC0xOC43IDMzLjYtMzEgNzYuMS0yNy43ek04Ni4zIDI4Mi44bC44LTEuMmMxMyAxNC4yIDI4IDI4LjIgNDQuNyA0MS44YzMuMSAyNi4xIDggNTAuNiAxNC42IDcyLjdjLTQyLjYgMy4zLTY1LjctOC45LTc2LjEtMjcuN2MtMTAuOC0xOS41LTkuMS00Ny45IDE2LTg1LjZ6bTQyLjEtNDguOGMtLjMgNy4yLS40IDE0LjUtLjQgMjEuOXMuMSAxNC43IC40IDIxLjljLTcuNy03LjMtMTQuOC0xNC42LTIxLjMtMjEuOWM2LjUtNy4zIDEzLjYtMTQuNyAyMS4zLTIxLjl6TTI1NiAyODBhMjQgMjQgMCAxIDAgMC00OCAyNCAyNCAwIDEgMCAwIDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Atom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M322 421.3c-.3 .7-.6 1.3-.9 1.9C301.4 464.7 278 480 256 480s-45.4-15.3-65.1-56.7c-.3-.6-.6-1.3-.9-1.9c21.1-5 43.3-12.6 66-22.6c22.7 9.9 44.9 17.5 66 22.6zM217.1 379.8c-13.4 4.8-26.4 8.6-38.7 11.4c-4-12.6-7.4-26.3-10.1-40.9c8.4 5.7 17.1 11.2 26 16.6c7.6 4.6 15.2 8.9 22.8 13zm116.4 11.4c-12.3-2.8-25.3-6.5-38.7-11.4c7.6-4.1 15.2-8.4 22.8-13c8.9-5.4 17.6-10.9 26-16.6c-2.8 14.6-6.2 28.3-10.1 40.9zm-32.3-51.8c-15.3 9.2-30.4 17.2-45.2 24.2c-14.8-7-29.9-15.1-45.2-24.2c-17.5-10.5-33.7-21.5-48.5-32.8c-1.5-16.2-2.3-33.1-2.3-50.6s.8-34.4 2.3-50.6c14.8-11.3 31.1-22.3 48.5-32.8c15.3-9.2 30.4-17.2 45.2-24.2c14.8 7 29.9 15.1 45.2 24.2c17.5 10.5 33.7 21.5 48.5 32.8c1.5 16.2 2.3 33.1 2.3 50.6s-.8 34.4-2.3 50.6c-14.8 11.3-31.1 22.3-48.5 32.8zm64.3 56.7c6.6-22.1 11.5-46.6 14.6-72.7c16.7-13.5 31.7-27.5 44.7-41.8l.8 1.2c25 37.7 26.8 66.1 16 85.6c-10.4 18.7-33.6 31-76.1 27.7zm18.1-118.2c.3-7.2 .4-14.5 .4-21.9s-.1-14.7-.4-21.9c7.7 7.3 14.8 14.6 21.3 21.9c-6.5 7.3-13.6 14.7-21.3 21.9zm86 106.1c20.7-37.1 9.4-82.8-23.6-128c33-45.2 44.3-90.9 23.6-128c-20.2-36.3-62.5-49.3-115.2-43.2C332.4 32.7 298.8 0 256 0s-76.4 32.7-98.4 84.8c-52.7-6.1-95 6.8-115.2 43.2C21.7 165.1 33 210.8 66 256c-33 45.2-44.3 90.9-23.6 128c20.2 36.3 62.5 49.3 115.2 43.2c22 52.1 55.7 84.8 98.4 84.8s76.4-32.7 98.4-84.8c52.7 6.1 95-6.8 115.2-43.2zm-28-240.4c10.8 19.5 9.1 47.9-16 85.6l-.8 1.2c-13-14.2-28-28.2-44.7-41.8c-3.1-26.1-8-50.6-14.6-72.7c42.6-3.3 65.7 8.9 76.1 27.7zM321.1 88.7c.3 .6 .6 1.3 .9 1.9c-21.1 5-43.3 12.6-66 22.6c-22.7-9.9-44.9-17.5-66-22.6c.3-.7 .6-1.3 .9-1.9C210.6 47.3 234 32 256 32s45.4 15.3 65.1 56.7zm12.5 32.1c4 12.6 7.4 26.3 10.1 40.9c-8.4-5.7-17.1-11.2-26-16.5c-7.6-4.6-15.2-8.9-22.8-13c13.4-4.8 26.4-8.6 38.7-11.3zm-155.1 0c12.3 2.8 25.3 6.5 38.7 11.3c-7.6 4.1-15.2 8.4-22.8 13c-8.9 5.4-17.6 10.9-26 16.5c2.8-14.6 6.2-28.3 10.1-40.9zm-32-4.9c-6.6 22.1-11.5 46.6-14.6 72.7c-16.7 13.5-31.7 27.5-44.7 41.8l-.8-1.2c-25-37.7-26.8-66.1-16-85.6c10.4-18.7 33.6-31 76.1-27.7zM86.3 282.8l.8-1.2c13 14.2 28 28.2 44.7 41.8c3.1 26.1 8 50.6 14.6 72.7c-42.6 3.3-65.7-8.9-76.1-27.7c-10.8-19.5-9.1-47.9 16-85.6zm42.1-48.8c-.3 7.2-.4 14.5-.4 21.9s.1 14.7 .4 21.9c-7.7-7.3-14.8-14.6-21.3-21.9c6.5-7.3 13.6-14.7 21.3-21.9zM256 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Atom;