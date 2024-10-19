
import { Icon } from "../../index";

/**
 * A component that renders the `face-beam-hand-over-mouth` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-beam-hand-over-mouth?s=solid face-beam-hand-over-mouth}
 * @preview ![face-beam-hand-over-mouth](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDI1NmMwIDExMy4xLTczLjMgMjA5LjEtMTc1LjEgMjQyLjlsNDktNDljMTguMS0xOC4xIDE4LjctNDcuMSAxLjgtNjUuOWMxNi45LTE4LjggMTYuMy00Ny44LTEuOC02NS45Yy0xLTEtMi4xLTItMy4yLTNjMy43LTE1LjctLjUtMzIuOC0xMi44LTQ1cy0yOS40LTE2LjUtNDUtMTIuOGMtLjktMS4xLTEuOS0yLjItMy0zLjJjLTE4LjctMTguNy00OS4xLTE4LjctNjcuOSAwTDIwNyAzMDEuMWMtOS40LTEzLjctMjUuMS0yMi43LTQzLTIyLjdjLTI4LjcgMC01MiAyMy4zLTUyIDUybDAgNTMuNiAwIDMyLjhjMCAyMS45IDUuNSA0Mi41IDE1LjMgNjAuNUM1MS4yIDQzMyAwIDM1MC41IDAgMjU2QzAgMTE0LjYgMTE0LjYgMCAyNTYgMFM1MTIgMTE0LjYgNTEyIDI1NnpNMjE3LjYgMjEyLjhzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBjMi4xIDIuOCA1LjcgMy45IDguOSAyLjhzNS41LTQuMSA1LjUtNy42YzAtMTcuOS02LjctMzUuNi0xNi42LTQ4LjhjLTkuOC0xMy0yMy45LTIzLjItMzkuNC0yMy4ycy0yOS42IDEwLjItMzkuNCAyMy4yQzEyNi43IDE3Mi40IDEyMCAxOTAuMSAxMjAgMjA4YzAgMy40IDIuMiA2LjUgNS41IDcuNnM2LjkgMCA4LjktMi44YzAgMCAwIDAgMCAwczAgMCAwIDBjMCAwIDAgMCAwIDBsLjItLjJjLjItLjIgLjQtLjUgLjctLjljLjYtLjggMS42LTIgMi44LTMuNGMyLjUtMi44IDYtNi42IDEwLjItMTAuM2M4LjgtNy44IDE4LjgtMTQgMjcuNy0xNHMxOC45IDYuMiAyNy43IDE0YzQuMiAzLjcgNy43IDcuNSAxMC4yIDEwLjNjMS4yIDEuNCAyLjIgMi42IDIuOCAzLjRjLjMgLjQgLjYgLjcgLjcgLjlsLjIgLjJjMCAwIDAgMCAwIDB6bTE2MCAwczAgMCAwIDBzMCAwIDAgMGMyLjEgMi44IDUuNyAzLjkgOC45IDIuOHM1LjUtNC4xIDUuNS03LjZjMC0xNy45LTYuNy0zNS42LTE2LjYtNDguOGMtOS44LTEzLTIzLjktMjMuMi0zOS40LTIzLjJzLTI5LjYgMTAuMi0zOS40IDIzLjJDMjg2LjcgMTcyLjQgMjgwIDE5MC4xIDI4MCAyMDhjMCAzLjQgMi4yIDYuNSA1LjUgNy42czYuOSAwIDguOS0yLjhjMCAwIDAgMCAwIDBzMCAwIDAgMGMwIDAgMCAwIDAgMGwuMi0uMmMuMi0uMiAuNC0uNSAuNy0uOWMuNi0uOCAxLjYtMiAyLjgtMy40YzIuNS0yLjggNi02LjYgMTAuMi0xMC4zYzguOC03LjggMTguOC0xNCAyNy43LTE0czE4LjkgNi4yIDI3LjcgMTRjNC4yIDMuNyA3LjcgNy41IDEwLjIgMTAuM2MxLjIgMS40IDIuMiAyLjYgMi44IDMuNGMuMyAuNCAuNiAuNyAuNyAuOWwuMiAuMmMwIDAgMCAwIDAgMGMwIDAgMCAwIDAgMHptLTc4LjMgNjMuOWM2LjIgNi4yIDYuMiAxNi40IDAgMjIuNkwyNDggMzUwLjZjLTIuNiAyLjYtMi42IDYuOCAwIDkuNHM2LjggMi42IDkuNCAwbDY3LjMtNjcuM2M2LjItNi4yIDE2LjQtNi4yIDIyLjYgMHM2LjIgMTYuNCAwIDIyLjZMMjgwIDM4Mi42Yy0yLjYgMi42LTIuNiA2LjggMCA5LjRzNi44IDIuNiA5LjQgMGw1MS4zLTUxLjNjNi4yLTYuMiAxNi40LTYuMiAyMi42IDBzNi4yIDE2LjQgMCAyMi42TDMxMiA0MTQuNmMtMi42IDIuNi0yLjYgNi44IDAgOS40czYuOCAyLjYgOS40IDBsMTkuMy0xOS4zYzYuMi02LjIgMTYuNC02LjIgMjIuNiAwczYuMiAxNi40IDAgMjIuNmwtNTYuOCA1Ni44QzI4OC43IDUwMiAyNjQuNCA1MTIgMjM5LjIgNTEyYy01Mi42IDAtOTUuMi00Mi42LTk1LjItOTUuMmwwLTMyLjggMC01My42YzAtMTEgOS0yMCAyMC0yMHMyMCA5IDIwIDIwbDAgMTkuN2MwIDcuMSA4LjYgMTAuNyAxMy43IDUuN2w3OS03OWM2LjItNi4yIDE2LjQtNi4yIDIyLjYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FaceBeamHandOverMouth: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256c0 113.1-73.3 209.1-175.1 242.9l49-49c18.1-18.1 18.7-47.1 1.8-65.9c16.9-18.8 16.3-47.8-1.8-65.9c-1-1-2.1-2-3.2-3c3.7-15.7-.5-32.8-12.8-45s-29.4-16.5-45-12.8c-.9-1.1-1.9-2.2-3-3.2c-18.7-18.7-49.1-18.7-67.9 0L207 301.1c-9.4-13.7-25.1-22.7-43-22.7c-28.7 0-52 23.3-52 52l0 53.6 0 32.8c0 21.9 5.5 42.5 15.3 60.5C51.2 433 0 350.5 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256zM217.6 212.8s0 0 0 0s0 0 0 0s0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C126.7 172.4 120 190.1 120 208c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8c0 0 0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2c0 0 0 0 0 0zm160 0s0 0 0 0s0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C286.7 172.4 280 190.1 280 208c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8c0 0 0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2c0 0 0 0 0 0c0 0 0 0 0 0zm-78.3 63.9c6.2 6.2 6.2 16.4 0 22.6L248 350.6c-2.6 2.6-2.6 6.8 0 9.4s6.8 2.6 9.4 0l67.3-67.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L280 382.6c-2.6 2.6-2.6 6.8 0 9.4s6.8 2.6 9.4 0l51.3-51.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L312 414.6c-2.6 2.6-2.6 6.8 0 9.4s6.8 2.6 9.4 0l19.3-19.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-56.8 56.8C288.7 502 264.4 512 239.2 512c-52.6 0-95.2-42.6-95.2-95.2l0-32.8 0-53.6c0-11 9-20 20-20s20 9 20 20l0 19.7c0 7.1 8.6 10.7 13.7 5.7l79-79c6.2-6.2 16.4-6.2 22.6 0z" />
    </Icon>
);

export default FaceBeamHandOverMouth;