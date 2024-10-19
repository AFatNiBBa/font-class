
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `forward` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=duotone forward}
 * @preview ![forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyLjUwNiA0NDAuNTk0TDIyMy45OTYgMjk3LjcyN1YyMTQuMjczTDUyLjUwNiA3MS40MDZDMzEuODc5IDU0LjI4NCAwIDY4LjY1NyAwIDk2LjAyN1Y0MTUuOTczQzAgNDQzLjM0MyAzMS44NzkgNDU3LjcxNiA1Mi41MDYgNDQwLjU5NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzA4LjUwNiA0NDAuNTk0TDUwMC41MyAyODAuNjIxQzUxNS43ODIgMjY3Ljc0OCA1MTUuNzgyIDI0NC4yNTIgNTAwLjUzIDIzMS4zNzlMMzA4LjUwNiA3MS40MDZDMjg3Ljg3OSA1NC4yODQgMjU2IDY4LjY1NyAyNTYgOTYuMDI3VjQxNS45NzNDMjU2IDQ0My4zNDMgMjg3Ljg3OSA0NTcuNzE2IDMwOC41MDYgNDQwLjU5NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Forward(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M52.506 440.594L223.996 297.727V214.273L52.506 71.406C31.879 54.284 0 68.657 0 96.027V415.973C0 443.343 31.879 457.716 52.506 440.594Z" />
            <path d="M308.506 440.594L500.53 280.621C515.782 267.748 515.782 244.252 500.53 231.379L308.506 71.406C287.879 54.284 256 68.657 256 96.027V415.973C256 443.343 287.879 457.716 308.506 440.594Z" />
        </Icon>
    </>
}