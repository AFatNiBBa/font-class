
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-check` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-check?s=light file-check}
 * @preview ![file-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU2IDEyNS4yNTRMMjU4Ljc0NiAxOC43NDZDMjQ2Ljc0NCA2Ljc0MiAyMzAuNDY1IDAgMjEzLjQ5IDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDMyMEMzNTUuMzQ4IDUxMiAzODQgNDgzLjM0NiAzODQgNDQ4VjE3MC41MUMzODQgMTUzLjUzNSAzNzcuMjU4IDEzNy4yNTggMzY1LjI1NiAxMjUuMjU0Wk0yMjQgMzQuMDc2QzIyOC40NzcgMzUuNjQzIDIzMi42NjYgMzcuOTIyIDIzNi4xMTkgNDEuMzc1TDM0Mi42MjcgMTQ3Ljg3OUMzNDYuMDggMTUxLjMzMiAzNDguMzU3IDE1NS41MjMgMzQ5LjkyNCAxNjBIMjQwQzIzMS4xODggMTYwIDIyNCAxNTIuODI4IDIyNCAxNDRWMzQuMDc2Wk0zNTIgNDQ4QzM1MiA0NjUuNjQ1IDMzNy42NDUgNDgwIDMyMCA0ODBINjRDNDYuMzU1IDQ4MCAzMiA0NjUuNjQ1IDMyIDQ0OFY2NEMzMiA0Ni4zNTUgNDYuMzU1IDMyIDY0IDMySDE5MlYxNDRDMTkyIDE3MC40NjkgMjEzLjUzMSAxOTIgMjQwIDE5MkgzNTJWNDQ4Wk0xMjMuMzEyIDMxOS4zNTlDMTE3LjA2MiAzMTMuMTA5IDEwNi45MzcgMzEzLjEwOSAxMDAuNjg4IDMxOS4zNTlTOTQuNDM4IDMzNS43MzQgMTAwLjY4OCAzNDEuOTg0TDE1NC4wMzEgMzk1LjMxMkMxNTcuMTU2IDM5OC40MzggMTYxLjI1IDQwMCAxNjUuMzQ0IDQwMFMxNzMuNTMxIDM5OC40MzggMTc2LjY1NiAzOTUuMzEyTDI4My4zMTIgMjg4LjY0MUMyODkuNTYyIDI4Mi4zOTEgMjg5LjU2MiAyNzIuMjY2IDI4My4zMTIgMjY2LjAxNlMyNjYuOTM3IDI1OS43NjYgMjYwLjY4OCAyNjYuMDE2TDE2NS4zNDQgMzYxLjM3NUwxMjMuMzEyIDMxOS4zNTlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FileCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM123.312 319.359C117.062 313.109 106.937 313.109 100.688 319.359S94.438 335.734 100.688 341.984L154.031 395.312C157.156 398.438 161.25 400 165.344 400S173.531 398.438 176.656 395.312L283.312 288.641C289.562 282.391 289.562 272.266 283.312 266.016S266.937 259.766 260.688 266.016L165.344 361.375L123.312 319.359Z" />
        </Icon>
    </>
}