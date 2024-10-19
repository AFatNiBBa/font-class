
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-left?s=thin chevron-left}
 * @preview ![chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTMuOTM0IDM0LjY1MkMyNTUuMzEgMzYuMTgzIDI1NS45ODIgMzguMDkgMjU1Ljk4MiAzOS45OTZDMjU1Ljk4MiA0Mi4xODQgMjU1LjA5MSA0NC4zNzEgMjUzLjM0IDQ1LjkzNEwxOS44MjkgMjU2TDI1My4zNCA0NjYuMDY2QzI1Ni42MjMgNDY4Ljk3MyAyNTYuOTIgNDc0LjA2NyAyNTMuOTM0IDQ3Ny4zNDhDMjUwLjk2NCA0ODAuNjI5IDI0NS45MTUgNDgwLjkxIDI0Mi42MTcgNDc3Ljk0MkwyLjUwOSAyNjEuOTM4Qy0wLjgzNiAyNTguOTM4IC0wLjgzNiAyNTMuMDYyIDIuNTA5IDI1MC4wNjJMMjQyLjYxNyAzNC4wNThDMjQ1LjkxNSAzMS4wOSAyNTAuOTY0IDMxLjM3MSAyNTMuOTM0IDM0LjY1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChevronLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M253.934 34.652C255.31 36.183 255.982 38.09 255.982 39.996C255.982 42.184 255.091 44.371 253.34 45.934L19.829 256L253.34 466.066C256.623 468.973 256.92 474.067 253.934 477.348C250.964 480.629 245.915 480.91 242.617 477.942L2.509 261.938C-0.836 258.938 -0.836 253.062 2.509 250.062L242.617 34.058C245.915 31.09 250.964 31.371 253.934 34.652Z" />
        </Icon>
    </>
}