
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-pen` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-pen?s=regular square-pen}
 * @preview ![square-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTEuMzcxIDE1Mi4yMDFDMzA1LjkwNCAxNDYuNzM0IDI5OC43MzggMTQ0IDI5MS41NzIgMTQ0UzI3Ny4yNDIgMTQ2LjczNCAyNzEuNzczIDE1Mi4yMDNMMTMxLjczNiAyOTIuMjYyQzEyNy45ODggMjk2LjAxIDEyNS4zODEgMzAwLjc0NiAxMjQuMjE5IDMwNS45MTZMMTEyLjE0MSAzNTkuNjIzQzExMS4yNTYgMzY0LjA0NyAxMTQuNjk1IDM2OCAxMTguOTc3IDM2OEMxMTkuNDM2IDM2OCAxMTkuOTAyIDM2Ny45NTUgMTIwLjM3NSAzNjcuODU5QzEyMC4zNzUgMzY3Ljg1OSAxNTcuMzkxIDM2MC4wMDYgMTc0LjA3OCAzNTYuMDc2QzE3OS4xMjcgMzU0Ljg4OSAxODMuNjQ1IDM1Mi4zNDggMTg3LjMxMSAzNDguNjgyQzIwOC44MDMgMzI3LjE4OSAyODkuOTEgMjQ2LjA4IDMyNy44MiAyMDguMTdDMzM4Ljc1NCAxOTcuMjM2IDMzOC43MTMgMTc5LjU0OSAzMjcuNzgxIDE2OC42MTNMMzExLjM3MSAxNTIuMjAxWk0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0OCA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDggMzIgMzg0IDMyWk00MDAgNDE2QzQwMCA0MjQuODIyIDM5Mi44MjIgNDMyIDM4NCA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlY5NkM0OCA4Ny4xNzggNTUuMTc4IDgwIDY0IDgwSDM4NEMzOTIuODIyIDgwIDQwMCA4Ny4xNzggNDAwIDk2VjQxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquarePen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M311.371 152.201C305.904 146.734 298.738 144 291.572 144S277.242 146.734 271.773 152.203L131.736 292.262C127.988 296.01 125.381 300.746 124.219 305.916L112.141 359.623C111.256 364.047 114.695 368 118.977 368C119.436 368 119.902 367.955 120.375 367.859C120.375 367.859 157.391 360.006 174.078 356.076C179.127 354.889 183.645 352.348 187.311 348.682C208.803 327.189 289.91 246.08 327.82 208.17C338.754 197.236 338.713 179.549 327.781 168.613L311.371 152.201ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416Z" />
        </Icon>
    </>
}