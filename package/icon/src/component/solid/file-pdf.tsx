
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `file-pdf` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-pdf?s=solid file-pdf}
 * @preview ![file-pdf](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODQgMjA4QzE4NCAyMDMuNTk0IDE4MC40MDYgMjAwIDE3NiAyMDBTMTY4IDIwMy41OTQgMTY4IDIwOEMxNjggMjEwLjA2MiAxNjguMjk3IDIzMS4zMTIgMTc3LjE0MSAyNTguMjVDMTc5LjA5NCAyNDkuNTk0IDE4NCAyMjYuMTU2IDE4NCAyMDhaTTI1NiAwVjEyOEgzODRMMjU2IDBaTTgwIDQyMi4zNzVDODAgNDMyLjAzMSA5MC40NTMgNDM0LjMxMyA5NC4zNTkgNDI4LjcxOUM5OS4yNSA0MjEuODc1IDEwOC43NSA0MDggMTIwLjA3OCAzODguNjI1QzEwNS44NTkgMzk2LjU5NCA5Mi44MjggNDA1LjkzOCA4Mi4wNjIgNDE2LjkzOEM4MC43NSA0MTguMjgxIDgwIDQyMC4yODEgODAgNDIyLjM3NVpNMjI0IDEyOFYwSDQ4QzIxLjQ5IDAgMCAyMS40OTIgMCA0OFY0NjRDMCA0OTAuNTA4IDIxLjQ5IDUxMiA0OCA1MTJIMzM2QzM2Mi41MSA1MTIgMzg0IDQ5MC41MDggMzg0IDQ2NFYxNjBIMjU2QzIzOC4zMjYgMTYwIDIyNCAxNDUuNjcyIDIyNCAxMjhaTTI5MiAzMTJDMzE2LjI2MiAzMTIgMzM2IDMzMS43MzggMzM2IDM1NkMzMzYgMzgwLjY3MiAzMTcuMDU5IDQwMCAyOTIuODc1IDQwMEMyODYuODgxIDQwMCAyODEuMDYxIDM5OS4wNDcgMjc1LjY1OCAzOTcuMTk1QzI1NS42MDIgMzkwLjQzOCAyMzcuMjgzIDM4MS4yMzQgMjIxLjEwNCAzNjkuODAxQzE5Ny4yMjkgMzc0LjkxIDE3NS42NDggMzgxLjMyIDE1Ni43OTMgMzg4LjkwMkMxNDIuMzYxIDQxNS4yMTUgMTI5LjE2MiA0MzUuMDUxIDEyMC40MjIgNDQ3LjMxNkMxMTIuOTc5IDQ1Ny43NjIgMTAwLjgzNCA0NjQgODcuOTM4IDQ2NEM2NS45MTYgNDY0IDQ4IDQ0Ni4wODYgNDggNDI0LjA2MkM0OCA0MTIuMTQ1IDUxLjc0IDQwMi4yMzggNTkuMTggMzk0LjU1NUM3NS4zNjMgMzc4LjAzNSA5Ni41NDUgMzYzLjU2NiAxMjIuMTk5IDM1MS41QzEzMy45NTMgMzI4LjY2OCAxNDQuMTM1IDMwNS40NjEgMTUyLjUzMSAyODIuMzU1QzEzNi4xOTcgMjQyLjM5MSAxMzYgMjA4LjM1NSAxMzYgMjA4QzEzNiAxODUuOTQ1IDE1My45NDUgMTY4IDE3NiAxNjhDMTk4LjA1NyAxNjggMjE2IDE4NS45NDUgMjE2IDIwOEMyMTYgMjMyLjk5NiAyMDguNzczIDI2My43NTQgMjA3LjA2MiAyNzAuNjMzQzIwNi4wNTcgMjczLjkwNiAyMDUuMDI3IDI3Ny4xNDggMjAzLjk4IDI4MC4zNTVDMjExLjgxMSAyOTQuODE2IDIyMS42NzggMzA3LjU3IDIzMy40MjQgMzE4LjQwNkMyNjMuMDk0IDMxMy4zNTkgMjg0LjMyMiAzMTIuMTQ4IDI4Ny41NzggMzEySDI5MlpNMTU2LjUzMSAzNTQuNTk0QzE3NC41MTYgMzQ4LjA5NCAxOTIuNjU2IDM0My4xNTYgMjA5LjQ1MyAzMzkuNDA2QzE5Ny4wMzEgMzI3LjM0NCAxODcuMjgxIDMxNC4yODEgMTc5LjY1NiAzMDEuMjVDMTcyLjMxMiAzMjAuNjI1IDE2NC40MjIgMzM4LjUgMTU2LjUzMSAzNTQuNTk0Wk0yOTIuODc1IDM2OEMyOTkuMDE2IDM2OCAzMDQgMzYzIDMwNCAzNTYuODc1QzMwNCAzNDkuMzc1IDI5OC42MDkgMzQ0IDI5MiAzNDRIMjg4QzI4Ny42NTYgMzQ0LjAzMSAyNzEuMTcyIDM0NC45NjkgMjQ3LjA0NyAzNDguNzVDMjU4LjMxMiAzNTUuNzUgMjcxLjE3MiAzNjEuOTM4IDI4NS44OTEgMzY2Ljg3NUMyODguMDMxIDM2Ny42MjUgMjkwLjQ1MyAzNjggMjkyLjg3NSAzNjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FilePdf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M184 208C184 203.594 180.406 200 176 200S168 203.594 168 208C168 210.062 168.297 231.312 177.141 258.25C179.094 249.594 184 226.156 184 208ZM256 0V128H384L256 0ZM80 422.375C80 432.031 90.453 434.313 94.359 428.719C99.25 421.875 108.75 408 120.078 388.625C105.859 396.594 92.828 405.938 82.062 416.938C80.75 418.281 80 420.281 80 422.375ZM224 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V160H256C238.326 160 224 145.672 224 128ZM292 312C316.262 312 336 331.738 336 356C336 380.672 317.059 400 292.875 400C286.881 400 281.061 399.047 275.658 397.195C255.602 390.438 237.283 381.234 221.104 369.801C197.229 374.91 175.648 381.32 156.793 388.902C142.361 415.215 129.162 435.051 120.422 447.316C112.979 457.762 100.834 464 87.938 464C65.916 464 48 446.086 48 424.062C48 412.145 51.74 402.238 59.18 394.555C75.363 378.035 96.545 363.566 122.199 351.5C133.953 328.668 144.135 305.461 152.531 282.355C136.197 242.391 136 208.355 136 208C136 185.945 153.945 168 176 168C198.057 168 216 185.945 216 208C216 232.996 208.773 263.754 207.062 270.633C206.057 273.906 205.027 277.148 203.98 280.355C211.811 294.816 221.678 307.57 233.424 318.406C263.094 313.359 284.322 312.148 287.578 312H292ZM156.531 354.594C174.516 348.094 192.656 343.156 209.453 339.406C197.031 327.344 187.281 314.281 179.656 301.25C172.312 320.625 164.422 338.5 156.531 354.594ZM292.875 368C299.016 368 304 363 304 356.875C304 349.375 298.609 344 292 344H288C287.656 344.031 271.172 344.969 247.047 348.75C258.312 355.75 271.172 361.938 285.891 366.875C288.031 367.625 290.453 368 292.875 368Z" />
        </Icon>
    </>
}