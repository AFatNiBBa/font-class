
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `phone-xmark` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/phone-xmark?s=thin phone-xmark}
 * @preview ![phone-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTMuMDk0IDM1MS4yNDhMMzg0LjYwOSAzMDQuNzQ4QzM4MC42NDMgMzAzLjAzMSAzNzYuNDYxIDMwMi4yMDUgMzcyLjMxOCAzMDIuMjA1QzM2My4xMTcgMzAyLjIwNSAzNTQuMTE3IDMwNi4yODEgMzQ4LjEyNSAzMTMuNzE3TDMwNC4wNzggMzY3LjUyOUMyMzQuODI4IDMzMy41MjkgMTc4LjUzMSAyNzcuMjQ4IDE0NC41NDcgMjA4LjAyN0wxOTguMzc1IDE2My45MzRDMjA5LjEyNSAxNTUuMTUyIDIxMi43OTcgMTQwLjI3NyAyMDcuMzU5IDEyNy40OTRMMTYwLjgyOCAxOC45MzJDMTU1LjcwOSA3LjI1IDE0NC4yNDggMCAxMzIuMDA2IDBDMTI5LjY3NiAwIDEyNy4zMTggMC4yNjIgMTI0Ljk2OSAwLjgwN0wyNC4yMTkgMjQuMDU3QzkuOTY5IDI3LjMwNyAwIDM5LjgzOCAwIDU0LjQ5NEMwIDMwNi43NzkgMjA1LjIzNCA1MTIgNDU3LjQ4NCA1MTJDNDcyLjE1NiA1MTIgNDg0LjY4OCA1MDIuMDMxIDQ4Ny45NTMgNDg3Ljc4MUw1MTEuMjAzIDM4N0M1MTQuNTc4IDM3Mi40MDQgNTA3IDM1Ny4yNDggNDkzLjA5NCAzNTEuMjQ4Wk00OTUuNjEzIDM4My40MDJMNDcyLjM1NyA0ODQuMjA3QzQ3MC43NjggNDkxLjE1IDQ2NC42NSA0OTYgNDU3LjQ4NCA0OTZDMjE0LjA0OSA0OTYgMTYgMjk3Ljk0MSAxNiA1NC40OTRDMTYgNDcuMzQgMjAuODQ0IDQxLjIzOCAyNy44MTYgMzkuNjQ2QzE0MC4yOTEgMTMuNjkxIDEzMC4zNjUgMTYgMTMyLjAwNiAxNkMxMzguMTIzIDE2IDE0My42ODQgMTkuNjcyIDE0Ni4xMjMgMjUuMjM0TDE5Mi42MzcgMTMzLjc1NkMxOTUuMjc3IDEzOS45NjMgMTkzLjQ3NSAxNDcuMjc3IDE4OC4yMzYgMTUxLjU1N0wxMjQuNTk0IDIwMy42ODlDMTkxLjIyMSAzMzkuMzg3IDI4OS4yNTggMzc4LjA3NCAzMDguNDIgMzg3LjQ4NkwzNjAuNTg0IDMyMy43NTZDMzYyLjU5NiAzMjEuMjYgMzY5LjQ4IDMxNS42MzMgMzc4LjMwNyAzMTkuNDUzTDQ4Ni43NTYgMzY1LjkzOUM0OTMuNTUxIDM2OC44NzEgNDk3LjI3NSAzNzYuMjExIDQ5NS42MTMgMzgzLjQwMlpNMzQ4LjExOCAzOS40MzFMNDA0LjY4NiA5NkwzNDguMTE4IDE1Mi41NjlDMzQ0Ljk5MSAxNTUuNjk1IDM0NC45OTEgMTYwLjc1NiAzNDguMTE4IDE2My44ODJTMzU2LjMwNSAxNjcuMDA5IDM1OS40MzEgMTYzLjg4Mkw0MTYgMTA3LjMxNEw0NzIuNTY5IDE2My44ODJDNDc1LjY5NSAxNjcuMDA5IDQ4MC43NTUgMTY3LjAwOSA0ODMuODgyIDE2My44ODJDNDg3LjAwOSAxNjAuNzU2IDQ4Ny4wMDkgMTU1LjY5NSA0ODMuODgyIDE1Mi41NjlMNDI3LjMxNCA5Nkw0ODMuODgyIDM5LjQzMUM0ODcuMDA5IDM2LjMwNSA0ODcuMDA5IDMxLjI0NCA0ODMuODgyIDI4LjExOEM0ODAuNzU1IDI0Ljk5MSA0NzUuNjk1IDI0Ljk5MSA0NzIuNTY5IDI4LjExOEw0MTYgODQuNjg2TDM1OS40MzEgMjguMTE4QzM1Ni4zMDUgMjQuOTkxIDM1MS4yNDQgMjQuOTkxIDM0OC4xMTggMjguMTE4UzM0NC45OTEgMzYuMzA1IDM0OC4xMTggMzkuNDMxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PhoneXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M493.094 351.248L384.609 304.748C380.643 303.031 376.461 302.205 372.318 302.205C363.117 302.205 354.117 306.281 348.125 313.717L304.078 367.529C234.828 333.529 178.531 277.248 144.547 208.027L198.375 163.934C209.125 155.152 212.797 140.277 207.359 127.494L160.828 18.932C155.709 7.25 144.248 0 132.006 0C129.676 0 127.318 0.262 124.969 0.807L24.219 24.057C9.969 27.307 0 39.838 0 54.494C0 306.779 205.234 512 457.484 512C472.156 512 484.688 502.031 487.953 487.781L511.203 387C514.578 372.404 507 357.248 493.094 351.248ZM495.613 383.402L472.357 484.207C470.768 491.15 464.65 496 457.484 496C214.049 496 16 297.941 16 54.494C16 47.34 20.844 41.238 27.816 39.646C140.291 13.691 130.365 16 132.006 16C138.123 16 143.684 19.672 146.123 25.234L192.637 133.756C195.277 139.963 193.475 147.277 188.236 151.557L124.594 203.689C191.221 339.387 289.258 378.074 308.42 387.486L360.584 323.756C362.596 321.26 369.48 315.633 378.307 319.453L486.756 365.939C493.551 368.871 497.275 376.211 495.613 383.402ZM348.118 39.431L404.686 96L348.118 152.569C344.991 155.695 344.991 160.756 348.118 163.882S356.305 167.009 359.431 163.882L416 107.314L472.569 163.882C475.695 167.009 480.755 167.009 483.882 163.882C487.009 160.756 487.009 155.695 483.882 152.569L427.314 96L483.882 39.431C487.009 36.305 487.009 31.244 483.882 28.118C480.755 24.991 475.695 24.991 472.569 28.118L416 84.686L359.431 28.118C356.305 24.991 351.244 24.991 348.118 28.118S344.991 36.305 348.118 39.431Z" />
        </Icon>
    </>
}