
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cash-register` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cash-register?s=light cash-register}
 * @preview ![cash-register](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTEuMzU1IDM3OC44NTRMNDg3LjkxIDIxNS4wNDNDNDgzLjQgMTgzLjUzMyA0NTYuNDE4IDE2MC4xMjcgNDI0LjU4NiAxNjAuMTExTDE5MiAxNjBWMTI3Ljg3NUwyODguMDg0IDEyOEgyODguMTI3QzMwNS43MyAxMjggMzIwLjEyNSAxMTMuNjA5IDMyMC4xMjUgOTZWMzJDMzIwLjEyNSAxNC40IDMwNS43MjUgMCAyODguMTI1IDBINjQuMTI1QzQ2LjUyNSAwIDMyLjEyNSAxNC40IDMyLjEyNSAzMlY5NS44NzVDMzIuMTI1IDExMy40NzUgNDYuNTI1IDEyNy44NzUgNjQuMTI1IDEyNy44NzVIMTYwVjE2MEg4Ny41OEM1NS43NCAxNjAgMjguNzQyIDE4My40MDQgMjQuMjI3IDIxNC45MjJMMC42NDYgMzc5LjQ2N0MwLjQzMiAzODIuNDkyIDAuMjE1IDM4NS41MDggMCAzODguNTM1VjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJINDQ4QzQ4My4zNDYgNTEyIDUxMiA0ODMuMzQ2IDUxMiA0NDhWMzg3LjkxQzUxMS44MjIgMzg1LjQxMiA1MTEuNTMzIDM4MS4zNSA1MTEuMzU1IDM3OC44NTRaTTY0LjEyNSA5NS44NzVWMzJIMjg4LjEyNVY5NkwxOTIuMDQxIDk1Ljg3NUwxNjAgOTUuODM0Vjk1Ljg3NUg2NC4xMjVaTTU1LjkwMiAyMTkuNDYzQzU4LjE0NiAyMDMuODA3IDcxLjc2NiAxOTIgODcuNTggMTkySDE5MS45ODRMNDI0LjU3IDE5Mi4xMTFDNDQwLjM4MSAxOTIuMTE5IDQ1My45OTIgMjAzLjkyOCA0NTYuMjMyIDIxOS41NzZMNDc5LjUxNiAzODIuMjVMNDc5LjY0MSAzODRIMzIuMzIyTDU1LjkwMiAyMTkuNDYzWk00ODAgNDQ4QzQ4MCA0NjUuNjcyIDQ2NS42NzQgNDgwIDQ0OCA0ODBINjRDNDYuMzI2IDQ4MCAzMiA0NjUuNjcyIDMyIDQ0OFY0MTZINDgwVjQ0OFpNMTEyIDIzMkM5OC43NDYgMjMyIDg4IDI0Mi43NDQgODggMjU2Qzg4IDI2OS4yNTQgOTguNzQ2IDI4MCAxMTIgMjgwUzEzNiAyNjkuMjU0IDEzNiAyNTZDMTM2IDI0Mi43NDQgMTI1LjI1NCAyMzIgMTEyIDIzMlpNMjA4IDIzMkMxOTQuNzQ2IDIzMiAxODQgMjQyLjc0NCAxODQgMjU2QzE4NCAyNjkuMjU0IDE5NC43NDYgMjgwIDIwOCAyODBTMjMyIDI2OS4yNTQgMjMyIDI1NkMyMzIgMjQyLjc0NCAyMjEuMjU0IDIzMiAyMDggMjMyWk0zMDQgMjMyQzI5MC43NDYgMjMyIDI4MCAyNDIuNzQ0IDI4MCAyNTZDMjgwIDI2OS4yNTQgMjkwLjc0NiAyODAgMzA0IDI4MFMzMjggMjY5LjI1NCAzMjggMjU2QzMyOCAyNDIuNzQ0IDMxNy4yNTQgMjMyIDMwNCAyMzJaTTQwMCAyMzJDMzg2Ljc0NiAyMzIgMzc2IDI0Mi43NDQgMzc2IDI1NkMzNzYgMjY5LjI1NCAzODYuNzQ2IDI4MCA0MDAgMjgwUzQyNCAyNjkuMjU0IDQyNCAyNTZDNDI0IDI0Mi43NDQgNDEzLjI1NCAyMzIgNDAwIDIzMlpNMzUyIDMxMkMzMzguNzQ2IDMxMiAzMjggMzIyLjc0NCAzMjggMzM2QzMyOCAzNDkuMjU0IDMzOC43NDYgMzYwIDM1MiAzNjBTMzc2IDM0OS4yNTQgMzc2IDMzNkMzNzYgMzIyLjc0NCAzNjUuMjU0IDMxMiAzNTIgMzEyWk0yNTYgMzEyQzI0Mi43NDYgMzEyIDIzMiAzMjIuNzQ0IDIzMiAzMzZDMjMyIDM0OS4yNTQgMjQyLjc0NiAzNjAgMjU2IDM2MFMyODAgMzQ5LjI1NCAyODAgMzM2QzI4MCAzMjIuNzQ0IDI2OS4yNTQgMzEyIDI1NiAzMTJaTTE2MCAzMTJDMTQ2Ljc0NiAzMTIgMTM2IDMyMi43NDQgMTM2IDMzNkMxMzYgMzQ5LjI1NCAxNDYuNzQ2IDM2MCAxNjAgMzYwUzE4NCAzNDkuMjU0IDE4NCAzMzZDMTg0IDMyMi43NDQgMTczLjI1NCAzMTIgMTYwIDMxMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CashRegister(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M511.355 378.854L487.91 215.043C483.4 183.533 456.418 160.127 424.586 160.111L192 160V127.875L288.084 128H288.127C305.73 128 320.125 113.609 320.125 96V32C320.125 14.4 305.725 0 288.125 0H64.125C46.525 0 32.125 14.4 32.125 32V95.875C32.125 113.475 46.525 127.875 64.125 127.875H160V160H87.58C55.74 160 28.742 183.404 24.227 214.922L0.646 379.467C0.432 382.492 0.215 385.508 0 388.535V448C0 483.346 28.654 512 64 512H448C483.346 512 512 483.346 512 448V387.91C511.822 385.412 511.533 381.35 511.355 378.854ZM64.125 95.875V32H288.125V96L192.041 95.875L160 95.834V95.875H64.125ZM55.902 219.463C58.146 203.807 71.766 192 87.58 192H191.984L424.57 192.111C440.381 192.119 453.992 203.928 456.232 219.576L479.516 382.25L479.641 384H32.322L55.902 219.463ZM480 448C480 465.672 465.674 480 448 480H64C46.326 480 32 465.672 32 448V416H480V448ZM112 232C98.746 232 88 242.744 88 256C88 269.254 98.746 280 112 280S136 269.254 136 256C136 242.744 125.254 232 112 232ZM208 232C194.746 232 184 242.744 184 256C184 269.254 194.746 280 208 280S232 269.254 232 256C232 242.744 221.254 232 208 232ZM304 232C290.746 232 280 242.744 280 256C280 269.254 290.746 280 304 280S328 269.254 328 256C328 242.744 317.254 232 304 232ZM400 232C386.746 232 376 242.744 376 256C376 269.254 386.746 280 400 280S424 269.254 424 256C424 242.744 413.254 232 400 232ZM352 312C338.746 312 328 322.744 328 336C328 349.254 338.746 360 352 360S376 349.254 376 336C376 322.744 365.254 312 352 312ZM256 312C242.746 312 232 322.744 232 336C232 349.254 242.746 360 256 360S280 349.254 280 336C280 322.744 269.254 312 256 312ZM160 312C146.746 312 136 322.744 136 336C136 349.254 146.746 360 160 360S184 349.254 184 336C184 322.744 173.254 312 160 312Z" />
        </Icon>
    </>
}