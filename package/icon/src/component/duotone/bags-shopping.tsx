
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bags-shopping` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bags-shopping?s=duotone bags-shopping}
 * @preview ![bags-shopping](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCAxOTJDNDQ4IDE3NC40IDQzMy42IDE2MCA0MTYgMTYwSDMyMFY5OS42MDVDMzIwIDUzLjE4IDI4OC42MjcgMTAuNjAyIDI0My4wMzcgMS44MzRDMTgxLjY5NSAtOS45NjUgMTI4IDM2Ljc3MyAxMjggOTZWMTYwSDMyQzE0LjQgMTYwIDAgMTc0LjQgMCAxOTJWNDQ4QzAgNDY1LjYgMTQuNCA0ODAgMzIgNDgwSDE2MFYyNzJDMTYwIDI0NS42IDE4MS42IDIyNCAyMDggMjI0SDQ0OFYxOTJaTTI3MiAxNjBIMTc2Vjk2QzE3NiA2OS41IDE5Ny41IDQ4IDIyNCA0OFMyNzIgNjkuNSAyNzIgOTZWMTYwWk00NjQgMzIwQzQ1NS4xNjQgMzIwIDQ0OCAzMjcuMTYyIDQ0OCAzMzUuOTk4VjM1MS45OTJDNDQ4IDM3MC4xMTMgNDQwLjM3NSAzODcuMjM0IDQyNi44NzUgMzk5LjM1NUM0MTMuNSA0MTEuNjA0IDM5NS42MjUgNDE3LjQ3NyAzNzcuNjI1IDQxNS43MjdDMzQ0LjM3NSA0MTIuNDc5IDMyMCAzODIuNjA5IDMyMCAzNDkuMTE3VjMzNkMzMjAgMzI3LjE2NCAzMTIuODM4IDMyMCAzMDQgMzIwQzI5NS4xNjQgMzIwIDI4OCAzMjcuMTY0IDI4OCAzMzZWMzQ4LjYxOUMyODggMzk3LjQ4MiAzMjMgNDQwLjk3MSAzNzEuMzc1IDQ0Ny4yMjFDMzk4Ljc1IDQ1MC43MTkgNDI2LjM3NSA0NDIuMzQ2IDQ0Ny4yNSA0MjQuMUM0NjggNDA1Ljk4IDQ4MCAzNzkuNjExIDQ4MCAzNTEuOTkyVjMzNS45OThDNDgwIDMyNy4xNjIgNDcyLjgzOCAzMjAgNDY0IDMyMFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTQ0IDI1NkgyMjRDMjA2LjM3NSAyNTYgMTkyIDI3MC4zNzUgMTkyIDI4OFY0ODBDMTkyIDQ5Ny42MjUgMjA2LjM3NSA1MTIgMjI0IDUxMkg1NDRDNTYxLjYyNSA1MTIgNTc2IDQ5Ny42MjUgNTc2IDQ4MFYyODhDNTc2IDI3MC4zNzUgNTYxLjYyNSAyNTYgNTQ0IDI1NlpNNDgwIDM1MS45OTJDNDgwIDM3OS42MTEgNDY4IDQwNS45OCA0NDcuMjUgNDI0LjFDNDI2LjM3NSA0NDIuMzQ2IDM5OC43NSA0NTAuNzE5IDM3MS4zNzUgNDQ3LjIyMUMzMjMgNDQwLjk3MSAyODggMzk3LjQ4MiAyODggMzQ4LjYxOVYzMzZDMjg4IDMyNy4xNjQgMjk1LjE2NCAzMjAgMzA0IDMyMEMzMTIuODM4IDMyMCAzMjAgMzI3LjE2NCAzMjAgMzM2VjM0OS4xMTdDMzIwIDM4Mi42MDkgMzQ0LjM3NSA0MTIuNDc5IDM3Ny42MjUgNDE1LjcyN0MzOTUuNjI1IDQxNy40NzcgNDEzLjUgNDExLjYwNCA0MjYuODc1IDM5OS4zNTVDNDQwLjM3NSAzODcuMjM0IDQ0OCAzNzAuMTEzIDQ0OCAzNTEuOTkyVjMzNS45OThDNDQ4IDMyNy4xNjIgNDU1LjE2NCAzMjAgNDY0IDMyMEM0NzIuODM4IDMyMCA0ODAgMzI3LjE2MiA0ODAgMzM1Ljk5OFYzNTEuOTkyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BagsShopping(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M448 192C448 174.4 433.6 160 416 160H320V99.605C320 53.18 288.627 10.602 243.037 1.834C181.695 -9.965 128 36.773 128 96V160H32C14.4 160 0 174.4 0 192V448C0 465.6 14.4 480 32 480H160V272C160 245.6 181.6 224 208 224H448V192ZM272 160H176V96C176 69.5 197.5 48 224 48S272 69.5 272 96V160ZM464 320C455.164 320 448 327.162 448 335.998V351.992C448 370.113 440.375 387.234 426.875 399.355C413.5 411.604 395.625 417.477 377.625 415.727C344.375 412.479 320 382.609 320 349.117V336C320 327.164 312.838 320 304 320C295.164 320 288 327.164 288 336V348.619C288 397.482 323 440.971 371.375 447.221C398.75 450.719 426.375 442.346 447.25 424.1C468 405.98 480 379.611 480 351.992V335.998C480 327.162 472.838 320 464 320Z" />
            <path d="M544 256H224C206.375 256 192 270.375 192 288V480C192 497.625 206.375 512 224 512H544C561.625 512 576 497.625 576 480V288C576 270.375 561.625 256 544 256ZM480 351.992C480 379.611 468 405.98 447.25 424.1C426.375 442.346 398.75 450.719 371.375 447.221C323 440.971 288 397.482 288 348.619V336C288 327.164 295.164 320 304 320C312.838 320 320 327.164 320 336V349.117C320 382.609 344.375 412.479 377.625 415.727C395.625 417.477 413.5 411.604 426.875 399.355C440.375 387.234 448 370.113 448 351.992V335.998C448 327.162 455.164 320 464 320C472.838 320 480 327.162 480 335.998V351.992Z" />
        </Icon>
    </>
}