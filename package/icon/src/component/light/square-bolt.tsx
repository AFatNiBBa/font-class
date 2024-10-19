
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-bolt` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-bolt?s=light square-bolt}
 * @preview ![square-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NCAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDQgNDQ4IDQxNlY5NkM0NDggNjAuNjUyIDQxOS4zNDYgMzIgMzg0IDMyWk00MTYgNDE2QzQxNiA0MzMuNjQ1IDQwMS42NDUgNDQ4IDM4NCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDM4NEM0MDEuNjQ1IDY0IDQxNiA3OC4zNTUgNDE2IDk2VjQxNlpNMzA0IDI0MEgxODMuNzgxTDI4OC40MzggMTM5LjU0N0MyOTQuODEzIDEzMy40MjIgMjk1IDEyMy4yOTcgMjg4Ljg3NSAxMTYuOTIyQzI4Mi43ODEgMTEwLjUxNiAyNzIuNjU2IDExMC4zOTEgMjY2LjI1IDExNi40NTNMMTMyLjkwNiAyNDQuNDUzQzEyOC4yMTkgMjQ4Ljk4NCAxMjYuNzE5IDI1NS45MDYgMTI5LjE1NiAyNjEuOTY5UzEzNy40NjkgMjcyIDE0NCAyNzJIMjY0LjIxOUwxNTkuNTYyIDM3Mi40NTNDMTUzLjE4NyAzNzguNTc4IDE1MyAzODguNzAzIDE1OS4xMjUgMzk1LjA3OEMxNjIuMjUgMzk4LjM1OSAxNjYuNDY5IDQwMCAxNzAuNjU2IDQwMEMxNzQuNjU2IDQwMCAxNzguNjI1IDM5OC41MTYgMTgxLjc1IDM5NS41NDdMMzE1LjA5NCAyNjcuNTQ3QzMxOS43ODEgMjYzLjAxNiAzMjEuMjgxIDI1Ni4wOTQgMzE4Ljg0NCAyNTAuMDMxUzMxMC41MzEgMjQwIDMwNCAyNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareBolt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM304 240H183.781L288.438 139.547C294.813 133.422 295 123.297 288.875 116.922C282.781 110.516 272.656 110.391 266.25 116.453L132.906 244.453C128.219 248.984 126.719 255.906 129.156 261.969S137.469 272 144 272H264.219L159.562 372.453C153.187 378.578 153 388.703 159.125 395.078C162.25 398.359 166.469 400 170.656 400C174.656 400 178.625 398.516 181.75 395.547L315.094 267.547C319.781 263.016 321.281 256.094 318.844 250.031S310.531 240 304 240Z" />
        </Icon>
    </>
}