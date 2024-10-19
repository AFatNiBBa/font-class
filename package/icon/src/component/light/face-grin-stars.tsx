
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `face-grin-stars` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-stars?s=light face-grin-stars}
 * @preview ![face-grin-stars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgOEMxMTkuMDQzIDggOCAxMTkgOCAyNTZTMTE5LjA0MyA1MDQgMjU2IDUwNFM1MDQgMzkzIDUwNCAyNTZTMzkyLjk1NyA4IDI1NiA4Wk0yNTYgNDcyQzEzNi44NDQgNDcyIDM5Ljk2OSAzNzUuMTI1IDM5Ljk2OSAyNTZTMTM2Ljg0NCA0MCAyNTYgNDBTNDcyLjAzMSAxMzYuODc1IDQ3Mi4wMzEgMjU2UzM3NS4xNTYgNDcyIDI1NiA0NzJaTTM3OS4xNTIgMzIwLjc1QzM0OC44NzkgMzMwLjUgMzAzLjk1MyAzMzYgMjU2IDMzNlMxNjMuMTIxIDMzMC41IDEzMi44NDggMzIwLjc1QzEyMS4zNDQgMzE3LjEyNSAxMTAuMzI0IDMyNy4xMjUgMTEyLjE0MSAzMzguNzVDMTIxLjM0NCAzOTMuNzUgMTk1LjQ1MyA0MzIgMjU2IDQzMlMzOTAuNTM1IDM5My43NSAzOTkuODU5IDMzOC43NUM0MDEuNjc2IDMyNy4xMjUgMzkwLjc3NyAzMTcuMTI1IDM3OS4xNTIgMzIwLjc1Wk0yNTYgNDAwQzIyMS4wMDQgNDAwIDE3OC45ODQgMzgzLjc1IDE1Ny41NTEgMzU5Ljc1QzIxNC45NDkgMzcwLjUgMjk3LjA1MSAzNzAuNSAzNTQuNTcgMzU5Ljc1QzMzMy4wMTYgMzgzLjc1IDI5MC45OTYgNDAwIDI1NiA0MDBaTTQxOC4xNDUgMTQ4TDM4Mi43ODUgMTQyLjg3NUwzNjcuMDQzIDExMC43NUMzNTcuNDc3IDkyIDMzMC43MTUgOTEuODc1IDMyMS4xNDggMTEwLjc1TDMwNS4yODUgMTQyLjg3NUwyNjkuODA1IDE0OEMyNjQuMzU1IDE0OC43NSAyNTkuNzU0IDE1MS42MjUgMjU2IDE1NS4zNzVDMjUyLjI0NiAxNTEuNjI1IDI0Ny42NDUgMTQ4Ljc1IDI0Mi4wNzQgMTQ4TDIwNi44MzYgMTQyLjg3NUwxOTAuOTczIDExMC43NUMxODEuNTI3IDkyIDE1NC42NDUgOTEuODc1IDE0NS4wNzggMTEwLjc1TDEyOS4zMzYgMTQyLjg3NUw5My44NTUgMTQ4QzczLjYzMyAxNTEgNjQuMTg3IDE3Ni4yNSA3OS42ODcgMTkxLjc1TDEwNS4zNTkgMjE2LjYyNUw5OS4zMDUgMjUyLjI1Qzk1LjkxNCAyNzMuNjI1IDExOC41NTkgMjg4LjUgMTM2LjIzOCAyNzguNzVMMTY3Ljk2NSAyNjIuMjVMMTk5LjQ0OSAyNzguNUMyMTcuOTc3IDI4OC43NSAyNDAuMTM3IDI3My4yNSAyMzYuNzQ2IDI1MS44NzVMMjMwLjU3IDIxNi41TDI1NiAxOTJMMjgxLjQzIDIxNi42MjVMMjc1LjI1NCAyNTIuMjVDMjcxLjg2MyAyNzMuNjI1IDI5NC41MDggMjg4LjUgMzEyLjE4NyAyNzguNzVMMzQ0LjAzNSAyNjIuMjVMMzc1LjUyIDI3OC41QzM5NC4wNDcgMjg4Ljc1IDQxNi4wODYgMjczLjI1IDQxMi42OTUgMjUxLjg3NUw0MDYuNjQxIDIxNi41TDQzMi41NTUgMTkxLjM3NUM0NDcuNDQ5IDE3Ni41IDQzOC44NTIgMTUxLjEyNSA0MTguMTQ1IDE0OFpNMTk2LjE4IDIwNS41TDIwMi44NCAyNDQuMzc1TDE2Ny45NjUgMjI2LjI1TDEzMy4wOSAyNDQuMjVMMTM5Ljc1IDIwNS4zNzVMMTExLjI5MyAxNzcuNzVMMTUwLjUyNyAxNzIuMTI1TDE2Ny45NjUgMTM2LjYyNUwxODUuNTIzIDE3Mi4xMjVMMjI0Ljc1OCAxNzcuNzVMMTk2LjE4IDIwNS41Wk0zNzIuMjUgMjA1LjVMMzc4LjkxIDI0NC4zNzVMMzQ0LjAzNSAyMjYuMjVMMzA5LjE2IDI0NC4yNUwzMTUuODIgMjA1LjM3NUwyODcuMjQyIDE3Ny43NUwzMjYuNDc3IDE3Mi4xMjVMMzQ0LjAzNSAxMzYuNjI1TDM2MS40NzMgMTcyLjEyNUw0MDAuNzA3IDE3Ny43NUwzNzIuMjUgMjA1LjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FaceGrinStars(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 8C119.043 8 8 119 8 256S119.043 504 256 504S504 393 504 256S392.957 8 256 8ZM256 472C136.844 472 39.969 375.125 39.969 256S136.844 40 256 40S472.031 136.875 472.031 256S375.156 472 256 472ZM379.152 320.75C348.879 330.5 303.953 336 256 336S163.121 330.5 132.848 320.75C121.344 317.125 110.324 327.125 112.141 338.75C121.344 393.75 195.453 432 256 432S390.535 393.75 399.859 338.75C401.676 327.125 390.777 317.125 379.152 320.75ZM256 400C221.004 400 178.984 383.75 157.551 359.75C214.949 370.5 297.051 370.5 354.57 359.75C333.016 383.75 290.996 400 256 400ZM418.145 148L382.785 142.875L367.043 110.75C357.477 92 330.715 91.875 321.148 110.75L305.285 142.875L269.805 148C264.355 148.75 259.754 151.625 256 155.375C252.246 151.625 247.645 148.75 242.074 148L206.836 142.875L190.973 110.75C181.527 92 154.645 91.875 145.078 110.75L129.336 142.875L93.855 148C73.633 151 64.187 176.25 79.687 191.75L105.359 216.625L99.305 252.25C95.914 273.625 118.559 288.5 136.238 278.75L167.965 262.25L199.449 278.5C217.977 288.75 240.137 273.25 236.746 251.875L230.57 216.5L256 192L281.43 216.625L275.254 252.25C271.863 273.625 294.508 288.5 312.187 278.75L344.035 262.25L375.52 278.5C394.047 288.75 416.086 273.25 412.695 251.875L406.641 216.5L432.555 191.375C447.449 176.5 438.852 151.125 418.145 148ZM196.18 205.5L202.84 244.375L167.965 226.25L133.09 244.25L139.75 205.375L111.293 177.75L150.527 172.125L167.965 136.625L185.523 172.125L224.758 177.75L196.18 205.5ZM372.25 205.5L378.91 244.375L344.035 226.25L309.16 244.25L315.82 205.375L287.242 177.75L326.477 172.125L344.035 136.625L361.473 172.125L400.707 177.75L372.25 205.5Z" />
        </Icon>
    </>
}