
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-minus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-minus?s=thin circle-minus}
 * @preview ![circle-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MyAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUzIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0NyAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNiAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODQgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWk0zNzYuMDAyIDI0OEgxMzYuMDAyQzEzMS41OCAyNDggMTI4LjAwMiAyNTEuNTc4IDEyOC4wMDIgMjU2UzEzMS41OCAyNjQgMTM2LjAwMiAyNjRIMzc2LjAwMkMzODAuNDI0IDI2NCAzODQuMDAyIDI2MC40MjIgMzg0LjAwMiAyNTZTMzgwLjQyNCAyNDggMzc2LjAwMiAyNDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM256 480C132.486 480 32 379.516 32 256S132.486 32 256 32S480 132.484 480 256S379.514 480 256 480ZM376.002 248H136.002C131.58 248 128.002 251.578 128.002 256S131.58 264 136.002 264H376.002C380.424 264 384.002 260.422 384.002 256S380.424 248 376.002 248Z" />
        </Icon>
    </>
}