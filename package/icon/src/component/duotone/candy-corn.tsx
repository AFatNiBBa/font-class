
import { Icon, generic } from "../../index";

/**
 * A component that renders the `candy-corn` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-corn?s=duotone candy-corn}
 * @preview ![candy-corn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMS43YzAgMTAuNCA0IDIwLjcgMTEuNiAyOC4zYzEwLjEgMTAuMSAyNyAyMiA0Ni4zIDMzLjljMTUtMjUgNDQuOC02OC41IDk1LjEtMTE4LjhzOTMuOC04MC4xIDExOC44LTk1LjFjLTEyLTE5LjMtMjMuOC0zNi4yLTMzLjktNDYuM2MtMTIuMi0xMi4yLTMwLjgtMTUuMi00Ni4yLTcuNWMtMzkuNiAyMC4xLTc1LjQgNDkuOS0xMDYuNiA4MUM1NCAyMjguNCAyNC41IDI2NCA0LjMgMzAzLjRjLTIuOSA1LjgtNC4zIDEyLTQuMyAxOC4yek0yMTIgNDY0LjZjMjYuMyAxMS44IDUxLjkgMjIuMiA3My42IDI5LjVjMjguNiA5LjYgNjguNyAyMi4yIDkzLjYtMi43czEyLjItNjUgMi43LTkzLjZjLTcuMy0yMS44LTE3LjctNDcuMy0yOS41LTczLjZjLTIxLjYgMTYuMi00Ny4zIDM3LjctNzUgNjUuNHMtNDkuMiA1My4zLTY1LjQgNzV6TTMyMCA1NmMwIDE0LjMgMy42IDM0LjcgOC43IDU2LjhDMzU3IDEwNS43IDQwOC44IDk2IDQ4MCA5NnMxMjMgOS43IDE1MS4zIDE2LjhDNjM2LjQgOTAuNyA2NDAgNzAuMyA2NDAgNTZjMC0xNy4yLTExLTMyLjUtMjcuNC0zNy45QzU3MC40IDQuMiA1MjQuMSAwIDQ4MCAwYy00NCAwLTkwIDQuNC0xMzIuMiAxNy45QzMzMS40IDIzLjQgMzIwIDM4LjggMzIwIDU2em02MC43IDIyMi44YzEwLjMgMjcgMjEgNTIuNCAzMS4yIDcyLjljMTMuNCAyNyAzMi45IDY0LjMgNjguMSA2NC4zczU0LjYtMzcuMyA2OC4xLTY0LjNjMTAuMi0yMC42IDIwLjktNDYgMzEuMi03Mi45Yy0yNi43LTMuOC02MC4xLTYuOC05OS4zLTYuOHMtNzIuNSAyLjktOTkuMyA2Ljh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMzYuNCAxNDIuOUMzNjUuOSAxMzYuMSA0MTQuOCAxMjggNDgwIDEyOHMxMTQuMSA4LjEgMTQzLjYgMTQuOWMtOSAzMy4xLTIxIDcxLjItMzMuOSAxMDcuNWMtMy40IDkuNS02LjkgMTktMTAuNCAyOC4zYy0yNi43LTMuOC02MC4xLTYuOC05OS4zLTYuOHMtNzIuNSAyLjktOTkuMyA2LjhjLTMuNS05LjMtNy0xOC44LTEwLjQtMjguM2MtMTIuOS0zNi4zLTI0LjktNzQuNC0zMy45LTEwNy41ek04NC42IDM5OS45YzE2LjEtMjUuNyA0NC45LTY2IDkxLTExMi4xczg2LjQtNzQuOSAxMTIuMS05MWMxNy4xIDI5LjggMzUuNSA2NS4yIDUyIDEwMGM0LjMgOS4yIDguNiAxOC4zIDEyLjcgMjcuNGMtMjEuNiAxNi4yLTQ3LjIgMzcuNy03NSA2NS40cy00OS4yIDUzLjMtNjUuNCA3NWMtOS4xLTQuMS0xOC4zLTguMy0yNy40LTEyLjdjLTM0LjgtMTYuNS03MC4yLTM1LTEwMC01MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CandyCorn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 321.7c0 10.4 4 20.7 11.6 28.3c10.1 10.1 27 22 46.3 33.9c15-25 44.8-68.5 95.1-118.8s93.8-80.1 118.8-95.1c-12-19.3-23.8-36.2-33.9-46.3c-12.2-12.2-30.8-15.2-46.2-7.5c-39.6 20.1-75.4 49.9-106.6 81C54 228.4 24.5 264 4.3 303.4c-2.9 5.8-4.3 12-4.3 18.2zM212 464.6c26.3 11.8 51.9 22.2 73.6 29.5c28.6 9.6 68.7 22.2 93.6-2.7s12.2-65 2.7-93.6c-7.3-21.8-17.7-47.3-29.5-73.6c-21.6 16.2-47.3 37.7-75 65.4s-49.2 53.3-65.4 75zM320 56c0 14.3 3.6 34.7 8.7 56.8C357 105.7 408.8 96 480 96s123 9.7 151.3 16.8C636.4 90.7 640 70.3 640 56c0-17.2-11-32.5-27.4-37.9C570.4 4.2 524.1 0 480 0c-44 0-90 4.4-132.2 17.9C331.4 23.4 320 38.8 320 56zm60.7 222.8c10.3 27 21 52.4 31.2 72.9c13.4 27 32.9 64.3 68.1 64.3s54.6-37.3 68.1-64.3c10.2-20.6 20.9-46 31.2-72.9c-26.7-3.8-60.1-6.8-99.3-6.8s-72.5 2.9-99.3 6.8z" />
            <path d="M336.4 142.9C365.9 136.1 414.8 128 480 128s114.1 8.1 143.6 14.9c-9 33.1-21 71.2-33.9 107.5c-3.4 9.5-6.9 19-10.4 28.3c-26.7-3.8-60.1-6.8-99.3-6.8s-72.5 2.9-99.3 6.8c-3.5-9.3-7-18.8-10.4-28.3c-12.9-36.3-24.9-74.4-33.9-107.5zM84.6 399.9c16.1-25.7 44.9-66 91-112.1s86.4-74.9 112.1-91c17.1 29.8 35.5 65.2 52 100c4.3 9.2 8.6 18.3 12.7 27.4c-21.6 16.2-47.2 37.7-75 65.4s-49.2 53.3-65.4 75c-9.1-4.1-18.3-8.3-27.4-12.7c-34.8-16.5-70.2-35-100-52z" />
    </Icon>
);

export default CandyCorn;