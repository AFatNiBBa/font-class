
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `briefcase-arrow-right` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-arrow-right?s=thin briefcase-arrow-right}
 * @preview ![briefcase-arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgOTZIMzg0VjQwQzM4NCAxNy45MzggMzY2LjA2MiAwIDM0NCAwSDE2OEMxNDUuOTM4IDAgMTI4IDE3LjkzOCAxMjggNDBWOTZINDhDMjEuNDkyIDk2IDAgMTE3LjQ5IDAgMTQ0VjQzMkMwIDQ1OC41MSAyMS40OTIgNDgwIDQ4IDQ4MEg0NjRDNDkwLjUwOCA0ODAgNTEyIDQ1OC41MSA1MTIgNDMyVjE0NEM1MTIgMTE3LjQ5IDQ5MC41MDggOTYgNDY0IDk2Wk0xNDQgNDBDMTQ0IDI2Ljc4MSAxNTQuNzgxIDE2IDE2OCAxNkgzNDRDMzU3LjIxOSAxNiAzNjggMjYuNzgxIDM2OCA0MFY5NkgxNDRWNDBaTTQ5NiA0MzJDNDk2IDQ0OS42NDUgNDgxLjY0NSA0NjQgNDY0IDQ2NEg0OEMzMC4zNTUgNDY0IDE2IDQ0OS42NDUgMTYgNDMyVjE0NEMxNiAxMjYuMzU1IDMwLjM1NSAxMTIgNDggMTEySDQ2NEM0ODEuNjQ1IDExMiA0OTYgMTI2LjM1NSA0OTYgMTQ0VjQzMlpNMjc5LjI1IDE5NC4zNDRDMjc2LjEyNSAxOTEuMjE5IDI3MS4wNjIgMTkxLjIxOSAyNjcuOTM4IDE5NC4zNDRTMjY0LjgxMyAyMDIuNTMxIDI2Ny45MzggMjA1LjY1NkwzNDIuMjgxIDI4MEgxNTAuNDA2QzE0NiAyODAgMTQyLjQwNiAyODMuNTc4IDE0Mi40MDYgMjg4UzE0NiAyOTYgMTUwLjQwNiAyOTZIMzQyLjI4MUwyNjcuOTM4IDM3MC4zNDRDMjY0LjgxMyAzNzMuNDY5IDI2NC44MTMgMzc4LjUzMSAyNjcuOTM4IDM4MS42NTZDMjY5LjUgMzgzLjIxOSAyNzEuNTMxIDM4NCAyNzMuNTk0IDM4NFMyNzcuNjg4IDM4My4yMTkgMjc5LjI1IDM4MS42NTZMMzY3LjI1IDI5My42NTZDMzcwLjM3NSAyOTAuNTMxIDM3MC4zNzUgMjg1LjQ2OSAzNjcuMjUgMjgyLjM0NEwyNzkuMjUgMTk0LjM0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BriefcaseArrowRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 96H384V40C384 17.938 366.062 0 344 0H168C145.938 0 128 17.938 128 40V96H48C21.492 96 0 117.49 0 144V432C0 458.51 21.492 480 48 480H464C490.508 480 512 458.51 512 432V144C512 117.49 490.508 96 464 96ZM144 40C144 26.781 154.781 16 168 16H344C357.219 16 368 26.781 368 40V96H144V40ZM496 432C496 449.645 481.645 464 464 464H48C30.355 464 16 449.645 16 432V144C16 126.355 30.355 112 48 112H464C481.645 112 496 126.355 496 144V432ZM279.25 194.344C276.125 191.219 271.062 191.219 267.938 194.344S264.813 202.531 267.938 205.656L342.281 280H150.406C146 280 142.406 283.578 142.406 288S146 296 150.406 296H342.281L267.938 370.344C264.813 373.469 264.813 378.531 267.938 381.656C269.5 383.219 271.531 384 273.594 384S277.688 383.219 279.25 381.656L367.25 293.656C370.375 290.531 370.375 285.469 367.25 282.344L279.25 194.344Z" />
        </Icon>
    </>
}