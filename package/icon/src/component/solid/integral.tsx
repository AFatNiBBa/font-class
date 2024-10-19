
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `integral` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/integral?s=solid integral}
 * @preview ![integral](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDQgOTJWOTZDMzA0IDExOC4wOTQgMjg2LjA5NCAxMzYgMjY0IDEzNlMyMjQgMTE4LjA5NCAyMjQgOTZWOTJDMjI0IDg1LjM3NSAyMTguNjA5IDgwIDIxMiA4MFMyMDAgODUuMzc1IDIwMCA5MlY0MjBDMjAwIDQ3MC43MTkgMTU4LjczNCA1MTIgMTA4IDUxMlMxNiA0NzAuNzE5IDE2IDQyMFY0MTZDMTYgMzkzLjkwNiAzMy45MDYgMzc2IDU2IDM3NlM5NiAzOTMuOTA2IDk2IDQxNlY0MjBDOTYgNDI2LjYyNSAxMDEuMzkxIDQzMiAxMDggNDMyUzEyMCA0MjYuNjI1IDEyMCA0MjBWOTJDMTIwIDQxLjI4MSAxNjEuMjY2IDAgMjEyIDBTMzA0IDQxLjI4MSAzMDQgOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Integral(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M304 92V96C304 118.094 286.094 136 264 136S224 118.094 224 96V92C224 85.375 218.609 80 212 80S200 85.375 200 92V420C200 470.719 158.734 512 108 512S16 470.719 16 420V416C16 393.906 33.906 376 56 376S96 393.906 96 416V420C96 426.625 101.391 432 108 432S120 426.625 120 420V92C120 41.281 161.266 0 212 0S304 41.281 304 92Z" />
        </Icon>
    </>
}