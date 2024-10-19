
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=solid mobile-notch}
 * @preview ![mobile-notch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDAgMzg0SDE0NEMxMzUuMTY0IDM4NCAxMjggMzkxLjE2MiAxMjggNDAwQzEyOCA0MDguODM2IDEzNS4xNjQgNDE2IDE0NCA0MTZIMjQwQzI0OC44MzggNDE2IDI1NiA0MDguODM2IDI1NiA0MDBDMjU2IDM5MS4xNjIgMjQ4LjgzOCAzODQgMjQwIDM4NFpNMjg4IDBIOTZDNTEuODE4IDAgMTYgMzUuODE2IDE2IDgwVjQzMkMxNiA0NzYuMTgyIDUxLjgxOCA1MTIgOTYgNTEySDI4OEMzMzIuMTg0IDUxMiAzNjggNDc2LjE4MiAzNjggNDMyVjgwQzM2OCAzNS44MTYgMzMyLjE4NCAwIDI4OCAwWk0zMDQgNDMyQzMwNCA0NDAuODIyIDI5Ni44MjIgNDQ4IDI4OCA0NDhIOTZDODcuMTc4IDQ0OCA4MCA0NDAuODIyIDgwIDQzMlY4MEM4MCA3MS4xNzggODcuMTc4IDY0IDk2IDY0SDEyOFY4MEMxMjggODguODM2IDEzNS4xNjQgOTYgMTQ0IDk2SDI0MEMyNDguODM4IDk2IDI1NiA4OC44MzYgMjU2IDgwVjY0SDI4OEMyOTYuODIyIDY0IDMwNCA3MS4xNzggMzA0IDgwVjQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MobileNotch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M240 384H144C135.164 384 128 391.162 128 400C128 408.836 135.164 416 144 416H240C248.838 416 256 408.836 256 400C256 391.162 248.838 384 240 384ZM288 0H96C51.818 0 16 35.816 16 80V432C16 476.182 51.818 512 96 512H288C332.184 512 368 476.182 368 432V80C368 35.816 332.184 0 288 0ZM304 432C304 440.822 296.822 448 288 448H96C87.178 448 80 440.822 80 432V80C80 71.178 87.178 64 96 64H128V80C128 88.836 135.164 96 144 96H240C248.838 96 256 88.836 256 80V64H288C296.822 64 304 71.178 304 80V432Z" />
        </Icon>
    </>
}