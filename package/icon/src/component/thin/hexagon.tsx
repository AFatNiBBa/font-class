
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon?s=thin hexagon}
 * @preview ![hexagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDUuODI0IDIzMy4zNjdMNDAwLjQzNyA1NC4xNjRDMzkyLjMyIDQwLjUxNiAzNzcuNSAzMiAzNjEuMzg3IDMySDE1MC42MTNDMTM0LjUgMzIgMTE5LjY4IDQwLjUxNiAxMTEuNTYzIDU0LjE2NEw2LjE3NiAyMzMuMzY3Qy0yLjA1OSAyNDcuMzY3IC0yLjA1OSAyNjQuNjMzIDYuMTc2IDI3OC42MzNMMTExLjU2MyA0NTcuODMyQzExOS42OCA0NzEuNDg0IDEzNC41IDQ4MCAxNTAuNjEzIDQ4MEgzNjEuMzg3QzM3Ny41IDQ4MCAzOTIuMzIgNDcxLjQ4NCA0MDAuNDM3IDQ1Ny44MzJMNTA1LjgyNCAyNzguNjMzQzUxNC4wNTkgMjY0LjYzMyA1MTQuMDU5IDI0Ny4zNjcgNTA1LjgyNCAyMzMuMzY3Wk00OTIuMDMxIDI3MC41MjNMMzg2LjY4NCA0NDkuNjU2QzM4MS40MjYgNDU4LjUwNCAzNzEuNzMgNDY0IDM2MS4zODcgNDY0SDE1MC42MTNDMTQwLjI3IDQ2NCAxMzAuNTc0IDQ1OC41MDQgMTI1LjM1NSA0NDkuNzIzTDE5Ljk2OSAyNzAuNTJDMTQuNjk5IDI2MS41NjIgMTQuNjk5IDI1MC40MzcgMTkuOTY5IDI0MS40NzdMMTI1LjMxMyA2Mi4zNDRDMTMwLjU3NCA1My40OTYgMTQwLjI3IDQ4IDE1MC42MTMgNDhIMzYxLjM4N0MzNzEuNzMgNDggMzgxLjQyNiA1My40OTYgMzg2LjY0NSA2Mi4yNzNMNDkyLjAzMSAyNDEuNDhDNDk3LjMwMSAyNTAuNDM4IDQ5Ny4zMDEgMjYxLjU2MiA0OTIuMDMxIDI3MC41MjNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Hexagon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M505.824 233.367L400.437 54.164C392.32 40.516 377.5 32 361.387 32H150.613C134.5 32 119.68 40.516 111.563 54.164L6.176 233.367C-2.059 247.367 -2.059 264.633 6.176 278.633L111.563 457.832C119.68 471.484 134.5 480 150.613 480H361.387C377.5 480 392.32 471.484 400.437 457.832L505.824 278.633C514.059 264.633 514.059 247.367 505.824 233.367ZM492.031 270.523L386.684 449.656C381.426 458.504 371.73 464 361.387 464H150.613C140.27 464 130.574 458.504 125.355 449.723L19.969 270.52C14.699 261.562 14.699 250.437 19.969 241.477L125.313 62.344C130.574 53.496 140.27 48 150.613 48H361.387C371.73 48 381.426 53.496 386.645 62.273L492.031 241.48C497.301 250.438 497.301 261.562 492.031 270.523Z" />
        </Icon>
    </>
}