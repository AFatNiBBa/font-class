
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sun-bright` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sun-bright?s=duotone sun-bright}
 * @preview ![sun-bright](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEwOC45MjIgNzQuOTY5Qzk5LjU3OCA2NS41OTQgODQuMzU5IDY1LjU5NCA3NC45ODQgNzQuOTY5UzY1LjYwOSA5OS41MzEgNzQuOTg0IDEwOC45MDZMMTIwLjIzNCAxNTQuMTg4QzEyNC45MDYgMTU4Ljg3NSAxMzEuMDYyIDE2MS4yMTkgMTM3LjIwMyAxNjEuMjE5UzE0OS40ODQgMTU4Ljg3NSAxNTQuMTcyIDE1NC4xODhDMTYzLjU0NyAxNDQuODEyIDE2My41NDcgMTI5LjYyNSAxNTQuMTcyIDEyMC4yNUwxMDguOTIyIDc0Ljk2OVpNMjU2IDBDMjQyLjc1IDAgMjMyIDEwLjc1IDIzMiAyNFY4OEMyMzIgMTAxLjI1IDI0Mi43NSAxMTIgMjU2IDExMlMyODAgMTAxLjI1IDI4MCA4OFYyNEMyODAgMTAuNzUgMjY5LjI1IDAgMjU2IDBaTTExMiAyNTZDMTEyIDI0Mi43NSAxMDEuMjUgMjMyIDg4IDIzMkgyNEMxMC43NSAyMzIgMCAyNDIuNzUgMCAyNTZTMTAuNzUgMjgwIDI0IDI4MEg4OEMxMDEuMjUgMjgwIDExMiAyNjkuMjUgMTEyIDI1NlpNMzc0Ljc5NyAxNjEuMjE5QzM4MC45MzcgMTYxLjIxOSAzODcuMDk0IDE1OC44NzUgMzkxLjc2NiAxNTQuMTg3TDQzNy4wMTYgMTA4LjkwNkM0NDYuMzkxIDk5LjUzMSA0NDYuMzkxIDg0LjM0NCA0MzcuMDE2IDc0Ljk2OVM0MTIuNDIyIDY1LjU5NCA0MDMuMDc4IDc0Ljk2OUwzNTcuODI4IDEyMC4yNUMzNDguNDUzIDEyOS42MjUgMzQ4LjQ1MyAxNDQuODEyIDM1Ny44MjggMTU0LjE4N0MzNjIuNTE2IDE1OC44NzUgMzY4LjY1NiAxNjEuMjE5IDM3NC43OTcgMTYxLjIxOVpNMjU2IDQwMEMyNDIuNzUgNDAwIDIzMiA0MTAuNzUgMjMyIDQyNFY0ODhDMjMyIDUwMS4yNSAyNDIuNzUgNTEyIDI1NiA1MTJTMjgwIDUwMS4yNSAyODAgNDg4VjQyNEMyODAgNDEwLjc1IDI2OS4yNSA0MDAgMjU2IDQwMFpNMTIwLjIzNCAzNTcuODEyTDc0Ljk4NCA0MDMuMDk0QzY1LjYwOSA0MTIuNDY5IDY1LjYwOSA0MjcuNjU2IDc0Ljk4NCA0MzcuMDMxQzc5LjY3MiA0NDEuNzE5IDg1LjgxMiA0NDQuMDYzIDkxLjk1MyA0NDQuMDYzUzEwNC4yNSA0NDEuNzE5IDEwOC45MjIgNDM3LjAzMUwxNTQuMTcyIDM5MS43NUMxNjMuNTQ3IDM4Mi4zNzUgMTYzLjU0NyAzNjcuMTg4IDE1NC4xNzIgMzU3LjgxMlMxMjkuNTc4IDM0OC40MzggMTIwLjIzNCAzNTcuODEyWk00ODggMjMySDQyNEM0MTAuNzUgMjMyIDQwMCAyNDIuNzUgNDAwIDI1NlM0MTAuNzUgMjgwIDQyNCAyODBINDg4QzUwMS4yNSAyODAgNTEyIDI2OS4yNSA1MTIgMjU2UzUwMS4yNSAyMzIgNDg4IDIzMlpNMzkxLjc2NiAzNTcuODEyQzM4Mi40MjIgMzQ4LjQzNyAzNjcuMjAzIDM0OC40MzcgMzU3LjgyOCAzNTcuODEyUzM0OC40NTMgMzgyLjM3NSAzNTcuODI4IDM5MS43NUw0MDMuMDc4IDQzNy4wMzFDNDA3Ljc1IDQ0MS43MTkgNDEzLjkwNiA0NDQuMDYzIDQyMC4wNDcgNDQ0LjA2M1M0MzIuMzI4IDQ0MS43MTkgNDM3LjAxNiA0MzcuMDMxQzQ0Ni4zOTEgNDI3LjY1NiA0NDYuMzkxIDQxMi40NjkgNDM3LjAxNiA0MDMuMDk0TDM5MS43NjYgMzU3LjgxMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjU2IDE0NEMxOTQuMTQ1IDE0NCAxNDQgMTk0LjE0MyAxNDQgMjU2QzE0NCAzMTcuODU1IDE5NC4xNDUgMzY4IDI1NiAzNjhTMzY4IDMxNy44NTUgMzY4IDI1NkMzNjggMTk0LjE0MyAzMTcuODU1IDE0NCAyNTYgMTQ0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SunBright(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M108.922 74.969C99.578 65.594 84.359 65.594 74.984 74.969S65.609 99.531 74.984 108.906L120.234 154.188C124.906 158.875 131.062 161.219 137.203 161.219S149.484 158.875 154.172 154.188C163.547 144.812 163.547 129.625 154.172 120.25L108.922 74.969ZM256 0C242.75 0 232 10.75 232 24V88C232 101.25 242.75 112 256 112S280 101.25 280 88V24C280 10.75 269.25 0 256 0ZM112 256C112 242.75 101.25 232 88 232H24C10.75 232 0 242.75 0 256S10.75 280 24 280H88C101.25 280 112 269.25 112 256ZM374.797 161.219C380.937 161.219 387.094 158.875 391.766 154.187L437.016 108.906C446.391 99.531 446.391 84.344 437.016 74.969S412.422 65.594 403.078 74.969L357.828 120.25C348.453 129.625 348.453 144.812 357.828 154.187C362.516 158.875 368.656 161.219 374.797 161.219ZM256 400C242.75 400 232 410.75 232 424V488C232 501.25 242.75 512 256 512S280 501.25 280 488V424C280 410.75 269.25 400 256 400ZM120.234 357.812L74.984 403.094C65.609 412.469 65.609 427.656 74.984 437.031C79.672 441.719 85.812 444.063 91.953 444.063S104.25 441.719 108.922 437.031L154.172 391.75C163.547 382.375 163.547 367.188 154.172 357.812S129.578 348.438 120.234 357.812ZM488 232H424C410.75 232 400 242.75 400 256S410.75 280 424 280H488C501.25 280 512 269.25 512 256S501.25 232 488 232ZM391.766 357.812C382.422 348.437 367.203 348.437 357.828 357.812S348.453 382.375 357.828 391.75L403.078 437.031C407.75 441.719 413.906 444.063 420.047 444.063S432.328 441.719 437.016 437.031C446.391 427.656 446.391 412.469 437.016 403.094L391.766 357.812Z" />
            <path d="M256 144C194.145 144 144 194.143 144 256C144 317.855 194.145 368 256 368S368 317.855 368 256C368 194.143 317.855 144 256 144Z" />
        </Icon>
    </>
}