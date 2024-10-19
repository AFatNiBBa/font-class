
import { Icon } from "../../index";

/**
 * A component that renders the `futbol` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/futbol?s=light futbol}
 * @preview ![futbol](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjk5LjMgNDc1LjhjLjEtLjggLjItMS43IC40LTIuNmwyMS43LTg1LjhjMS41LTUuOSAxLjQtMTIuNC0yLjItMTcuM2wtMy45LTUuM2MtNi42LTkuMS0xOC41LTEyLjItMjkuNy0xMi4ybC01OS4yIDBjLTExLjMgMC0yMy4xIDMuMS0yOS44IDEyLjJsLTMuOSA1LjNjLTMuNiA0LjktMy43IDExLjQtMi4yIDE3LjNsMjEuNyA4NS44Yy4yIC45IC40IDEuNyAuNCAyLjZjMTQgMi43IDI4LjUgNC4yIDQzLjMgNC4yczI5LjMtMS40IDQzLjMtNC4yem0zNS4zLTEwYzM4LjMtMTQuMyA3MS42LTM4LjkgOTYuNi03MC4ybC03Mi41LTQuOGMtMS40LS4xLTIuOCAuMy00IDEuMnMtMiAyLjEtMi4zIDMuNGwtMTcuOCA3MC41ek00NTEuNyAzNjUuMWMxMy45LTI0LjkgMjMuMi01Mi43IDI2LjctODIuM2MtLjgtLjMtMS41LS43LTIuMy0xLjJsLTc0LjktNDcuMWMtNS4xLTMuMi0xMS4zLTUuMS0xNy4xLTMuM2wtNi4zIDJjLTEwLjcgMy41LTE3LjMgMTMuOC0yMC44IDI0LjVMMzM4LjggMzE0Yy0zLjUgMTAuNy00LjIgMjIuOSAyLjQgMzJsMy45IDUuM2MzLjYgNC45IDkuNyA3IDE1LjggNy40bDg4LjMgNS45Yy45IC4xIDEuNyAuMiAyLjYgLjR6bTI4LjEtMTE5Yy0xLjgtNDEuOS0xNS4xLTgwLjctMzYuOS0xMTMuNmwtMjcgNjcuNWMtLjUgMS4zLS42IDIuNy0uMiA0LjFjMCAwIDAgLjEgMCAuMXMwIC4xIDAgLjFjLjQgMS4zIDEuMyAyLjQgMi41IDMuMmw2MS41IDM4Ljd6TTQyMC4yIDEwMy42Yy0xOS43LTIxLjItNDMuNC0zOC42LTcwLTUwLjljLS42IC42LTEuMiAxLjMtMS45IDEuOGwtNjggNTYuNmMtNC43IDMuOS04LjQgOS4yLTguNCAxNS4zbDAgNi42YzAgMTEuMiA3LjggMjAuNyAxNi45IDI3LjNsNDcuOSAzNC44YzkuMSA2LjYgMjAuNSAxMS4xIDMxLjIgNy42bDYuMy0yYzUuOC0xLjkgOS43LTcuMSAxMS45LTEyLjdsMzIuOS04Mi4xYy4zLS44IC43LTEuNiAxLjEtMi4zek0zMTUuNyA0MC4xYy0xOS01LjMtMzkuMS04LjEtNTkuNy04LjFzLTQwLjcgMi44LTU5LjcgOC4xbDU1LjggNDYuNWMxLjEgLjkgMi41IDEuNCAzLjkgMS40czIuOC0uNSAzLjktMS40bDU1LjgtNDYuNXptLTE1NCAxMi43Yy0yNi42IDEyLjMtNTAuMyAyOS43LTcwIDUwLjljLjQgLjcgLjggMS41IDEuMSAyLjNsMzIuOSA4Mi4xYzIuMyA1LjYgNi4yIDEwLjggMTEuOSAxMi43bDYuMyAyYzEwLjcgMy41IDIyLjEtMSAzMS4yLTcuNmw0Ny45LTM0LjhjOS4xLTYuNiAxNi45LTE2LjEgMTYuOS0yNy4zbDAtNi42YzAtNi4xLTMuNy0xMS40LTguNC0xNS4zbC02OC01Ni42Yy0uNy0uNi0xLjMtMS4yLTEuOS0xLjh6TTY5LjEgMTMyLjVDNDcuNCAxNjUuMyAzNCAyMDQuMiAzMi4yIDI0Ni4xbDYxLjUtMzguN2MxLjItLjcgMi4xLTEuOSAyLjUtMy4yYzAgMCAwLS4xIDAtLjFzMC0uMSAwLS4xYy40LTEuMyAuNC0yLjgtLjItNC4xbC0yNy02Ny40ek0zMy42IDI4Mi44YzMuNSAyOS42IDEyLjggNTcuNCAyNi43IDgyLjNjLjgtLjIgMS43LS4zIDIuNi0uNGw4OC4zLTUuOWM2LjEtLjQgMTIuMi0yLjUgMTUuOC03LjRsMy45LTUuM2M2LjYtOS4xIDUuOS0yMS4zIDIuNC0zMmwtMTguMy01Ni4zYy0zLjUtMTAuNy0xMC4xLTIxLjEtMjAuOC0yNC41bC02LjMtMmMtNS44LTEuOS0xMiAwLTE3LjEgMy4zTDM1LjkgMjgxLjZjLS43IC41LTEuNSAuOS0yLjMgMS4yek04MC44IDM5NS42YzI1IDMxLjQgNTguMyA1NS45IDk2LjYgNzAuMmwtMTcuOC03MC41Yy0uMy0xLjQtMS4yLTIuNi0yLjMtMy40cy0yLjYtMS4yLTQtMS4ybC03Mi41IDQuOHpNMCAyNTZhMjU2IDI1NiAwIDEgMSA1MTIgMEEyNTYgMjU2IDAgMSAxIDAgMjU2em0yNDEuOS02OS43TDE5NCAyMjFjLTguNCA2LjEtMTEuOSAxNi45LTguNyAyNi44bDE4LjMgNTYuM2MzLjIgOS45IDEyLjQgMTYuNiAyMi44IDE2LjZsNTkuMiAwYzEwLjQgMCAxOS42LTYuNyAyMi44LTE2LjZsMTguMy01Ni4zYzMuMi05LjktLjMtMjAuNy04LjctMjYuOGwtNDcuOS0zNC44Yy04LjQtNi4xLTE5LjgtNi4xLTI4LjIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Futbol: typeof Icon = x => (
    <Icon {...x}>
        <path d="M299.3 475.8c.1-.8 .2-1.7 .4-2.6l21.7-85.8c1.5-5.9 1.4-12.4-2.2-17.3l-3.9-5.3c-6.6-9.1-18.5-12.2-29.7-12.2l-59.2 0c-11.3 0-23.1 3.1-29.8 12.2l-3.9 5.3c-3.6 4.9-3.7 11.4-2.2 17.3l21.7 85.8c.2 .9 .4 1.7 .4 2.6c14 2.7 28.5 4.2 43.3 4.2s29.3-1.4 43.3-4.2zm35.3-10c38.3-14.3 71.6-38.9 96.6-70.2l-72.5-4.8c-1.4-.1-2.8 .3-4 1.2s-2 2.1-2.3 3.4l-17.8 70.5zM451.7 365.1c13.9-24.9 23.2-52.7 26.7-82.3c-.8-.3-1.5-.7-2.3-1.2l-74.9-47.1c-5.1-3.2-11.3-5.1-17.1-3.3l-6.3 2c-10.7 3.5-17.3 13.8-20.8 24.5L338.8 314c-3.5 10.7-4.2 22.9 2.4 32l3.9 5.3c3.6 4.9 9.7 7 15.8 7.4l88.3 5.9c.9 .1 1.7 .2 2.6 .4zm28.1-119c-1.8-41.9-15.1-80.7-36.9-113.6l-27 67.5c-.5 1.3-.6 2.7-.2 4.1c0 0 0 .1 0 .1s0 .1 0 .1c.4 1.3 1.3 2.4 2.5 3.2l61.5 38.7zM420.2 103.6c-19.7-21.2-43.4-38.6-70-50.9c-.6 .6-1.2 1.3-1.9 1.8l-68 56.6c-4.7 3.9-8.4 9.2-8.4 15.3l0 6.6c0 11.2 7.8 20.7 16.9 27.3l47.9 34.8c9.1 6.6 20.5 11.1 31.2 7.6l6.3-2c5.8-1.9 9.7-7.1 11.9-12.7l32.9-82.1c.3-.8 .7-1.6 1.1-2.3zM315.7 40.1c-19-5.3-39.1-8.1-59.7-8.1s-40.7 2.8-59.7 8.1l55.8 46.5c1.1 .9 2.5 1.4 3.9 1.4s2.8-.5 3.9-1.4l55.8-46.5zm-154 12.7c-26.6 12.3-50.3 29.7-70 50.9c.4 .7 .8 1.5 1.1 2.3l32.9 82.1c2.3 5.6 6.2 10.8 11.9 12.7l6.3 2c10.7 3.5 22.1-1 31.2-7.6l47.9-34.8c9.1-6.6 16.9-16.1 16.9-27.3l0-6.6c0-6.1-3.7-11.4-8.4-15.3l-68-56.6c-.7-.6-1.3-1.2-1.9-1.8zM69.1 132.5C47.4 165.3 34 204.2 32.2 246.1l61.5-38.7c1.2-.7 2.1-1.9 2.5-3.2c0 0 0-.1 0-.1s0-.1 0-.1c.4-1.3 .4-2.8-.2-4.1l-27-67.4zM33.6 282.8c3.5 29.6 12.8 57.4 26.7 82.3c.8-.2 1.7-.3 2.6-.4l88.3-5.9c6.1-.4 12.2-2.5 15.8-7.4l3.9-5.3c6.6-9.1 5.9-21.3 2.4-32l-18.3-56.3c-3.5-10.7-10.1-21.1-20.8-24.5l-6.3-2c-5.8-1.9-12 0-17.1 3.3L35.9 281.6c-.7 .5-1.5 .9-2.3 1.2zM80.8 395.6c25 31.4 58.3 55.9 96.6 70.2l-17.8-70.5c-.3-1.4-1.2-2.6-2.3-3.4s-2.6-1.2-4-1.2l-72.5 4.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm241.9-69.7L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6l59.2 0c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8c-8.4-6.1-19.8-6.1-28.2 0z" />
    </Icon>
);

export default Futbol;