
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `signal-bars-weak` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-weak?s=duotone signal-bars-weak}
 * @preview ![signal-bars-weak](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwOCAyNTZIMjA4QzE4MS42IDI1NiAxNjAgMjc3LjYgMTYwIDMwNFY0NjRDMTYwIDQ5MC40IDE4MS42IDUxMiAyMDggNTEySDIwOEMyMzQuNCA1MTIgMjU2IDQ5MC40IDI1NiA0NjRWMzA0QzI1NiAyNzcuNiAyMzQuNCAyNTYgMjA4IDI1NlpNMzY4IDEyOEgzNjhDMzQxLjYgMTI4IDMyMCAxNDkuNiAzMjAgMTc2VjQ2NEMzMjAgNDkwLjQgMzQxLjYgNTEyIDM2OCA1MTJIMzY4QzM5NC40IDUxMiA0MTYgNDkwLjQgNDE2IDQ2NFYxNzZDNDE2IDE0OS42IDM5NC40IDEyOCAzNjggMTI4Wk01MjggMEg1MjhDNTAxLjYgMCA0ODAgMjEuNiA0ODAgNDhWNDY0QzQ4MCA0OTAuNCA1MDEuNiA1MTIgNTI4IDUxMkg1MjhDNTU0LjQgNTEyIDU3NiA0OTAuNCA1NzYgNDY0VjQ4QzU3NiAyMS42IDU1NC40IDAgNTI4IDBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ4IDM4NEg0OEMyMS42IDM4NCAwIDQwNS42IDAgNDMyVjQ2NEMwIDQ5MC40IDIxLjYgNTEyIDQ4IDUxMkg0OEM3NC40IDUxMiA5NiA0OTAuNCA5NiA0NjRWNDMyQzk2IDQwNS42IDc0LjQgMzg0IDQ4IDM4NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function SignalBarsWeak(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M208 256H208C181.6 256 160 277.6 160 304V464C160 490.4 181.6 512 208 512H208C234.4 512 256 490.4 256 464V304C256 277.6 234.4 256 208 256ZM368 128H368C341.6 128 320 149.6 320 176V464C320 490.4 341.6 512 368 512H368C394.4 512 416 490.4 416 464V176C416 149.6 394.4 128 368 128ZM528 0H528C501.6 0 480 21.6 480 48V464C480 490.4 501.6 512 528 512H528C554.4 512 576 490.4 576 464V48C576 21.6 554.4 0 528 0Z" />
            <path d="M48 384H48C21.6 384 0 405.6 0 432V464C0 490.4 21.6 512 48 512H48C74.4 512 96 490.4 96 464V432C96 405.6 74.4 384 48 384Z" />
        </Icon>
    </>
}