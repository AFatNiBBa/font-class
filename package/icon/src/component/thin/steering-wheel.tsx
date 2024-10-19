
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `steering-wheel` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/steering-wheel?s=thin steering-wheel}
 * @preview ![steering-wheel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiAzMkMzNzYuODEyIDMyIDQ3NS4zMzYgMTI4LjIwOSA0NzkuNTk2IDI0OEgzNTEuNjExQzM1MS42NDggMjQ3LjMwMSAzNTIgMjQ2LjY3MiAzNTIgMjQ1Ljk2OVYyMzJDMzUyIDIwOS45MzggMzM0LjA2MiAxOTIgMzEyIDE5MkgyMDBDMTc3LjkzOCAxOTIgMTYwIDIwOS45MzggMTYwIDIzMlYyNDUuOTY5QzE2MCAyNDYuNjcyIDE2MC4zNTIgMjQ3LjMwMSAxNjAuMzg5IDI0OEgzMi40MDRDMzYuNjY0IDEyOC4yMDkgMTM1LjE4OCAzMiAyNTYgMzJaTTI1NiAzNDAuMzQ0TDE4Mi41MzEgMjYyLjQwNkMxNzguMzEyIDI1Ny45MzggMTc2IDI1Mi4wOTQgMTc2IDI0NS45NjlWMjMyQzE3NiAyMTguNzgxIDE4Ni43ODEgMjA4IDIwMCAyMDhIMzEyQzMyNS4yMTkgMjA4IDMzNiAyMTguNzgxIDMzNiAyMzJWMjQ1Ljk2OUMzMzYgMjUyLjA5NCAzMzMuNjg4IDI1Ny45MzcgMzI5LjQ2OSAyNjIuNDA2TDI1NiAzNDAuMzQ0Wk0zMi40MDQgMjY0SDE2NC45MDhDMTY2LjYxMSAyNjcuMzAzIDE2OC4zMDEgMjcwLjYzNyAxNzAuOTA2IDI3My40MDZMMjQ4IDM1NS4xNzJWNDc5LjU5NkMxMzAuODg3IDQ3NS40MzIgMzYuNTY4IDM4MS4xMTMgMzIuNDA0IDI2NFpNMjY0IDQ3OS41OTZWMzU1LjE3MkwzNDEuMDk0IDI3My40MDZDMzQzLjY5OSAyNzAuNjM3IDM0NS4zODkgMjY3LjMwMyAzNDcuMDkyIDI2NEg0NzkuNTk2QzQ3NS40MzIgMzgxLjExMyAzODEuMTEzIDQ3NS40MzIgMjY0IDQ3OS41OTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SteeringWheel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 32C376.812 32 475.336 128.209 479.596 248H351.611C351.648 247.301 352 246.672 352 245.969V232C352 209.938 334.062 192 312 192H200C177.938 192 160 209.938 160 232V245.969C160 246.672 160.352 247.301 160.389 248H32.404C36.664 128.209 135.188 32 256 32ZM256 340.344L182.531 262.406C178.312 257.938 176 252.094 176 245.969V232C176 218.781 186.781 208 200 208H312C325.219 208 336 218.781 336 232V245.969C336 252.094 333.688 257.937 329.469 262.406L256 340.344ZM32.404 264H164.908C166.611 267.303 168.301 270.637 170.906 273.406L248 355.172V479.596C130.887 475.432 36.568 381.113 32.404 264ZM264 479.596V355.172L341.094 273.406C343.699 270.637 345.389 267.303 347.092 264H479.596C475.432 381.113 381.113 475.432 264 479.596Z" />
        </Icon>
    </>
}