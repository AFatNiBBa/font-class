
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `file-arrow-down` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-down?s=light file-arrow-down}
 * @preview ![file-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU2IDEyNS4yNTRMMjU4Ljc0NiAxOC43NDZDMjQ2Ljc0NCA2Ljc0MiAyMzAuNDY1IDAgMjEzLjQ5IDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDMyMEMzNTUuMzQ4IDUxMiAzODQgNDgzLjM0NiAzODQgNDQ4VjE3MC41MUMzODQgMTUzLjUzNSAzNzcuMjU4IDEzNy4yNTggMzY1LjI1NiAxMjUuMjU0Wk0yMjQgMzQuMDc2QzIyOC40NzcgMzUuNjQzIDIzMi42NjYgMzcuOTIyIDIzNi4xMTkgNDEuMzc1TDM0Mi42MjcgMTQ3Ljg3OUMzNDYuMDggMTUxLjMzMiAzNDguMzU3IDE1NS41MjMgMzQ5LjkyNCAxNjBIMjQwQzIzMS4xODggMTYwIDIyNCAxNTIuODI4IDIyNCAxNDRWMzQuMDc2Wk0zNTIgNDQ4QzM1MiA0NjUuNjQ1IDMzNy42NDUgNDgwIDMyMCA0ODBINjRDNDYuMzU1IDQ4MCAzMiA0NjUuNjQ1IDMyIDQ0OFY2NEMzMiA0Ni4zNTUgNDYuMzU1IDMyIDY0IDMySDE5MlYxNDRDMTkyIDE3MC40NjkgMjEzLjUzMSAxOTIgMjQwIDE5MkgzNTJWNDQ4Wk0yMDggMjQwQzIwOCAyMzEuMTU2IDIwMC44NDQgMjI0IDE5MiAyMjRTMTc2IDIzMS4xNTYgMTc2IDI0MFYzNjEuMzc1TDEyMy4zMTIgMzA4LjY4OEMxMjAuMTg4IDMwNS41NjIgMTE2LjA5NCAzMDQgMTEyIDMwNFMxMDMuODEyIDMwNS41NjIgMTAwLjY4OCAzMDguNjg4Qzk0LjQzOCAzMTQuOTM4IDk0LjQzOCAzMjUuMDYzIDEwMC42ODggMzMxLjMxMkwxODAuNjg4IDQxMS4zMTJDMTg2LjkzOCA0MTcuNTYyIDE5Ny4wNjMgNDE3LjU2MiAyMDMuMzEyIDQxMS4zMTJMMjgzLjMxMiAzMzEuMzEyQzI4OS41NjIgMzI1LjA2MiAyODkuNTYyIDMxNC45MzcgMjgzLjMxMiAzMDguNjg4UzI2Ni45MzcgMzAyLjQzOCAyNjAuNjg4IDMwOC42ODhMMjA4IDM2MS4zNzVWMjQwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FileArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM208 240C208 231.156 200.844 224 192 224S176 231.156 176 240V361.375L123.312 308.688C120.188 305.562 116.094 304 112 304S103.812 305.562 100.688 308.688C94.438 314.938 94.438 325.063 100.688 331.312L180.688 411.312C186.938 417.562 197.063 417.562 203.312 411.312L283.312 331.312C289.562 325.062 289.562 314.937 283.312 308.688S266.937 302.438 260.688 308.688L208 361.375V240Z" />
        </Icon>
    </>
}