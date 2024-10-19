
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `washing-machine` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/washing-machine?s=solid washing-machine}
 * @preview ![washing-machine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjAuODM2IDI4NC4yNVYyODQuMzc1QzI1MS4yNTQgMjk0LjM3NSAyMzcuOTM4IDMwMCAyMjQgMzAwUzE5Ni43NDYgMjk0LjM3NSAxODcuMTY0IDI4NC4zNzVDMTY3LjEyOSAzMDQuODc1IDEzNC40IDMwNS4yNSAxMTMuODY3IDI4NS4zNzVDMTEyLjc0NiAyOTEuNSAxMTIuMTI1IDI5Ny43NSAxMTIgMzA0QzExMiAzNjUuODc1IDE2Mi4xNSA0MTYgMjI0IDQxNlMzMzYgMzY1Ljg3NSAzMzYgMzA0QzMzNS44NzcgMjk3Ljc1IDMzNS4yNTQgMjkxLjUgMzM0LjEzMyAyODUuMjVDMzEzLjYgMzA1LjI1IDI4MC44NzEgMzA0Ljg3NSAyNjAuODM2IDI4NC4yNVpNMzg0LjAzNSAwSDYzLjk2NUMyOC42MjMgMCAwIDI4LjYyNSAwIDY0VjQ4MEMwIDQ5Ny42MjUgMTQuMzExIDUxMiAzMS45ODIgNTEySDQxNi4wMThDNDMzLjY4OSA1MTIgNDQ4IDQ5Ny42MjUgNDQ4IDQ4MFY2NEM0NDggMjguNjI1IDQxOS4zNzkgMCAzODQuMDM1IDBaTTE4NC4wNjIgNjRDMTk3LjI3NyA2NCAyMDggNzQuNzUgMjA4IDg4UzE5Ny4yNzcgMTEyIDE4NC4wNjIgMTEyQzE3MC43MjMgMTEyIDE2MCAxMDEuMjUgMTYwIDg4UzE3MC43MjMgNjQgMTg0LjA2MiA2NFpNNjQgODhDNjQgNzQuNzUgNzQuODE4IDY0IDg4IDY0QzEwMS4zMDcgNjQgMTEyIDc0Ljc1IDExMiA4OFMxMDEuMzA3IDExMiA4OCAxMTJDNzQuODE4IDExMiA2NCAxMDEuMjUgNjQgODhaTTIyNCA0NDhDMTQ0LjQ4IDQ0OCA4MC4wMTggMzgzLjUgODAuMDE4IDMwNFMxNDQuNDggMTYwIDIyNCAxNjBTMzY3Ljk4MiAyMjQuNSAzNjcuOTgyIDMwNFMzMDMuNTIgNDQ4IDIyNCA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function WashingMachine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M260.836 284.25V284.375C251.254 294.375 237.938 300 224 300S196.746 294.375 187.164 284.375C167.129 304.875 134.4 305.25 113.867 285.375C112.746 291.5 112.125 297.75 112 304C112 365.875 162.15 416 224 416S336 365.875 336 304C335.877 297.75 335.254 291.5 334.133 285.25C313.6 305.25 280.871 304.875 260.836 284.25ZM384.035 0H63.965C28.623 0 0 28.625 0 64V480C0 497.625 14.311 512 31.982 512H416.018C433.689 512 448 497.625 448 480V64C448 28.625 419.379 0 384.035 0ZM184.062 64C197.277 64 208 74.75 208 88S197.277 112 184.062 112C170.723 112 160 101.25 160 88S170.723 64 184.062 64ZM64 88C64 74.75 74.818 64 88 64C101.307 64 112 74.75 112 88S101.307 112 88 112C74.818 112 64 101.25 64 88ZM224 448C144.48 448 80.018 383.5 80.018 304S144.48 160 224 160S367.982 224.5 367.982 304S303.52 448 224 448Z" />
        </Icon>
    </>
}