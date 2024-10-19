
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `fill-drip` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fill-drip?s=regular fill-drip}
 * @preview ![fill-drip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDIuNjI1IDIxN0wyOTUgOS4zNzVDMjg5IDMuMzc1IDI4MC43NSAwIDI3Mi4yNSAwQzI2NC4xMjUgMCAyNTUuODc1IDMuMTI1IDI0OS43NSA5LjM3NUwxNjIuNSA5Ni41TDcyLjg5IDcuMDA3QzYzLjUzMSAtMi4zNCA0OC4zNjggLTIuMzM1IDM5LjAxNSA3LjAxOEwzOS4wMTUgNy4wMThDMjkuNjYyIDE2LjM3MSAyOS42NjIgMzEuNTM2IDM5LjAxNSA0MC44ODlMMTI4LjYyNSAxMzAuNUwyOC4xMjUgMjMxQy05LjM3NSAyNjguMzc1IC05LjM3NSAzMjkuMjUgMjguMTI1IDM2Ni43NUwxNDUuMjUgNDgzLjg3NUMxNjQgNTAyLjYyNSAxODguNjI1IDUxMiAyMTMuMTI1IDUxMkMyMzcuNzUgNTEyIDI2Mi4yNSA1MDIuNjI1IDI4MSA0ODMuODc1TDUwMi42MjUgMjYyLjM3NUM1MTUuMTI1IDI0OS43NSA1MTUuMTI1IDIyOS41IDUwMi42MjUgMjE3Wk00MDkgMjg4SDQ5LjM3NUM1MS4zNzUgMjc5LjM3NSA1NS42MjUgMjcxLjM3NSA2MiAyNjQuODc1TDE2Mi41IDE2NC41TDIzMi4zNzUgMjM0LjM3NUMyNDEuNzUgMjQzLjc1IDI1NyAyNDMuNzUgMjY2LjM3NSAyMzQuMzc1UzI3NS43NSAyMDkuNzUgMjY2LjM3NSAyMDAuMzc1TDE5Ni41IDEzMC41TDI3Mi4yNSA1NC42MjVMNDU3LjM3NSAyMzkuNzVMNDA5IDI4OFpNNTI1LjQ0MyAzNDAuMzY1QzUxOS4xMzcgMzMwLjUwOCA1MDQuODYzIDMzMC41MDggNDk4LjU1NyAzNDAuMzY1QzQ3OS43ODcgMzY5LjcwNSA0NDggNDIzLjA2OCA0NDggNDQ4QzQ0OCA0ODMuMzc1IDQ3Ni42MjUgNTEyIDUxMiA1MTJTNTc2IDQ4My4zNzUgNTc2IDQ0OEM1NzYgNDIzLjA2OCA1NDQuMjEzIDM2OS43MDUgNTI1LjQ0MyAzNDAuMzY1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FillDrip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M502.625 217L295 9.375C289 3.375 280.75 0 272.25 0C264.125 0 255.875 3.125 249.75 9.375L162.5 96.5L72.89 7.007C63.531 -2.34 48.368 -2.335 39.015 7.018L39.015 7.018C29.662 16.371 29.662 31.536 39.015 40.889L128.625 130.5L28.125 231C-9.375 268.375 -9.375 329.25 28.125 366.75L145.25 483.875C164 502.625 188.625 512 213.125 512C237.75 512 262.25 502.625 281 483.875L502.625 262.375C515.125 249.75 515.125 229.5 502.625 217ZM409 288H49.375C51.375 279.375 55.625 271.375 62 264.875L162.5 164.5L232.375 234.375C241.75 243.75 257 243.75 266.375 234.375S275.75 209.75 266.375 200.375L196.5 130.5L272.25 54.625L457.375 239.75L409 288ZM525.443 340.365C519.137 330.508 504.863 330.508 498.557 340.365C479.787 369.705 448 423.068 448 448C448 483.375 476.625 512 512 512S576 483.375 576 448C576 423.068 544.213 369.705 525.443 340.365Z" />
        </Icon>
    </>
}