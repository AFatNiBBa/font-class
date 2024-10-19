
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `caret-right` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/caret-right?s=light caret-right}
 * @preview ![caret-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NCAxMjguMDM5VjM4My45ODhDNjQgNDEyLjM1NyA5OC41IDQyNi43MjkgMTE4LjYyNSA0MDYuNjA4TDI0Ni42MjUgMjc4LjYzNEMyNTkuMTI1IDI2Ni4xMzYgMjU5LjEyNSAyNDUuODkgMjQ2LjYyNSAyMzMuMzkzTDExOC42MjUgMTA1LjQxOUM5OC41IDg1LjI5OCA2NCA5OS41NDUgNjQgMTI4LjAzOVpNMjI0IDI1Ni4wMTNMOTYgMzgzLjk4OFYxMjguMDM5TDIyNCAyNTYuMDEzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CaretRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M64 128.039V383.988C64 412.357 98.5 426.729 118.625 406.608L246.625 278.634C259.125 266.136 259.125 245.89 246.625 233.393L118.625 105.419C98.5 85.298 64 99.545 64 128.039ZM224 256.013L96 383.988V128.039L224 256.013Z" />
        </Icon>
    </>
}