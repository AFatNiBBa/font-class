
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-hearts` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-hearts?s=sharp-thin face-smile-hearts}
 * @preview ![face-smile-hearts](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTYwIDI1NmMwLTE5LjUtMi4zLTM4LjUtNi43LTU2LjdsMTMuMS0xMy4xYzYuMyAyMi4yIDkuNiA0NS42IDkuNiA2OS44YzAgMjMuNi0zLjIgNDYuNS05LjIgNjguMmMtNS4xIDEuOC0xMC4xIDQtMTQuOCA2LjhjLTEuMS0uNi0yLjItMS4zLTMuNC0xLjlDNTU2IDMwNi4xIDU2MCAyODEuNSA1NjAgMjU2ek00NTQuMyA0NTQuOWwuNSAuNSAuNCAuNCAxMC41IDEwLjVDNDI0LjUgNDk1LjIgMzc0LjIgNTEyIDMyMCA1MTJjLTU4LjMgMC0xMTIuMS0xOS41LTE1NS4xLTUyLjNsMTEuNC0xMS40YzQwLjEgMzAgODkuOCA0Ny43IDE0My43IDQ3LjdjNDkuOCAwIDk2LTE1LjIgMTM0LjMtNDEuMXpNMzIwIDBjNDEuMiAwIDgwLjIgOS43IDExNC43IDI3LjFjLTEuNCA1LjQtMi4zIDEwLjktMi42IDE2LjdDMzk4LjYgMjYgMzYwLjUgMTYgMzIwIDE2QzE4Ny41IDE2IDgwIDEyMy41IDgwIDI1NmMwIDIwLjIgMi41IDM5LjggNy4yIDU4LjVjLTUuNy0zLjMtMTEuOC01LjgtMTguMS03LjZjLTMuMy0xNi41LTUuMS0zMy41LTUuMS01MUM2NCAxMTQuNiAxNzguNiAwIDMyMCAwem0wIDQwMGMtNTYuNyAwLTk2LjEtMzUuNC0xMTguNi02Ny40bDEzLjEtOS4yQzIzNS40IDM1My4yIDI3MC42IDM4NCAzMjAgMzg0czg0LjYtMzAuOCAxMDUuNC02MC42bDEzLjEgOS4yQzQxNi4xIDM2NC42IDM3Ni43IDQwMCAzMjAgNDAwek0xOTguNiAyMjcuOWwtMy45IDctMTMuOS03LjggMy45LTdjMTMuMS0yMy40IDMzLjYtMzYuMSA1NS0zNi4xczQxLjggMTIuNyA1NSAzNi4xbDMuOSA3LTEzLjkgNy44LTMuOS03Yy0xMC45LTE5LjMtMjYuNC0yNy45LTQxLTI3LjlzLTMwLjIgOC42LTQxIDI3Ljl6bTIwMS0yNy45Yy0xNC42IDAtMzAuMiA4LjYtNDEgMjcuOWwtMy45IDctMTMuOS03LjggMy45LTdjMTMuMS0yMy40IDMzLjYtMzYuMSA1NS0zNi4xczQxLjggMTIuNyA1NSAzNi4xbDMuOSA3LTEzLjkgNy44LTMuOS03Yy0xMC45LTE5LjMtMjYuNC0yNy45LTQxLTI3Ljl6TTQ3LjYgMzM2YzEyLjYgMCAyNC43IDUgMzMuNyAxMy45bDYuNyA2LjcgNi43LTYuN2M4LjktOC45IDIxLTEzLjkgMzMuNy0xMy45YzI2LjMgMCA0Ny42IDIxLjMgNDcuNiA0Ny42YzAgMTIuNi01IDI0LjctMTMuOSAzMy43TDkzLjcgNDg1LjcgODggNDkxLjNsLTUuNy01LjdMMTMuOSA0MTcuM0M1IDQwOC4zIDAgMzk2LjIgMCAzODMuNkMwIDM1Ny4zIDIxLjMgMzM2IDQ3LjYgMzM2ek0xNiAzODMuNmMwIDguNCAzLjMgMTYuNCA5LjMgMjIuM0w4OCA0NjguN2w2Mi43LTYyLjdjNS45LTUuOSA5LjMtMTQgOS4zLTIyLjNjMC0xNy40LTE0LjEtMzEuNi0zMS42LTMxLjZjLTguNCAwLTE2LjQgMy4zLTIyLjMgOS4zTDkzLjcgMzczLjcgODggMzc5LjNsLTUuNy01LjdMNjkuOSAzNjEuM0M2NCAzNTUuMyA1NiAzNTIgNDcuNiAzNTJDMzAuMSAzNTIgMTYgMzY2LjEgMTYgMzgzLjZ6bTQ0OC0zMzZDNDY0IDIxLjMgNDg1LjMgMCA1MTEuNiAwYzEyLjYgMCAyNC43IDUgMzMuNyAxMy45bDYuNyA2LjcgNi43LTYuN0M1NjcuNyA1IDU3OS44IDAgNTkyLjQgMEM2MTguNyAwIDY0MCAyMS4zIDY0MCA0Ny42YzAgMTIuNi01IDI0LjctMTMuOSAzMy43bC02OC40IDY4LjQtNS43IDUuNy01LjctNS43TDQ3Ny45IDgxLjNDNDY5IDcyLjMgNDY0IDYwLjIgNDY0IDQ3LjZ6TTUxMS42IDE2QzQ5NC4xIDE2IDQ4MCAzMC4xIDQ4MCA0Ny42YzAgOC40IDMuMyAxNi40IDkuMyAyMi4zTDU1MiAxMzIuN2w2Mi43LTYyLjdjNS45LTUuOSA5LjMtMTQgOS4zLTIyLjNDNjI0IDMwLjEgNjA5LjkgMTYgNTkyLjQgMTZjLTguNCAwLTE2LjQgMy4zLTIyLjMgOS4zTDU1Ny43IDM3LjcgNTUyIDQzLjNsLTUuNy01LjdMNTMzLjkgMjUuM0M1MjggMTkuMyA1MjAgMTYgNTExLjYgMTZ6bTMzLjcgMzQ5LjlsNi43IDYuNyA2LjctNi43YzguOS04LjkgMjEtMTMuOSAzMy43LTEzLjljMjYuMyAwIDQ3LjYgMjEuMyA0Ny42IDQ3LjZjMCAxMi42LTUgMjQuNy0xMy45IDMzLjdsLTY4LjQgNjguNC01LjcgNS43LTUuNy01LjctNjguNC02OC40Yy04LjktOC45LTEzLjktMjEtMTMuOS0zMy43YzAtMjYuMyAyMS4zLTQ3LjYgNDcuNi00Ny42YzEyLjYgMCAyNC43IDUgMzMuNyAxMy45ek00ODAgMzk5LjZjMCA4LjQgMy4zIDE2LjQgOS4zIDIyLjNMNTUyIDQ4NC43bDYyLjctNjIuN2M1LjktNS45IDkuMy0xNCA5LjMtMjIuM2MwLTE3LjQtMTQuMS0zMS42LTMxLjYtMzEuNmMtOC40IDAtMTYuNCAzLjMtMjIuMyA5LjNsLTEyLjQgMTIuNC01LjcgNS43LTUuNy01LjctMTIuNC0xMi40Yy01LjktNS45LTE0LTkuMy0yMi4zLTkuM2MtMTcuNCAwLTMxLjYgMTQuMS0zMS42IDMxLjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FaceSmileHearts: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M560 256c0-19.5-2.3-38.5-6.7-56.7l13.1-13.1c6.3 22.2 9.6 45.6 9.6 69.8c0 23.6-3.2 46.5-9.2 68.2c-5.1 1.8-10.1 4-14.8 6.8c-1.1-.6-2.2-1.3-3.4-1.9C556 306.1 560 281.5 560 256zM454.3 454.9l.5 .5 .4 .4 10.5 10.5C424.5 495.2 374.2 512 320 512c-58.3 0-112.1-19.5-155.1-52.3l11.4-11.4c40.1 30 89.8 47.7 143.7 47.7c49.8 0 96-15.2 134.3-41.1zM320 0c41.2 0 80.2 9.7 114.7 27.1c-1.4 5.4-2.3 10.9-2.6 16.7C398.6 26 360.5 16 320 16C187.5 16 80 123.5 80 256c0 20.2 2.5 39.8 7.2 58.5c-5.7-3.3-11.8-5.8-18.1-7.6c-3.3-16.5-5.1-33.5-5.1-51C64 114.6 178.6 0 320 0zm0 400c-56.7 0-96.1-35.4-118.6-67.4l13.1-9.2C235.4 353.2 270.6 384 320 384s84.6-30.8 105.4-60.6l13.1 9.2C416.1 364.6 376.7 400 320 400zM198.6 227.9l-3.9 7-13.9-7.8 3.9-7c13.1-23.4 33.6-36.1 55-36.1s41.8 12.7 55 36.1l3.9 7-13.9 7.8-3.9-7c-10.9-19.3-26.4-27.9-41-27.9s-30.2 8.6-41 27.9zm201-27.9c-14.6 0-30.2 8.6-41 27.9l-3.9 7-13.9-7.8 3.9-7c13.1-23.4 33.6-36.1 55-36.1s41.8 12.7 55 36.1l3.9 7-13.9 7.8-3.9-7c-10.9-19.3-26.4-27.9-41-27.9zM47.6 336c12.6 0 24.7 5 33.7 13.9l6.7 6.7 6.7-6.7c8.9-8.9 21-13.9 33.7-13.9c26.3 0 47.6 21.3 47.6 47.6c0 12.6-5 24.7-13.9 33.7L93.7 485.7 88 491.3l-5.7-5.7L13.9 417.3C5 408.3 0 396.2 0 383.6C0 357.3 21.3 336 47.6 336zM16 383.6c0 8.4 3.3 16.4 9.3 22.3L88 468.7l62.7-62.7c5.9-5.9 9.3-14 9.3-22.3c0-17.4-14.1-31.6-31.6-31.6c-8.4 0-16.4 3.3-22.3 9.3L93.7 373.7 88 379.3l-5.7-5.7L69.9 361.3C64 355.3 56 352 47.6 352C30.1 352 16 366.1 16 383.6zm448-336C464 21.3 485.3 0 511.6 0c12.6 0 24.7 5 33.7 13.9l6.7 6.7 6.7-6.7C567.7 5 579.8 0 592.4 0C618.7 0 640 21.3 640 47.6c0 12.6-5 24.7-13.9 33.7l-68.4 68.4-5.7 5.7-5.7-5.7L477.9 81.3C469 72.3 464 60.2 464 47.6zM511.6 16C494.1 16 480 30.1 480 47.6c0 8.4 3.3 16.4 9.3 22.3L552 132.7l62.7-62.7c5.9-5.9 9.3-14 9.3-22.3C624 30.1 609.9 16 592.4 16c-8.4 0-16.4 3.3-22.3 9.3L557.7 37.7 552 43.3l-5.7-5.7L533.9 25.3C528 19.3 520 16 511.6 16zm33.7 349.9l6.7 6.7 6.7-6.7c8.9-8.9 21-13.9 33.7-13.9c26.3 0 47.6 21.3 47.6 47.6c0 12.6-5 24.7-13.9 33.7l-68.4 68.4-5.7 5.7-5.7-5.7-68.4-68.4c-8.9-8.9-13.9-21-13.9-33.7c0-26.3 21.3-47.6 47.6-47.6c12.6 0 24.7 5 33.7 13.9zM480 399.6c0 8.4 3.3 16.4 9.3 22.3L552 484.7l62.7-62.7c5.9-5.9 9.3-14 9.3-22.3c0-17.4-14.1-31.6-31.6-31.6c-8.4 0-16.4 3.3-22.3 9.3l-12.4 12.4-5.7 5.7-5.7-5.7-12.4-12.4c-5.9-5.9-14-9.3-22.3-9.3c-17.4 0-31.6 14.1-31.6 31.6z" />
    </Icon>
);

export default FaceSmileHearts;