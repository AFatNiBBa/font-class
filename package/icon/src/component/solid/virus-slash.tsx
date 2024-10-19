
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `virus-slash` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/virus-slash?s=solid virus-slash}
 * @preview ![virus-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTMuOTkxIDIyNy41NTFIOTIuNDQ0Qzc2LjcyMiAyMjcuNTUxIDYzLjk5OSAyNDAuMjc0IDYzLjk5OSAyNTUuOTk2Uzc2LjcyMiAyODQuNDM5IDkyLjQ0NCAyODQuNDM5SDExMy45OTFDMTY0LjY3MiAyODQuNDM5IDE5MC4wNTUgMzQ1LjcxNSAxNTQuMjE3IDM4MS41NTNMMTM4Ljk3MSAzOTYuNzk5QzEyNy44NiA0MDcuOTEgMTI3Ljg2IDQyNS45MSAxMzguOTcxIDQzNy4wMjFDMTQ0LjUyNiA0NDIuNTc1IDE1MS44MDMgNDQ1LjM1NSAxNTkuMDgzIDQ0NS4zNTVDMTY2LjM2IDQ0NS4zNTUgMTczLjYzNyA0NDIuNTc1IDE3OS4xOTQgNDM3LjAyMUwxOTQuNDM4IDQyMS43NzVDMjMwLjI3NiAzODUuOTM3IDI5MS41NTMgNDExLjMyIDI5MS41NTMgNDYyLjAwMVY0ODMuNTQ3QzI5MS41NTMgNDk5LjI3IDMwNC4yNzUgNTExLjk5MiAzMTkuOTk4IDUxMS45OTJTMzQ4LjQ0MyA0OTkuMjcgMzQ4LjQ0MyA0ODMuNTQ3VjQ2Mi4wMDFDMzQ4LjQ0MyA0MzEuOTE3IDM3MC4xMzcgNDExLjE1IDM5NS4xODMgNDA2LjQwOEwxNTAuMDI0IDIxNC4yNThDMTQwLjUxNiAyMjIuMjI1IDEyOC40NTYgMjI3LjU1MSAxMTMuOTkxIDIyNy41NTFaTTYzMC44MTEgNDY5LjEwMkw0NjkuNTk1IDM0Mi43NDVDNDY5LjA3OCAzMTMuMTQ4IDQ5MS4zMjcgMjg0LjQzOSA1MjYuMDA1IDI4NC40MzlINTQ3LjU1MkM1NjMuMjc0IDI4NC40MzkgNTc1Ljk5NyAyNzEuNzE5IDU3NS45OTcgMjU1Ljk5NlM1NjMuMjc0IDIyNy41NTEgNTQ3LjU1MiAyMjcuNTUxSDUyNi4wMDVDNDc1LjMyNCAyMjcuNTUxIDQ0OS45NDEgMTY2LjI3NSA0ODUuNzc5IDEzMC40MzdMNTAxLjAyNSAxMTUuMTkyQzUxMi4xMzYgMTA0LjA4IDUxMi4xMzYgODYuMDgxIDUwMS4wMjUgNzQuOTcyQzQ4OS45MTMgNjMuODYgNDcxLjkxMyA2My44NiA0NjAuODAyIDc0Ljk3Mkw0NDUuNTU4IDkwLjIxNUM0MDkuNzIgMTI2LjA1MyAzNDguNDQzIDEwMC42NzIgMzQ4LjQ0MyA0OS45ODlWMjguNDQzQzM0OC40NDMgMTIuNzIyIDMzNS43MjEgMCAzMTkuOTk4IDBTMjkxLjU1MyAxMi43MjIgMjkxLjU1MyAyOC40NDNWNDkuOTg5QzI5MS41NTMgMTAwLjY3MiAyMzAuMjc2IDEyNi4wNTMgMTk0LjQzOCA5MC4yMTVMMTc5LjE5NCA3NC45NzJDMTY4LjA4MyA2My44NiAxNTAuMDgzIDYzLjg2IDEzOC45NzEgNzQuOTcyQzEzNy4zMDkgNzYuNjM0IDEzNi4xMiA3OC41NTIgMTM0Ljk2NiA4MC40NzFMMzguODE0IDUuMTA5QzM0LjQwNyAxLjY3MiAyOS4xODkgMCAyNC4wMzIgMEMxNi45MDcgMCA5Ljg0NSAzLjE1NiA1LjEyNiA5LjE4N0MtMy4wNjEgMTkuNjI1IC0xLjI0OSAzNC43MTggOS4xODkgNDIuODlMNjAxLjE4NiA1MDYuODgzQzYxMS42ODYgNTE1LjA4NiA2MjYuNzQ5IDUxMy4yMTEgNjM0Ljg3NCA1MDIuODA1QzY0My4wNjEgNDkyLjM2NyA2NDEuMjQ5IDQ3Ny4yNzQgNjMwLjgxMSA0NjkuMTAyWk0zMzQuMTE3IDIzNi41NjFMMjY0LjY0MSAxODIuMTA3QzI3MS41NDUgMTc4LjIyMiAyNzkuNTAyIDE3NS45OTcgMjg3Ljk5OCAxNzUuOTk3QzMxNC41MDggMTc1Ljk5NyAzMzUuOTk4IDE5Ny40ODcgMzM1Ljk5OCAyMjMuOTk3QzMzNS45OTggMjI4LjM3NSAzMzUuMjE5IDIzMi41MzQgMzM0LjExNyAyMzYuNTYxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function VirusSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M113.991 227.551H92.444C76.722 227.551 63.999 240.274 63.999 255.996S76.722 284.439 92.444 284.439H113.991C164.672 284.439 190.055 345.715 154.217 381.553L138.971 396.799C127.86 407.91 127.86 425.91 138.971 437.021C144.526 442.575 151.803 445.355 159.083 445.355C166.36 445.355 173.637 442.575 179.194 437.021L194.438 421.775C230.276 385.937 291.553 411.32 291.553 462.001V483.547C291.553 499.27 304.275 511.992 319.998 511.992S348.443 499.27 348.443 483.547V462.001C348.443 431.917 370.137 411.15 395.183 406.408L150.024 214.258C140.516 222.225 128.456 227.551 113.991 227.551ZM630.811 469.102L469.595 342.745C469.078 313.148 491.327 284.439 526.005 284.439H547.552C563.274 284.439 575.997 271.719 575.997 255.996S563.274 227.551 547.552 227.551H526.005C475.324 227.551 449.941 166.275 485.779 130.437L501.025 115.192C512.136 104.08 512.136 86.081 501.025 74.972C489.913 63.86 471.913 63.86 460.802 74.972L445.558 90.215C409.72 126.053 348.443 100.672 348.443 49.989V28.443C348.443 12.722 335.721 0 319.998 0S291.553 12.722 291.553 28.443V49.989C291.553 100.672 230.276 126.053 194.438 90.215L179.194 74.972C168.083 63.86 150.083 63.86 138.971 74.972C137.309 76.634 136.12 78.552 134.966 80.471L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102ZM334.117 236.561L264.641 182.107C271.545 178.222 279.502 175.997 287.998 175.997C314.508 175.997 335.998 197.487 335.998 223.997C335.998 228.375 335.219 232.534 334.117 236.561Z" />
        </Icon>
    </>
}