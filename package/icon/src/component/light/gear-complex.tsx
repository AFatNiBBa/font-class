
import { Icon } from "../../index";

/**
 * A component that renders the `gear-complex` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gear-complex?s=light gear-complex}
 * @preview ![gear-complex](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjE1IDYyLjhsNC45LTI0LjMtMTUuNy0zLjEgMTUuNyAzLjFjLjMtMS41IDEtMi44IDEuOS0zLjhDMjMyLjkgMzIuOSAyNDQuNCAzMiAyNTYgMzJzMjMuMSAuOSAzNC4yIDIuNmMxIDEuMSAxLjYgMi40IDEuOSAzLjhMMjk3IDYyLjhjMi45IDE0LjQgMTMuMiAyNS4yIDI1LjUgMzAuM2MwIDAgMCAwIDAgMGwxLjUgLjZjMCAwIDAgMCAwIDBjMTIuMyA1LjIgMjcuMyA0LjggMzkuNS0zLjNsMjAuNi0xMy44YzEuMi0uOCAyLjYtMS4zIDQuMS0xLjNjOS4xIDYuNyAxNy43IDE0IDI1LjYgMjEuOWwuOCAuOHMwIDAgMCAwYzcuOSA4IDE1LjMgMTYuNSAyMS45IDI1LjZjLS4xIDEuNC0uNSAyLjgtMS4zIDQuMWwtMTMuOCAyMC42Yy04LjEgMTIuMi04LjUgMjcuMS0zLjMgMzkuNWMwIDAgMCAwIDAgMGwuNiAxLjVjMCAwIDAgMCAwIDBjNS4xIDEyLjQgMTUuOSAyMi42IDMwLjMgMjUuNWwyNC4zIDQuOWMxLjUgLjMgMi44IDEgMy44IDEuOWMxLjcgMTEuMSAyLjYgMjIuNCAyLjYgMzRsMCAuNGMwIDExLjYtLjkgMjIuOS0yLjYgMzRjLTEuMSAxLTIuNCAxLjYtMy44IDEuOUw0NDkuMiAyOTdjLTE0LjQgMi45LTI1LjIgMTMuMi0zMC4zIDI1LjVjMCAwIDAgMCAwIDBsLS42IDEuNWMwIDAgMCAwIDAgMGMtNS4yIDEyLjMtNC44IDI3LjMgMy4zIDM5LjVsMTMuOCAyMC42Yy44IDEuMiAxLjMgMi42IDEuMyA0LjFjLTEzLjYgMTguNS0yOS45IDM0LjktNDguNCA0OC40Yy0xLjQtLjEtMi44LS41LTQuMS0xLjNsLTIwLjYtMTMuOGMtMTIuMi04LjEtMjcuMS04LjUtMzkuNS0zLjNjMCAwIDAgMCAwIDBsLTEuNSAuNmMwIDAgMCAwIDAgMGMtMTIuNCA1LjEtMjIuNiAxNS45LTI1LjUgMzAuM2wtNC45IDI0LjNjLS4zIDEuNS0xIDIuOC0xLjkgMy44Yy0xMS4xIDEuNy0yMi42IDIuNi0zNC4yIDIuNnMtMjMuMS0uOS0zNC4yLTIuNmMtMS0xLjEtMS42LTIuNC0xLjktMy44TDIxNSA0NDkuMmMtMi45LTE0LjQtMTMuMi0yNS4yLTI1LjUtMzAuM2MwIDAgMCAwIDAgMGwtMS41LS42YzAgMCAwIDAgMCAwYy0xMi4zLTUuMi0yNy4zLTQuOC0zOS41IDMuM2wtMjAuNiAxMy44Yy0xLjIgLjgtMi42IDEuMy00LjEgMS4zYy0xOC41LTEzLjYtMzQuOS0yOS45LTQ4LjQtNDguNGMuMS0xLjQgLjUtMi44IDEuMy00LjFsMTMuOC0yMC42YzguMS0xMi4yIDguNS0yNy4xIDMuMy0zOS41YzAgMCAwIDAgMCAwbC0uNi0xLjVjMCAwIDAgMCAwIDBjLTUuMS0xMi40LTE1LjktMjIuNi0zMC4zLTI1LjVsLTI0LjMtNC45Yy0xLjUtLjMtMi44LTEtMy44LTEuOUMzMi45IDI3OS4xIDMyIDI2Ny42IDMyIDI1NnMuOS0yMy4xIDIuNi0zNC4yYzEuMS0xIDIuNC0xLjYgMy44LTEuOUw2Mi44IDIxNWMxNC40LTIuOSAyNS4yLTEzLjIgMzAuMy0yNS41YzAgMCAwIDAgMCAwbC42LTEuNWMwIDAgMCAwIDAgMGM1LjItMTIuMyA0LjgtMjcuMy0zLjMtMzkuNUw3Ni42IDEyNy43Yy0uOC0xLjItMS4zLTIuNi0xLjMtNC4xYzYuNy05LjEgMTQtMTcuNyAyMi0yNS43bC44LS44czAgMCAwIDBjOC03LjkgMTYuNi0xNS4zIDI1LjctMjJjMS40IC4xIDIuOCAuNSA0LjEgMS4zbDIwLjYgMTMuOGMxMi4yIDguMSAyNy4xIDguNSAzOS41IDMuM2MwIDAgMCAwIDAgMGwxLjUtLjZjMCAwIDAgMCAwIDBjMTIuNC01LjEgMjIuNy0xNS45IDI1LjUtMzAuM3pNMjU2IDBjLTE0LjggMC0yOS4zIDEuMy00My40IDMuN2MtMiAuMy0zLjkgMS01LjYgMi4xYy05LjQgNS42LTE2LjMgMTUuMS0xOC42IDI2LjRsLTQuOSAyNC4zYy0uNSAyLjYtMi42IDUuNC02LjMgNi45YzAgMCAwIDAgMCAwYzAgMCAwIDAtLjEgMGwtMS43IC43czAgMCAwIDBjMCAwIDAgMC0uMSAwYy0zLjcgMS41LTcuMSAxLTkuNC0uNEwxNDUuNSA1MGMtOS42LTYuNC0yMS4yLTguMi0zMS43LTUuNmMtMS45IC41LTMuOCAxLjMtNS40IDIuNUM5Ni42IDU1LjIgODUuNiA2NC40IDc1LjQgNzQuNWMwIDAgMCAwIDAgMGwtLjggLjhjMCAwIDAgMCAwIDBDNjQuNCA4NS42IDU1LjIgOTYuNiA0Ni45IDEwOC4zYy0xLjIgMS42LTIgMy41LTIuNSA1LjRjLTIuNiAxMC42LS44IDIyLjEgNS42IDMxLjdsMTMuOCAyMC42YzEuNSAyLjIgMiA1LjcgLjQgOS40YzAgMCAwIDAgMCAuMWwtLjcgMS43czAgMCAwIDBjMCAwIDAgMCAwIC4xYy0xLjUgMy43LTQuMyA1LjgtNi45IDYuM2wtMjQuMyA0LjljLTExLjQgMi4zLTIwLjggOS4yLTI2LjQgMTguNmMtMSAxLjctMS43IDMuNi0yLjEgNS42QzEuMyAyMjYuNyAwIDI0MS4yIDAgMjU2czEuMyAyOS4zIDMuNyA0My40Yy4zIDIgMSAzLjkgMi4xIDUuNmM1LjYgOS40IDE1LjEgMTYuMyAyNi40IDE4LjZsMjQuMyA0LjljMi42IC41IDUuNCAyLjYgNi45IDYuM2MwIDAgMCAwIDAgLjFsLjcgMS43YzAgMCAwIDAgMCAuMWMxLjUgMy43IDEgNy4xLS40IDkuNEw1MCAzNjYuNWMtNi40IDkuNi04LjIgMjEuMi01LjYgMzEuN2MuNSAxLjkgMS4zIDMuOCAyLjUgNS40YzE2LjggMjMuOCAzNy42IDQ0LjYgNjEuNSA2MS41YzEuNiAxLjIgMy41IDIgNS40IDIuNWMxMC42IDIuNiAyMi4xIC44IDMxLjctNS42bDIwLjYtMTMuOGMyLjItMS41IDUuNy0yIDkuNC0uNGMwIDAgMCAwIC4xIDBsMS43IC43YzAgMCAwIDAgLjEgMGMzLjcgMS41IDUuOCA0LjMgNi4zIDYuOWw0LjkgMjQuM2MyLjMgMTEuNCA5LjIgMjAuOCAxOC42IDI2LjRjMS43IDEgMy42IDEuNyA1LjYgMi4xYzE0LjEgMi40IDI4LjYgMy43IDQzLjQgMy43czI5LjMtMS4zIDQzLjQtMy43YzItLjMgMy45LTEgNS42LTIuMWM5LjQtNS42IDE2LjMtMTUuMSAxOC42LTI2LjRsNC45LTI0LjNjLjUtMi42IDIuNi01LjQgNi4zLTYuOWMwIDAgMCAwIC4xIDBsMS43LS43YzAgMCAwIDAgLjEgMGMzLjctMS41IDcuMS0xIDkuNCAuNEwzNjYuNSA0NjJjOS42IDYuNCAyMS4yIDguMiAzMS43IDUuNmMxLjktLjUgMy44LTEuMyA1LjQtMi41YzIzLjgtMTYuOCA0NC42LTM3LjYgNjEuNS02MS40YzEuMi0xLjYgMi0zLjUgMi41LTUuNGMyLjYtMTAuNiAuOC0yMi4xLTUuNi0zMS43bC0xMy44LTIwLjZjLTEuNS0yLjItMi01LjctLjQtOS40YzAgMCAwIDAgMC0uMWwuNy0xLjdjMCAwIDAgMCAwLS4xYzEuNS0zLjcgNC4zLTUuOCA2LjktNi4zbDI0LjMtNC45LTMuMS0xNS43IDMuMSAxNS43YzExLjQtMi4zIDIwLjgtOS4yIDI2LjQtMTguNmMxLTEuNyAxLjctMy42IDIuMS01LjZjMi40LTE0IDMuNy0yOC41IDMuNy00My4yYzAgMCAwIDAgMCAwbDAtLjRzMCAwIDAgMGMwLTE0LjctMS4zLTI5LjEtMy43LTQzLjJjLS4zLTItMS0zLjktMi4xLTUuNmMtNS42LTkuNC0xNS4xLTE2LjMtMjYuNC0xOC42bC0yNC4zLTQuOWMtMi42LS41LTUuNC0yLjYtNi45LTYuM2MwIDAgMCAwIDAtLjFsLS43LTEuN2MwIDAgMCAwIDAtLjFjLTEuNS0zLjctMS03LjEgLjQtOS40TDQ2MiAxNDUuNWM2LjQtOS42IDguMi0yMS4yIDUuNi0zMS43Yy0uNS0xLjktMS4zLTMuOC0yLjUtNS40Yy04LjMtMTEuNy0xNy41LTIyLjctMjcuNi0zMi45YzAgMCAwIDAgMCAwbC0uOS0uOWMwIDAgMCAwIDAgMGMtMTAuMS0xMC4xLTIxLjEtMTkuMy0zMi45LTI3LjZjLTEuNi0xLjItMy41LTItNS40LTIuNWMtMTAuNi0yLjYtMjIuMS0uOC0zMS43IDUuNkwzNDUuOSA2My43Yy0yLjIgMS41LTUuNyAyLTkuNCAuNGMwIDAgMCAwLS4xIDBsLTEuNy0uN2MwIDAgMCAwLS4xIDBjLTMuNy0xLjUtNS44LTQuMy02LjMtNi45bC00LjktMjQuM2MtMi4zLTExLjQtOS4yLTIwLjgtMTguNi0yNi40Yy0xLjctMS0zLjYtMS43LTUuNi0yLjFDMjg1LjMgMS4zIDI3MC44IDAgMjU2IDB6TTE5MiAyNTZhNjQgNjQgMCAxIDEgMTI4IDAgNjQgNjQgMCAxIDEgLTEyOCAwem0xNjAgMGE5NiA5NiAwIDEgMCAtMTkyIDAgOTYgOTYgMCAxIDAgMTkyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const GearComplex: typeof Icon = x => (
    <Icon {...x}>
        <path d="M215 62.8l4.9-24.3-15.7-3.1 15.7 3.1c.3-1.5 1-2.8 1.9-3.8C232.9 32.9 244.4 32 256 32s23.1 .9 34.2 2.6c1 1.1 1.6 2.4 1.9 3.8L297 62.8c2.9 14.4 13.2 25.2 25.5 30.3c0 0 0 0 0 0l1.5 .6c0 0 0 0 0 0c12.3 5.2 27.3 4.8 39.5-3.3l20.6-13.8c1.2-.8 2.6-1.3 4.1-1.3c9.1 6.7 17.7 14 25.6 21.9l.8 .8s0 0 0 0c7.9 8 15.3 16.5 21.9 25.6c-.1 1.4-.5 2.8-1.3 4.1l-13.8 20.6c-8.1 12.2-8.5 27.1-3.3 39.5c0 0 0 0 0 0l.6 1.5c0 0 0 0 0 0c5.1 12.4 15.9 22.6 30.3 25.5l24.3 4.9c1.5 .3 2.8 1 3.8 1.9c1.7 11.1 2.6 22.4 2.6 34l0 .4c0 11.6-.9 22.9-2.6 34c-1.1 1-2.4 1.6-3.8 1.9L449.2 297c-14.4 2.9-25.2 13.2-30.3 25.5c0 0 0 0 0 0l-.6 1.5c0 0 0 0 0 0c-5.2 12.3-4.8 27.3 3.3 39.5l13.8 20.6c.8 1.2 1.3 2.6 1.3 4.1c-13.6 18.5-29.9 34.9-48.4 48.4c-1.4-.1-2.8-.5-4.1-1.3l-20.6-13.8c-12.2-8.1-27.1-8.5-39.5-3.3c0 0 0 0 0 0l-1.5 .6c0 0 0 0 0 0c-12.4 5.1-22.6 15.9-25.5 30.3l-4.9 24.3c-.3 1.5-1 2.8-1.9 3.8c-11.1 1.7-22.6 2.6-34.2 2.6s-23.1-.9-34.2-2.6c-1-1.1-1.6-2.4-1.9-3.8L215 449.2c-2.9-14.4-13.2-25.2-25.5-30.3c0 0 0 0 0 0l-1.5-.6c0 0 0 0 0 0c-12.3-5.2-27.3-4.8-39.5 3.3l-20.6 13.8c-1.2 .8-2.6 1.3-4.1 1.3c-18.5-13.6-34.9-29.9-48.4-48.4c.1-1.4 .5-2.8 1.3-4.1l13.8-20.6c8.1-12.2 8.5-27.1 3.3-39.5c0 0 0 0 0 0l-.6-1.5c0 0 0 0 0 0c-5.1-12.4-15.9-22.6-30.3-25.5l-24.3-4.9c-1.5-.3-2.8-1-3.8-1.9C32.9 279.1 32 267.6 32 256s.9-23.1 2.6-34.2c1.1-1 2.4-1.6 3.8-1.9L62.8 215c14.4-2.9 25.2-13.2 30.3-25.5c0 0 0 0 0 0l.6-1.5c0 0 0 0 0 0c5.2-12.3 4.8-27.3-3.3-39.5L76.6 127.7c-.8-1.2-1.3-2.6-1.3-4.1c6.7-9.1 14-17.7 22-25.7l.8-.8s0 0 0 0c8-7.9 16.6-15.3 25.7-22c1.4 .1 2.8 .5 4.1 1.3l20.6 13.8c12.2 8.1 27.1 8.5 39.5 3.3c0 0 0 0 0 0l1.5-.6c0 0 0 0 0 0c12.4-5.1 22.7-15.9 25.5-30.3zM256 0c-14.8 0-29.3 1.3-43.4 3.7c-2 .3-3.9 1-5.6 2.1c-9.4 5.6-16.3 15.1-18.6 26.4l-4.9 24.3c-.5 2.6-2.6 5.4-6.3 6.9c0 0 0 0 0 0c0 0 0 0-.1 0l-1.7 .7s0 0 0 0c0 0 0 0-.1 0c-3.7 1.5-7.1 1-9.4-.4L145.5 50c-9.6-6.4-21.2-8.2-31.7-5.6c-1.9 .5-3.8 1.3-5.4 2.5C96.6 55.2 85.6 64.4 75.4 74.5c0 0 0 0 0 0l-.8 .8c0 0 0 0 0 0C64.4 85.6 55.2 96.6 46.9 108.3c-1.2 1.6-2 3.5-2.5 5.4c-2.6 10.6-.8 22.1 5.6 31.7l13.8 20.6c1.5 2.2 2 5.7 .4 9.4c0 0 0 0 0 .1l-.7 1.7s0 0 0 0c0 0 0 0 0 .1c-1.5 3.7-4.3 5.8-6.9 6.3l-24.3 4.9c-11.4 2.3-20.8 9.2-26.4 18.6c-1 1.7-1.7 3.6-2.1 5.6C1.3 226.7 0 241.2 0 256s1.3 29.3 3.7 43.4c.3 2 1 3.9 2.1 5.6c5.6 9.4 15.1 16.3 26.4 18.6l24.3 4.9c2.6 .5 5.4 2.6 6.9 6.3c0 0 0 0 0 .1l.7 1.7c0 0 0 0 0 .1c1.5 3.7 1 7.1-.4 9.4L50 366.5c-6.4 9.6-8.2 21.2-5.6 31.7c.5 1.9 1.3 3.8 2.5 5.4c16.8 23.8 37.6 44.6 61.5 61.5c1.6 1.2 3.5 2 5.4 2.5c10.6 2.6 22.1 .8 31.7-5.6l20.6-13.8c2.2-1.5 5.7-2 9.4-.4c0 0 0 0 .1 0l1.7 .7c0 0 0 0 .1 0c3.7 1.5 5.8 4.3 6.3 6.9l4.9 24.3c2.3 11.4 9.2 20.8 18.6 26.4c1.7 1 3.6 1.7 5.6 2.1c14.1 2.4 28.6 3.7 43.4 3.7s29.3-1.3 43.4-3.7c2-.3 3.9-1 5.6-2.1c9.4-5.6 16.3-15.1 18.6-26.4l4.9-24.3c.5-2.6 2.6-5.4 6.3-6.9c0 0 0 0 .1 0l1.7-.7c0 0 0 0 .1 0c3.7-1.5 7.1-1 9.4 .4L366.5 462c9.6 6.4 21.2 8.2 31.7 5.6c1.9-.5 3.8-1.3 5.4-2.5c23.8-16.8 44.6-37.6 61.5-61.4c1.2-1.6 2-3.5 2.5-5.4c2.6-10.6 .8-22.1-5.6-31.7l-13.8-20.6c-1.5-2.2-2-5.7-.4-9.4c0 0 0 0 0-.1l.7-1.7c0 0 0 0 0-.1c1.5-3.7 4.3-5.8 6.9-6.3l24.3-4.9-3.1-15.7 3.1 15.7c11.4-2.3 20.8-9.2 26.4-18.6c1-1.7 1.7-3.6 2.1-5.6c2.4-14 3.7-28.5 3.7-43.2c0 0 0 0 0 0l0-.4s0 0 0 0c0-14.7-1.3-29.1-3.7-43.2c-.3-2-1-3.9-2.1-5.6c-5.6-9.4-15.1-16.3-26.4-18.6l-24.3-4.9c-2.6-.5-5.4-2.6-6.9-6.3c0 0 0 0 0-.1l-.7-1.7c0 0 0 0 0-.1c-1.5-3.7-1-7.1 .4-9.4L462 145.5c6.4-9.6 8.2-21.2 5.6-31.7c-.5-1.9-1.3-3.8-2.5-5.4c-8.3-11.7-17.5-22.7-27.6-32.9c0 0 0 0 0 0l-.9-.9c0 0 0 0 0 0c-10.1-10.1-21.1-19.3-32.9-27.6c-1.6-1.2-3.5-2-5.4-2.5c-10.6-2.6-22.1-.8-31.7 5.6L345.9 63.7c-2.2 1.5-5.7 2-9.4 .4c0 0 0 0-.1 0l-1.7-.7c0 0 0 0-.1 0c-3.7-1.5-5.8-4.3-6.3-6.9l-4.9-24.3c-2.3-11.4-9.2-20.8-18.6-26.4c-1.7-1-3.6-1.7-5.6-2.1C285.3 1.3 270.8 0 256 0zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm160 0a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
    </Icon>
);

export default GearComplex;