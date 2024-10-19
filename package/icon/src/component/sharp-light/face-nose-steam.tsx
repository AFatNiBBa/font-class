
import { Icon } from "../../index";

/**
 * A component that renders the `face-nose-steam` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-nose-steam?s=sharp-light face-nose-steam}
 * @preview ![face-nose-steam](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMjU2QzY0IDEzMi4zIDE2NC4zIDMyIDI4OCAzMnMyMjQgMTAwLjMgMjI0IDIyNGMwIDEwLjEtLjcgMjAuMS0yIDI5LjlsMzEuNyA0LjJjMS41LTExLjIgMi4zLTIyLjYgMi4zLTM0LjFDNTQ0IDExNC42IDQyOS40IDAgMjg4IDBTMzIgMTE0LjYgMzIgMjU2YzAgMTEuNiAuOCAyMi45IDIuMyAzNC4xTDY2IDI4NS45Yy0xLjMtOS44LTItMTkuNy0yLTI5Ljl6TTI4OCA0ODBjLTE1LjQgMC0zMC4zLTEuNS00NC44LTQuNWwtNi40IDMxLjRjMTYuNiAzLjQgMzMuNyA1LjEgNTEuMiA1LjFzMzQuNi0xLjggNTEuMi01LjFsLTYuNC0zMS40Yy0xNC41IDIuOS0yOS41IDQuNS00NC44IDQuNXpNMjE0IDI5MC4zbC02Ny4xIDQwLjNjLTEuMS0xLjQtMi4zLTIuOC0zLjctNC4xYy0xOC43LTE4LjctNDkuMS0xOC43LTY3LjkgMGMtMi43IDIuNy01IDUuNi02LjkgOC44Yy0xMy43LTEuMi0yNy44IDMuNC0zOC4zIDEzLjljLTE3LjkgMTcuOS0xOC43IDQ2LjQtMi41IDY1LjJjLTEwLjMgMjMuNC01LjggNTEuOCAxMy40IDcwLjlzNDcuNSAyMy42IDcwLjkgMTMuNGMxOC45IDE2LjIgNDcuMyAxNS40IDY1LjItMi41YzEwLjUtMTAuNSAxNS4xLTI0LjYgMTMuOS0zOC4zYzMuMS0xLjkgNi4xLTQuMiA4LjgtNi45YzE4LjctMTguNyAxOC43LTQ5LjEgMC02Ny45Yy0xLjMtMS4zLTIuNy0yLjUtNC4xLTMuN2w0MC4zLTY3LjEtMjItMjJ6bS02NS4zIDc2LjVsMjYuOS0xNi4yLTE2LjIgMjYuOS0xMS4zIDE4LjggMjEuNCA1YzIuOCAuNyA1LjQgMi4xIDcuNiA0LjNjNi4yIDYuMiA2LjIgMTYuNCAwIDIyLjZjLTIuMyAyLjMtNS4yIDMuOC04LjIgNC40bC0yMC4zIDQgOSAxOC42YzIuOSA2IDEuOCAxMy4zLTMuMSAxOC4yYy02LjIgNi4yLTE2LjQgNi4yLTIyLjYgMGMtMS0xLTEuOS0yLjItMi42LTMuNGwtOS4xLTE1LjktMTQuNSAxMS4yYy0xMi41IDkuNi0zMC42IDguNy00Mi4xLTIuOHMtMTIuNC0yOS41LTIuOC00Mi4xTDcxLjkgNDA2bC0xNS45LTkuMWMtMS4yLS43LTIuMy0xLjUtMy40LTIuNmMtNi4yLTYuMi02LjItMTYuNCAwLTIyLjZjNC45LTQuOSAxMi4zLTYgMTguMi0zLjFsMTguNiA5IDQtMjAuM2MuNi0zIDItNS44IDQuNC04LjJjNi4yLTYuMiAxNi40LTYuMiAyMi42IDBjMi4yIDIuMiAzLjYgNC44IDQuMyA3LjZsNSAyMS40IDE4LjgtMTEuM3ptMjExLjYtNzUuNmwtMjEuOSAyMiA0MC4zIDY3LjFjLTEuNCAxLjEtMi44IDIuNC00LjEgMy43Yy0xOC43IDE4LjctMTguNyA0OS4xIDAgNjcuOWMyLjcgMi43IDUuNiA1IDguOCA2LjljLTEuMiAxMy43IDMuNCAyNy44IDEzLjkgMzguM2MxNy45IDE3LjkgNDYuNCAxOC43IDY1LjIgMi41YzIzLjQgMTAuMyA1MS44IDUuOCA3MC45LTEzLjRzMjMuNi00Ny41IDEzLjQtNzAuOWMxNi4yLTE4LjkgMTUuNC00Ny4zLTIuNS02NS4yYy0xMC41LTEwLjUtMjQuNi0xNS4xLTM4LjMtMTMuOWMtMS45LTMuMS00LjItNi4xLTYuOS04LjhjLTE4LjctMTguNy00OS4xLTE4LjctNjcuOSAwYy0xLjMgMS4zLTIuNSAyLjctMy43IDQuMWwtNjcuMS00MC4zem01NC42IDg3LjNsLTE2LjItMjYuOSAyNi45IDE2LjJMNDQ0LjQgMzc5bDUtMjEuNGMuNy0yLjggMi4xLTUuNCA0LjMtNy42YzYuMi02LjIgMTYuNC02LjIgMjIuNiAwYzIuMyAyLjMgMy44IDUuMiA0LjQgOC4ybDQgMjAuMyAxOC42LTljNi0yLjkgMTMuMy0xLjggMTguMiAzLjFjNi4yIDYuMiA2LjIgMTYuNCAwIDIyLjZjLTEgMS0yLjIgMS45LTMuNCAyLjZsLTE1LjkgOS4xIDExLjEgMTQuNWM5LjYgMTIuNSA4LjcgMzAuNi0yLjggNDIuMXMtMjkuNSAxMi40LTQyLjEgMi44TDQ1NCA0NTUuMSA0NDQuOSA0NzFjLS43IDEuMi0xLjUgMi4zLTIuNiAzLjRjLTYuMiA2LjItMTYuNCA2LjItMjIuNiAwYy00LjktNC45LTYtMTIuMy0zLjEtMTguMmw5LTE4LjYtMjAuMy00Yy0zLS42LTUuOC0yLTguMi00LjRjLTYuMi02LjItNi4yLTE2LjQgMC0yMi42YzIuMi0yLjIgNC45LTMuNiA3LjYtNC4zbDIxLjQtNS0xMS4zLTE4Ljh6TTEyOCAyMjRsMCAzMiAxNiAwIDk2IDAgMTYgMCAwLTMyLTE2IDAtOTYgMC0xNiAwem0xOTIgMGwwIDMyIDE2IDAgOTYgMCAxNiAwIDAtMzItMTYgMC05NiAwLTE2IDB6bTI3LjMtMzYuN2M5LjMtOS4zIDM4LjItMzIuMyA3My43LTQ0LjFsMTUuMi01LjEtNS4xLTE1LjItNS4xLTE1LjItMTUuMiA1LjFjLTQxLjMgMTMuOC03NC4yIDM5LjktODYuMyA1MS45TDMxMy40IDE3NmwxMS4zIDExLjNzMCAwIDAgMHMwIDAgMCAwTDMzNiAxOTguNmwxMS4zLTExLjN6TTE1NC45IDE0My4yYzM1LjUgMTEuOCA2NC40IDM0LjggNzMuNyA0NC4xTDI0MCAxOTguNiAyNjIuNiAxNzZsLTExLjMtMTEuM2MtMTItMTItNDUtMzguMS04Ni4zLTUxLjlsLTE1LjItNS4xLTEwLjEgMzAuNCAxNS4yIDUuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const FaceNoseSteam: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 256C64 132.3 164.3 32 288 32s224 100.3 224 224c0 10.1-.7 20.1-2 29.9l31.7 4.2c1.5-11.2 2.3-22.6 2.3-34.1C544 114.6 429.4 0 288 0S32 114.6 32 256c0 11.6 .8 22.9 2.3 34.1L66 285.9c-1.3-9.8-2-19.7-2-29.9zM288 480c-15.4 0-30.3-1.5-44.8-4.5l-6.4 31.4c16.6 3.4 33.7 5.1 51.2 5.1s34.6-1.8 51.2-5.1l-6.4-31.4c-14.5 2.9-29.5 4.5-44.8 4.5zM214 290.3l-67.1 40.3c-1.1-1.4-2.3-2.8-3.7-4.1c-18.7-18.7-49.1-18.7-67.9 0c-2.7 2.7-5 5.6-6.9 8.8c-13.7-1.2-27.8 3.4-38.3 13.9c-17.9 17.9-18.7 46.4-2.5 65.2c-10.3 23.4-5.8 51.8 13.4 70.9s47.5 23.6 70.9 13.4c18.9 16.2 47.3 15.4 65.2-2.5c10.5-10.5 15.1-24.6 13.9-38.3c3.1-1.9 6.1-4.2 8.8-6.9c18.7-18.7 18.7-49.1 0-67.9c-1.3-1.3-2.7-2.5-4.1-3.7l40.3-67.1-22-22zm-65.3 76.5l26.9-16.2-16.2 26.9-11.3 18.8 21.4 5c2.8 .7 5.4 2.1 7.6 4.3c6.2 6.2 6.2 16.4 0 22.6c-2.3 2.3-5.2 3.8-8.2 4.4l-20.3 4 9 18.6c2.9 6 1.8 13.3-3.1 18.2c-6.2 6.2-16.4 6.2-22.6 0c-1-1-1.9-2.2-2.6-3.4l-9.1-15.9-14.5 11.2c-12.5 9.6-30.6 8.7-42.1-2.8s-12.4-29.5-2.8-42.1L71.9 406l-15.9-9.1c-1.2-.7-2.3-1.5-3.4-2.6c-6.2-6.2-6.2-16.4 0-22.6c4.9-4.9 12.3-6 18.2-3.1l18.6 9 4-20.3c.6-3 2-5.8 4.4-8.2c6.2-6.2 16.4-6.2 22.6 0c2.2 2.2 3.6 4.8 4.3 7.6l5 21.4 18.8-11.3zm211.6-75.6l-21.9 22 40.3 67.1c-1.4 1.1-2.8 2.4-4.1 3.7c-18.7 18.7-18.7 49.1 0 67.9c2.7 2.7 5.6 5 8.8 6.9c-1.2 13.7 3.4 27.8 13.9 38.3c17.9 17.9 46.4 18.7 65.2 2.5c23.4 10.3 51.8 5.8 70.9-13.4s23.6-47.5 13.4-70.9c16.2-18.9 15.4-47.3-2.5-65.2c-10.5-10.5-24.6-15.1-38.3-13.9c-1.9-3.1-4.2-6.1-6.9-8.8c-18.7-18.7-49.1-18.7-67.9 0c-1.3 1.3-2.5 2.7-3.7 4.1l-67.1-40.3zm54.6 87.3l-16.2-26.9 26.9 16.2L444.4 379l5-21.4c.7-2.8 2.1-5.4 4.3-7.6c6.2-6.2 16.4-6.2 22.6 0c2.3 2.3 3.8 5.2 4.4 8.2l4 20.3 18.6-9c6-2.9 13.3-1.8 18.2 3.1c6.2 6.2 6.2 16.4 0 22.6c-1 1-2.2 1.9-3.4 2.6l-15.9 9.1 11.1 14.5c9.6 12.5 8.7 30.6-2.8 42.1s-29.5 12.4-42.1 2.8L454 455.1 444.9 471c-.7 1.2-1.5 2.3-2.6 3.4c-6.2 6.2-16.4 6.2-22.6 0c-4.9-4.9-6-12.3-3.1-18.2l9-18.6-20.3-4c-3-.6-5.8-2-8.2-4.4c-6.2-6.2-6.2-16.4 0-22.6c2.2-2.2 4.9-3.6 7.6-4.3l21.4-5-11.3-18.8zM128 224l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0zm192 0l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0zm27.3-36.7c9.3-9.3 38.2-32.3 73.7-44.1l15.2-5.1-5.1-15.2-5.1-15.2-15.2 5.1c-41.3 13.8-74.2 39.9-86.3 51.9L313.4 176l11.3 11.3s0 0 0 0s0 0 0 0L336 198.6l11.3-11.3zM154.9 143.2c35.5 11.8 64.4 34.8 73.7 44.1L240 198.6 262.6 176l-11.3-11.3c-12-12-45-38.1-86.3-51.9l-15.2-5.1-10.1 30.4 15.2 5.1z" />
    </Icon>
);

export default FaceNoseSteam;