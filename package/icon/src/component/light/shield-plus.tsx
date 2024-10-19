
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `shield-plus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shield-plus?s=light shield-plus}
 * @preview ![shield-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjYuNSA4My43NUwyNzQuNSAzLjc1QzI2OC42MjUgMS4yNSAyNjIuMzQ0IDAgMjU2LjA2MiAwUzI0My41IDEuMjUgMjM3LjYyNSAzLjc1TDQ1LjYyNSA4My43NUMyNy43NSA5MS4xMjUgMTYgMTA4LjYyNSAxNiAxMjhDMTYgMzg1LjQ1MSAyMDUuNDM0IDUxMiAyNTUuOTM4IDUxMkMzMDUuMTk2IDUxMiA0OTYgMzg3LjM1NyA0OTYgMTI4QzQ5NiAxMDguNjI1IDQ4NC4yNSA5MS4xMjUgNDY2LjUgODMuNzVaTTQ2My44NzUgMTI4LjMxN0M0NjMuODc1IDM1My42NDkgMjk3LjY1NyA0NzkuOTY5IDI1Ni4wNjMgNDc5Ljk2OUMyMTMuMyA0NzkuOTY5IDQ4IDM1Mi4yNDIgNDggMTI4QzQ4IDEyMS41IDUxLjg3NSAxMTUuNzUgNTcuNzUgMTEzLjI1TDI0OS43NSAzMy4yNUMyNTEuNzIzIDMyLjQyMiAyNTMuODU5IDMxLjk4NCAyNTYuMDA4IDMxLjk4NEMyNTguMDc5IDMxLjk4NCAyNjAuMTYyIDMyLjM5MSAyNjIuMTI1IDMzLjI1TDQ1NC4xMjUgMTEzLjI1QzQ2My4yNzIgMTE3LjA2MSA0NjMuODc1IDEyNS44NDggNDYzLjg3NSAxMjguMzE3Wk0zMzYuMDAyIDI0MEgyNzEuOTk4VjE3NkMyNzEuOTk4IDE2Ny4xNiAyNjQuODM4IDE2MCAyNTYgMTYwUzI0MC4wMDIgMTY3LjE2IDI0MC4wMDIgMTc2VjI0MEgxNzUuOTk4QzE2Ny4xNiAyNDAgMTYwIDI0Ny4xNjQgMTYwIDI1NlMxNjcuMTU0IDI3MiAxNzUuOTk4IDI3MkgyNDAuMDAyVjMzNkMyNDAuMDAyIDM0NC44MzYgMjQ3LjE1NiAzNTIgMjU2IDM1MkMyNjQuODM4IDM1MiAyNzEuOTk4IDM0NC44NCAyNzEuOTk4IDMzNlYyNzJIMzM2LjAwMkMzNDQuODQgMjcyIDM1MiAyNjQuODM2IDM1MiAyNTZTMzQ0Ljg0IDI0MCAzMzYuMDAyIDI0MFogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function ShieldPlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M466.5 83.75L274.5 3.75C268.625 1.25 262.344 0 256.062 0S243.5 1.25 237.625 3.75L45.625 83.75C27.75 91.125 16 108.625 16 128C16 385.451 205.434 512 255.938 512C305.196 512 496 387.357 496 128C496 108.625 484.25 91.125 466.5 83.75ZM463.875 128.317C463.875 353.649 297.657 479.969 256.063 479.969C213.3 479.969 48 352.242 48 128C48 121.5 51.875 115.75 57.75 113.25L249.75 33.25C251.723 32.422 253.859 31.984 256.008 31.984C258.079 31.984 260.162 32.391 262.125 33.25L454.125 113.25C463.272 117.061 463.875 125.848 463.875 128.317ZM336.002 240H271.998V176C271.998 167.16 264.838 160 256 160S240.002 167.16 240.002 176V240H175.998C167.16 240 160 247.164 160 256S167.154 272 175.998 272H240.002V336C240.002 344.836 247.156 352 256 352C264.838 352 271.998 344.84 271.998 336V272H336.002C344.84 272 352 264.836 352 256S344.84 240 336.002 240Z " />
        </Icon>
    </>
}