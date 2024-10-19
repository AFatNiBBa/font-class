
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `battery-full` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/battery-full?s=duotone battery-full}
 * @preview ![battery-full](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU0NCAxOTJWMTYwQzU0NCAxMjQuNjU0IDUxNS4zNDYgOTYgNDgwIDk2SDY0QzI4LjY1NCA5NiAwIDEyNC42NTQgMCAxNjBWMzUyQzAgMzg3LjM0NiAyOC42NTQgNDE2IDY0IDQxNkg0ODBDNTE1LjM0NiA0MTYgNTQ0IDM4Ny4zNDYgNTQ0IDM1MlYzMjBDNTYxLjY3NCAzMjAgNTc2IDMwNS42NzQgNTc2IDI4OFYyMjRDNTc2IDIwNi4zMjYgNTYxLjY3NCAxOTIgNTQ0IDE5MlpNNDgwIDM1Mkg2NFYxNjBINDgwVjM1MloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDQ4IDE5Mkg5NlYzMjBINDQ4VjE5MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function BatteryFull(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M544 192V160C544 124.654 515.346 96 480 96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H480C515.346 416 544 387.346 544 352V320C561.674 320 576 305.674 576 288V224C576 206.326 561.674 192 544 192ZM480 352H64V160H480V352Z" />
            <path d="M448 192H96V320H448V192Z" />
        </Icon>
    </>
}