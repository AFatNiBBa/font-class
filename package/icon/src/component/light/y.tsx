
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `y` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/y?s=light y}
 * @preview ![y](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODAuOTA5IDU3LjQ5NEwyMDguMDAzIDI5My4yNzVWNDY0LjAyNUMyMDguMDAzIDQ3Mi44NjkgMjAwLjg0NyA0ODAuMDI1IDE5Mi4wMDMgNDgwLjAyNVMxNzYuMDAzIDQ3Mi44NjkgMTc2LjAwMyA0NjQuMDI1VjI5My4yNzVMMy4wOTcgNTcuNDk0Qy0yLjEyMiA1MC4zNjkgLTAuNTkxIDQwLjMzOCA2LjUzNCAzNS4xMTlDMTMuNTk3IDI5Ljg2OSAyMy42OSAzMS40IDI4LjkwOSAzOC41NTdMMTkyLjAwMyAyNjAuOTYzTDM1NS4wOTcgMzguNTU3QzM2MC4zMTUgMzEuNCAzNzAuNDQgMjkuOTMyIDM3Ny40NzIgMzUuMTE5QzM4NC41OTcgNDAuMzM4IDM4Ni4xMjggNTAuMzY5IDM4MC45MDkgNTcuNDk0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Y(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M380.909 57.494L208.003 293.275V464.025C208.003 472.869 200.847 480.025 192.003 480.025S176.003 472.869 176.003 464.025V293.275L3.097 57.494C-2.122 50.369 -0.591 40.338 6.534 35.119C13.597 29.869 23.69 31.4 28.909 38.557L192.003 260.963L355.097 38.557C360.315 31.4 370.44 29.932 377.472 35.119C384.597 40.338 386.128 50.369 380.909 57.494Z" />
        </Icon>
    </>
}