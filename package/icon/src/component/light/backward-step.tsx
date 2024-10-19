
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `backward-step` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/backward-step?s=light backward-step}
 * @preview ![backward-step](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTcuMzc1IDY0QzI1MC42MjUgNjQgMjQzLjk2OSA2Ni4zNDQgMjM4LjQ2OSA3MC44NzVMNjQgMjE0LjE2MlY4MEM2NCA3MS4xNTYgNTYuODQ0IDY0IDQ4IDY0UzMyIDcxLjE1NiAzMiA4MFY0MzJDMzIgNDQwLjg0NCAzOS4xNTYgNDQ4IDQ4IDQ0OFM2NCA0NDAuODQ0IDY0IDQzMlYyOTcuODM4TDIzOC40NjkgNDQxLjEyNUMyNDMuOTY5IDQ0NS42NTYgMjUwLjYyNSA0NDggMjU3LjM3NSA0NDhDMjY3LjcyMyA0NDggMjg4IDQzOS44NzUgMjg4IDQxNS45NjlWOTYuMDMxQzI4OCA3Mi4xMjUgMjY3LjcyMyA2NCAyNTcuMzc1IDY0Wk0yNTYgNDE2LjQwNkw2NC41MjEgMjU2TDI1NiA5NS41OTRWNDE2LjQwNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BackwardStep(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M257.375 64C250.625 64 243.969 66.344 238.469 70.875L64 214.162V80C64 71.156 56.844 64 48 64S32 71.156 32 80V432C32 440.844 39.156 448 48 448S64 440.844 64 432V297.838L238.469 441.125C243.969 445.656 250.625 448 257.375 448C267.723 448 288 439.875 288 415.969V96.031C288 72.125 267.723 64 257.375 64ZM256 416.406L64.521 256L256 95.594V416.406Z" />
        </Icon>
    </>
}