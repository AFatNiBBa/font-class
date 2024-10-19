
import { Icon } from "../../index";

/**
 * A component that renders the `person-dolly` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dolly?s=thin person-dolly}
 * @preview ![person-dolly](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTEuNCAyMjYuNGMtNi43IDItMTEuNCA4LjMtMTEuNCAxNS4zbDAgNjUuMWMwIDQuMiAxLjcgOC4zIDQuNyAxMS4zbDUxIDUxYzQuNyA0LjcgNy44IDEwLjggOC45IDE3LjRsMTUuMiA5MC45YzEuNSA4LjctNC40IDE3LTEzLjIgMTguNHMtMTctNC40LTE4LjQtMTMuMmwtMTQuMy04NS45Yy0uNS0zLjMtMi4xLTYuMy00LjUtOC43TDMwLjEgMzA4LjdjLTktOS0xNC4xLTIxLjItMTQuMS0zMy45bDAtODguMUMxNiAxNjMuMSAzNS4xIDE0NCA1OC42IDE0NGMxOC43IDAgMzYuMiA5LjMgNDYuNSAyNC45bDQyLjYgNjRjMyA0LjUgOCA3LjEgMTMuMyA3LjFsNTcuMyAwIDcuNCAzMS45Yy0uNiAuMS0xLjMgLjEtMS45IC4xbC03MS40IDBjLTEwLjcgMC0yMC43LTUuMy0yNi42LTE0LjNsLTE2LjYtMjQuOWMtMy45LTUuOS0xMS4yLTguNS0xNy45LTYuNHpNMjI0IDI4OGMxLjkgMCAzLjctLjIgNS41LS41bDI0LjcgMTA2LjFDMjM2LjEgNDA0LjkgMjI0IDQyNSAyMjQgNDQ4YzAgMzUuMyAyOC43IDY0IDY0IDY0YzMzLjggMCA2MS42LTI2LjMgNjMuOC01OS41bDE1NC0zNi43YzQuMy0xIDctNS4zIDUuOS05LjZzLTUuMy03LTkuNi01LjlsLTE1MS4yIDM2QzM0NS40IDQwNi41IDMxOS4zIDM4NCAyODggMzg0Yy02LjYgMC0xMi45IDEtMTguOSAyLjhMMjE1LjggMTU4LjJjLTEtNC4zLTUuMy03LTkuNi02cy03IDUuMy02IDkuNkwyMTQuNyAyMjRsLTUzLjYgMC00Mi42LTY0Yy0xMy4zLTIwLTM1LjgtMzItNTkuOS0zMkMyNi4yIDEyOCAwIDE1NC4yIDAgMTg2LjZsMCA4OC4xYzAgMTcgNi43IDMzLjMgMTguNyA0NS4zbDc5LjQgNzkuNCAxNC4zIDg1LjljMi45IDE3LjQgMTkuNCAyOS4yIDM2LjggMjYuM3MyOS4yLTE5LjQgMjYuMy0zNi44bC0xNS4yLTkwLjljLTEuNi05LjktNi4zLTE5LTEzLjQtMjYuMWwtNTEtNTEgMC0zNi4yIDAtMjguOCAxNiAyNCAuNiAuOWM4LjkgMTMuNCAyMy45IDIxLjQgMzkuOSAyMS40bDcxLjQgMHpNODAgMTZhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0em00OCAzMkE0OCA0OCAwIDEgMCAzMiA0OGE0OCA0OCAwIDEgMCA5NiAwek0wIDM0Ni41TDAgNDgwYzAgMTcuNyAxNC4zIDMyIDMyIDMyczMyLTE0LjMgMzItMzJsMC02OS41LTE2LTE2TDQ4IDQ4MGMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNmwwLTExNy41LTE2LTE2ek0yNDAgNDQ4YTQ4IDQ4IDAgMSAxIDk2IDAgNDggNDggMCAxIDEgLTk2IDB6TTQ0NS4xIDMzNy44bC05MS41IDIyLjljLTguNiAyLjEtMTcuMy0zLjEtMTkuNC0xMS42bC0yMi45LTkxLjVjLTIuMS04LjYgMy4xLTE3LjMgMTEuNi0xOS40bDkxLjUtMjIuOWM4LjYtMi4xIDE3LjMgMy4xIDE5LjQgMTEuNmwyMi45IDkxLjVjMi4xIDguNi0zLjEgMTcuMy0xMS42IDE5LjR6bTMuOSAxNS41YzE3LjEtNC4zIDI3LjYtMjEuNyAyMy4zLTM4LjhMNDQ5LjQgMjIzYy00LjMtMTcuMS0yMS43LTI3LjYtMzguOC0yMy4zTDMxOSAyMjIuNmMtMTcuMSA0LjMtMjcuNiAyMS43LTIzLjMgMzguOEwzMTguNiAzNTNjNC4zIDE3LjEgMjEuNyAyNy42IDM4LjggMjMuM0w0NDkgMzUzLjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const PersonDolly: typeof Icon = x => (
    <Icon {...x}>
        <path d="M91.4 226.4c-6.7 2-11.4 8.3-11.4 15.3l0 65.1c0 4.2 1.7 8.3 4.7 11.3l51 51c4.7 4.7 7.8 10.8 8.9 17.4l15.2 90.9c1.5 8.7-4.4 17-13.2 18.4s-17-4.4-18.4-13.2l-14.3-85.9c-.5-3.3-2.1-6.3-4.5-8.7L30.1 308.7c-9-9-14.1-21.2-14.1-33.9l0-88.1C16 163.1 35.1 144 58.6 144c18.7 0 36.2 9.3 46.5 24.9l42.6 64c3 4.5 8 7.1 13.3 7.1l57.3 0 7.4 31.9c-.6 .1-1.3 .1-1.9 .1l-71.4 0c-10.7 0-20.7-5.3-26.6-14.3l-16.6-24.9c-3.9-5.9-11.2-8.5-17.9-6.4zM224 288c1.9 0 3.7-.2 5.5-.5l24.7 106.1C236.1 404.9 224 425 224 448c0 35.3 28.7 64 64 64c33.8 0 61.6-26.3 63.8-59.5l154-36.7c4.3-1 7-5.3 5.9-9.6s-5.3-7-9.6-5.9l-151.2 36C345.4 406.5 319.3 384 288 384c-6.6 0-12.9 1-18.9 2.8L215.8 158.2c-1-4.3-5.3-7-9.6-6s-7 5.3-6 9.6L214.7 224l-53.6 0-42.6-64c-13.3-20-35.8-32-59.9-32C26.2 128 0 154.2 0 186.6l0 88.1c0 17 6.7 33.3 18.7 45.3l79.4 79.4 14.3 85.9c2.9 17.4 19.4 29.2 36.8 26.3s29.2-19.4 26.3-36.8l-15.2-90.9c-1.6-9.9-6.3-19-13.4-26.1l-51-51 0-36.2 0-28.8 16 24 .6 .9c8.9 13.4 23.9 21.4 39.9 21.4l71.4 0zM80 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm48 32A48 48 0 1 0 32 48a48 48 0 1 0 96 0zM0 346.5L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-69.5-16-16L48 480c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-117.5-16-16zM240 448a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM445.1 337.8l-91.5 22.9c-8.6 2.1-17.3-3.1-19.4-11.6l-22.9-91.5c-2.1-8.6 3.1-17.3 11.6-19.4l91.5-22.9c8.6-2.1 17.3 3.1 19.4 11.6l22.9 91.5c2.1 8.6-3.1 17.3-11.6 19.4zm3.9 15.5c17.1-4.3 27.6-21.7 23.3-38.8L449.4 223c-4.3-17.1-21.7-27.6-38.8-23.3L319 222.6c-17.1 4.3-27.6 21.7-23.3 38.8L318.6 353c4.3 17.1 21.7 27.6 38.8 23.3L449 353.4z" />
    </Icon>
);

export default PersonDolly;