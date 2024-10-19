
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `integral` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/integral?s=duotone integral}
 * @preview ![integral](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMwNCA5MlY5NkMzMDQgMTE4LjA5NCAyODYuMDk0IDEzNiAyNjQgMTM2UzIyNCAxMTguMDk0IDIyNCA5NlY5MkMyMjQgODUuMzc1IDIxOC42MDkgODAgMjEyIDgwUzIwMCA4NS4zNzUgMjAwIDkyVjQyMEMyMDAgNDcwLjcxOSAxNTguNzM0IDUxMiAxMDggNTEyUzE2IDQ3MC43MTkgMTYgNDIwVjQxNkMxNiAzOTMuOTA2IDMzLjkwNiAzNzYgNTYgMzc2Uzk2IDM5My45MDYgOTYgNDE2VjQyMEM5NiA0MjYuNjI1IDEwMS4zOTEgNDMyIDEwOCA0MzJTMTIwIDQyNi42MjUgMTIwIDQyMFY5MkMxMjAgNDEuMjgxIDE2MS4yNjYgMCAyMTIgMFMzMDQgNDEuMjgxIDMwNCA5MloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Integral(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M304 92V96C304 118.094 286.094 136 264 136S224 118.094 224 96V92C224 85.375 218.609 80 212 80S200 85.375 200 92V420C200 470.719 158.734 512 108 512S16 470.719 16 420V416C16 393.906 33.906 376 56 376S96 393.906 96 416V420C96 426.625 101.391 432 108 432S120 426.625 120 420V92C120 41.281 161.266 0 212 0S304 41.281 304 92Z" />
        </Icon>
    </>
}