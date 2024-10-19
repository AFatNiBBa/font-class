
import { Icon } from "../../index";

/**
 * A component that renders the `radiation` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radiation?s=light radiation}
 * @preview ![radiation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTE3LjQgODBMMTc0LjYgMTc5Yy0xMS45IDEyLjYtMjAuOSAyNy45LTI2IDQ1TDM0LjMgMjI0YzguMy01OC4yIDM5LTEwOS4yIDgzLjItMTQ0em01NS40IDM4NC4xTDIzMCAzNjVjOC40IDIgMTcuMSAzIDI2IDNzMTcuNi0xIDI2LTNsNTcuMiA5OS4xQzMxMy41IDQ3NC4zIDI4NS40IDQ4MCAyNTYgNDgwcy01Ny41LTUuNy04My4yLTE1Ljl6TTM5NC42IDgwYzQ0LjIgMzQuOCA3NC45IDg1LjkgODMuMiAxNDRsLTExNC40IDBjLTUuMS0xNy4xLTE0LjEtMzIuNC0yNi00NUwzOTQuNiA4MHpNMTYwIDI1NmM4LjggMCAxNS44LTcuMiAxNy42LTE1LjljMy41LTE3LjQgMTIuNy0zMi44IDI1LjUtNDQuMWM2LjYtNS44IDkuNC0xNS41IDUtMjMuMkwxNDQgNjJjLTguOC0xNS4zLTI4LjYtMjAuNy00Mi43LTEwQzQ3LjggOTIuNyAxMC43IDE1NCAyIDIyNC4xQy0uMiAyNDEuNiAxNC4zIDI1NiAzMiAyNTZsMTI4IDB6bTQ4IDgzLjJMMTQ0IDQ1MC4xYy04LjggMTUuMy0zLjcgMzUuMSAxMi42IDQxLjljMzAuNiAxMi45IDY0LjIgMjAgOTkuNCAyMHM2OC45LTcuMSA5OS40LTIwYzE2LjMtNi45IDIxLjQtMjYuNiAxMi42LTQxLjlMMzA0IDMzOS4yYy00LjQtNy43LTE0LjItMTAuMS0yMi42LTcuM2MtOCAyLjctMTYuNSA0LjEtMjUuNCA0LjFzLTE3LjQtMS40LTI1LjQtNC4xYy04LjQtMi44LTE4LjItLjQtMjIuNiA3LjN6bTEyNi40LTk5LjFjMS43IDguNyA4LjcgMTUuOSAxNy42IDE1LjlsMTI4IDBjMTcuNyAwIDMyLjItMTQuNCAzMC0zMS45QzUwMS4zIDE1NCA0NjQuMiA5Mi43IDQxMC43IDUyYy0xNC4xLTEwLjctMzMuOC01LjMtNDIuNyAxMEwzMDQgMTcyLjljLTQuNCA3LjYtMS43IDE3LjMgNSAyMy4yYzEyLjggMTEuMyAyMiAyNi43IDI1LjUgNDQuMXpNMjQwIDI1NmExNiAxNiAwIDEgMSAzMiAwIDE2IDE2IDAgMSAxIC0zMiAwem02NCAwYTQ4IDQ4IDAgMSAwIC05NiAwIDQ4IDQ4IDAgMSAwIDk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Radiation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M117.4 80L174.6 179c-11.9 12.6-20.9 27.9-26 45L34.3 224c8.3-58.2 39-109.2 83.2-144zm55.4 384.1L230 365c8.4 2 17.1 3 26 3s17.6-1 26-3l57.2 99.1C313.5 474.3 285.4 480 256 480s-57.5-5.7-83.2-15.9zM394.6 80c44.2 34.8 74.9 85.9 83.2 144l-114.4 0c-5.1-17.1-14.1-32.4-26-45L394.6 80zM160 256c8.8 0 15.8-7.2 17.6-15.9c3.5-17.4 12.7-32.8 25.5-44.1c6.6-5.8 9.4-15.5 5-23.2L144 62c-8.8-15.3-28.6-20.7-42.7-10C47.8 92.7 10.7 154 2 224.1C-.2 241.6 14.3 256 32 256l128 0zm48 83.2L144 450.1c-8.8 15.3-3.7 35.1 12.6 41.9c30.6 12.9 64.2 20 99.4 20s68.9-7.1 99.4-20c16.3-6.9 21.4-26.6 12.6-41.9L304 339.2c-4.4-7.7-14.2-10.1-22.6-7.3c-8 2.7-16.5 4.1-25.4 4.1s-17.4-1.4-25.4-4.1c-8.4-2.8-18.2-.4-22.6 7.3zm126.4-99.1c1.7 8.7 8.7 15.9 17.6 15.9l128 0c17.7 0 32.2-14.4 30-31.9C501.3 154 464.2 92.7 410.7 52c-14.1-10.7-33.8-5.3-42.7 10L304 172.9c-4.4 7.6-1.7 17.3 5 23.2c12.8 11.3 22 26.7 25.5 44.1zM240 256a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default Radiation;