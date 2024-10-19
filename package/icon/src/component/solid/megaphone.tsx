
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `megaphone` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/megaphone?s=solid megaphone}
 * @preview ![megaphone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAxNzZDMTQuMzc1IDE3NiAwIDE5MC4zNzUgMCAyMDhWMzA0QzAgMzIxLjYyNSAxNC4zNzUgMzM2IDMyIDMzNkM0My4zNzUgMzM2IDUyLjg3NSAzMjkuNzUgNTguNjI1IDMyMC43NUwxNjUuNSAzNTMuMTI1QzE2Mi4yNSAzNjIuODc1IDE2MCAzNzMuMTI1IDE2MCAzODRDMTYwIDQzNyAyMDMgNDgwIDI1NiA0ODBDMzAwLjUgNDgwIDMzNy42MjUgNDQ5LjM3NSAzNDguNSA0MDguMjVMNDgwIDQ0OFY2NEw1OC42MjUgMTkxLjI1QzUyLjg3NSAxODIuMjUgNDMuMzc1IDE3NiAzMiAxNzZaTTIxMS4yNSAzNjYuODc1TDMwMi43NSAzOTQuNUMyOTcuOTk5IDQxNS44NzUgMjc4Ljg3NSA0MzIgMjU2IDQzMkMyMjkuNSA0MzIgMjA4IDQxMC41IDIwOCAzODRDMjA4IDM3OCAyMDkuMjUgMzcyLjI1IDIxMS4yNSAzNjYuODc1Wk01NjAgMzJINTI4QzUxOS4xMjUgMzIgNTEyIDM5LjEyNSA1MTIgNDhWNDY0QzUxMiA0NzIuODc1IDUxOS4xMjUgNDgwIDUyOCA0ODBINTYwQzU2OC44NzUgNDgwIDU3NiA0NzIuODc1IDU3NiA0NjRWNDhDNTc2IDM5LjEyNSA1NjguODc1IDMyIDU2MCAzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Megaphone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M32 176C14.375 176 0 190.375 0 208V304C0 321.625 14.375 336 32 336C43.375 336 52.875 329.75 58.625 320.75L165.5 353.125C162.25 362.875 160 373.125 160 384C160 437 203 480 256 480C300.5 480 337.625 449.375 348.5 408.25L480 448V64L58.625 191.25C52.875 182.25 43.375 176 32 176ZM211.25 366.875L302.75 394.5C297.999 415.875 278.875 432 256 432C229.5 432 208 410.5 208 384C208 378 209.25 372.25 211.25 366.875ZM560 32H528C519.125 32 512 39.125 512 48V464C512 472.875 519.125 480 528 480H560C568.875 480 576 472.875 576 464V48C576 39.125 568.875 32 560 32Z" />
        </Icon>
    </>
}