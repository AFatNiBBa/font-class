
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `user-astronaut` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-astronaut?s=thin user-astronaut}
 * @preview ![user-astronaut](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDkuMjI3IDMwOC43NTRDMzQ2LjIxNyAzMDcuMjAzIDM0Mi41MTYgMzA3Ljg1IDM0MC4xMjIgMzEwLjI0NEwzNDAuMTIgMzEwLjI0NkMzMzYuNDA5IDMxMy45NTUgMzM3LjI5NyAzMjAuMjUgMzQxLjk2MiAzMjIuNjUyQzM5Ni41NjUgMzUwLjc2IDQzMi4yMTMgNDA3LjcxOSA0MzEuOTk5IDQ2OS45MDJDNDMxLjk1IDQ4NC4zOTYgNDE5LjgzOCA0OTYgNDA1LjM0NCA0OTZIMzM2LjAwMVY0NDhDMzM2LjAwMSA0MjEuNDkgMzE0LjUxIDQwMCAyODguMDAxIDQwMEgxNjAuMDAxQzEzMy40OTEgNDAwIDExMi4wMDEgNDIxLjQ5IDExMi4wMDEgNDQ4VjQ5Nkg0Mi42NTdDMjguMTYzIDQ5NiAxNi4wNTEgNDg0LjM5NiAxNi4wMDMgNDY5LjkwMkMxNS43ODggNDA3LjcyNyA1MS40MyAzNTAuNzcxIDEwNi4wNDcgMzIyLjY2QzExMC43MTIgMzIwLjI1OCAxMTEuNiAzMTMuOTYzIDEwNy44ODkgMzEwLjI1NEMxMDUuNDk1IDMwNy44NTkgMTAxLjc5NCAzMDcuMjEzIDk4Ljc4NCAzMDguNzY0QzM5LjAxIDMzOS41NjQgLTAuMTczIDQwMS43MDcgMC4wMDEgNDY5Ljc5NUMwLjA2MSA0OTMuMTY2IDE5LjI4NiA1MTIgNDIuNjU3IDUxMkgxMjAuMDAxQzEyNC40MTkgNTEyIDEyOC4wMDEgNTA4LjQxOCAxMjguMDAxIDUwNFY0NDhDMTI4LjAwMSA0MzAuNCAxNDIuNDAxIDQxNiAxNjAuMDAxIDQxNkgyODguMDAxQzMwNS42IDQxNiAzMjAuMDAxIDQzMC40IDMyMC4wMDEgNDQ4VjUwNEMzMjAuMDAxIDUwOC40MTggMzIzLjU4MyA1MTIgMzI4LjAwMSA1MTJINDA1LjM0NEM0MjguNzE1IDUxMiA0NDcuOTQgNDkzLjE2NCA0NDguMDAxIDQ2OS43OTNDNDQ4LjE3MiA0MDEuNjk5IDQwOS4wMDggMzM5LjU1MyAzNDkuMjI3IDMwOC43NTRaTTE4NC4wMDEgNDQ4QzE3OS41NjMgNDQ4IDE3Ni4wMDEgNDUxLjU2MiAxNzYuMDAxIDQ1NlY1MDRDMTc2LjAwMSA1MDguNDE4IDE3OS41ODMgNTEyIDE4NC4wMDEgNTEyUzE5Mi4wMDEgNTA4LjQxOCAxOTIuMDAxIDUwNFY0NTZDMTkyLjAwMSA0NTEuNTYyIDE4OC40MzggNDQ4IDE4NC4wMDEgNDQ4Wk0yNzIuMDAxIDQ0OEMyNjMuMTI2IDQ0OCAyNTYuMDAxIDQ1NS4xMjUgMjU2LjAwMSA0NjRTMjYzLjEyNiA0ODAgMjcyLjAwMSA0ODBTMjg4LjAwMSA0NzIuODc1IDI4OC4wMDEgNDY0UzI4MC44NzYgNDQ4IDI3Mi4wMDEgNDQ4Wk0xNTIuMDAxIDE2OEgxNjguMDAxVjE4NEMxNjguMDAxIDE4OC40MDYgMTcxLjU5NCAxOTIgMTc2LjAwMSAxOTJTMTg0LjAwMSAxODguNDA2IDE4NC4wMDEgMTg0VjE2OEgyMDAuMDAxQzIwNC40MDcgMTY4IDIwOC4wMDEgMTY0LjQwNiAyMDguMDAxIDE2MFMyMDQuNDA3IDE1MiAyMDAuMDAxIDE1MkgxODQuMDAxVjEzNkMxODQuMDAxIDEzMS41OTQgMTgwLjQwNyAxMjggMTc2LjAwMSAxMjhTMTY4LjAwMSAxMzEuNTk0IDE2OC4wMDEgMTM2VjE1MkgxNTIuMDAxQzE0Ny41OTQgMTUyIDE0NC4wMDEgMTU1LjU5NCAxNDQuMDAxIDE2MFMxNDcuNTk0IDE2OCAxNTIuMDAxIDE2OFpNNDA4LjAwMSAyMjRDNDEyLjQwNyAyMjQgNDE2LjAwMSAyMjAuNDA2IDQxNi4wMDEgMjE2VjEwNEM0MTYuMDAxIDk5LjU5NCA0MTIuNDA3IDk2IDQwOC4wMDEgOTZTNDAwLjAwMSA5OS41OTQgNDAwLjAwMSAxMDRWMjE2QzQwMC4wMDEgMjIwLjQwNiA0MDMuNTk0IDIyNCA0MDguMDAxIDIyNFpNMjAwLjAwMSAyNTZIMjQ4LjAwMUMzMDEuMDAxIDI1NiAzNDQuMDAxIDIxMyAzNDQuMDAxIDE2MFYxMzZDMzQ0LjAwMSAxMTMuODc1IDMyMi41MDEgOTYgMjk2LjAwMSA5NkgxNTIuMDAxQzEyNS41MDEgOTYgMTA0LjAwMSAxMTMuODc1IDEwNC4wMDEgMTM2VjE2MEMxMDQuMDAxIDIxMyAxNDcuMDAxIDI1NiAyMDAuMDAxIDI1NlpNMTIwLjAwMSAxMzZDMTIwLjAwMSAxMjIuOTkgMTM0LjY1NSAxMTIgMTUyLjAwMSAxMTJIMjk2LjAwMUMzMTMuMzQ2IDExMiAzMjguMDAxIDEyMi45OSAzMjguMDAxIDEzNlYxNjBDMzI4LjAwMSAyMDQuMTExIDI5Mi4xMTIgMjQwIDI0OC4wMDEgMjQwSDIwMC4wMDFDMTU1Ljg4OSAyNDAgMTIwLjAwMSAyMDQuMTExIDEyMC4wMDEgMTYwVjEzNlpNNDAuMDAxIDIyNEM0NC40MDcgMjI0IDQ4LjAwMSAyMjAuNDA2IDQ4LjAwMSAyMTZWMTA0QzQ4LjAwMSA5OS41OTQgNDQuNDA3IDk2IDQwLjAwMSA5NlMzMi4wMDEgOTkuNTk0IDMyLjAwMSAxMDRWMjE2QzMyLjAwMSAyMjAuNDA2IDM1LjU5NCAyMjQgNDAuMDAxIDIyNFpNMjI0LjAwMSAzMjBDMzEyLjM2NiAzMjAgMzg0LjAwMSAyNDguMzY1IDM4NC4wMDEgMTYwUzMxMi4zNjYgMCAyMjQuMDAxIDBTNjQuMDAxIDcxLjYzNSA2NC4wMDEgMTYwUzEzNS42MzUgMzIwIDIyNC4wMDEgMzIwWk0yMjQuMDAxIDE2QzMwMy40MDMgMTYgMzY4LjAwMSA4MC41OTggMzY4LjAwMSAxNjBTMzAzLjQwMyAzMDQgMjI0LjAwMSAzMDRTODAuMDAxIDIzOS40MDIgODAuMDAxIDE2MFMxNDQuNTk4IDE2IDIyNC4wMDEgMTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UserAstronaut(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M349.227 308.754C346.217 307.203 342.516 307.85 340.122 310.244L340.12 310.246C336.409 313.955 337.297 320.25 341.962 322.652C396.565 350.76 432.213 407.719 431.999 469.902C431.95 484.396 419.838 496 405.344 496H336.001V448C336.001 421.49 314.51 400 288.001 400H160.001C133.491 400 112.001 421.49 112.001 448V496H42.657C28.163 496 16.051 484.396 16.003 469.902C15.788 407.727 51.43 350.771 106.047 322.66C110.712 320.258 111.6 313.963 107.889 310.254C105.495 307.859 101.794 307.213 98.784 308.764C39.01 339.564 -0.173 401.707 0.001 469.795C0.061 493.166 19.286 512 42.657 512H120.001C124.419 512 128.001 508.418 128.001 504V448C128.001 430.4 142.401 416 160.001 416H288.001C305.6 416 320.001 430.4 320.001 448V504C320.001 508.418 323.583 512 328.001 512H405.344C428.715 512 447.94 493.164 448.001 469.793C448.172 401.699 409.008 339.553 349.227 308.754ZM184.001 448C179.563 448 176.001 451.562 176.001 456V504C176.001 508.418 179.583 512 184.001 512S192.001 508.418 192.001 504V456C192.001 451.562 188.438 448 184.001 448ZM272.001 448C263.126 448 256.001 455.125 256.001 464S263.126 480 272.001 480S288.001 472.875 288.001 464S280.876 448 272.001 448ZM152.001 168H168.001V184C168.001 188.406 171.594 192 176.001 192S184.001 188.406 184.001 184V168H200.001C204.407 168 208.001 164.406 208.001 160S204.407 152 200.001 152H184.001V136C184.001 131.594 180.407 128 176.001 128S168.001 131.594 168.001 136V152H152.001C147.594 152 144.001 155.594 144.001 160S147.594 168 152.001 168ZM408.001 224C412.407 224 416.001 220.406 416.001 216V104C416.001 99.594 412.407 96 408.001 96S400.001 99.594 400.001 104V216C400.001 220.406 403.594 224 408.001 224ZM200.001 256H248.001C301.001 256 344.001 213 344.001 160V136C344.001 113.875 322.501 96 296.001 96H152.001C125.501 96 104.001 113.875 104.001 136V160C104.001 213 147.001 256 200.001 256ZM120.001 136C120.001 122.99 134.655 112 152.001 112H296.001C313.346 112 328.001 122.99 328.001 136V160C328.001 204.111 292.112 240 248.001 240H200.001C155.889 240 120.001 204.111 120.001 160V136ZM40.001 224C44.407 224 48.001 220.406 48.001 216V104C48.001 99.594 44.407 96 40.001 96S32.001 99.594 32.001 104V216C32.001 220.406 35.594 224 40.001 224ZM224.001 320C312.366 320 384.001 248.365 384.001 160S312.366 0 224.001 0S64.001 71.635 64.001 160S135.635 320 224.001 320ZM224.001 16C303.403 16 368.001 80.598 368.001 160S303.403 304 224.001 304S80.001 239.402 80.001 160S144.598 16 224.001 16Z" />
        </Icon>
    </>
}