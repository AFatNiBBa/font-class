
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up?s=light arrow-up}
 * @preview ![arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTEuODQzIDIzNC43NUM0MDguNjg2IDIzOC4yNSA0MDQuMzQzIDI0MCAzOTkuOTk5IDI0MEMzOTYuMTU1IDI0MCAzOTIuMjk2IDIzOC42MjUgMzg5LjIzMyAyMzUuODQ0TDIzOS45OTkgMTAwLjE3MlY0NjRDMjM5Ljk5OSA0NzIuODQ0IDIzMi44NDMgNDgwIDIyMy45OTkgNDgwUzIwNy45OTkgNDcyLjg0NCAyMDcuOTk5IDQ2NFYxMDAuMTcyTDU4Ljc2NCAyMzUuODQ0QzUyLjI0OSAyNDEuNzgxIDQyLjEzOSAyNDEuMzc1IDM2LjE1NSAyMzQuNzVDMzAuMjE4IDIyOC4yMTkgMzAuNzAyIDIxOC4wOTQgMzcuMjMzIDIxMi4xNTZMMjEzLjIzMyA1Mi4xNTZDMjE5LjMyNyA0Ni41OTQgMjI4LjY3MSA0Ni41OTQgMjM0Ljc2NCA1Mi4xNTZMNDEwLjc2NCAyMTIuMTU2QzQxNy4yOTYgMjE4LjA5NCA0MTcuNzggMjI4LjIxOSA0MTEuODQzIDIzNC43NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M411.843 234.75C408.686 238.25 404.343 240 399.999 240C396.155 240 392.296 238.625 389.233 235.844L239.999 100.172V464C239.999 472.844 232.843 480 223.999 480S207.999 472.844 207.999 464V100.172L58.764 235.844C52.249 241.781 42.139 241.375 36.155 234.75C30.218 228.219 30.702 218.094 37.233 212.156L213.233 52.156C219.327 46.594 228.671 46.594 234.764 52.156L410.764 212.156C417.296 218.094 417.78 228.219 411.843 234.75Z" />
        </Icon>
    </>
}