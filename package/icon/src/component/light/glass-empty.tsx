
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `glass-empty` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/glass-empty?s=light glass-empty}
 * @preview ![glass-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzUuMzI1IDEwLjEyNUMzNjkuMiAzLjYyNSAzNjAuODI5IDAgMzUxLjk1NiAwSDMyLjA0MkMyMy4xNjkgMCAxNC43OTggMy42MjUgOC42NzMgMTAuMTI1QzIuNjc1IDE2LjUgLTAuNDQ4IDI1LjEyNSAwLjA1MiAzNEwzMi4wNDIgNDgyQzMzLjE2NyA0OTguODc1IDQ3LjE2MyA1MTIgNjQuMDM0IDUxMkgzMTkuOTY0QzMzNi44MzUgNTEyIDM1MC44MzEgNDk4Ljg3NSAzNTEuOTU2IDQ4MkwzODMuOTQ3IDM0QzM4NC40NDcgMjUuMTI1IDM4MS4zMjMgMTYuNSAzNzUuMzI1IDEwLjEyNVpNMzE5Ljk2NCA0ODBMNjQuMDM0IDQ3OS43NUwzMi4wNDIgMzJIMzUxLjk1NkwzMTkuOTY0IDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function GlassEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M375.325 10.125C369.2 3.625 360.829 0 351.956 0H32.042C23.169 0 14.798 3.625 8.673 10.125C2.675 16.5 -0.448 25.125 0.052 34L32.042 482C33.167 498.875 47.163 512 64.034 512H319.964C336.835 512 350.831 498.875 351.956 482L383.947 34C384.447 25.125 381.323 16.5 375.325 10.125ZM319.964 480L64.034 479.75L32.042 32H351.956L319.964 480Z" />
        </Icon>
    </>
}