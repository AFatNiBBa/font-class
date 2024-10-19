
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `headphones-simple` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/headphones-simple?s=duotone headphones-simple}
 * @preview ![headphones-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAzMkMxMTIuOTA2IDMyIDQuNTYyIDE1MS4xMjUgMCAyODhWMzkyQzAgNDA1LjI1NSAxMC43NDUgNDE2IDI0IDQxNkgyNEMzNy4yNTUgNDE2IDQ4IDQwNS4yNTUgNDggMzkyVjI4OEM0OCAxNzMuMzI4IDE0MS4zNDQgODAuMjAzIDI1NiA4MC4xODhDMzcwLjY1NiA4MC4yMDMgNDY0IDE3My4zMjggNDY0IDI4OFYzOTJDNDY0IDQwNS4yNTUgNDc0Ljc0NSA0MTYgNDg4IDQxNkw0ODggNDE2QzUwMS4yNTUgNDE2IDUxMiA0MDUuMjU1IDUxMiAzOTJWMjg4QzUwNy40MzggMTUxLjEyNSAzOTkuMDk0IDMyIDI1NiAzMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTYwIDI4OEgxNDRDMTA4LjY1NiAyODggODAgMzE2LjcwMyA4MCAzNTIuMTI1VjQxNS44NzVDODAgNDUxLjI5NyAxMDguNjU2IDQ4MCAxNDQgNDgwSDE2MEMxNzcuNjU2IDQ4MCAxOTIgNDY1LjY0MSAxOTIgNDQ3LjkzOFYzMjAuMDYyQzE5MiAzMDIuMzQ0IDE3Ny42NTYgMjg4IDE2MCAyODhaTTM2OCAyODhIMzUyQzMzNC4zNDQgMjg4IDMyMCAzMDIuMzQ0IDMyMCAzMjAuMDYyVjQ0Ny45MzhDMzIwIDQ2NS42NDEgMzM0LjM0NCA0ODAgMzUyIDQ4MEgzNjhDNDAzLjM0NCA0ODAgNDMyIDQ1MS4yOTcgNDMyIDQxNS44NzVWMzUyLjEyNUM0MzIgMzE2LjcwMyA0MDMuMzQ0IDI4OCAzNjggMjg4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HeadphonesSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 32C112.906 32 4.562 151.125 0 288V392C0 405.255 10.745 416 24 416H24C37.255 416 48 405.255 48 392V288C48 173.328 141.344 80.203 256 80.188C370.656 80.203 464 173.328 464 288V392C464 405.255 474.745 416 488 416L488 416C501.255 416 512 405.255 512 392V288C507.438 151.125 399.094 32 256 32Z" />
            <path d="M160 288H144C108.656 288 80 316.703 80 352.125V415.875C80 451.297 108.656 480 144 480H160C177.656 480 192 465.641 192 447.938V320.062C192 302.344 177.656 288 160 288ZM368 288H352C334.344 288 320 302.344 320 320.062V447.938C320 465.641 334.344 480 352 480H368C403.344 480 432 451.297 432 415.875V352.125C432 316.703 403.344 288 368 288Z" />
        </Icon>
    </>
}