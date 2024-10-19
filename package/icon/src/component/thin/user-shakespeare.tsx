
import { Icon } from "../../index";

/**
 * A component that renders the `user-shakespeare` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-shakespeare?s=thin user-shakespeare}
 * @preview ![user-shakespeare](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzEyIDE2OGwwLTY0YzAtNDguNi0zOS40LTg4LTg4LTg4cy04OCAzOS40LTg4IDg4bDAgNjRjMCA0NS45IDM1LjEgODMuNiA4MCA4Ny42bDAtMzEuNmMwLTQuNCAzLjYtOCA4LThzOCAzLjYgOCA4bDAgMzEuNmM0NC45LTQgODAtNDEuNyA4MC04Ny42ek0xMjAgMTA2LjhjLTUgNS42LTggMTMuMS04IDIxLjJsMCA5LjVjMCAxMi42LTMuNyAyNS0xMC43IDM1LjVMODQuNSAxOThjLTMgNC40LTQuNSA5LjYtNC41IDE1YzAgMTQuOSAxMi4xIDI3IDI3IDI3bDE0LjUgMGMzLjUgNS44IDcuNyAxMS4yIDEyLjQgMTZMMTA3IDI1NmMtMjMuNyAwLTQzLTE5LjItNDMtNDNjMC04LjUgMi41LTE2LjggNy4yLTIzLjhsMTYuNy0yNS4xYzUuMy03LjkgOC4xLTE3LjEgOC4xLTI2LjZsMC05LjVjMC0xOC40IDEwLjQtMzQuNCAyNS42LTQyLjVDMTMwLjQgMzYuOSAxNzIuOSAwIDIyNCAwczkzLjYgMzYuOSAxMDIuNCA4NS41YzE1LjIgOCAyNS42IDI0IDI1LjYgNDIuNWwwIDkuNWMwIDkuNSAyLjggMTguNyA4LjEgMjYuNmwxNi43IDI1LjFjNC43IDcuMSA3LjIgMTUuNCA3LjIgMjMuOGMwIDIzLjctMTkuMiA0My00MyA0M2wtMjYuOSAwYzQuNy00LjggOC45LTEwLjIgMTIuNC0xNmwxNC41IDBjMTQuOSAwIDI3LTEyLjEgMjctMjdjMC01LjMtMS42LTEwLjUtNC41LTE1TDM0Ni43IDE3M2MtNy0xMC41LTEwLjctMjIuOS0xMC43LTM1LjVsMC05LjVjMC04LjEtMy0xNS41LTgtMjEuMmwwIDYxLjJjMCA1Ny40LTQ2LjYgMTA0LTEwNCAxMDRzLTEwNC00Ni42LTEwNC0xMDRsMC02MS4yek0zNTIgMzc2bDAgMzJjMCAzLTEuNyA1LjgtNC40IDcuMXMtNS45IDEuMS04LjMtLjdjMCAwIDAgMCAwIDBjMCAwIDAgMCAwIDBsLS4zLS4yYy0uMy0uMi0uNy0uNS0xLjMtLjljLTEuMi0uOC0zLjEtMi01LjYtMy40Yy01LTIuOC0xMi41LTYuNy0yMi40LTEwLjVDMjkwIDM5MS44IDI2MSAzODQgMjI0IDM4NHMtNjYgNy44LTg1LjcgMTUuNWMtOS44IDMuOC0xNy40IDcuNy0yMi40IDEwLjVjLTIuNSAxLjQtNC40IDIuNi01LjYgMy40Yy0uNiAuNC0xLjEgLjctMS4zIC45bC0uMyAuMmMwIDAgMCAwIDAgMEwxMDQgNDA4YzQuNyA2LjUgNC43IDYuNSA0LjcgNi41Yy0yLjQgMS44LTUuNyAyLTguMyAuN1M5NiA0MTEgOTYgNDA4bDAtMzJjMC05LjYgMS45LTE4LjcgNS4zLTI3LjFDNTEgMzcxLjggMTYgNDIyLjQgMTYgNDgxLjNjMCA4LjEgNi42IDE0LjcgMTQuNyAxNC43bDM4Ni42IDBjOC4xIDAgMTQuNy02LjYgMTQuNy0xNC43YzAtNTguOC0zNS0xMDkuNS04NS4zLTEzMi4zYzMuNCA4LjQgNS4zIDE3LjUgNS4zIDI3LjF6TTAgNDgxLjNDMCA0MDggNDguOCAzNDYuMiAxMTUuNyAzMjYuNUMxMjguOCAzMTIuNyAxNDcuNCAzMDQgMTY4IDMwNGwxMTIgMGMyMC42IDAgMzkuMiA4LjcgNTIuMyAyMi41QzM5OS4yIDM0Ni4yIDQ0OCA0MDggNDQ4IDQ4MS4zYzAgMTctMTMuOCAzMC43LTMwLjcgMzAuN0wzMC43IDUxMkMxMy44IDUxMiAwIDQ5OC4yIDAgNDgxLjN6TTE2OCAzMjBjLTMwLjkgMC01NiAyNS4xLTU2IDU2bDAgMTcuOWM1LjMtMi44IDEyLjEtNi4xIDIwLjUtOS40YzE5LjgtNy43IDQ4LTE1LjQgODMuNS0xNi40bDAtLjEgMC00OC00OCAwem02NCAwbDAgNDggMCAuMWMzNS41IDEgNjMuNyA4LjcgODMuNSAxNi40YzguNCAzLjMgMTUuMiA2LjYgMjAuNSA5LjRsMC0xNy45YzAtMzAuOS0yNS4xLTU2LTU2LTU2bC00OCAwem0tMjAgOTZhMTIgMTIgMCAxIDEgMjQgMCAxMiAxMiAwIDEgMSAtMjQgMHptMTIgMzZhMTIgMTIgMCAxIDEgMCAyNCAxMiAxMiAwIDEgMSAwLTI0em01LjctMjgxLjdjMi45IDIuOSA4LjMgNy40IDE0LjkgMTEuMmM2LjYgMy45IDEzLjUgNi40IDE5LjUgNi40YzQuNCAwIDggMy42IDggOHMtMy42IDgtOCA4Yy0xMCAwLTE5LjgtNC4xLTI3LjUtOC42Yy00LjctMi43LTktNS44LTEyLjQtOC42QzIwOC4yIDIwMC4xIDE5MS45IDIwNCAxODQgMjA0Yy00LjQgMC04LTMuNi04LThzMy42LTggOC04YzQuNSAwIDE5LjgtMy4xIDM0LjMtMTcuN2MzLjEtMy4xIDguMi0zLjEgMTEuMyAwek0xODAgMTI4YTEyIDEyIDAgMSAxIDI0IDAgMTIgMTIgMCAxIDEgLTI0IDB6bTc2LTEyYTEyIDEyIDAgMSAxIDAgMjQgMTIgMTIgMCAxIDEgMC0yNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const UserShakespeare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M312 168l0-64c0-48.6-39.4-88-88-88s-88 39.4-88 88l0 64c0 45.9 35.1 83.6 80 87.6l0-31.6c0-4.4 3.6-8 8-8s8 3.6 8 8l0 31.6c44.9-4 80-41.7 80-87.6zM120 106.8c-5 5.6-8 13.1-8 21.2l0 9.5c0 12.6-3.7 25-10.7 35.5L84.5 198c-3 4.4-4.5 9.6-4.5 15c0 14.9 12.1 27 27 27l14.5 0c3.5 5.8 7.7 11.2 12.4 16L107 256c-23.7 0-43-19.2-43-43c0-8.5 2.5-16.8 7.2-23.8l16.7-25.1c5.3-7.9 8.1-17.1 8.1-26.6l0-9.5c0-18.4 10.4-34.4 25.6-42.5C130.4 36.9 172.9 0 224 0s93.6 36.9 102.4 85.5c15.2 8 25.6 24 25.6 42.5l0 9.5c0 9.5 2.8 18.7 8.1 26.6l16.7 25.1c4.7 7.1 7.2 15.4 7.2 23.8c0 23.7-19.2 43-43 43l-26.9 0c4.7-4.8 8.9-10.2 12.4-16l14.5 0c14.9 0 27-12.1 27-27c0-5.3-1.6-10.5-4.5-15L346.7 173c-7-10.5-10.7-22.9-10.7-35.5l0-9.5c0-8.1-3-15.5-8-21.2l0 61.2c0 57.4-46.6 104-104 104s-104-46.6-104-104l0-61.2zM352 376l0 32c0 3-1.7 5.8-4.4 7.1s-5.9 1.1-8.3-.7c0 0 0 0 0 0c0 0 0 0 0 0l-.3-.2c-.3-.2-.7-.5-1.3-.9c-1.2-.8-3.1-2-5.6-3.4c-5-2.8-12.5-6.7-22.4-10.5C290 391.8 261 384 224 384s-66 7.8-85.7 15.5c-9.8 3.8-17.4 7.7-22.4 10.5c-2.5 1.4-4.4 2.6-5.6 3.4c-.6 .4-1.1 .7-1.3 .9l-.3 .2c0 0 0 0 0 0L104 408c4.7 6.5 4.7 6.5 4.7 6.5c-2.4 1.8-5.7 2-8.3 .7S96 411 96 408l0-32c0-9.6 1.9-18.7 5.3-27.1C51 371.8 16 422.4 16 481.3c0 8.1 6.6 14.7 14.7 14.7l386.6 0c8.1 0 14.7-6.6 14.7-14.7c0-58.8-35-109.5-85.3-132.3c3.4 8.4 5.3 17.5 5.3 27.1zM0 481.3C0 408 48.8 346.2 115.7 326.5C128.8 312.7 147.4 304 168 304l112 0c20.6 0 39.2 8.7 52.3 22.5C399.2 346.2 448 408 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3zM168 320c-30.9 0-56 25.1-56 56l0 17.9c5.3-2.8 12.1-6.1 20.5-9.4c19.8-7.7 48-15.4 83.5-16.4l0-.1 0-48-48 0zm64 0l0 48 0 .1c35.5 1 63.7 8.7 83.5 16.4c8.4 3.3 15.2 6.6 20.5 9.4l0-17.9c0-30.9-25.1-56-56-56l-48 0zm-20 96a12 12 0 1 1 24 0 12 12 0 1 1 -24 0zm12 36a12 12 0 1 1 0 24 12 12 0 1 1 0-24zm5.7-281.7c2.9 2.9 8.3 7.4 14.9 11.2c6.6 3.9 13.5 6.4 19.5 6.4c4.4 0 8 3.6 8 8s-3.6 8-8 8c-10 0-19.8-4.1-27.5-8.6c-4.7-2.7-9-5.8-12.4-8.6C208.2 200.1 191.9 204 184 204c-4.4 0-8-3.6-8-8s3.6-8 8-8c4.5 0 19.8-3.1 34.3-17.7c3.1-3.1 8.2-3.1 11.3 0zM180 128a12 12 0 1 1 24 0 12 12 0 1 1 -24 0zm76-12a12 12 0 1 1 0 24 12 12 0 1 1 0-24z" />
    </Icon>
);

export default UserShakespeare;