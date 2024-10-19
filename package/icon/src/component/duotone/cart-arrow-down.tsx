
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cart-arrow-down` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cart-arrow-down?s=duotone cart-arrow-down}
 * @preview ![cart-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3NC43OTEgNzIuNzk3TDUxOS45MzIgMjY0Ljc4MUM1MTYuMDQxIDI3OC40MzggNTAzLjQgMjg4IDQ4OS4xNjYgMjg4SDE3MC43NkwxMjIgMzJIMzEyLjA0M1YxMzQuMDYyTDI4OS4wMTIgMTExLjAzMUMyNzkuNjM3IDEwMS42NTYgMjY0LjQ0OSAxMDEuNjU2IDI1NS4wNzQgMTExLjAzMVMyNDUuNjk5IDEzNS41OTQgMjU1LjA3NCAxNDQuOTY5TDMxOS4wNzQgMjA4Ljk2OUMzMjMuNzYyIDIxMy42NTYgMzI5LjkwMiAyMTYgMzM2LjA0MyAyMTZTMzQ4LjMyNCAyMTMuNjU2IDM1My4wMTIgMjA4Ljk2OUw0MTcuMDEyIDE0NC45NjlDNDI2LjM4NyAxMzUuNTk0IDQyNi4zODcgMTIwLjQwNiA0MTcuMDEyIDExMS4wMzFTMzkyLjQ0OSAxMDEuNjU2IDM4My4wNzQgMTExLjAzMUwzNjAuMDQzIDEzNC4wNjJWMzJINTQ0LjAxQzU1NC4xNSAzMiA1NjMuNDYzIDM2LjY0MSA1NjkuNTcyIDQ0LjczNEM1NzUuNjY2IDUyLjgyOCA1NzcuNTcyIDYzLjA0NyA1NzQuNzkxIDcyLjc5N1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTc2IDQxNkMxNDkuNDkgNDE2IDEyOCA0MzcuNDkgMTI4IDQ2NFMxNDkuNDkgNTEyIDE3NiA1MTJTMjI0IDQ5MC41MSAyMjQgNDY0UzIwMi41MSA0MTYgMTc2IDQxNlpNNDY0IDQxNkM0MzcuNDkgNDE2IDQxNiA0MzcuNDkgNDE2IDQ2NFM0MzcuNDkgNTEyIDQ2NCA1MTJTNTEyIDQ5MC41MSA1MTIgNDY0UzQ5MC41MSA0MTYgNDY0IDQxNlpNNDg4IDMzNkgxNzkuODU5TDExOS41NzggMTkuNTFDMTE3LjQyMiA4LjE5IDEwNy41MjUgMCA5Ni4wMDIgMEgyNEMxMC43NDUgMCAwIDEwLjc0NSAwIDI0VjI0QzAgMzcuMjU1IDEwLjc0NSA0OCAyNCA0OEg3Ni4xNDFMMTM2LjQyNCAzNjQuNDkxQzEzOC41OCAzNzUuODExIDE0OC40NzcgMzg0IDE2MCAzODRINDg4QzUwMS4yNTUgMzg0IDUxMiAzNzMuMjU1IDUxMiAzNjBWMzYwQzUxMiAzNDYuNzQ1IDUwMS4yNTUgMzM2IDQ4OCAzMzZaTTMxOS4wMzEgMjA4Ljk2OUMzMjMuNzE5IDIxMy42NTYgMzI5Ljg1OSAyMTYgMzM2IDIxNlMzNDguMjgxIDIxMy42NTYgMzUyLjk2OSAyMDguOTY5TDQxNi45NjkgMTQ0Ljk2OUM0MjYuMzQ0IDEzNS41OTQgNDI2LjM0NCAxMjAuNDA2IDQxNi45NjkgMTExLjAzMVMzOTIuNDA2IDEwMS42NTYgMzgzLjAzMSAxMTEuMDMxTDM2MCAxMzQuMDYyVjMySDMxMlYxMzQuMDYyTDI4OC45NjkgMTExLjAzMUMyNzkuNTk0IDEwMS42NTYgMjY0LjQwNiAxMDEuNjU2IDI1NS4wMzEgMTExLjAzMVMyNDUuNjU2IDEzNS41OTQgMjU1LjAzMSAxNDQuOTY5TDMxOS4wMzEgMjA4Ljk2OVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CartArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M574.791 72.797L519.932 264.781C516.041 278.438 503.4 288 489.166 288H170.76L122 32H312.043V134.062L289.012 111.031C279.637 101.656 264.449 101.656 255.074 111.031S245.699 135.594 255.074 144.969L319.074 208.969C323.762 213.656 329.902 216 336.043 216S348.324 213.656 353.012 208.969L417.012 144.969C426.387 135.594 426.387 120.406 417.012 111.031S392.449 101.656 383.074 111.031L360.043 134.062V32H544.01C554.15 32 563.463 36.641 569.572 44.734C575.666 52.828 577.572 63.047 574.791 72.797Z" />
            <path d="M176 416C149.49 416 128 437.49 128 464S149.49 512 176 512S224 490.51 224 464S202.51 416 176 416ZM464 416C437.49 416 416 437.49 416 464S437.49 512 464 512S512 490.51 512 464S490.51 416 464 416ZM488 336H179.859L119.578 19.51C117.422 8.19 107.525 0 96.002 0H24C10.745 0 0 10.745 0 24V24C0 37.255 10.745 48 24 48H76.141L136.424 364.491C138.58 375.811 148.477 384 160 384H488C501.255 384 512 373.255 512 360V360C512 346.745 501.255 336 488 336ZM319.031 208.969C323.719 213.656 329.859 216 336 216S348.281 213.656 352.969 208.969L416.969 144.969C426.344 135.594 426.344 120.406 416.969 111.031S392.406 101.656 383.031 111.031L360 134.062V32H312V134.062L288.969 111.031C279.594 101.656 264.406 101.656 255.031 111.031S245.656 135.594 255.031 144.969L319.031 208.969Z" />
        </Icon>
    </>
}