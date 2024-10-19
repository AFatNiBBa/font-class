
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=thin box-ballot}
 * @preview ![box-ballot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMjU2SDQ0OEM0NTYuODM2IDI1NiA0NjQgMjQ4LjgzNiA0NjQgMjQwVjMyQzQ2NCAxNC4zMjYgNDQ5LjY3NCAwIDQzMiAwSDE0NEMxMjYuMzI2IDAgMTEyIDE0LjMyNiAxMTIgMzJWMjQwQzExMiAyNDguODM2IDExOS4xNjQgMjU2IDEyOCAyNTZaTTEyOCAzMkMxMjggMjMuMTc4IDEzNS4xNzggMTYgMTQ0IDE2SDQzMkM0NDAuODIyIDE2IDQ0OCAyMy4xNzggNDQ4IDMyVjI0MEgxMjhWMzJaTTUyOCAxNjBINTA0QzQ5OS41ODIgMTYwIDQ5NiAxNjMuNTgyIDQ5NiAxNjhTNDk5LjU4MiAxNzYgNTA0IDE3Nkg1MjhDNTQ1LjY3NCAxNzYgNTYwIDE5MC4zMjYgNTYwIDIwOFYzMjBIMTZWMjA4QzE2IDE5MC4zMjYgMzAuMzI2IDE3NiA0OCAxNzZINzJDNzYuNDE4IDE3NiA4MCAxNzIuNDE4IDgwIDE2OFM3Ni40MTggMTYwIDcyIDE2MEg0OEMyMS40OSAxNjAgMCAxODEuNDkgMCAyMDhWNDgwQzAgNDk3LjY3NCAxNC4zMjYgNTEyIDMyIDUxMkg1NDRDNTYxLjY3NCA1MTIgNTc2IDQ5Ny42NzQgNTc2IDQ4MFYyMDhDNTc2IDE4MS40OSA1NTQuNTEgMTYwIDUyOCAxNjBaTTU2MCA0ODBDNTYwIDQ4OC44MjIgNTUyLjgyMiA0OTYgNTQ0IDQ5NkgzMkMyMy4xNzggNDk2IDE2IDQ4OC44MjIgMTYgNDgwVjMzNkg1NjBWNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BoxBallot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M128 256H448C456.836 256 464 248.836 464 240V32C464 14.326 449.674 0 432 0H144C126.326 0 112 14.326 112 32V240C112 248.836 119.164 256 128 256ZM128 32C128 23.178 135.178 16 144 16H432C440.822 16 448 23.178 448 32V240H128V32ZM528 160H504C499.582 160 496 163.582 496 168S499.582 176 504 176H528C545.674 176 560 190.326 560 208V320H16V208C16 190.326 30.326 176 48 176H72C76.418 176 80 172.418 80 168S76.418 160 72 160H48C21.49 160 0 181.49 0 208V480C0 497.674 14.326 512 32 512H544C561.674 512 576 497.674 576 480V208C576 181.49 554.51 160 528 160ZM560 480C560 488.822 552.822 496 544 496H32C23.178 496 16 488.822 16 480V336H560V480Z" />
        </Icon>
    </>
}