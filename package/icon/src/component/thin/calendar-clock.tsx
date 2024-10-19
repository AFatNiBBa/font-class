
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-clock` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-clock?s=thin calendar-clock}
 * @preview ![calendar-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODggMzY4SDQzMlYyOTZDNDMyIDI5MS41OTQgNDI4LjQyMiAyODggNDI0IDI4OFM0MTYgMjkxLjU5NCA0MTYgMjk2VjM3NkM0MTYgMzgwLjQwNiA0MTkuNTc4IDM4NCA0MjQgMzg0SDQ4OEM0OTIuNDIyIDM4NCA0OTYgMzgwLjQwNiA0OTYgMzc2UzQ5Mi40MjIgMzY4IDQ4OCAzNjhaTTQzMiAyMjRDMzUyLjQ3MSAyMjQgMjg4IDI4OC40NzEgMjg4IDM2OFMzNTIuNDcxIDUxMiA0MzIgNTEyUzU3NiA0NDcuNTI5IDU3NiAzNjhTNTExLjUyOSAyMjQgNDMyIDIyNFpNNDMyIDQ5NkMzNjEuNDIyIDQ5NiAzMDQgNDM4LjU4IDMwNCAzNjhTMzYxLjQyMiAyNDAgNDMyIDI0MEM1MDIuNTggMjQwIDU2MCAyOTcuNDIgNTYwIDM2OFM1MDIuNTggNDk2IDQzMiA0OTZaTTE2IDQ2NFYyMDhIMjgwQzI4NC40MTggMjA4IDI4OCAyMDQuNDE4IDI4OCAyMDBWMjAwQzI4OCAxOTUuNTgyIDI4NC40MTggMTkyIDI4MCAxOTJIMTZWMTEyQzE2IDk0LjMyNyAzMC4zMjcgODAgNDggODBIMTEyVjEyOEMxMTIgMTMyLjQyMiAxMTUuNTk0IDEzNiAxMjAgMTM2UzEyOCAxMzIuNDIyIDEyOCAxMjhWODBIMzIwVjEyOEMzMjAgMTMyLjQyMiAzMjMuNTk0IDEzNiAzMjggMTM2UzMzNiAxMzIuNDIyIDMzNiAxMjhWODBINDAwQzQxNy42NzMgODAgNDMyIDk0LjMyNyA0MzIgMTEyVjE1MkM0MzIgMTU2LjQxOCA0MzUuNTgyIDE2MCA0NDAgMTYwTDQ0MCAxNjBDNDQ0LjQxOCAxNjAgNDQ4IDE1Ni40MTggNDQ4IDE1MlYxMTJDNDQ4IDg1LjQ5IDQyNi41MSA2NCA0MDAgNjRIMzM2VjhDMzM2IDMuNTc4IDMzMi40MDYgMCAzMjggMFMzMjAgMy41NzggMzIwIDhWNjRIMTI4VjhDMTI4IDMuNTc4IDEyNC40MDYgMCAxMjAgMFMxMTIgMy41NzggMTEyIDhWNjRINDhDMjEuNDkgNjQgMCA4NS40OSAwIDExMlY0NjRDMCA0OTAuNTEgMjEuNDkgNTEyIDQ4IDUxMkgyODBDMjg0LjQxOCA1MTIgMjg4IDUwOC40MTggMjg4IDUwNEwyODggNTA0QzI4OCA0OTkuNTgyIDI4NC40MTggNDk2IDI4MCA0OTZINDhDMzAuMzI3IDQ5NiAxNiA0ODEuNjczIDE2IDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CalendarClock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M488 368H432V296C432 291.594 428.422 288 424 288S416 291.594 416 296V376C416 380.406 419.578 384 424 384H488C492.422 384 496 380.406 496 376S492.422 368 488 368ZM432 224C352.471 224 288 288.471 288 368S352.471 512 432 512S576 447.529 576 368S511.529 224 432 224ZM432 496C361.422 496 304 438.58 304 368S361.422 240 432 240C502.58 240 560 297.42 560 368S502.58 496 432 496ZM16 464V208H280C284.418 208 288 204.418 288 200V200C288 195.582 284.418 192 280 192H16V112C16 94.327 30.327 80 48 80H112V128C112 132.422 115.594 136 120 136S128 132.422 128 128V80H320V128C320 132.422 323.594 136 328 136S336 132.422 336 128V80H400C417.673 80 432 94.327 432 112V152C432 156.418 435.582 160 440 160L440 160C444.418 160 448 156.418 448 152V112C448 85.49 426.51 64 400 64H336V8C336 3.578 332.406 0 328 0S320 3.578 320 8V64H128V8C128 3.578 124.406 0 120 0S112 3.578 112 8V64H48C21.49 64 0 85.49 0 112V464C0 490.51 21.49 512 48 512H280C284.418 512 288 508.418 288 504L288 504C288 499.582 284.418 496 280 496H48C30.327 496 16 481.673 16 464Z" />
        </Icon>
    </>
}