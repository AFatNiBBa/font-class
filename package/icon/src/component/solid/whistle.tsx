
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `whistle` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/whistle?s=solid whistle}
 * @preview ![whistle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjcuNjU4IDMyNi43NUw0OTEuNDc0IDIyMC44MjhMNDQ4LjAwMSAyNDhMNDE2LjAwMSAyMjRMNDM4LjI3NSAxNzkuNDUzTDMzOS42NTcgMTAyLjc1TDMzOS41MzIgMTAyLjkxQzMwNy4zNjQgNzguNTk0IDI2Ny40MzQgNjQgMjI0LjAwMSA2NEMxODUuMTQ5IDY0IDE0OS4wNTUgNzUuNjI1IDExOC44MzQgOTUuNDY1QzEwNy42NzYgNzYuNzAzIDg3LjQxMiA2NCA2NCA2NEMyOC42NTQgNjQgMCA5Mi42NTIgMCAxMjhDMCAxNTYuNDYxIDE4LjcwNSAxODAuMzA1IDQ0LjM5NyAxODguNjE3QzM2LjUxNCAyMDkuNjEzIDMyIDIzMi4yNTQgMzIgMjU2QzMyIDM2Mi4wMzkgMTE3Ljk2MSA0NDggMjI0LjAwMSA0NDhDMjg3LjY1MyA0NDggMzQzLjkwMyA0MTYuODk4IDM3OC44MzcgMzY5LjE5OUw1MjkuNjg5IDQ0NC42MjVDNTM0LjI1MiA0NDYuOTA2IDUzOS4xMjcgNDQ4IDU0NC4wMDIgNDQ4QzU1Mi4yODMgNDQ4IDU2MC40NyA0NDQuNzgxIDU2Ni42MjcgNDM4LjYyNUw2MzAuNjI3IDM3NC42MjVDNjM3LjEyNyAzNjguMTI1IDY0MC41MDIgMzU5LjE4NyA2MzkuOTM5IDM1MEM2MzkuMzc3IDM0MC44NDQgNjM0LjkwOCAzMzIuMzc1IDYyNy42NTggMzI2Ljc1Wk03OS42NjIgMTI5LjY2OEM3NS45MTggMTMzLjk0MSA3Mi4zODkgMTM4LjM4NyA2OS4wMyAxNDIuOTg0QzY3LjQyNiAxNDMuNTIzIDY1Ljc4MyAxNDQgNjQgMTQ0QzU1LjE3OCAxNDQgNDggMTM2LjgyNCA0OCAxMjhTNTUuMTc4IDExMiA2NCAxMTJTODAgMTE5LjE3NiA4MCAxMjhDODAgMTI4LjU5NCA3OS43MjUgMTI5LjA5NCA3OS42NjIgMTI5LjY2OFpNMjI0LjAwMSAzMjBDMTg4LjY1NSAzMjAgMTYwIDI5MS4zNDQgMTYwIDI1NkMxNjAgMjIwLjY1MiAxODguNjU1IDE5MiAyMjQuMDAxIDE5MlMyODguMDAxIDIyMC42NTIgMjg4LjAwMSAyNTZDMjg4LjAwMSAyOTEuMzQ0IDI1OS4zNDYgMzIwIDIyNC4wMDEgMzIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Whistle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M627.658 326.75L491.474 220.828L448.001 248L416.001 224L438.275 179.453L339.657 102.75L339.532 102.91C307.364 78.594 267.434 64 224.001 64C185.149 64 149.055 75.625 118.834 95.465C107.676 76.703 87.412 64 64 64C28.654 64 0 92.652 0 128C0 156.461 18.705 180.305 44.397 188.617C36.514 209.613 32 232.254 32 256C32 362.039 117.961 448 224.001 448C287.653 448 343.903 416.898 378.837 369.199L529.689 444.625C534.252 446.906 539.127 448 544.002 448C552.283 448 560.47 444.781 566.627 438.625L630.627 374.625C637.127 368.125 640.502 359.187 639.939 350C639.377 340.844 634.908 332.375 627.658 326.75ZM79.662 129.668C75.918 133.941 72.389 138.387 69.03 142.984C67.426 143.523 65.783 144 64 144C55.178 144 48 136.824 48 128S55.178 112 64 112S80 119.176 80 128C80 128.594 79.725 129.094 79.662 129.668ZM224.001 320C188.655 320 160 291.344 160 256C160 220.652 188.655 192 224.001 192S288.001 220.652 288.001 256C288.001 291.344 259.346 320 224.001 320Z" />
        </Icon>
    </>
}