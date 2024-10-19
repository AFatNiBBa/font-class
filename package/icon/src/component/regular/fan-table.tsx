
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `fan-table` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fan-table?s=regular fan-table}
 * @preview ![fan-table](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTQgMjY2LjI1QzM1OS4xMjUgMjY3LjEyNSAzNjQuMjUgMjY1Ljc1IDM2OC4yNSAyNjIuMzc1QzM3Mi4xMjUgMjU5LjEyNSAzNzQuMzc1IDI1NC4yNSAzNzQuMzc1IDI0OUMzNzQuNSAyMTQuODc1IDM1NC42MjUgMTgzLjg3NSAzMjMuNjI1IDE2OS41UzI1Ni4xMjUgMTYwIDIzMCAxODIuMTI1TDE5NS42MjUgOTAuMjVDMTkzIDgzLjM3NSAxODIuNjI1IDc0LjM3NSAxNzAuNSA4MS4yNUMxNTAuMzc1IDkyLjg3NSAxMzUuNjI1IDExMiAxMjkuNjI1IDEzNC41QzEyMC43NSAxNjcuNjI1IDEzMiAyMjAuNSAxODUgMjM5LjM3NUwxMjIuMzc1IDMxNS41QzExMy42MjUgMzI2LjEyNSAxMjAuNjI1IDMzOCAxMjcuMTI1IDM0MS43NUMxNjkuMTI1IDM2NiAyMjIuNzUgMzUxLjYyNSAyNDYuODc1IDMwOS42MjVDMjU3LjI1IDI5MS42MjUgMjYwLjc1IDI3MC41IDI1Ni44NzUgMjUwLjEyNUwzNTQgMjY2LjI1Wk0yMjQgMjQwQzIxNS4xMjUgMjQwIDIwOCAyMzIuODc1IDIwOCAyMjRTMjE1LjEyNSAyMDggMjI0IDIwOFMyNDAgMjE1LjEyNSAyNDAgMjI0UzIzMi44NzUgMjQwIDIyNCAyNDBaTTM2MCA0NjRIMjQ4VjQ0Ni42MjVDMzYwLjM3NSA0MzQuNzUgNDQ4IDMzOS42MjUgNDQ4IDIyNEM0NDggMTAwLjI1IDM0Ny43NSAwIDIyNCAwUzAgMTAwLjI1IDAgMjI0QzAgMzM5LjYyNSA4Ny42MjUgNDM0Ljc1IDIwMCA0NDYuNjI1VjQ2NEg4OEM3NC43NDYgNDY0IDY0IDQ3NC43NDQgNjQgNDg4QzY0IDUwMS4yNTQgNzQuNzQ2IDUxMiA4OCA1MTJIMzYwQzM3My4yNTQgNTEyIDM4NCA1MDEuMjU0IDM4NCA0ODhDMzg0IDQ3NC43NDQgMzczLjI1NCA0NjQgMzYwIDQ2NFpNNDggMjI0QzQ4IDEyNyAxMjcgNDggMjI0IDQ4UzQwMCAxMjcgNDAwIDIyNFMzMjEgNDAwIDIyNCA0MDBTNDggMzIxIDQ4IDIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FanTable(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M354 266.25C359.125 267.125 364.25 265.75 368.25 262.375C372.125 259.125 374.375 254.25 374.375 249C374.5 214.875 354.625 183.875 323.625 169.5S256.125 160 230 182.125L195.625 90.25C193 83.375 182.625 74.375 170.5 81.25C150.375 92.875 135.625 112 129.625 134.5C120.75 167.625 132 220.5 185 239.375L122.375 315.5C113.625 326.125 120.625 338 127.125 341.75C169.125 366 222.75 351.625 246.875 309.625C257.25 291.625 260.75 270.5 256.875 250.125L354 266.25ZM224 240C215.125 240 208 232.875 208 224S215.125 208 224 208S240 215.125 240 224S232.875 240 224 240ZM360 464H248V446.625C360.375 434.75 448 339.625 448 224C448 100.25 347.75 0 224 0S0 100.25 0 224C0 339.625 87.625 434.75 200 446.625V464H88C74.746 464 64 474.744 64 488C64 501.254 74.746 512 88 512H360C373.254 512 384 501.254 384 488C384 474.744 373.254 464 360 464ZM48 224C48 127 127 48 224 48S400 127 400 224S321 400 224 400S48 321 48 224Z" />
        </Icon>
    </>
}