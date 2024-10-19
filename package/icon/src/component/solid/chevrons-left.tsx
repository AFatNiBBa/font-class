
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-left?s=solid chevrons-left}
 * @preview ![chevrons-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NS4zNCAyNTZMMjQ0Ljg5NSA5OS42NTZDMjYwLjE0NSA4My42ODggMjU5LjY0NSA1OC4zNTkgMjQzLjY0NSA0My4wOTRDMjI3LjY3OCAyNy44MjggMjAyLjM2NSAyOC4zOTEgMTg3LjA4NiA0NC4zNDRMMTEuMDk0IDIyOC4zNDRDMy42ODggMjM2LjA3OCAwIDI0Ni4wNDcgMCAyNTZTMy42ODggMjc1LjkyMiAxMS4wOTQgMjgzLjY1NkwxODcuMDg2IDQ2Ny42NTZDMjAyLjM2NSA0ODMuNjA5IDIyNy42NzggNDg0LjE3MiAyNDMuNjQ1IDQ2OC45MDZDMjU5LjYxMyA0NTMuNjQxIDI2MC4xNDUgNDI4LjMxMiAyNDQuODk1IDQxMi4zNDRMOTUuMzQgMjU2Wk0yODcuMzMgMjU2TDQzNi44ODcgOTkuNjU2QzQ1Mi4xMzUgODMuNjg4IDQ1MS42NjYgNTguMzU5IDQzNS42MzcgNDMuMDk0QzQxOS42NjggMjcuODI4IDM5NC4zNTcgMjguMzkxIDM3OS4wNzYgNDQuMzQ0TDIwMy4wODQgMjI4LjM0NEMxOTUuNjc4IDIzNi4wNzggMTkxLjk5IDI0Ni4wNDcgMTkxLjk5IDI1NlMxOTUuNjc4IDI3NS45MjIgMjAzLjA4NCAyODMuNjU2TDM3OS4wNzYgNDY3LjY1NkMzOTQuMzU3IDQ4My42MDkgNDE5LjY2OCA0ODQuMTcyIDQzNS42MzcgNDY4LjkwNkM0NTEuNjA0IDQ1My42NDEgNDUyLjE2NiA0MjguMzEyIDQzNi44ODcgNDEyLjM0NEwyODcuMzMgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChevronsLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M95.34 256L244.895 99.656C260.145 83.688 259.645 58.359 243.645 43.094C227.678 27.828 202.365 28.391 187.086 44.344L11.094 228.344C3.688 236.078 0 246.047 0 256S3.688 275.922 11.094 283.656L187.086 467.656C202.365 483.609 227.678 484.172 243.645 468.906C259.613 453.641 260.145 428.312 244.895 412.344L95.34 256ZM287.33 256L436.887 99.656C452.135 83.688 451.666 58.359 435.637 43.094C419.668 27.828 394.357 28.391 379.076 44.344L203.084 228.344C195.678 236.078 191.99 246.047 191.99 256S195.678 275.922 203.084 283.656L379.076 467.656C394.357 483.609 419.668 484.172 435.637 468.906C451.604 453.641 452.166 428.312 436.887 412.344L287.33 256Z" />
        </Icon>
    </>
}