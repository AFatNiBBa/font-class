
import { Icon } from "../../index";

/**
 * A component that renders the `wind-turbine` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wind-turbine?s=regular wind-turbine}
 * @preview ![wind-turbine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjAgNDY0SDMyNy40NzhMMzI2LjYyNyA0MzguNDU5TDI3Ni42NCAzNzkuNTgyTDI3OS40NTUgNDY0SDIzMi41NDVMMjM2LjkxOCAzMzIuNzkzTDIxNi45ODQgMzA5LjMxMkMyMTIuNDY4IDMwMy42ODggMjA2LjY0IDMwMC41IDIwMC4zOSAyOTkuODEyTDE5MC4wMzEgMjk4LjY5MUwxODQuNTIxIDQ2NEgxNTJDMTM4Ljc0NiA0NjQgMTI4IDQ3NC43NDQgMTI4IDQ4OEMxMjggNTAxLjI1NCAxMzguNzQ2IDUxMiAxNTIgNTEySDM2MEMzNzMuMjU0IDUxMiAzODQgNTAxLjI1NCAzODQgNDg4QzM4NCA0NzQuNzQ0IDM3My4yNTQgNDY0IDM2MCA0NjRaTTM5OC42ODcgNDI1Ljc5M0wzMTAuMzM4IDI0My40NzlDMzA0LjQxIDIyOS44ODEgMzA0LjE0NiAyMTQuNDggMzA5LjYwNyAyMDAuNjg5TDM4Mi44ODYgMjEuNjI1QzM4Ni4xMDMgMTMuNTE0IDM4Mi4xMzYgNC4zMyAzNzQuMDI1IDEuMTEzQzM2Ny4zMDEgLTEuNTU1IDM1OS42MjEgMC42ODcgMzU1LjM4OCA2LjU1N0wyNDEuMjY5IDE2My4yMjFDMjMyLjU3OCAxNzUuMjQyIDIxOS40NTMgMTgzLjMwNSAyMDQuOCAxODUuNjE5TDEzLjMyMiAyMTUuOTQ5QzUuNTIxIDIxNy4xOTEgLTAuMTY0IDIyNC4wMDIgMC4wMDQgMjMxLjg5OFYyMzIuMTI5QzAuMTgzIDI0MC4wNTkgNi4yMTcgMjQ2LjYyNyAxNC4xMDMgMjQ3LjQ3OUwyMDMuODMgMjY4LjAwOEMyMTguNTg0IDI2OS42MDIgMjMyLjA5MiAyNzcuMDA4IDI0MS4zNjkgMjg4LjU4NkwzNzEuNjc3IDQ0Mi4wODJDMzc2LjY0IDQ0OC4yNzEgMzg1LjQyMiA0NDkuODI0IDM5Mi4yMDcgNDQ1LjcxMUwzOTIuMzk2IDQ0NS41OTJDMzk5LjE1IDQ0MS40OTQgNDAxLjgzOCA0MzMuMDM3IDM5OC42ODcgNDI1Ljc5M1pNMjU2IDI0OC4wMDhDMjQyLjc0NCAyNDguMDA4IDIzMiAyMzcuMjY0IDIzMiAyMjQuMDFDMjMyIDIxMC43NTQgMjQyLjc0NCAyMDAuMDEgMjU2IDIwMC4wMUMyNjkuMjU0IDIwMC4wMSAyNzkuOTk4IDIxMC43NTQgMjc5Ljk5OCAyMjQuMDFDMjc5Ljk5OCAyMzcuMjY0IDI2OS4yNTQgMjQ4LjAwOCAyNTYgMjQ4LjAwOFoiLz48L3N2Zz4=|width=32|height=32)
 */
const WindTurbine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M360 464H327.478L326.627 438.459L276.64 379.582L279.455 464H232.545L236.918 332.793L216.984 309.312C212.468 303.688 206.64 300.5 200.39 299.812L190.031 298.691L184.521 464H152C138.746 464 128 474.744 128 488C128 501.254 138.746 512 152 512H360C373.254 512 384 501.254 384 488C384 474.744 373.254 464 360 464ZM398.687 425.793L310.338 243.479C304.41 229.881 304.146 214.48 309.607 200.689L382.886 21.625C386.103 13.514 382.136 4.33 374.025 1.113C367.301 -1.555 359.621 0.687 355.388 6.557L241.269 163.221C232.578 175.242 219.453 183.305 204.8 185.619L13.322 215.949C5.521 217.191 -0.164 224.002 0.004 231.898V232.129C0.183 240.059 6.217 246.627 14.103 247.479L203.83 268.008C218.584 269.602 232.092 277.008 241.369 288.586L371.677 442.082C376.64 448.271 385.422 449.824 392.207 445.711L392.396 445.592C399.15 441.494 401.838 433.037 398.687 425.793ZM256 248.008C242.744 248.008 232 237.264 232 224.01C232 210.754 242.744 200.01 256 200.01C269.254 200.01 279.998 210.754 279.998 224.01C279.998 237.264 269.254 248.008 256 248.008Z" />
    </Icon>
);

export default WindTurbine;