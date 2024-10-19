
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `play-pause` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/play-pause?s=thin play-pause}
 * @preview ![play-pause](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQgNjRDNDk5LjU3OCA2NCA0OTYgNjcuNTc4IDQ5NiA3MlY0NDBDNDk2IDQ0NC40MjIgNDk5LjU3OCA0NDggNTA0IDQ0OFM1MTIgNDQ0LjQyMiA1MTIgNDQwVjcyQzUxMiA2Ny41NzggNTA4LjQyMiA2NCA1MDQgNjRaTTM2MCA2NEMzNTUuNTc4IDY0IDM1MiA2Ny41NzggMzUyIDcyVjQ0MEMzNTIgNDQ0LjQyMiAzNTUuNTc4IDQ0OCAzNjAgNDQ4UzM2OCA0NDQuNDIyIDM2OCA0NDBWNzJDMzY4IDY3LjU3OCAzNjQuNDIyIDY0IDM2MCA2NFpNNTIuNTA2IDcxLjQwNkM0Ni4zNjEgNjYuMzA3IDM5LjIxNyA2NCAzMi4yMTcgNjRDMTUuNzEzIDY0IDAgNzYuODA5IDAgOTYuMDI3VjQxNS45NzNDMCA0MzUuMTg5IDE1LjcxNSA0NDggMzIuMjE3IDQ0OEMzOS4yMTkgNDQ4IDQ2LjM2MSA0NDUuNjk1IDUyLjUwNiA0NDAuNTk0TDI0NC41MjkgMjgwLjYyMUMyNTkuNzgxIDI2Ny43NDggMjU5Ljc4MSAyNDQuMjUyIDI0NC41MjkgMjMxLjM3OUw1Mi41MDYgNzEuNDA2Wk0yMzQuMjg5IDI2OC4zMjhMNDIuMjg1IDQyOC4yODNDMzkuMzE2IDQzMC43NSAzNS45MjggNDMyIDMyLjIxNyA0MzJDMjQuMjQ2IDQzMiAxNiA0MjYuMDA0IDE2IDQxNS45NzNWOTYuMDI3QzE2IDg1Ljk5NCAyNC4yNDYgODAgMzIuMjE3IDgwQzM1LjkyOCA4MCAzOS4zMTQgODEuMjUgNDIuMjY2IDgzLjY5OUwyMzQuMjA5IDI0My42MDVDMjM3LjkyNCAyNDYuNzQgMjM5Ljk2OSAyNTEuMTQxIDIzOS45NjkgMjU2QzIzOS45NjkgMjYwLjg1NyAyMzcuOTI0IDI2NS4yNiAyMzQuMjg5IDI2OC4zMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PlayPause(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504 64C499.578 64 496 67.578 496 72V440C496 444.422 499.578 448 504 448S512 444.422 512 440V72C512 67.578 508.422 64 504 64ZM360 64C355.578 64 352 67.578 352 72V440C352 444.422 355.578 448 360 448S368 444.422 368 440V72C368 67.578 364.422 64 360 64ZM52.506 71.406C46.361 66.307 39.217 64 32.217 64C15.713 64 0 76.809 0 96.027V415.973C0 435.189 15.715 448 32.217 448C39.219 448 46.361 445.695 52.506 440.594L244.529 280.621C259.781 267.748 259.781 244.252 244.529 231.379L52.506 71.406ZM234.289 268.328L42.285 428.283C39.316 430.75 35.928 432 32.217 432C24.246 432 16 426.004 16 415.973V96.027C16 85.994 24.246 80 32.217 80C35.928 80 39.314 81.25 42.266 83.699L234.209 243.605C237.924 246.74 239.969 251.141 239.969 256C239.969 260.857 237.924 265.26 234.289 268.328Z" />
        </Icon>
    </>
}