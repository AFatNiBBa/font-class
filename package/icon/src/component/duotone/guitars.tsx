
import { Icon, generic } from "../../index";

/**
 * A component that renders the `guitars` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/guitars?s=duotone guitars}
 * @preview ![guitars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQwOGMwIDU3LjQgNTcuMyAxMDQgMTI4IDEwNGM0MS4zIDAgNzcuOS0xNS45IDEwMS40LTQwLjVjLTMuNS0xMC41LTUuNC0yMS43LTUuNC0zMy4zYzAtMjAuOSA2LjItNDAuMiAxNS01Ni41YzIuMy00LjMgNC43LTkgNy0xMy45Yy0zLjktNy42LTguOS0xNC43LTE0LjgtMjEuM2MtMTAuMy0xMS40LTExLjEtMzAuNC0yLjktNDMuNEMyMzUuOCAyOTEuMyAyNDAgMjc4IDI0MCAyNjRjMC00Mi4xLTM3LjctNzcuMy04OC04NmwwIDk0YzkuNyA3LjMgMTYgMTguOSAxNiAzMmMwIDIyLjEtMTcuOSA0MC00MCA0MHMtNDAtMTcuOS00MC00MGMwLTEzLjEgNi4zLTI0LjcgMTYtMzJsMC05NGMtNTAuMyA4LjYtODggNDMuOC04OCA4NmMwIDE0IDQuMiAyNy4zIDExLjYgMzkuMWM4LjIgMTMgNy41IDMyLTIuOSA0My40QzkuMiAzNjMuNyAwIDM4NSAwIDQwOHptMjU2IDMwLjJjMCA0MC44IDMzIDczLjggNzMuOCA3My44bDEwOC40IDBjNDAuOCAwIDczLjgtMzMgNzMuOC03My44YzAtMTQuNS00LjMtMjguNi0xMS4yLTQxLjNDNDg5IDM3NC45IDQ3MiAzMzcuNSA0NzIgMzA0YzAtMTMuNiAyLjktMjQuMyA2LjItMzIuMWwuNS0xLjFjNC42LTEwLjcgOS4zLTIxLjkgOS4zLTMzLjVsMC0yOS4zYzAtOC44LTcuMi0xNi0xNi0xNnMtMTYuMiA3LjMtMTkuNSAxNS41Yy00LjkgMTItMTYuNiAyNy4xLTQ0LjUgMzEuM2MtNC44IC43LTEwLjEgMS4xLTE2IDEuMWwtMTYgMGMtNS45IDAtMTEuMi0uNS0xNi0xLjVjLTMwLjktNi4yLTQxLjktMzAuMy00NS44LTQ2LjdjLTIuMS04LjYtOS4zLTE1LjgtMTguMi0xNS44cy0xNiA3LjItMTYgMTZsMCA0MC42YzAgMTIuNCA0LjQgMjQuNCA4LjggMzYuMmMuOSAyLjUgMS44IDUgMi43IDcuNWMyLjYgNy4zIDQuNSAxNi41IDQuNSAyNy44YzAgMzMuNS0xNyA3MC45LTI4LjggOTIuOWMtNi45IDEyLjctMTEuMiAyNi45LTExLjIgNDEuM3pNMzM2IDMyMGMwLTguOCA3LjItMTYgMTYtMTZsNjQgMGM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNmwtNjQgMGMtOC44IDAtMTYtNy4yLTE2LTE2em0wIDY0YzAtOC44IDcuMi0xNiAxNi0xNmw2NCAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2bC02NCAwYy04LjggMC0xNi03LjItMTYtMTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik04MCAyNEM4MCAxMC43IDkwLjcgMCAxMDQgMGw0OCAwYzEzLjMgMCAyNCAxMC43IDI0IDI0bDAgNTIuMmMwIDYuMi0xLjQgMTIuMy00LjIgMTcuOUwxNTIgMTMzLjcgMTUyIDI3MmMtNi43LTUtMTUtOC0yNC04cy0xNy4zIDMtMjQgOGwwLTEzOC4zTDg0LjIgOTQuMUM4MS40IDg4LjYgODAgODIuNCA4MCA3Ni4yTDgwIDI0ek0zMzguNiAxMjQuMWMtNi43LTcuNi05LjMtMTcuOS03LjItMjcuOGwxMy45LTY0LjhDMzQ5LjIgMTMuMSAzNjUuNCAwIDM4NC4yIDBjMjIgMCAzOS44IDE3LjggMzkuOCAzOS44bDAgNC42YzAgMTIuNC02LjQgMjMuMy0xNiAyOS43bDAgMTY0LjdjLTQuOCAuNy0xMC4xIDEuMS0xNiAxLjFsLTE2IDBjLTUuOSAwLTExLjItLjUtMTYtMS41bDAtODkuOS0yMS40LTI0LjV6TTM1MiAzMDRsNjQgMGM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNmwtNjQgMGMtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNnptMCA2NGw2NCAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2bC02NCAwYy04LjggMC0xNi03LjItMTYtMTZzNy4yLTE2IDE2LTE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Guitars: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 408c0 57.4 57.3 104 128 104c41.3 0 77.9-15.9 101.4-40.5c-3.5-10.5-5.4-21.7-5.4-33.3c0-20.9 6.2-40.2 15-56.5c2.3-4.3 4.7-9 7-13.9c-3.9-7.6-8.9-14.7-14.8-21.3c-10.3-11.4-11.1-30.4-2.9-43.4C235.8 291.3 240 278 240 264c0-42.1-37.7-77.3-88-86l0 94c9.7 7.3 16 18.9 16 32c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-13.1 6.3-24.7 16-32l0-94c-50.3 8.6-88 43.8-88 86c0 14 4.2 27.3 11.6 39.1c8.2 13 7.5 32-2.9 43.4C9.2 363.7 0 385 0 408zm256 30.2c0 40.8 33 73.8 73.8 73.8l108.4 0c40.8 0 73.8-33 73.8-73.8c0-14.5-4.3-28.6-11.2-41.3C489 374.9 472 337.5 472 304c0-13.6 2.9-24.3 6.2-32.1l.5-1.1c4.6-10.7 9.3-21.9 9.3-33.5l0-29.3c0-8.8-7.2-16-16-16s-16.2 7.3-19.5 15.5c-4.9 12-16.6 27.1-44.5 31.3c-4.8 .7-10.1 1.1-16 1.1l-16 0c-5.9 0-11.2-.5-16-1.5c-30.9-6.2-41.9-30.3-45.8-46.7c-2.1-8.6-9.3-15.8-18.2-15.8s-16 7.2-16 16l0 40.6c0 12.4 4.4 24.4 8.8 36.2c.9 2.5 1.8 5 2.7 7.5c2.6 7.3 4.5 16.5 4.5 27.8c0 33.5-17 70.9-28.8 92.9c-6.9 12.7-11.2 26.9-11.2 41.3zM336 320c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16z" />
            <path d="M80 24C80 10.7 90.7 0 104 0l48 0c13.3 0 24 10.7 24 24l0 52.2c0 6.2-1.4 12.3-4.2 17.9L152 133.7 152 272c-6.7-5-15-8-24-8s-17.3 3-24 8l0-138.3L84.2 94.1C81.4 88.6 80 82.4 80 76.2L80 24zM338.6 124.1c-6.7-7.6-9.3-17.9-7.2-27.8l13.9-64.8C349.2 13.1 365.4 0 384.2 0c22 0 39.8 17.8 39.8 39.8l0 4.6c0 12.4-6.4 23.3-16 29.7l0 164.7c-4.8 .7-10.1 1.1-16 1.1l-16 0c-5.9 0-11.2-.5-16-1.5l0-89.9-21.4-24.5zM352 304l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default Guitars;