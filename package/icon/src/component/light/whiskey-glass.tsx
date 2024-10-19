
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `whiskey-glass` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/whiskey-glass?s=light whiskey-glass}
 * @preview ![whiskey-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDcuOTU1IDY0SDY0LjA0NUM0NC41NDggNjQgMjkuNjc2IDgxLjI1NSAzMi4zMDEgMTAwLjUxTDg4LjI5IDM5My4xMUM5Mi43ODkgNDI0LjYxOCAxMTkuNzg0IDQ0OCAxNTEuNzc3IDQ0OEgzNjAuNzIzQzM5Mi40NjYgNDQ4IDQxOS41ODYgNDI0LjYxOCA0MjQuMDg1IDM5My4xMUw0NzkuNjk5IDEwMC41MUM0ODIuMzI0IDgxLjI1NSA0NjcuNDUxIDY0IDQ0Ny45NTUgNjRaTTM5Mi4zNDEgMzg4LjYwOEMzOTAuMjE3IDQwNC4zNjMgMzc2LjQ3IDQxNi4xMTYgMzYwLjcyMyA0MTYuMTE2SDE1MS43NzdDMTM1LjkwNSA0MTYuMTE2IDEyMi4yODMgNDA0LjM2MyAxMjAuMDMzIDM4OC4yMzNMOTkuMjg4IDI4OC4wNzFINDEyLjk2MkwzOTIuMzQxIDM4OC42MDhaTTQxNy45NjEgMjU2LjA2M0g5NC4yODlMNjQuMDQ1IDk2LjAwOUg0NDcuOTU1TDQxNy45NjEgMjU2LjA2M1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WhiskeyGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M447.955 64H64.045C44.548 64 29.676 81.255 32.301 100.51L88.29 393.11C92.789 424.618 119.784 448 151.777 448H360.723C392.466 448 419.586 424.618 424.085 393.11L479.699 100.51C482.324 81.255 467.451 64 447.955 64ZM392.341 388.608C390.217 404.363 376.47 416.116 360.723 416.116H151.777C135.905 416.116 122.283 404.363 120.033 388.233L99.288 288.071H412.962L392.341 388.608ZM417.961 256.063H94.289L64.045 96.009H447.955L417.961 256.063Z" />
        </Icon>
    </>
}