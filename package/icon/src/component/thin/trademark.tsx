
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `trademark` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trademark?s=thin trademark}
 * @preview ![trademark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDggOTYuMDA4SDhDMy41OTQgOTYuMDA4IDAgOTkuNTg2IDAgMTA0LjAwOFMzLjU5NCAxMTIuMDA4IDggMTEyLjAwOEgxMjBWNDA4QzEyMCA0MTIuNDIyIDEyMy41OTQgNDE2IDEyOCA0MTZTMTM2IDQxMi40MjIgMTM2IDQwOFYxMTIuMDA4SDI0OEMyNTIuNDA2IDExMi4wMDggMjU2IDEwOC40MyAyNTYgMTA0LjAwOFMyNTIuNDA2IDk2LjAwOCAyNDggOTYuMDA4Wk02MzQuNTk0IDk2LjQ0NUM2MzEuNDM4IDk1LjM1MiA2MjcuNzgxIDk2LjM5OCA2MjUuNjg4IDk5LjEwMkw0NjQgMzA2Ljk3MUwzMDIuMzEyIDk5LjEwMkMzMDAuMjE5IDk2LjM2NyAyOTYuNTMxIDk1LjMyIDI5My40MDYgOTYuNDQ1QzI5MC4xNTYgOTcuNTU1IDI4OCAxMDAuNTg2IDI4OCAxMDQuMDA4VjQwOEMyODggNDEyLjQyMiAyOTEuNTk0IDQxNiAyOTYgNDE2UzMwNCA0MTIuNDIyIDMwNCA0MDhWMTI3LjMyTDQ1Ny42ODggMzI0LjkwOEM0NjAuNjg4IDMyOC44MTQgNDY3LjMxMiAzMjguODE0IDQ3MC4zMTIgMzI0LjkwOEw2MjQgMTI3LjMyVjQwOEM2MjQgNDEyLjQyMiA2MjcuNTk0IDQxNiA2MzIgNDE2UzY0MCA0MTIuNDIyIDY0MCA0MDhWMTA0LjAwOEM2NDAgMTAwLjU4NiA2MzcuODQ0IDk3LjU1NSA2MzQuNTk0IDk2LjQ0NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Trademark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M248 96.008H8C3.594 96.008 0 99.586 0 104.008S3.594 112.008 8 112.008H120V408C120 412.422 123.594 416 128 416S136 412.422 136 408V112.008H248C252.406 112.008 256 108.43 256 104.008S252.406 96.008 248 96.008ZM634.594 96.445C631.438 95.352 627.781 96.398 625.688 99.102L464 306.971L302.312 99.102C300.219 96.367 296.531 95.32 293.406 96.445C290.156 97.555 288 100.586 288 104.008V408C288 412.422 291.594 416 296 416S304 412.422 304 408V127.32L457.688 324.908C460.688 328.814 467.312 328.814 470.312 324.908L624 127.32V408C624 412.422 627.594 416 632 416S640 412.422 640 408V104.008C640 100.586 637.844 97.555 634.594 96.445Z" />
        </Icon>
    </>
}