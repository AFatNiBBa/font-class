
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-minus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-minus?s=thin hexagon-minus}
 * @preview ![hexagon-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDUuODI0IDIzMy4zNjdMNDAwLjQzNyA1NC4xNjRDMzkyLjMyMiA0MC41MTYgMzc3LjUwMiAzMiAzNjEuMzg3IDMySDE1MC42MTNDMTM0LjQ5OCAzMiAxMTkuNjc4IDQwLjUxNiAxMTEuNTYzIDU0LjE2NEw2LjE3NiAyMzMuMzY3Qy0yLjA1OSAyNDcuMzY3IC0yLjA1OSAyNjQuNjMzIDYuMTc2IDI3OC42MzNMMTExLjU2MyA0NTcuODMyQzExOS42NzggNDcxLjQ4NCAxMzQuNDk4IDQ4MCAxNTAuNjEzIDQ4MEgzNjEuMzg3QzM3Ny41MDIgNDgwIDM5Mi4zMjIgNDcxLjQ4NCA0MDAuNDM3IDQ1Ny44MzJMNTA1LjgyNCAyNzguNjMzQzUxNC4wNTkgMjY0LjYzMyA1MTQuMDU5IDI0Ny4zNjcgNTA1LjgyNCAyMzMuMzY3Wk00OTIuMDMzIDI3MC41MjNMMzg2LjY4NCA0NDkuNjU2QzM4MS40MjQgNDU4LjUwNCAzNzEuNzMgNDY0IDM2MS4zODcgNDY0SDE1MC42MTNDMTQwLjI3IDQ2NCAxMzAuNTc2IDQ1OC41MDQgMTI1LjM1NCA0NDkuNzE5TDE5Ljk2NyAyNzAuNTIzQzE0LjY5OSAyNjEuNTYyIDE0LjY5OSAyNTAuNDM0IDE5Ljk2NyAyNDEuNDc3TDEyNS4zMTYgNjIuMzQ0QzEzMC41NzYgNTMuNDk2IDE0MC4yNyA0OCAxNTAuNjEzIDQ4SDM2MS4zODdDMzcxLjczMiA0OCAzODEuNDI2IDUzLjQ5NiAzODYuNjQ2IDYyLjI3N0w0OTIuMDMzIDI0MS40NzdDNDk3LjMwMSAyNTAuNDM0IDQ5Ny4zMDEgMjYxLjU2MiA0OTIuMDMzIDI3MC41MjNaTTM3Ni4wMDIgMjQ4SDEzNi4wMDJDMTMxLjU4IDI0OCAxMjguMDAyIDI1MS41NzggMTI4LjAwMiAyNTZTMTMxLjU4IDI2NCAxMzYuMDAyIDI2NEgzNzYuMDAyQzM4MC40MjQgMjY0IDM4NC4wMDIgMjYwLjQyMiAzODQuMDAyIDI1NlMzODAuNDI0IDI0OCAzNzYuMDAyIDI0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HexagonMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M505.824 233.367L400.437 54.164C392.322 40.516 377.502 32 361.387 32H150.613C134.498 32 119.678 40.516 111.563 54.164L6.176 233.367C-2.059 247.367 -2.059 264.633 6.176 278.633L111.563 457.832C119.678 471.484 134.498 480 150.613 480H361.387C377.502 480 392.322 471.484 400.437 457.832L505.824 278.633C514.059 264.633 514.059 247.367 505.824 233.367ZM492.033 270.523L386.684 449.656C381.424 458.504 371.73 464 361.387 464H150.613C140.27 464 130.576 458.504 125.354 449.719L19.967 270.523C14.699 261.562 14.699 250.434 19.967 241.477L125.316 62.344C130.576 53.496 140.27 48 150.613 48H361.387C371.732 48 381.426 53.496 386.646 62.277L492.033 241.477C497.301 250.434 497.301 261.562 492.033 270.523ZM376.002 248H136.002C131.58 248 128.002 251.578 128.002 256S131.58 264 136.002 264H376.002C380.424 264 384.002 260.422 384.002 256S380.424 248 376.002 248Z" />
        </Icon>
    </>
}