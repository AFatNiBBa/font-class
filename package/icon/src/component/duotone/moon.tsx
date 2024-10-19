
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `moon` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/moon?s=duotone moon}
 * @preview ![moon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyIDI1NkMzMiAxMzIuMTg3IDEzMi4yNTkgMzIgMjU1Ljc5MyAzMkMyNjcuMTU4IDMyIDI4NS40ODggMzMuNjY4IDI5Ni42ODkgMzUuNzQ2QzMwNi4zMDUgMzcuNTIzIDMwOC40MzYgNTAuMzc1IDI5OS45NjcgNTUuMTg3QzI0NS4wMyA4Ni40OTYgMjExLjIzNyAxNDQuNjAyIDIxMS4yMzcgMjA3Ljc5M0MyMTEuMjM3IDMxNy40OTYgMzEwLjk0OSA0MDAuODEyIDQxOS41MTMgMzgwLjExM0M0MjkuMDc1IDM3OC4zMDkgNDM1Ljc5NSAzODkuNDM3IDQyOS42MjEgMzk3LjA2NkMzODcuODUxIDQ0OC41NTUgMzI0LjgyNyA0ODAgMjU1Ljc5MyA0ODBDMTMyLjA5NSA0ODAgMzIgMzc5LjY0OCAzMiAyNTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Moon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M32 256C32 132.187 132.259 32 255.793 32C267.158 32 285.488 33.668 296.689 35.746C306.305 37.523 308.436 50.375 299.967 55.187C245.03 86.496 211.237 144.602 211.237 207.793C211.237 317.496 310.949 400.812 419.513 380.113C429.075 378.309 435.795 389.437 429.621 397.066C387.851 448.555 324.827 480 255.793 480C132.095 480 32 379.648 32 256Z" />
        </Icon>
    </>
}