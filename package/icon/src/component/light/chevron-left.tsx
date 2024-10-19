
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chevron-left` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-left?s=light chevron-left}
 * @preview ![chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzQuODU5IDM2LjI1MUMyMzguMjk3IDM5LjM5MiAyNDAuMDE2IDQzLjY4OCAyNDAuMDE2IDQ4LjAwMUMyNDAuMDE2IDUxLjg5MiAyMzguNjA5IDU1Ljc4MiAyMzUuNzY2IDU4Ljg2TDUzLjc5NyAyNTYuMDAxTDIzNS43NjYgNDUzLjE0MkMyNDEuNzY2IDQ1OS42NDIgMjQxLjM5MSA0NjkuNzgyIDIzNC44NTkgNDc1Ljc1MUMyMjguMzU5IDQ4MS43NTEgMjE4LjI2NiA0ODEuMzQ1IDIxMi4yNjYgNDc0Ljg2TDIwLjI2NiAyNjYuODZDMTQuNTc4IDI2MC43MDQgMTQuNTc4IDI1MS4yOTggMjAuMjY2IDI0NS4xNDJMMjEyLjI2NiAzNy4xNDJDMjE4LjI2NiAzMC42NTcgMjI4LjM1OSAzMC4yNTEgMjM0Ljg1OSAzNi4yNTFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChevronLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M234.859 36.251C238.297 39.392 240.016 43.688 240.016 48.001C240.016 51.892 238.609 55.782 235.766 58.86L53.797 256.001L235.766 453.142C241.766 459.642 241.391 469.782 234.859 475.751C228.359 481.751 218.266 481.345 212.266 474.86L20.266 266.86C14.578 260.704 14.578 251.298 20.266 245.142L212.266 37.142C218.266 30.657 228.359 30.251 234.859 36.251Z" />
        </Icon>
    </>
}