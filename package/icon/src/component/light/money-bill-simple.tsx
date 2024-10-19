
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `money-bill-simple` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-simple?s=light money-bill-simple}
 * @preview ![money-bill-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgNjRINjRDMjguNjU0IDY0IDAgOTIuNjUyIDAgMTI4VjM4NEMwIDQxOS4zNDYgMjguNjU0IDQ0OCA2NCA0NDhINTEyQzU0Ny4zNDggNDQ4IDU3NiA0MTkuMzQ2IDU3NiAzODRWMTI4QzU3NiA5Mi42NTIgNTQ3LjM0OCA2NCA1MTIgNjRaTTU0NCAzODRDNTQ0IDQwMS42NDUgNTI5LjY0NSA0MTYgNTEyIDQxNkg2NEM0Ni4zNTUgNDE2IDMyIDQwMS42NDUgMzIgMzg0VjEyOEMzMiAxMTAuMzU1IDQ2LjM1NSA5NiA2NCA5Nkg1MTJDNTI5LjY0NSA5NiA1NDQgMTEwLjM1NSA1NDQgMTI4VjM4NFpNMjg4IDE0NEMyMzUuMDYyIDE0NCAxOTIgMTk0LjI1IDE5MiAyNTZTMjM1LjA2MiAzNjggMjg4IDM2OFMzODQgMzE3Ljc1IDM4NCAyNTZTMzQwLjkzOCAxNDQgMjg4IDE0NFpNMjg4IDMzNkMyNTIuNzAzIDMzNiAyMjQgMzAwLjEwOSAyMjQgMjU2UzI1Mi43MDMgMTc2IDI4OCAxNzZTMzUyIDIxMS44OTEgMzUyIDI1NlMzMjMuMjk3IDMzNiAyODggMzM2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MoneyBillSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 64H64C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 64 448H512C547.348 448 576 419.346 576 384V128C576 92.652 547.348 64 512 64ZM544 384C544 401.645 529.645 416 512 416H64C46.355 416 32 401.645 32 384V128C32 110.355 46.355 96 64 96H512C529.645 96 544 110.355 544 128V384ZM288 144C235.062 144 192 194.25 192 256S235.062 368 288 368S384 317.75 384 256S340.938 144 288 144ZM288 336C252.703 336 224 300.109 224 256S252.703 176 288 176S352 211.891 352 256S323.297 336 288 336Z" />
        </Icon>
    </>
}