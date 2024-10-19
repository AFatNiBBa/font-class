
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `candle-holder` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/candle-holder?s=light candle-holder}
 * @preview ![candle-holder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMTkyQzIwNS44NzUgMTkyIDIzOCAxNTkuMzc1IDIzOCAxMTIuNzVDMjM4IDgyLjc1IDIwNS4zNzUgMzcuODc1IDE2MCAwQzExNC4zNzUgMzggODIgODIuODc1IDgyIDExMi43NUM4MiAxNTkuMzc1IDExNC4xMjUgMTkyIDE2MCAxOTJaTTE2MCA0My4xMjVDMTkxLjUgNzQgMjA2IDEwMS4zNzUgMjA2IDExMi43NUMyMDYgMTQxLjg3NSAxODguMzc1IDE2MCAxNjAgMTYwUzExNCAxNDEuODc1IDExNCAxMTIuNzVDMTE0IDEwMS4zNzUgMTI4LjUgNzQgMTYwIDQzLjEyNVpNMzcxLjAzNSAzODUuMjdDMzQ3LjA5OCAzODkuOTUxIDMyNy4zNCA0MDkuNDY5IDMyMS43NTQgNDMzLjIwOUMzMTcuNjA5IDQ1MC44MTQgMzIxLjE0MyA0NjYuNjQzIDMyOC44NzUgNDgwSDI1NlYyNzJDMjU2IDI0NS42IDIzNC40IDIyNCAyMDggMjI0SDExMkM4NS42IDIyNCA2NCAyNDUuNiA2NCAyNzJWNDgwSDE2QzcuMTk5IDQ4MCAwIDQ4Ny4xOTkgMCA0OTZDMCA1MDQuNzk5IDcuMTQzIDUxMiAxNS45NDEgNTEySDM4MC40ODRDNDEyLjY2NiA1MTIgNDQyLjQ0OSA0ODkuODExIDQ0Ny4yNDYgNDU3Ljk4NkM0NTMuOTAyIDQxMy44MDkgNDE1LjUwNCAzNzYuNTc0IDM3MS4wMzUgMzg1LjI3Wk0yMjQgNDgwSDk2VjI3MkM5NiAyNjMuMTYyIDEwMy4xNjQgMjU2IDExMiAyNTZIMTI4VjMwNEMxMjggMzEyLjg3NSAxMzUuMTI1IDMyMCAxNDQgMzIwUzE2MCAzMTIuODc1IDE2MCAzMDRWMjU2SDIwOEMyMTYuODM2IDI1NiAyMjQgMjYzLjE2MiAyMjQgMjcyVjQ4MFpNMzg0IDQ4MEMzNjYuMzc1IDQ4MCAzNTIgNDY1LjYyNSAzNTIgNDQ4UzM2Ni4zNzUgNDE2IDM4NCA0MTZTNDE2IDQzMC4zNzUgNDE2IDQ0OFM0MDEuNjI1IDQ4MCAzODQgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CandleHolder(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M160 192C205.875 192 238 159.375 238 112.75C238 82.75 205.375 37.875 160 0C114.375 38 82 82.875 82 112.75C82 159.375 114.125 192 160 192ZM160 43.125C191.5 74 206 101.375 206 112.75C206 141.875 188.375 160 160 160S114 141.875 114 112.75C114 101.375 128.5 74 160 43.125ZM371.035 385.27C347.098 389.951 327.34 409.469 321.754 433.209C317.609 450.814 321.143 466.643 328.875 480H256V272C256 245.6 234.4 224 208 224H112C85.6 224 64 245.6 64 272V480H16C7.199 480 0 487.199 0 496C0 504.799 7.143 512 15.941 512H380.484C412.666 512 442.449 489.811 447.246 457.986C453.902 413.809 415.504 376.574 371.035 385.27ZM224 480H96V272C96 263.162 103.164 256 112 256H128V304C128 312.875 135.125 320 144 320S160 312.875 160 304V256H208C216.836 256 224 263.162 224 272V480ZM384 480C366.375 480 352 465.625 352 448S366.375 416 384 416S416 430.375 416 448S401.625 480 384 480Z" />
        </Icon>
    </>
}