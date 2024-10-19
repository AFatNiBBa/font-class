
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `money-check-pen` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/money-check-pen?s=solid money-check-pen}
 * @preview ![money-check-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01ODUuNTY4IDEzNS41NjJMNTczLjMxNCAxNDcuODE2TDQ0OC4zOTUgMjczLjgyOEM0MzkuNDQ1IDI4Mi44MzQgNDI3LjAzMyAyODggNDE0LjM0IDI4OEgxMTJDMTAzLjE2NCAyODggOTYgMjgwLjgzNiA5NiAyNzJDOTYgMjYzLjE2MiAxMDMuMTY0IDI1NiAxMTIgMjU2SDMyMFYxOTMuNjZDMzIwIDE4MC45NzMgMzI1LjE2NCAxNjguNTYyIDMzNC4xOTkgMTU5LjU3OEwzNjYuMDU1IDEyOEg4MEM1My42IDEyOCAzMiAxNDkuNiAzMiAxNzZWNDY0QzMyIDQ5MC40IDUzLjYgNTEyIDgwIDUxMkg1NjBDNTg2LjQgNTEyIDYwOCA0OTAuNCA2MDggNDY0VjE3NkM2MDggMTU5LjAwNiA1OTguOTg2IDE0NC4wOTggNTg1LjU2OCAxMzUuNTYyWk01MjggMzg0SDExMkMxMDMuMTY0IDM4NCA5NiAzNzYuODM2IDk2IDM2OEM5NiAzNTkuMTYyIDEwMy4xNjQgMzUyIDExMiAzNTJINTI4QzUzNi44MzggMzUyIDU0NCAzNTkuMTYyIDU0NCAzNjhDNTQ0IDM3Ni44MzYgNTM2LjgzOCAzODQgNTI4IDM4NFpNNjAwLjUgNzUuMzc1QzYxMC41IDY1LjM3NSA2MTAuNSA0OS4yNSA2MDAuNSAzOS4zNzVMNTY4LjYyNSA3LjVDNTYzLjY4OCAyLjUgNTU3LjE4OCAwIDU1MC42NzIgMFM1MzcuNjI1IDIuNSA1MzIuNjI1IDcuNUw1MDUuMzc1IDM0Ljc1TDU3My4yNSAxMDIuNjI1TDYwMC41IDc1LjM3NVpNMzUyIDE5My42NlYyNTZINDE0LjM0QzQxOC42MDQgMjU2IDQyMi42ODkgMjU0LjI5NyA0MjUuNjkzIDI1MS4yNzNMNTUwLjYyNSAxMjUuMjVMNDgyLjc1IDU3LjM3NUwzNTYuNzI3IDE4Mi4zMDVDMzUzLjcwMSAxODUuMzEyIDM1MiAxODkuMzk4IDM1MiAxOTMuNjZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MoneyCheckPen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M585.568 135.562L573.314 147.816L448.395 273.828C439.445 282.834 427.033 288 414.34 288H112C103.164 288 96 280.836 96 272C96 263.162 103.164 256 112 256H320V193.66C320 180.973 325.164 168.562 334.199 159.578L366.055 128H80C53.6 128 32 149.6 32 176V464C32 490.4 53.6 512 80 512H560C586.4 512 608 490.4 608 464V176C608 159.006 598.986 144.098 585.568 135.562ZM528 384H112C103.164 384 96 376.836 96 368C96 359.162 103.164 352 112 352H528C536.838 352 544 359.162 544 368C544 376.836 536.838 384 528 384ZM600.5 75.375C610.5 65.375 610.5 49.25 600.5 39.375L568.625 7.5C563.688 2.5 557.188 0 550.672 0S537.625 2.5 532.625 7.5L505.375 34.75L573.25 102.625L600.5 75.375ZM352 193.66V256H414.34C418.604 256 422.689 254.297 425.693 251.273L550.625 125.25L482.75 57.375L356.727 182.305C353.701 185.312 352 189.398 352 193.66Z" />
        </Icon>
    </>
}