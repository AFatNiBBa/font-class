
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `transporter-1` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-1?s=duotone transporter-1}
 * @preview ![transporter-1](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTkzLjc1IDM2NC4zNzVMNjQgMzUyTDUxLjYyNSAzMjIuMjVDNTAuODc1IDMyMC44NzUgNDkuNSAzMjAgNDggMzIwUzQ1LjEyNSAzMjAuODc1IDQ0LjM3NSAzMjIuMjVMMzIgMzUyTDIuMjUgMzY0LjM3NUMwLjg3NSAzNjUuMTI1IDAgMzY2LjUgMCAzNjhTMC44NzUgMzcwLjg3NSAyLjI1IDM3MS42MjVMMzIgMzg0TDQ0LjM3NSA0MTMuNzVDNDUuMTI1IDQxNS4xMjUgNDYuNSA0MTYgNDggNDE2UzUwLjg3NSA0MTUuMTI1IDUxLjYyNSA0MTMuNzVMNjQgMzg0TDkzLjc1IDM3MS42MjVDOTUuMTI1IDM3MC44NzUgOTYgMzY5LjUgOTYgMzY4Uzk1LjEyNSAzNjUuMTI1IDkzLjc1IDM2NC4zNzVaTTUwOS43NSAxNzIuMzc1TDQ4MCAxNjBMNDY3LjYyNSAxMzAuMjVDNDY2Ljg3NSAxMjguODc1IDQ2NS41IDEyOCA0NjQgMTI4UzQ2MS4xMjUgMTI4Ljg3NSA0NjAuMzc1IDEzMC4yNUw0NDggMTYwTDQxOC4yNSAxNzIuMzc1QzQxNi44NzUgMTczLjEyNSA0MTYgMTc0LjUgNDE2IDE3NlM0MTYuODc1IDE3OC44NzUgNDE4LjI1IDE3OS42MjVMNDQ4IDE5Mkw0NjAuMzc1IDIyMS43NUM0NjEuMTI1IDIyMy4xMjUgNDYyLjUgMjI0IDQ2NCAyMjRTNDY2Ljg3NSAyMjMuMTI1IDQ2Ny42MjUgMjIxLjc1TDQ4MCAxOTJMNTA5Ljc1IDE3OS42MjVDNTExLjEyNSAxNzguODc1IDUxMiAxNzcuNSA1MTIgMTc2UzUxMS4xMjUgMTczLjEyNSA1MDkuNzUgMTcyLjM3NVpNMzM2IDMyMEgxNzZDMTY3LjE1NiAzMjAgMTYwIDMyNy4xNTYgMTYwIDMzNlMxNjcuMTU2IDM1MiAxNzYgMzUySDMzNkMzNDQuODQ0IDM1MiAzNTIgMzQ0Ljg0NCAzNTIgMzM2UzM0NC44NDQgMzIwIDMzNiAzMjBaTTMzNiAzODRIMTc2QzE2Ny4xNTYgMzg0IDE2MCAzOTEuMTU2IDE2MCA0MDBTMTY3LjE1NiA0MTYgMTc2IDQxNkgzMzZDMzQ0Ljg0NCA0MTYgMzUyIDQwOC44NDQgMzUyIDQwMFMzNDQuODQ0IDM4NCAzMzYgMzg0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTYuMDIgOTZDMjgyLjUyIDk2IDMwNC4wMiA3NC41IDMwNC4wMiA0OFMyODIuNTIgMCAyNTYuMDIgMFMyMDguMDIgMjEuNSAyMDguMDIgNDhTMjI5LjUyIDk2IDI1Ni4wMiA5NlpNMTUyLjY0NSAyNzYuNUwxODQuMDIgMjM4Ljc1VjI4OEgzMjguMDJWMjM4Ljc1TDM1OS4zOTUgMjc2LjVDMzcwLjc3IDI5MCAzOTAuODk1IDI5MS44NzUgNDA0LjUyIDI4MC42MjVDNDE4LjAyIDI2OS4yNSA0MTkuODk1IDI0OS4xMjUgNDA4LjY0NSAyMzUuNUwzMzguMTQ1IDE1MUMzMjYuMDIgMTM2LjM3NSAzMDguMDIgMTI4IDI4OS4wMiAxMjhIMjIzLjAyQzIwNC4wMiAxMjggMTg2LjAyIDEzNi4zNzUgMTczLjg5NSAxNTFMMTAzLjM5NSAyMzUuNUM5Mi4xNDUgMjQ5LjEyNSA5My44OTUgMjY5LjI1IDEwNy41MiAyODAuNjI1QzEyMS4xNDUgMjkxLjg3NSAxNDEuMjcgMjkwIDE1Mi42NDUgMjc2LjVaTTM4NC4wMiA0NDhIMTI4LjAyQzExMC4zOTUgNDQ4IDk2LjAyIDQ2Mi4zNzUgOTYuMDIgNDgwVjUxMkg0MTYuMDJWNDgwQzQxNi4wMiA0NjIuMzc1IDQwMS42NDUgNDQ4IDM4NC4wMiA0NDhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Transporter_1(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M93.75 364.375L64 352L51.625 322.25C50.875 320.875 49.5 320 48 320S45.125 320.875 44.375 322.25L32 352L2.25 364.375C0.875 365.125 0 366.5 0 368S0.875 370.875 2.25 371.625L32 384L44.375 413.75C45.125 415.125 46.5 416 48 416S50.875 415.125 51.625 413.75L64 384L93.75 371.625C95.125 370.875 96 369.5 96 368S95.125 365.125 93.75 364.375ZM509.75 172.375L480 160L467.625 130.25C466.875 128.875 465.5 128 464 128S461.125 128.875 460.375 130.25L448 160L418.25 172.375C416.875 173.125 416 174.5 416 176S416.875 178.875 418.25 179.625L448 192L460.375 221.75C461.125 223.125 462.5 224 464 224S466.875 223.125 467.625 221.75L480 192L509.75 179.625C511.125 178.875 512 177.5 512 176S511.125 173.125 509.75 172.375ZM336 320H176C167.156 320 160 327.156 160 336S167.156 352 176 352H336C344.844 352 352 344.844 352 336S344.844 320 336 320ZM336 384H176C167.156 384 160 391.156 160 400S167.156 416 176 416H336C344.844 416 352 408.844 352 400S344.844 384 336 384Z" />
            <path d="M256.02 96C282.52 96 304.02 74.5 304.02 48S282.52 0 256.02 0S208.02 21.5 208.02 48S229.52 96 256.02 96ZM152.645 276.5L184.02 238.75V288H328.02V238.75L359.395 276.5C370.77 290 390.895 291.875 404.52 280.625C418.02 269.25 419.895 249.125 408.645 235.5L338.145 151C326.02 136.375 308.02 128 289.02 128H223.02C204.02 128 186.02 136.375 173.895 151L103.395 235.5C92.145 249.125 93.895 269.25 107.52 280.625C121.145 291.875 141.27 290 152.645 276.5ZM384.02 448H128.02C110.395 448 96.02 462.375 96.02 480V512H416.02V480C416.02 462.375 401.645 448 384.02 448Z" />
        </Icon>
    </>
}