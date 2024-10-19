
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `turntable` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/turntable?s=solid turntable}
 * @preview ![turntable](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMzJINjRDMjguNjI1IDMyIDAgNjAuNjI1IDAgOTZWNDE2QzAgNDUxLjM3NSAyOC42MjUgNDgwIDY0IDQ4MEg1MTJDNTQ3LjM3NSA0ODAgNTc2IDQ1MS4zNzUgNTc2IDQxNlY5NkM1NzYgNjAuNjI1IDU0Ny4zNzUgMzIgNTEyIDMyWk0yMjQgNDE2QzEzNS42MjUgNDE2IDY0IDM0NC4zNzUgNjQgMjU2UzEzNS42MjUgOTYgMjI0IDk2UzM4NCAxNjcuNjI1IDM4NCAyNTZTMzEyLjM3NSA0MTYgMjI0IDQxNlpNNTEyIDI2Ny44NzVDNTEyIDI3Ny43NSA1MDkuNjI1IDI4Ny41IDUwNS4yNSAyOTYuNUw0ODYuMjUgMzM0LjI1QzQ5NC4yNSAzMzguMjUgNDk3LjM3NSAzNDcuODc1IDQ5My41IDM1NS43NUw0NjcuNzUgNDA3LjEyNUM0NjMuODc1IDQxNSA0NTQuMjUgNDE4LjI1IDQ0Ni4yNSA0MTQuMjVMNDE3Ljc1IDQwMEM0MDkuNzUgMzk2IDQwNi42MjUgMzg2LjUgNDEwLjUgMzc4LjVMNDM2LjI1IDMyNy4xMjVDNDQwLjEyNSAzMTkuMjUgNDQ5Ljc1IDMxNiA0NTcuNzUgMzIwTDQ3Ni42MjUgMjgyLjEyNUM0NzguODQ0IDI3Ny42NyA0ODAgMjcyLjc2MiA0ODAgMjY3Ljc4NVYxMTJDNDgwIDEwMy4xOTkgNDg3LjE5OSA5NiA0OTYgOTZTNTEyIDEwMy4xOTkgNTEyIDExMlYyNjcuODc1Wk0yMjQgMjI0QzIwNi4zNzUgMjI0IDE5MiAyMzguMzc1IDE5MiAyNTZTMjA2LjM3NSAyODggMjI0IDI4OFMyNTYgMjczLjYyNSAyNTYgMjU2UzI0MS42MjUgMjI0IDIyNCAyMjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Turntable(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H512C547.375 480 576 451.375 576 416V96C576 60.625 547.375 32 512 32ZM224 416C135.625 416 64 344.375 64 256S135.625 96 224 96S384 167.625 384 256S312.375 416 224 416ZM512 267.875C512 277.75 509.625 287.5 505.25 296.5L486.25 334.25C494.25 338.25 497.375 347.875 493.5 355.75L467.75 407.125C463.875 415 454.25 418.25 446.25 414.25L417.75 400C409.75 396 406.625 386.5 410.5 378.5L436.25 327.125C440.125 319.25 449.75 316 457.75 320L476.625 282.125C478.844 277.67 480 272.762 480 267.785V112C480 103.199 487.199 96 496 96S512 103.199 512 112V267.875ZM224 224C206.375 224 192 238.375 192 256S206.375 288 224 288S256 273.625 256 256S241.625 224 224 224Z" />
        </Icon>
    </>
}