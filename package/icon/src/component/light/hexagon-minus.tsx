
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hexagon-minus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-minus?s=light hexagon-minus}
 * @preview ![hexagon-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMjQwSDE2MEMxNTEuMTU2IDI0MCAxNDQgMjQ3LjE1NiAxNDQgMjU2UzE1MS4xNTYgMjcyIDE2MCAyNzJIMzUyQzM2MC44NDQgMjcyIDM2OCAyNjQuODQ0IDM2OCAyNTZTMzYwLjg0NCAyNDAgMzUyIDI0MFpNNTA1LjgyNCAyMzMuMzY1TDQwMC40MzcgNTQuMTY2QzM5Mi4zMjIgNDAuNTE2IDM3Ny41MDIgMzIgMzYxLjM4NyAzMkgxNTAuNjEzQzEzNC40OTggMzIgMTE5LjY3OCA0MC41MTYgMTExLjU2MyA1NC4xNjZMNi4xNzYgMjMzLjM2NUMtMi4wNTkgMjQ3LjM2NSAtMi4wNTkgMjY0LjYzMyA2LjE3NiAyNzguNjMzTDExMS41NjMgNDU3LjgzMkMxMTkuNjc4IDQ3MS40ODIgMTM0LjQ5OCA0ODAgMTUwLjYxMyA0ODBIMzYxLjM4N0MzNzcuNTAyIDQ4MCAzOTIuMzIyIDQ3MS40ODIgNDAwLjQzNyA0NTcuODMyTDUwNS44MjQgMjc4LjYzM0M1MTQuMDU5IDI2NC42MzMgNTE0LjA1OSAyNDcuMzY1IDUwNS44MjQgMjMzLjM2NVpNNDc4LjI0IDI2Mi40MTJMMzcyLjkzMiA0NDEuNDhDMzcwLjU0MSA0NDUuNTAyIDM2Ni4xMTcgNDQ4IDM2MS4zODcgNDQ4SDE1MC42MTNDMTQ1Ljg4NSA0NDggMTQxLjQ2MSA0NDUuNTAyIDEzOS4xNDYgNDQxLjYwOUwzMy43NiAyNjIuNDFDMzEuMzk4IDI1OC4zOTYgMzEuMzk4IDI1My42MDQgMzMuNzYgMjQ5LjU4NkwxMzkuMDY4IDcwLjUxOEMxNDEuNDU5IDY2LjQ5OCAxNDUuODgzIDY0IDE1MC42MTMgNjRIMzYxLjM4N0MzNjYuMTE3IDY0IDM3MC41NDEgNjYuNDk4IDM3Mi44NTQgNzAuMzg5TDQ3OC4yNDIgMjQ5LjU4OEM0ODAuNjA0IDI1My42MDQgNDgwLjYwNCAyNTguMzk2IDQ3OC4yNCAyNjIuNDEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HexagonMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M352 240H160C151.156 240 144 247.156 144 256S151.156 272 160 272H352C360.844 272 368 264.844 368 256S360.844 240 352 240ZM505.824 233.365L400.437 54.166C392.322 40.516 377.502 32 361.387 32H150.613C134.498 32 119.678 40.516 111.563 54.166L6.176 233.365C-2.059 247.365 -2.059 264.633 6.176 278.633L111.563 457.832C119.678 471.482 134.498 480 150.613 480H361.387C377.502 480 392.322 471.482 400.437 457.832L505.824 278.633C514.059 264.633 514.059 247.365 505.824 233.365ZM478.24 262.412L372.932 441.48C370.541 445.502 366.117 448 361.387 448H150.613C145.885 448 141.461 445.502 139.146 441.609L33.76 262.41C31.398 258.396 31.398 253.604 33.76 249.586L139.068 70.518C141.459 66.498 145.883 64 150.613 64H361.387C366.117 64 370.541 66.498 372.854 70.389L478.242 249.588C480.604 253.604 480.604 258.396 478.24 262.412Z" />
        </Icon>
    </>
}