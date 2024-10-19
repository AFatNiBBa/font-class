
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-right?s=solid chevron-right}
 * @preview ![chevron-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDguOTAyIDIyOC4zNDNMMTMyLjkwNCA0NC4zNDJDMTE3LjYzOCAyOC4zNzMgOTIuMjk1IDI3Ljg0MiA3Ni4zNDIgNDMuMDkyQzYwLjM4OSA1OC4zNzMgNTkuODI2IDgzLjY4NiA3NS4wOTIgOTkuNjU0TDIyNC42MzcgMjU1Ljk5OUw3NS4wOTIgNDEyLjM0M0M1OS44MjYgNDI4LjMxMiA2MC4zODkgNDUzLjYyNSA3Ni4zNDIgNDY4LjkwNkM4NC4wOTIgNDc2LjMxMiA5NC4wNDUgNDgwIDEwMy45OTggNDgwQzExNC41MjkgNDgwIDEyNS4wNDUgNDc1Ljg3NSAxMzIuOTA0IDQ2Ny42NTZMMzA4LjkwMiAyODMuNjU1QzMyMy42OTkgMjY4LjE4NiAzMjMuNjk5IDI0My44MTEgMzA4LjkwMiAyMjguMzQzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChevronRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M308.902 228.343L132.904 44.342C117.638 28.373 92.295 27.842 76.342 43.092C60.389 58.373 59.826 83.686 75.092 99.654L224.637 255.999L75.092 412.343C59.826 428.312 60.389 453.625 76.342 468.906C84.092 476.312 94.045 480 103.998 480C114.529 480 125.045 475.875 132.904 467.656L308.902 283.655C323.699 268.186 323.699 243.811 308.902 228.343Z" />
        </Icon>
    </>
}