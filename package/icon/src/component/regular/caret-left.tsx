
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `caret-left` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/caret-left?s=regular caret-left}
 * @preview ![caret-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDggMzY4LjAzMlYxNDQuMDI0QzIwOCAxMDEuMzk3IDE1Ni4yNDIgNzkuODk3IDEyNS45ODggMTEwLjE0OEwxMy45NzEgMjIyLjAyN0MtNC42NTcgMjQwLjc3NyAtNC42NTcgMjcxLjI3OCAxMy45NzEgMjkwLjAyOUwxMjUuOTg4IDQwMS45MDhDMTU2LjI0MiA0MzIuMDM0IDIwOCA0MTAuNjU4IDIwOCAzNjguMDMyWk00Ny45NzYgMjU2LjAyOEwxNTkuOTkzIDE0NC4wMjRWMzY4LjAzMkw0Ny45NzYgMjU2LjAyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CaretLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M208 368.032V144.024C208 101.397 156.242 79.897 125.988 110.148L13.971 222.027C-4.657 240.777 -4.657 271.278 13.971 290.029L125.988 401.908C156.242 432.034 208 410.658 208 368.032ZM47.976 256.028L159.993 144.024V368.032L47.976 256.028Z" />
        </Icon>
    </>
}