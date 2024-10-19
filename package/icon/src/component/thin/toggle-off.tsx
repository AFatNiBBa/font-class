
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-off` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-off?s=thin toggle-off}
 * @preview ![toggle-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgOTZIMTYwQzcxLjYzNSA5NiAwIDE2Ny42MzUgMCAyNTZTNzEuNjM1IDQxNiAxNjAgNDE2SDQxNkM1MDQuMzY1IDQxNiA1NzYgMzQ0LjM2NSA1NzYgMjU2UzUwNC4zNjUgOTYgNDE2IDk2Wk00MTYgNDAwSDE2MEM4MC41OTggNDAwIDE2IDMzNS40MDIgMTYgMjU2UzgwLjU5OCAxMTIgMTYwIDExMkg0MTZDNDk1LjQwMiAxMTIgNTYwIDE3Ni41OTggNTYwIDI1NlM0OTUuNDAyIDQwMCA0MTYgNDAwWk0xNjAgMTYwQzEwNi45OCAxNjAgNjQgMjAyLjk4IDY0IDI1NlMxMDYuOTggMzUyIDE2MCAzNTJTMjU2IDMwOS4wMiAyNTYgMjU2UzIxMy4wMiAxNjAgMTYwIDE2MFpNMTYwIDMzNkMxMTUuODg5IDMzNiA4MCAzMDAuMTExIDgwIDI1NlMxMTUuODg5IDE3NiAxNjAgMTc2UzI0MCAyMTEuODg5IDI0MCAyNTZTMjA0LjExMSAzMzYgMTYwIDMzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ToggleOff(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M416 96H160C71.635 96 0 167.635 0 256S71.635 416 160 416H416C504.365 416 576 344.365 576 256S504.365 96 416 96ZM416 400H160C80.598 400 16 335.402 16 256S80.598 112 160 112H416C495.402 112 560 176.598 560 256S495.402 400 416 400ZM160 160C106.98 160 64 202.98 64 256S106.98 352 160 352S256 309.02 256 256S213.02 160 160 160ZM160 336C115.889 336 80 300.111 80 256S115.889 176 160 176S240 211.889 240 256S204.111 336 160 336Z" />
        </Icon>
    </>
}