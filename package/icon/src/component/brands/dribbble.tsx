
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dribbble` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dribbble?s=brands dribbble}
 * @preview ![dribbble](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgOEMxMTkuMjUyIDggOCAxMTkuMjUyIDggMjU2czExMS4yNTIgMjQ4IDI0OCAyNDggMjQ4LTExMS4yNTIgMjQ4LTI0OFMzOTIuNzQ4IDggMjU2IDh6bTE2My45NyAxMTQuMzY2YzI5LjUwMyAzNi4wNDYgNDcuMzY5IDgxLjk1NyA0Ny44MzUgMTMxLjk1NS02Ljk4NC0xLjQ3Ny03Ny4wMTgtMTUuNjgyLTE0Ny41MDItNi44MTgtNS43NTItMTQuMDQxLTExLjE4MS0yNi4zOTMtMTguNjE3LTQxLjYxNCA3OC4zMjEtMzEuOTc3IDExMy44MTgtNzcuNDgyIDExOC4yODQtODMuNTIzek0zOTYuNDIxIDk3Ljg3Yy0zLjgxIDUuNDI3LTM1LjY5NyA0OC4yODYtMTExLjAyMSA3Ni41MTktMzQuNzEyLTYzLjc3Ni03My4xODUtMTE2LjE2OC03OS4wNC0xMjQuMDA4IDY3LjE3Ni0xNi4xOTMgMTM3Ljk2NiAxLjI3IDE5MC4wNjEgNDcuNDg5em0tMjMwLjQ4LTMzLjI1YzUuNTg1IDcuNjU5IDQzLjQzOCA2MC4xMTYgNzguNTM3IDEyMi41MDktOTkuMDg3IDI2LjMxMy0xODYuMzYgMjUuOTM0LTE5NS44MzQgMjUuODA5QzYyLjM4IDE0Ny4yMDUgMTA2LjY3OCA5Mi41NzMgMTY1Ljk0MSA2NC42MnpNNDQuMTcgMjU2LjMyM2MwLTIuMTY2LjA0My00LjMyMi4xMDgtNi40NzMgOS4yNjguMTkgMTExLjkyIDEuNTEzIDIxNy43MDYtMzAuMTQ2IDYuMDY0IDExLjg2OCAxMS44NTcgMjMuOTE1IDE3LjE3NCAzNS45NDktNzYuNTk5IDIxLjU3NS0xNDYuMTk0IDgzLjUyNy0xODAuNTMxIDE0Mi4zMDZDNjQuNzk0IDM2MC40MDUgNDQuMTcgMzEwLjczIDQ0LjE3IDI1Ni4zMjN6bTgxLjgwNyAxNjcuMTEzYzIyLjEyNy00NS4yMzMgODIuMTc4LTEwMy42MjIgMTY3LjU3OS0xMzIuNzU2IDI5Ljc0IDc3LjI4MyA0Mi4wMzkgMTQyLjA1MyA0NS4xODkgMTYwLjYzOC02OC4xMTIgMjkuMDEzLTE1MC4wMTUgMjEuMDUzLTIxMi43NjgtMjcuODgyem0yNDguMzggOC40ODljLTIuMTcxLTEyLjg4Ni0xMy40NDYtNzQuODk3LTQxLjE1Mi0xNTEuMDMzIDY2LjM4LTEwLjYyNiAxMjQuNyA2Ljc2OCAxMzEuOTQ3IDkuMDU1LTkuNDQyIDU4Ljk0MS00My4yNzMgMTA5Ljg0NC05MC43OTUgMTQxLjk3OHoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Dribbble(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z" />
        </Icon>
    </>
}