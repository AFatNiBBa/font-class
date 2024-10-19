
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rss` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rss?s=solid rss}
 * @preview ![rss](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNS41NjYgMTc2LjA3NEMxMi40MTIgMTc1LjM1NSAwLjkxMiAxODUuMjMgMC4wNTMgMTk4LjQ0OVM5LjIyNSAyMjMuMTAyIDIyLjQ0MSAyMjMuOTQ1QzE0My4zOTMgMjMxLjgyIDI0OC4xODcgMzM2LjYwMiAyNTYuMDQ3IDQ1Ny41NjJDMjU2Ljg3NSA0NzAuMjUgMjY3LjQzNiA0ODAgMjc5Ljk2NyA0ODBDMjgwLjQ5OCA0ODAgMjgxLjAyOSA0NzkuOTY5IDI4MS41NjEgNDc5LjkzOEMyOTQuNzc5IDQ3OS4wOTQgMzA0LjgxMSA0NjcuNjU2IDMwMy45NTEgNDU0LjQzOEMyOTQuNTc2IDMxMC4zMiAxNjkuNzA1IDE4NS40MTggMjUuNTY2IDE3Ni4wNzRaTTMyIDMyQzE0LjMyOCAzMiAwIDQ2LjMxMiAwIDY0UzE0LjMyOCA5NiAzMiA5NkMyMjYuMDk0IDk2IDM4NCAyNTMuOTA2IDM4NCA0NDhDMzg0IDQ2NS42ODggMzk4LjMyOCA0ODAgNDE2IDQ4MFM0NDggNDY1LjY4OCA0NDggNDQ4QzQ0OCAyMTguNjI1IDI2MS4zOTEgMzIgMzIgMzJaTTYzLjk5OCAzNTEuODc5QzI4LjYyNSAzNTEuODc5IDAgMzgwLjYyNSAwIDQxNlMyOC42MjUgNDgwIDYzLjk5OCA0ODBTMTI4LjEyMSA0NTEuMzc1IDEyOC4xMjEgNDE2Uzk5LjM3MSAzNTEuODc5IDYzLjk5OCAzNTEuODc5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Rss(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M25.566 176.074C12.412 175.355 0.912 185.23 0.053 198.449S9.225 223.102 22.441 223.945C143.393 231.82 248.187 336.602 256.047 457.562C256.875 470.25 267.436 480 279.967 480C280.498 480 281.029 479.969 281.561 479.938C294.779 479.094 304.811 467.656 303.951 454.438C294.576 310.32 169.705 185.418 25.566 176.074ZM32 32C14.328 32 0 46.312 0 64S14.328 96 32 96C226.094 96 384 253.906 384 448C384 465.688 398.328 480 416 480S448 465.688 448 448C448 218.625 261.391 32 32 32ZM63.998 351.879C28.625 351.879 0 380.625 0 416S28.625 480 63.998 480S128.121 451.375 128.121 416S99.371 351.879 63.998 351.879Z" />
        </Icon>
    </>
}