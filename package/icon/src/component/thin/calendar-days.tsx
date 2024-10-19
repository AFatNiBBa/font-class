
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `calendar-days` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-days?s=thin calendar-days}
 * @preview ![calendar-days](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgNjRIMzM2VjhDMzM2IDMuNTc4IDMzMi40MDYgMCAzMjggMFMzMjAgMy41NzggMzIwIDhWNjRIMTI4VjhDMTI4IDMuNTc4IDEyNC40MDYgMCAxMjAgMFMxMTIgMy41NzggMTEyIDhWNjRINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJWNDY0QzAgNDkwLjUgMjEuNSA1MTIgNDggNTEySDQwMEM0MjYuNSA1MTIgNDQ4IDQ5MC41IDQ0OCA0NjRWMTEyQzQ0OCA4NS41IDQyNi41IDY0IDQwMCA2NFpNMTYgMjA4SDE0NFYyODhIMTZWMjA4Wk0yODggMjg4SDE2MFYyMDhIMjg4VjI4OFpNMjg4IDMwNFY0MDBIMTYwVjMwNEgyODhaTTE2IDMwNEgxNDRWNDAwSDE2VjMwNFpNNDggNDk2QzMwLjM1NSA0OTYgMTYgNDgxLjY0NSAxNiA0NjRWNDE2SDE0NFY0OTZINDhaTTE2MCA0OTZWNDE2SDI4OFY0OTZIMTYwWk00MzIgNDY0QzQzMiA0ODEuNjQ1IDQxNy42NDUgNDk2IDQwMCA0OTZIMzA0VjQxNkg0MzJWNDY0Wk00MzIgNDAwSDMwNFYzMDRINDMyVjQwMFpNNDMyIDI4OEgzMDRWMjA4SDQzMlYyODhaTTQzMiAxOTJIMTZWMTEyQzE2IDk0LjM1NSAzMC4zNTUgODAgNDggODBIMTEyVjEyOEMxMTIgMTMyLjQyMiAxMTUuNTk0IDEzNiAxMjAgMTM2UzEyOCAxMzIuNDIyIDEyOCAxMjhWODBIMzIwVjEyOEMzMjAgMTMyLjQyMiAzMjMuNTk0IDEzNiAzMjggMTM2UzMzNiAxMzIuNDIyIDMzNiAxMjhWODBINDAwQzQxNy42NDUgODAgNDMyIDk0LjM1NSA0MzIgMTEyVjE5MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CalendarDays(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 64H336V8C336 3.578 332.406 0 328 0S320 3.578 320 8V64H128V8C128 3.578 124.406 0 120 0S112 3.578 112 8V64H48C21.5 64 0 85.5 0 112V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V112C448 85.5 426.5 64 400 64ZM16 208H144V288H16V208ZM288 288H160V208H288V288ZM288 304V400H160V304H288ZM16 304H144V400H16V304ZM48 496C30.355 496 16 481.645 16 464V416H144V496H48ZM160 496V416H288V496H160ZM432 464C432 481.645 417.645 496 400 496H304V416H432V464ZM432 400H304V304H432V400ZM432 288H304V208H432V288ZM432 192H16V112C16 94.355 30.355 80 48 80H112V128C112 132.422 115.594 136 120 136S128 132.422 128 128V80H320V128C320 132.422 323.594 136 328 136S336 132.422 336 128V80H400C417.645 80 432 94.355 432 112V192Z" />
        </Icon>
    </>
}