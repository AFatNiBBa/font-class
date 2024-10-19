
import { Icon, generic } from "../../index";

/**
 * A component that renders the `khanda` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/khanda?s=duotone khanda}
 * @preview ![khanda](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTMuOSA2My42bC40IC43Yy4zIC41IC43IDEuMyAxLjIgMi4zYzEgMiAyLjYgNSA0LjQgOC42Yy41IC45IC45IDEuOSAxLjQgMi45YzMuNCA3LjEgNy43IDE2LjMgMTEuOSAyNi41YzIuNCA1LjkgNC44IDEyLjEgNyAxOC4yQzIyNyAxNDEuOCAyMzIgMTYxLjEgMjMyIDE3NnMtNSAzNC4yLTExLjggNTMuMWMtMi4yIDYuMi00LjYgMTIuMy03IDE4LjJjLTQuMiAxMC4yLTguNSAxOS40LTExLjkgMjYuNWMtLjUgMS0xIDItMS40IDIuOWMtMS44IDMuNy0zLjMgNi42LTQuNCA4LjZjLS41IDEtLjkgMS44LTEuMiAyLjNsLS4zIC42Yy0zLjcgNi45LTIuMSAxNS4yIDMuNyAyMC4xTDI0MCAzNDMuNWwwIDE5LjFjNS41IDMuOCAxMSA3LjYgMTYuNSAxMS40YzUuMi0zLjUgMTAuMy03LjEgMTUuNS0xMC42bDAtMTkuOCA0Mi4yLTM1LjJjNS45LTQuOSA3LjUtMTMuMiAzLjgtMTkuOWMtLjItLjMtLjMtLjUtLjQtLjdjLS4zLS41LS43LTEuMy0xLjItMi4zYy0xLTItMi42LTUtNC40LTguNmMtLjUtLjktLjktMS45LTEuNC0yLjljLTMuNC03LjEtNy43LTE2LjMtMTEuOS0yNi41Yy0yLjQtNS45LTQuOC0xMi4xLTctMTguMkMyODUgMjEwLjIgMjgwIDE5MC45IDI4MCAxNzZzNS0zNC4yIDExLjgtNTMuMWMyLjItNi4yIDQuNi0xMi4zIDctMTguMmM0LjItMTAuMiA4LjUtMTkuNCAxMS45LTI2LjVjLjUtMSAxLTIgMS40LTIuOWMxLjgtMy43IDMuMy02LjYgNC40LTguNmMuNS0xIC45LTEuOCAxLjItMi4zbC4zLS42YzMuNy02LjkgMi4xLTE1LjItMy43LTIwLjFsLTQ4LTQwQzI2My4zIDEuMiAyNTkuNiAwIDI1NiAwcy03LjMgMS4yLTEwLjIgMy43bC00OCA0MGMtNS45IDQuOS03LjUgMTMuMi0zLjggMTkuOXpNMjI0IDQ4MGMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMyYzAtMTEuOC02LjQtMjIuMi0xNi0yNy43bDAtMjguOS0xNS41LTEwLjZMMjQwIDQyNC4xbDAgMjguMWMtOS42IDUuNS0xNiAxNS45LTE2IDI3Ljd6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODkuMSA2OS40YzQuOC01LjQgMTIuNy03IDE5LjItMy43TDQwMS4xIDgwYzcuMi0xNC4zIDcuMi0xNC4zIDcuMi0xNC4zczAgMCAwIDBzMCAwIDAgMGwuMSAwIC4zIC4yIDEgLjVjLjggLjQgMiAxLjEgMy41IDEuOWMyLjkgMS43IDcgNC4xIDExLjggNy4zYzkuNiA2LjQgMjIuNSAxNi4xIDM1LjQgMjljMjUuNyAyNS43IDUyLjcgNjUuNiA1Mi43IDExOS4zYzAgNTMuMS0yNi40IDEwMC41LTUxLjIgMTMzLjZjLTEyLjYgMTYuNy0yNS4xIDMwLjMtMzQuNSAzOS43Yy00LjcgNC43LTguNyA4LjQtMTEuNSAxMC45Yy0xLjQgMS4zLTIuNSAyLjItMy4zIDIuOWwtLjkgLjgtLjMgLjItLjEgLjFjMCAwIDAgMCAwIDBzMCAwIDAgMEw0MDEuMSA0MDBsMTAuMiAxMi4zYy01LjEgNC4zLTEyLjQgNC45LTE4LjIgMS42bC03NS42LTQzLTMyLjcgMjIuNSA0NS41IDMxLjNjMS44LS40IDMuNy0uNyA1LjctLjdjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRjLTEyLjIgMC0yMi4zLTkuMS0yMy44LTIxbC01NS43LTM4LjMtNTYuOCAzOS4xQzE5Ny44IDQ2My4zIDE4Ny45IDQ3MiAxNzYgNDcyYy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0YzIuMiAwIDQuNCAuMyA2LjUgLjlsNDUuOC0zMS41LTMyLjctMjIuNS03NS42IDQzYy01LjggMy4zLTEzIDIuNy0xOC4yLTEuNkwxMTIgNDAwYy0xMC4yIDEyLjMtMTAuMiAxMi4zLTEwLjMgMTIuM3MwIDAgMCAwczAgMCAwIDBsLS4xLS4xLS4zLS4yLS45LS44Yy0uOC0uNy0xLjktMS43LTMuMy0yLjljLTIuOC0yLjUtNi43LTYuMi0xMS41LTEwLjljLTkuNC05LjQtMjEuOS0yMy0zNC41LTM5LjdDMjYuNCAzMjQuNSAwIDI3Ny4xIDAgMjI0YzAtNTMuNyAyNi45LTkzLjYgNTIuNy0xMTkuM2MxMi45LTEyLjkgMjUuOC0yMi42IDM1LjQtMjlDOTMgNzIuNSA5NyA3MCA5OS45IDY4LjRjMS41LS44IDIuNi0xLjUgMy41LTEuOWwxLS41IC4zLS4yIC4xIDBjMCAwIDAgMCAwIDBzMCAwIDAgMEwxMTIgODBsLTcuMi0xNC4zYzYuNS0zLjIgMTQuMy0xLjcgMTkuMiAzLjdzNS4zIDEzLjQgMS4zIDE5LjVsLTIuOCA0LjJDMTA1LjIgMTE5IDk2IDE0OS41IDk2IDE4MC42YzAgNTEuOSAyNS42IDEwMC42IDY4LjQgMTMwbDQxLjEgMjguMiA1MS4xIDM1LjEgNTEuMS0zNS4xIDQxLjEtMjguMmM0Mi44LTI5LjQgNjguNC03OCA2OC40LTEzMGMwLTMxLjEtOS4yLTYxLjYtMjYuNS04Ny41bC0yLjgtNC4yYy00LTYtMy41LTE0IDEuMy0xOS41ek0xNDQgMTc2YzAtNDIgMjMuMS03OC42IDU3LjMtOTcuOGMzLjQgNy4xIDcuNyAxNi4zIDExLjkgMjYuNWMyLjQgNS45IDQuOCAxMi4xIDcgMTguMmMtMTcgMTEuNS0yOC4yIDMxLTI4LjIgNTMuMXMxMS4yIDQxLjYgMjguMiA1My4xYy0yLjIgNi4yLTQuNiAxMi4zLTcgMTguMmMtNC4yIDEwLjItOC41IDE5LjQtMTEuOSAyNi41QzE2Ny4xIDI1NC42IDE0NCAyMTggMTQ0IDE3NnptMTU0LjgtNzEuM2M0LjItMTAuMiA4LjUtMTkuNCAxMS45LTI2LjVDMzQ0LjkgOTcuNCAzNjggMTM0IDM2OCAxNzZzLTIzLjEgNzguNi01Ny4zIDk3LjhjLTMuNC03LjEtNy43LTE2LjMtMTEuOS0yNi41Yy0yLjQtNS45LTQuOC0xMi4xLTctMTguMmMxNy0xMS41IDI4LjItMzEgMjguMi01My4xcy0xMS4yLTQxLjYtMjguMi01My4xYzIuMi02LjIgNC42LTEyLjMgNy0xOC4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Khanda: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M193.9 63.6l.4 .7c.3 .5 .7 1.3 1.2 2.3c1 2 2.6 5 4.4 8.6c.5 .9 .9 1.9 1.4 2.9c3.4 7.1 7.7 16.3 11.9 26.5c2.4 5.9 4.8 12.1 7 18.2C227 141.8 232 161.1 232 176s-5 34.2-11.8 53.1c-2.2 6.2-4.6 12.3-7 18.2c-4.2 10.2-8.5 19.4-11.9 26.5c-.5 1-1 2-1.4 2.9c-1.8 3.7-3.3 6.6-4.4 8.6c-.5 1-.9 1.8-1.2 2.3l-.3 .6c-3.7 6.9-2.1 15.2 3.7 20.1L240 343.5l0 19.1c5.5 3.8 11 7.6 16.5 11.4c5.2-3.5 10.3-7.1 15.5-10.6l0-19.8 42.2-35.2c5.9-4.9 7.5-13.2 3.8-19.9c-.2-.3-.3-.5-.4-.7c-.3-.5-.7-1.3-1.2-2.3c-1-2-2.6-5-4.4-8.6c-.5-.9-.9-1.9-1.4-2.9c-3.4-7.1-7.7-16.3-11.9-26.5c-2.4-5.9-4.8-12.1-7-18.2C285 210.2 280 190.9 280 176s5-34.2 11.8-53.1c2.2-6.2 4.6-12.3 7-18.2c4.2-10.2 8.5-19.4 11.9-26.5c.5-1 1-2 1.4-2.9c1.8-3.7 3.3-6.6 4.4-8.6c.5-1 .9-1.8 1.2-2.3l.3-.6c3.7-6.9 2.1-15.2-3.7-20.1l-48-40C263.3 1.2 259.6 0 256 0s-7.3 1.2-10.2 3.7l-48 40c-5.9 4.9-7.5 13.2-3.8 19.9zM224 480c0 17.7 14.3 32 32 32s32-14.3 32-32c0-11.8-6.4-22.2-16-27.7l0-28.9-15.5-10.6L240 424.1l0 28.1c-9.6 5.5-16 15.9-16 27.7z" />
            <path d="M389.1 69.4c4.8-5.4 12.7-7 19.2-3.7L401.1 80c7.2-14.3 7.2-14.3 7.2-14.3s0 0 0 0s0 0 0 0l.1 0 .3 .2 1 .5c.8 .4 2 1.1 3.5 1.9c2.9 1.7 7 4.1 11.8 7.3c9.6 6.4 22.5 16.1 35.4 29c25.7 25.7 52.7 65.6 52.7 119.3c0 53.1-26.4 100.5-51.2 133.6c-12.6 16.7-25.1 30.3-34.5 39.7c-4.7 4.7-8.7 8.4-11.5 10.9c-1.4 1.3-2.5 2.2-3.3 2.9l-.9 .8-.3 .2-.1 .1c0 0 0 0 0 0s0 0 0 0L401.1 400l10.2 12.3c-5.1 4.3-12.4 4.9-18.2 1.6l-75.6-43-32.7 22.5 45.5 31.3c1.8-.4 3.7-.7 5.7-.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-12.2 0-22.3-9.1-23.8-21l-55.7-38.3-56.8 39.1C197.8 463.3 187.9 472 176 472c-13.3 0-24-10.7-24-24s10.7-24 24-24c2.2 0 4.4 .3 6.5 .9l45.8-31.5-32.7-22.5-75.6 43c-5.8 3.3-13 2.7-18.2-1.6L112 400c-10.2 12.3-10.2 12.3-10.3 12.3s0 0 0 0s0 0 0 0l-.1-.1-.3-.2-.9-.8c-.8-.7-1.9-1.7-3.3-2.9c-2.8-2.5-6.7-6.2-11.5-10.9c-9.4-9.4-21.9-23-34.5-39.7C26.4 324.5 0 277.1 0 224c0-53.7 26.9-93.6 52.7-119.3c12.9-12.9 25.8-22.6 35.4-29C93 72.5 97 70 99.9 68.4c1.5-.8 2.6-1.5 3.5-1.9l1-.5 .3-.2 .1 0c0 0 0 0 0 0s0 0 0 0L112 80l-7.2-14.3c6.5-3.2 14.3-1.7 19.2 3.7s5.3 13.4 1.3 19.5l-2.8 4.2C105.2 119 96 149.5 96 180.6c0 51.9 25.6 100.6 68.4 130l41.1 28.2 51.1 35.1 51.1-35.1 41.1-28.2c42.8-29.4 68.4-78 68.4-130c0-31.1-9.2-61.6-26.5-87.5l-2.8-4.2c-4-6-3.5-14 1.3-19.5zM144 176c0-42 23.1-78.6 57.3-97.8c3.4 7.1 7.7 16.3 11.9 26.5c2.4 5.9 4.8 12.1 7 18.2c-17 11.5-28.2 31-28.2 53.1s11.2 41.6 28.2 53.1c-2.2 6.2-4.6 12.3-7 18.2c-4.2 10.2-8.5 19.4-11.9 26.5C167.1 254.6 144 218 144 176zm154.8-71.3c4.2-10.2 8.5-19.4 11.9-26.5C344.9 97.4 368 134 368 176s-23.1 78.6-57.3 97.8c-3.4-7.1-7.7-16.3-11.9-26.5c-2.4-5.9-4.8-12.1-7-18.2c17-11.5 28.2-31 28.2-53.1s-11.2-41.6-28.2-53.1c2.2-6.2 4.6-12.3 7-18.2z" />
    </Icon>
);

export default Khanda;