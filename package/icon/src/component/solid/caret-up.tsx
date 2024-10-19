
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `caret-up` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/caret-up?s=solid caret-up}
 * @preview ![caret-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05LjM3NSAyNjUuMzc1TDEzNy4zNzUgMTM3LjM3NUMxNDMuNjI1IDEzMS4xMjUgMTUxLjgxMyAxMjggMTYwIDEyOFMxNzYuMzc1IDEzMS4xMjUgMTgyLjYyNSAxMzcuMzc1TDMxMC42MjUgMjY1LjM3NUMzMTkuNzgxIDI3NC41MzEgMzIyLjUxNiAyODguMjgxIDMxNy41NjMgMzAwLjI1UzMwMC45MzggMzIwIDI4OCAzMjBIMzJDMTkuMDYzIDMyMCA3LjM5MSAzMTIuMjE5IDIuNDM4IDMwMC4yNVMwLjIxOSAyNzQuNTMxIDkuMzc1IDI2NS4zNzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CaretUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M9.375 265.375L137.375 137.375C143.625 131.125 151.813 128 160 128S176.375 131.125 182.625 137.375L310.625 265.375C319.781 274.531 322.516 288.281 317.563 300.25S300.938 320 288 320H32C19.063 320 7.391 312.219 2.438 300.25S0.219 274.531 9.375 265.375Z" />
        </Icon>
    </>
}