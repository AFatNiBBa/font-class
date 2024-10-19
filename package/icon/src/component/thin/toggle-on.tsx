
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=thin toggle-on}
 * @preview ![toggle-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgOTZIMTYwQzcxLjYzNSA5NiAwIDE2Ny42MzUgMCAyNTZTNzEuNjM1IDQxNiAxNjAgNDE2SDQxNkM1MDQuMzY1IDQxNiA1NzYgMzQ0LjM2NSA1NzYgMjU2UzUwNC4zNjUgOTYgNDE2IDk2Wk00MTYgNDAwSDE2MEM4MC41OTggNDAwIDE2IDMzNS40MDIgMTYgMjU2UzgwLjU5OCAxMTIgMTYwIDExMkg0MTZDNDk1LjQwMiAxMTIgNTYwIDE3Ni41OTggNTYwIDI1NlM0OTUuNDAyIDQwMCA0MTYgNDAwWk00MTYgMTYwQzM2Mi45OCAxNjAgMzIwIDIwMi45OCAzMjAgMjU2UzM2Mi45OCAzNTIgNDE2IDM1MlM1MTIgMzA5LjAyIDUxMiAyNTZTNDY5LjAyIDE2MCA0MTYgMTYwWk00MTYgMzM2QzM3MS44ODkgMzM2IDMzNiAzMDAuMTExIDMzNiAyNTZTMzcxLjg4OSAxNzYgNDE2IDE3NlM0OTYgMjExLjg4OSA0OTYgMjU2UzQ2MC4xMTEgMzM2IDQxNiAzMzZaTTQxNiAyMDhDMzg5LjQ5IDIwOCAzNjggMjI5LjQ5IDM2OCAyNTZTMzg5LjQ5IDMwNCA0MTYgMzA0UzQ2NCAyODIuNTEgNDY0IDI1NlM0NDIuNTEgMjA4IDQxNiAyMDhaTTQxNiAyODhDMzk4LjM1NSAyODggMzg0IDI3My42NDUgMzg0IDI1NlMzOTguMzU1IDIyNCA0MTYgMjI0UzQ0OCAyMzguMzU1IDQ0OCAyNTZTNDMzLjY0NSAyODggNDE2IDI4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ToggleOn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M416 96H160C71.635 96 0 167.635 0 256S71.635 416 160 416H416C504.365 416 576 344.365 576 256S504.365 96 416 96ZM416 400H160C80.598 400 16 335.402 16 256S80.598 112 160 112H416C495.402 112 560 176.598 560 256S495.402 400 416 400ZM416 160C362.98 160 320 202.98 320 256S362.98 352 416 352S512 309.02 512 256S469.02 160 416 160ZM416 336C371.889 336 336 300.111 336 256S371.889 176 416 176S496 211.889 496 256S460.111 336 416 336ZM416 208C389.49 208 368 229.49 368 256S389.49 304 416 304S464 282.51 464 256S442.51 208 416 208ZM416 288C398.355 288 384 273.645 384 256S398.355 224 416 224S448 238.355 448 256S433.645 288 416 288Z" />
        </Icon>
    </>
}