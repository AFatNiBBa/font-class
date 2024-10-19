
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line?s=thin chart-line}
 * @preview ![chart-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMDQgMzIwQzEwNi4wNDcgMzIwIDEwOC4wOTQgMzE5LjIzNCAxMDkuNjU2IDMxNy42NTZMMjE4LjM0NCAyMTEuMzRMMzA4LjY4OCAzMDEuNjY4QzMxMS44MTIgMzA0LjgwOSAzMTYuODc1IDMwNC44MDkgMzIwIDMwMS42NjhMNDc3LjY1NCAxNDEuNjc0QzQ4MC43ODEgMTM4LjU0NyA0ODAuNzgxIDEzMy40NzUgNDc3LjY1NCAxMzAuMzQ2QzQ3NC41MjUgMTI3LjIxOSA0NjkuNDU1IDEyNy4yMTkgNDY2LjMyNiAxMzAuMzQ2TDMxNC4zNDQgMjg0LjY4NEwyMjQgMTk0LjM1NUMyMjAuODc1IDE5MS4yMTUgMjE1LjgxMiAxOTEuMjE1IDIxMi42ODggMTk0LjM1NUw5OC4zNDQgMzA2LjM0NEM5NS4yMDMgMzA5LjQ2OSA5NS4yMDMgMzE0LjUzMSA5OC4zNDQgMzE3LjY1NkM5OS45MDYgMzE5LjIzNCAxMDEuOTIyIDMyMCAxMDQgMzIwWk01MDQgNDY0SDcyQzQxLjEyNSA0NjQgMTYgNDM4Ljg3NSAxNiA0MDhWNDBDMTYgMzUuNTc4IDEyLjQyMiAzMiA4IDMyUzAgMzUuNTc4IDAgNDBWNDA4QzAgNDQ3LjY4OCAzMi4zMTIgNDgwIDcyIDQ4MEg1MDRDNTA4LjQyMiA0ODAgNTEyIDQ3Ni40MjIgNTEyIDQ3MlM1MDguNDIyIDQ2NCA1MDQgNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChartLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M104 320C106.047 320 108.094 319.234 109.656 317.656L218.344 211.34L308.688 301.668C311.812 304.809 316.875 304.809 320 301.668L477.654 141.674C480.781 138.547 480.781 133.475 477.654 130.346C474.525 127.219 469.455 127.219 466.326 130.346L314.344 284.684L224 194.355C220.875 191.215 215.812 191.215 212.688 194.355L98.344 306.344C95.203 309.469 95.203 314.531 98.344 317.656C99.906 319.234 101.922 320 104 320ZM504 464H72C41.125 464 16 438.875 16 408V40C16 35.578 12.422 32 8 32S0 35.578 0 40V408C0 447.688 32.312 480 72 480H504C508.422 480 512 476.422 512 472S508.422 464 504 464Z" />
        </Icon>
    </>
}