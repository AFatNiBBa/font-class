
import { Icon } from "../../index";

/**
 * A component that renders the `house-flood-water` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-flood-water?s=solid house-flood-water}
 * @preview ![house-flood-water](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzA2LjggNi4xQzI5NS42LTIgMjgwLjQtMiAyNjkuMiA2LjFsLTE3NiAxMjhjLTExLjIgOC4yLTE1LjkgMjIuNi0xMS42IDM1LjhTOTguMSAxOTIgMTEyIDE5MmwxNiAwIDAgNzNjMS43IDEgMy4zIDIgNC45IDMuMWMxOCAxMi40IDQwLjEgMjAuMyA1OS4yIDIwLjNjMjEuMSAwIDQyLTguNSA1OS4yLTIwLjNjMjIuMS0xNS41IDUxLjYtMTUuNSA3My43IDBjMTguNCAxMi43IDM5LjYgMjAuMyA1OS4yIDIwLjNjMTkgMCA0MS4yLTcuOSA1OS4yLTIwLjNjMS41LTEgMy0yIDQuNS0yLjlsLS4zLTczLjIgMTYuNiAwYzEzLjkgMCAyNi4xLTguOSAzMC40LTIyLjFzLS40LTI3LjYtMTEuNi0zNS44bC0xNzYtMTI4ek0yNjkuNSAzMDkuOUMyNDcgMzI1LjQgMjE5LjUgMzM2IDE5MiAzMzZjLTI2LjkgMC01NS4zLTEwLjgtNzcuNC0yNi4xYzAgMCAwIDAgMCAwYy0xMS45LTguNS0yOC4xLTcuOC0zOS4yIDEuN2MtMTQuNCAxMS45LTMyLjUgMjEtNTAuNiAyNS4yYy0xNy4yIDQtMjcuOSAyMS4yLTIzLjkgMzguNHMyMS4yIDI3LjkgMzguNCAyMy45YzI0LjUtNS43IDQ0LjktMTYuNSA1OC4yLTI1QzEyNi41IDM4OS43IDE1OSA0MDAgMTkyIDQwMGMzMS45IDAgNjAuNi05LjkgODAuNC0xOC45YzUuOC0yLjcgMTEuMS01LjMgMTUuNi03LjdjNC41IDIuNCA5LjcgNS4xIDE1LjYgNy43YzE5LjggOSA0OC41IDE4LjkgODAuNCAxOC45YzMzIDAgNjUuNS0xMC4zIDk0LjUtMjUuOGMxMy40IDguNCAzMy43IDE5LjMgNTguMiAyNWMxNy4yIDQgMzQuNC02LjcgMzguNC0yMy45cy02LjctMzQuNC0yMy45LTM4LjRjLTE4LjEtNC4yLTM2LjItMTMuMy01MC42LTI1LjJjLTExLjEtOS41LTI3LjMtMTAuMS0zOS4yLTEuN2MwIDAgMCAwIDAgMEM0MzkuNCAzMjUuMiA0MTAuOSAzMzYgMzg0IDMzNmMtMjcuNSAwLTU1LTEwLjYtNzcuNS0yNi4xYy0xMS4xLTcuOS0yNS45LTcuOS0zNyAwek0zODQgNDQ4Yy0yNy41IDAtNTUtMTAuNi03Ny41LTI2LjFjLTExLjEtNy45LTI1LjktNy45LTM3IDBDMjQ3IDQzNy40IDIxOS41IDQ0OCAxOTIgNDQ4Yy0yNi45IDAtNTUuMy0xMC44LTc3LjQtMjYuMWMwIDAgMCAwIDAgMGMtMTEuOS04LjUtMjguMS03LjgtMzkuMiAxLjdjLTE0LjQgMTEuOS0zMi41IDIxLTUwLjYgMjUuMmMtMTcuMiA0LTI3LjkgMjEuMi0yMy45IDM4LjRzMjEuMiAyNy45IDM4LjQgMjMuOWMyNC41LTUuNyA0NC45LTE2LjUgNTguMi0yNUMxMjYuNSA1MDEuNyAxNTkgNTEyIDE5MiA1MTJjMzEuOSAwIDYwLjYtOS45IDgwLjQtMTguOWM1LjgtMi43IDExLjEtNS4zIDE1LjYtNy43YzQuNSAyLjQgOS43IDUuMSAxNS42IDcuN2MxOS44IDkgNDguNSAxOC45IDgwLjQgMTguOWMzMyAwIDY1LjUtMTAuMyA5NC41LTI1LjhjMTMuNCA4LjQgMzMuNyAxOS4zIDU4LjIgMjVjMTcuMiA0IDM0LjQtNi43IDM4LjQtMjMuOXMtNi43LTM0LjQtMjMuOS0zOC40Yy0xOC4xLTQuMi0zNi4yLTEzLjMtNTAuNi0yNS4yYy0xMS4xLTkuNC0yNy4zLTEwLjEtMzkuMi0xLjdjMCAwIDAgMCAwIDBDNDM5LjQgNDM3LjIgNDEwLjkgNDQ4IDM4NCA0NDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const HouseFloodWater: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M306.8 6.1C295.6-2 280.4-2 269.2 6.1l-176 128c-11.2 8.2-15.9 22.6-11.6 35.8S98.1 192 112 192l16 0 0 73c1.7 1 3.3 2 4.9 3.1c18 12.4 40.1 20.3 59.2 20.3c21.1 0 42-8.5 59.2-20.3c22.1-15.5 51.6-15.5 73.7 0c18.4 12.7 39.6 20.3 59.2 20.3c19 0 41.2-7.9 59.2-20.3c1.5-1 3-2 4.5-2.9l-.3-73.2 16.6 0c13.9 0 26.1-8.9 30.4-22.1s-.4-27.6-11.6-35.8l-176-128zM269.5 309.9C247 325.4 219.5 336 192 336c-26.9 0-55.3-10.8-77.4-26.1c0 0 0 0 0 0c-11.9-8.5-28.1-7.8-39.2 1.7c-14.4 11.9-32.5 21-50.6 25.2c-17.2 4-27.9 21.2-23.9 38.4s21.2 27.9 38.4 23.9c24.5-5.7 44.9-16.5 58.2-25C126.5 389.7 159 400 192 400c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9c33 0 65.5-10.3 94.5-25.8c13.4 8.4 33.7 19.3 58.2 25c17.2 4 34.4-6.7 38.4-23.9s-6.7-34.4-23.9-38.4c-18.1-4.2-36.2-13.3-50.6-25.2c-11.1-9.5-27.3-10.1-39.2-1.7c0 0 0 0 0 0C439.4 325.2 410.9 336 384 336c-27.5 0-55-10.6-77.5-26.1c-11.1-7.9-25.9-7.9-37 0zM384 448c-27.5 0-55-10.6-77.5-26.1c-11.1-7.9-25.9-7.9-37 0C247 437.4 219.5 448 192 448c-26.9 0-55.3-10.8-77.4-26.1c0 0 0 0 0 0c-11.9-8.5-28.1-7.8-39.2 1.7c-14.4 11.9-32.5 21-50.6 25.2c-17.2 4-27.9 21.2-23.9 38.4s21.2 27.9 38.4 23.9c24.5-5.7 44.9-16.5 58.2-25C126.5 501.7 159 512 192 512c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9c33 0 65.5-10.3 94.5-25.8c13.4 8.4 33.7 19.3 58.2 25c17.2 4 34.4-6.7 38.4-23.9s-6.7-34.4-23.9-38.4c-18.1-4.2-36.2-13.3-50.6-25.2c-11.1-9.4-27.3-10.1-39.2-1.7c0 0 0 0 0 0C439.4 437.2 410.9 448 384 448z" />
    </Icon>
);

export default HouseFloodWater;