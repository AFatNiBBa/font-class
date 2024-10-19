
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hand-holding-skull` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-skull?s=thin hand-holding-skull}
 * @preview ![hand-holding-skull](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjYuNjIxIDMyMy41NjJDNTU4Ljk4IDMxMy4xODcgNTQ3Ljc3NyAzMDYuNDM4IDUzNS4wNzYgMzA0LjUzMUM1MjIuMzExIDMwMi41MzEgNTA5Ljc2NCAzMDUuNzgxIDQ5OS40OTggMzEzLjQwNkwzODEuOTU1IDQwMEgyNjMuOTc3QzI1OS42MzMgNDAwIDI1NS45NzcgMzk2LjM0NCAyNTUuOTc3IDM5Mi4wMzFDMjU1Ljk3NyAzODcuNjg4IDI1OS42MzMgMzg0LjAzMSAyNjMuOTc3IDM4NC4wMzFIMzQyLjIwN0MzNjIuNTY2IDM4NC4wMzEgMzgwLjI5OSAzNjkuNzE5IDM4My40NzEgMzUwLjY4OEMzODUuMzc3IDMzOC45NjkgMzgyLjExMSAzMjcuMDk0IDM3NC40ODggMzE4LjE1NkMzNjYuODYzIDMwOS4xODggMzU1LjcyMyAzMDQuMDMxIDM0My45NTcgMzA0LjAzMUgxODMuOTc5QzE1NS4yNiAzMDQuMDMxIDEyNy4xNTIgMzE0IDEwNC44MjQgMzMyLjA2M0w2MC41MjkgMzY4LjAzMUg4QzMuNTc4IDM2OC4wMzEgMCAzNzEuNjI1IDAgMzc2LjAzMVMzLjU3OCAzODQuMDMxIDggMzg0LjAzMUg2Ni4yMTdMMTE0LjkwMiAzNDQuNUMxMzQuMzg3IDMyOC43MTkgMTU4LjkxNiAzMjAuMDMxIDE4My45NzkgMzIwLjAzMUgzNDMuOTU3QzM1MS4wMzUgMzIwLjAzMSAzNTcuNzIzIDMyMy4xMjUgMzYyLjMwMSAzMjguNUMzNjYuOTQxIDMzMy45NjkgMzY4Ljg0OCAzNDAuOTM4IDM2Ny42OTEgMzQ4LjA5NEMzNjUuODAxIDM1OS40NjkgMzU0Ljg0OCAzNjguMDMxIDM0Mi4yMDcgMzY4LjAzMUgyNjMuOTc3QzI1MC43NDIgMzY4LjAzMSAyMzkuOTc3IDM3OC44MTMgMjM5Ljk3NyAzOTIuMDMxUzI1MC43NDIgNDE2IDI2My45NzcgNDE2SDM4Ny4yMDVMNTA5LjAxNCAzMjYuMjgxQzUxNS44NzMgMzIxLjE4OCA1MjQuMzI2IDMxOS4xODggNTMyLjcwMSAzMjAuMzQ0QzU0MS4xNyAzMjEuNjI1IDU0OC42MzcgMzI2LjEyNSA1NTMuNzQ2IDMzMy4wNjJDNTU4LjgwOSAzMzkuOTM4IDU2MC45MDIgMzQ4LjM3NSA1NTkuNjIxIDM1Ni44MTJDNTU4LjM0IDM2NS4yODEgNTUzLjg1NSAzNzIuNzE5IDU0Ni45NjUgMzc3Ljc4MUw0MTEuOTA4IDQ3Ny4yODFDMzk1LjUxOCA0ODkuMzQ0IDM3NS4yODUgNDk2IDM1NC45NTcgNDk2SDhDMy41NzggNDk2IDAgNDk5LjU5NCAwIDUwNFMzLjU3OCA1MTIgOCA1MTJIMzU0Ljk1N0MzNzguNjc0IDUxMiA0MDIuMjgzIDUwNC4yNSA0MjEuNDA4IDQ5MC4xNTZMNTU2LjQ2NSAzOTAuNjU2QzU2Ni43NzcgMzgzLjA2MiA1NzMuNTI3IDM3MS45MDYgNTc1LjQ0OSAzNTkuMjE5QzU3Ny4zNzEgMzQ2LjU2MiA1NzQuMjMgMzMzLjg3NSA1NjYuNjIxIDMyMy41NjJaTTIxMy45OSAyMzcuMjVMMjA4LjQ5IDI2My4xMjVDMjA1Ljg2NSAyNzUuNzUgMjEzLjk5IDI4OCAyMjQuOTkyIDI4OEgzNTEuMDFDMzYyLjEzNyAyODggMzcwLjEzNyAyNzUuNzUgMzY3LjUxMiAyNjMuMTI1TDM2Mi4wMTIgMjM3LjI1QzQwMy43NjggMjE0Ljg3NSA0MzIuMDIxIDE3NC41IDQzMi4wMjEgMTI4QzQzMi4wMjEgNTcuMjUgMzY3LjUxMiAwIDI4OCAwQzIwOC40OSAwIDE0My45ODIgNTcuMjUgMTQzLjk4MiAxMjhDMTQzLjk4MiAxNzQuNSAxNzIuMjM2IDIxNC44NzUgMjEzLjk5IDIzNy4yNVpNMjg4IDE2QzM1OC41OTIgMTYgNDE2LjAyMSA2Ni4yNDIgNDE2LjAyMSAxMjhDNDE2LjAyMSAxNjYuOTIgMzkzLjAwNiAyMDIuNDg4IDM1NC40NTUgMjIzLjE0NkMzNDguMTggMjI2LjUxIDM0NC44ODEgMjMzLjYxMyAzNDYuMzYxIDI0MC41NzZMMzUxLjg0OCAyNjYuMzgxQzM1Mi40ODQgMjY5LjQ0NyAzNTEuMTQzIDI3MS43MjkgMzUxLjAxIDI3MkwyMjUuNTY4IDI3Mi4xMjlDMjI0LjkwOCAyNzEuNzMyIDIyMy41MiAyNjkuNDQxIDIyNC4xNDEgMjY2LjQ1MUwyMjkuNjQxIDI0MC41NzZDMjMxLjEyMSAyMzMuNjEzIDIyNy44MjIgMjI2LjUxIDIyMS41NDcgMjIzLjE0NkMxODIuOTk4IDIwMi40ODggMTU5Ljk4MiAxNjYuOTIgMTU5Ljk4MiAxMjhDMTU5Ljk4MiA2Ni4yNDIgMjE3LjQxIDE2IDI4OCAxNlpNMzM2IDE3NkMzNTMuNjQ1IDE3NiAzNjcuOTk4IDE2MS42NDUgMzY3Ljk5OCAxNDQuMDAyQzM2Ny45OTggMTI2LjM1NyAzNTMuNjQ1IDExMi4wMDIgMzM2IDExMi4wMDJTMzA0IDEyNi4zNTcgMzA0IDE0NC4wMDJDMzA0IDE2MS42NDUgMzE4LjM1NSAxNzYgMzM2IDE3NlpNMzM2IDEyOC4wMDJDMzQ0LjgxMiAxMjguMDAyIDM1MiAxMzUuMTg5IDM1MiAxNDQuMDAyQzM1MiAxNTIuODEyIDM0NC44MTIgMTYwIDMzNiAxNjBTMzIwIDE1Mi44MTIgMzIwIDE0NC4wMDJDMzIwIDEzNS4xODkgMzI3LjE4OCAxMjguMDAyIDMzNiAxMjguMDAyWk0yNDAuMDAyIDE3NkMyNTcuNjQ2IDE3NiAyNzIuMDAyIDE2MS42NDUgMjcyLjAwMiAxNDQuMDAyQzI3Mi4wMDIgMTI2LjM1NyAyNTcuNjQ2IDExMi4wMDIgMjQwLjAwMiAxMTIuMDAyUzIwOC4wMDIgMTI2LjM1NyAyMDguMDAyIDE0NC4wMDJDMjA4LjAwMiAxNjEuNjQ1IDIyMi4zNTcgMTc2IDI0MC4wMDIgMTc2Wk0yNDAuMDAyIDEyOC4wMDJDMjQ4LjgxNCAxMjguMDAyIDI1Ni4wMDIgMTM1LjE4OSAyNTYuMDAyIDE0NC4wMDJDMjU2LjAwMiAxNTIuODEyIDI0OC44MTQgMTYwIDI0MC4wMDIgMTYwUzIyNC4wMDIgMTUyLjgxMiAyMjQuMDAyIDE0NC4wMDJDMjI0LjAwMiAxMzUuMTg5IDIzMS4xODkgMTI4LjAwMiAyNDAuMDAyIDEyOC4wMDJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HandHoldingSkull(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M566.621 323.562C558.98 313.187 547.777 306.438 535.076 304.531C522.311 302.531 509.764 305.781 499.498 313.406L381.955 400H263.977C259.633 400 255.977 396.344 255.977 392.031C255.977 387.688 259.633 384.031 263.977 384.031H342.207C362.566 384.031 380.299 369.719 383.471 350.688C385.377 338.969 382.111 327.094 374.488 318.156C366.863 309.188 355.723 304.031 343.957 304.031H183.979C155.26 304.031 127.152 314 104.824 332.063L60.529 368.031H8C3.578 368.031 0 371.625 0 376.031S3.578 384.031 8 384.031H66.217L114.902 344.5C134.387 328.719 158.916 320.031 183.979 320.031H343.957C351.035 320.031 357.723 323.125 362.301 328.5C366.941 333.969 368.848 340.938 367.691 348.094C365.801 359.469 354.848 368.031 342.207 368.031H263.977C250.742 368.031 239.977 378.813 239.977 392.031S250.742 416 263.977 416H387.205L509.014 326.281C515.873 321.188 524.326 319.188 532.701 320.344C541.17 321.625 548.637 326.125 553.746 333.062C558.809 339.938 560.902 348.375 559.621 356.812C558.34 365.281 553.855 372.719 546.965 377.781L411.908 477.281C395.518 489.344 375.285 496 354.957 496H8C3.578 496 0 499.594 0 504S3.578 512 8 512H354.957C378.674 512 402.283 504.25 421.408 490.156L556.465 390.656C566.777 383.062 573.527 371.906 575.449 359.219C577.371 346.562 574.23 333.875 566.621 323.562ZM213.99 237.25L208.49 263.125C205.865 275.75 213.99 288 224.992 288H351.01C362.137 288 370.137 275.75 367.512 263.125L362.012 237.25C403.768 214.875 432.021 174.5 432.021 128C432.021 57.25 367.512 0 288 0C208.49 0 143.982 57.25 143.982 128C143.982 174.5 172.236 214.875 213.99 237.25ZM288 16C358.592 16 416.021 66.242 416.021 128C416.021 166.92 393.006 202.488 354.455 223.146C348.18 226.51 344.881 233.613 346.361 240.576L351.848 266.381C352.484 269.447 351.143 271.729 351.01 272L225.568 272.129C224.908 271.732 223.52 269.441 224.141 266.451L229.641 240.576C231.121 233.613 227.822 226.51 221.547 223.146C182.998 202.488 159.982 166.92 159.982 128C159.982 66.242 217.41 16 288 16ZM336 176C353.645 176 367.998 161.645 367.998 144.002C367.998 126.357 353.645 112.002 336 112.002S304 126.357 304 144.002C304 161.645 318.355 176 336 176ZM336 128.002C344.812 128.002 352 135.189 352 144.002C352 152.812 344.812 160 336 160S320 152.812 320 144.002C320 135.189 327.188 128.002 336 128.002ZM240.002 176C257.646 176 272.002 161.645 272.002 144.002C272.002 126.357 257.646 112.002 240.002 112.002S208.002 126.357 208.002 144.002C208.002 161.645 222.357 176 240.002 176ZM240.002 128.002C248.814 128.002 256.002 135.189 256.002 144.002C256.002 152.812 248.814 160 240.002 160S224.002 152.812 224.002 144.002C224.002 135.189 231.189 128.002 240.002 128.002Z" />
        </Icon>
    </>
}