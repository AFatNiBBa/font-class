
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `trash-slash` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trash-slash?s=solid trash-slash}
 * @preview ![trash-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDkuMTg5IDQ2N0MxNTAuNzUxIDQ5MS44NDQgMTcyLjIyIDUxMiAxOTcuMDk1IDUxMkg0NDIuOTA3QzQ2My40OTUgNTEyIDQ4MS41NjYgNDk4LjExMSA0ODguMTMgNDc5LjI2NkwxMzIuNTM2IDIwMC41NTdMMTQ5LjE4OSA0NjdaTTYzMC44MTIgNDY5LjEwMkw0OTcuMjI2IDM2NC40TDUxMi4wMDEgMTI4SDE5NS42MDdMMTU0Ljc3OSA5Nkg1MjguMDAxQzUzNi44MzkgOTYgNTQ0LjAwMSA4OC44MzYgNTQ0LjAwMSA4MFY0OEM1NDQuMDAxIDM5LjE2MiA1MzYuODM5IDMyIDUyOC4wMDEgMzJINDE2LjAwMUw0MDQuNDIzIDguODQ0QzQwMS43MTQgMy40MjQgMzk2LjE3MyAwIDM5MC4xMTMgMEgyNDkuODlDMjQzLjgyOSAwIDIzOC4yOSAzLjQyNCAyMzUuNTc5IDguODQ0TDIyNC4wMDEgMzJIMTEyLjAwMUMxMDMuMTY1IDMyIDk2LjAwMSAzOS4xNjIgOTYuMDAxIDQ4VjQ5LjkzMkwzOC44MTQgNS4xMDlDMzQuNDA3IDEuNjcyIDI5LjE4OSAwIDI0LjAzMiAwQzE2LjkwNyAwIDkuODQ1IDMuMTU2IDUuMTI2IDkuMTg4Qy0zLjA2MSAxOS42MjUgLTEuMjQ5IDM0LjcxNyA5LjE4OSA0Mi44ODlMNjAxLjE4NyA1MDYuODgzQzYxMS42ODcgNTE1LjA4NiA2MjYuNzQ5IDUxMy4yMTEgNjM0Ljg3NCA1MDIuODA1QzY0My4wNjIgNDkyLjM2NyA2NDEuMjQ5IDQ3Ny4yNzMgNjMwLjgxMiA0NjkuMTAyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TrashSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M149.189 467C150.751 491.844 172.22 512 197.095 512H442.907C463.495 512 481.566 498.111 488.13 479.266L132.536 200.557L149.189 467ZM630.812 469.102L497.226 364.4L512.001 128H195.607L154.779 96H528.001C536.839 96 544.001 88.836 544.001 80V48C544.001 39.162 536.839 32 528.001 32H416.001L404.423 8.844C401.714 3.424 396.173 0 390.113 0H249.89C243.829 0 238.29 3.424 235.579 8.844L224.001 32H112.001C103.165 32 96.001 39.162 96.001 48V49.932L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.717 9.189 42.889L601.187 506.883C611.687 515.086 626.749 513.211 634.874 502.805C643.062 492.367 641.249 477.273 630.812 469.102Z" />
        </Icon>
    </>
}