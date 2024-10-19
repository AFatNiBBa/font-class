
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `caret-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/caret-right?s=duotone caret-right}
 * @preview ![caret-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTExOC42MjUgMTA1LjM3NUwyNDYuNjI1IDIzMy4zNzVDMjUyLjg3NSAyMzkuNjI1IDI1NiAyNDcuODEyIDI1NiAyNTZDMjU2IDI2NC4xODcgMjUyLjg3NSAyNzIuMzc1IDI0Ni42MjUgMjc4LjYyNUwxMTguNjI1IDQwNi42MjVDMTA5LjQ2OSA0MTUuNzgxIDk1LjcxOSA0MTguNTE2IDgzLjc1IDQxMy41NjJTNjQgMzk2LjkzNyA2NCAzODRWMTI4QzY0IDExNS4wNjIgNzEuNzgxIDEwMy4zOTEgODMuNzUgOTguNDM3UzEwOS40NjkgOTYuMjE5IDExOC42MjUgMTA1LjM3NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CaretRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path class={generic.secondary} d="M118.625 105.375L246.625 233.375C252.875 239.625 256 247.812 256 256C256 264.187 252.875 272.375 246.625 278.625L118.625 406.625C109.469 415.781 95.719 418.516 83.75 413.562S64 396.937 64 384V128C64 115.062 71.781 103.391 83.75 98.437S109.469 96.219 118.625 105.375Z" />
        </Icon>
    </>
}