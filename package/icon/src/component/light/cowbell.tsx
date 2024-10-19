
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cowbell` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=light cowbell}
 * @preview ![cowbell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDcuMzMgNDU2LjEyNUwzOTMuOTg4IDEzNi4xMjVDMzkwLjEyOSAxMTIuODc1IDM3MC4yMjUgOTYgMzQ2LjY0NyA5NkgzMjBWNDhDMzIwIDIxLjUzMSAyOTguNDY5IDAgMjcyIDBIMTc2QzE0OS41MzEgMCAxMjggMjEuNTMxIDEyOCA0OFY5NkgxMDEuMzVDNzcuNzczIDk2IDU3Ljg2NyAxMTIuODc1IDU0LjAwOCAxMzYuMTI1TDAuNjY2IDQ1Ni4xMjVDLTQuMjExIDQ4NS4zMTggMTguMzExIDUxMiA0OC4wMjMgNTEySDM5OS45NzNDNDI5LjQxNiA1MTIgNDUyLjI1MiA0ODUuNTg2IDQ0Ny4zMyA0NTYuMTI1Wk0xNjAgNDhDMTYwIDM5LjE4OCAxNjcuMTcyIDMyIDE3NiAzMkgyNzJDMjgwLjgyOCAzMiAyODggMzkuMTg4IDI4OCA0OFY5NkgxNjBWNDhaTTM5OS45NzMgNDgwSDQ4LjAyM0MzNS40MzQgNDgwIDMxLjEwMiA0NjguMTggMzIuMjI5IDQ2MS4zNzVMODUuNTY4IDE0MS4zNzVDODYuODUgMTMzLjYyNSA5My40OSAxMjggMTAxLjM1IDEyOEgzNDYuNjQ3QzM1NC41MDYgMTI4IDM2MS4xNDcgMTMzLjYyNSAzNjIuNDI4IDE0MS4zNzVMNDE1Ljc3IDQ2MS4zNzVDNDE2Ljg5NSA0NjguMTY2IDQxMi42NzQgNDgwIDM5OS45NzMgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Cowbell(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M447.33 456.125L393.988 136.125C390.129 112.875 370.225 96 346.647 96H320V48C320 21.531 298.469 0 272 0H176C149.531 0 128 21.531 128 48V96H101.35C77.773 96 57.867 112.875 54.008 136.125L0.666 456.125C-4.211 485.318 18.311 512 48.023 512H399.973C429.416 512 452.252 485.586 447.33 456.125ZM160 48C160 39.188 167.172 32 176 32H272C280.828 32 288 39.188 288 48V96H160V48ZM399.973 480H48.023C35.434 480 31.102 468.18 32.229 461.375L85.568 141.375C86.85 133.625 93.49 128 101.35 128H346.647C354.506 128 361.147 133.625 362.428 141.375L415.77 461.375C416.895 468.166 412.674 480 399.973 480Z" />
        </Icon>
    </>
}