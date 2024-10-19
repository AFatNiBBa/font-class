
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `memory` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/memory?s=thin memory}
 * @preview ![memory](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgMTQ2LjkzOFYxMTJDNTc2IDg1LjQ5MiA1NTQuNTEgNjQgNTI4IDY0SDQ4QzIxLjQ5IDY0IDAgODUuNDkyIDAgMTEyVjE0Ni45MzhDMTguNiAxNTMuNTQ3IDMyIDE3MS4xMzMgMzIgMTkyUzE4LjYgMjMwLjQ1MyAwIDIzNy4wNjJWNDE2QzAgNDMzLjY3MiAxNC4zMjggNDQ4IDMyIDQ0OEg1NDRDNTYxLjY3NCA0NDggNTc2IDQzMy42NzIgNTc2IDQxNlYyMzcuMDYyQzU1Ny40IDIzMC40NTMgNTQ0IDIxMi44NjcgNTQ0IDE5MlM1NTcuNCAxNTMuNTQ3IDU3NiAxNDYuOTM4Wk01NjAgNDE2QzU2MCA0MjQuODI0IDU1Mi44MjIgNDMyIDU0NCA0MzJINDg4VjQwMEM0ODggMzk1LjU3OCA0ODQuNDA2IDM5MiA0ODAgMzkyUzQ3MiAzOTUuNTc4IDQ3MiA0MDBWNDMySDM2MFY0MDBDMzYwIDM5NS41NzggMzU2LjQwNiAzOTIgMzUyIDM5MlMzNDQgMzk1LjU3OCAzNDQgNDAwVjQzMkgyMzJWNDAwQzIzMiAzOTUuNTc4IDIyOC40MDYgMzkyIDIyNCAzOTJTMjE2IDM5NS41NzggMjE2IDQwMFY0MzJIMTA0VjQwMEMxMDQgMzk1LjU3OCAxMDAuNDA2IDM5MiA5NiAzOTJTODggMzk1LjU3OCA4OCA0MDBWNDMySDMyQzIzLjE3OCA0MzIgMTYgNDI0LjgyNCAxNiA0MTZWMzM2SDU2MFY0MTZaTTU2MCAxMzYuNzc3QzU0MC40ODQgMTQ4LjA2MiA1MjggMTY5LjAzNSA1MjggMTkyUzU0MC40ODQgMjM1LjkzOCA1NjAgMjQ3LjIyM1YzMjBIMTZWMjQ3LjIyM0MzNS41MTggMjM1LjkzOCA0OCAyMTQuOTY1IDQ4IDE5MlMzNS41MTggMTQ4LjA2MiAxNiAxMzYuNzc3VjExMkMxNiA5NC4zNTUgMzAuMzU1IDgwIDQ4IDgwSDUyOEM1NDUuNjQ1IDgwIDU2MCA5NC4zNTUgNTYwIDExMlYxMzYuNzc3Wk00MzIgMTI4SDQwMEMzOTEuMTY0IDEyOCAzODQgMTM1LjE2NCAzODQgMTQ0VjI0MEMzODQgMjQ4LjgzNiAzOTEuMTY0IDI1NiA0MDAgMjU2SDQzMkM0NDAuODM4IDI1NiA0NDggMjQ4LjgzNiA0NDggMjQwVjE0NEM0NDggMTM1LjE2NCA0NDAuODM4IDEyOCA0MzIgMTI4Wk00MzIgMjQwSDQwMFYxNDRINDMyVjI0MFpNMzA0IDEyOEgyNzJDMjYzLjE2NCAxMjggMjU2IDEzNS4xNjQgMjU2IDE0NFYyNDBDMjU2IDI0OC44MzYgMjYzLjE2NCAyNTYgMjcyIDI1NkgzMDRDMzEyLjgzOCAyNTYgMzIwIDI0OC44MzYgMzIwIDI0MFYxNDRDMzIwIDEzNS4xNjQgMzEyLjgzOCAxMjggMzA0IDEyOFpNMzA0IDI0MEgyNzJWMTQ0SDMwNFYyNDBaTTE3NiAxMjhIMTQ0QzEzNS4xNjQgMTI4IDEyOCAxMzUuMTY0IDEyOCAxNDRWMjQwQzEyOCAyNDguODM2IDEzNS4xNjQgMjU2IDE0NCAyNTZIMTc2QzE4NC44MzggMjU2IDE5MiAyNDguODM2IDE5MiAyNDBWMTQ0QzE5MiAxMzUuMTY0IDE4NC44MzggMTI4IDE3NiAxMjhaTTE3NiAyNDBIMTQ0VjE0NEgxNzZWMjQwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Memory(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M576 146.938V112C576 85.492 554.51 64 528 64H48C21.49 64 0 85.492 0 112V146.938C18.6 153.547 32 171.133 32 192S18.6 230.453 0 237.062V416C0 433.672 14.328 448 32 448H544C561.674 448 576 433.672 576 416V237.062C557.4 230.453 544 212.867 544 192S557.4 153.547 576 146.938ZM560 416C560 424.824 552.822 432 544 432H488V400C488 395.578 484.406 392 480 392S472 395.578 472 400V432H360V400C360 395.578 356.406 392 352 392S344 395.578 344 400V432H232V400C232 395.578 228.406 392 224 392S216 395.578 216 400V432H104V400C104 395.578 100.406 392 96 392S88 395.578 88 400V432H32C23.178 432 16 424.824 16 416V336H560V416ZM560 136.777C540.484 148.062 528 169.035 528 192S540.484 235.938 560 247.223V320H16V247.223C35.518 235.938 48 214.965 48 192S35.518 148.062 16 136.777V112C16 94.355 30.355 80 48 80H528C545.645 80 560 94.355 560 112V136.777ZM432 128H400C391.164 128 384 135.164 384 144V240C384 248.836 391.164 256 400 256H432C440.838 256 448 248.836 448 240V144C448 135.164 440.838 128 432 128ZM432 240H400V144H432V240ZM304 128H272C263.164 128 256 135.164 256 144V240C256 248.836 263.164 256 272 256H304C312.838 256 320 248.836 320 240V144C320 135.164 312.838 128 304 128ZM304 240H272V144H304V240ZM176 128H144C135.164 128 128 135.164 128 144V240C128 248.836 135.164 256 144 256H176C184.838 256 192 248.836 192 240V144C192 135.164 184.838 128 176 128ZM176 240H144V144H176V240Z" />
        </Icon>
    </>
}