
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `less-than` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/less-than?s=solid less-than}
 * @preview ![less-than](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzkuNzczIDQyNS43NDRDMzcyLjA4NiA0NDEuMTExIDM0OS43NjggNDU1LjQ2OSAzMjYuMTAyIDQ0My42NDFMMjIuMTA5IDI5MS43MDlDOC41NjIgMjg0LjkzMiAwIDI3MS4wOTQgMCAyNTUuOTQzQzAgMjQwLjc5NSA4LjU2MiAyMjYuOTU3IDIyLjEwOSAyMjAuMThMMzI2LjEwMiA2OC4yNDZDMzQ1Ljg5OCA1OC4zNDYgMzY5Ljg5OCA2Ni4zNDIgMzc5Ljc3MyA4Ni4xNDVDMzg5LjY0NiAxMDUuODg3IDM4MS42MzEgMTI5LjkwNiAzNjEuODgzIDEzOS43NzdMMTI5LjQzNCAyNTUuOTQzTDM2MS44ODMgMzcyLjExMUMzODEuNjMxIDM4MS45ODIgMzg5LjY0NiA0MDYuMDAyIDM3OS43NzMgNDI1Ljc0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LessThan(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M379.773 425.744C372.086 441.111 349.768 455.469 326.102 443.641L22.109 291.709C8.562 284.932 0 271.094 0 255.943C0 240.795 8.562 226.957 22.109 220.18L326.102 68.246C345.898 58.346 369.898 66.342 379.773 86.145C389.646 105.887 381.631 129.906 361.883 139.777L129.434 255.943L361.883 372.111C381.631 381.982 389.646 406.002 379.773 425.744Z" />
        </Icon>
    </>
}