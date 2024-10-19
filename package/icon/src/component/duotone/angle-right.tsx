
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angle-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-right?s=duotone angle-right}
 * @preview ![angle-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTcyLjAwMSA0NDhDNjIuMTI2IDQ0OCA1Mi4yMiA0NDQuMzc1IDQ0LjQ4NSA0MzcuMDMyQzI4LjQ1NCA0MjEuODQ2IDI3Ljc2NyAzOTYuNTM2IDQyLjk3IDM4MC41MDZMMTYwLjkwNyAyNTYuMDE3TDQyLjk3IDEzMS41MjhDMjcuNzY3IDExNS40OTggMjguNDU0IDkwLjE4OCA0NC40ODUgNzUuMDAyQzYwLjUwMSA1OS43NTMgODUuODEzIDYwLjQ0MSAxMDEuMDMyIDc2LjUzM0wyNDUuMDMxIDIyOC41MkMyNTkuNjU2IDI0My45MjQgMjU5LjY1NiAyNjguMTEgMjQ1LjAzMSAyODMuNTE1TDEwMS4wMzIgNDM1LjUwMUM5My4xNzMgNDQzLjgxMyA4Mi41OTQgNDQ4IDcyLjAwMSA0NDhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function AngleRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path class={generic.secondary} d="M72.001 448C62.126 448 52.22 444.375 44.485 437.032C28.454 421.846 27.767 396.536 42.97 380.506L160.907 256.017L42.97 131.528C27.767 115.498 28.454 90.188 44.485 75.002C60.501 59.753 85.813 60.441 101.032 76.533L245.031 228.52C259.656 243.924 259.656 268.11 245.031 283.515L101.032 435.501C93.173 443.813 82.594 448 72.001 448Z" />
        </Icon>
    </>
}