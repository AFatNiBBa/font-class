
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `gifts` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gifts?s=regular gifts}
 * @preview ![gifts](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01ODYuNjA1IDIyNS4wN0M1OTEuNjA3IDIxNC45MDggNTkyIDIwNS44NjkgNTkyIDIwMC4yNzdDNTkyIDE2NC43NzcgNTY1IDEyOC4wMjcgNTE5Ljg3NSAxMjguMDI3QzQ3MS43NSAxMjguMDI3IDQ0NCAxNzUuNzc3IDQzMiAyMDMuMjc3QzQyMCAxNzUuNzc3IDM5Mi4yNSAxMjguMDI3IDM0NC4xMjUgMTI4LjAyN0MyOTkgMTI4LjAyNyAyNzIgMTY0Ljc3NyAyNzIgMjAwLjI3N0MyNzIgMjA1Ljg2OSAyNzIuMzkzIDIxNC45MDggMjc3LjM5NSAyMjUuMDdDMjQ3LjEyMyAyMzAuMTQ2IDIyNCAyNTYuMjg1IDIyNCAyODhWNDQ4QzIyNCA0ODMuMzQ2IDI1Mi42NTQgNTEyIDI4OCA1MTJINTc2QzYxMS4zNDYgNTEyIDY0MCA0ODMuMzQ2IDY0MCA0NDhWMjg4QzY0MCAyNTYuMjg1IDYxNi44NzcgMjMwLjE0NiA1ODYuNjA1IDIyNS4wN1pNMzQ0LjEyNSAxNzYuMDI3QzM2Mi43NDIgMTc2LjAyNyAzNzkuNzMyIDIwMy43NTIgMzg4LjYxMSAyMjRIMzM1Ljk1OUMzMzMuMjI5IDIyMi42MjkgMzMwLjg2MyAyMjEuMDE4IDMyOC43NSAyMTkuMjc3QzMyMS41IDIxMi43NzcgMzIwIDIwNS4yNzcgMzIwIDIwMC4yNzdDMzIwIDE5MC41MjcgMzI2LjM3NSAxNzYuMDI3IDM0NC4xMjUgMTc2LjAyN1pNNDA4IDQ2NEgyODhDMjc5LjE3OCA0NjQgMjcyIDQ1Ni44MjIgMjcyIDQ0OFYzOTJINDA4VjQ2NFpNNDA4IDM0NEgyNzJWMjg4QzI3MiAyNzkuMTc4IDI3OS4xNzggMjcyIDI4OCAyNzJINDA4VjM0NFpNNTE5Ljg3NSAxNzYuMDI3QzUzNy42MjUgMTc2LjAyNyA1NDQgMTkwLjUyNyA1NDQgMjAwLjI3N0M1NDQgMjA1LjI3NyA1NDIuNSAyMTIuNzc3IDUzNS4yNSAyMTkuMjc3QzUzMy4xMzcgMjIxLjAxOCA1MzAuNzcxIDIyMi42MjkgNTI4LjA0MSAyMjRINDc1LjM4OUM0ODQuMjY4IDIwMy43NTIgNTAxLjI1OCAxNzYuMDI3IDUxOS44NzUgMTc2LjAyN1pNNTkyIDQ0OEM1OTIgNDU2LjgyMiA1ODQuODIyIDQ2NCA1NzYgNDY0SDQ1NlYzOTJINTkyVjQ0OFpNNTkyIDM0NEg0NTZWMjcySDU3NkM1ODQuODIyIDI3MiA1OTIgMjc5LjE3OCA1OTIgMjg4VjM0NFpNMTY4IDQ2NEg2NEM1NS4xODggNDY0IDQ4IDQ1Ni44MjggNDggNDQ4VjE2MEM0OCAxNTEuMTcyIDU1LjE4OCAxNDQgNjQgMTQ0SDIzMkMyNDUuMjUgMTQ0IDI1NiAxMzMuMjUgMjU2IDEyMFMyNDUuMjUgOTYgMjMyIDk2SDIyMy40NDdMMjQzLjUgODUuMDYyQzI1NS4xMjUgNzguNzE5IDI1OS40MDYgNjQuMTQxIDI1My4wNjIgNTIuNUMyNDYuNzUgNDAuODc1IDIzMi4yMTkgMzYuNTk0IDIyMC41IDQyLjkzOEwxOTUuNTcyIDU2LjUzNUwyMDUuODQ0IDMzLjkzN0MyMTEuMzQ0IDIxLjg1OSAyMDYgNy42NDEgMTkzLjkzOCAyLjE1NkMxODEuOTY5IC0zLjMxMiAxNjcuNjg4IDEuOTY5IDE2Mi4xNTYgMTQuMDYyTDE0NCA1NC4wMDZMMTI1Ljg0NCAxNC4wNjJDMTIwLjM0NCAxLjk4NCAxMDYuMDk0IC0zLjI4MSA5NC4wNjIgMi4xNTZDODIgNy42NDEgNzYuNjU2IDIxLjg1OSA4Mi4xNTYgMzMuOTM4TDkyLjQyOCA1Ni41MzVMNjcuNSA0Mi45MzhDNTUuODQ0IDM2LjU2MiA0MS4yNSA0MC44NzUgMzQuOTM4IDUyLjVDMjguNTk0IDY0LjE0MSAzMi44NzUgNzguNzE5IDQ0LjUgODUuMDYyTDY0LjU1MyA5Nkg2NEMyOC43MTkgOTYgMCAxMjQuNzAzIDAgMTYwVjQ0OEMwIDQ4My4yOTcgMjguNzE5IDUxMiA2NCA1MTJIMTY4QzE4MS4yNSA1MTIgMTkyIDUwMS4yNSAxOTIgNDg4UzE4MS4yNSA0NjQgMTY4IDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Gifts(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M586.605 225.07C591.607 214.908 592 205.869 592 200.277C592 164.777 565 128.027 519.875 128.027C471.75 128.027 444 175.777 432 203.277C420 175.777 392.25 128.027 344.125 128.027C299 128.027 272 164.777 272 200.277C272 205.869 272.393 214.908 277.395 225.07C247.123 230.146 224 256.285 224 288V448C224 483.346 252.654 512 288 512H576C611.346 512 640 483.346 640 448V288C640 256.285 616.877 230.146 586.605 225.07ZM344.125 176.027C362.742 176.027 379.732 203.752 388.611 224H335.959C333.229 222.629 330.863 221.018 328.75 219.277C321.5 212.777 320 205.277 320 200.277C320 190.527 326.375 176.027 344.125 176.027ZM408 464H288C279.178 464 272 456.822 272 448V392H408V464ZM408 344H272V288C272 279.178 279.178 272 288 272H408V344ZM519.875 176.027C537.625 176.027 544 190.527 544 200.277C544 205.277 542.5 212.777 535.25 219.277C533.137 221.018 530.771 222.629 528.041 224H475.389C484.268 203.752 501.258 176.027 519.875 176.027ZM592 448C592 456.822 584.822 464 576 464H456V392H592V448ZM592 344H456V272H576C584.822 272 592 279.178 592 288V344ZM168 464H64C55.188 464 48 456.828 48 448V160C48 151.172 55.188 144 64 144H232C245.25 144 256 133.25 256 120S245.25 96 232 96H223.447L243.5 85.062C255.125 78.719 259.406 64.141 253.062 52.5C246.75 40.875 232.219 36.594 220.5 42.938L195.572 56.535L205.844 33.937C211.344 21.859 206 7.641 193.938 2.156C181.969 -3.312 167.688 1.969 162.156 14.062L144 54.006L125.844 14.062C120.344 1.984 106.094 -3.281 94.062 2.156C82 7.641 76.656 21.859 82.156 33.938L92.428 56.535L67.5 42.938C55.844 36.562 41.25 40.875 34.938 52.5C28.594 64.141 32.875 78.719 44.5 85.062L64.553 96H64C28.719 96 0 124.703 0 160V448C0 483.297 28.719 512 64 512H168C181.25 512 192 501.25 192 488S181.25 464 168 464Z" />
        </Icon>
    </>
}