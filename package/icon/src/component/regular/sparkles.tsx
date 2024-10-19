
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sparkles` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sparkles?s=regular sparkles}
 * @preview ![sparkles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjQuMzc1IDEwMy4xMjVMMzg0IDEyOEw0MDguODc1IDE4Ny42MjVDNDEwLjI1IDE5MC4yNSA0MTMgMTkyIDQxNiAxOTJTNDIxLjc1IDE5MC4yNSA0MjMuMTI1IDE4Ny42MjVMNDQ4IDEyOEw1MDcuNjI1IDEwMy4xMjVDNTEwLjI1IDEwMS43NSA1MTIgOTkgNTEyIDk2UzUxMC4yNSA5MC4yNSA1MDcuNjI1IDg4Ljg3NUw0NDggNjRMNDIzLjEyNSA0LjM3NUM0MjEuNzUgMS43NSA0MTkgMCA0MTYgMFM0MTAuMjUgMS43NSA0MDguODc1IDQuMzc1TDM4NCA2NEwzMjQuMzc1IDg4Ljg3NUMzMjEuNzUgOTAuMjUgMzIwIDkzIDMyMCA5NlMzMjEuNzUgMTAxLjc1IDMyNC4zNzUgMTAzLjEyNVpNNTA3LjYyNSA0MDguODc1TDQ0OCAzODRMNDIzLjEyNSAzMjQuMzc1QzQyMS43NSAzMjEuNzUgNDE5IDMyMCA0MTYgMzIwUzQxMC4yNSAzMjEuNzUgNDA4Ljg3NSAzMjQuMzc1TDM4NCAzODRMMzI0LjM3NSA0MDguODc1QzMyMS43NSA0MTAuMjUgMzIwIDQxMyAzMjAgNDE2UzMyMS43NSA0MjEuNzUgMzI0LjM3NSA0MjMuMTI1TDM4NCA0NDhMNDA4Ljg3NSA1MDcuNjI1QzQxMC4yNSA1MTAuMjUgNDEzIDUxMiA0MTYgNTEyUzQyMS43NSA1MTAuMjUgNDIzLjEyNSA1MDcuNjI1TDQ0OCA0NDhMNTA3LjYyNSA0MjMuMTI1QzUxMC4yNSA0MjEuNzUgNTEyIDQxOSA1MTIgNDE2UzUxMC4yNSA0MTAuMjUgNTA3LjYyNSA0MDguODc1Wk0zODQgMjU2QzM4NCAyNDYuODc1IDM3OC44NzUgMjM4LjYyNSAzNzAuNzUgMjM0LjVMMjY1Ljg3NSAxODIuMTI1TDIxMy41IDc3LjI1QzIwNS4zNzUgNjEgMTc4LjYyNSA2MSAxNzAuNSA3Ny4yNUwxMTguMTI1IDE4Mi4xMjVMMTMuMjUgMjM0LjVDNS4xMjUgMjM4LjYyNSAwIDI0Ni44NzUgMCAyNTZTNS4xMjUgMjczLjM3NSAxMy4yNSAyNzcuNUwxMTguMTI1IDMyOS44NzVMMTcwLjUgNDM0Ljc1QzE3NC42MjUgNDQyLjg3NSAxODIuODc1IDQ0OCAxOTIgNDQ4UzIwOS4zNzUgNDQyLjg3NSAyMTMuNSA0MzQuNzVMMjY1Ljg3NSAzMjkuODc1TDM3MC43NSAyNzcuNUMzNzguODc1IDI3My4zNzUgMzg0IDI2NS4xMjUgMzg0IDI1NlpNMjM3LjI1IDI5MC41QzIzMi42MjUgMjkyLjg3NSAyMjguODc1IDI5Ni42MjUgMjI2LjUgMzAxLjI1TDE5MiAzNzAuMzc1TDE1Ny41IDMwMS4yNUMxNTUuMTI1IDI5Ni42MjUgMTUxLjM3NSAyOTIuODc1IDE0Ni43NSAyOTAuNUw3Ny42MjUgMjU2TDE0Ni43NSAyMjEuNUMxNTEuMzc1IDIxOS4xMjUgMTU1LjEyNSAyMTUuMzc1IDE1Ny41IDIxMC43NUwxOTIgMTQxLjYyNUwyMjYuNSAyMTAuNzVDMjI4Ljg3NSAyMTUuMzc1IDIzMi42MjUgMjE5LjEyNSAyMzcuMjUgMjIxLjVMMzA2LjM3NSAyNTZMMjM3LjI1IDI5MC41WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Sparkles(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M324.375 103.125L384 128L408.875 187.625C410.25 190.25 413 192 416 192S421.75 190.25 423.125 187.625L448 128L507.625 103.125C510.25 101.75 512 99 512 96S510.25 90.25 507.625 88.875L448 64L423.125 4.375C421.75 1.75 419 0 416 0S410.25 1.75 408.875 4.375L384 64L324.375 88.875C321.75 90.25 320 93 320 96S321.75 101.75 324.375 103.125ZM507.625 408.875L448 384L423.125 324.375C421.75 321.75 419 320 416 320S410.25 321.75 408.875 324.375L384 384L324.375 408.875C321.75 410.25 320 413 320 416S321.75 421.75 324.375 423.125L384 448L408.875 507.625C410.25 510.25 413 512 416 512S421.75 510.25 423.125 507.625L448 448L507.625 423.125C510.25 421.75 512 419 512 416S510.25 410.25 507.625 408.875ZM384 256C384 246.875 378.875 238.625 370.75 234.5L265.875 182.125L213.5 77.25C205.375 61 178.625 61 170.5 77.25L118.125 182.125L13.25 234.5C5.125 238.625 0 246.875 0 256S5.125 273.375 13.25 277.5L118.125 329.875L170.5 434.75C174.625 442.875 182.875 448 192 448S209.375 442.875 213.5 434.75L265.875 329.875L370.75 277.5C378.875 273.375 384 265.125 384 256ZM237.25 290.5C232.625 292.875 228.875 296.625 226.5 301.25L192 370.375L157.5 301.25C155.125 296.625 151.375 292.875 146.75 290.5L77.625 256L146.75 221.5C151.375 219.125 155.125 215.375 157.5 210.75L192 141.625L226.5 210.75C228.875 215.375 232.625 219.125 237.25 221.5L306.375 256L237.25 290.5Z" />
        </Icon>
    </>
}