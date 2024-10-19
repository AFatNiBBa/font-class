
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-from-line` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-line?s=light arrow-down-from-line}
 * @preview ![arrow-down-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjQuNjg4IDMwOC42ODhMMjA4IDQyNS4zNzVWMTI4QzIwOCAxMTkuMTU2IDIwMC44NDQgMTEyIDE5MiAxMTJTMTc2IDExOS4xNTYgMTc2IDEyOFY0MjUuMzc1TDU5LjMxMiAzMDguNjg4QzUzLjA2MiAzMDIuNDM4IDQyLjkzNyAzMDIuNDM4IDM2LjY4OCAzMDguNjg4UzMwLjQzOCAzMjUuMDYzIDM2LjY4OCAzMzEuMzEyTDE4MC42ODggNDc1LjMxMkMxODMuODEyIDQ3OC40MzggMTg3LjkwNiA0ODAgMTkyIDQ4MFMyMDAuMTg4IDQ3OC40MzggMjAzLjMxMiA0NzUuMzEyTDM0Ny4zMTIgMzMxLjMxMkMzNTMuNTYyIDMyNS4wNjIgMzUzLjU2MiAzMTQuOTM3IDM0Ny4zMTIgMzA4LjY4OFMzMzAuOTM4IDMwMi40MzggMzI0LjY4OCAzMDguNjg4Wk0zNjggMzJIMTZDNy4xNTYgMzIgMCAzOS4xNTYgMCA0OFM3LjE1NiA2NCAxNiA2NEgzNjhDMzc2Ljg0NCA2NCAzODQgNTYuODQ0IDM4NCA0OFMzNzYuODQ0IDMyIDM2OCAzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowDownFromLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M324.688 308.688L208 425.375V128C208 119.156 200.844 112 192 112S176 119.156 176 128V425.375L59.312 308.688C53.062 302.438 42.937 302.438 36.688 308.688S30.438 325.063 36.688 331.312L180.688 475.312C183.812 478.438 187.906 480 192 480S200.188 478.438 203.312 475.312L347.312 331.312C353.562 325.062 353.562 314.937 347.312 308.688S330.938 302.438 324.688 308.688ZM368 32H16C7.156 32 0 39.156 0 48S7.156 64 16 64H368C376.844 64 384 56.844 384 48S376.844 32 368 32Z" />
        </Icon>
    </>
}