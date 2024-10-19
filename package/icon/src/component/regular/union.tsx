
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `union` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/union?s=regular union}
 * @preview ![union](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDI4OFY1NkMwIDQyLjc1IDEwLjc1IDMyIDI0IDMyUzQ4IDQyLjc1IDQ4IDU2VjI4OEM0OCAzNjcuNDA2IDExMi41OTQgNDMyIDE5MiA0MzJTMzM2IDM2Ny40MDYgMzM2IDI4OFY1NkMzMzYgNDIuNzUgMzQ2Ljc1IDMyIDM2MCAzMlMzODQgNDIuNzUgMzg0IDU2VjI4OEMzODQgMzkzLjg3NSAyOTcuODc1IDQ4MCAxOTIgNDgwUzAgMzkzLjg3NSAwIDI4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Union(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M0 288V56C0 42.75 10.75 32 24 32S48 42.75 48 56V288C48 367.406 112.594 432 192 432S336 367.406 336 288V56C336 42.75 346.75 32 360 32S384 42.75 384 56V288C384 393.875 297.875 480 192 480S0 393.875 0 288Z" />
        </Icon>
    </>
}