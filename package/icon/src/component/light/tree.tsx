
import { Icon } from "../../index";

/**
 * A component that renders the `tree` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tree?s=light tree}
 * @preview ![tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzkuNjA3IDM5MS41ODZMMzcwLjYzMSAzMTEuOTg2SDM4NS44MjhDNDExLjQyMiAzMTEuOTg2IDQyNS4zMjggMjgyLjc5OSA0MDkuMDE1IDI2My40ODRMMzQ4LjE1OCAxOTEuOThIMzU4LjkyNEMzODAuMjAzIDE5MS45OCAzOTEuODI4IDE2OS40NzkgMzc4LjIwMyAxNTQuNjY2TDI0My4zMzQgOC4xNTZDMjM4LjMzNCAyLjcxOSAyMzEuMTc4IDAgMjI0LjAyMSAwUzIwOS43MTEgMi43MTkgMjA0LjcxMSA4LjE1Nkw2OS45MzMgMTU0LjY2NkM1Ni4zNDIgMTY5LjQ3OSA2Ny45MzMgMTkxLjk4IDg5LjIxNSAxOTEuOThIOTkuOTQ5TDM5LjAyOSAyNjMuNDg0QzIyLjcxNyAyODIuNzk5IDM2LjYyMyAzMTEuOTg2IDYyLjIxNSAzMTEuOTg2SDc3LjQxNEw4LjQzNSAzOTEuNTg2Qy0xMC41NjMgNDEzLjQ5NCA0LjYyNSA0NDcuOTk2IDMzLjEyMyA0NDcuOTk2SDIwOFY0OTZDMjA4IDUwNC44NDQgMjE1LjE1NiA1MTIgMjI0IDUxMlMyNDAgNTA0Ljg0NCAyNDAgNDk2VjQ0Ny45OTZDMzMwLjMwMyA0NDcuOTk2IDQxNC44MjggNDQ3Ljk5NiA0MTQuODI4IDQ0Ny45OTZDNDQzLjQyIDQ0Ny45OTYgNDU4LjUxMyA0MTMuNCA0MzkuNjA3IDM5MS41ODZaTTQxNC44MjggNDE1Ljk5NkwyNDAgNDE2VjM1OC42MjVMMjgzLjMxMiAzMTUuMzEyQzI4OS41NjIgMzA5LjA2MiAyODkuNTYyIDI5OC45MzcgMjgzLjMxMiAyOTIuNjg4UzI2Ni45MzcgMjg2LjQzOCAyNjAuNjg3IDI5Mi42ODhMMjQwIDMxMy4zNzVWMTc2QzI0MCAxNjcuMTU2IDIzMi44NDQgMTYwIDIyNCAxNjBTMjA4IDE2Ny4xNTYgMjA4IDE3NlYyNTYuMDFMMTg4Ljc5NyAyMzAuNDA2QzE4My41IDIyMy4zNDQgMTczLjQ1MyAyMjEuODc1IDE2Ni40MDYgMjI3LjE4OEMxNTkuMzI4IDIzMi41IDE1Ny44OSAyNDIuNTMxIDE2My4yMDMgMjQ5LjU5NEwyMDggMzA5LjMyMlY0MTYuMDAyTDMyLjg2MyA0MTYuMDA2QzMyLjY3IDQxNS44NzkgMzIuMTUyIDQxNS4yMDUgMzIuMDI1IDQxNC4yODlDMzEuOTMgNDEzLjU5NiAzMi4wNzIgNDEzLjE3NCAzMi42MTkgNDEyLjU0MUwxMDEuNTk3IDMzMi45NDNMMTQ3LjQ4OCAyNzkuOTg2SDc3LjQxNEw2Ny4wMSAyNzkuOTg0TDEyNC4zMDYgMjEyLjczMkwxNjkuMjUyIDE1OS45OEgxMDguNTI1TDIyNC4wMjMgMzQuNDI4TDMzOS42MDEgMTU5Ljk4SDI3OC45MDJMMzIzLjc4OSAyMTIuNzIxTDM4MS4wMzkgMjc5Ljk4NkgzMDAuNTU2TDM0Ni40NDcgMzMyLjk0M0w0MTUuNDI2IDQxMi41NDNDNDE1Ljg4MyA0MTMuMDcgNDE2LjA4MiA0MTMuNDYxIDQxNS45NzIgNDE0LjI0NEM0MTUuODQyIDQxNS4xODQgNDE1LjMxNCA0MTUuODczIDQxNC44MjggNDE1Ljk5NloiLz48L3N2Zz4=|width=32|height=32)
 */
const Tree: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M439.607 391.586L370.631 311.986H385.828C411.422 311.986 425.328 282.799 409.015 263.484L348.158 191.98H358.924C380.203 191.98 391.828 169.479 378.203 154.666L243.334 8.156C238.334 2.719 231.178 0 224.021 0S209.711 2.719 204.711 8.156L69.933 154.666C56.342 169.479 67.933 191.98 89.215 191.98H99.949L39.029 263.484C22.717 282.799 36.623 311.986 62.215 311.986H77.414L8.435 391.586C-10.563 413.494 4.625 447.996 33.123 447.996H208V496C208 504.844 215.156 512 224 512S240 504.844 240 496V447.996C330.303 447.996 414.828 447.996 414.828 447.996C443.42 447.996 458.513 413.4 439.607 391.586ZM414.828 415.996L240 416V358.625L283.312 315.312C289.562 309.062 289.562 298.937 283.312 292.688S266.937 286.438 260.687 292.688L240 313.375V176C240 167.156 232.844 160 224 160S208 167.156 208 176V256.01L188.797 230.406C183.5 223.344 173.453 221.875 166.406 227.188C159.328 232.5 157.89 242.531 163.203 249.594L208 309.322V416.002L32.863 416.006C32.67 415.879 32.152 415.205 32.025 414.289C31.93 413.596 32.072 413.174 32.619 412.541L101.597 332.943L147.488 279.986H77.414L67.01 279.984L124.306 212.732L169.252 159.98H108.525L224.023 34.428L339.601 159.98H278.902L323.789 212.721L381.039 279.986H300.556L346.447 332.943L415.426 412.543C415.883 413.07 416.082 413.461 415.972 414.244C415.842 415.184 415.314 415.873 414.828 415.996Z" />
    </Icon>
);

export default Tree;