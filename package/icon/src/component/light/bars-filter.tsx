
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bars-filter` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bars-filter?s=light bars-filter}
 * @preview ![bars-filter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiAxMTJINDMyQzQ0MC44NDQgMTEyIDQ0OCAxMDQuODQ0IDQ0OCA5NlM0NDAuODQ0IDgwIDQzMiA4MEgxNkM3LjE1NiA4MCAwIDg3LjE1NiAwIDk2UzcuMTU2IDExMiAxNiAxMTJaTTM2OCAyNDBIODBDNzEuMTU2IDI0MCA2NCAyNDcuMTU2IDY0IDI1NlM3MS4xNTYgMjcyIDgwIDI3MkgzNjhDMzc2Ljg0NCAyNzIgMzg0IDI2NC44NDQgMzg0IDI1NlMzNzYuODQ0IDI0MCAzNjggMjQwWk0yNzIgNDAwSDE3NkMxNjcuMTU2IDQwMCAxNjAgNDA3LjE1NiAxNjAgNDE2UzE2Ny4xNTYgNDMyIDE3NiA0MzJIMjcyQzI4MC44NDQgNDMyIDI4OCA0MjQuODQ0IDI4OCA0MTZTMjgwLjg0NCA0MDAgMjcyIDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BarsFilter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M16 112H432C440.844 112 448 104.844 448 96S440.844 80 432 80H16C7.156 80 0 87.156 0 96S7.156 112 16 112ZM368 240H80C71.156 240 64 247.156 64 256S71.156 272 80 272H368C376.844 272 384 264.844 384 256S376.844 240 368 240ZM272 400H176C167.156 400 160 407.156 160 416S167.156 432 176 432H272C280.844 432 288 424.844 288 416S280.844 400 272 400Z" />
        </Icon>
    </>
}