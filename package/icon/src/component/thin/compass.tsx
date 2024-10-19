
import { Icon } from "../../index";

/**
 * A component that renders the `compass` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/compass?s=thin compass}
 * @preview ![compass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ0OSAxNiAxNiAxMjMuNDQ5IDE2IDI1NlMxMjMuNDQ5IDQ5NiAyNTYgNDk2UzQ5NiAzODguNTUxIDQ5NiAyNTZTMzg4LjU1MSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NCA0ODAgMzIgMzc5LjUxMyAzMiAyNTZTMTMyLjQ4NCAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE2IDQ4MCAyNTYgNDgwWk0zNTIuNjI1IDEyMi41NjJMMjA4LjMxMyAxODguNTMxQzIwMC41NjMgMTkyLjA2MiAxOTIuMDYzIDIwMC41NDcgMTg4LjU2MyAyMDguMjY1TDEyMi41OTQgMzUyLjYwOUMxMTcuNzE5IDM2My4yNjUgMTE5LjkwNiAzNzUuNSAxMjguMTg4IDM4My43OTdDMTMzLjU2MyAzODkuMTU2IDE0MC41OTQgMzkxLjk2OSAxNDcuNzUgMzkxLjk2OUMxNTEuNjU2IDM5MS45NjkgMTU1LjYyNSAzOTEuMTQgMTU5LjM3NSAzODkuNDIyTDMwMy43NSAzMjMuNDM3QzMxMS40NjkgMzE5LjkwNiAzMTkuOTM4IDMxMS40MzcgMzIzLjQzOCAzMDMuNzM0TDM4OS40MDYgMTU5LjM3NUMzOTQuMjgxIDE0OC43MzQgMzkyLjA5NCAxMzYuNSAzODMuODEyIDEyOC4yMThDMzc1LjUgMTE5LjkwNiAzNjMuMjUgMTE3LjcwMyAzNTIuNjI1IDEyMi41NjJaTTM3NC44NDQgMTUyLjcxOEwzMDguODc1IDI5Ny4wOTRDMzA2LjkzOCAzMDEuMzI4IDMwMS4zMTMgMzA2Ljk1MyAyOTcuMDk0IDMwOC44OUwxNTIuNzUgMzc0Ljg1OUMxNDUuOTM4IDM3Ny45ODQgMTQwLjkwNiAzNzMuODU5IDEzOS41MzEgMzcyLjQ4NEMxMzguMTU2IDM3MS4xMjUgMTM0IDM2Ni4xNzIgMTM3LjE1NiAzNTkuMjY1TDIwMy4xMjUgMjE0LjkwNkMyMDUuMDYzIDIxMC42NTYgMjEwLjY4OCAyMDUuMDMxIDIxNC45MzggMjAzLjA5M0wzNTkuMjUgMTM3LjEyNUMzNjYuMjUgMTMzLjkzNyAzNzEuMTU2IDEzOC4xNzIgMzcyLjUgMTM5LjUxNUMzNzMuODQ0IDE0MC44NzUgMzc4IDE0NS44MjggMzc0Ljg0NCAxNTIuNzE4Wk0yNTYgMjI0QzI0Ny44MTIgMjI0IDIzOS42MjUgMjI3LjEyNSAyMzMuMzc1IDIzMy4zNzVDMjIwLjg3NSAyNDUuODc1IDIyMC44NzUgMjY2LjEyNSAyMzMuMzc1IDI3OC42MjVDMjM5LjYyNSAyODQuODc1IDI0Ny44MTMgMjg4IDI1NiAyODhTMjcyLjM3NSAyODQuODc1IDI3OC42MjUgMjc4LjYyNUMyOTEuMTI1IDI2Ni4xMjUgMjkxLjEyNSAyNDUuODU5IDI3OC42MjUgMjMzLjM3NUMyNzIuMzc1IDIyNy4xMjUgMjY0LjE4OCAyMjQgMjU2IDIyNFpNMjY3LjMxMyAyNjcuMzFDMjY0LjI4OSAyNzAuMzM0IDI2MC4yNyAyNzIgMjU2IDI3MlMyNDcuNzExIDI3MC4zMzQgMjQ0LjY4OCAyNjcuMzFTMjQwIDI2MC4yNjkgMjQwIDI1NkMyNDAgMjUxLjcyOCAyNDEuNjY0IDI0Ny43MTEgMjQ0LjY4OCAyNDQuNjg3UzI1MS43MyAyNDAgMjU2IDI0MFMyNjQuMjg5IDI0MS42NjQgMjY3LjMyIDI0NC42OTVDMjcwLjMzNiAyNDcuNzExIDI3MiAyNTEuNzIyIDI3MiAyNTUuOTk0QzI3MiAyNjAuMjY3IDI3MC4zMzYgMjY0LjI4NyAyNjcuMzEzIDI2Ny4zMVoiLz48L3N2Zz4=|width=32|height=32)
 */
const Compass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.449 16 16 123.449 16 256S123.449 496 256 496S496 388.551 496 256S388.551 16 256 16ZM256 480C132.484 480 32 379.513 32 256S132.484 32 256 32S480 132.486 480 256S379.516 480 256 480ZM352.625 122.562L208.313 188.531C200.563 192.062 192.063 200.547 188.563 208.265L122.594 352.609C117.719 363.265 119.906 375.5 128.188 383.797C133.563 389.156 140.594 391.969 147.75 391.969C151.656 391.969 155.625 391.14 159.375 389.422L303.75 323.437C311.469 319.906 319.938 311.437 323.438 303.734L389.406 159.375C394.281 148.734 392.094 136.5 383.812 128.218C375.5 119.906 363.25 117.703 352.625 122.562ZM374.844 152.718L308.875 297.094C306.938 301.328 301.313 306.953 297.094 308.89L152.75 374.859C145.938 377.984 140.906 373.859 139.531 372.484C138.156 371.125 134 366.172 137.156 359.265L203.125 214.906C205.063 210.656 210.688 205.031 214.938 203.093L359.25 137.125C366.25 133.937 371.156 138.172 372.5 139.515C373.844 140.875 378 145.828 374.844 152.718ZM256 224C247.812 224 239.625 227.125 233.375 233.375C220.875 245.875 220.875 266.125 233.375 278.625C239.625 284.875 247.813 288 256 288S272.375 284.875 278.625 278.625C291.125 266.125 291.125 245.859 278.625 233.375C272.375 227.125 264.188 224 256 224ZM267.313 267.31C264.289 270.334 260.27 272 256 272S247.711 270.334 244.688 267.31S240 260.269 240 256C240 251.728 241.664 247.711 244.688 244.687S251.73 240 256 240S264.289 241.664 267.32 244.695C270.336 247.711 272 251.722 272 255.994C272 260.267 270.336 264.287 267.313 267.31Z" />
    </Icon>
);

export default Compass;