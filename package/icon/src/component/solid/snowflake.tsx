
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `snowflake` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/snowflake?s=solid snowflake}
 * @preview ![snowflake](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzUuNjE1IDM4NC4xMjVDNDY5LjY3MiAzOTQuMzEyIDQ1OC45NDIgNDAwIDQ0Ny45MyA0MDBDNDQyLjQ0MiA0MDAgNDM2Ljg4OSAzOTguNTk0IDQzMS44MDUgMzk1LjYyNUw0MDYuNzE5IDM4MC45ODhMNDEyLjA5OCA0MDEuMjgxQzQxNS40OSA0MTQuMDk0IDQwNy44NDIgNDI3LjI1IDM5NS4wMTggNDMwLjYyNUMzOTIuOTUzIDQzMS4xODcgMzkwLjg4OSA0MzEuNDM3IDM4OC44NTQgNDMxLjQzN0MzNzguMjE5IDQzMS40MzcgMzY4LjQ5IDQyNC4zNDQgMzY1LjY0MyA0MTMuNTk0TDM0Ny45MDEgMzQ2LjY3MkwyODguMDMzIDMxMS43NDJWMzgyLjI0MkwzMzYuNDEgNDMxLjEyNUMzNDUuNzQ4IDQ0MC41NjIgMzQ1LjY1NSA0NTUuNzUgMzM2LjIyMyA0NjUuMDYyQzMzMS41MzEgNDY5LjY4OCAzMjUuNDMgNDcyIDMxOS4zMyA0NzJDMzEzLjEzNyA0NzIgMzA2Ljk0NCA0NjkuNjI1IDMwMi4yNSA0NjQuODc1TDI4OC4wMzMgNDUwLjUwNFY0ODBDMjg4LjAzMyA0OTcuNjg4IDI3My42OSA1MTIgMjU2IDUxMlMyMjMuOTY3IDQ5Ny42ODggMjIzLjk2NyA0ODBWNDUwLjUwNEwyMDkuNzUgNDY0Ljg3NUMyMDAuNDI4IDQ3NC4zMTMgMTg1LjIyNSA0NzQuMzc1IDE3NS43NzggNDY1LjA2M0MxNjYuMzQ2IDQ1NS43NSAxNjYuMjUyIDQ0MC41NjMgMTc1LjU5IDQzMS4xMjVMMjIzLjk2NyAzODIuMjQyVjMxMS43NDJMMTY0LjEgMzQ2LjY3MkwxNDYuMzU4IDQxMy41OTRDMTQzLjUxIDQyNC4zNDQgMTMzLjc4MSA0MzEuNDM4IDEyMy4xNDcgNDMxLjQzOEMxMjEuMTEyIDQzMS40MzggMTE5LjA0NyA0MzEuMTg4IDExNi45ODMgNDMwLjYyNUMxMDQuMTU4IDQyNy4yNSA5Ni41MSA0MTQuMDk0IDk5LjkwMyA0MDEuMjgxTDEwNS4yODEgMzgwLjk4OEw4MC4xOTYgMzk1LjYyNUM3NS4xMTIgMzk4LjU5NCA2OS41NTkgNDAwIDY0LjA3MSA0MDBDNTMuMDU5IDQwMCA0Mi4zMjggMzk0LjMxMiAzNi4zODUgMzg0LjEyNUMyNy40NTMgMzY4Ljg3NSAzMi42IDM0OS4yODEgNDcuODgxIDM0MC4zNzVMNzMuODQ2IDMyNS4yMjdMNTMuNTEyIDMxOS43MTlDNDAuNzAxIDMxNi4yNSAzMy4xNDcgMzAzLjA2MiAzNi42MTkgMjkwLjI4MVM1My4yMzEgMjcwIDY2LjA4OCAyNzMuNDA2TDEzMi4wMzUgMjkxLjI3NUwxOTIuNDk2IDI1NkwxMzIuMDM1IDIyMC43MjVMNjYuMDg4IDIzOC41OTRDNjMuOTc3IDIzOS4xNTYgNjEuODY0IDIzOS40MzggNTkuNzgzIDIzOS40MzhDNDkuMjExIDIzOS40MzggMzkuNTE0IDIzMi40MDYgMzYuNjE5IDIyMS43MTlDMzMuMTQ3IDIwOC45MzggNDAuNzAxIDE5NS43NSA1My41MTIgMTkyLjI4MUw3My44NDYgMTg2Ljc3M0w0Ny44ODEgMTcxLjYyNUMzMi42IDE2Mi43MTkgMjcuNDUzIDE0My4xMjUgMzYuMzg1IDEyNy44NzVDNDUuMjcgMTEyLjU5NCA2NC44ODMgMTA3LjQzNyA4MC4xOTYgMTE2LjM3NUwxMDUuMjgxIDEzMS4wMTJMOTkuOTAzIDExMC43MTlDOTYuNTEgOTcuOTA2IDEwNC4xNTggODQuNzUgMTE2Ljk4MyA4MS4zNzVDMTI5Ljg4NyA3Ny45MDYgMTQyLjk3OSA4NS42MjUgMTQ2LjM1OCA5OC40MDZMMTY0LjEgMTY1LjMyOEwyMjMuOTY3IDIwMC4yNThWMTI5Ljc1OEwxNzUuNTkgODAuODc1QzE2Ni4yNTIgNzEuNDM4IDE2Ni4zNDYgNTYuMjUgMTc1Ljc3OCA0Ni45MzhDMTg1LjIyNSAzNy41OTQgMjAwLjQyOCAzNy43MTkgMjA5Ljc1IDQ3LjEyNUwyMjMuOTY3IDYxLjQ5NlYzMkMyMjMuOTY3IDE0LjMxMiAyMzguMzExIDAgMjU2IDBTMjg4LjAzMyAxNC4zMTIgMjg4LjAzMyAzMlY2MS40OTZMMzAyLjI1IDQ3LjEyNUMzMTEuNTU3IDM3LjcxOSAzMjYuNzYgMzcuNTk0IDMzNi4yMjMgNDYuOTM3QzM0NS42NTUgNTYuMjUgMzQ1Ljc0OCA3MS40MzcgMzM2LjQxIDgwLjg3NUwyODguMDMzIDEyOS43NThWMjAwLjI1OEwzNDcuOTAxIDE2NS4zMjhMMzY1LjY0MyA5OC40MDZDMzY5LjAzNyA4NS42MjUgMzgyLjIwNyA3Ny45MDYgMzk1LjAxOCA4MS4zNzVDNDA3Ljg0MiA4NC43NSA0MTUuNDkgOTcuOTA2IDQxMi4wOTggMTEwLjcxOUw0MDYuNzE5IDEzMS4wMTJMNDMxLjgwNSAxMTYuMzc1QzQ0Ny4wODYgMTA3LjQ2OSA0NjYuNzE1IDExMi42MjUgNDc1LjYxNSAxMjcuODc1QzQ4NC41NDcgMTQzLjEyNSA0NzkuNDAxIDE2Mi43MTkgNDY0LjExOSAxNzEuNjI1TDQzOC4xNTUgMTg2Ljc3M0w0NTguNDg5IDE5Mi4yODFDNDcxLjI5OSAxOTUuNzUgNDc4Ljg1NCAyMDguOTM3IDQ3NS4zODEgMjIxLjcxOUM0NzIuNDg3IDIzMi40MDYgNDYyLjc4OSAyMzkuNDM3IDQ1Mi4yMTcgMjM5LjQzN0M0NTAuMTM3IDIzOS40MzcgNDQ4LjAyNCAyMzkuMTU2IDQ0NS45MTIgMjM4LjU5NEwzNzkuOTY1IDIyMC43MjVMMzE5LjUwNCAyNTZMMzc5Ljk2NSAyOTEuMjc1TDQ0NS45MTIgMjczLjQwNkM0NTguODE3IDI3MCA0NzEuOTI0IDI3Ny41IDQ3NS4zODEgMjkwLjI4MUM0NzguODU0IDMwMy4wNjMgNDcxLjI5OSAzMTYuMjUgNDU4LjQ4OSAzMTkuNzE5TDQzOC4xNTUgMzI1LjIyN0w0NjQuMTE5IDM0MC4zNzVDNDc5LjQwMSAzNDkuMjgxIDQ4NC41NDcgMzY4Ljg3NSA0NzUuNjE1IDM4NC4xMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Snowflake(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M475.615 384.125C469.672 394.312 458.942 400 447.93 400C442.442 400 436.889 398.594 431.805 395.625L406.719 380.988L412.098 401.281C415.49 414.094 407.842 427.25 395.018 430.625C392.953 431.187 390.889 431.437 388.854 431.437C378.219 431.437 368.49 424.344 365.643 413.594L347.901 346.672L288.033 311.742V382.242L336.41 431.125C345.748 440.562 345.655 455.75 336.223 465.062C331.531 469.688 325.43 472 319.33 472C313.137 472 306.944 469.625 302.25 464.875L288.033 450.504V480C288.033 497.688 273.69 512 256 512S223.967 497.688 223.967 480V450.504L209.75 464.875C200.428 474.313 185.225 474.375 175.778 465.063C166.346 455.75 166.252 440.563 175.59 431.125L223.967 382.242V311.742L164.1 346.672L146.358 413.594C143.51 424.344 133.781 431.438 123.147 431.438C121.112 431.438 119.047 431.188 116.983 430.625C104.158 427.25 96.51 414.094 99.903 401.281L105.281 380.988L80.196 395.625C75.112 398.594 69.559 400 64.071 400C53.059 400 42.328 394.312 36.385 384.125C27.453 368.875 32.6 349.281 47.881 340.375L73.846 325.227L53.512 319.719C40.701 316.25 33.147 303.062 36.619 290.281S53.231 270 66.088 273.406L132.035 291.275L192.496 256L132.035 220.725L66.088 238.594C63.977 239.156 61.864 239.438 59.783 239.438C49.211 239.438 39.514 232.406 36.619 221.719C33.147 208.938 40.701 195.75 53.512 192.281L73.846 186.773L47.881 171.625C32.6 162.719 27.453 143.125 36.385 127.875C45.27 112.594 64.883 107.437 80.196 116.375L105.281 131.012L99.903 110.719C96.51 97.906 104.158 84.75 116.983 81.375C129.887 77.906 142.979 85.625 146.358 98.406L164.1 165.328L223.967 200.258V129.758L175.59 80.875C166.252 71.438 166.346 56.25 175.778 46.938C185.225 37.594 200.428 37.719 209.75 47.125L223.967 61.496V32C223.967 14.312 238.311 0 256 0S288.033 14.312 288.033 32V61.496L302.25 47.125C311.557 37.719 326.76 37.594 336.223 46.937C345.655 56.25 345.748 71.437 336.41 80.875L288.033 129.758V200.258L347.901 165.328L365.643 98.406C369.037 85.625 382.207 77.906 395.018 81.375C407.842 84.75 415.49 97.906 412.098 110.719L406.719 131.012L431.805 116.375C447.086 107.469 466.715 112.625 475.615 127.875C484.547 143.125 479.401 162.719 464.119 171.625L438.155 186.773L458.489 192.281C471.299 195.75 478.854 208.937 475.381 221.719C472.487 232.406 462.789 239.437 452.217 239.437C450.137 239.437 448.024 239.156 445.912 238.594L379.965 220.725L319.504 256L379.965 291.275L445.912 273.406C458.817 270 471.924 277.5 475.381 290.281C478.854 303.063 471.299 316.25 458.489 319.719L438.155 325.227L464.119 340.375C479.401 349.281 484.547 368.875 475.615 384.125Z" />
        </Icon>
    </>
}