
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-halo` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-halo?s=sharp-solid face-smile-halo}
 * @preview ![face-smile-halo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDgwYzAgNDQuMi0xMTQuNiA4MC0yNTYgODBTMCAxMjQuMiAwIDgwUzExNC42IDAgMjU2IDBTNTEyIDM1LjggNTEyIDgwem0tNjQgMGMwLTE3LjctODYtMzItMTkyLTMyUzY0IDYyLjMgNjQgODBzODYgMzIgMTkyIDMyczE5Mi0xNC4zIDE5Mi0zMnpNMTYgMjcyYzAtNDEuOSAxMC43LTgxLjMgMjkuNi0xMTUuNUM5OC4xIDE3OC4zIDE3MyAxOTIgMjU2IDE5MnMxNTcuOS0xMy43IDIxMC40LTM1LjVDNDg1LjMgMTkwLjcgNDk2IDIzMC4xIDQ5NiAyNzJjMCAxMzIuNS0xMDcuNSAyNDAtMjQwIDI0MFMxNiA0MDQuNSAxNiAyNzJ6bTE0OC4xIDg1LjVjLTUuOC02LjctMTUuOS03LjQtMjIuNi0xLjZzLTcuNCAxNS45LTEuNiAyMi42YzIyLjIgMjUuNyA2MSA1My41IDExNi4xIDUzLjVzOTMuOC0yNy45IDExNi4xLTUzLjVjNS44LTYuNyA1LjEtMTYuOC0xLjYtMjIuNnMtMTYuOC01LjEtMjIuNiAxLjZDMzMwIDM3OC4yIDI5OS40IDQwMCAyNTYgNDAwcy03NC0yMS44LTkxLjktNDIuNXptNTMuNS01Ni43czAgMCAwIDBzMCAwIDAgMGMyLjEgMi44IDUuNyAzLjkgOC45IDIuOHM1LjUtNC4xIDUuNS03LjZjMC0xNy45LTYuNy0zNS42LTE2LjYtNDguOGMtOS44LTEzLTIzLjktMjMuMi0zOS40LTIzLjJzLTI5LjYgMTAuMi0zOS40IDIzLjJDMTI2LjcgMjYwLjQgMTIwIDI3OC4xIDEyMCAyOTZjMCAzLjQgMi4yIDYuNSA1LjUgNy42czYuOSAwIDguOS0yLjhjMCAwIDAgMCAwIDBzMCAwIDAgMGMwIDAgMCAwIDAgMGwuMi0uMmMuMi0uMiAuNC0uNSAuNy0uOWMuNi0uOCAxLjYtMiAyLjgtMy40YzIuNS0yLjggNi02LjYgMTAuMi0xMC4zYzguOC03LjggMTguOC0xNCAyNy43LTE0czE4LjkgNi4yIDI3LjcgMTRjNC4yIDMuNyA3LjcgNy41IDEwLjIgMTAuM2MxLjIgMS40IDIuMiAyLjYgMi44IDMuNGMuMyAuNCAuNiAuNyAuNyAuOWwuMiAuMmMwIDAgMCAwIDAgMGMwIDAgMCAwIDAgMHptMTYwIDBzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBjMi4xIDIuOCA1LjcgMy45IDguOSAyLjhzNS41LTQuMSA1LjUtNy42YzAtMTcuOS02LjctMzUuNi0xNi42LTQ4LjhjLTkuOC0xMy0yMy45LTIzLjItMzkuNC0yMy4ycy0yOS42IDEwLjItMzkuNCAyMy4yQzI4Ni43IDI2MC40IDI4MCAyNzguMSAyODAgMjk2YzAgMy40IDIuMiA2LjUgNS41IDcuNnM2LjkgMCA4LjktMi44YzAgMCAwIDAgMCAwczAgMCAwIDBjMCAwIDAgMCAwIDBsLjItLjJjLjItLjIgLjQtLjUgLjctLjljLjYtLjggMS42LTIgMi44LTMuNGMyLjUtMi44IDYtNi42IDEwLjItMTAuM2M4LjgtNy44IDE4LjgtMTQgMjcuNy0xNHMxOC45IDYuMiAyNy43IDE0YzQuMiAzLjcgNy43IDcuNSAxMC4yIDEwLjNjMS4yIDEuNCAyLjIgMi42IDIuOCAzLjRjLjMgLjQgLjYgLjcgLjcgLjlsLjIgLjJjMCAwIDAgMCAwIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const FaceSmileHalo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 80c0 44.2-114.6 80-256 80S0 124.2 0 80S114.6 0 256 0S512 35.8 512 80zm-64 0c0-17.7-86-32-192-32S64 62.3 64 80s86 32 192 32s192-14.3 192-32zM16 272c0-41.9 10.7-81.3 29.6-115.5C98.1 178.3 173 192 256 192s157.9-13.7 210.4-35.5C485.3 190.7 496 230.1 496 272c0 132.5-107.5 240-240 240S16 404.5 16 272zm148.1 85.5c-5.8-6.7-15.9-7.4-22.6-1.6s-7.4 15.9-1.6 22.6c22.2 25.7 61 53.5 116.1 53.5s93.8-27.9 116.1-53.5c5.8-6.7 5.1-16.8-1.6-22.6s-16.8-5.1-22.6 1.6C330 378.2 299.4 400 256 400s-74-21.8-91.9-42.5zm53.5-56.7s0 0 0 0s0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C126.7 260.4 120 278.1 120 296c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8c0 0 0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2c0 0 0 0 0 0c0 0 0 0 0 0zm160 0s0 0 0 0s0 0 0 0s0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C286.7 260.4 280 278.1 280 296c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8c0 0 0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2c0 0 0 0 0 0z" />
    </Icon>
);

export default FaceSmileHalo;