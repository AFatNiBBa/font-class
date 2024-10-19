
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `megaport` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/megaport?s=brands megaport}
 * @preview ![megaport](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTQuNSAyMDkuNnY2Ni4ybDMzLjUgMzMuNSAzMy4zLTMzLjN2LTY2LjRsLTMzLjQtMzMuNHpNMjQ4IDhDMTExIDggMCAxMTkgMCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzODUgOCAyNDggOHptMTQ1LjEgNDE0LjRMMzY3IDQ0MS42bC0yNi0xOS4ydi02NS41bC0zMy40LTMzLjQtMzMuNCAzMy40djY1LjVMMjQ4IDQ0MS42bC0yNi4xLTE5LjJ2LTY1LjVsLTMzLjQtMzMuNC0zMy41IDMzLjR2NjUuNWwtMjYuMSAxOS4yLTI2LjEtMTkuMnYtODdsNTkuNS01OS41VjE4OGw1OS41LTU5LjVWNTIuOWwyNi4xLTE5LjJMMjc0IDUyLjl2NzUuNmw1OS41IDU5LjV2ODcuNmw1OS43IDU5Ljd2ODcuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Megaport(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 496 512" {...props}>
            <path d="M214.5 209.6v66.2l33.5 33.5 33.3-33.3v-66.4l-33.4-33.4zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm145.1 414.4L367 441.6l-26-19.2v-65.5l-33.4-33.4-33.4 33.4v65.5L248 441.6l-26.1-19.2v-65.5l-33.4-33.4-33.5 33.4v65.5l-26.1 19.2-26.1-19.2v-87l59.5-59.5V188l59.5-59.5V52.9l26.1-19.2L274 52.9v75.6l59.5 59.5v87.6l59.7 59.7v87.1z" />
        </Icon>
    </>
}