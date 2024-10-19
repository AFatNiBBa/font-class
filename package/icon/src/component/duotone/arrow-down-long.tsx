
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-long` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-long?s=duotone arrow-down-long}
 * @preview ![arrow-down-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MCA0MzQuNzVMMTI4IDQwMi43NVYzMkMxMjggMTQuMzEyIDE0Mi4zMTIgMCAxNjAgMFMxOTIgMTQuMzEyIDE5MiAzMlY0MDIuNzVMMTYwIDQzNC43NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzEwLjYyNSAzMjkuMzc1QzMyMy4xMjUgMzQxLjg3NSAzMjMuMTI1IDM2Mi4xMjUgMzEwLjYyNSAzNzQuNjI1TDE4Mi42MjUgNTAyLjYyNUMxNzAuMTI1IDUxNS4xMjUgMTQ5Ljg3NSA1MTUuMTI1IDEzNy4zNzUgNTAyLjYyNUw5LjM3NSAzNzQuNjI1Qy0zLjEyNSAzNjIuMTI1IC0zLjEyNSAzNDEuODc1IDkuMzc1IDMyOS4zNzVTNDIuMTI1IDMxNi44NzUgNTQuNjI1IDMyOS4zNzVMMTYwIDQzNC43NUwyNjUuMzc1IDMyOS4zNzVDMjcxLjYyNSAzMjMuMTI1IDI3OS44MTMgMzIwIDI4OCAzMjBTMzA0LjM3NSAzMjMuMTI1IDMxMC42MjUgMzI5LjM3NVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowDownLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path opacity={.4} d="M160 434.75L128 402.75V32C128 14.312 142.312 0 160 0S192 14.312 192 32V402.75L160 434.75Z" />
            <path d="M310.625 329.375C323.125 341.875 323.125 362.125 310.625 374.625L182.625 502.625C170.125 515.125 149.875 515.125 137.375 502.625L9.375 374.625C-3.125 362.125 -3.125 341.875 9.375 329.375S42.125 316.875 54.625 329.375L160 434.75L265.375 329.375C271.625 323.125 279.813 320 288 320S304.375 323.125 310.625 329.375Z" />
        </Icon>
    </>
}