
import { Icon } from "../../index";

/**
 * A component that renders the `face-pleading` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-pleading?s=thin face-pleading}
 * @preview ![face-pleading](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk2IDI1NkEyNDAgMjQwIDAgMSAwIDE2IDI1NmEyNDAgMjQwIDAgMSAwIDQ4MCAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6TTI5NS4xIDQyMC40Yy03LjYtOC40LTIwLjYtMTcuNC0zOS4xLTE3LjRzLTMxLjUgOC45LTM5LjEgMTcuNGMtMyAzLjMtOCAzLjUtMTEuMyAuNnMtMy42LTgtLjYtMTEuM2M5LjgtMTAuOSAyNi44LTIyLjYgNTAuOS0yMi42czQxLjEgMTEuNyA1MC45IDIyLjZjMyAzLjMgMi43IDguMy0uNiAxMS4zcy04LjMgMi43LTExLjMtLjZ6TTMyNS4yIDk2LjVjNC4xLTEuNiA4LjcgLjUgMTAuMyA0LjdsMS4yIDMuMWMxMy4zIDM1LjUgNDMuNiA2MS44IDgwLjYgNzBsOC41IDEuOWM0LjMgMSA3IDUuMiA2LjEgOS41cy01LjIgNy05LjUgNi4xbC03LjctMS43YzEwLjkgMTMuNyAxNy41IDMxIDE3LjUgNDkuOWMwIDQ0LjItMzUuOCA4MC04MCA4MHMtODAtMzUuOC04MC04MHMzNS44LTgwIDgwLTgwYzEuMyAwIDIuNiAwIDMuOSAuMWMtMTUtMTMuNS0yNi45LTMwLjYtMzQuMi01MC4ybC0xLjItMy4xYy0xLjYtNC4xIC41LTguNyA0LjctMTAuM3pNMTkxLjUgMTA2LjhsLTEuMiAzLjFjLTcuMyAxOS41LTE5LjIgMzYuNi0zNC4yIDUwLjJjMS4zLS4xIDIuNi0uMSAzLjktLjFjNDQuMiAwIDgwIDM1LjggODAgODBzLTM1LjggODAtODAgODBzLTgwLTM1LjgtODAtODBjMC0xOC45IDYuNS0zNi4yIDE3LjUtNDkuOWwtNy43IDEuN2MtNC4zIDEtOC42LTEuOC05LjUtNi4xczEuOC04LjYgNi4xLTkuNWw4LjUtMS45YzM3LTguMiA2Ny4zLTM0LjYgODAuNi03MGwxLjItMy4xYzEuNi00LjEgNi4yLTYuMiAxMC4zLTQuN3M2LjIgNi4yIDQuNyAxMC4zek0xNjAgMzA0YTY0IDY0IDAgMSAwIDAtMTI4IDY0IDY0IDAgMSAwIDAgMTI4em0yNTYtNjRhNjQgNjQgMCAxIDAgLTEyOCAwIDY0IDY0IDAgMSAwIDEyOCAwek0xNjAgMjcyYzE3LjcgMCAzMi0xNC4zIDMyLTMyYzAtMTItNi42LTIyLjQtMTYuMy0yNy45Yy0yIDE1LjctMTUuNSAyNy45LTMxLjcgMjcuOWMtNS43IDAtMTEuMS0xLjUtMTUuNy00LjFjLS4yIDEuNC0uMyAyLjctLjMgNC4xYzAgMTcuNyAxNC4zIDMyIDMyIDMyem0tNDQuNi00OS43YzIuMS01LjMgNS4xLTEwLjEgOC45LTE0LjNjMS40LTEuNSAyLjgtMyA0LjQtNC4zYy0uNCAxLjQtLjYgMi44LS42IDQuM2MwIDUuMiAyLjUgOS45IDYuNCAxMi44YzIuNyAyIDYgMy4yIDkuNiAzLjJjOC44IDAgMTYtNy4yIDE2LTE2bDAtLjFjMC02LjctNC4zLTEyLjUtMTAuMi0xNC44YzMuMy0uNyA2LjctMS4xIDEwLjItMS4xYzQuNCAwIDguNiAuNiAxMi42IDEuN0MxOTMgMTk5LjIgMjA4IDIxNy45IDIwOCAyNDBjMCAyNi41LTIxLjUgNDgtNDggNDhzLTQ4LTIxLjUtNDgtNDhjMC02LjIgMS4yLTEyLjIgMy40LTE3Ljd6TTM4NCAyNDBjMC0xMi02LjYtMjIuNC0xNi4zLTI3LjljLTIgMTUuNy0xNS41IDI3LjktMzEuNyAyNy45Yy01LjcgMC0xMS4xLTEuNS0xNS43LTQuMWMtLjIgMS40LS4zIDIuNy0uMyA0LjFjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMnptLTgwIDBjMC02LjIgMS4yLTEyLjIgMy40LTE3LjdjMi4xLTUuMyA1LjEtMTAuMSA4LjktMTQuM2MxLjQtMS41IDIuOC0zIDQuNC00LjNjLS40IDEuNC0uNiAyLjgtLjYgNC4zYzAgNS4yIDIuNSA5LjkgNi40IDEyLjhjMi43IDIgNiAzLjIgOS42IDMuMmM4LjggMCAxNi03LjIgMTYtMTZjMC02LjgtNC4yLTEyLjYtMTAuMi0xNC45YzMuMy0uNyA2LjctMS4xIDEwLjItMS4xYzQuNCAwIDguNiAuNiAxMi42IDEuN0MzODUgMTk5LjIgNDAwIDIxNy45IDQwMCAyNDBjMCAyNi41LTIxLjUgNDgtNDggNDhzLTQ4LTIxLjUtNDgtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const FacePleading: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM295.1 420.4c-7.6-8.4-20.6-17.4-39.1-17.4s-31.5 8.9-39.1 17.4c-3 3.3-8 3.5-11.3 .6s-3.6-8-.6-11.3c9.8-10.9 26.8-22.6 50.9-22.6s41.1 11.7 50.9 22.6c3 3.3 2.7 8.3-.6 11.3s-8.3 2.7-11.3-.6zM325.2 96.5c4.1-1.6 8.7 .5 10.3 4.7l1.2 3.1c13.3 35.5 43.6 61.8 80.6 70l8.5 1.9c4.3 1 7 5.2 6.1 9.5s-5.2 7-9.5 6.1l-7.7-1.7c10.9 13.7 17.5 31 17.5 49.9c0 44.2-35.8 80-80 80s-80-35.8-80-80s35.8-80 80-80c1.3 0 2.6 0 3.9 .1c-15-13.5-26.9-30.6-34.2-50.2l-1.2-3.1c-1.6-4.1 .5-8.7 4.7-10.3zM191.5 106.8l-1.2 3.1c-7.3 19.5-19.2 36.6-34.2 50.2c1.3-.1 2.6-.1 3.9-.1c44.2 0 80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80c0-18.9 6.5-36.2 17.5-49.9l-7.7 1.7c-4.3 1-8.6-1.8-9.5-6.1s1.8-8.6 6.1-9.5l8.5-1.9c37-8.2 67.3-34.6 80.6-70l1.2-3.1c1.6-4.1 6.2-6.2 10.3-4.7s6.2 6.2 4.7 10.3zM160 304a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm256-64a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM160 272c17.7 0 32-14.3 32-32c0-12-6.6-22.4-16.3-27.9c-2 15.7-15.5 27.9-31.7 27.9c-5.7 0-11.1-1.5-15.7-4.1c-.2 1.4-.3 2.7-.3 4.1c0 17.7 14.3 32 32 32zm-44.6-49.7c2.1-5.3 5.1-10.1 8.9-14.3c1.4-1.5 2.8-3 4.4-4.3c-.4 1.4-.6 2.8-.6 4.3c0 5.2 2.5 9.9 6.4 12.8c2.7 2 6 3.2 9.6 3.2c8.8 0 16-7.2 16-16l0-.1c0-6.7-4.3-12.5-10.2-14.8c3.3-.7 6.7-1.1 10.2-1.1c4.4 0 8.6 .6 12.6 1.7C193 199.2 208 217.9 208 240c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-6.2 1.2-12.2 3.4-17.7zM384 240c0-12-6.6-22.4-16.3-27.9c-2 15.7-15.5 27.9-31.7 27.9c-5.7 0-11.1-1.5-15.7-4.1c-.2 1.4-.3 2.7-.3 4.1c0 17.7 14.3 32 32 32s32-14.3 32-32zm-80 0c0-6.2 1.2-12.2 3.4-17.7c2.1-5.3 5.1-10.1 8.9-14.3c1.4-1.5 2.8-3 4.4-4.3c-.4 1.4-.6 2.8-.6 4.3c0 5.2 2.5 9.9 6.4 12.8c2.7 2 6 3.2 9.6 3.2c8.8 0 16-7.2 16-16c0-6.8-4.2-12.6-10.2-14.9c3.3-.7 6.7-1.1 10.2-1.1c4.4 0 8.6 .6 12.6 1.7C385 199.2 400 217.9 400 240c0 26.5-21.5 48-48 48s-48-21.5-48-48z" />
    </Icon>
);

export default FacePleading;