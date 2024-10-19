
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `poo-bolt` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/poo-bolt?s=solid poo-bolt}
 * @preview ![poo-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDQuMDA0IDM2OC4wMDZIMjQ4LjI3N0wyODYuNzIzIDI3OC4zMDlDMjg5LjY2IDI3MS40NDkgMjg3LjQ0MSAyNjMuNDY1IDI4MS40MSAyNTkuMDc0QzI3NS4zMTQgMjU0LjY1MiAyNjcuMDY0IDI1NS4wNDMgMjYxLjQ3MSAyNTkuOTY1TDEzMy40NjUgMzcxLjk1OUMxMjguNDMyIDM3Ni4zNSAxMjYuNjgyIDM4My4zOTYgMTI5LjAyNSAzODkuNjMxQzEzMS4zNzEgMzk1Ljg4MSAxMzcuMzQgNDAwLjAwNiAxNDMuOTk2IDQwMC4wMDZIMTk5LjcyM0wxNjEuMjc3IDQ4OS43MDNDMTU4LjM0IDQ5Ni41NjMgMTYwLjU1OSA1MDQuNTQ3IDE2Ni41OSA1MDguOTM4QzE2OS40MDQgNTEwLjk4NCAxNzIuNzE3IDUxMiAxNzUuOTk4IDUxMkMxNzkuNzc5IDUxMiAxODMuNTI5IDUxMC42NzIgMTg2LjUyOSA1MDguMDQ3TDMxNC41MzUgMzk2LjA1M0MzMTkuNTY4IDM5MS42NjIgMzIxLjMxOCAzODQuNjE1IDMxOC45NzUgMzc4LjM4MUMzMTYuNjI5IDM3Mi4xMzEgMzEwLjY2IDM2OC4wMDYgMzA0LjAwNCAzNjguMDA2Wk0zNzMuMjgxIDIyNi41NTFDMzc5Ljg4MyAyMTYuNTgyIDM4NCAyMDQuODgxIDM4NCAxOTJDMzg0IDE1Ni42MjUgMzU1LjM3NSAxMjggMzIwIDEyOEgzMTQuMTI1QzMxNy43NSAxMTggMzIwIDEwNy4yNSAzMjAgOTZDMzIwIDQzIDI3NyAwIDIyNCAwQzIxOC44NzUgMCAyMTMuODc1IDAuNzUgMjA4Ljg3NSAxLjVDMjE4LjI1IDE0LjYyNSAyMjQgMzAuNjI1IDIyNCA0OEMyMjQgOTIuMTI1IDE4OC4xMjUgMTI4IDE0NCAxMjhIMTI4QzkyLjYyNSAxMjggNjQgMTU2LjYyNSA2NCAxOTJDNjQgMjA0Ljg4MSA2OC4xMTcgMjE2LjU4MiA3NC43MTkgMjI2LjU1MUMzMS45NzkgMjM2LjI1OCAwIDI3NC4zMiAwIDMyMEMwIDM3My4wMiA0Mi45OCA0MTYgOTYgNDE2SDEwOC43ODVDMTA0Ljc1MiA0MTEuNTg2IDEwMS4yNDIgNDA2LjY4MiA5OS4wNzQgNDAwLjg5OEM5Mi4wNjQgMzgyLjI1NiA5Ny40MyAzNjAuOTM5IDExMi4zOTMgMzQ3Ljg4M0wyNDAuMzI2IDIzNS45NDFDMjQ5LjA4IDIyOC4yNCAyNjAuMzE4IDIyMy45OTggMjcxLjk3MyAyMjRDMjgyLjE2NiAyMjQgMjkxLjkyNiAyMjcuMTc0IDMwMC4yMzQgMjMzLjIwM0MzMTguNDYxIDI0Ni40NzMgMzI0Ljk5OCAyNzAuMjAxIDMxNi4xMjcgMjkwLjkxNEwyOTYuODAxIDMzNi4wMTJIMzAzLjk5NkMzMjMuODg3IDMzNi4wMTIgMzQxLjk0MyAzNDguNTI1IDM0OC45MTggMzY3LjEyNUMzNTUuMjc1IDM4NC4wMzkgMzUxLjAxNiA0MDIuODQ4IDMzOS4wNzggNDE2SDM1MkM0MDUuMDIgNDE2IDQ0OCAzNzMuMDIgNDQ4IDMyMEM0NDggMjc0LjMyIDQxNi4wMjEgMjM2LjI1OCAzNzMuMjgxIDIyNi41NTFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PooBolt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M304.004 368.006H248.277L286.723 278.309C289.66 271.449 287.441 263.465 281.41 259.074C275.314 254.652 267.064 255.043 261.471 259.965L133.465 371.959C128.432 376.35 126.682 383.396 129.025 389.631C131.371 395.881 137.34 400.006 143.996 400.006H199.723L161.277 489.703C158.34 496.563 160.559 504.547 166.59 508.938C169.404 510.984 172.717 512 175.998 512C179.779 512 183.529 510.672 186.529 508.047L314.535 396.053C319.568 391.662 321.318 384.615 318.975 378.381C316.629 372.131 310.66 368.006 304.004 368.006ZM373.281 226.551C379.883 216.582 384 204.881 384 192C384 156.625 355.375 128 320 128H314.125C317.75 118 320 107.25 320 96C320 43 277 0 224 0C218.875 0 213.875 0.75 208.875 1.5C218.25 14.625 224 30.625 224 48C224 92.125 188.125 128 144 128H128C92.625 128 64 156.625 64 192C64 204.881 68.117 216.582 74.719 226.551C31.979 236.258 0 274.32 0 320C0 373.02 42.98 416 96 416H108.785C104.752 411.586 101.242 406.682 99.074 400.898C92.064 382.256 97.43 360.939 112.393 347.883L240.326 235.941C249.08 228.24 260.318 223.998 271.973 224C282.166 224 291.926 227.174 300.234 233.203C318.461 246.473 324.998 270.201 316.127 290.914L296.801 336.012H303.996C323.887 336.012 341.943 348.525 348.918 367.125C355.275 384.039 351.016 402.848 339.078 416H352C405.02 416 448 373.02 448 320C448 274.32 416.021 236.258 373.281 226.551Z" />
        </Icon>
    </>
}