
import { Icon } from "../../index";

/**
 * A component that renders the `fireplace` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fireplace?s=thin fireplace}
 * @preview ![fireplace](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjI0IDE2bDAgNjRMMTYgODBsMC02NCA2MDggMHpNMTYgMEM3LjIgMCAwIDcuMiAwIDE2TDAgODBjMCA4LjggNy4yIDE2IDE2IDE2bDE2IDAgMCAzOTJjMCAxMy4zIDEwLjcgMjQgMjQgMjRsODAgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGwwLTEzNmMwLTg4LjQgNzEuNi0xNjAgMTYwLTE2MHMxNjAgNzEuNiAxNjAgMTYwbDAgMTM2YzAgMTMuMyAxMC43IDI0IDI0IDI0bDgwIDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRsMC0zOTIgMTYgMGM4LjggMCAxNi03LjIgMTYtMTZsMC02NGMwLTguOC03LjItMTYtMTYtMTZMMTYgMHpNNDggNDg4TDQ4IDk2bDU0NCAwIDAgMzkyYzAgNC40LTMuNiA4LTggOGwtODAgMGMtNC40IDAtOC0zLjYtOC04bDAtMTM2YzAtOTcuMi03OC44LTE3Ni0xNzYtMTc2cy0xNzYgNzguOC0xNzYgMTc2bDAgMTM2YzAgNC40LTMuNiA4LTggOGwtODAgMGMtNC40IDAtOC0zLjYtOC04ek0yOTUuOCAyNzEuMmMuNSAwIC45IC4yIDEuMiAuNWMxMS4yIDEwLjEgMjEuOCAyMSAzMS43IDMyLjZjNS42IDYuNSAxNS42IDYuMyAyMS0uMmM0LTQuOSA4LjItOS42IDEyLjUtMTMuNWMuNy0uNiAxLjgtLjYgMi41IDBjMTMuMSAxMiAyNi42IDI4LjUgMzYuOCA0Ni41YzEwLjMgMTguMSAxNi44IDM3LjIgMTYuOCA1NC42YzAgMzEuOS0xNS4xIDYwLjQtMzguNiA3OC41YzQuNy04LjYgNy40LTE4LjMgNy40LTI4LjdjMC00MC4yLTQ0LjYtNzcuMy02MS4xLTg5LjdjLTMuNi0yLjctOC41LTIuNy0xMi4xIDBjLTE2LjUgMTIuNC02MS4xIDQ5LjYtNjEuMSA4OS43YzAgMTAuNSAyLjggMjAuMyA3LjYgMjljLTIzLjctMTguMS0zOC44LTQ2LjctMzguOC03OC44YzAtMjEuOSA5LjYtNDQuMyAyMy44LTY1LjNjMTQuMi0yMC45IDMyLjYtMzkuOCA0OS4yLTU0LjdjLjMtLjMgLjctLjUgMS4yLS40em0tMTEuOS0xMS41Yy0xNy4xIDE1LjMtMzYuNSAzNS4yLTUxLjcgNTcuNmMtMTUuMiAyMi4zLTI2LjYgNDcuOC0yNi42IDc0LjNjMCA2MyA1MC4yIDExNC44IDExNC40IDExNC44YzYzLjUgMCAxMTQuNC01MS44IDExNC40LTExNC44YzAtMjEuMi03LjktNDMuMS0xOC45LTYyLjVjLTExLjEtMTkuNS0yNS43LTM3LjItMzkuOS01MC40Yy02LjgtNi4zLTE3LjMtNi4zLTI0LjEgMGMtNC40IDQtOC42IDguNi0xMi4zIDEzLjFjLTkuOS0xMS4zLTIwLjQtMjItMzEuNC0zMmMtMy40LTMtNy42LTQuNi0xMS44LTQuNmMtNC4zIDAtOC42IDEuNS0xMiA0LjV6TTMyMCA0ODguMWMtMjkuMyAwLTUxLjItMjEuOS01MS4yLTQ2LjdjMC0xNC40IDguMi0zMC4xIDIwLjctNDVjMTAuNC0xMi41IDIyLjQtMjIuOCAzMC41LTI5LjJjOC4xIDYuMyAyMC4xIDE2LjcgMzAuNSAyOS4yYzEyLjQgMTQuOSAyMC43IDMwLjYgMjAuNyA0NWMwIDI0LjgtMjEuOSA0Ni43LTUxLjIgNDYuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const Fireplace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M624 16l0 64L16 80l0-64 608 0zM16 0C7.2 0 0 7.2 0 16L0 80c0 8.8 7.2 16 16 16l16 0 0 392c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-136c0-88.4 71.6-160 160-160s160 71.6 160 160l0 136c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-392 16 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16L16 0zM48 488L48 96l544 0 0 392c0 4.4-3.6 8-8 8l-80 0c-4.4 0-8-3.6-8-8l0-136c0-97.2-78.8-176-176-176s-176 78.8-176 176l0 136c0 4.4-3.6 8-8 8l-80 0c-4.4 0-8-3.6-8-8zM295.8 271.2c.5 0 .9 .2 1.2 .5c11.2 10.1 21.8 21 31.7 32.6c5.6 6.5 15.6 6.3 21-.2c4-4.9 8.2-9.6 12.5-13.5c.7-.6 1.8-.6 2.5 0c13.1 12 26.6 28.5 36.8 46.5c10.3 18.1 16.8 37.2 16.8 54.6c0 31.9-15.1 60.4-38.6 78.5c4.7-8.6 7.4-18.3 7.4-28.7c0-40.2-44.6-77.3-61.1-89.7c-3.6-2.7-8.5-2.7-12.1 0c-16.5 12.4-61.1 49.6-61.1 89.7c0 10.5 2.8 20.3 7.6 29c-23.7-18.1-38.8-46.7-38.8-78.8c0-21.9 9.6-44.3 23.8-65.3c14.2-20.9 32.6-39.8 49.2-54.7c.3-.3 .7-.5 1.2-.4zm-11.9-11.5c-17.1 15.3-36.5 35.2-51.7 57.6c-15.2 22.3-26.6 47.8-26.6 74.3c0 63 50.2 114.8 114.4 114.8c63.5 0 114.4-51.8 114.4-114.8c0-21.2-7.9-43.1-18.9-62.5c-11.1-19.5-25.7-37.2-39.9-50.4c-6.8-6.3-17.3-6.3-24.1 0c-4.4 4-8.6 8.6-12.3 13.1c-9.9-11.3-20.4-22-31.4-32c-3.4-3-7.6-4.6-11.8-4.6c-4.3 0-8.6 1.5-12 4.5zM320 488.1c-29.3 0-51.2-21.9-51.2-46.7c0-14.4 8.2-30.1 20.7-45c10.4-12.5 22.4-22.8 30.5-29.2c8.1 6.3 20.1 16.7 30.5 29.2c12.4 14.9 20.7 30.6 20.7 45c0 24.8-21.9 46.7-51.2 46.7z" />
    </Icon>
);

export default Fireplace;