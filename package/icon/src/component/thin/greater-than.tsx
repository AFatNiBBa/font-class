
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=thin greater-than}
 * @preview ![greater-than](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTUuNTYyIDI0OC44MzlMMzUuNTYyIDg4LjgzNUMzMS43NDkgODYuODk3IDI2Ljg0MyA4OC40MjkgMjQuODQzIDkyLjQyOUMyMi44NzQgOTYuMzY2IDI0LjQ2OCAxMDEuMTc5IDI4LjQzNyAxMDMuMTQ4TDMzNC4xMjQgMjU1Ljk5NkwyOC40MzcgNDA4Ljg0M0MyNC40NjggNDEwLjgxMiAyMi44NzQgNDE1LjYyNSAyNC44NDMgNDE5LjU2MkMyNi4yNDkgNDIyLjM3NSAyOS4wNjIgNDI0IDMxLjk5OSA0MjRDMzMuMjE4IDQyNCAzNC40MzcgNDIzLjcxOSAzNS41NjIgNDIzLjE1NkwzNTUuNTYyIDI2My4xNTJDMzU4LjI4IDI2MS44MDggMzU5Ljk5OSAyNTkuMDI3IDM1OS45OTkgMjU1Ljk5NlMzNTguMjggMjUwLjE4MyAzNTUuNTYyIDI0OC44MzlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function GreaterThan(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M355.562 248.839L35.562 88.835C31.749 86.897 26.843 88.429 24.843 92.429C22.874 96.366 24.468 101.179 28.437 103.148L334.124 255.996L28.437 408.843C24.468 410.812 22.874 415.625 24.843 419.562C26.249 422.375 29.062 424 31.999 424C33.218 424 34.437 423.719 35.562 423.156L355.562 263.152C358.28 261.808 359.999 259.027 359.999 255.996S358.28 250.183 355.562 248.839Z" />
        </Icon>
    </>
}