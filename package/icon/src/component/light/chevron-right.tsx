
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chevron-right` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-right?s=light chevron-right}
 * @preview ![chevron-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04NS4xNjUgNDc1Ljc1MUM4MS43MjcgNDcyLjYxIDgwLjAwOCA0NjguMzE0IDgwLjAwOCA0NjQuMDAxQzgwLjAwOCA0NjAuMTEgODEuNDE1IDQ1Ni4yMiA4NC4yNTggNDUzLjE0MkwyNjYuMjI3IDI1Ni4wMDFMODQuMjU4IDU4Ljg2Qzc4LjI1OCA1Mi4zNiA3OC42MzMgNDIuMjIgODUuMTY1IDM2LjI1MUM5MS42NjUgMzAuMjUxIDEwMS43NTggMzAuNjU3IDEwNy43NTggMzcuMTQyTDI5OS43NTggMjQ1LjE0MkMzMDUuNDQ2IDI1MS4yOTggMzA1LjQ0NiAyNjAuNzA0IDI5OS43NTggMjY2Ljg2TDEwNy43NTggNDc0Ljg2QzEwMS43NTggNDgxLjM0NSA5MS42NjUgNDgxLjc1MSA4NS4xNjUgNDc1Ljc1MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChevronRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M85.165 475.751C81.727 472.61 80.008 468.314 80.008 464.001C80.008 460.11 81.415 456.22 84.258 453.142L266.227 256.001L84.258 58.86C78.258 52.36 78.633 42.22 85.165 36.251C91.665 30.251 101.758 30.657 107.758 37.142L299.758 245.142C305.446 251.298 305.446 260.704 299.758 266.86L107.758 474.86C101.758 481.345 91.665 481.751 85.165 475.751Z" />
        </Icon>
    </>
}