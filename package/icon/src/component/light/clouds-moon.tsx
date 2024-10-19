
import { Icon } from "../../index";

/**
 * A component that renders the `clouds-moon` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clouds-moon?s=light clouds-moon}
 * @preview ![clouds-moon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDE2MGMwLTU3LjcgMzgtMTA2LjUgOTAuMy0xMjIuNWMtMjEuMiAyNS43LTMzLjkgNTguOC0zMy45IDk0LjhjMCA3Mi4zIDUxLjQgMTMyLjcgMTE5LjcgMTQ2LjFjLTE0LjkgNi4yLTMxLjMgOS42LTQ4LjUgOS42Yy0xOS45IDAtMzguNy00LjYtNTUuNS0xMi43YzIuNSA2LjggNC41IDEzLjggNS44IDIxLjFjMTQuMiA1LjUgMjcuMiAxMy40IDM4LjUgMjMuMmMzLjcgLjMgNy40IC40IDExLjIgLjRjNDMuMiAwIDgyLjUtMTcuMyAxMTEuMi00NS4zYzUtNC45IDYuMy0xMi41IDMuMS0xOC43cy0xMC4xLTkuNy0xNy04LjVjLTYuNSAxLjEtMTMuMiAxLjctMjAgMS43Yy02NC4zIDAtMTE2LjUtNTIuMy0xMTYuNS0xMTYuOWMwLTQzLjcgMjMuOS04MS44IDU5LjMtMTAxLjljNi4xLTMuNSA5LjItMTAuNSA3LjctMTcuM1M1MzIgMS4yIDUyNS4xIC42Yy00LjUtLjQtOS0uNi0xMy41LS42QzQyMy40IDAgMzUyIDcxLjcgMzUyIDE2MGMwIDExLjUgMS4yIDIyLjcgMy41IDMzLjRjMTIuOSAyIDI1LjIgNS45IDM2LjYgMTEuNGMtNS4yLTE0LTgtMjkuMS04LTQ0Ljh6bS00OC4xIDk2YzM1LjMgMCA2NCAyOC43IDY0IDY0YzAgNC40LS40IDguNy0xLjMgMTIuOGMtMSA0LjggLjMgOS43IDMuNCAxMy40czcuNyA1LjggMTIuNiA1LjhsLjcgMGMuMiAwIC40IDAgLjYgMGMzNS4zIDAgNjQgMjguNyA2NCA2NHMtMjguNyA2NC02NCA2NGMtLjggMC0xLjYgMC0yLjMgMGwtLjMgMC0uMiAwLTI2Ni42IDAtLjIgMC0uMyAwYy0uNiAwLTEuMiAwLTEuOCAwYy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4bC4yIDBjMCAwIDAgMCAwIDBsOC4zIDBjNS43IDAgMTEtMyAxMy45LThzMi45LTExLjEgMC0xNmMtNC4xLTctNi40LTE1LjItNi40LTI0YzAtMjYuNSAyMS41LTQ4IDQ4LTQ4YzE1LjcgMCAyOS42IDcuNSAzOC40IDE5LjJjMy42IDQuOCA5LjcgNy4yIDE1LjcgNi4xczEwLjgtNS40IDEyLjUtMTEuM2M3LjgtMjYuNiAzMi40LTQ2IDYxLjQtNDZ6bTk2IDY0YzAtNTMtNDMtOTYtOTYtOTZjLTM0LjkgMC02NS40IDE4LjYtODIuMiA0Ni40Yy0xMy05LjEtMjguNy0xNC40LTQ1LjgtMTQuNGMtNDQuMiAwLTgwIDM1LjgtODAgODBjMCA1LjkgLjYgMTEuNyAxLjkgMTcuMkM5Mi40IDM1OS45IDY0IDM5Mi42IDY0IDQzMmMwIDQ0LjIgMzUuOCA4MCA4MCA4MGMuOSAwIDEuOCAwIDIuNyAwbDI2Ni4xIDBjMS4xIDAgMi4xIC4xIDMuMiAuMWM1MyAwIDk2LTQzIDk2LTk2YzAtNDcuNi0zNC42LTg3LTgwLTk0LjdsMC0xLjN6TTMyMCAxOTIuMXMwIDAgMCAwYzAtMzUuMy0yOC42LTY0LTY0LTY0Yy03LjQgMC0xNC42IDEuMy0yMS4yIDMuNmMtMTEuNS0zMC4xLTQwLjYtNTEuNi03NC44LTUxLjZjLTM4LjkgMC03MS4zIDI3LjgtNzguNSA2NC42Yy0zLjEtLjQtNi4zLS42LTkuNS0uNmMtMzkuOCAwLTcyIDMyLjItNzIgNzJzMzIuMiA3MiA3MiA3MmMwIDAgMCAwIDAgMGwzNC44IDBjNS43LTEyIDEzLjQtMjIuOCAyMi44LTMybC01Ni4xIDBjLS41IDAtLjkgMC0xLjQgMGMtMjIuMSAwLTQwLTE3LjktNDAtNDBzMTcuOS00MCA0MC00MGMxLjggMCAzLjYgLjEgNS4zIC4zYzE2LjggMi4yIDMyLjMtOSAzNS42LTI1LjZjNC4zLTIyLjEgMjMuOC0zOC43IDQ3LjEtMzguN2MyMC40IDAgMzggMTIuOCA0NC45IDMwLjljNi4yIDE2LjIgMjQuMSAyNC42IDQwLjUgMTguOGMzLjMtMS4xIDYuOC0xLjggMTAuNi0xLjhjMTcuNyAwIDMyIDE0LjMgMzIgMzJjMCAuMyAwIC42IDAgLjljMCAyLjktLjMgNS44LS43IDguNmMxMC4zLTQuMiAyMS4zLTcuMiAzMi43LTguNmwwLS45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CloudsMoon: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 160c0-57.7 38-106.5 90.3-122.5c-21.2 25.7-33.9 58.8-33.9 94.8c0 72.3 51.4 132.7 119.7 146.1c-14.9 6.2-31.3 9.6-48.5 9.6c-19.9 0-38.7-4.6-55.5-12.7c2.5 6.8 4.5 13.8 5.8 21.1c14.2 5.5 27.2 13.4 38.5 23.2c3.7 .3 7.4 .4 11.2 .4c43.2 0 82.5-17.3 111.2-45.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-6.5 1.1-13.2 1.7-20 1.7c-64.3 0-116.5-52.3-116.5-116.9c0-43.7 23.9-81.8 59.3-101.9c6.1-3.5 9.2-10.5 7.7-17.3S532 1.2 525.1 .6c-4.5-.4-9-.6-13.5-.6C423.4 0 352 71.7 352 160c0 11.5 1.2 22.7 3.5 33.4c12.9 2 25.2 5.9 36.6 11.4c-5.2-14-8-29.1-8-44.8zm-48.1 96c35.3 0 64 28.7 64 64c0 4.4-.4 8.7-1.3 12.8c-1 4.8 .3 9.7 3.4 13.4s7.7 5.8 12.6 5.8l.7 0c.2 0 .4 0 .6 0c35.3 0 64 28.7 64 64s-28.7 64-64 64c-.8 0-1.6 0-2.3 0l-.3 0-.2 0-266.6 0-.2 0-.3 0c-.6 0-1.2 0-1.8 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l.2 0c0 0 0 0 0 0l8.3 0c5.7 0 11-3 13.9-8s2.9-11.1 0-16c-4.1-7-6.4-15.2-6.4-24c0-26.5 21.5-48 48-48c15.7 0 29.6 7.5 38.4 19.2c3.6 4.8 9.7 7.2 15.7 6.1s10.8-5.4 12.5-11.3c7.8-26.6 32.4-46 61.4-46zm96 64c0-53-43-96-96-96c-34.9 0-65.4 18.6-82.2 46.4c-13-9.1-28.7-14.4-45.8-14.4c-44.2 0-80 35.8-80 80c0 5.9 .6 11.7 1.9 17.2C92.4 359.9 64 392.6 64 432c0 44.2 35.8 80 80 80c.9 0 1.8 0 2.7 0l266.1 0c1.1 0 2.1 .1 3.2 .1c53 0 96-43 96-96c0-47.6-34.6-87-80-94.7l0-1.3zM320 192.1s0 0 0 0c0-35.3-28.6-64-64-64c-7.4 0-14.6 1.3-21.2 3.6c-11.5-30.1-40.6-51.6-74.8-51.6c-38.9 0-71.3 27.8-78.5 64.6c-3.1-.4-6.3-.6-9.5-.6c-39.8 0-72 32.2-72 72s32.2 72 72 72c0 0 0 0 0 0l34.8 0c5.7-12 13.4-22.8 22.8-32l-56.1 0c-.5 0-.9 0-1.4 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c1.8 0 3.6 .1 5.3 .3c16.8 2.2 32.3-9 35.6-25.6c4.3-22.1 23.8-38.7 47.1-38.7c20.4 0 38 12.8 44.9 30.9c6.2 16.2 24.1 24.6 40.5 18.8c3.3-1.1 6.8-1.8 10.6-1.8c17.7 0 32 14.3 32 32c0 .3 0 .6 0 .9c0 2.9-.3 5.8-.7 8.6c10.3-4.2 21.3-7.2 32.7-8.6l0-.9z" />
    </Icon>
);

export default CloudsMoon;