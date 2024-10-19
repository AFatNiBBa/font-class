
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark-slash?s=duotone bookmark-slash}
 * @preview ![bookmark-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCA1MTJMMzU4LjU2NCAzNzcuNzEzTDEyOCAxOTcuMDAyVjUxMlpNNDY0IDBIMTc2QzE0OS41IDAgMTI4IDIxLjUgMTI4IDQ4Vjc1LjAxMkw1MTIgMzc1Ljk4VjQ4QzUxMiAyMS41IDQ5MC41IDAgNDY0IDBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTYzMC44MSA0NjkuMTAyTDM4LjgxNCA1LjEwOUMzNC40MDcgMS42NzIgMjkuMTg5IDAgMjQuMDMyIDBDMTYuOTA3IDAgOS44NDUgMy4xNTYgNS4xMjYgOS4xODhDLTMuMDYxIDE5LjYyNSAtMS4yNDkgMzQuNzE5IDkuMTg5IDQyLjg5MUw2MDEuMTg1IDUwNi44ODNDNjExLjY4NSA1MTUuMDg2IDYyNi43NDcgNTEzLjIxMSA2MzQuODcyIDUwMi44MDVDNjQzLjA2IDQ5Mi4zNjcgNjQxLjI0NyA0NzcuMjczIDYzMC44MSA0NjkuMTAyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BookmarkSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M128 512L358.564 377.713L128 197.002V512ZM464 0H176C149.5 0 128 21.5 128 48V75.012L512 375.98V48C512 21.5 490.5 0 464 0Z" />
            <path d="M630.81 469.102L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102Z" />
        </Icon>
    </>
}