
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lambda` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lambda?s=solid lambda}
 * @preview ![lambda](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNDQwQzQ0OCA0NjIuMDk0IDQzMC4wOTQgNDgwIDQwOCA0ODBIMzI3Ljc1TDE5NS45MzggMjI3LjM1N0w5Mi40NjkgNDU2LjQ2OUM4NS43ODEgNDcxLjI1IDcxLjIxOSA0ODAgNTUuOTY5IDQ4MEM1MC40NjkgNDgwIDQ0Ljg3NSA0NzguODc1IDM5LjUzMSA0NzYuNDY5QzE5LjQwNiA0NjcuMzc1IDEwLjQzNyA0NDMuNjU2IDE5LjUzMSA0MjMuNTMxTDE0OC44NjcgMTM3LjE0MUwxMzUuNzUgMTEySDQwQzE3LjkwNiAxMTIgMCA5NC4wOTQgMCA3MlMxNy45MDYgMzIgNDAgMzJIMTg0LjI1TDM3Ni4yNSA0MDBINDA4QzQzMC4wOTQgNDAwIDQ0OCA0MTcuOTA2IDQ0OCA0NDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Lambda(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 440C448 462.094 430.094 480 408 480H327.75L195.938 227.357L92.469 456.469C85.781 471.25 71.219 480 55.969 480C50.469 480 44.875 478.875 39.531 476.469C19.406 467.375 10.437 443.656 19.531 423.531L148.867 137.141L135.75 112H40C17.906 112 0 94.094 0 72S17.906 32 40 32H184.25L376.25 400H408C430.094 400 448 417.906 448 440Z" />
        </Icon>
    </>
}