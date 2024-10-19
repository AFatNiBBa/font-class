
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-heart` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-heart?s=solid circle-heart}
 * @preview ![circle-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTM3OS41IDI4MC4yNUwyNjguODc1IDM5NC41QzI2MS43NSA0MDEuODc1IDI1MC4yNSA0MDEuODc1IDI0MyAzOTQuNUwxMzIuNSAyODAuMjVDMTAwLjM3NSAyNDcuMTI1IDEwMi4yNSAxOTIuMTI1IDEzOC4yNSAxNjEuNUMxNjkuNSAxMzQuNzUgMjE2LjEyNSAxMzkuNjI1IDI0NC43NSAxNjkuMjVMMjU2LjEyNSAxODAuNzVMMjY3LjM3NSAxNjkuMjVDMjk2LjEyNSAxMzkuNjI1IDM0Mi43NSAxMzQuNzUgMzczLjk5OSAxNjEuNUM0MDkuNzUgMTkyLjEyNSA0MTEuNzUgMjQ3LjEyNSAzNzkuNSAyODAuMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleHeart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM379.5 280.25L268.875 394.5C261.75 401.875 250.25 401.875 243 394.5L132.5 280.25C100.375 247.125 102.25 192.125 138.25 161.5C169.5 134.75 216.125 139.625 244.75 169.25L256.125 180.75L267.375 169.25C296.125 139.625 342.75 134.75 373.999 161.5C409.75 192.125 411.75 247.125 379.5 280.25Z" />
        </Icon>
    </>
}