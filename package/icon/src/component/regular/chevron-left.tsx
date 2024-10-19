
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-left` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-left?s=regular chevron-left}
 * @preview ![chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDYuNjY4IDQ2NC41OTJMMjIuNjg4IDI3Mi41OTRDMTguMjE5IDI2Ny45NjkgMTYgMjYxLjk2OSAxNiAyNTYuMDAxUzE4LjIxOSAyNDQuMDMyIDIyLjY4OCAyMzkuNDA3TDIwNi42NjggNDcuNDA5QzIxNS44MiAzNy44MTUgMjMxLjAwOCAzNy41MDMgMjQwLjU3IDQ2LjY5QzI1MC4xOTUgNTUuODE1IDI1MC41MDggNzEuMDY1IDI0MS4yODkgODAuNTk2TDczLjI0MiAyNTYuMDAxTDI0MS4yODkgNDMxLjQwNUMyNTAuNTA4IDQ0MC45MDUgMjUwLjE5NSA0NTYuMTg2IDI0MC41NyA0NjUuMzExQzIzMS4wMDggNDc0LjQ5OSAyMTUuODIgNDc0LjE4NiAyMDYuNjY4IDQ2NC41OTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChevronLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M206.668 464.592L22.688 272.594C18.219 267.969 16 261.969 16 256.001S18.219 244.032 22.688 239.407L206.668 47.409C215.82 37.815 231.008 37.503 240.57 46.69C250.195 55.815 250.508 71.065 241.289 80.596L73.242 256.001L241.289 431.405C250.508 440.905 250.195 456.186 240.57 465.311C231.008 474.499 215.82 474.186 206.668 464.592Z" />
        </Icon>
    </>
}