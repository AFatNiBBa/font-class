
import { Icon } from "../../index";

/**
 * A component that renders the `dumpster-fire` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumpster-fire?s=solid dumpster-fire}
 * @preview ![dumpster-fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDkuNyAzMmw5MC44IDBMMTE0LjkgMTYwbC05NCAwQzkuMyAxNjAgMCAxNTAuNyAwIDEzOS4xYzAtMi4xIC4zLTQuMSAuOS02LjFMMjYuOCA0OC45QzI5LjkgMzguOSAzOS4yIDMyIDQ5LjcgMzJ6TTI3MiAxNjBsLTEyNC41IDBMMTczLjEgMzIgMjcyIDMybDAgMTI4em0zMiAwbDAtMTI4IDk4LjkgMCAxNC40IDcyLjFjLTEuNyAxLjEtMy4zIDIuNC00LjggMy44Yy0xOC40IDE2LjQtMzUuNCAzNC01MC41IDUyLjFsLTU4IDB6bTIwOS45LTIzLjdjLTEuNyAxLjYtMy40IDMuMi01IDQuOEM0OTggMTI5LjYgNDg2LjcgMTE4LjYgNDc1IDEwOGMtNy42LTYuOS0xNy0xMC44LTI2LjYtMTEuOEw0MzUuNSAzMmw5MC44IDBjMTAuNSAwIDE5LjggNi45IDIyLjkgMTYuOUw1NzUuMSAxMzNjLjIgLjcgLjQgMS40IC41IDIuMWMtMTcuOC0xNS00NC4zLTE0LjYtNjEuNyAxLjJ6TTMyNS4yIDIxMC43QzMwNC4zIDI0NC41IDI4OCAyODIuOSAyODggMzE4LjFjMCA0OS4zIDE4LjYgOTUuMiA0OS42IDEyOS45TDEyOCA0NDhjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJMNDQgMjg4bC0xMiAwYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDQgMC00LTMyIDMwNS41IDBjLTQuNCA2LjItOC41IDEyLjUtMTIuMyAxOC43em0xODAuNi0zNC41TDUxOCAxNjIuNWM1LjQtNi4xIDEzLjMtOC44IDIwLjktOC45YzcuMiAwIDE0LjMgMi42IDE5LjkgNy44YzE5LjcgMTguMyAzOS44IDQzLjIgNTUgNzAuNkM2MjkgMjU5LjIgNjQwIDI5MC4yIDY0MCAzMjAuMkM2NDAgNDA4LjggNTY4LjcgNDgwIDQ4MCA0ODBjLTg5LjYgMC0xNjAtNzEuMy0xNjAtMTU5LjhjMC0zNy4zIDE2LTczLjQgMzYuOC0xMDQuNWMyMC45LTMxLjMgNDcuNS01OSA3MC45LTgwLjJjNS43LTUuMiAxMy4xLTcuNyAyMC4zLTcuNWMxNC4xIC4zIDIzLjggMTEuNCAzMi43IDIxLjZjMCAwIDAgMCAwIDBjMiAyLjMgNCA0LjYgNiA2LjdsMTkgMTkuOXpNNTQ0IDM2OC4yYzAtMzYuNS0zNy03My01NC44LTg4LjRjLTUuNC00LjctMTMuMS00LjctMTguNSAwQzQ1MyAyOTUuMSA0MTYgMzMxLjYgNDE2IDM2OC4yYzAgMzUuMyAyOC43IDY0IDY0IDY0czY0LTI4LjcgNjQtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const DumpsterFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M49.7 32l90.8 0L114.9 160l-94 0C9.3 160 0 150.7 0 139.1c0-2.1 .3-4.1 .9-6.1L26.8 48.9C29.9 38.9 39.2 32 49.7 32zM272 160l-124.5 0L173.1 32 272 32l0 128zm32 0l0-128 98.9 0 14.4 72.1c-1.7 1.1-3.3 2.4-4.8 3.8c-18.4 16.4-35.4 34-50.5 52.1l-58 0zm209.9-23.7c-1.7 1.6-3.4 3.2-5 4.8C498 129.6 486.7 118.6 475 108c-7.6-6.9-17-10.8-26.6-11.8L435.5 32l90.8 0c10.5 0 19.8 6.9 22.9 16.9L575.1 133c.2 .7 .4 1.4 .5 2.1c-17.8-15-44.3-14.6-61.7 1.2zM325.2 210.7C304.3 244.5 288 282.9 288 318.1c0 49.3 18.6 95.2 49.6 129.9L128 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L44 288l-12 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l4 0-4-32 305.5 0c-4.4 6.2-8.5 12.5-12.3 18.7zm180.6-34.5L518 162.5c5.4-6.1 13.3-8.8 20.9-8.9c7.2 0 14.3 2.6 19.9 7.8c19.7 18.3 39.8 43.2 55 70.6C629 259.2 640 290.2 640 320.2C640 408.8 568.7 480 480 480c-89.6 0-160-71.3-160-159.8c0-37.3 16-73.4 36.8-104.5c20.9-31.3 47.5-59 70.9-80.2c5.7-5.2 13.1-7.7 20.3-7.5c14.1 .3 23.8 11.4 32.7 21.6c0 0 0 0 0 0c2 2.3 4 4.6 6 6.7l19 19.9zM544 368.2c0-36.5-37-73-54.8-88.4c-5.4-4.7-13.1-4.7-18.5 0C453 295.1 416 331.6 416 368.2c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default DumpsterFire;