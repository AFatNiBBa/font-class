
import { Icon } from "../../index";

/**
 * A component that renders the `sickle` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sickle?s=light sickle}
 * @preview ![sickle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjIuMTc5IDBDMjMzLjk0IDAgMTU4Ljc4MSA2MS43ODEgMTM5LjQyIDE1MC4zNDRDMTMxLjkyIDE4NS4zMTIgMTI5LjM1NyAyNDAuNzUgMTQ2Ljc2NSAyODEuODQ0QzE1MC4yMzMgMjkwIDE1OS42MDkgMjkzLjgxMiAxNjcuNzUgMjkwLjMxMkMxNzUuODc1IDI4Ni44NzUgMTc5LjY4OCAyNzcuNSAxNzYuMjM1IDI2OS4zNDRDMTYyLjczNCAyMzcuNSAxNjMuOTA2IDE4OC44MTIgMTcwLjY4OCAxNTcuMDk0QzE4Ni44MTMgODMuNDM4IDI0OS4wOTcgMzIgMzIyLjE3OSAzMkMzODcuMjYgMzIgNDM3LjI0NyA1Ny40NjkgNDYzLjQyIDEwMi4wMzFDMzgwLjE1IDU0Ljg0NCAzMDguMzUgNzQuNjU2IDI2NS40NzMgMTEzLjg0NEMyMDYuNjI3IDE2Ny42MjUgMTkyLjE1NyAyNTcuOTY5IDIyOS43ODQgMzI1LjEyNUwyMjAuNDcxIDMzNC40MzhDMjE0LjIyMSAzNDAuNjg4IDIxNC4yMjEgMzUwLjgxMyAyMjAuNDcxIDM1Ny4wNjJDMjI2LjcxOCAzNjMuMzA5IDIzNi44NDMgMzYzLjMxNiAyNDMuMDk3IDM1Ny4wNjJMMjYxLjM2NCAzMzguODEyQzI2Ni44MDEgMzMzLjM3NSAyNjcuNTk4IDMyNC44NzUgMjYzLjI4NSAzMTguNUMyMjEuNDg3IDI1Ni45NjkgMjQyLjU1IDE3OC4xMjUgMjg3LjA2OCAxMzcuNDY5QzMzOS4xMTcgODkuODc1IDQxMy40MTcgOTYuOTY5IDQ4NS44NTggMTU2LjM3NUM0OTEuMDYyIDE2MC42NTYgNDk4LjQ1MyAxNjEuMTU2IDUwNC4yMzQgMTU3LjcxOUM1MTAuMDMxIDE1NC4yNSA1MTMuMDE2IDE0Ny41IDUxMS42ODggMTQwLjg3NUM0OTQuMzEyIDUzLjk2OSA0MjEuNjk5IDAgMzIyLjE3OSAwWk0xMjMuMjk1IDI5Mi42ODhDMTE3LjA0NCAyODYuNDM4IDEwNi45MTkgMjg2LjQzOCAxMDAuNjY5IDI5Mi42ODhDOTQuNDE4IDI5OC45MzggOTQuNDE4IDMwOS4wNjMgMTAwLjY2OSAzMTUuMzEyTDEwNS4zNTYgMzIwTDE0LjA0IDQxMS4zMTJDLTQuNjggNDMwLjAzMSAtNC42OCA0NjAuNDY5IDE0LjA0IDQ3OS4xODhMMzIuNzc1IDQ5Ny45MzhDNDEuODM4IDUwNyA1My45MDEgNTEyIDY2LjczIDUxMkM3OS41NDMgNTEyIDkxLjYwNiA1MDcgMTAwLjY2OSA0OTcuOTM4TDE5MS45ODUgNDA2LjYyNUwxOTYuNjczIDQxMS4zMTNDMjAyLjkyIDQxNy41NTkgMjEzLjA0NSA0MTcuNTY2IDIxOS4yOTkgNDExLjMxM0MyMjUuNTQ5IDQwNS4wNjMgMjI1LjU0OSAzOTQuOTM4IDIxOS4yOTkgMzg4LjY4OEwxMjMuMjk1IDI5Mi42ODhaTTc4LjA0MyA0NzUuMzEyQzcxLjk4IDQ4MS40MDYgNjEuNDQ4IDQ4MS4zNzUgNTUuNDE3IDQ3NS4zMTJMMzYuNjY2IDQ1Ni41NjJDMzAuNDMxIDQ1MC4zMTIgMzAuNDMxIDQ0MC4xODcgMzYuNjY2IDQzMy45MzhMMTI3Ljk4MiAzNDIuNjI1TDE2OS4zNTkgMzg0TDc4LjA0MyA0NzUuMzEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Sickle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M322.179 0C233.94 0 158.781 61.781 139.42 150.344C131.92 185.312 129.357 240.75 146.765 281.844C150.233 290 159.609 293.812 167.75 290.312C175.875 286.875 179.688 277.5 176.235 269.344C162.734 237.5 163.906 188.812 170.688 157.094C186.813 83.438 249.097 32 322.179 32C387.26 32 437.247 57.469 463.42 102.031C380.15 54.844 308.35 74.656 265.473 113.844C206.627 167.625 192.157 257.969 229.784 325.125L220.471 334.438C214.221 340.688 214.221 350.813 220.471 357.062C226.718 363.309 236.843 363.316 243.097 357.062L261.364 338.812C266.801 333.375 267.598 324.875 263.285 318.5C221.487 256.969 242.55 178.125 287.068 137.469C339.117 89.875 413.417 96.969 485.858 156.375C491.062 160.656 498.453 161.156 504.234 157.719C510.031 154.25 513.016 147.5 511.688 140.875C494.312 53.969 421.699 0 322.179 0ZM123.295 292.688C117.044 286.438 106.919 286.438 100.669 292.688C94.418 298.938 94.418 309.063 100.669 315.312L105.356 320L14.04 411.312C-4.68 430.031 -4.68 460.469 14.04 479.188L32.775 497.938C41.838 507 53.901 512 66.73 512C79.543 512 91.606 507 100.669 497.938L191.985 406.625L196.673 411.313C202.92 417.559 213.045 417.566 219.299 411.313C225.549 405.063 225.549 394.938 219.299 388.688L123.295 292.688ZM78.043 475.312C71.98 481.406 61.448 481.375 55.417 475.312L36.666 456.562C30.431 450.312 30.431 440.187 36.666 433.938L127.982 342.625L169.359 384L78.043 475.312Z" />
    </Icon>
);

export default Sickle;