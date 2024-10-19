
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `link-horizontal` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/link-horizontal?s=solid link-horizontal}
 * @preview ![link-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAuODExIDI4OEgxNDRDOTkuODg5IDI4OCA2NCAyNTIuMTExIDY0IDIwOFM5OS44ODkgMTI4IDE0NCAxMjhIMzA0QzM0OC4xMTEgMTI4IDM4NCAxNjMuODg5IDM4NCAyMDhTMzQ4LjExMSAyODggMzA0IDI4OEgyOTAuOTQ3QzI4OS4xNTQgMjkzLjAyOSAyODggMjk4LjM2MyAyODggMzA0QzI4OCAzMjYuMDIxIDMwMi45OSAzNDQuNDMyIDMyMy4yNDIgMzUwLjA2MUMzOTMuNTggMzQwLjU3IDQ0OCAyODAuOTM4IDQ0OCAyMDhDNDQ4IDEyOC40NzEgMzgzLjUyOSA2NCAzMDQgNjRIMTQ0QzY0LjQ3MSA2NCAwIDEyOC40NzEgMCAyMDhTNjQuNDcxIDM1MiAxNDQgMzUySDE2Ni44MjRDMTYyLjQ4IDMzNi43MTcgMTYwIDMyMC42NTYgMTYwIDMwNEMxNjAgMjk4LjYgMTYwLjMzMiAyOTMuMjc3IDE2MC44MTEgMjg4Wk00OTYgMTYwSDQ3My4xNzZDNDc3LjUyIDE3NS4yODMgNDgwIDE5MS4zNDQgNDgwIDIwOEM0ODAgMjEzLjQgNDc5LjY2OCAyMTguNzIzIDQ3OS4xODkgMjI0SDQ5NkM1NDAuMTExIDIyNCA1NzYgMjU5Ljg4OSA1NzYgMzA0UzU0MC4xMTEgMzg0IDQ5NiAzODRIMzM2QzI5MS44ODkgMzg0IDI1NiAzNDguMTExIDI1NiAzMDRTMjkxLjg4OSAyMjQgMzM2IDIyNEgzNDkuMDUzQzM1MC44NDYgMjE4Ljk3MSAzNTIgMjEzLjYzNyAzNTIgMjA4QzM1MiAxODUuOTc5IDMzNy4wMSAxNjcuNTY4IDMxNi43NTggMTYxLjkzOUMyNDYuNDIgMTcxLjQzIDE5MiAyMzEuMDYyIDE5MiAzMDRDMTkyIDM4My41MjkgMjU2LjQ3MSA0NDggMzM2IDQ0OEg0OTZDNTc1LjUyOSA0NDggNjQwIDM4My41MjkgNjQwIDMwNFM1NzUuNTI5IDE2MCA0OTYgMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LinkHorizontal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M160.811 288H144C99.889 288 64 252.111 64 208S99.889 128 144 128H304C348.111 128 384 163.889 384 208S348.111 288 304 288H290.947C289.154 293.029 288 298.363 288 304C288 326.021 302.99 344.432 323.242 350.061C393.58 340.57 448 280.938 448 208C448 128.471 383.529 64 304 64H144C64.471 64 0 128.471 0 208S64.471 352 144 352H166.824C162.48 336.717 160 320.656 160 304C160 298.6 160.332 293.277 160.811 288ZM496 160H473.176C477.52 175.283 480 191.344 480 208C480 213.4 479.668 218.723 479.189 224H496C540.111 224 576 259.889 576 304S540.111 384 496 384H336C291.889 384 256 348.111 256 304S291.889 224 336 224H349.053C350.846 218.971 352 213.637 352 208C352 185.979 337.01 167.568 316.758 161.939C246.42 171.43 192 231.062 192 304C192 383.529 256.471 448 336 448H496C575.529 448 640 383.529 640 304S575.529 160 496 160Z" />
        </Icon>
    </>
}