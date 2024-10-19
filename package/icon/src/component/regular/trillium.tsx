
import { Icon } from "../../index";

/**
 * A component that renders the `trillium` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trillium?s=regular trillium}
 * @preview ![trillium](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjAzLjMgMTYuMmMxMS44LTExIDI5LjgtMTEgNDEuNSAwYzEyLjEgMTEuMyAzMy4xIDMyLjUgNTEuMiA1OC44YzE3LjkgMjYgMzQuMiA1OC45IDM0LjIgOTMuNGMwIDcuMy0uOCAxNC41LTIuMiAyMS41YzcuMyAyLjMgMTQuNCA1LjMgMjEuMiA5LjNjMCAwIDAgMCAwIDBjMjkuOSAxNy4yIDUwLjQgNDcuNiA2NC4yIDc1LjljMTMuOSAyOC43IDIxLjkgNTcuMyAyNS43IDczLjVjMy44IDE1LjgtNS40IDMxLjUtMjAuOSAzNi4xYy0xNiA0LjgtNDQuOSAxMi4yLTc2LjggMTQuNmMtMzEuNSAyLjMtNjguMy0uMS05OC4yLTE3LjJjLTctNC0xMy40LTguNy0xOS4xLTE0Yy01LjcgNS4zLTEyLjEgMTAtMTkuMSAxNGMtMjkuOSAxNy4yLTY2LjcgMTkuNi05OC4yIDE3LjJjLTMxLjktMi40LTYwLjktOS44LTc2LjgtMTQuNkMxNC4zIDM4MCA1LjEgMzY0LjQgOC44IDM0OC41YzMuOC0xNi4yIDExLjgtNDQuOCAyNS43LTczLjVjMTMuNy0yOC4zIDM0LjItNTguOCA2NC4yLTc1LjljMCAwIDAgMCAwIDBjNi45LTMuOSAxNC03IDIxLjMtOS4zYy0xLjQtNi45LTIuMi0xNC4xLTIuMi0yMS40YzAtMzQuNCAxNi40LTY3LjQgMzQuMi05My40YzE4LjEtMjYuMyAzOS4xLTQ3LjUgNTEuMi01OC44em0xMjIgMjI0LjVzMCAwIDAgMGMtNi45LTQtMTQuMi02LjMtMjEuNi03LjNjLTkuOS0xLjMtMTguNi03LTIzLjYtMTUuNnMtNS44LTE5LTItMjguMmMyLjctNi42IDQuMS0xMy43IDQuMS0yMS4zYzAgMCAwIDAgMCAwYzAtMjAuMS0xMC00My4yLTI1LjgtNjYuMkMyNDUuOSA4Ni45IDIzNCA3My40IDIyNCA2My4xYy05LjkgMTAuMi0yMS45IDIzLjgtMzIuNCAzOS4xYy0xNS44IDIzLTI1LjggNDYuMS0yNS44IDY2LjJjMCA3LjYgMS41IDE0LjcgNC4xIDIxLjNjMy43IDkuMiAzIDE5LjYtMiAyOC4ycy0xMy44IDE0LjMtMjMuNiAxNS42Yy03LjQgLjktMTQuOCAzLjMtMjEuNyA3LjNDMTA1IDI1MC45IDg5LjggMjcxLjEgNzcuNyAyOTZjLTggMTYuNi0xMy45IDMzLjUtMTcuOCA0Ny4xYzEzLjkgMy40IDMxLjcgNi45IDUwLjMgOC4zYzI3LjkgMi4xIDUzLjEtLjkgNzAuOC0xMWM3LjEtNC4xIDEyLjktOS4zIDE3LjQtMTUuNGM2LTggMTUuNS0xMi44IDI1LjYtMTIuOHMxOS41IDQuNyAyNS42IDEyLjhjNC41IDYgMTAuNCAxMS4zIDE3LjQgMTUuNGMxNy42IDEwLjEgNDIuOSAxMy4xIDcwLjggMTFjMTguNi0xLjQgMzYuNC00LjkgNTAuMy04LjNjLTQtMTMuNi05LjgtMzAuNS0xNy44LTQ3LjFjLTEyLjEtMjUtMjcuMy00NS4xLTQ0LjktNTUuMnpNMTAwLjggMTIzLjRjLTMgMTEuOC00LjggMjQuMS00LjggMzYuNmMwIDYuMiAuNCAxMi4zIDEuMyAxOC4zYy03LjggMi43LTE1LjQgNi4xLTIyLjcgMTAuM2MtOS45IDUuNy0xOC44IDEyLjYtMjYuOSAyMC4yQzE5IDE4Mi43IDUuNiAxNTcuNiAwIDE0NC4zYy01LjgtMTMuOCAzLTI5LjEgMTcuOS0zMWMxNC43LTEuOSA0NC40LTIuOCA4MyAxMHptMjQ5LjkgNTVjLjktNiAxLjMtMTIuMSAxLjMtMTguNGMwLTEyLjUtMS44LTI0LjgtNC44LTM2LjZjMzguNi0xMi44IDY4LjItMTEuOSA4My0xMGMxNC45IDEuOSAyMy43IDE3LjEgMTcuOSAzMWMtNS42IDEzLjMtMTkgMzguNC00Ny43IDY0LjZjLTguMS03LjctMTcuMS0xNC42LTI3LTIwLjNjLTcuMy00LjItMTQuOS03LjYtMjIuNi0xMC4zek0yMDUuMSA0OTcuMWMtOC4zLTEyLjYtMjIuOC0zOC4yLTMxLTc0LjNjOS44LTMuMSAxOS40LTcuMiAyOC41LTEyLjVjNy44LTQuNSAxNC45LTkuNyAyMS40LTE1LjRjNi41IDUuOCAxMy42IDExIDIxLjQgMTUuNGM5LjIgNS4zIDE4LjggOS40IDI4LjYgMTIuNWMtOC4yIDM2LjEtMjIuNiA2MS42LTMxIDc0LjJjLTkuMSAxMy43LTI4LjggMTMuNy0zNy45IDB6TTE4NCAyNDBhNDAgNDAgMCAxIDEgODAgMCA0MCA0MCAwIDEgMSAtODAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Trillium: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M203.3 16.2c11.8-11 29.8-11 41.5 0c12.1 11.3 33.1 32.5 51.2 58.8c17.9 26 34.2 58.9 34.2 93.4c0 7.3-.8 14.5-2.2 21.5c7.3 2.3 14.4 5.3 21.2 9.3c0 0 0 0 0 0c29.9 17.2 50.4 47.6 64.2 75.9c13.9 28.7 21.9 57.3 25.7 73.5c3.8 15.8-5.4 31.5-20.9 36.1c-16 4.8-44.9 12.2-76.8 14.6c-31.5 2.3-68.3-.1-98.2-17.2c-7-4-13.4-8.7-19.1-14c-5.7 5.3-12.1 10-19.1 14c-29.9 17.2-66.7 19.6-98.2 17.2c-31.9-2.4-60.9-9.8-76.8-14.6C14.3 380 5.1 364.4 8.8 348.5c3.8-16.2 11.8-44.8 25.7-73.5c13.7-28.3 34.2-58.8 64.2-75.9c0 0 0 0 0 0c6.9-3.9 14-7 21.3-9.3c-1.4-6.9-2.2-14.1-2.2-21.4c0-34.4 16.4-67.4 34.2-93.4c18.1-26.3 39.1-47.5 51.2-58.8zm122 224.5s0 0 0 0c-6.9-4-14.2-6.3-21.6-7.3c-9.9-1.3-18.6-7-23.6-15.6s-5.8-19-2-28.2c2.7-6.6 4.1-13.7 4.1-21.3c0 0 0 0 0 0c0-20.1-10-43.2-25.8-66.2C245.9 86.9 234 73.4 224 63.1c-9.9 10.2-21.9 23.8-32.4 39.1c-15.8 23-25.8 46.1-25.8 66.2c0 7.6 1.5 14.7 4.1 21.3c3.7 9.2 3 19.6-2 28.2s-13.8 14.3-23.6 15.6c-7.4 .9-14.8 3.3-21.7 7.3C105 250.9 89.8 271.1 77.7 296c-8 16.6-13.9 33.5-17.8 47.1c13.9 3.4 31.7 6.9 50.3 8.3c27.9 2.1 53.1-.9 70.8-11c7.1-4.1 12.9-9.3 17.4-15.4c6-8 15.5-12.8 25.6-12.8s19.5 4.7 25.6 12.8c4.5 6 10.4 11.3 17.4 15.4c17.6 10.1 42.9 13.1 70.8 11c18.6-1.4 36.4-4.9 50.3-8.3c-4-13.6-9.8-30.5-17.8-47.1c-12.1-25-27.3-45.1-44.9-55.2zM100.8 123.4c-3 11.8-4.8 24.1-4.8 36.6c0 6.2 .4 12.3 1.3 18.3c-7.8 2.7-15.4 6.1-22.7 10.3c-9.9 5.7-18.8 12.6-26.9 20.2C19 182.7 5.6 157.6 0 144.3c-5.8-13.8 3-29.1 17.9-31c14.7-1.9 44.4-2.8 83 10zm249.9 55c.9-6 1.3-12.1 1.3-18.4c0-12.5-1.8-24.8-4.8-36.6c38.6-12.8 68.2-11.9 83-10c14.9 1.9 23.7 17.1 17.9 31c-5.6 13.3-19 38.4-47.7 64.6c-8.1-7.7-17.1-14.6-27-20.3c-7.3-4.2-14.9-7.6-22.6-10.3zM205.1 497.1c-8.3-12.6-22.8-38.2-31-74.3c9.8-3.1 19.4-7.2 28.5-12.5c7.8-4.5 14.9-9.7 21.4-15.4c6.5 5.8 13.6 11 21.4 15.4c9.2 5.3 18.8 9.4 28.6 12.5c-8.2 36.1-22.6 61.6-31 74.2c-9.1 13.7-28.8 13.7-37.9 0zM184 240a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z" />
    </Icon>
);

export default Trillium;