
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tilde` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tilde?s=light tilde}
 * @preview ![tilde](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMTc2VjI1OS4xMjVDNDQ4IDMxOSAzOTkuNSAzNjcuNjI1IDMzOS43NSAzNjhDMzAyLjYyNSAzNjguMTI1IDI2OC4zNzUgMzQ4IDI0Ny4yNSAzMTcuNjI1TDE3MiAyMDlDMTU0LjEyNSAxODMuMjUgMTIxLjc1IDE3MC4zNzUgODkuOTk5IDE3OC4yNUM1NS4xMjUgMTg3IDMyIDIyMC4yNSAzMiAyNTYuMTI1VjMzNkMzMiAzNDQuNzk5IDI0LjgwMSAzNTIgMTYgMzUyUzAgMzQ0Ljc5OSAwIDMzNlYyNTIuODc1QzAgMTkzIDQ4LjUgMTQ0LjM3NSAxMDguMjUgMTQ0QzE0NS4zNzUgMTQzLjg3NSAxNzkuNjI1IDE2NCAyMDAuNzUgMTk0LjM3NUwyNzYgMzAzQzI5My44NzUgMzI4Ljc1IDMyNi4yNSAzNDEuNjI1IDM1Ny45OTkgMzMzLjc1QzM5Mi44NzUgMzI1IDQxNiAyOTEuNzUgNDE2IDI1NS44NzVWMTc2QzQxNiAxNjcuMTk5IDQyMy4xOTkgMTYwIDQzMiAxNjBTNDQ4IDE2Ny4xOTkgNDQ4IDE3NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Tilde(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 176V259.125C448 319 399.5 367.625 339.75 368C302.625 368.125 268.375 348 247.25 317.625L172 209C154.125 183.25 121.75 170.375 89.999 178.25C55.125 187 32 220.25 32 256.125V336C32 344.799 24.801 352 16 352S0 344.799 0 336V252.875C0 193 48.5 144.375 108.25 144C145.375 143.875 179.625 164 200.75 194.375L276 303C293.875 328.75 326.25 341.625 357.999 333.75C392.875 325 416 291.75 416 255.875V176C416 167.199 423.199 160 432 160S448 167.199 448 176Z" />
        </Icon>
    </>
}