
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hexagon-plus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-plus?s=light hexagon-plus}
 * @preview ![hexagon-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDUuODI0IDIzMy4zNjVMNDAwLjQzNyA1NC4xNjZDMzkyLjMyMiA0MC41MTYgMzc3LjUwMiAzMiAzNjEuMzg3IDMySDE1MC42MTNDMTM0LjQ5OCAzMiAxMTkuNjc4IDQwLjUxNiAxMTEuNTYzIDU0LjE2Nkw2LjE3NiAyMzMuMzY1Qy0yLjA1OSAyNDcuMzY1IC0yLjA1OSAyNjQuNjMzIDYuMTc2IDI3OC42MzNMMTExLjU2MyA0NTcuODMyQzExOS42NzggNDcxLjQ4MiAxMzQuNDk4IDQ4MCAxNTAuNjEzIDQ4MEgzNjEuMzg3QzM3Ny41MDIgNDgwIDM5Mi4zMjIgNDcxLjQ4MiA0MDAuNDM3IDQ1Ny44MzJMNTA1LjgyNCAyNzguNjMzQzUxNC4wNTkgMjY0LjYzMyA1MTQuMDU5IDI0Ny4zNjUgNTA1LjgyNCAyMzMuMzY1Wk00NzguMjQgMjYyLjQxMkwzNzIuOTMyIDQ0MS40OEMzNzAuNTQxIDQ0NS41MDIgMzY2LjExNyA0NDggMzYxLjM4NyA0NDhIMTUwLjYxM0MxNDUuODg1IDQ0OCAxNDEuNDYxIDQ0NS41MDIgMTM5LjE0NiA0NDEuNjA5TDMzLjc2IDI2Mi40MUMzMS4zOTggMjU4LjM5NiAzMS4zOTggMjUzLjYwNCAzMy43NiAyNDkuNTg2TDEzOS4wNjggNzAuNTE4QzE0MS40NTkgNjYuNDk4IDE0NS44ODMgNjQgMTUwLjYxMyA2NEgzNjEuMzg3QzM2Ni4xMTcgNjQgMzcwLjU0MSA2Ni40OTggMzcyLjg1NCA3MC4zODlMNDc4LjI0MiAyNDkuNTg4QzQ4MC42MDQgMjUzLjYwNCA0ODAuNjA0IDI1OC4zOTYgNDc4LjI0IDI2Mi40MTJaTTM1MiAyNDBIMjcyVjE2MEMyNzIgMTUxLjE1NiAyNjQuODQ0IDE0NCAyNTYgMTQ0UzI0MCAxNTEuMTU2IDI0MCAxNjBWMjQwSDE2MEMxNTEuMTU2IDI0MCAxNDQgMjQ3LjE1NiAxNDQgMjU2UzE1MS4xNTYgMjcyIDE2MCAyNzJIMjQwVjM1MkMyNDAgMzYwLjg0NCAyNDcuMTU2IDM2OCAyNTYgMzY4UzI3MiAzNjAuODQ0IDI3MiAzNTJWMjcySDM1MkMzNjAuODQ0IDI3MiAzNjggMjY0Ljg0NCAzNjggMjU2UzM2MC44NDQgMjQwIDM1MiAyNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HexagonPlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M505.824 233.365L400.437 54.166C392.322 40.516 377.502 32 361.387 32H150.613C134.498 32 119.678 40.516 111.563 54.166L6.176 233.365C-2.059 247.365 -2.059 264.633 6.176 278.633L111.563 457.832C119.678 471.482 134.498 480 150.613 480H361.387C377.502 480 392.322 471.482 400.437 457.832L505.824 278.633C514.059 264.633 514.059 247.365 505.824 233.365ZM478.24 262.412L372.932 441.48C370.541 445.502 366.117 448 361.387 448H150.613C145.885 448 141.461 445.502 139.146 441.609L33.76 262.41C31.398 258.396 31.398 253.604 33.76 249.586L139.068 70.518C141.459 66.498 145.883 64 150.613 64H361.387C366.117 64 370.541 66.498 372.854 70.389L478.242 249.588C480.604 253.604 480.604 258.396 478.24 262.412ZM352 240H272V160C272 151.156 264.844 144 256 144S240 151.156 240 160V240H160C151.156 240 144 247.156 144 256S151.156 272 160 272H240V352C240 360.844 247.156 368 256 368S272 360.844 272 352V272H352C360.844 272 368 264.844 368 256S360.844 240 352 240Z" />
        </Icon>
    </>
}