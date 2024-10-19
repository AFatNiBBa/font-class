
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-week` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-week?s=solid calendar-week}
 * @preview ![calendar-week](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgNjRIMzUyVjMyQzM1MiAxNC40IDMzNy42IDAgMzIwIDBIMzIwQzMwMi40IDAgMjg4IDE0LjQgMjg4IDMyVjY0SDE2MFYzMkMxNjAgMTQuNCAxNDUuNiAwIDEyOCAwSDEyOEMxMTAuNCAwIDk2IDE0LjQgOTYgMzJWNjRINDhDMjEuNDkgNjQgMCA4NS40OSAwIDExMlYxNjBINDQ4VjExMkM0NDggODUuNDkgNDI2LjUxIDY0IDQwMCA2NFpNMCA0NjRDMCA0OTAuNSAyMS41IDUxMiA0OCA1MTJINDAwQzQyNi41IDUxMiA0NDggNDkwLjUgNDQ4IDQ2NFYxOTJIMFY0NjRaTTY0IDI3MkM2NCAyNjMuMjUgNzEuMjUgMjU2IDgwIDI1NkgzNjhDMzc2Ljc1IDI1NiAzODQgMjYzLjI1IDM4NCAyNzJWMzM2QzM4NCAzNDQuNzUgMzc2Ljc1IDM1MiAzNjggMzUySDgwQzcxLjI1IDM1MiA2NCAzNDQuNzUgNjQgMzM2VjI3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CalendarWeek(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 64H352V32C352 14.4 337.6 0 320 0H320C302.4 0 288 14.4 288 32V64H160V32C160 14.4 145.6 0 128 0H128C110.4 0 96 14.4 96 32V64H48C21.49 64 0 85.49 0 112V160H448V112C448 85.49 426.51 64 400 64ZM0 464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0V464ZM64 272C64 263.25 71.25 256 80 256H368C376.75 256 384 263.25 384 272V336C384 344.75 376.75 352 368 352H80C71.25 352 64 344.75 64 336V272Z" />
        </Icon>
    </>
}