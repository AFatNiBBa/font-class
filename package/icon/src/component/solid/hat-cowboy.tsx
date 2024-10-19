
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hat-cowboy` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hat-cowboy?s=solid hat-cowboy}
 * @preview ![hat-cowboy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODkuOTYgMjY0Ljg3NUM0ODAuNDYgMjA3LjUgNDUwLjQ2IDMyIDM5Mi4yMSAzMkMzNzguMjEgMzIgMzY1LjcxIDM3Ljg3NSAzNTUuMjEgNDZDMzM0LjQ2IDYxLjg3NSAzMDUuNTg1IDYxLjg3NSAyODQuNzEgNDZDMjc0LjIxIDM4IDI2MS43MSAzMiAyNDcuNzEgMzJDMTg5LjQ2IDMyIDE1OS40NiAyMDcuNSAxNDkuOTYgMjY0Ljg3NUMxODguNzEgMjc3LjUgMjQzLjcxIDI4OCAzMTkuOTYgMjg4UzQ1MS4yMSAyNzcuNSA0ODkuOTYgMjY0Ljg3NVpNNjMyLjgzNSAyMjcuNzVDNjI2LjcxIDIyMy42MjUgNjE4LjU4NSAyMjQuMjUgNjEzLjA4NSAyMjkuMjVDNjEyLjA4NSAyMzAuMTI1IDUxMS44MzUgMzIwIDMxOS45NiAzMjBDMTI5LjA4NSAzMjAgMjcuNzEgMjMwIDI2LjcxIDIyOS4xMjVDMjEuMjEgMjI0LjI1IDEzLjA4NSAyMjMuNjI1IDcuMDg1IDIyNy43NUMwLjk2IDIzMS44NzUgLTEuNTQgMjM5LjYyNSAwLjk2IDI0Ni41QzEuNzEgMjQ4LjUgNzguMzM1IDQ0OCAzMTkuOTYgNDQ4UzYzOC4yMSAyNDguNSA2MzguOTYgMjQ2LjVDNjQxLjQ2IDIzOS42MjUgNjM4Ljk2IDIzMS44NzUgNjMyLjgzNSAyMjcuNzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HatCowboy(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M489.96 264.875C480.46 207.5 450.46 32 392.21 32C378.21 32 365.71 37.875 355.21 46C334.46 61.875 305.585 61.875 284.71 46C274.21 38 261.71 32 247.71 32C189.46 32 159.46 207.5 149.96 264.875C188.71 277.5 243.71 288 319.96 288S451.21 277.5 489.96 264.875ZM632.835 227.75C626.71 223.625 618.585 224.25 613.085 229.25C612.085 230.125 511.835 320 319.96 320C129.085 320 27.71 230 26.71 229.125C21.21 224.25 13.085 223.625 7.085 227.75C0.96 231.875 -1.54 239.625 0.96 246.5C1.71 248.5 78.335 448 319.96 448S638.21 248.5 638.96 246.5C641.46 239.625 638.96 231.875 632.835 227.75Z" />
        </Icon>
    </>
}