
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `calendar-week` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-week?s=duotone calendar-week}
 * @preview ![calendar-week](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMTkyVjQ2NEMwIDQ5MC41IDIxLjUgNTEyIDQ4IDUxMkg0MDBDNDI2LjUgNTEyIDQ0OCA0OTAuNSA0NDggNDY0VjE5MkgwWk0zODQgMzM2QzM4NCAzNDQuNzUgMzc2Ljc1IDM1MiAzNjggMzUySDgwQzcxLjI1IDM1MiA2NCAzNDQuNzUgNjQgMzM2VjI3MkM2NCAyNjMuMjUgNzEuMjUgMjU2IDgwIDI1NkgzNjhDMzc2Ljc1IDI1NiAzODQgMjYzLjI1IDM4NCAyNzJWMzM2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00MDAgNjRIMzUyVjMyQzM1MiAxNC4zMjcgMzM3LjY3MyAwIDMyMCAwSDMyMEMzMDIuMzI3IDAgMjg4IDE0LjMyNyAyODggMzJWNjRIMTYwVjMyQzE2MCAxNC4zMjcgMTQ1LjY3MyAwIDEyOCAwSDEyOEMxMTAuMzI3IDAgOTYgMTQuMzI3IDk2IDMyVjY0SDQ4QzIxLjQ5IDY0IDAgODUuNDkgMCAxMTJWMTkySDQ0OFYxMTJDNDQ4IDg1LjQ5IDQyNi41MSA2NCA0MDAgNjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CalendarWeek(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M0 192V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0ZM384 336C384 344.75 376.75 352 368 352H80C71.25 352 64 344.75 64 336V272C64 263.25 71.25 256 80 256H368C376.75 256 384 263.25 384 272V336Z" />
            <path d="M400 64H352V32C352 14.327 337.673 0 320 0H320C302.327 0 288 14.327 288 32V64H160V32C160 14.327 145.673 0 128 0H128C110.327 0 96 14.327 96 32V64H48C21.49 64 0 85.49 0 112V192H448V112C448 85.49 426.51 64 400 64Z" />
        </Icon>
    </>
}