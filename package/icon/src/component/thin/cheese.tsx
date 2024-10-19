
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cheese` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=thin cheese}
 * @preview ![cheese](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTYuODExIDMyLjY2OEMzMTMuNzIxIDMyLjIyMSAzMTAuNjI3IDMyIDMwNy41NTEgMzJDMjkzLjM4MSAzMiAyNzkuNTc0IDM2LjY4NCAyNjguMjI3IDQ1LjUxMkwxMi4yNDQgMjQ2LjM5OEM0LjUxNCAyNTIuNDY1IDAgMjYxLjc0NiAwIDI3MS41NzJWNDMyQzAgNDU4LjUxIDIxLjQ5IDQ4MCA0OCA0ODBINDY0QzQ5MC41MSA0ODAgNTEyIDQ1OC41MSA1MTIgNDMyVjI1NkM1MTIgODIuMjk3IDM3Ny4zMDEgNDEuNDI2IDMxNi44MTEgMzIuNjY4Wk0yNzguMDUxIDU4LjE0MUMyODYuNTggNTEuNTA2IDI5Ni43NzkgNDggMzA3LjU1MSA0OEMzMDkuODY1IDQ4IDMxMi4xOTMgNDguMTY2IDMxNC41MTggNDguNTAyQzM2OS4wODQgNTYuNDAyIDQ5NiA5Mi40MzYgNDk2IDI1NkgyNS45MjZMMjc4LjA1MSA1OC4xNDFaTTQ2NCA0NjRINDhDMzAuMzU1IDQ2NCAxNiA0NDkuNjQ1IDE2IDQzMlYyNzJINDk2VjQzMkM0OTYgNDQ5LjY0NSA0ODEuNjQ1IDQ2NCA0NjQgNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Cheese(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M316.811 32.668C313.721 32.221 310.627 32 307.551 32C293.381 32 279.574 36.684 268.227 45.512L12.244 246.398C4.514 252.465 0 261.746 0 271.572V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V256C512 82.297 377.301 41.426 316.811 32.668ZM278.051 58.141C286.58 51.506 296.779 48 307.551 48C309.865 48 312.193 48.166 314.518 48.502C369.084 56.402 496 92.436 496 256H25.926L278.051 58.141ZM464 464H48C30.355 464 16 449.645 16 432V272H496V432C496 449.645 481.645 464 464 464Z" />
        </Icon>
    </>
}