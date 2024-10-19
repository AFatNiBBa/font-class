
import { Icon } from "../../index";

/**
 * A component that renders the `alicorn` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alicorn?s=light alicorn}
 * @preview ![alicorn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzM1LjUgMTQ4LjFjLS41IDEuOS0xLjMgMy42LTIuNSA1LjJjLTEuNCAxLjktMy4xIDMuNC01IDQuNXMtNC4xIDEuOC02LjQgMi4xYy0zLjIgLjMtNi42LS4zLTkuNi0yTDE2OS45IDc2LjZjNyA1Mi4yIDMyLjIgOTEuMiA1Ny44IDExOC40YzE1LjEgMTYgMzAuMSAyNy44IDQxLjQgMzUuNWM1LjYgMy45IDEwLjMgNi43IDEzLjUgOC42YzEuNiAuOSAyLjggMS42IDMuNiAybC45IC41IC4yIC4xczAgMCAwIDBzMCAwIDAgMGM3LjkgNCAxMS4xIDEzLjYgNy4xIDIxLjVzLTEzLjYgMTEuMS0yMS41IDcuMkwyODAgMjU2Yy03LjIgMTQuMy03LjIgMTQuMy03LjIgMTQuM3MwIDAgMCAwczAgMCAwIDBsLS4xLS4xLS40LS4yYy0uMy0uMi0uNy0uNC0xLjMtLjdjLTEuMS0uNi0yLjYtMS40LTQuNS0yLjVjLTMuOC0yLjItOS4yLTUuNS0xNS41LTkuOWMtMTIuNy04LjctMjkuNi0yMi00Ni42LTQwQzE3MC40IDE4MC45IDEzNiAxMjUuMiAxMzYgNDhjMC01LjcgMy0xMSA4LTEzLjhzMTEtMi45IDE2LS4xbDE0Ni40IDgzLjdDMzE4LjcgNTAuOCAzNzcuNCAwIDQ0OCAwbDI0IDAgOCAwIDUuOCAwTDU0NCAwYzguOCAwIDE2IDcuMiAxNiAxNmMwIDctNC41IDEzLTEwLjggMTUuMWM3LjMgOS41IDEyLjUgMjAuNiAxNSAzMi45bDY2LjUgMGM1LjEgMCA5LjMgNC4yIDkuMyA5LjNjMCA0LTIuNiA3LjYtNi40IDguOGwtNjUuMiAyMS43IDQuNyA0OS40YzIuMyAyMy45LTkuMiA0Ny4xLTI5LjYgNTkuOWMtMjkuMSAxOC4yLTY3LjQgMTAtODYuNS0xOC42bC0xLjctMi41LTcuNCAwIDAgNDBjMCAuNy0uMSAxLjUtLjEgMi4yYy4xIDEuOSAuMSAzLjkgLjEgNS44YzAgMzAuOS0xMi40IDU4LjQtMzIgNzguNEw0MTYgNDcyYzAgMjIuMS0xNy45IDQwLTQwIDQwbC0zMiAwYy0yMi4xIDAtNDAtMTcuOS00MC00MGwwLTEyNC40LTg4LjEtMTkuOGMtLjUgMTQuMy0zLjYgMjguMy05LjIgNDEuNGwtOC4xIDE5Yy0yLjIgNS0yLjUgMTAuNi0xLjEgMTUuOWwxNS45IDU3LjJjNy4xIDI1LjUtMTIuMSA1MC43LTM4LjUgNTAuN2wtMzMuMiAwYy0xOCAwLTMzLjctMTItMzguNS0yOS4zTDg5LjYgNDM0LjFjLTguMy0yOS44LTYuMi02MS41IDYtOTBsOC4xLTE5Yy4yLS40IC4zLS44IC4zLTEuM2MwLS40LS4xLS44LS4yLTEuMkw3MC40IDI0Mi41Yy00LjItMTAuMS02LjQtMjAuOC02LjQtMzEuN2MtMTguNiA2LjYtMzIgMjQuNC0zMiA0NS4zbDAgNDhjMCA4LjgtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZsMC00OGMwLTQxLjMgMzEuMy03NS4yIDcxLjQtNzkuNWM5LTE5LjggMjUuNi0zNS40IDQ2LTQzLjFjMy40IDEwLjQgNy40IDIwLjQgMTEuOCAyOS44QzEwOS44IDE3MC4yIDk2IDE4OC44IDk2IDIxMC43YzAgNi43IDEuMyAxMy4zIDMuOSAxOS41bDMzLjQgODAuMWMxLjggNC4zIDIuNyA4LjkgMi43IDEzLjVjMCA0LjgtMSA5LjUtMi44IDEzLjlsLTguMSAxOWMtOS4zIDIxLjctMTAuOSA0Ni00LjYgNjguOGwxMy41IDQ4LjZjMSAzLjUgNC4xIDUuOSA3LjcgNS45bDMzLjIgMGM1LjMgMCA5LjEtNSA3LjctMTAuMWwtMTUuOS01Ny4yYy0zLjQtMTIuMy0yLjUtMjUuMyAyLjUtMzdsOC4xLTE5YzQuNC0xMC40IDYuNy0yMS41IDYuNy0zMi44YzAtNC42LS40LTkuMi0xLjEtMTMuN2MtLjktNS4zIC45LTEwLjYgNC44LTE0LjNzOS4zLTUuMiAxNC41LTRMMzE4LjQgMzE4YzEuNCAuMyAyLjggLjYgNC4zIC44YzcuNyAxLjMgMTMuMyA4IDEzLjMgMTUuOEwzMzYgNDcyYzAgNC40IDMuNiA4IDggOGwzMiAwYzQuNCAwIDgtMy42IDgtOGwwLTE2MC40YzAtNC42IDEuOS04LjkgNS4zLTExLjlDNDA1LjYgMjg1LjEgNDE2IDI2NCA0MTYgMjQwYzAtMi4zLS4xLTQuNS0uMy02LjdjLS4xLTEuNSAwLTMuMSAuMy00LjVsMC01Mi44YzAtOC44IDcuMi0xNiAxNi0xNmwzMiAwYzUuNCAwIDEwLjMgMi43IDEzLjMgNy4xbDYuNCA5LjZjOS40IDE0LjIgMjguNSAxOC4zIDQyLjkgOS4yYzEwLjEtNi4zIDE1LjgtMTcuOCAxNC43LTI5LjdsLTcuNy04MC44Yy0yLjMtMjQuNi0yMy00My40LTQ3LjgtNDMuNEw0ODAgMzJsLTggMC0yNCAwYy02MS44IDAtMTExLjkgNTAtMTEyIDExMS43YzAgMS41LS4xIDIuOS0uNSA0LjR6TTQ2NCA5NmExNiAxNiAwIDEgMSAzMiAwIDE2IDE2IDAgMSAxIC0zMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Alicorn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M335.5 148.1c-.5 1.9-1.3 3.6-2.5 5.2c-1.4 1.9-3.1 3.4-5 4.5s-4.1 1.8-6.4 2.1c-3.2 .3-6.6-.3-9.6-2L169.9 76.6c7 52.2 32.2 91.2 57.8 118.4c15.1 16 30.1 27.8 41.4 35.5c5.6 3.9 10.3 6.7 13.5 8.6c1.6 .9 2.8 1.6 3.6 2l.9 .5 .2 .1s0 0 0 0s0 0 0 0c7.9 4 11.1 13.6 7.1 21.5s-13.6 11.1-21.5 7.2L280 256c-7.2 14.3-7.2 14.3-7.2 14.3s0 0 0 0s0 0 0 0l-.1-.1-.4-.2c-.3-.2-.7-.4-1.3-.7c-1.1-.6-2.6-1.4-4.5-2.5c-3.8-2.2-9.2-5.5-15.5-9.9c-12.7-8.7-29.6-22-46.6-40C170.4 180.9 136 125.2 136 48c0-5.7 3-11 8-13.8s11-2.9 16-.1l146.4 83.7C318.7 50.8 377.4 0 448 0l24 0 8 0 5.8 0L544 0c8.8 0 16 7.2 16 16c0 7-4.5 13-10.8 15.1c7.3 9.5 12.5 20.6 15 32.9l66.5 0c5.1 0 9.3 4.2 9.3 9.3c0 4-2.6 7.6-6.4 8.8l-65.2 21.7 4.7 49.4c2.3 23.9-9.2 47.1-29.6 59.9c-29.1 18.2-67.4 10-86.5-18.6l-1.7-2.5-7.4 0 0 40c0 .7-.1 1.5-.1 2.2c.1 1.9 .1 3.9 .1 5.8c0 30.9-12.4 58.4-32 78.4L416 472c0 22.1-17.9 40-40 40l-32 0c-22.1 0-40-17.9-40-40l0-124.4-88.1-19.8c-.5 14.3-3.6 28.3-9.2 41.4l-8.1 19c-2.2 5-2.5 10.6-1.1 15.9l15.9 57.2c7.1 25.5-12.1 50.7-38.5 50.7l-33.2 0c-18 0-33.7-12-38.5-29.3L89.6 434.1c-8.3-29.8-6.2-61.5 6-90l8.1-19c.2-.4 .3-.8 .3-1.3c0-.4-.1-.8-.2-1.2L70.4 242.5c-4.2-10.1-6.4-20.8-6.4-31.7c-18.6 6.6-32 24.4-32 45.3l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48c0-41.3 31.3-75.2 71.4-79.5c9-19.8 25.6-35.4 46-43.1c3.4 10.4 7.4 20.4 11.8 29.8C109.8 170.2 96 188.8 96 210.7c0 6.7 1.3 13.3 3.9 19.5l33.4 80.1c1.8 4.3 2.7 8.9 2.7 13.5c0 4.8-1 9.5-2.8 13.9l-8.1 19c-9.3 21.7-10.9 46-4.6 68.8l13.5 48.6c1 3.5 4.1 5.9 7.7 5.9l33.2 0c5.3 0 9.1-5 7.7-10.1l-15.9-57.2c-3.4-12.3-2.5-25.3 2.5-37l8.1-19c4.4-10.4 6.7-21.5 6.7-32.8c0-4.6-.4-9.2-1.1-13.7c-.9-5.3 .9-10.6 4.8-14.3s9.3-5.2 14.5-4L318.4 318c1.4 .3 2.8 .6 4.3 .8c7.7 1.3 13.3 8 13.3 15.8L336 472c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-160.4c0-4.6 1.9-8.9 5.3-11.9C405.6 285.1 416 264 416 240c0-2.3-.1-4.5-.3-6.7c-.1-1.5 0-3.1 .3-4.5l0-52.8c0-8.8 7.2-16 16-16l32 0c5.4 0 10.3 2.7 13.3 7.1l6.4 9.6c9.4 14.2 28.5 18.3 42.9 9.2c10.1-6.3 15.8-17.8 14.7-29.7l-7.7-80.8c-2.3-24.6-23-43.4-47.8-43.4L480 32l-8 0-24 0c-61.8 0-111.9 50-112 111.7c0 1.5-.1 2.9-.5 4.4zM464 96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Alicorn;