
import { Icon } from "../../index";

/**
 * A component that renders the `ear-muffs` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ear-muffs?s=sharp-regular ear-muffs}
 * @preview ![ear-muffs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTEyIDBsMjQgMEw1MDQgMGwyNCAwIDAgMjQgMCAxNzcuNmMtMTItNi4xLTI1LjYtOS42LTQwLTkuNmMtMi43IDAtNS40IC4xLTggLjRMNDgwIDQ4IDE2MCA0OGwwIDE0NC40Yy0yLjYtLjItNS4zLS40LTgtLjRjLTE0LjQgMC0yOCAzLjUtNDAgOS42TDExMiAyNGwwLTI0ek00ODAgMjI0LjZjMi42LS40IDUuMy0uNiA4LS42YzEyIDAgMjMuMiAzLjggMzIuMyAxMC4yYzUtMS41IDEwLjMtMi4yIDE1LjctMi4yYzE5LjkgMCAzNy41IDEwLjQgNDcuNCAyNi4xYzIzLjQgNi43IDQwLjYgMjguMyA0MC42IDUzLjljMCA1LjEtLjcgMTAuMS0yIDE0LjljMTEuMSAxMC4yIDE4IDI0LjkgMTggNDEuMXMtNi45IDMwLjktMTggNDEuMWMxLjMgNC43IDIgOS43IDIgMTQuOWMwIDI1LjYtMTcuMiA0Ny4yLTQwLjYgNTMuOUM1NzMuNSA0OTMuNiA1NTUuOSA1MDQgNTM2IDUwNGMtNS41IDAtMTAuNy0uOC0xNS43LTIuMkM1MTEuMiA1MDguMiA1MDAgNTEyIDQ4OCA1MTJjLTMwLjkgMC01Ni0yNS4xLTU2LTU2YzAtMTAuMiAyLjctMTkuOCA3LjUtMjhjLTQuOC04LjItNy41LTE3LjgtNy41LTI4YzAtMTEuOSAzLjctMjIuOSAxMC0zMmMtNi4zLTkuMS0xMC0yMC4xLTEwLTMyYzAtMTAuMiAyLjctMTkuOCA3LjUtMjhjLTQuOC04LjItNy41LTE3LjgtNy41LTI4YzAtMjguMiAyMC45LTUxLjYgNDgtNTUuNHpNMTUyIDIyNGMyLjcgMCA1LjQgLjIgOCAuNmMyNy4xIDMuOSA0OCAyNy4yIDQ4IDU1LjRjMCAxMC4yLTIuNyAxOS44LTcuNSAyOGM0LjggOC4yIDcuNSAxNy44IDcuNSAyOGMwIDExLjktMy43IDIyLjktMTAgMzJjNi4zIDkuMSAxMCAyMC4xIDEwIDMyYzAgMTAuMi0yLjcgMTkuOC03LjUgMjhjNC44IDguMiA3LjUgMTcuOCA3LjUgMjhjMCAzMC45LTI1LjEgNTYtNTYgNTZjLTEyIDAtMjMuMi0zLjgtMzIuMy0xMC4yYy01IDEuNS0xMC4zIDIuMi0xNS43IDIuMmMtMjAgMC0zNy41LTEwLjQtNDcuNC0yNi4xQzMzLjIgNDcxLjIgMTYgNDQ5LjYgMTYgNDI0YzAtNS4xIC43LTEwLjEgMi0xNC45QzYuOSAzOTguOSAwIDM4NC4zIDAgMzY4czYuOS0zMC45IDE4LTQxLjFjLTEuMy00LjctMi05LjctMi0xNC45YzAtMjUuNiAxNy4yLTQ3LjIgNDAuNi01My45QzY2LjUgMjQyLjQgODQgMjMyIDEwNCAyMzJjNS41IDAgMTAuNyAuOCAxNS43IDIuMkMxMjguOCAyMjcuOCAxNDAgMjI0IDE1MiAyMjR6bS02LjkgODRMMTU5IDI4NGMuNy0xLjEgMS0yLjQgMS00YzAtNC40LTMuNi04LTgtOGMtMS44IDAtMy4zIC41LTQuNiAxLjRsLTE4LjkgMTMuNC0yMi4yLTYuNWMtLjctLjItMS40LS4zLTIuMy0uM2MtMi44IDAtNS4zIDEuNC02LjggMy44bC05LjggMTUuNS0xNy42IDVjLTMuNCAxLTUuOCA0LjEtNS44IDcuN2MwIC44IC4xIDEuNSAuMyAyLjJMNzIgMzQyLjMgNTAuNiAzNjIuMWMtMS43IDEuNS0yLjYgMy42LTIuNiA1LjlzLjkgNC40IDIuNiA1LjlMNzIgMzkzLjdsLTcuNyAyOC4xYy0uMiAuNi0uMyAxLjMtLjMgMi4yYzAgMy42IDIuNCA2LjcgNS44IDcuN2wxNy42IDUgOS44IDE1LjVjMS41IDIuNCA0IDMuOCA2LjggMy44Yy45IDAgMS42LS4xIDIuMy0uM2wyMi4yLTYuNSAxOC45IDEzLjRjMS4zIC45IDIuOCAxLjQgNC42IDEuNGM0LjQgMCA4LTMuNiA4LThjMC0xLjUtLjQtMi44LTEtNGwtMTMuOS0yNEwxNTkgNDA0Yy43LTEuMSAxLTIuNCAxLTRjMC0xLjgtLjUtMy4zLTEuNC00LjVMMTM5LjQgMzY4bDE5LjItMjcuNWMuOS0xLjMgMS40LTIuOCAxLjQtNC41YzAtMS41LS40LTIuOC0xLTRsLTEzLjktMjR6bTMzNi0yNGwxMy45IDI0TDQ4MSAzMzJjLS43IDEuMS0xIDIuNC0xIDRjMCAxLjggLjUgMy4zIDEuNCA0LjVMNTAwLjYgMzY4bC0xOS4yIDI3LjVjLS45IDEuMy0xLjQgMi44LTEuNCA0LjVjMCAxLjUgLjQgMi44IDEgNGwxMy45IDI0TDQ4MSA0NTJjLS43IDEuMS0xIDIuNC0xIDRjMCA0LjQgMy42IDggOCA4YzEuOCAwIDMuMy0uNSA0LjYtMS40bDE4LjktMTMuNCAyMi4yIDYuNWMuNyAuMiAxLjQgLjMgMi4zIC4zYzIuOCAwIDUuMy0xLjQgNi44LTMuOGw5LjgtMTUuNSAxNy42LTVjMy40LTEgNS44LTQuMSA1LjgtNy43YzAtLjgtLjEtMS41LS4zLTIuMkw1NjggMzkzLjdsMjEuNC0xOS44YzEuNy0xLjUgMi42LTMuNiAyLjYtNS45cy0uOS00LjQtMi42LTUuOUw1NjggMzQyLjNsNy43LTI4LjFjLjItLjYgLjMtMS4zIC4zLTIuMmMwLTMuNi0yLjQtNi43LTUuOC03LjdsLTE3LjYtNS05LjgtMTUuNWMtMS41LTIuNC00LTMuOC02LjgtMy44Yy0uOSAwLTEuNiAuMS0yLjMgLjNsLTIyLjIgNi41LTE4LjktMTMuNGMtMS4zLS45LTIuOC0xLjQtNC42LTEuNGMtNC40IDAtOCAzLjYtOCA4YzAgMS41IC40IDIuOCAxIDR6Ii8+PC9zdmc+|width=32|height=32)
 */
