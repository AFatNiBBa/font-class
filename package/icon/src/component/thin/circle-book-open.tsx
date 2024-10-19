
import { Icon } from "../../index";

/**
 * A component that renders the `circle-book-open` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-book-open?s=thin circle-book-open}
 * @preview ![circle-book-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk2IDI1NkEyNDAgMjQwIDAgMSAwIDE2IDI1NmEyNDAgMjQwIDAgMSAwIDQ4MCAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6bTEyOC04Mi41bDAgMTYwLjljMy45LS43IDguNy0xLjUgMTQuMi0yLjNjMTQtMiAzMi40LTQuMSA0OS44LTQuMWMxOC43IDAgMzYgNi42IDQ4LjMgMTIuOWMyLjggMS40IDUuNCAyLjkgNy43IDQuMkwyNDggMTczYy0uMi0uMS0uMy0uMi0uNS0uMmMtMy4yLTEuNC03LjgtMy4zLTEzLjQtNS4yYy0xMS4zLTMuOC0yNi40LTcuNi00Mi4xLTcuNmMtMTUuOCAwLTMyLjkgMy44LTQ2LjQgNy43Yy02LjcgMS45LTEyLjMgMy45LTE2LjMgNS4zbC0xLjIgLjV6bTEzNi0uNGwwIDE3Mi4xYzIuMy0xLjQgNC45LTIuOCA3LjctNC4yQzI4NCAzMzQuNiAzMDEuMyAzMjggMzIwIDMyOGMxNy40IDAgMzUuOSAyLjEgNDkuOCA0LjFjMi43IC40IDUuMiAuOCA3LjYgMS4yYzIuNCAuNCA0LjYgLjggNi42IDEuMWwwLTE2MC45LTEuMi0uNWMtNC0xLjUtOS42LTMuNC0xNi4zLTUuM2MtMTMuNS0zLjktMzAuNi03LjctNDYuNC03LjdjLTE1LjcgMC0zMC44IDMuNy00Mi4xIDcuNmMtNS4yIDEuOC05LjUgMy41LTEyLjYgNC45bC0uOCAuNGMtLjIgLjEtLjMgLjItLjUgLjJ6bS04LTEzLjljLjYtLjMgMS4zLS42IDItLjljMy41LTEuNiA4LjYtMy43IDE0LjgtNS44YzEyLjMtNC4yIDI5LjItOC40IDQ3LjItOC40YzE4IDAgMzYuOCA0LjIgNTAuOSA4LjNjNy4xIDIuMSAxMy4xIDQuMSAxNy4zIDUuN2MyLjEgLjggMy44IDEuNCA1IDEuOWwxLjQgLjUgLjQgLjEgLjEgMGMwIDAgMCAwIDAgMHMwIDAgMCAwczAgMCAwIDBMMzkyIDE2OGwzLjEtNy40YzMgMS4yIDQuOSA0LjIgNC45IDcuNGwwIDE3NmMwIDIuNC0xLjEgNC43LTMgNi4ycy00LjMgMi4xLTYuNyAxLjZMMzkyIDM0NGwtMS42IDcuOHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMGMwIDAgMCAwLS4xIDBsLS4zLS4xLTEuMi0uMmMtMS4xLS4yLTIuNy0uNS00LjctLjljLTQtLjctOS44LTEuNy0xNi42LTIuN2MtMTMuNi0yLTMxLjItMy45LTQ3LjUtMy45Yy0xNS4xIDAtMjkuOCA1LjQtNDEgMTEuMWMtNS42IDIuOC0xMC4xIDUuNy0xMy4zIDcuOGMtMS42IDEuMS0yLjggMS45LTMuNiAyLjVjLS40IC4zLS43IC41LS45IC43bC0uMiAuMmMwIDAgMCAwIDAgMGwtNS02LjNjNSA2LjMgNSA2LjMgNSA2LjNjLTIuOSAyLjMtNyAyLjMtOS45IDBjMCAwIDAgMCAwIDBzMCAwIDAgMGw1LTYuMy01IDYuM2MwIDAgMCAwIDAgMGwtLjItLjJjLS4yLS4xLS41LS40LS45LS43Yy0uOC0uNi0yLTEuNS0zLjYtMi41Yy0zLjItMi4xLTcuNy00LjktMTMuMy03LjhjLTExLjItNS43LTI1LjktMTEuMS00MS0xMS4xYy0xNi4zIDAtMzMuOSAxLjktNDcuNSAzLjljLTYuOCAxLTEyLjUgMi0xNi42IDIuN2MtMiAuNC0zLjYgLjctNC43IC45bC0xLjIgLjItLjMgLjFjMCAwIDAgMC0uMSAwYzAgMCAwIDAgMCAwczAgMCAwIDBMMTIwIDM0NGMxLjYgNy44IDEuNiA3LjggMS42IDcuOHMwIDAgMCAwYy0yLjQgLjUtNC44LS4xLTYuNy0xLjZzLTMtMy44LTMtNi4ybDAtMTc2YzAtMy4yIDEuOS02LjEgNC45LTcuNEwxMjAgMTY4bC0zLjEtNy40czAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwbC4xIDAgLjQtLjEgMS40LS41YzEuMi0uNSAyLjktMS4xIDUtMS45YzQuMi0xLjUgMTAuMy0zLjYgMTcuMy01LjdjMTQuMS00LjEgMzIuOS04LjMgNTAuOS04LjNjMTguMSAwIDM1IDQuMyA0Ny4yIDguNGM2LjIgMi4xIDExLjIgNC4yIDE0LjggNS44Yy43IC4zIDEuNCAuNiAyIC45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleBookOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm128-82.5l0 160.9c3.9-.7 8.7-1.5 14.2-2.3c14-2 32.4-4.1 49.8-4.1c18.7 0 36 6.6 48.3 12.9c2.8 1.4 5.4 2.9 7.7 4.2L248 173c-.2-.1-.3-.2-.5-.2c-3.2-1.4-7.8-3.3-13.4-5.2c-11.3-3.8-26.4-7.6-42.1-7.6c-15.8 0-32.9 3.8-46.4 7.7c-6.7 1.9-12.3 3.9-16.3 5.3l-1.2 .5zm136-.4l0 172.1c2.3-1.4 4.9-2.8 7.7-4.2C284 334.6 301.3 328 320 328c17.4 0 35.9 2.1 49.8 4.1c2.7 .4 5.2 .8 7.6 1.2c2.4 .4 4.6 .8 6.6 1.1l0-160.9-1.2-.5c-4-1.5-9.6-3.4-16.3-5.3c-13.5-3.9-30.6-7.7-46.4-7.7c-15.7 0-30.8 3.7-42.1 7.6c-5.2 1.8-9.5 3.5-12.6 4.9l-.8 .4c-.2 .1-.3 .2-.5 .2zm-8-13.9c.6-.3 1.3-.6 2-.9c3.5-1.6 8.6-3.7 14.8-5.8c12.3-4.2 29.2-8.4 47.2-8.4c18 0 36.8 4.2 50.9 8.3c7.1 2.1 13.1 4.1 17.3 5.7c2.1 .8 3.8 1.4 5 1.9l1.4 .5 .4 .1 .1 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0L392 168l3.1-7.4c3 1.2 4.9 4.2 4.9 7.4l0 176c0 2.4-1.1 4.7-3 6.2s-4.3 2.1-6.7 1.6L392 344l-1.6 7.8s0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0-.1 0l-.3-.1-1.2-.2c-1.1-.2-2.7-.5-4.7-.9c-4-.7-9.8-1.7-16.6-2.7c-13.6-2-31.2-3.9-47.5-3.9c-15.1 0-29.8 5.4-41 11.1c-5.6 2.8-10.1 5.7-13.3 7.8c-1.6 1.1-2.8 1.9-3.6 2.5c-.4 .3-.7 .5-.9 .7l-.2 .2c0 0 0 0 0 0l-5-6.3c5 6.3 5 6.3 5 6.3c-2.9 2.3-7 2.3-9.9 0c0 0 0 0 0 0s0 0 0 0l5-6.3-5 6.3c0 0 0 0 0 0l-.2-.2c-.2-.1-.5-.4-.9-.7c-.8-.6-2-1.5-3.6-2.5c-3.2-2.1-7.7-4.9-13.3-7.8c-11.2-5.7-25.9-11.1-41-11.1c-16.3 0-33.9 1.9-47.5 3.9c-6.8 1-12.5 2-16.6 2.7c-2 .4-3.6 .7-4.7 .9l-1.2 .2-.3 .1c0 0 0 0-.1 0c0 0 0 0 0 0s0 0 0 0L120 344c1.6 7.8 1.6 7.8 1.6 7.8s0 0 0 0c-2.4 .5-4.8-.1-6.7-1.6s-3-3.8-3-6.2l0-176c0-3.2 1.9-6.1 4.9-7.4L120 168l-3.1-7.4s0 0 0 0s0 0 0 0s0 0 0 0l.1 0 .4-.1 1.4-.5c1.2-.5 2.9-1.1 5-1.9c4.2-1.5 10.3-3.6 17.3-5.7c14.1-4.1 32.9-8.3 50.9-8.3c18.1 0 35 4.3 47.2 8.4c6.2 2.1 11.2 4.2 14.8 5.8c.7 .3 1.4 .6 2 .9z" />
    </Icon>
);

export default CircleBookOpen;