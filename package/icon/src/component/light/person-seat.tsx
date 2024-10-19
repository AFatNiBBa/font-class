
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-seat` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-seat?s=light person-seat}
 * @preview ![person-seat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggNDQ4SDMxOC4xMjVMMzAzLjg3NSAzMzRDMzAyLjg3NSAzMjYgMjk2LjA2MiAzMjAgMjg4IDMyMEgxNDRDMTM1LjE3MiAzMjAgMTI4IDMxMi44MTIgMTI4IDMwNFYyMjRIMjU2QzI2NC44MzggMjI0IDI3MiAyMTYuODM2IDI3MiAyMDhDMjcyIDE5OS4xNjIgMjY0LjgzOCAxOTIgMjU2IDE5MkgxMjhWMTYwQzEyOCAxNTEuMTU2IDEyMC44NDQgMTQ0IDExMiAxNDRTOTYgMTUxLjE1NiA5NiAxNjBWMzA0Qzk2IDMzMC40NjkgMTE3LjUzMSAzNTIgMTQ0IDM1MkgyNzMuODc1TDI4OC4xMjUgNDY2QzI4OS4xMjUgNDc0IDI5NS45MzggNDgwIDMwNCA0ODBIMzY4QzM3Ni44NDQgNDgwIDM4NCA0NzIuODQ0IDM4NCA0NjRTMzc2Ljg0NCA0NDggMzY4IDQ0OFpNMjA4IDQxNkgxMzEuMjAzQzc2LjUgNDE2IDMyIDM3MS41IDMyIDMxNi44MTJWMTQ0QzMyIDEzNS4xNTYgMjQuODQ0IDEyOCAxNiAxMjhTMCAxMzUuMTU2IDAgMTQ0VjMxNi44MTJDMCAzODkuMTU2IDU4Ljg1OSA0NDggMTMxLjIwMyA0NDhIMjA4QzIxNi44NDQgNDQ4IDIyNCA0NDAuODQ0IDIyNCA0MzJTMjE2Ljg0NCA0MTYgMjA4IDQxNlpNMTM2IDExMkMxNjYuOTI4IDExMiAxOTIgODYuOTI2IDE5MiA1NlMxNjYuOTI4IDAgMTM2IDBTODAgMjUuMDc0IDgwIDU2UzEwNS4wNzIgMTEyIDEzNiAxMTJaTTEzNiAzMkMxNDkuMjM0IDMyIDE2MCA0Mi43NjYgMTYwIDU2QzE2MCA2OS4yMzIgMTQ5LjIzNCA4MCAxMzYgODBTMTEyIDY5LjIzMiAxMTIgNTZDMTEyIDQyLjc2NiAxMjIuNzY2IDMyIDEzNiAzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PersonSeat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M368 448H318.125L303.875 334C302.875 326 296.062 320 288 320H144C135.172 320 128 312.812 128 304V224H256C264.838 224 272 216.836 272 208C272 199.162 264.838 192 256 192H128V160C128 151.156 120.844 144 112 144S96 151.156 96 160V304C96 330.469 117.531 352 144 352H273.875L288.125 466C289.125 474 295.938 480 304 480H368C376.844 480 384 472.844 384 464S376.844 448 368 448ZM208 416H131.203C76.5 416 32 371.5 32 316.812V144C32 135.156 24.844 128 16 128S0 135.156 0 144V316.812C0 389.156 58.859 448 131.203 448H208C216.844 448 224 440.844 224 432S216.844 416 208 416ZM136 112C166.928 112 192 86.926 192 56S166.928 0 136 0S80 25.074 80 56S105.072 112 136 112ZM136 32C149.234 32 160 42.766 160 56C160 69.232 149.234 80 136 80S112 69.232 112 56C112 42.766 122.766 32 136 32Z" />
        </Icon>
    </>
}