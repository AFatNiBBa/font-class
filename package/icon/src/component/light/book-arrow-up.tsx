
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-arrow-up` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-up?s=light book-arrow-up}
 * @preview ![book-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDcuMzEyIDI1MS4zMTJDMzUwLjQzOCAyNDguMTg4IDM1MiAyNDQuMDk0IDM1MiAyNDBTMzUwLjQzOCAyMzEuODEyIDM0Ny4zMTIgMjI4LjY4OEwyNTEuMzEyIDEzMi42ODhDMjQ1LjA2MiAxMjYuNDM4IDIzNC45MzcgMTI2LjQzOCAyMjguNjg4IDEzMi42ODhMMTMyLjY4OCAyMjguNjg4QzEyNi40MzggMjM0LjkzOCAxMjYuNDM4IDI0NS4wNjMgMTMyLjY4OCAyNTEuMzEyUzE0OS4wNjMgMjU3LjU2MiAxNTUuMzEyIDI1MS4zMTJMMjI0IDE4Mi42MjVWNDk2QzIyNCA1MDQuODQ0IDIzMS4xNTYgNTEyIDI0MCA1MTJTMjU2IDUwNC44NDQgMjU2IDQ5NlYxODIuNjI1TDMyNC42ODggMjUxLjMxMkMzMzAuOTM4IDI1Ny41NjIgMzQxLjA2MiAyNTcuNTYyIDM0Ny4zMTIgMjUxLjMxMlpNNDQ4IDM2OFY0OEM0NDggMjEuNDkgNDI2LjUwOCAwIDQwMCAwSDgwQzM1LjgxNiAwIDAgMzUuODE2IDAgODBWNDQ4QzAgNDgzLjM0NiAyOC42NTYgNTEyIDY0IDUxMkgxNzZDMTg0LjgzNiA1MTIgMTkyIDUwNC44MzYgMTkyIDQ5NkMxOTIgNDg3LjE2MiAxODQuODM2IDQ4MCAxNzYgNDgwSDY1LjgxMkM0OS44NjcgNDgwIDM1LjA0NyA0NjkuMTQ4IDMyLjQ0NSA0NTMuNDE0QzI5LjE0MSA0MzMuMzk1IDQ0LjU4NiA0MTYgNjQgNDE2SDE3NkMxODQuODM2IDQxNiAxOTIgNDA4LjgzNiAxOTIgNDAwQzE5MiAzOTEuMTYyIDE4NC44MzYgMzg0IDE3NiAzODRINjRDNTIuMjg5IDM4NCA0MS40NTMgMzg3LjM4OSAzMiAzOTIuOVY4MEMzMiA1My40OSA1My40OTIgMzIgODAgMzJINDAwQzQwOC44MzYgMzIgNDE2IDM5LjE2MiA0MTYgNDhWMzY4QzQxNiAzNzYuODM2IDQwOC44MzYgMzg0IDQwMCAzODRIMzA0QzI5NS4xNjQgMzg0IDI4OCAzOTEuMTYyIDI4OCA0MDBDMjg4IDQwOC44MzYgMjk1LjE2NCA0MTYgMzA0IDQxNkgzODRWNDgwSDMwNEMyOTUuMTY0IDQ4MCAyODggNDg3LjE2MiAyODggNDk2QzI4OCA1MDQuODM2IDI5NS4xNjQgNTEyIDMwNCA1MTJINDMyQzQ0MC44NDQgNTEyIDQ0OCA1MDQuODQ0IDQ0OCA0OTZTNDQwLjg0NCA0ODAgNDMyIDQ4MEg0MTZWNDEzLjA1M0M0MzQuNTg2IDQwNi40MjYgNDQ4IDM4OC44MzIgNDQ4IDM2OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BookArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M347.312 251.312C350.438 248.188 352 244.094 352 240S350.438 231.812 347.312 228.688L251.312 132.688C245.062 126.438 234.937 126.438 228.688 132.688L132.688 228.688C126.438 234.938 126.438 245.063 132.688 251.312S149.063 257.562 155.312 251.312L224 182.625V496C224 504.844 231.156 512 240 512S256 504.844 256 496V182.625L324.688 251.312C330.938 257.562 341.062 257.562 347.312 251.312ZM448 368V48C448 21.49 426.508 0 400 0H80C35.816 0 0 35.816 0 80V448C0 483.346 28.656 512 64 512H176C184.836 512 192 504.836 192 496C192 487.162 184.836 480 176 480H65.812C49.867 480 35.047 469.148 32.445 453.414C29.141 433.395 44.586 416 64 416H176C184.836 416 192 408.836 192 400C192 391.162 184.836 384 176 384H64C52.289 384 41.453 387.389 32 392.9V80C32 53.49 53.492 32 80 32H400C408.836 32 416 39.162 416 48V368C416 376.836 408.836 384 400 384H304C295.164 384 288 391.162 288 400C288 408.836 295.164 416 304 416H384V480H304C295.164 480 288 487.162 288 496C288 504.836 295.164 512 304 512H432C440.844 512 448 504.844 448 496S440.844 480 432 480H416V413.053C434.586 406.426 448 388.832 448 368Z" />
        </Icon>
    </>
}