
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bullhorn` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bullhorn?s=duotone bullhorn}
 * @preview ![bullhorn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4MCA0NDhDNDgwIDQ1Ny4yMTkgNDcyLjkwNiA0ODAgNDQ4IDQ4MEM0NDEuODEyIDQ4MCA0MzIuODQ0IDQ3Ni44NDQgNDI4IDQ3Mi45NjlMMzQyLjk2OSA0MDQuOTM3QzMwOC42ODQgMzc3LjUyOSAyNjcuMjY0IDM2MC41NzQgMjI0IDM1NC43MzRWMTI1LjI2NkMyNjcuMjY0IDExOS40MjYgMzA4LjY4OSAxMDIuNDcxIDM0MyA3NS4wNjJMNDI4LjAzMSA3LjAzMUM0MzMuODEyIDIuMzc1IDQ0MC44NzUgMCA0NDggMEM0NzMuMDMxIDAgNDgwIDIzLjI1IDQ4MCAzMlY0NDhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ4MCAxODQuODc1VjI5NS4xMjVDNDk5LjA2MiAyODQuMDMxIDUxMiAyNjMuNjI1IDUxMiAyNDBTNDk5LjA2MiAxOTUuOTY5IDQ4MCAxODQuODc1Wk02NCAxMjhDMjguNjU2IDEyOCAwIDE1Ni42NTYgMCAxOTJWMjg4QzAgMzIzLjM0NCAyOC42NTYgMzUyIDY0IDM1Mkg2Ni41MjlDNTUuNzY2IDQyOS43OTkgMTAxLjA3IDQ5NS4yNjYgMTAzLjM0NCA0OTguNDczQzEwOS40MzggNTA3LjA0MSAxMTguNDY5IDUxMiAxMjggNTEySDE5MkMyMDQuOTM4IDUxMiAyMTYuNjI1IDUwMi45MjIgMjIxLjU2MiA0ODguOTU3QzIyNi41MzEgNDc0Ljk5NCAyMjMuNzgxIDQ1OC45NTMgMjE0LjYyNSA0NDguMjdDMjE0LjE4OCA0NDcuNzYgMTc0LjI1NCAzOTguNTc0IDE4NS45NzkgMzUySDE5MkMyMDIuNzU4IDM1MiAyMTMuMzk4IDM1My4zMDMgMjI0IDM1NC43MzRWMTI1LjI2NkMyMTMuMzk2IDEyNi42OTcgMjAyLjc1OCAxMjggMTkyIDEyOEg2NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Bullhorn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M480 448C480 457.219 472.906 480 448 480C441.812 480 432.844 476.844 428 472.969L342.969 404.937C308.684 377.529 267.264 360.574 224 354.734V125.266C267.264 119.426 308.689 102.471 343 75.062L428.031 7.031C433.812 2.375 440.875 0 448 0C473.031 0 480 23.25 480 32V448Z" />
            <path d="M480 184.875V295.125C499.062 284.031 512 263.625 512 240S499.062 195.969 480 184.875ZM64 128C28.656 128 0 156.656 0 192V288C0 323.344 28.656 352 64 352H66.529C55.766 429.799 101.07 495.266 103.344 498.473C109.438 507.041 118.469 512 128 512H192C204.938 512 216.625 502.922 221.562 488.957C226.531 474.994 223.781 458.953 214.625 448.27C214.188 447.76 174.254 398.574 185.979 352H192C202.758 352 213.398 353.303 224 354.734V125.266C213.396 126.697 202.758 128 192 128H64Z" />
        </Icon>
    </>
}