
import { Icon, generic } from "../../index";

/**
 * A component that renders the `memory` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/memory?s=duotone memory}
 * @preview ![memory](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3NiAxNDYuOTM4VjExMkM1NzYgODUuNDkyIDU1NC41MSA2NCA1MjggNjRINDhDMjEuNDkgNjQgMCA4NS40OTIgMCAxMTJWMTQ2LjkzOEMxOC42IDE1My41NDcgMzIgMTcxLjEzMyAzMiAxOTJTMTguNiAyMzAuNDUzIDAgMjM3LjA2MlYzMjBINTc2VjIzNy4wNjJDNTU3LjQgMjMwLjQ1MyA1NDQgMjEyLjg2NyA1NDQgMTkyUzU1Ny40IDE1My41NDcgNTc2IDE0Ni45MzhaTTE5MiAyNDBDMTkyIDI0OC44MzYgMTg0LjgzOCAyNTYgMTc2IDI1NkgxNDRDMTM1LjE2NCAyNTYgMTI4IDI0OC44MzYgMTI4IDI0MFYxNDRDMTI4IDEzNS4xNjQgMTM1LjE2NCAxMjggMTQ0IDEyOEgxNzZDMTg0LjgzOCAxMjggMTkyIDEzNS4xNjQgMTkyIDE0NFYyNDBaTTMyMCAyNDBDMzIwIDI0OC44MzYgMzEyLjgzOCAyNTYgMzA0IDI1NkgyNzJDMjYzLjE2NCAyNTYgMjU2IDI0OC44MzYgMjU2IDI0MFYxNDRDMjU2IDEzNS4xNjQgMjYzLjE2NCAxMjggMjcyIDEyOEgzMDRDMzEyLjgzOCAxMjggMzIwIDEzNS4xNjQgMzIwIDE0NFYyNDBaTTQ0OCAyNDBDNDQ4IDI0OC44MzYgNDQwLjgzOCAyNTYgNDMyIDI1Nkg0MDBDMzkxLjE2NCAyNTYgMzg0IDI0OC44MzYgMzg0IDI0MFYxNDRDMzg0IDEzNS4xNjQgMzkxLjE2NCAxMjggNDAwIDEyOEg0MzJDNDQwLjgzOCAxMjggNDQ4IDEzNS4xNjQgNDQ4IDE0NFYyNDBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQwMCAyNTZINDMyQzQ0MC44MzggMjU2IDQ0OCAyNDguODM2IDQ0OCAyNDBWMTQ0QzQ0OCAxMzUuMTY0IDQ0MC44MzggMTI4IDQzMiAxMjhINDAwQzM5MS4xNjQgMTI4IDM4NCAxMzUuMTY0IDM4NCAxNDRWMjQwQzM4NCAyNDguODM2IDM5MS4xNjQgMjU2IDQwMCAyNTZaTTI3MiAyNTZIMzA0QzMxMi44MzggMjU2IDMyMCAyNDguODM2IDMyMCAyNDBWMTQ0QzMyMCAxMzUuMTY0IDMxMi44MzggMTI4IDMwNCAxMjhIMjcyQzI2My4xNjQgMTI4IDI1NiAxMzUuMTY0IDI1NiAxNDRWMjQwQzI1NiAyNDguODM2IDI2My4xNjQgMjU2IDI3MiAyNTZaTTE0NCAyNTZIMTc2QzE4NC44MzggMjU2IDE5MiAyNDguODM2IDE5MiAyNDBWMTQ0QzE5MiAxMzUuMTY0IDE4NC44MzggMTI4IDE3NiAxMjhIMTQ0QzEzNS4xNjQgMTI4IDEyOCAxMzUuMTY0IDEyOCAxNDRWMjQwQzEyOCAyNDguODM2IDEzNS4xNjQgMjU2IDE0NCAyNTZaTTAgMzIwVjQ0OEg4MFY0MTZDODAgNDA3LjE2NCA4Ny4xNjQgNDAwIDk2IDQwMEMxMDQuODM4IDQwMCAxMTIgNDA3LjE2NCAxMTIgNDE2VjQ0OEgyMDhWNDE2QzIwOCA0MDcuMTY0IDIxNS4xNjQgNDAwIDIyNCA0MDBDMjMyLjgzOCA0MDAgMjQwIDQwNy4xNjQgMjQwIDQxNlY0NDhIMzM2VjQxNkMzMzYgNDA3LjE2NCAzNDMuMTY0IDQwMCAzNTIgNDAwQzM2MC44MzggNDAwIDM2OCA0MDcuMTY0IDM2OCA0MTZWNDQ4SDQ2NFY0MTZDNDY0IDQwNy4xNjQgNDcxLjE2NCA0MDAgNDgwIDQwMEM0ODguODM4IDQwMCA0OTYgNDA3LjE2NCA0OTYgNDE2VjQ0OEg1NzZWMzIwSDBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const Memory: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M576 146.938V112C576 85.492 554.51 64 528 64H48C21.49 64 0 85.492 0 112V146.938C18.6 153.547 32 171.133 32 192S18.6 230.453 0 237.062V320H576V237.062C557.4 230.453 544 212.867 544 192S557.4 153.547 576 146.938ZM192 240C192 248.836 184.838 256 176 256H144C135.164 256 128 248.836 128 240V144C128 135.164 135.164 128 144 128H176C184.838 128 192 135.164 192 144V240ZM320 240C320 248.836 312.838 256 304 256H272C263.164 256 256 248.836 256 240V144C256 135.164 263.164 128 272 128H304C312.838 128 320 135.164 320 144V240ZM448 240C448 248.836 440.838 256 432 256H400C391.164 256 384 248.836 384 240V144C384 135.164 391.164 128 400 128H432C440.838 128 448 135.164 448 144V240Z" />
            <path d="M400 256H432C440.838 256 448 248.836 448 240V144C448 135.164 440.838 128 432 128H400C391.164 128 384 135.164 384 144V240C384 248.836 391.164 256 400 256ZM272 256H304C312.838 256 320 248.836 320 240V144C320 135.164 312.838 128 304 128H272C263.164 128 256 135.164 256 144V240C256 248.836 263.164 256 272 256ZM144 256H176C184.838 256 192 248.836 192 240V144C192 135.164 184.838 128 176 128H144C135.164 128 128 135.164 128 144V240C128 248.836 135.164 256 144 256ZM0 320V448H80V416C80 407.164 87.164 400 96 400C104.838 400 112 407.164 112 416V448H208V416C208 407.164 215.164 400 224 400C232.838 400 240 407.164 240 416V448H336V416C336 407.164 343.164 400 352 400C360.838 400 368 407.164 368 416V448H464V416C464 407.164 471.164 400 480 400C488.838 400 496 407.164 496 416V448H576V320H0Z" />
    </Icon>
);

export default Memory;