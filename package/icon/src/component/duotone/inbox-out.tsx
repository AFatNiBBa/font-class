
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `inbox-out` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-out?s=duotone inbox-out}
 * @preview ![inbox-out](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4MCAzMjBIMzg0TDM1MiAzODRIMTYwTDEyOCAzMjBIMzJDMTQuMzI2IDMyMCAwIDMzNC4zMjggMCAzNTJWNDY0QzAgNDkwLjUwOCAyMS40OSA1MTIgNDggNTEySDQ2NEM0OTAuNTA4IDUxMiA1MTIgNDkwLjUwOCA1MTIgNDY0VjM1MkM1MTIgMzM0LjMyOCA0OTcuNjcyIDMyMCA0ODAgMzIwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xMzcuMzc1IDE1MC42MjVDMTI0Ljg3NSAxMzguMTI1IDEyNC44NzUgMTE3Ljg3NSAxMzcuMzc1IDEwNS4zNzVMMjMzLjM3NSA5LjM3NUMyNDUuODc1IC0zLjEyNSAyNjYuMTI1IC0zLjEyNSAyNzguNjI1IDkuMzc1TDM3NC42MjUgMTA1LjM3NUMzODcuMTI1IDExNy44NzUgMzg3LjEyNSAxMzguMTI1IDM3NC42MjUgMTUwLjYyNUMzNjguMzc1IDE1Ni44NzUgMzYwLjE4NyAxNjAgMzUyIDE2MFMzMzUuNjI1IDE1Ni44NzUgMzI5LjM3NSAxNTAuNjI1TDI4OCAxMDkuMjVWMjg4QzI4OCAzMDUuNjg4IDI3My42ODcgMzIwIDI1NiAzMjBTMjI0IDMwNS42ODggMjI0IDI4OFYxMDkuMjVMMTgyLjYyNSAxNTAuNjI1QzE3MC4xMjUgMTYzLjEyNSAxNDkuODc1IDE2My4xMjUgMTM3LjM3NSAxNTAuNjI1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function InboxOut(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M480 320H384L352 384H160L128 320H32C14.326 320 0 334.328 0 352V464C0 490.508 21.49 512 48 512H464C490.508 512 512 490.508 512 464V352C512 334.328 497.672 320 480 320Z" />
            <path d="M137.375 150.625C124.875 138.125 124.875 117.875 137.375 105.375L233.375 9.375C245.875 -3.125 266.125 -3.125 278.625 9.375L374.625 105.375C387.125 117.875 387.125 138.125 374.625 150.625C368.375 156.875 360.187 160 352 160S335.625 156.875 329.375 150.625L288 109.25V288C288 305.688 273.687 320 256 320S224 305.688 224 288V109.25L182.625 150.625C170.125 163.125 149.875 163.125 137.375 150.625Z" />
        </Icon>
    </>
}