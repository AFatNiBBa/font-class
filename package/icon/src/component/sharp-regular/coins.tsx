
import { Icon } from "../../index";

/**
 * A component that renders the `coins` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coins?s=sharp-regular coins}
 * @preview ![coins](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTc2IDg4YzAgMCAwIDAgMCAwYzAgLjEgLjEgLjYgLjYgMS41Yy42IDEuMiAyIDMuMSA0LjcgNS41Yy40IC4zIC44IC43IDEuMiAxYy0xOC43IC40LTM2LjkgMS43LTU0LjQgNC4xTDEyOCA4OGMwLTE4IDkuNy0zMi40IDIxLjEtNDIuN3MyNi43LTE4LjUgNDMuNS0yNC45QzIyNi40IDcuNSAyNzEuNSAwIDMyMCAwczkzLjYgNy41IDEyNy4zIDIwLjNjMTYuOCA2LjQgMzIuMSAxNC42IDQzLjUgMjQuOVM1MTIgNzAgNTEyIDg4bDAgMTA0IDAgMTA0YzAgMTgtOS43IDMyLjQtMjEuMSA0Mi43cy0yNi43IDE4LjUtNDMuNSAyNC45Yy05LjYgMy43LTIwLjEgNi45LTMxLjMgOS42bDAtNDkuN2M1LjEtMS41IDkuOC0zLjEgMTQuMi00LjhjMTMuNi01LjIgMjMtMTAuOCAyOC41LTE1LjdjMi43LTIuNCA0LjEtNC4zIDQuNy01LjVjLjYtMS4xIC42LTEuNSAuNi0xLjVjMCAwIDAgMCAwIDBsMC00My42Yy01LjMgMi42LTEwLjkgNS0xNi43IDcuMmMtOS42IDMuNy0yMC4xIDYuOS0zMS4zIDkuNmwwLTQ5LjdjNS4xLTEuNSA5LjgtMy4xIDE0LjItNC44YzEzLjYtNS4yIDIzLTEwLjggMjguNS0xNS43YzIuNy0yLjQgNC4xLTQuMyA0LjctNS41Yy41LS45IC42LTEuNCAuNi0xLjVjMCAwIDAgMCAwIDBzMCAwIDAgMGwwLTQzLjZjLTUuMyAyLjYtMTAuOSA1LTE2LjcgNy4yYy0xMy43IDUuMi0yOS40IDkuNi00Ni4zIDEyLjljLTUuMS03LjUtMTEtMTMuOS0xNi44LTE5LjFjLTEwLjEtOS4xLTIxLjgtMTYuNS0zNC0yMi42YzMxLjctMi4zIDU5LjMtOC4yIDgwLTE2LjFjMTMuNi01LjIgMjMtMTAuOCAyOC41LTE1LjdjMi43LTIuNCA0LjEtNC4zIDQuNy01LjVjLjUtLjkgLjYtMS40IC42LTEuNWMwIDAgMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBjMCAwIDAtLjUtLjYtMS41Yy0uNi0xLjItMi0zLjEtNC43LTUuNWMtNS41LTUtMTQuOS0xMC42LTI4LjUtMTUuN0M0MDMuMiA1NC45IDM2NC4yIDQ4IDMyMCA0OHMtODMuMiA2LjktMTEwLjIgMTcuMmMtMTMuNiA1LjItMjMgMTAuOC0yOC41IDE1LjdjLTIuNyAyLjQtNC4xIDQuMy00LjcgNS41Yy0uNiAxLjEtLjYgMS41LS42IDEuNWMwIDAgMCAwIDAgMHpNNDggMjE2YzAgMCAwIDAgMCAwYzAgLjEgLjEgLjYgLjYgMS41Yy42IDEuMiAyIDMuMSA0LjcgNS41YzUuNSA1IDE0LjkgMTAuNiAyOC41IDE1LjdjMjcgMTAuMyA2NiAxNy4yIDExMC4yIDE3LjJzODMuMi02LjkgMTEwLjItMTcuMmMxMy42LTUuMiAyMy0xMC44IDI4LjUtMTUuN2MyLjctMi40IDQuMS00LjMgNC43LTUuNWMuNS0uOSAuNi0xLjQgLjYtMS41YzAgMCAwIDAgMCAwczAgMCAwIDBzMCAwIDAgMGMwIDAgMC0uNS0uNi0xLjVjLS42LTEuMi0yLTMuMS00LjctNS41Yy01LjUtNS0xNC45LTEwLjYtMjguNS0xNS43Yy0yNy0xMC4zLTY2LTE3LjItMTEwLjItMTcuMnMtODMuMiA2LjktMTEwLjIgMTcuMmMtMTMuNiA1LjItMjMgMTAuOC0yOC41IDE1LjdjLTIuNyAyLjQtNC4xIDQuMy00LjcgNS41Yy0uNiAxLjEtLjYgMS41LS42IDEuNWMwIDAgMCAwIDAgMHpNMCAyMTZjMC0xOCA5LjctMzIuNCAyMS4xLTQyLjdzMjYuNy0xOC41IDQzLjUtMjQuOUM5OC40IDEzNS41IDE0My41IDEyOCAxOTIgMTI4czkzLjYgNy41IDEyNy4zIDIwLjNjMTYuOCA2LjQgMzIuMSAxNC42IDQzLjUgMjQuOVMzODQgMTk4IDM4NCAyMTZsMCAxMDQgMCAxMDRjMCAxOC05LjcgMzIuNC0yMS4xIDQyLjdzLTI2LjcgMTguNS00My41IDI0LjlDMjg1LjYgNTA0LjUgMjQwLjUgNTEyIDE5MiA1MTJzLTkzLjYtNy41LTEyNy4zLTIwLjNjLTE2LjgtNi40LTMyLTE0LjYtNDMuNS0yNC45UzAgNDQyIDAgNDI0TDAgMzIwIDAgMjE2ek0zMzYgMzIwbDAtNDMuNmMtNS4zIDIuNi0xMC45IDUtMTYuNyA3LjJDMjg1LjYgMjk2LjUgMjQwLjUgMzA0IDE5MiAzMDRzLTkzLjYtNy41LTEyNy4zLTIwLjNjLTUuOC0yLjItMTEuNC00LjYtMTYuNy03LjJMNDggMzIwYzAgMCAwIDAgMCAwYzAgLjEgLjEgLjYgLjYgMS41Yy42IDEuMiAyIDMuMSA0LjcgNS41YzUuNSA1IDE0LjkgMTAuNiAyOC41IDE1LjdjMjcgMTAuMyA2NiAxNy4yIDExMC4yIDE3LjJzODMuMi02LjkgMTEwLjItMTcuMmMxMy42LTUuMiAyMy0xMC44IDI4LjUtMTUuN2MyLjctMi40IDQuMS00LjMgNC43LTUuNWMuNS0uOSAuNi0xLjQgLjYtMS41YzAgMCAwIDAgMCAwYzAgMCAwIDAgMCAwek02NC43IDM4Ny43Yy01LjgtMi4yLTExLjQtNC42LTE2LjctNy4yTDQ4IDQyNHMwIDAgMCAwYzAgMCAwIC41IC42IDEuNWMuNiAxLjIgMiAzLjEgNC43IDUuNWM1LjUgNSAxNC45IDEwLjYgMjguNSAxNS43YzI3IDEwLjMgNjYgMTcuMiAxMTAuMiAxNy4yczgzLjItNi45IDExMC4yLTE3LjJjMTMuNi01LjIgMjMtMTAuOCAyOC41LTE1LjdjMi43LTIuNCA0LjEtNC4zIDQuNy01LjVjLjYtMS4xIC42LTEuNSAuNi0xLjVjMCAwIDAgMCAwIDBsMC00My42Yy01LjMgMi42LTEwLjkgNS0xNi43IDcuMkMyODUuNiA0MDAuNSAyNDAuNSA0MDggMTkyIDQwOHMtOTMuNi03LjUtMTI3LjMtMjAuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const Coins: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 88c0 0 0 0 0 0c0 .1 .1 .6 .6 1.5c.6 1.2 2 3.1 4.7 5.5c.4 .3 .8 .7 1.2 1c-18.7 .4-36.9 1.7-54.4 4.1L128 88c0-18 9.7-32.4 21.1-42.7s26.7-18.5 43.5-24.9C226.4 7.5 271.5 0 320 0s93.6 7.5 127.3 20.3c16.8 6.4 32.1 14.6 43.5 24.9S512 70 512 88l0 104 0 104c0 18-9.7 32.4-21.1 42.7s-26.7 18.5-43.5 24.9c-9.6 3.7-20.1 6.9-31.3 9.6l0-49.7c5.1-1.5 9.8-3.1 14.2-4.8c13.6-5.2 23-10.8 28.5-15.7c2.7-2.4 4.1-4.3 4.7-5.5c.6-1.1 .6-1.5 .6-1.5c0 0 0 0 0 0l0-43.6c-5.3 2.6-10.9 5-16.7 7.2c-9.6 3.7-20.1 6.9-31.3 9.6l0-49.7c5.1-1.5 9.8-3.1 14.2-4.8c13.6-5.2 23-10.8 28.5-15.7c2.7-2.4 4.1-4.3 4.7-5.5c.5-.9 .6-1.4 .6-1.5c0 0 0 0 0 0s0 0 0 0l0-43.6c-5.3 2.6-10.9 5-16.7 7.2c-13.7 5.2-29.4 9.6-46.3 12.9c-5.1-7.5-11-13.9-16.8-19.1c-10.1-9.1-21.8-16.5-34-22.6c31.7-2.3 59.3-8.2 80-16.1c13.6-5.2 23-10.8 28.5-15.7c2.7-2.4 4.1-4.3 4.7-5.5c.5-.9 .6-1.4 .6-1.5c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0-.5-.6-1.5c-.6-1.2-2-3.1-4.7-5.5c-5.5-5-14.9-10.6-28.5-15.7C403.2 54.9 364.2 48 320 48s-83.2 6.9-110.2 17.2c-13.6 5.2-23 10.8-28.5 15.7c-2.7 2.4-4.1 4.3-4.7 5.5c-.6 1.1-.6 1.5-.6 1.5c0 0 0 0 0 0zM48 216c0 0 0 0 0 0c0 .1 .1 .6 .6 1.5c.6 1.2 2 3.1 4.7 5.5c5.5 5 14.9 10.6 28.5 15.7c27 10.3 66 17.2 110.2 17.2s83.2-6.9 110.2-17.2c13.6-5.2 23-10.8 28.5-15.7c2.7-2.4 4.1-4.3 4.7-5.5c.5-.9 .6-1.4 .6-1.5c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0-.5-.6-1.5c-.6-1.2-2-3.1-4.7-5.5c-5.5-5-14.9-10.6-28.5-15.7c-27-10.3-66-17.2-110.2-17.2s-83.2 6.9-110.2 17.2c-13.6 5.2-23 10.8-28.5 15.7c-2.7 2.4-4.1 4.3-4.7 5.5c-.6 1.1-.6 1.5-.6 1.5c0 0 0 0 0 0zM0 216c0-18 9.7-32.4 21.1-42.7s26.7-18.5 43.5-24.9C98.4 135.5 143.5 128 192 128s93.6 7.5 127.3 20.3c16.8 6.4 32.1 14.6 43.5 24.9S384 198 384 216l0 104 0 104c0 18-9.7 32.4-21.1 42.7s-26.7 18.5-43.5 24.9C285.6 504.5 240.5 512 192 512s-93.6-7.5-127.3-20.3c-16.8-6.4-32-14.6-43.5-24.9S0 442 0 424L0 320 0 216zM336 320l0-43.6c-5.3 2.6-10.9 5-16.7 7.2C285.6 296.5 240.5 304 192 304s-93.6-7.5-127.3-20.3c-5.8-2.2-11.4-4.6-16.7-7.2L48 320c0 0 0 0 0 0c0 .1 .1 .6 .6 1.5c.6 1.2 2 3.1 4.7 5.5c5.5 5 14.9 10.6 28.5 15.7c27 10.3 66 17.2 110.2 17.2s83.2-6.9 110.2-17.2c13.6-5.2 23-10.8 28.5-15.7c2.7-2.4 4.1-4.3 4.7-5.5c.5-.9 .6-1.4 .6-1.5c0 0 0 0 0 0c0 0 0 0 0 0zM64.7 387.7c-5.8-2.2-11.4-4.6-16.7-7.2L48 424s0 0 0 0c0 0 0 .5 .6 1.5c.6 1.2 2 3.1 4.7 5.5c5.5 5 14.9 10.6 28.5 15.7c27 10.3 66 17.2 110.2 17.2s83.2-6.9 110.2-17.2c13.6-5.2 23-10.8 28.5-15.7c2.7-2.4 4.1-4.3 4.7-5.5c.6-1.1 .6-1.5 .6-1.5c0 0 0 0 0 0l0-43.6c-5.3 2.6-10.9 5-16.7 7.2C285.6 400.5 240.5 408 192 408s-93.6-7.5-127.3-20.3z" />
    </Icon>
);

export default Coins;