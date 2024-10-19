
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clock-rotate-left` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clock-rotate-left?s=light clock-rotate-left}
 * @preview ![clock-rotate-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzJDMTc2LjUyOSAzMiAxMDQuMzU5IDczLjg2NyA2NCAxNDEuNTU5VjQ4QzY0IDM5LjE1NiA1Ni44NDQgMzIgNDggMzJTMzIgMzkuMTU2IDMyIDQ4VjE3NkMzMiAxODQuODQ0IDM5LjE1NiAxOTIgNDggMTkySDE3NkMxODQuODQ0IDE5MiAxOTIgMTg0Ljg0NCAxOTIgMTc2UzE4NC44NDQgMTYwIDE3NiAxNjBIOTAuMTU0QzEyNC40OTggMTAwLjcyNyAxODcuMDY0IDY0IDI1NiA2NEMzNjEuODc1IDY0IDQ0OCAxNTAuMTI1IDQ0OCAyNTZTMzYxLjg3NSA0NDggMjU2IDQ0OEMxOTYuNTE2IDQ0OCAxNDEuMzQ0IDQyMS4wOTQgMTA0LjY1NiAzNzQuMTU2Qzk5LjIxOSAzNjcuMTU2IDg5LjE3MiAzNjUuODc1IDgyLjE4OCAzNzEuNDA2Qzc1LjIzNCAzNzYuODQ0IDc0IDM4Ni45MDYgNzkuNDM4IDM5My44NDRDMTIyLjIzNCA0NDguNTk0IDE4Ni41OTQgNDgwIDI1NiA0ODBDMzc5LjUxNiA0ODAgNDgwIDM3OS41IDQ4MCAyNTZTMzc5LjUxNiAzMiAyNTYgMzJaTTI1NiAxMjhDMjQ3LjE1NiAxMjggMjQwIDEzNS4xNTYgMjQwIDE0NFYyNzJDMjQwIDI3Ny4wMzEgMjQyLjM3NSAyODEuNzgxIDI0Ni40MDYgMjg0LjgxMkwzMTAuNDA2IDMzMi44MTJDMzEzLjI4MSAzMzQuOTY5IDMxNi42NDEgMzM2IDMxOS45ODQgMzM2QzMyNC44NTkgMzM2IDMyOS42NTYgMzMzLjc4MSAzMzIuNzk3IDMyOS41OTRDMzM4LjEwOSAzMjIuNTMxIDMzNi42NzIgMzEyLjUgMzI5LjU5NCAzMDcuMTg4TDI3MiAyNjRWMTQ0QzI3MiAxMzUuMTU2IDI2NC44NDQgMTI4IDI1NiAxMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ClockRotateLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 32C176.529 32 104.359 73.867 64 141.559V48C64 39.156 56.844 32 48 32S32 39.156 32 48V176C32 184.844 39.156 192 48 192H176C184.844 192 192 184.844 192 176S184.844 160 176 160H90.154C124.498 100.727 187.064 64 256 64C361.875 64 448 150.125 448 256S361.875 448 256 448C196.516 448 141.344 421.094 104.656 374.156C99.219 367.156 89.172 365.875 82.188 371.406C75.234 376.844 74 386.906 79.438 393.844C122.234 448.594 186.594 480 256 480C379.516 480 480 379.5 480 256S379.516 32 256 32ZM256 128C247.156 128 240 135.156 240 144V272C240 277.031 242.375 281.781 246.406 284.812L310.406 332.812C313.281 334.969 316.641 336 319.984 336C324.859 336 329.656 333.781 332.797 329.594C338.109 322.531 336.672 312.5 329.594 307.188L272 264V144C272 135.156 264.844 128 256 128Z" />
        </Icon>
    </>
}