
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `7` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/7?s=duotone 7}
 * @preview ![7](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMxNC4xMjUgMTAzTDEyMi4xMjUgNDU1QzExMy40MzggNDcwLjk2OSA5Ni45NjkgNDgwIDc5Ljk2OSA0ODBDNzIuMTg3IDQ4MCA2NC4zMTIgNDc4LjEyNSA1NyA0NzQuMTI1QzMzLjc1IDQ2MS40MzcgMjUuMTU2IDQzMi4yODEgMzcuODc1IDQwOUwxOTEuMTU2IDEyOEg0OEMyMS41IDEyOCAwIDEwNi41IDAgODBTMjEuNSAzMiA0OCAzMkgyNzJDMjg4LjkzOCAzMiAzMDQuNjI1IDQwLjkzOCAzMTMuMjgxIDU1LjVTMzIyLjI1IDg4LjEyNSAzMTQuMTI1IDEwM1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function $7(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M314.125 103L122.125 455C113.438 470.969 96.969 480 79.969 480C72.187 480 64.312 478.125 57 474.125C33.75 461.437 25.156 432.281 37.875 409L191.156 128H48C21.5 128 0 106.5 0 80S21.5 32 48 32H272C288.938 32 304.625 40.938 313.281 55.5S322.25 88.125 314.125 103Z" />
        </Icon>
    </>
}