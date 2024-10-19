
import { Icon } from "../../index";

/**
 * A component that renders the `user-shakespeare` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-shakespeare?s=regular user-shakespeare}
 * @preview ![user-shakespeare](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDQ4Yy00NC4yIDAtODAgMzUuOC04MCA4MGwwIDMyYzAgNDAuMSAyOS41IDczLjMgNjggNzkuMWwwLTE1LjFjMC02LjYgNS40LTEyIDEyLTEyczEyIDUuNCAxMiAxMmwwIDE1LjFjMzguNS01LjggNjgtMzkgNjgtNzkuMWwwLTMyYzAtNDQuMi0zNS44LTgwLTgwLTgwek05NiAxMjhDOTYgNTcuMyAxNTMuMyAwIDIyNCAwczEyOCA1Ny4zIDEyOCAxMjhsMCAyMy4yYzAgMTAuOSAzLjcgMjEuNSAxMC41IDMwTDM3My42IDE5NWM2LjcgOC40IDEwLjQgMTguOCAxMC40IDI5LjZjMCAyNi4yLTIxLjIgNDcuNC00Ny40IDQ3LjRMMjg2IDI3MmMtMTguNCAxMC4yLTM5LjUgMTYtNjIgMTZzLTQzLjYtNS44LTYyLTE2bC01MC42IDBDODUuMiAyNzIgNjQgMjUwLjggNjQgMjI0LjZjMC0xMC44IDMuNy0yMS4yIDEwLjQtMjkuNmwxMS4xLTEzLjljNi44LTguNSAxMC41LTE5LjEgMTAuNS0zMEw5NiAxMjh6bTk2LTE2YTE2IDE2IDAgMSAxIDAgMzIgMTYgMTYgMCAxIDEgMC0zMnptNDggMTZhMTYgMTYgMCAxIDEgMzIgMCAxNiAxNiAwIDEgMSAtMzIgMHptLTcuNSAzOS41YzIgMiA2IDUuMyAxMC43IDguMWM0LjkgMi45IDkuNCA0LjQgMTIuOCA0LjRjNi42IDAgMTIgNS40IDEyIDEycy01LjQgMTItMTIgMTJjLTkuNSAwLTE4LjMtMy44LTI0LjgtNy42Yy0yLjUtMS41LTQuOS0zLjEtNy4xLTQuNkMyMTEuNiAyMDEgMTk5IDIwNCAxOTIgMjA0Yy02LjYgMC0xMi01LjQtMTItMTJzNS40LTEyIDEyLTEyYzIuMSAwIDEyLjktMS45IDIzLjUtMTIuNWM0LjctNC43IDEyLjMtNC43IDE3IDB6TTI0MCA0MTYuN2MtLjMgOC41LTcuNCAxNS4zLTE2IDE1LjNzLTE1LjYtNi44LTE2LTE1LjNjLTIzLjEgMS45LTQyLjQgNy43LTU2LjUgMTMuNWMtOC42IDMuNS0xNS4yIDctMTkuNiA5LjZjLTIuMiAxLjMtMy44IDIuMy00LjggMi45Yy0uNSAuMy0uOCAuNi0xIC43bC0uMSAuMWMtNy4zIDUuMy0xNi45IDYtMjQuOSAxLjlDOTMuMSA0NDEuMyA4OCA0MzMgODggNDI0bDAtMjkuMUM2Ny43IDQxMi4xIDUzLjUgNDM2LjQgNDkuMyA0NjRMMjA4IDQ2NGMwLTguOCA3LjItMTYgMTYtMTZzMTYgNy4yIDE2IDE2bDE1OC43IDBjLTQuMi0yNy42LTE4LjQtNTEuOS0zOC43LTY5LjFsMCAyOS4xYzAgOS01LjEgMTcuMy0xMy4xIDIxLjRjLTggNC4xLTE3LjYgMy4zLTI0LjktMS45bC0uMS0uMWMtLjItLjEtLjUtLjMtMS0uN2MtMS0uNi0yLjYtMS43LTQuOC0yLjljLTQuNC0yLjUtMTEtNi0xOS42LTkuNmMtMTQuMS01LjgtMzMuMy0xMS42LTU2LjUtMTMuNXpNMTE3LjkgMzI1LjlDMTMzLjQgMzEyLjMgMTUzLjcgMzA0IDE3NiAzMDRsOTYgMGMyMi4zIDAgNDIuNiA4LjMgNTguMSAyMS45YzY4IDE4LjkgMTE3LjkgODEuMyAxMTcuOSAxNTUuNGMwIDE3LTEzLjggMzAuNy0zMC43IDMwLjdMMzAuNyA1MTJDMTMuOCA1MTIgMCA0OTguMiAwIDQ4MS4zYzAtNzQgNDkuOS0xMzYuNCAxMTcuOS0xNTUuNHpNMjI0IDM2OGMzNS45IDAgNjUuOCA4IDg3LjMgMTYuNEMzMDcuNyAzNjYgMjkxLjUgMzUyIDI3MiAzNTJsLTk2IDBjLTE5LjUgMC0zNS43IDE0LTM5LjMgMzIuNEMxNTguMiAzNzYgMTg4LjEgMzY4IDIyNCAzNjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const UserShakespeare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48c-44.2 0-80 35.8-80 80l0 32c0 40.1 29.5 73.3 68 79.1l0-15.1c0-6.6 5.4-12 12-12s12 5.4 12 12l0 15.1c38.5-5.8 68-39 68-79.1l0-32c0-44.2-35.8-80-80-80zM96 128C96 57.3 153.3 0 224 0s128 57.3 128 128l0 23.2c0 10.9 3.7 21.5 10.5 30L373.6 195c6.7 8.4 10.4 18.8 10.4 29.6c0 26.2-21.2 47.4-47.4 47.4L286 272c-18.4 10.2-39.5 16-62 16s-43.6-5.8-62-16l-50.6 0C85.2 272 64 250.8 64 224.6c0-10.8 3.7-21.2 10.4-29.6l11.1-13.9c6.8-8.5 10.5-19.1 10.5-30L96 128zm96-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-7.5 39.5c2 2 6 5.3 10.7 8.1c4.9 2.9 9.4 4.4 12.8 4.4c6.6 0 12 5.4 12 12s-5.4 12-12 12c-9.5 0-18.3-3.8-24.8-7.6c-2.5-1.5-4.9-3.1-7.1-4.6C211.6 201 199 204 192 204c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.1 0 12.9-1.9 23.5-12.5c4.7-4.7 12.3-4.7 17 0zM240 416.7c-.3 8.5-7.4 15.3-16 15.3s-15.6-6.8-16-15.3c-23.1 1.9-42.4 7.7-56.5 13.5c-8.6 3.5-15.2 7-19.6 9.6c-2.2 1.3-3.8 2.3-4.8 2.9c-.5 .3-.8 .6-1 .7l-.1 .1c-7.3 5.3-16.9 6-24.9 1.9C93.1 441.3 88 433 88 424l0-29.1C67.7 412.1 53.5 436.4 49.3 464L208 464c0-8.8 7.2-16 16-16s16 7.2 16 16l158.7 0c-4.2-27.6-18.4-51.9-38.7-69.1l0 29.1c0 9-5.1 17.3-13.1 21.4c-8 4.1-17.6 3.3-24.9-1.9l-.1-.1c-.2-.1-.5-.3-1-.7c-1-.6-2.6-1.7-4.8-2.9c-4.4-2.5-11-6-19.6-9.6c-14.1-5.8-33.3-11.6-56.5-13.5zM117.9 325.9C133.4 312.3 153.7 304 176 304l96 0c22.3 0 42.6 8.3 58.1 21.9c68 18.9 117.9 81.3 117.9 155.4c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-74 49.9-136.4 117.9-155.4zM224 368c35.9 0 65.8 8 87.3 16.4C307.7 366 291.5 352 272 352l-96 0c-19.5 0-35.7 14-39.3 32.4C158.2 376 188.1 368 224 368z" />
    </Icon>
);

export default UserShakespeare;