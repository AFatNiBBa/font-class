
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bell` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bell?s=light bell}
 * @preview ![bell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzMuMzggMzM0Ljc1QzQwNS4zOCAzMDguMjUgMzg0LjAwNCAyODAuMzc1IDM4NC4wMDQgMTg1Ljg3NUMzODQuMDA0IDEwNi4yNSAzMjAuNjI3IDQxLjM3NSAyNDAgMzMuNVYxNkMyNDAgNy4xMjUgMjMyLjg3NSAwIDIyNCAwUzIwOCA3LjEyNSAyMDggMTZWMzMuNUMxMjcuMzczIDQxLjM3NSA2My45OTYgMTA2LjI1IDYzLjk5NiAxODUuODc1QzYzLjk5NiAyODAuMzc1IDQyLjYxOSAzMDguMjUgMTQuNjE5IDMzNC43NUMwLjYxOSAzNDguMTI1IC0zLjc1NiAzNjguMjUgMy4zNjkgMzg2QzEwLjYxOSA0MDQuMjUgMjguMTE5IDQxNiA0Ny45OTQgNDE2SDQwMC4wMDVDNDE5Ljg4IDQxNiA0MzcuMzggNDA0LjI1IDQ0NC42MyAzODZDNDUxLjc1NSAzNjguMjUgNDQ3LjM4IDM0OC4xMjUgNDMzLjM4IDMzNC43NVpNNDAwLjAwNSAzODRINDcuOTk0QzMzLjc0NCAzODQgMjYuNjE5IDM2Ny41IDM2LjYxOSAzNThDNzEuNDk2IDMyNC43NSA5NS45OTYgMjg3LjYyNSA5NS45OTYgMTg1Ljg3NUM5NS45OTYgMTE4LjUgMTUzLjI0OCA2NCAyMjQgNjRTMzUyLjAwNCAxMTguNSAzNTIuMDA0IDE4NS44NzVDMzUyLjAwNCAyODcuMjUgMzc2LjI1NCAzMjQuNjI1IDQxMS4zOCAzNThDNDIxLjM4IDM2Ny42MjUgNDE0LjEzIDM4NCA0MDAuMDA1IDM4NFpNMjcyLjI5NSA0NDhDMjY0Ljg1NyA0NDggMjU3Ljc4MyA0NTIuMTQ2IDI1NS4yNDQgNDU4Ljg3OUMyNTAuNjAzIDQ3MS4xNzYgMjM4LjMzNCA0ODAgMjIzLjk5NCA0ODBTMTk3LjM4NCA0NzEuMTc2IDE5Mi43NDQgNDU4Ljg3OUMxOTAuMjA1IDQ1Mi4xNDYgMTgzLjEyOSA0NDggMTc1LjY5MyA0NDhIMTc1LjY5MUMxNjUuMDc4IDQ0OCAxNTcuNDggNDU3Ljk5OCAxNjAuNzY1IDQ2Ny43MTdDMTY5LjQzMSA0OTMuMzcxIDE5NC41MjUgNTEyIDIyMy45OTQgNTEyQzI1My40NjEgNTEyIDI3OC41NTQgNDkzLjM3MSAyODcuMjIyIDQ2Ny43MTdDMjkwLjUwNSA0NTcuOTk4IDI4Mi45MSA0NDggMjcyLjI5NSA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Bell(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M433.38 334.75C405.38 308.25 384.004 280.375 384.004 185.875C384.004 106.25 320.627 41.375 240 33.5V16C240 7.125 232.875 0 224 0S208 7.125 208 16V33.5C127.373 41.375 63.996 106.25 63.996 185.875C63.996 280.375 42.619 308.25 14.619 334.75C0.619 348.125 -3.756 368.25 3.369 386C10.619 404.25 28.119 416 47.994 416H400.005C419.88 416 437.38 404.25 444.63 386C451.755 368.25 447.38 348.125 433.38 334.75ZM400.005 384H47.994C33.744 384 26.619 367.5 36.619 358C71.496 324.75 95.996 287.625 95.996 185.875C95.996 118.5 153.248 64 224 64S352.004 118.5 352.004 185.875C352.004 287.25 376.254 324.625 411.38 358C421.38 367.625 414.13 384 400.005 384ZM272.295 448C264.857 448 257.783 452.146 255.244 458.879C250.603 471.176 238.334 480 223.994 480S197.384 471.176 192.744 458.879C190.205 452.146 183.129 448 175.693 448H175.691C165.078 448 157.48 457.998 160.765 467.717C169.431 493.371 194.525 512 223.994 512C253.461 512 278.554 493.371 287.222 467.717C290.505 457.998 282.91 448 272.295 448Z" />
        </Icon>
    </>
}