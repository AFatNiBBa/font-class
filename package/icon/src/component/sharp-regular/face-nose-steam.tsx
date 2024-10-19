
import { Icon } from "../../index";

/**
 * A component that renders the `face-nose-steam` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-nose-steam?s=sharp-regular face-nose-steam}
 * @preview ![face-nose-steam](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjg4IDQ2NGMtMjEuNiAwLTQyLjQtMy4zLTYxLjktOS40Yy0zLjEgOC42LTguMSAxNi43LTE1IDIzLjZjLTEuMyAxLjMtMi42IDIuNS00IDMuN2MtLjMgNS40LTEuMyAxMC44LTMgMTZDMjMwLjQgNTA3IDI1OC42IDUxMiAyODggNTEyYzI4LjcgMCA1Ni4zLTQuNyA4Mi0xMy40Yy0xLjYtNS4xLTIuNi0xMC41LTIuOS0xNS44Yy0xLjQtMS4yLTIuNy0yLjQtNC0zLjdjLTctNy0xMi0xNS4yLTE1LjEtMjMuOWMtMTkgNS43LTM5LjIgOC44LTYwIDguOHptOTcuOC03LjVjNC43IDQuNyAxMC40IDcuNiAxNi40IDguOGMtMi4xIDQuMy0zLjEgOS0zLjEgMTMuN2MwIC43IDAgMS4zIC4xIDJjLjQgNy42IDMuNSAxNSA5LjMgMjAuOGMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMGMyLjEtMi4xIDMuOC00LjMgNS4yLTYuN2MxOC44IDE0LjUgNDUuOSAxMy4xIDYzLjEtNC4yczE4LjYtNDQuMyA0LjItNjMuMWMyLjQtMS40IDQuNy0zLjEgNi43LTUuMmMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM2MtNC4zLTQuMy05LjUtNy4xLTE1LTguNWMwIDAgMCAwIDAgMGMtMS45LS41LTMuOC0uOC01LjgtLjljLTUuNC0uMy0xMC44IC43LTE1LjcgMy4xYy0xLTUuMi0zLjMtMTAuMS02LjktMTQuNGMtLjYtLjctMS4yLTEuNC0xLjgtMmMtMy42LTMuNi03LjktNi4yLTEyLjUtNy43YzAgMCAwIDAgMCAwYy0xMS4xLTMuNy0yMy45LTEuMS0zMi44IDcuN2MtNC40IDQuNC03LjIgOS43LTguNSAxNS4zTDM1MiAzMjAuOWw0OS4xIDgxLjhjLTUuNiAxLjMtMTAuOSA0LjItMTUuMyA4LjVjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zek00OTYgMjU2YzAgMjEuMy0zLjIgNDEuOC05LjEgNjEuMWM4LjUgMy4xIDE2LjUgOC4xIDIzLjQgMTQuOWMxLjMgMS4zIDIuNSAyLjYgMy43IDRjNS41IC4zIDExIDEuMyAxNi4zIDMuMWM4LjktMjYuMSAxMy44LTU0IDEzLjgtODMuMUM1NDQgMTE0LjYgNDI5LjQgMCAyODggMFMzMiAxMTQuNiAzMiAyNTZjMCAyOC42IDQuNyA1Ni4xIDEzLjMgODEuOGM0LjktMS41IDkuOS0yLjQgMTUtMi43YzEuMi0xLjQgMi40LTIuNyAzLjctNGM3LjItNy4yIDE1LjctMTIuMyAyNC43LTE1LjRDODMgMjk2LjggODAgMjc2LjggODAgMjU2QzgwIDE0MS4xIDE3My4xIDQ4IDI4OCA0OHMyMDggOTMuMSAyMDggMjA4ek0xNzUgNDgxLjRjMC0uNSAuMS0uOSAuMS0xLjRjLjEtMiAwLTQuMS0uMi02LjFjLS40LTMuMy0xLjQtNi41LTIuOS05LjZjNi0xLjIgMTEuNy00LjEgMTYuNC04LjhjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNjLTQuNC00LjQtOS43LTcuMi0xNS4zLTguNUwyMjIuMiAzMjBsLTgxLjggNDkuMWMtMS4zLTUuNi00LjItMTAuOS04LjUtMTUuM2MtOC42LTguNi0yMC44LTExLjMtMzEuNi04LjFjMCAwIDAgMCAwIDBjLTUgMS41LTkuNyA0LjItMTMuNiA4LjFjLS43IC42LTEuMyAxLjMtMS45IDJjLTMuNiA0LjMtNS45IDkuMi02LjkgMTQuNGMtNC45LTIuNC0xMC4zLTMuNC0xNS43LTMuMWMtMS41IC4xLTMuMSAuMy00LjYgLjZjMCAwIDAgMCAwIDBjLTUuOSAxLjItMTEuNiA0LjEtMTYuMiA4LjdjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zYzIuMSAyLjEgNC4zIDMuOCA2LjcgNS4yYy0xNC40IDE4LjgtMTMuMSA0NS45IDQuMiA2My4xczQ0LjMgMTguNiA2My4xIDQuMmMxLjQgMi40IDMuMSA0LjcgNS4yIDYuN2MxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMGM1LjQtNS40IDguNS0xMi4zIDkuMi0xOS40ek0zNDcuMyAxODcuM2M5LjMtOS4zIDM4LjItMzIuMyA3My43LTQ0LjFsLTEwLjEtMzAuNGMtNDEuMyAxMy44LTc0LjIgMzkuOS04Ni4zIDUxLjlsMjIuNiAyMi42ek0xNDQgMjI0bC0xNiAwIDAgMzIgMTYgMCA5NiAwIDE2IDAgMC0zMi0xNiAwLTk2IDB6bTE5MiAwbC0xNiAwIDAgMzIgMTYgMCA5NiAwIDE2IDAgMC0zMi0xNiAwLTk2IDB6TTE1NC45IDE0My4yYzM1LjUgMTEuOCA2NC40IDM0LjggNzMuNyA0NC4xbDIyLjYtMjIuNmMtMTItMTItNDUtMzguMS04Ni4zLTUxLjlsLTEwLjEgMzAuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FaceNoseSteam: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 464c-21.6 0-42.4-3.3-61.9-9.4c-3.1 8.6-8.1 16.7-15 23.6c-1.3 1.3-2.6 2.5-4 3.7c-.3 5.4-1.3 10.8-3 16C230.4 507 258.6 512 288 512c28.7 0 56.3-4.7 82-13.4c-1.6-5.1-2.6-10.5-2.9-15.8c-1.4-1.2-2.7-2.4-4-3.7c-7-7-12-15.2-15.1-23.9c-19 5.7-39.2 8.8-60 8.8zm97.8-7.5c4.7 4.7 10.4 7.6 16.4 8.8c-2.1 4.3-3.1 9-3.1 13.7c0 .7 0 1.3 .1 2c.4 7.6 3.5 15 9.3 20.8c12.5 12.5 32.8 12.5 45.3 0c2.1-2.1 3.8-4.3 5.2-6.7c18.8 14.5 45.9 13.1 63.1-4.2s18.6-44.3 4.2-63.1c2.4-1.4 4.7-3.1 6.7-5.2c12.5-12.5 12.5-32.8 0-45.3c-4.3-4.3-9.5-7.1-15-8.5c0 0 0 0 0 0c-1.9-.5-3.8-.8-5.8-.9c-5.4-.3-10.8 .7-15.7 3.1c-1-5.2-3.3-10.1-6.9-14.4c-.6-.7-1.2-1.4-1.8-2c-3.6-3.6-7.9-6.2-12.5-7.7c0 0 0 0 0 0c-11.1-3.7-23.9-1.1-32.8 7.7c-4.4 4.4-7.2 9.7-8.5 15.3L352 320.9l49.1 81.8c-5.6 1.3-10.9 4.2-15.3 8.5c-12.5 12.5-12.5 32.8 0 45.3zM496 256c0 21.3-3.2 41.8-9.1 61.1c8.5 3.1 16.5 8.1 23.4 14.9c1.3 1.3 2.5 2.6 3.7 4c5.5 .3 11 1.3 16.3 3.1c8.9-26.1 13.8-54 13.8-83.1C544 114.6 429.4 0 288 0S32 114.6 32 256c0 28.6 4.7 56.1 13.3 81.8c4.9-1.5 9.9-2.4 15-2.7c1.2-1.4 2.4-2.7 3.7-4c7.2-7.2 15.7-12.3 24.7-15.4C83 296.8 80 276.8 80 256C80 141.1 173.1 48 288 48s208 93.1 208 208zM175 481.4c0-.5 .1-.9 .1-1.4c.1-2 0-4.1-.2-6.1c-.4-3.3-1.4-6.5-2.9-9.6c6-1.2 11.7-4.1 16.4-8.8c12.5-12.5 12.5-32.8 0-45.3c-4.4-4.4-9.7-7.2-15.3-8.5L222.2 320l-81.8 49.1c-1.3-5.6-4.2-10.9-8.5-15.3c-8.6-8.6-20.8-11.3-31.6-8.1c0 0 0 0 0 0c-5 1.5-9.7 4.2-13.6 8.1c-.7 .6-1.3 1.3-1.9 2c-3.6 4.3-5.9 9.2-6.9 14.4c-4.9-2.4-10.3-3.4-15.7-3.1c-1.5 .1-3.1 .3-4.6 .6c0 0 0 0 0 0c-5.9 1.2-11.6 4.1-16.2 8.7c-12.5 12.5-12.5 32.8 0 45.3c2.1 2.1 4.3 3.8 6.7 5.2c-14.4 18.8-13.1 45.9 4.2 63.1s44.3 18.6 63.1 4.2c1.4 2.4 3.1 4.7 5.2 6.7c12.5 12.5 32.8 12.5 45.3 0c5.4-5.4 8.5-12.3 9.2-19.4zM347.3 187.3c9.3-9.3 38.2-32.3 73.7-44.1l-10.1-30.4c-41.3 13.8-74.2 39.9-86.3 51.9l22.6 22.6zM144 224l-16 0 0 32 16 0 96 0 16 0 0-32-16 0-96 0zm192 0l-16 0 0 32 16 0 96 0 16 0 0-32-16 0-96 0zM154.9 143.2c35.5 11.8 64.4 34.8 73.7 44.1l22.6-22.6c-12-12-45-38.1-86.3-51.9l-10.1 30.4z" />
    </Icon>
);

export default FaceNoseSteam;