const EarMuffs: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 0l24 0L504 0l24 0 0 24 0 177.6c-12-6.1-25.6-9.6-40-9.6c-2.7 0-5.4 .1-8 .4L480 48 160 48l0 144.4c-2.6-.2-5.3-.4-8-.4c-14.4 0-28 3.5-40 9.6L112 24l0-24zM480 224.6c2.6-.4 5.3-.6 8-.6c12 0 23.2 3.8 32.3 10.2c5-1.5 10.3-2.2 15.7-2.2c19.9 0 37.5 10.4 47.4 26.1c23.4 6.7 40.6 28.3 40.6 53.9c0 5.1-.7 10.1-2 14.9c11.1 10.2 18 24.9 18 41.1s-6.9 30.9-18 41.1c1.3 4.7 2 9.7 2 14.9c0 25.6-17.2 47.2-40.6 53.9C573.5 493.6 555.9 504 536 504c-5.5 0-10.7-.8-15.7-2.2C511.2 508.2 500 512 488 512c-30.9 0-56-25.1-56-56c0-10.2 2.7-19.8 7.5-28c-4.8-8.2-7.5-17.8-7.5-28c0-11.9 3.7-22.9 10-32c-6.3-9.1-10-20.1-10-32c0-10.2 2.7-19.8 7.5-28c-4.8-8.2-7.5-17.8-7.5-28c0-28.2 20.9-51.6 48-55.4zM152 224c2.7 0 5.4 .2 8 .6c27.1 3.9 48 27.2 48 55.4c0 10.2-2.7 19.8-7.5 28c4.8 8.2 7.5 17.8 7.5 28c0 11.9-3.7 22.9-10 32c6.3 9.1 10 20.1 10 32c0 10.2-2.7 19.8-7.5 28c4.8 8.2 7.5 17.8 7.5 28c0 30.9-25.1 56-56 56c-12 0-23.2-3.8-32.3-10.2c-5 1.5-10.3 2.2-15.7 2.2c-20 0-37.5-10.4-47.4-26.1C33.2 471.2 16 449.6 16 424c0-5.1 .7-10.1 2-14.9C6.9 398.9 0 384.3 0 368s6.9-30.9 18-41.1c-1.3-4.7-2-9.7-2-14.9c0-25.6 17.2-47.2 40.6-53.9C66.5 242.4 84 232 104 232c5.5 0 10.7 .8 15.7 2.2C128.8 227.8 140 224 152 224zm-6.9 84L159 284c.7-1.1 1-2.4 1-4c0-4.4-3.6-8-8-8c-1.8 0-3.3 .5-4.6 1.4l-18.9 13.4-22.2-6.5c-.7-.2-1.4-.3-2.3-.3c-2.8 0-5.3 1.4-6.8 3.8l-9.8 15.5-17.6 5c-3.4 1-5.8 4.1-5.8 7.7c0 .8 .1 1.5 .3 2.2L72 342.3 50.6 362.1c-1.7 1.5-2.6 3.6-2.6 5.9s.9 4.4 2.6 5.9L72 393.7l-7.7 28.1c-.2 .6-.3 1.3-.3 2.2c0 3.6 2.4 6.7 5.8 7.7l17.6 5 9.8 15.5c1.5 2.4 4 3.8 6.8 3.8c.9 0 1.6-.1 2.3-.3l22.2-6.5 18.9 13.4c1.3 .9 2.8 1.4 4.6 1.4c4.4 0 8-3.6 8-8c0-1.5-.4-2.8-1-4l-13.9-24L159 404c.7-1.1 1-2.4 1-4c0-1.8-.5-3.3-1.4-4.5L139.4 368l19.2-27.5c.9-1.3 1.4-2.8 1.4-4.5c0-1.5-.4-2.8-1-4l-13.9-24zm336-24l13.9 24L481 332c-.7 1.1-1 2.4-1 4c0 1.8 .5 3.3 1.4 4.5L500.6 368l-19.2 27.5c-.9 1.3-1.4 2.8-1.4 4.5c0 1.5 .4 2.8 1 4l13.9 24L481 452c-.7 1.1-1 2.4-1 4c0 4.4 3.6 8 8 8c1.8 0 3.3-.5 4.6-1.4l18.9-13.4 22.2 6.5c.7 .2 1.4 .3 2.3 .3c2.8 0 5.3-1.4 6.8-3.8l9.8-15.5 17.6-5c3.4-1 5.8-4.1 5.8-7.7c0-.8-.1-1.5-.3-2.2L568 393.7l21.4-19.8c1.7-1.5 2.6-3.6 2.6-5.9s-.9-4.4-2.6-5.9L568 342.3l7.7-28.1c.2-.6 .3-1.3 .3-2.2c0-3.6-2.4-6.7-5.8-7.7l-17.6-5-9.8-15.5c-1.5-2.4-4-3.8-6.8-3.8c-.9 0-1.6 .1-2.3 .3l-22.2 6.5-18.9-13.4c-1.3-.9-2.8-1.4-4.6-1.4c-4.4 0-8 3.6-8 8c0 1.5 .4 2.8 1 4z" />
    </Icon>
);

export default EarMuffs;