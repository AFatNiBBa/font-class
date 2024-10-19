
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars-good` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-good?s=solid signal-bars-good}
 * @preview ![signal-bars-good](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDggMjU2SDIwOEMxODEuNiAyNTYgMTYwIDI3Ny42IDE2MCAzMDRWNDY0QzE2MCA0OTAuNCAxODEuNiA1MTIgMjA4IDUxMkgyMDhDMjM0LjQgNTEyIDI1NiA0OTAuNCAyNTYgNDY0VjMwNEMyNTYgMjc3LjYgMjM0LjQgMjU2IDIwOCAyNTZaTTQ4IDM4NEg0OEMyMS42IDM4NCAwIDQwNS42IDAgNDMyVjQ2NEMwIDQ5MC40IDIxLjYgNTEyIDQ4IDUxMkg0OEM3NC40IDUxMiA5NiA0OTAuNCA5NiA0NjRWNDMyQzk2IDQwNS42IDc0LjQgMzg0IDQ4IDM4NFpNMzY4IDEyOEgzNjhDMzQxLjYgMTI4IDMyMCAxNDkuNiAzMjAgMTc2VjQ2NEMzMjAgNDkwLjQgMzQxLjYgNTEyIDM2OCA1MTJIMzY4QzM5NC40IDUxMiA0MTYgNDkwLjQgNDE2IDQ2NFYxNzZDNDE2IDE0OS42IDM5NC40IDEyOCAzNjggMTI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SignalBarsGood(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M208 256H208C181.6 256 160 277.6 160 304V464C160 490.4 181.6 512 208 512H208C234.4 512 256 490.4 256 464V304C256 277.6 234.4 256 208 256ZM48 384H48C21.6 384 0 405.6 0 432V464C0 490.4 21.6 512 48 512H48C74.4 512 96 490.4 96 464V432C96 405.6 74.4 384 48 384ZM368 128H368C341.6 128 320 149.6 320 176V464C320 490.4 341.6 512 368 512H368C394.4 512 416 490.4 416 464V176C416 149.6 394.4 128 368 128Z" />
        </Icon>
    </>
}