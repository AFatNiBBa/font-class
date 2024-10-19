
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/slash?s=duotone slash}
 * @preview ![slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI0LjAzMiAwQzI5LjE4OSAwIDM0LjQwNyAxLjY3MiAzOC44MTQgNS4xMDlMNjMwLjgxMSA0NjkuMTAyQzY0MS4yNDkgNDc3LjI3NCA2NDMuMDYxIDQ5Mi4zNjcgNjM0Ljg3NCA1MDIuODA1QzYyNi43NDkgNTEzLjIxMSA2MTEuNjg2IDUxNS4wODYgNjAxLjE4NiA1MDYuODgzTDkuMTg5IDQyLjg5Qy0xLjI0OSAzNC43MTggLTMuMDYxIDE5LjYyNSA1LjEyNiA5LjE4N0M5Ljg0NSAzLjE1NiAxNi45MDcgMCAyNC4wMzIgMFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Slash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.811 469.102C641.249 477.274 643.061 492.367 634.874 502.805C626.749 513.211 611.686 515.086 601.186 506.883L9.189 42.89C-1.249 34.718 -3.061 19.625 5.126 9.187C9.845 3.156 16.907 0 24.032 0Z" />
        </Icon>
    </>
}