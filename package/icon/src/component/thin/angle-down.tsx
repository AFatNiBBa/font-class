
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angle-down` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-down?s=thin angle-down}
 * @preview ![angle-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTEuOTk5IDM1MkMxODkuOTk5IDM1MiAxODguMDMgMzUxLjI2NiAxODYuNDY4IDM0OS43ODFMMzQuNDcxIDIwNS43NzRDMzEuMjgzIDIwMi43MjcgMzEuMTU4IDE5Ny42NDkgMzQuMjIxIDE5NC40NjFDMzcuMzE0IDE5MS4yNzMgNDIuMzc3IDE5MS4xOCA0NS41MzMgMTk0LjIxMUwxOTEuOTk5IDMzMi45MjFMMzM4LjQ2NyAxOTQuMjA5QzM0MS42ODYgMTkxLjE3OCAzNDYuNzQ4IDE5MS4yNzEgMzQ5Ljc3OSAxOTQuNDU5QzM1Mi44NDIgMTk3LjY0NiAzNTIuNzE3IDIwMi43MjUgMzQ5LjUyOSAyMDUuNzcyTDE5Ny41MyAzNDkuNzgxQzE5NS45NjggMzUxLjI2NiAxOTMuOTk5IDM1MiAxOTEuOTk5IDM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function AngleDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M191.999 352C189.999 352 188.03 351.266 186.468 349.781L34.471 205.774C31.283 202.727 31.158 197.649 34.221 194.461C37.314 191.273 42.377 191.18 45.533 194.211L191.999 332.921L338.467 194.209C341.686 191.178 346.748 191.271 349.779 194.459C352.842 197.646 352.717 202.725 349.529 205.772L197.53 349.781C195.968 351.266 193.999 352 191.999 352Z" />
        </Icon>
    </>
}