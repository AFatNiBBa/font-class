
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud-rainbow` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-rainbow?s=duotone cloud-rainbow}
 * @preview ![cloud-rainbow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQzMS4xMjUgMzA0Ljg3NUM0NDEuMTI1IDMxMC41IDQ1MC4xMjUgMzE3LjI1IDQ1OC4xMjUgMzI1LjI1QzQ4Ny41IDI5Mi43NSA1MjkuMzc1IDI3MiA1NzYuMzc1IDI3MlYyMDhDNTE1LjM3NSAyMDggNDYwLjEyNSAyMzIuNjI1IDQxOS42MjUgMjcyLjI1QzQyNS4yNSAyODIuMjUgNDI5LjM3NSAyOTMuMjUgNDMxLjEyNSAzMDQuODc1Wk0yMzkgMTczLjYyNUMyNjAgMTc5LjUgMjc5LjM3NSAxOTAuMTI1IDI5NS42MjUgMjA0LjYyNUMzNjAgMTE5LjM3NSA0NjEuNjI1IDY0IDU3Ni4zNzUgNjRWMEM0MzcuNSAwIDMxNC42MjUgNjguNzUgMjM5IDE3My42MjVaTTMyNi4xMjUgMjI1LjEyNUMzMzMuNjI1IDIyNC4yNSAzNjIuODc1IDIxOS43NSAzOTQuNjI1IDI0NEM0NDEgMTk3LjI1IDUwNS4yNSAxNjggNTc2LjM3NSAxNjhWMTA0QzQ3NS4xMjUgMTA0IDM4NC43NSAxNTEuMzc1IDMyNi4xMjUgMjI1LjEyNVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDY0IDQxNkM0NjQgNDY5IDQyMSA1MTIgMzY4IDUxMkg5NkM0MyA1MTIgMCA0NjkgMCA0MTZDMCAzNjUuMzc1IDM5LjI1IDMyNC4zNzUgODguODc1IDMyMC43NUM4OC43NSAzMTcuNzUgODggMzE1IDg4IDMxMkM4OCAyNTAuMTI1IDEzOC4xMjUgMjAwIDIwMCAyMDBDMjQ1LjM3NSAyMDAgMjg0LjI1IDIyNy4xMjUgMzAxLjg3NSAyNjZDMzExLjc1IDI1OS43NSAzMjMuMzc1IDI1NiAzMzYgMjU2QzM3MS4yNSAyNTYgNDAwIDI4NC43NSA0MDAgMzIwQzQwMCAzMjEuODc1IDM5OS4zNzUgMzIzLjc1IDM5OS4yNSAzMjUuNjI1QzQzNi43NSAzMzguNjI1IDQ2NCAzNzQgNDY0IDQxNloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CloudRainbow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M431.125 304.875C441.125 310.5 450.125 317.25 458.125 325.25C487.5 292.75 529.375 272 576.375 272V208C515.375 208 460.125 232.625 419.625 272.25C425.25 282.25 429.375 293.25 431.125 304.875ZM239 173.625C260 179.5 279.375 190.125 295.625 204.625C360 119.375 461.625 64 576.375 64V0C437.5 0 314.625 68.75 239 173.625ZM326.125 225.125C333.625 224.25 362.875 219.75 394.625 244C441 197.25 505.25 168 576.375 168V104C475.125 104 384.75 151.375 326.125 225.125Z" />
            <path d="M464 416C464 469 421 512 368 512H96C43 512 0 469 0 416C0 365.375 39.25 324.375 88.875 320.75C88.75 317.75 88 315 88 312C88 250.125 138.125 200 200 200C245.375 200 284.25 227.125 301.875 266C311.75 259.75 323.375 256 336 256C371.25 256 400 284.75 400 320C400 321.875 399.375 323.75 399.25 325.625C436.75 338.625 464 374 464 416Z" />
        </Icon>
    </>
}