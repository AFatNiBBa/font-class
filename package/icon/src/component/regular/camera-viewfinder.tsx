
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `camera-viewfinder` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/camera-viewfinder?s=regular camera-viewfinder}
 * @preview ![camera-viewfinder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTIgMTc2VjM1MkMxMTIgMzY5LjY3MiAxMjYuMzI2IDM4NCAxNDQgMzg0SDM2OEMzODUuNjc0IDM4NCA0MDAgMzY5LjY3MiA0MDAgMzUyVjE3NkM0MDAgMTU4LjMyNiAzODUuNjc0IDE0NCAzNjggMTQ0SDMzMkwzMjUuODEyIDEyNy41NjJDMzIyLjMxMiAxMTguMTg4IDMxMy4zNzUgMTEyIDMwMy4zNzUgMTEySDIwOC42MjVDMTk4LjYyNSAxMTIgMTg5LjYyNSAxMTguMTg4IDE4Ni4xMjUgMTI3LjU2MkwxODAgMTQ0SDE0NEMxMjYuMzI2IDE0NCAxMTIgMTU4LjMyNiAxMTIgMTc2Wk0xNjAgMTkySDIxMy4zMzhMMjI0Ljk3OSAxNjAuNzZMMjI1LjI2MiAxNjBIMjg2LjczNEwyODcuMDc4IDE2MC45MUwyOTguNzgxIDE5MkgzNTJWMzM2SDE2MFYxOTJaTTEzNiA0MzJINDhWMzQ0QzQ4IDMzMC43NDUgMzcuMjU1IDMyMCAyNCAzMjBIMjRDMTAuNzQ1IDMyMCAwIDMzMC43NDUgMCAzNDRWNDQ4QzAgNDY1LjY3MyAxNC4zMjcgNDgwIDMyIDQ4MEgxMzZDMTQ5LjI1NSA0ODAgMTYwIDQ2OS4yNTUgMTYwIDQ1NlY0NTZDMTYwIDQ0Mi43NDUgMTQ5LjI1NSA0MzIgMTM2IDQzMlpNMjQgMTkySDI0QzM3LjI1NSAxOTIgNDggMTgxLjI1NSA0OCAxNjhWODBIMTM2QzE0OS4yNTUgODAgMTYwIDY5LjI1NSAxNjAgNTZWNTZDMTYwIDQyLjc0NSAxNDkuMjU1IDMyIDEzNiAzMkgzMkMxNC4zMjcgMzIgMCA0Ni4zMjcgMCA2NFYxNjhDMCAxODEuMjU1IDEwLjc0NSAxOTIgMjQgMTkyWk00ODAgMzJIMzc2QzM2Mi43NDUgMzIgMzUyIDQyLjc0NSAzNTIgNTZWNTZDMzUyIDY5LjI1NSAzNjIuNzQ1IDgwIDM3NiA4MEg0NjRWMTY4QzQ2NCAxODEuMjU1IDQ3NC43NDUgMTkyIDQ4OCAxOTJMNDg4IDE5MkM1MDEuMjU1IDE5MiA1MTIgMTgxLjI1NSA1MTIgMTY4VjY0QzUxMiA0Ni4zMjcgNDk3LjY3MyAzMiA0ODAgMzJaTTQ4OCAzMjBMNDg4IDMyMEM0NzQuNzQ1IDMyMCA0NjQgMzMwLjc0NSA0NjQgMzQ0VjQzMkgzNzZDMzYyLjc0NSA0MzIgMzUyIDQ0Mi43NDUgMzUyIDQ1NlY0NTZDMzUyIDQ2OS4yNTUgMzYyLjc0NSA0ODAgMzc2IDQ4MEg0ODBDNDk3LjY3MyA0ODAgNTEyIDQ2NS42NzMgNTEyIDQ0OFYzNDRDNTEyIDMzMC43NDUgNTAxLjI1NSAzMjAgNDg4IDMyMFpNMjU2IDIyNEMyMzMuOTE4IDIyNCAyMTYgMjQxLjkxNiAyMTYgMjY0QzIxNiAyODYuMDgyIDIzMy45MTggMzA0IDI1NiAzMDRDMjc4LjA4NCAzMDQgMjk2IDI4Ni4wODIgMjk2IDI2NEMyOTYgMjQxLjkxNiAyNzguMDg0IDIyNCAyNTYgMjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CameraViewfinder(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M112 176V352C112 369.672 126.326 384 144 384H368C385.674 384 400 369.672 400 352V176C400 158.326 385.674 144 368 144H332L325.812 127.562C322.312 118.188 313.375 112 303.375 112H208.625C198.625 112 189.625 118.188 186.125 127.562L180 144H144C126.326 144 112 158.326 112 176ZM160 192H213.338L224.979 160.76L225.262 160H286.734L287.078 160.91L298.781 192H352V336H160V192ZM136 432H48V344C48 330.745 37.255 320 24 320H24C10.745 320 0 330.745 0 344V448C0 465.673 14.327 480 32 480H136C149.255 480 160 469.255 160 456V456C160 442.745 149.255 432 136 432ZM24 192H24C37.255 192 48 181.255 48 168V80H136C149.255 80 160 69.255 160 56V56C160 42.745 149.255 32 136 32H32C14.327 32 0 46.327 0 64V168C0 181.255 10.745 192 24 192ZM480 32H376C362.745 32 352 42.745 352 56V56C352 69.255 362.745 80 376 80H464V168C464 181.255 474.745 192 488 192L488 192C501.255 192 512 181.255 512 168V64C512 46.327 497.673 32 480 32ZM488 320L488 320C474.745 320 464 330.745 464 344V432H376C362.745 432 352 442.745 352 456V456C352 469.255 362.745 480 376 480H480C497.673 480 512 465.673 512 448V344C512 330.745 501.255 320 488 320ZM256 224C233.918 224 216 241.916 216 264C216 286.082 233.918 304 256 304C278.084 304 296 286.082 296 264C296 241.916 278.084 224 256 224Z" />
        </Icon>
    </>
}