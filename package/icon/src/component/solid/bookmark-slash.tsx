
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark-slash` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark-slash?s=solid bookmark-slash}
 * @preview ![bookmark-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjcuOTk5IDUxMkwzNTguNTY0IDM3Ny43MTNMMTI3Ljk5OSAxOTcuMDAyVjUxMlpNNjMwLjgxIDQ2OS4xMDJMNTExLjk5OSAzNzUuOThWNDhDNTExLjk5OSAyMS41IDQ5MC40OTkgMCA0NjMuOTk5IDBIMTc1Ljk5OUMxNDkuNDk5IDAgMTI3Ljk5OSAyMS41IDEyNy45OTkgNDhWNzUuMDEyTDM4LjgxNCA1LjEwOUMzNC40MDcgMS42NzIgMjkuMTg5IDAgMjQuMDMyIDBDMTYuOTA3IDAgOS44NDUgMy4xNTYgNS4xMjYgOS4xODhDLTMuMDYxIDE5LjYyNSAtMS4yNDkgMzQuNzE5IDkuMTg5IDQyLjg5MUw2MDEuMTg1IDUwNi44ODNDNjExLjY4NSA1MTUuMDg2IDYyNi43NDcgNTEzLjIxMSA2MzQuODcyIDUwMi44MDVDNjQzLjA2IDQ5Mi4zNjcgNjQxLjI0NyA0NzcuMjczIDYzMC44MSA0NjkuMTAyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BookmarkSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M127.999 512L358.564 377.713L127.999 197.002V512ZM630.81 469.102L511.999 375.98V48C511.999 21.5 490.499 0 463.999 0H175.999C149.499 0 127.999 21.5 127.999 48V75.012L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102Z" />
        </Icon>
    </>
}