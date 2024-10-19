
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hot-tub-person` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hot-tub-person?s=light hot-tub-person}
 * @preview ![hot-tub-person](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiAxMjhDMTMxLjMzNCAxMjggMTYwIDk5LjMzNCAxNjAgNjRTMTMxLjMzNCAwIDk2IDBDNjAuNjY4IDAgMzIgMjguNjY2IDMyIDY0UzYwLjY2OCAxMjggOTYgMTI4Wk05NiAzMkMxMTMuNjQ1IDMyIDEyOCA0Ni4zNTUgMTI4IDY0UzExMy42NDUgOTYgOTYgOTZTNjQgODEuNjQ1IDY0IDY0Uzc4LjM1NSAzMiA5NiAzMlpNMjgxLjYwOSAxMTAuNzVDMzA1LjI4MSAxMjMuOTA2IDMyMCAxNDguOTA2IDMyMCAxNzZDMzIwIDE4NC44NDQgMzI3LjE1NiAxOTIgMzM2IDE5MlMzNTIgMTg0Ljg0NCAzNTIgMTc2QzM1MiAxMzcuMjk3IDMzMC45ODQgMTAxLjU2MiAyOTQuMzkxIDgxLjI1QzI3MC43MTkgNjguMDk0IDI1NiA0My4wOTQgMjU2IDE2QzI1NiA3LjE1NiAyNDguODQ0IDAgMjQwIDBTMjI0IDcuMTU2IDIyNCAxNkMyMjQgNTQuNzAzIDI0NS4wMTYgOTAuNDM4IDI4MS42MDkgMTEwLjc1Wk00MDkuNjA5IDExMC43NUM0MzMuMjgxIDEyMy45MDYgNDQ4IDE0OC45MDYgNDQ4IDE3NkM0NDggMTg0Ljg0NCA0NTUuMTU2IDE5MiA0NjQgMTkyUzQ4MCAxODQuODQ0IDQ4MCAxNzZDNDgwIDEzNy4yOTcgNDU4Ljk4NCAxMDEuNTYyIDQyMi4zOTEgODEuMjVDMzk4LjcxOSA2OC4wOTQgMzg0IDQzLjA5NCAzODQgMTZDMzg0IDcuMTU2IDM3Ni44NDQgMCAzNjggMFMzNTIgNy4xNTYgMzUyIDE2QzM1MiA1NC43MDMgMzczLjAxNiA5MC40MzggNDA5LjYwOSAxMTAuNzVaTTQ3Ljk5NyAyNDBDNTYuODQxIDI0MCA2My45OTcgMjMyLjg0NCA2My45OTcgMjI0QzYzLjk5NyAyMDYuMzU5IDc4LjM1NyAxOTIgOTUuOTk3IDE5MkgxNDYuN0MxNTIuNDk3IDE5MiAxNTguMiAxOTMuNTc4IDE2My4xNjkgMTk2LjU2MkwyMzEuNzYzIDIzNy43MTlDMjM0LjM0MSAyMzkuMjY2IDIzNy4xODUgMjQwIDIzOS45ODIgMjQwQzI0NS40MTkgMjQwIDI1MC43MTYgMjM3LjIzNCAyNTMuNzE2IDIzMi4yMzRDMjU4LjI2MyAyMjQuNjU2IDI1NS44MSAyMTQuODI4IDI0OC4yMzIgMjEwLjI4MUwxNzkuNjM4IDE2OS4xMjVDMTY5LjcgMTYzLjE1NiAxNTguMzEgMTYwIDE0Ni43IDE2MEg5NS45OTdDNjAuNyAxNjAgMzEuOTk3IDE4OC43MDMgMzEuOTk3IDIyNEMzMS45OTcgMjMyLjg0NCAzOS4xNTQgMjQwIDQ3Ljk5NyAyNDBaTTQ4MCAyNzJIMzJDMTQuMzI2IDI3MiAwIDI4Ni4zMjYgMCAzMDRWNDQ4QzAgNDgzLjM0NiAyOC42NTQgNTEyIDY0IDUxMkg0NDhDNDgzLjM0NiA1MTIgNTEyIDQ4My4zNDYgNTEyIDQ0OFYzMDRDNTEyIDI4Ni40IDQ5Ny42IDI3MiA0ODAgMjcyWk00ODAgNDQ4QzQ4MCA0NjUuNjI1IDQ2NS42MjUgNDgwIDQ0OCA0ODBINjRDNDYuMzc1IDQ4MCAzMiA0NjUuNjI1IDMyIDQ0OFYzMDRINDgwVjQ0OFpNMTEyIDQ0OEMxMjAuODAxIDQ0OCAxMjggNDQwLjc5OSAxMjggNDMyVjM1MkMxMjggMzQzLjE5OSAxMjAuODAxIDMzNiAxMTIgMzM2Uzk2IDM0My4xOTkgOTYgMzUyVjQzMkM5NiA0NDAuNzk5IDEwMy4xOTkgNDQ4IDExMiA0NDhaTTIwOCA0NDhDMjE2LjgwMSA0NDggMjI0IDQ0MC43OTkgMjI0IDQzMlYzNTJDMjI0IDM0My4xOTkgMjE2LjgwMSAzMzYgMjA4IDMzNlMxOTIgMzQzLjE5OSAxOTIgMzUyVjQzMkMxOTIgNDQwLjc5OSAxOTkuMTk5IDQ0OCAyMDggNDQ4Wk00MDAgNDQ4QzQwOC44MDEgNDQ4IDQxNiA0NDAuNzk5IDQxNiA0MzJWMzUyQzQxNiAzNDMuMTk5IDQwOC44MDEgMzM2IDQwMCAzMzZTMzg0IDM0My4xOTkgMzg0IDM1MlY0MzJDMzg0IDQ0MC43OTkgMzkxLjE5OSA0NDggNDAwIDQ0OFpNMzA0IDQ0OEMzMTIuODAxIDQ0OCAzMjAgNDQwLjc5OSAzMjAgNDMyVjM1MkMzMjAgMzQzLjE5OSAzMTIuODAxIDMzNiAzMDQgMzM2UzI4OCAzNDMuMTk5IDI4OCAzNTJWNDMyQzI4OCA0NDAuNzk5IDI5NS4xOTkgNDQ4IDMwNCA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HotTubPerson(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M96 128C131.334 128 160 99.334 160 64S131.334 0 96 0C60.668 0 32 28.666 32 64S60.668 128 96 128ZM96 32C113.645 32 128 46.355 128 64S113.645 96 96 96S64 81.645 64 64S78.355 32 96 32ZM281.609 110.75C305.281 123.906 320 148.906 320 176C320 184.844 327.156 192 336 192S352 184.844 352 176C352 137.297 330.984 101.562 294.391 81.25C270.719 68.094 256 43.094 256 16C256 7.156 248.844 0 240 0S224 7.156 224 16C224 54.703 245.016 90.438 281.609 110.75ZM409.609 110.75C433.281 123.906 448 148.906 448 176C448 184.844 455.156 192 464 192S480 184.844 480 176C480 137.297 458.984 101.562 422.391 81.25C398.719 68.094 384 43.094 384 16C384 7.156 376.844 0 368 0S352 7.156 352 16C352 54.703 373.016 90.438 409.609 110.75ZM47.997 240C56.841 240 63.997 232.844 63.997 224C63.997 206.359 78.357 192 95.997 192H146.7C152.497 192 158.2 193.578 163.169 196.562L231.763 237.719C234.341 239.266 237.185 240 239.982 240C245.419 240 250.716 237.234 253.716 232.234C258.263 224.656 255.81 214.828 248.232 210.281L179.638 169.125C169.7 163.156 158.31 160 146.7 160H95.997C60.7 160 31.997 188.703 31.997 224C31.997 232.844 39.154 240 47.997 240ZM480 272H32C14.326 272 0 286.326 0 304V448C0 483.346 28.654 512 64 512H448C483.346 512 512 483.346 512 448V304C512 286.4 497.6 272 480 272ZM480 448C480 465.625 465.625 480 448 480H64C46.375 480 32 465.625 32 448V304H480V448ZM112 448C120.801 448 128 440.799 128 432V352C128 343.199 120.801 336 112 336S96 343.199 96 352V432C96 440.799 103.199 448 112 448ZM208 448C216.801 448 224 440.799 224 432V352C224 343.199 216.801 336 208 336S192 343.199 192 352V432C192 440.799 199.199 448 208 448ZM400 448C408.801 448 416 440.799 416 432V352C416 343.199 408.801 336 400 336S384 343.199 384 352V432C384 440.799 391.199 448 400 448ZM304 448C312.801 448 320 440.799 320 432V352C320 343.199 312.801 336 304 336S288 343.199 288 352V432C288 440.799 295.199 448 304 448Z" />
        </Icon>
    </>
}