
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mosque` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mosque?s=duotone mosque}
 * @preview ![mosque](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyMC4xMjUgMTA2LjI1QzQ3OC4xMjUgNzkuNzUgNDM5LjUgNDguMzc1IDQwOC4xMjUgMTBMNDAwIDBMMzkxLjg3NSAxMEMzNjAuNSA0OC4zNzUgMzIxLjg3NSA3OS43NSAyNzkuODc1IDEwNi4yNUMyMzMuNzUgMTM1LjI1IDE5MiAxNzYuMjUgMTkyIDIyOS4xMjVDMTkyIDI1MC42MjUgMjAzIDI3MC42MjUgMjIwLjg3NSAyODhINTc5LjEyNUM1OTcgMjcwLjYyNSA2MDggMjUwLjYyNSA2MDggMjI5LjEyNUM2MDggMTc2LjI1IDU2Ni4yNSAxMzUuMjUgNTIwLjEyNSAxMDYuMjVaTTY0IDBDNjQgMCAwIDMyIDAgOTZWMTI4SDEyOFY5NkMxMjggMzIgNjQgMCA2NCAwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0wIDQ4MEMwIDQ5Ny42MjUgMTQuMzc1IDUxMiAzMiA1MTJIOTZDMTEzLjYyNSA1MTIgMTI4IDQ5Ny42MjUgMTI4IDQ4MFYxMjhIMFY0ODBaTTYwOCAyODhIMTkyQzE3NC40IDI4OCAxNjAgMzAyLjQgMTYwIDMyMFY1MTJIMjI0VjQ0OEMyMjQgNDMwLjM3NSAyMzguMzc1IDQxNiAyNTYgNDE2UzI4OCA0MzAuMzc1IDI4OCA0NDhWNTEySDM1MlY0NDBDMzUyIDM5MiA0MDAgMzY4IDQwMCAzNjhTNDQ4IDM5MiA0NDggNDQwVjUxMkg1MTJWNDQ4QzUxMiA0MzAuMzc1IDUyNi4zNzUgNDE2IDU0NCA0MTZTNTc2IDQzMC4zNzUgNTc2IDQ0OFY1MTJINjQwVjMyMEM2NDAgMzAyLjQgNjI1LjYgMjg4IDYwOCAyODhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Mosque(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M520.125 106.25C478.125 79.75 439.5 48.375 408.125 10L400 0L391.875 10C360.5 48.375 321.875 79.75 279.875 106.25C233.75 135.25 192 176.25 192 229.125C192 250.625 203 270.625 220.875 288H579.125C597 270.625 608 250.625 608 229.125C608 176.25 566.25 135.25 520.125 106.25ZM64 0C64 0 0 32 0 96V128H128V96C128 32 64 0 64 0Z" />
            <path d="M0 480C0 497.625 14.375 512 32 512H96C113.625 512 128 497.625 128 480V128H0V480ZM608 288H192C174.4 288 160 302.4 160 320V512H224V448C224 430.375 238.375 416 256 416S288 430.375 288 448V512H352V440C352 392 400 368 400 368S448 392 448 440V512H512V448C512 430.375 526.375 416 544 416S576 430.375 576 448V512H640V320C640 302.4 625.6 288 608 288Z" />
        </Icon>
    </>
}