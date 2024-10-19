
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `blender` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/blender?s=regular blender}
 * @preview ![blender](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjUuODc1IDMzMEw1MTIgMEg0OEMyMS41IDAgMCAyMS41IDAgNDhWMjA4QzAgMjM0LjUgMjEuNSAyNTYgNDggMjU2SDE1MC4yNUwxNTYuMzc1IDMyN0MxMjEgMzQxLjEyNSA5NiAzNzUuNjI1IDk2IDQxNlY0ODBDOTYgNDk3LjYyNSAxMTAuMzc1IDUxMiAxMjggNTEySDQ0OEM0NjUuNjI1IDUxMiA0ODAgNDk3LjYyNSA0ODAgNDgwVjQxNkM0ODAgMzc4LjEyNSA0NTcuODc1IDM0NS42MjUgNDI1Ljg3NSAzMzBaTTQ4IDIwOFY0OEgxMzIuMTI1TDE0Ni4xMjUgMjA4SDQ4Wk00NDkuODc1IDQ4TDQzNy4zNzUgOTZIMzA0QzI5NS4yIDk2IDI4OCAxMDMuMiAyODggMTEyVjExMkMyODggMTIwLjggMjk1LjIgMTI4IDMwNCAxMjhINDI5TDQxMi4yNSAxOTJIMzA0QzI5NS4yIDE5MiAyODggMTk5LjIgMjg4IDIwOFYyMDhDMjg4IDIxNi44IDI5NS4yIDIyNCAzMDQgMjI0SDQwNEwzNzguODc1IDMyMEgyMDRMMTgwLjM3NSA0OEg0NDkuODc1Wk00MzIgNDY0SDE0NFY0MTZDMTQ0IDM4OS41IDE2NS41IDM2OCAxOTIgMzY4SDM4NEM0MTAuNSAzNjggNDMyIDM4OS41IDQzMiA0MTZWNDY0Wk0yODggMzkyQzI3NC43NSAzOTIgMjY0IDQwMi43NSAyNjQgNDE2UzI3NC43NSA0NDAgMjg4IDQ0MFMzMTIgNDI5LjI1IDMxMiA0MTZTMzAxLjI1IDM5MiAyODggMzkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Blender(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M425.875 330L512 0H48C21.5 0 0 21.5 0 48V208C0 234.5 21.5 256 48 256H150.25L156.375 327C121 341.125 96 375.625 96 416V480C96 497.625 110.375 512 128 512H448C465.625 512 480 497.625 480 480V416C480 378.125 457.875 345.625 425.875 330ZM48 208V48H132.125L146.125 208H48ZM449.875 48L437.375 96H304C295.2 96 288 103.2 288 112V112C288 120.8 295.2 128 304 128H429L412.25 192H304C295.2 192 288 199.2 288 208V208C288 216.8 295.2 224 304 224H404L378.875 320H204L180.375 48H449.875ZM432 464H144V416C144 389.5 165.5 368 192 368H384C410.5 368 432 389.5 432 416V464ZM288 392C274.75 392 264 402.75 264 416S274.75 440 288 440S312 429.25 312 416S301.25 392 288 392Z" />
        </Icon>
    </>
}