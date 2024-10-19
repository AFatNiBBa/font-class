
import { Icon } from "../../index";

/**
 * A component that renders the `duck` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/duck?s=regular duck}
 * @preview ![duck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjkuMSAzMjQuMWMxMS4yIDQuOCAyMy43IDUuMiAzNS4yIDFsMTQ2LjUtNTIuN2MxNC42LTUuMyAyNS44LTE3LjMgMzAtMzIuMnMuOS0zMS04LjgtNDMuMWMtMTAtMTIuNC0xNS45LTI4LTE1LjktNDUuMWMwLTM5LjggMzIuMi03MiA3Mi03MnM3MiAzMi4yIDcyIDcyYzAgMjAuMS04LjIgMzguMi0yMS41IDUxLjRsNy41IDcuNi03LjUtNy42Yy03LjEgNy0xMy42IDE1LjUtMTguNCAyNS41Yy04LjcgMTguMi01LjEgMzkuOSA5IDU0LjRjMTQuMyAxNC41IDIyLjkgMzQuMyAyMi45IDU2bDAgMTIuOGMwIDQ0LjItMzUuOCA4MC04MCA4MGwtMTE2IDBjLTY5LjggMC0xMjguNy00OS40LTE0NC4xLTExNS4ybDE3LjIgNy40ek00NDYuOCAxMzVDNDM4LjUgNzYuOCAzODguNSAzMiAzMjggMzJjLTY2LjMgMC0xMjAgNTMuNy0xMjAgMTIwYzAgMTEuMiAxLjUgMjIgNC40IDMyLjJjNC40IDE1LjkgMTIuMSAzMC41IDIyLjEgNDNsLTQ3IDE2LjlMODggMjgwIDM3IDI1OC4xYy0zLjMtMS40LTYuOS0yLjEtMTAuNS0yLjFDMTEuOSAyNTYgMCAyNjguMSAwIDI4Mi43QzAgMzkxIDg3LjggNDgwIDE5NiA0ODBsMTE2IDBjNzAuNyAwIDEyOC01Ny4zIDEyOC0xMjhsMC0xMi44YzAtMzQuNy0xMy45LTY2LjQtMzYuNi04OS42YzIuMS00LjQgNS4xLTguNSA4LjctMTJjMS44LTEuOCAzLjYtMy43IDUuMy01LjZsMy41IDBjNTAuMyAwIDkxLjEtNDAuOCA5MS4xLTkxLjFjMC02LjgtNi0xMi4xLTEyLjgtMTEuM0w0NjMuOSAxMzRjLTUuNyAuNy0xMS40IDEtMTcuMSAxek0zNDQgMTc2YTI0IDI0IDAgMSAwIDAtNDggMjQgMjQgMCAxIDAgMCA0OHpNMjk5LjIgMjg5LjFjLTEzLjEtMS44LTI1LjIgNy41LTI3IDIwLjZjLTIuNyAyMC0xOCAzOC4zLTQwLjggNDRjLTE4LjYgNC42LTM2LjgtLjUtNDkuMy0xMS42Yy05LjktOC44LTI1LjEtNy45LTMzLjkgMnMtNy45IDI1LjEgMiAzMy45YzI0LjIgMjEuNSA1OC43IDMwLjggOTIuOCAyMi4zYzQxLjYtMTAuNCA3MS40LTQ0LjQgNzYuNy04NC4yYzEuOC0xMy4xLTcuNS0yNS4yLTIwLjYtMjd6Ii8+PC9zdmc+|width=32|height=32)
 */
const Duck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M69.1 324.1c11.2 4.8 23.7 5.2 35.2 1l146.5-52.7c14.6-5.3 25.8-17.3 30-32.2s.9-31-8.8-43.1c-10-12.4-15.9-28-15.9-45.1c0-39.8 32.2-72 72-72s72 32.2 72 72c0 20.1-8.2 38.2-21.5 51.4l7.5 7.6-7.5-7.6c-7.1 7-13.6 15.5-18.4 25.5c-8.7 18.2-5.1 39.9 9 54.4c14.3 14.5 22.9 34.3 22.9 56l0 12.8c0 44.2-35.8 80-80 80l-116 0c-69.8 0-128.7-49.4-144.1-115.2l17.2 7.4zM446.8 135C438.5 76.8 388.5 32 328 32c-66.3 0-120 53.7-120 120c0 11.2 1.5 22 4.4 32.2c4.4 15.9 12.1 30.5 22.1 43l-47 16.9L88 280 37 258.1c-3.3-1.4-6.9-2.1-10.5-2.1C11.9 256 0 268.1 0 282.7C0 391 87.8 480 196 480l116 0c70.7 0 128-57.3 128-128l0-12.8c0-34.7-13.9-66.4-36.6-89.6c2.1-4.4 5.1-8.5 8.7-12c1.8-1.8 3.6-3.7 5.3-5.6l3.5 0c50.3 0 91.1-40.8 91.1-91.1c0-6.8-6-12.1-12.8-11.3L463.9 134c-5.7 .7-11.4 1-17.1 1zM344 176a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM299.2 289.1c-13.1-1.8-25.2 7.5-27 20.6c-2.7 20-18 38.3-40.8 44c-18.6 4.6-36.8-.5-49.3-11.6c-9.9-8.8-25.1-7.9-33.9 2s-7.9 25.1 2 33.9c24.2 21.5 58.7 30.8 92.8 22.3c41.6-10.4 71.4-44.4 76.7-84.2c1.8-13.1-7.5-25.2-20.6-27z" />
    </Icon>
);

export default Duck;