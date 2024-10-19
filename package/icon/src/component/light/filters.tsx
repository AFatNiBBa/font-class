
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `filters` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/filters?s=light filters}
 * @preview ![filters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODguODggMjc1LjYyOUwyNjMuMzY3IDMwNi4zOTVMMjU2IDMxNS4yNzlWNDQwLjYwN0wxOTIgMzk1LjgyVjMxNS4yNzlMMTg0LjYzMiAzMDYuMzk1TDM2LjY5NSAxMjhIMTY4QzE3Ni44MzYgMTI4IDE4NCAxMjAuODM2IDE4NCAxMTJDMTg0IDEwMy4xNjMgMTc2LjgzNiA5NiAxNjggOTZIMjguNjEzQzQuNTYxIDk2IC04LjcxOSAxMjMuMzY1IDYuNDUzIDE0MS42NjJMMTYwIDMyNi44MjJWNDAwQzE2MCA0MDcuODI4IDE2My44MTIgNDE1LjE3MiAxNzAuMjUgNDE5LjY1NkwyNTAuMjUgNDc1LjY0MUMyNTQuNTMzIDQ3OC42MzkgMjU5LjI3NSA0ODAgMjYzLjkwNiA0ODBDMjc2LjMzOSA0ODAgMjg4IDQ3MC4yMDMgMjg4IDQ1NS45ODRWMzI2LjgyMkwzMTMuNTEzIDI5Ni4wNTdDMzE3LjQ3MiAyOTEuMjgzIDMxOC4zMTUgMjg0LjY1IDMxNS42NzcgMjc5LjAzN0MzMTAuNjkgMjY4LjQyNyAyOTYuMzYzIDI2Ni42MDUgMjg4Ljg4IDI3NS42MjlaTTYxMS4zODYgMzJIMjIwLjYxM0MxOTYuNTYgMzIgMTgzLjI4MSA1OS4zNjUgMTk4LjQ1MyA3Ny42NjJMMzUyIDI2Mi44MjJWMzY4QzM1MiAzNzUuODI4IDM1NS44MTIgMzgzLjE3MiAzNjIuMjUgMzg3LjY1Nkw0NDIuMjUgNDQzLjY0MUM0NDYuNTMzIDQ0Ni42MzkgNDUxLjI3NSA0NDggNDU1LjkwNiA0NDhDNDY4LjMzOSA0NDggNDgwIDQzOC4yMDMgNDgwIDQyMy45ODRWMjYyLjgyMkw2MzMuNTQ2IDc3LjY2MkM2NDguNzE4IDU5LjM2NSA2MzUuNDM3IDMyIDYxMS4zODYgMzJaTTQ1NS4zNjcgMjQyLjM5NUw0NDggMjUxLjI3OVY0MDguNjA3TDM4NCAzNjMuODJWMjUxLjI3OUwzNzYuNjMyIDI0Mi4zOTVMMjI4LjY5NSA2NEg2MDMuMzA0TDQ1NS4zNjcgMjQyLjM5NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Filters(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M288.88 275.629L263.367 306.395L256 315.279V440.607L192 395.82V315.279L184.632 306.395L36.695 128H168C176.836 128 184 120.836 184 112C184 103.163 176.836 96 168 96H28.613C4.561 96 -8.719 123.365 6.453 141.662L160 326.822V400C160 407.828 163.812 415.172 170.25 419.656L250.25 475.641C254.533 478.639 259.275 480 263.906 480C276.339 480 288 470.203 288 455.984V326.822L313.513 296.057C317.472 291.283 318.315 284.65 315.677 279.037C310.69 268.427 296.363 266.605 288.88 275.629ZM611.386 32H220.613C196.56 32 183.281 59.365 198.453 77.662L352 262.822V368C352 375.828 355.812 383.172 362.25 387.656L442.25 443.641C446.533 446.639 451.275 448 455.906 448C468.339 448 480 438.203 480 423.984V262.822L633.546 77.662C648.718 59.365 635.437 32 611.386 32ZM455.367 242.395L448 251.279V408.607L384 363.82V251.279L376.632 242.395L228.695 64H603.304L455.367 242.395Z" />
        </Icon>
    </>
}