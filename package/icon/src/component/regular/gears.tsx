
import { Icon } from "../../index";

/**
 * A component that renders the `gears` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gears?s=regular gears}
 * @preview ![gears](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQ3LjEgNTIuN2wtNi41IDIzLjVjLTEuNyA2LjItNi4zIDExLjItMTIuNCAxMy41Yy0xMCAzLjctMTkuMSA5LTI3LjIgMTUuN2MtNSA0LjEtMTEuNiA1LjYtMTcuOSA0bC0yMy42LTYuMmMtNSA2LjktOS40IDE0LjQtMTIuOSAyMi4zbDE3LjEgMTcuNGM0LjUgNC42IDYuNiAxMS4xIDUuNSAxNy40Yy0uOSA1LjEtMS4zIDEwLjMtMS4zIDE1LjdzLjUgMTAuNiAxLjMgMTUuN2MxLjEgNi40LS45IDEyLjktNS41IDE3LjRMNDYuNyAyMjYuNWMzLjUgNy45IDcuOSAxNS40IDEyLjkgMjIuM2wyMy42LTYuMmM2LjMtMS42IDEyLjktLjEgMTcuOSA0YzggNi43IDE3LjIgMTIgMjcuMiAxNS43YzYuMSAyLjIgMTAuNyA3LjIgMTIuNCAxMy41bDYuNSAyMy41YzQuMiAuNCA4LjUgLjcgMTIuOSAuN3M4LjctLjIgMTIuOS0uN2w2LjUtMjMuNWMxLjctNi4yIDYuMy0xMS4yIDEyLjQtMTMuNWMxMC0zLjcgMTkuMS05IDI3LjItMTUuN2M1LTQuMSAxMS42LTUuNiAxNy45LTRsMjMuNiA2LjJjNS02LjkgOS40LTE0LjQgMTIuOS0yMi4zbC0xNy4xLTE3LjRjLTQuNS00LjYtNi42LTExLjEtNS41LTE3LjRjLjktNS4xIDEuMy0xMC4zIDEuMy0xNS43cy0uNS0xMC42LTEuMy0xNS43Yy0xLjEtNi40IC45LTEyLjkgNS41LTE3LjRsMTcuMS0xNy40Yy0zLjUtNy45LTcuOS0xNS40LTEyLjktMjIuM2wtMjMuNiA2LjJjLTYuMyAxLjYtMTIuOSAuMS0xNy45LTRjLTgtNi43LTE3LjItMTItMjcuMi0xNS43Yy02LjEtMi4yLTEwLjctNy4yLTEyLjQtMTMuNWwtNi41LTIzLjVjLTQuMi0uNC04LjUtLjctMTIuOS0uN3MtOC43IC4yLTEyLjkgLjd6TTEyNy4zIDE1LjNDMTM3LjkgMTMuMSAxNDguOCAxMiAxNjAgMTJzMjIuMSAxLjEgMzIuNyAzLjNjNy40IDEuNSAxMy4zIDcgMTUuMyAxNC4zbDcuMyAyNi42YzcuMyAzLjQgMTQuMyA3LjQgMjAuOCAxMmwyNi42LTdjNy4zLTEuOSAxNSAuNCAyMCA2LjFjMTQuNCAxNi4zIDI1LjcgMzUuNSAzMi44IDU2LjdjMi40IDcuMSAuNiAxNS00LjcgMjAuNEwyOTEuNSAxNjRjLjQgNCAuNSA4IC41IDEycy0uMiA4LS41IDEybDE5LjQgMTkuNmM1LjMgNS40IDcuMSAxMy4yIDQuNyAyMC40Yy03LjEgMjEuMi0xOC4zIDQwLjQtMzIuOCA1Ni43Yy01IDUuNi0xMi43IDgtMjAgNi4xbC0yNi42LTdjLTYuNSA0LjYtMTMuNSA4LjYtMjAuOCAxMkwyMDggMzIyLjRjLTIgNy4zLTcuOSAxMi44LTE1LjMgMTQuM2MtMTAuNiAyLjEtMjEuNSAzLjMtMzIuNyAzLjNzLTIyLjEtMS4xLTMyLjctMy4zYy03LjQtMS41LTEzLjMtNy0xNS4zLTE0LjNsLTcuMy0yNi42Yy03LjMtMy40LTE0LjMtNy40LTIwLjgtMTJsLTI2LjYgN2MtNy4zIDEuOS0xNS0uNC0yMC02LjFDMjIuOCAyNjguNCAxMS41IDI0OS4yIDQuNCAyMjhjLTIuNC03LjEtLjYtMTUgNC43LTIwLjRMMjguNSAxODhjLS40LTQtLjUtOC0uNS0xMnMuMi04IC41LTEyTDkuMiAxNDQuNEMzLjkgMTM5IDIgMTMxLjEgNC40IDEyNGM3LjEtMjEuMiAxOC4zLTQwLjQgMzIuOC01Ni43YzUtNS42IDEyLjctOCAyMC02LjFsMjYuNiA3YzYuNS00LjYgMTMuNS04LjYgMjAuOC0xMkwxMTIgMjkuNmMyLTcuMyA3LjktMTIuOCAxNS4zLTE0LjN6TTEyMCAxNzZhNDAgNDAgMCAxIDEgODAgMCA0MCA0MCAwIDEgMSAtODAgMHpNMzQwLjcgMzY0LjlsMjMuNSA2LjVjNi4yIDEuNyAxMS4yIDYuMyAxMy41IDEyLjRjMy43IDEwIDkgMTkuMSAxNS43IDI3LjJjNC4xIDUgNS42IDExLjYgNCAxNy45bC02LjIgMjMuNmM2LjkgNSAxNC40IDkuNCAyMi4zIDEyLjlsMTcuNC0xNy4xYzQuNi00LjUgMTEuMS02LjYgMTcuNC01LjVjNS4xIC45IDEwLjMgMS4zIDE1LjcgMS4zczEwLjYtLjUgMTUuNy0xLjNjNi40LTEuMSAxMi44IC45IDE3LjQgNS41bDE3LjQgMTcuMWM3LjktMy41IDE1LjQtNy45IDIyLjMtMTIuOWwtNi4yLTIzLjZjLTEuNi02LjItLjEtMTIuOSA0LTE3LjljNi43LTggMTIuMS0xNy4yIDE1LjctMjcuMmMyLjItNi4xIDcuMi0xMC43IDEzLjUtMTIuNGwyMy41LTYuNWMuNC00LjIgLjctOC41IC43LTEyLjlzLS4yLTguNy0uNy0xMi45bC0yMy41LTYuNWMtNi4yLTEuNy0xMS4yLTYuMy0xMy41LTEyLjRjLTMuNy0xMC05LTE5LjEtMTUuNy0yNy4yYy00LjEtNS01LjYtMTEuNi00LTE3LjlsNi4yLTIzLjZjLTYuOS01LTE0LjQtOS40LTIyLjMtMTIuOWwtMTcuNCAxNy4xYy00LjYgNC41LTExLjEgNi42LTE3LjQgNS41Yy01LjEtLjktMTAuNC0xLjMtMTUuNy0xLjNzLTEwLjYgLjUtMTUuNyAxLjNjLTYuNCAxLjEtMTIuOS0uOS0xNy40LTUuNWwtMTcuNC0xNy4xYy03LjkgMy41LTE1LjQgNy45LTIyLjMgMTIuOWw2LjIgMjMuNmMxLjYgNi4zIC4xIDEyLjktNCAxNy45Yy02LjcgOC0xMi4xIDE3LjItMTUuNyAyNy4yYy0yLjIgNi4xLTcuMiAxMC43LTEzLjUgMTIuNGwtMjMuNSA2LjVjLS40IDQuMi0uNyA4LjUtLjcgMTIuOXMuMiA4LjcgLjcgMTIuOXptLTM3LjQgMTkuOGMtMi4xLTEwLjYtMy4zLTIxLjUtMy4zLTMyLjdzMS4xLTIyLjEgMy4zLTMyLjdjMS41LTcuNCA3LTEzLjMgMTQuMy0xNS4zbDI2LjYtNy4zYzMuNC03LjMgNy40LTE0LjMgMTItMjAuOGwtNy0yNi42Yy0xLjktNy4zIC41LTE1IDYuMS0yMGMxNi4zLTE0LjQgMzUuNS0yNS43IDU2LjctMzIuOGM3LjEtMi40IDE1LS42IDIwLjQgNC43TDQ1MiAyMjAuNWM0LS40IDgtLjUgMTItLjVzOCAuMiAxMiAuNWwxOS42LTE5LjRjNS40LTUuMyAxMy4yLTcuMSAyMC40LTQuN2MyMS4yIDcuMSA0MC40IDE4LjMgNTYuNyAzMi44YzUuNiA1IDggMTIuNyA2LjEgMjBsLTcgMjYuNmM0LjYgNi41IDguNiAxMy41IDEyIDIwLjhsMjYuNiA3LjNjNy4zIDIgMTIuOCA3LjkgMTQuMyAxNS4zYzIuMSAxMC42IDMuMyAyMS41IDMuMyAzMi43cy0xLjEgMjIuMS0zLjMgMzIuN2MtMS41IDcuNC03IDEzLjMtMTQuMyAxNS4zbC0yNi42IDcuM2MtMy40IDcuMy03LjQgMTQuMy0xMiAyMC44bDcgMjYuNmMxLjkgNy4zLS41IDE1LTYuMSAyMGMtMTYuMyAxNC40LTM1LjUgMjUuNy01Ni43IDMyLjhjLTcuMSAyLjQtMTUgLjYtMjAuNC00LjdMNDc2IDQ4My41Yy00IC40LTggLjUtMTIgLjVzLTgtLjItMTItLjVsLTE5LjYgMTkuNGMtNS40IDUuMy0xMy4yIDcuMS0yMC40IDQuN2MtMjEuMi03LjEtNDAuNC0xOC4zLTU2LjctMzIuOGMtNS42LTUtOC0xMi43LTYuMS0yMGw3LTI2LjZjLTQuNi02LjUtOC42LTEzLjUtMTItMjAuOEwzMTcuNiA0MDBjLTcuMy0yLTEyLjgtNy45LTE0LjMtMTUuM3pNNDY0IDM5MmE0MCA0MCAwIDEgMSAwLTgwIDQwIDQwIDAgMSAxIDAgODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Gears: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M147.1 52.7l-6.5 23.5c-1.7 6.2-6.3 11.2-12.4 13.5c-10 3.7-19.1 9-27.2 15.7c-5 4.1-11.6 5.6-17.9 4l-23.6-6.2c-5 6.9-9.4 14.4-12.9 22.3l17.1 17.4c4.5 4.6 6.6 11.1 5.5 17.4c-.9 5.1-1.3 10.3-1.3 15.7s.5 10.6 1.3 15.7c1.1 6.4-.9 12.9-5.5 17.4L46.7 226.5c3.5 7.9 7.9 15.4 12.9 22.3l23.6-6.2c6.3-1.6 12.9-.1 17.9 4c8 6.7 17.2 12 27.2 15.7c6.1 2.2 10.7 7.2 12.4 13.5l6.5 23.5c4.2 .4 8.5 .7 12.9 .7s8.7-.2 12.9-.7l6.5-23.5c1.7-6.2 6.3-11.2 12.4-13.5c10-3.7 19.1-9 27.2-15.7c5-4.1 11.6-5.6 17.9-4l23.6 6.2c5-6.9 9.4-14.4 12.9-22.3l-17.1-17.4c-4.5-4.6-6.6-11.1-5.5-17.4c.9-5.1 1.3-10.3 1.3-15.7s-.5-10.6-1.3-15.7c-1.1-6.4 .9-12.9 5.5-17.4l17.1-17.4c-3.5-7.9-7.9-15.4-12.9-22.3l-23.6 6.2c-6.3 1.6-12.9 .1-17.9-4c-8-6.7-17.2-12-27.2-15.7c-6.1-2.2-10.7-7.2-12.4-13.5l-6.5-23.5c-4.2-.4-8.5-.7-12.9-.7s-8.7 .2-12.9 .7zM127.3 15.3C137.9 13.1 148.8 12 160 12s22.1 1.1 32.7 3.3c7.4 1.5 13.3 7 15.3 14.3l7.3 26.6c7.3 3.4 14.3 7.4 20.8 12l26.6-7c7.3-1.9 15 .4 20 6.1c14.4 16.3 25.7 35.5 32.8 56.7c2.4 7.1 .6 15-4.7 20.4L291.5 164c.4 4 .5 8 .5 12s-.2 8-.5 12l19.4 19.6c5.3 5.4 7.1 13.2 4.7 20.4c-7.1 21.2-18.3 40.4-32.8 56.7c-5 5.6-12.7 8-20 6.1l-26.6-7c-6.5 4.6-13.5 8.6-20.8 12L208 322.4c-2 7.3-7.9 12.8-15.3 14.3c-10.6 2.1-21.5 3.3-32.7 3.3s-22.1-1.1-32.7-3.3c-7.4-1.5-13.3-7-15.3-14.3l-7.3-26.6c-7.3-3.4-14.3-7.4-20.8-12l-26.6 7c-7.3 1.9-15-.4-20-6.1C22.8 268.4 11.5 249.2 4.4 228c-2.4-7.1-.6-15 4.7-20.4L28.5 188c-.4-4-.5-8-.5-12s.2-8 .5-12L9.2 144.4C3.9 139 2 131.1 4.4 124c7.1-21.2 18.3-40.4 32.8-56.7c5-5.6 12.7-8 20-6.1l26.6 7c6.5-4.6 13.5-8.6 20.8-12L112 29.6c2-7.3 7.9-12.8 15.3-14.3zM120 176a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM340.7 364.9l23.5 6.5c6.2 1.7 11.2 6.3 13.5 12.4c3.7 10 9 19.1 15.7 27.2c4.1 5 5.6 11.6 4 17.9l-6.2 23.6c6.9 5 14.4 9.4 22.3 12.9l17.4-17.1c4.6-4.5 11.1-6.6 17.4-5.5c5.1 .9 10.3 1.3 15.7 1.3s10.6-.5 15.7-1.3c6.4-1.1 12.8 .9 17.4 5.5l17.4 17.1c7.9-3.5 15.4-7.9 22.3-12.9l-6.2-23.6c-1.6-6.2-.1-12.9 4-17.9c6.7-8 12.1-17.2 15.7-27.2c2.2-6.1 7.2-10.7 13.5-12.4l23.5-6.5c.4-4.2 .7-8.5 .7-12.9s-.2-8.7-.7-12.9l-23.5-6.5c-6.2-1.7-11.2-6.3-13.5-12.4c-3.7-10-9-19.1-15.7-27.2c-4.1-5-5.6-11.6-4-17.9l6.2-23.6c-6.9-5-14.4-9.4-22.3-12.9l-17.4 17.1c-4.6 4.5-11.1 6.6-17.4 5.5c-5.1-.9-10.4-1.3-15.7-1.3s-10.6 .5-15.7 1.3c-6.4 1.1-12.9-.9-17.4-5.5l-17.4-17.1c-7.9 3.5-15.4 7.9-22.3 12.9l6.2 23.6c1.6 6.3 .1 12.9-4 17.9c-6.7 8-12.1 17.2-15.7 27.2c-2.2 6.1-7.2 10.7-13.5 12.4l-23.5 6.5c-.4 4.2-.7 8.5-.7 12.9s.2 8.7 .7 12.9zm-37.4 19.8c-2.1-10.6-3.3-21.5-3.3-32.7s1.1-22.1 3.3-32.7c1.5-7.4 7-13.3 14.3-15.3l26.6-7.3c3.4-7.3 7.4-14.3 12-20.8l-7-26.6c-1.9-7.3 .5-15 6.1-20c16.3-14.4 35.5-25.7 56.7-32.8c7.1-2.4 15-.6 20.4 4.7L452 220.5c4-.4 8-.5 12-.5s8 .2 12 .5l19.6-19.4c5.4-5.3 13.2-7.1 20.4-4.7c21.2 7.1 40.4 18.3 56.7 32.8c5.6 5 8 12.7 6.1 20l-7 26.6c4.6 6.5 8.6 13.5 12 20.8l26.6 7.3c7.3 2 12.8 7.9 14.3 15.3c2.1 10.6 3.3 21.5 3.3 32.7s-1.1 22.1-3.3 32.7c-1.5 7.4-7 13.3-14.3 15.3l-26.6 7.3c-3.4 7.3-7.4 14.3-12 20.8l7 26.6c1.9 7.3-.5 15-6.1 20c-16.3 14.4-35.5 25.7-56.7 32.8c-7.1 2.4-15 .6-20.4-4.7L476 483.5c-4 .4-8 .5-12 .5s-8-.2-12-.5l-19.6 19.4c-5.4 5.3-13.2 7.1-20.4 4.7c-21.2-7.1-40.4-18.3-56.7-32.8c-5.6-5-8-12.7-6.1-20l7-26.6c-4.6-6.5-8.6-13.5-12-20.8L317.6 400c-7.3-2-12.8-7.9-14.3-15.3zM464 392a40 40 0 1 1 0-80 40 40 0 1 1 0 80z" />
    </Icon>
);

export default Gears;