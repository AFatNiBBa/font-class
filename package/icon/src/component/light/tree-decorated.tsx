
import { Icon } from "../../index";

/**
 * A component that renders the `tree-decorated` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tree-decorated?s=light tree-decorated}
 * @preview ![tree-decorated](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjguNjY4IDQyOS41OTRMNDA2LjEzNyAzNTEuOTY5QzQyMi43OTMgMzUxLjI4MSA0MzcuMjE1IDM0MS43ODEgNDQ0LjA5IDMyNi44MTNDNDUwLjk5NiAzMTEuNzgxIDQ0OC41NTkgMjk0LjU2MyA0MzcuNjUyIDI4MS44NzVMMzczLjYzNyAyMDhIMzc3LjM3MUMzOTMuMTIxIDIwOCA0MDYuNzMxIDE5OS40MDYgNDEyLjkwMiAxODUuNTk0QzQxOC42OTkgMTcyLjU5NCA0MTYuMzI0IDE1Ny44NzUgNDA2LjY1MiAxNDcuMTI1TDI4NS4yNjIgMTIuOTM4QzI3Ny45NDkgNC43MTkgMjY3LjI5MyAwIDI1Ni4wMTIgMEgyNTUuOTk2QzI0NC43MTUgMCAyMzQuMDQzIDQuNjg4IDIyNi43OTMgMTIuODQ0TDEwNS40NDkgMTQ3LjA5NEM5NS43NzcgMTU3Ljc4MSA5My4zNCAxNzIuNDY5IDk5LjEwNiAxODUuNDY5QzEwNS4xNjggMTk5LjE1NiAxMTkuMTUyIDIwOCAxMzQuNzQ2IDIwOEgxMzguMzg3TDc0LjIzMSAyODEuOTA2QzYzLjM3MSAyOTQuNTYyIDYwLjkzNCAzMTEuNzgxIDY3Ljg0IDMyNi44MTJDNzQuNzMxIDM0MS44MTIgODkuMTY4IDM1MS4zMTIgMTA1LjgyNCAzNTEuOTY5TDQzLjMyNCA0MjkuNTk0QzMwLjg4NyA0NDUgMjguNDgxIDQ2Ni43MTkgMzcuMTY4IDQ4NC44NzVDNDUuMTg0IDUwMS41OTQgNjEuMTIxIDUxMiA3OC43NjIgNTEySDQzMy4xMDZDNDUwLjc3NyA1MTIgNDY2Ljc0NiA1MDEuNTk0IDQ3NC43NjIgNDg0Ljg0NEM0ODMuNDQ5IDQ2Ni42NTYgNDgxLjA1OSA0NDQuOTY5IDQ2OC42NjggNDI5LjU5NFpNNDQ1Ljg4NyA0NzEuMDMxQzQ0NC42MDYgNDczLjcxOSA0NDAuNzc3IDQ4MCA0MzMuMTA2IDQ4MEg3OC43NjJDNzEuMTM3IDQ4MCA2Ny4zMjQgNDczLjc1IDY2LjA0MyA0NzEuMDYyQzYzLjQ0OSA0NjUuNjU2IDYyLjQ4MSA0NTYuODEyIDY4LjI0NiA0NDkuNjU2TDE3Mi42NTIgMzIwSDEwNy42ODRDMTAwLjQ4MSAzMjAgOTcuNjIxIDMxNSA5Ni45MTggMzEzLjQ2OUM5NS45MzQgMzExLjMxMiA5NC44MjQgMzA3LjA2MiA5OC40NDkgMzAyLjg0NEwyMDguNTQzIDE3NkgxMzQuNzQ2QzEzMC4yNjIgMTc2IDEyOC43MzEgMTczLjM0NCAxMjguMzU2IDE3Mi41QzEyNy43MzEgMTcxLjA5NCAxMjcuOTY1IDE2OS45MDYgMTI5LjE4NCAxNjguNTYyTDI1MC42MDYgMzQuMjE5QzI1MS44NzEgMzIuODEyIDI1My44MjQgMzIgMjU1Ljk5NiAzMkMyNTguMTUyIDMyIDI2MC4xMDYgMzIuODEyIDI2MS40NDkgMzQuMjgxTDM4Mi44ODcgMTY4LjUzMUMzODMuNjk5IDE2OS40MzggMzg0LjUxMiAxNzAuNjg4IDM4My42ODQgMTcyLjU2M0MzODMuMzI0IDE3My4zNDQgMzgxLjc5MyAxNzYgMzc3LjM3MSAxNzZIMzAzLjU0M0w0MTMuNDE4IDMwMi43ODFDNDE3LjEwNiAzMDcuMDYzIDQxNS45OTYgMzExLjMxMyA0MTUuMDEyIDMxMy40NjlDNDE0LjMwOSAzMTUgNDExLjQ0OSAzMjAgNDA0LjI0NiAzMjBIMzM5LjMyNEw0NDMuNzMxIDQ0OS42NTZINDQzLjc0NkM0NDkuNDY1IDQ1Ni43ODEgNDQ4LjQ4MSA0NjUuNjI1IDQ0NS44ODcgNDcxLjAzMVpNMzIwIDM5MkMzMDYuNzQ2IDM5MiAyOTYgNDAyLjc0NCAyOTYgNDE2QzI5NiA0MjkuMjU0IDMwNi43NDYgNDQwIDMyMCA0NDBTMzQ0IDQyOS4yNTQgMzQ0IDQxNkMzNDQgNDAyLjc0NCAzMzMuMjU0IDM5MiAzMjAgMzkyWk0yMjQgMjMyQzIxMC43NDYgMjMyIDIwMCAyNDIuNzQ0IDIwMCAyNTZDMjAwIDI2OS4yNTQgMjEwLjc0NiAyODAgMjI0IDI4MFMyNDggMjY5LjI1NCAyNDggMjU2QzI0OCAyNDIuNzQ0IDIzNy4yNTQgMjMyIDIyNCAyMzJaTTMxMiAxMjhDMzEyIDExNC43NDQgMzAxLjI1NCAxMDQgMjg4IDEwNFMyNjQgMTE0Ljc0NCAyNjQgMTI4QzI2NCAxNDEuMjU0IDI3NC43NDYgMTUyIDI4OCAxNTJTMzEyIDE0MS4yNTQgMzEyIDEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
const TreeDecorated: typeof Icon = x => (
    <Icon {...x}>
        <path d="M468.668 429.594L406.137 351.969C422.793 351.281 437.215 341.781 444.09 326.813C450.996 311.781 448.559 294.563 437.652 281.875L373.637 208H377.371C393.121 208 406.731 199.406 412.902 185.594C418.699 172.594 416.324 157.875 406.652 147.125L285.262 12.938C277.949 4.719 267.293 0 256.012 0H255.996C244.715 0 234.043 4.688 226.793 12.844L105.449 147.094C95.777 157.781 93.34 172.469 99.106 185.469C105.168 199.156 119.152 208 134.746 208H138.387L74.231 281.906C63.371 294.562 60.934 311.781 67.84 326.812C74.731 341.812 89.168 351.312 105.824 351.969L43.324 429.594C30.887 445 28.481 466.719 37.168 484.875C45.184 501.594 61.121 512 78.762 512H433.106C450.777 512 466.746 501.594 474.762 484.844C483.449 466.656 481.059 444.969 468.668 429.594ZM445.887 471.031C444.606 473.719 440.777 480 433.106 480H78.762C71.137 480 67.324 473.75 66.043 471.062C63.449 465.656 62.481 456.812 68.246 449.656L172.652 320H107.684C100.481 320 97.621 315 96.918 313.469C95.934 311.312 94.824 307.062 98.449 302.844L208.543 176H134.746C130.262 176 128.731 173.344 128.356 172.5C127.731 171.094 127.965 169.906 129.184 168.562L250.606 34.219C251.871 32.812 253.824 32 255.996 32C258.152 32 260.106 32.812 261.449 34.281L382.887 168.531C383.699 169.438 384.512 170.688 383.684 172.563C383.324 173.344 381.793 176 377.371 176H303.543L413.418 302.781C417.106 307.063 415.996 311.313 415.012 313.469C414.309 315 411.449 320 404.246 320H339.324L443.731 449.656H443.746C449.465 456.781 448.481 465.625 445.887 471.031ZM320 392C306.746 392 296 402.744 296 416C296 429.254 306.746 440 320 440S344 429.254 344 416C344 402.744 333.254 392 320 392ZM224 232C210.746 232 200 242.744 200 256C200 269.254 210.746 280 224 280S248 269.254 248 256C248 242.744 237.254 232 224 232ZM312 128C312 114.744 301.254 104 288 104S264 114.744 264 128C264 141.254 274.746 152 288 152S312 141.254 312 128Z" />
    </Icon>
);

export default TreeDecorated;