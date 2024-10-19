
import { Icon } from "../../index";

/**
 * A component that renders the `party-horn` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/party-horn?s=sharp-thin party-horn}
 * @preview ![party-horn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgNDhhMTYgMTYgMCAxIDAgMC0zMiAxNiAxNiAwIDEgMCAwIDMyek02NCAwYTMyIDMyIDAgMSAxIDAgNjRBMzIgMzIgMCAxIDEgNjQgMHptNjQuOSA0NjAuMkw1MS44IDM4My4xIDE4LjUgNDc1LjlsMTcuNyAxNy43IDkyLjgtMzMuM3ptMTYuNy02bDc3LjUtMjcuOEw4NS42IDI4OC45IDU3LjggMzY2LjRsODcuOCA4Ny44em05My43LTMzLjZsNzUuNi0yNy4xTDExOC41IDE5Ny4yIDkxLjQgMjcyLjhjLjggLjQgMS42IC45IDIuMyAxLjZsMTQ0IDE0NGMuNyAuNyAxLjIgMS40IDEuNiAyLjN6TTMyIDUxMkwwIDQ4MCAxMDYgMTg0LjdsNi0xNi43IDEyLjUgMTIuNSAyMDcgMjA3TDM0NCA0MDBsLTE2LjYgNkwzMiA1MTJ6TTQ5NiAxNjBhMTYgMTYgMCAxIDAgLTMyIDAgMTYgMTYgMCAxIDAgMzIgMHptLTQ4IDBhMzIgMzIgMCAxIDEgNjQgMCAzMiAzMiAwIDEgMSAtNjQgMHptMzIgMzA0YTE2IDE2IDAgMSAwIDAtMzIgMTYgMTYgMCAxIDAgMCAzMnptMC00OGEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6TTI1NiA4YzAgMzguNy0yMS4zIDc2LjQtNDEuNiAxMDMuOGMtMTAuMiAxMy44LTIwLjUgMjUuMy0yOC4xIDMzLjRjLTMuOCA0LTcgNy4yLTkuMyA5LjRjLTEuMSAxLjEtMiAxLjktMi42IDIuNWwtLjcgLjctLjIgLjJjMCAwIDAgMC0uMSAwYzAgMCAwIDAgMCAwczAgMCAwIDBMMTY4IDE1Mmw1LjQgNS45LTUuOSA1LjQtMTAuNy0xMS45IDUuOS01LjNzMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBjMCAwIDAgMCAwIDBsLjEtLjEgLjYtLjZjLjYtLjUgMS40LTEuMyAyLjQtMi4zYzIuMS0yIDUuMi01LjEgOC44LTguOWM3LjMtNy43IDE3LjEtMTguNyAyNi45LTMxLjlDMjIxLjMgNzUuNiAyNDAgNDEuMyAyNDAgOGwwLTggMTYgMCAwIDh6TTM2Ni42IDM0OC41czAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwbC00LjUgNi42LTEzLjMtOSA0LjUtNi42TDM2MCAzNDRjLTYuNi00LjUtNi42LTQuNS02LjYtNC41czAgMCAwIDBzMCAwIDAgMGMwIDAgMCAwIDAtLjFsLjEtLjIgLjUtLjhjLjUtLjYgMS4xLTEuNiAyLTIuN2MxLjctMi4zIDQuMy01LjYgNy43LTkuNWM2LjctNy44IDE2LjYtMTguMSAyOS40LTI4LjVDNDE4LjggMjc3LjEgNDU2LjUgMjU2IDUwNCAyNTZsOCAwIDAgMTYtOCAwYy00Mi41IDAtNzYuOCAxOC45LTEwMC43IDM4LjJjLTExLjkgOS42LTIxLjEgMTkuMy0yNy40IDI2LjVjLTMuMSAzLjYtNS41IDYuNi03IDguN2MtLjggMS0xLjQgMS44LTEuNyAyLjRsLS40IC42LS4xIC4xczAgMCAwIDB6TTQ5Mi41IDI4LjhjLTEyLjYgMTEuMS0yOC45IDE3LTQ1LjYgMTYuNWMtMjUuMi0uNy00NyAxNy40LTUxIDQyLjRMMzg5IDEzMS43Yy01LjkgMzcuNC0zNi44IDY1LjgtNzQuNiA2OC42Yy0xMy44IDEtMjcgNi40LTM3LjUgMTUuM2wtNy43IDYuNi02LjEgNS4yLTEwLjMtMTIuMiA2LjEtNS4yIDcuNy02LjVjMTMuMi0xMS4xIDI5LjUtMTcuOCA0Ni43LTE5LjFjMzAuNC0yLjIgNTUuMi0yNS4xIDU5LjktNTUuMWw2LjktNDMuOWM1LjItMzIuOSAzMy45LTU2LjggNjcuMi01NS45YzEyLjcgLjMgMjUuMS00LjEgMzQuNi0xMi41TDQ5OC43IDJsMTAuNiAxMkw0OTIuNSAyOC44eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PartyHorn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 48a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM64 0a32 32 0 1 1 0 64A32 32 0 1 1 64 0zm64.9 460.2L51.8 383.1 18.5 475.9l17.7 17.7 92.8-33.3zm16.7-6l77.5-27.8L85.6 288.9 57.8 366.4l87.8 87.8zm93.7-33.6l75.6-27.1L118.5 197.2 91.4 272.8c.8 .4 1.6 .9 2.3 1.6l144 144c.7 .7 1.2 1.4 1.6 2.3zM32 512L0 480 106 184.7l6-16.7 12.5 12.5 207 207L344 400l-16.6 6L32 512zM496 160a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 304a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM256 8c0 38.7-21.3 76.4-41.6 103.8c-10.2 13.8-20.5 25.3-28.1 33.4c-3.8 4-7 7.2-9.3 9.4c-1.1 1.1-2 1.9-2.6 2.5l-.7 .7-.2 .2c0 0 0 0-.1 0c0 0 0 0 0 0s0 0 0 0L168 152l5.4 5.9-5.9 5.4-10.7-11.9 5.9-5.3s0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.1-.1 .6-.6c.6-.5 1.4-1.3 2.4-2.3c2.1-2 5.2-5.1 8.8-8.9c7.3-7.7 17.1-18.7 26.9-31.9C221.3 75.6 240 41.3 240 8l0-8 16 0 0 8zM366.6 348.5s0 0 0 0s0 0 0 0s0 0 0 0l-4.5 6.6-13.3-9 4.5-6.6L360 344c-6.6-4.5-6.6-4.5-6.6-4.5s0 0 0 0s0 0 0 0c0 0 0 0 0-.1l.1-.2 .5-.8c.5-.6 1.1-1.6 2-2.7c1.7-2.3 4.3-5.6 7.7-9.5c6.7-7.8 16.6-18.1 29.4-28.5C418.8 277.1 456.5 256 504 256l8 0 0 16-8 0c-42.5 0-76.8 18.9-100.7 38.2c-11.9 9.6-21.1 19.3-27.4 26.5c-3.1 3.6-5.5 6.6-7 8.7c-.8 1-1.4 1.8-1.7 2.4l-.4 .6-.1 .1s0 0 0 0zM492.5 28.8c-12.6 11.1-28.9 17-45.6 16.5c-25.2-.7-47 17.4-51 42.4L389 131.7c-5.9 37.4-36.8 65.8-74.6 68.6c-13.8 1-27 6.4-37.5 15.3l-7.7 6.6-6.1 5.2-10.3-12.2 6.1-5.2 7.7-6.5c13.2-11.1 29.5-17.8 46.7-19.1c30.4-2.2 55.2-25.1 59.9-55.1l6.9-43.9c5.2-32.9 33.9-56.8 67.2-55.9c12.7 .3 25.1-4.1 34.6-12.5L498.7 2l10.6 12L492.5 28.8z" />
    </Icon>
);

export default PartyHorn;