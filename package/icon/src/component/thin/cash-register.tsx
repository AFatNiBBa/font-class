
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cash-register` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cash-register?s=thin cash-register}
 * @preview ![cash-register](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMzIwQzE1MS4xNjQgMzIwIDE0NCAzMjcuMTYyIDE0NCAzMzZDMTQ0IDM0NC44MzYgMTUxLjE2NCAzNTIgMTYwIDM1MlMxNzYgMzQ0LjgzNiAxNzYgMzM2QzE3NiAzMjcuMTYyIDE2OC44MzYgMzIwIDE2MCAzMjBaTTIwOCAyNTZDMTk5LjE2NCAyNTYgMTkyIDI2My4xNjIgMTkyIDI3MkMxOTIgMjgwLjgzNiAxOTkuMTY0IDI4OCAyMDggMjg4UzIyNCAyODAuODM2IDIyNCAyNzJDMjI0IDI2My4xNjIgMjE2LjgzNiAyNTYgMjA4IDI1NlpNMjcyIDU2SDgwQzc1LjU3OCA1NiA3MiA1OS41NzggNzIgNjRTNzUuNTc4IDcyIDgwIDcySDI3MkMyNzYuNDIyIDcyIDI4MCA2OC40MjIgMjgwIDY0UzI3Ni40MjIgNTYgMjcyIDU2Wk0xMTIgMjU2QzEwMy4xNjQgMjU2IDk2IDI2My4xNjIgOTYgMjcyQzk2IDI4MC44MzYgMTAzLjE2NCAyODggMTEyIDI4OFMxMjggMjgwLjgzNiAxMjggMjcyQzEyOCAyNjMuMTYyIDEyMC44MzYgMjU2IDExMiAyNTZaTTMwNCAyNTZDMjk1LjE2NCAyNTYgMjg4IDI2My4xNjIgMjg4IDI3MkMyODggMjgwLjgzNiAyOTUuMTY0IDI4OCAzMDQgMjg4UzMyMCAyODAuODM2IDMyMCAyNzJDMzIwIDI2My4xNjIgMzEyLjgzNiAyNTYgMzA0IDI1NlpNMjU2IDMyMEMyNDcuMTY0IDMyMCAyNDAgMzI3LjE2MiAyNDAgMzM2QzI0MCAzNDQuODM2IDI0Ny4xNjQgMzUyIDI1NiAzNTJTMjcyIDM0NC44MzYgMjcyIDMzNkMyNzIgMzI3LjE2MiAyNjQuODM2IDMyMCAyNTYgMzIwWk01MTEuMjE5IDM3OC43Nkw0ODQuNDY5IDIxOC43NkM0ODEuODQ0IDIwMy4zODUgNDY4LjU5NCAxOTIuMTM1IDQ1Mi44NDQgMTkyLjEzNUwxODQgMTkyLjA0OVYxMjcuODg1SDMwNEMzMTIuODM2IDEyNy44ODUgMzIwIDEyMC43MjEgMzIwIDExMS44ODVWMTZDMzIwIDcuMTYyIDMxMi44MzYgMCAzMDQgMEg0OEMzOS4xNjQgMCAzMiA3LjE2MiAzMiAxNlYxMTEuODg1QzMyIDEyMC43MjEgMzkuMTY0IDEyNy44ODUgNDggMTI3Ljg4NUgxNjhWMTkyLjA0NUw1OS4yNSAxOTIuMDFDNDMuNjI1IDE5Mi4wMSAzMC4yNSAyMDMuMjYgMjcuNjI1IDIxOC43NkwwLjg3NSAzNzguNzZDMC4zNzUgMzgyLjI2IDAgMzg1Ljc2IDAgMzg5LjI2VjQ4MEMwIDQ5Ny43NSAxNC4zNzUgNTEyIDMyIDUxMkg0NzkuOTY5QzQ5Ny43MTkgNTEyIDUxMS45NjkgNDk3Ljc1IDUxMS45NjkgNDgwVjM4OS4yNkM1MTIuMDk0IDM4NS43NiA1MTEuODQ0IDM4Mi4yNiA1MTEuMjE5IDM3OC43NlpNNDggMTExLjg4NVYxNkgzMDRWMTExLjg4NUg0OFpNMTYuNjU2IDM4MS4zOThMNDMuNCAyMjEuNDMyQzQ0LjcxNyAyMTMuNjU0IDUxLjM4MyAyMDguMDEgNTkuMjUgMjA4LjAxTDQ1Mi44NDQgMjA4LjEzNUM0NjAuNzEzIDIwOC4xMzUgNDY3LjM3OSAyMTMuNzM2IDQ2OC42ODggMjIxLjM5OEw0OTUuNDY5IDM4MS41NzJDNDk1LjYwMiAzODIuMzI0IDQ5NS41NDUgMzgzLjIzOCA0OTUuNjI3IDM4NC4wMUgxNi40MzhDMTYuNTM1IDM4My4xNTQgMTYuNTQ1IDM4Mi4xODYgMTYuNjU2IDM4MS4zOThaTTQ5NS45NjkgNDgwQzQ5NS45NjkgNDg4Ljk3MSA0ODguOTQxIDQ5NiA0NzkuOTY5IDQ5NkgzMkMyMy4xNzggNDk2IDE2IDQ4OC44MjIgMTYgNDgwVjQwMC4wMUg0OTUuOTY5VjQ4MFpNNDAwIDI1NkMzOTEuMTY0IDI1NiAzODQgMjYzLjE2MiAzODQgMjcyQzM4NCAyODAuODM2IDM5MS4xNjQgMjg4IDQwMCAyODhTNDE2IDI4MC44NDYgNDE2IDI3Mi4wMUM0MTYgMjYzLjE3MiA0MDguODM2IDI1NiA0MDAgMjU2Wk0zNTIgMzIwQzM0My4xNjQgMzIwIDMzNiAzMjcuMTYyIDMzNiAzMzZDMzM2IDM0NC44MzYgMzQzLjE2NCAzNTIgMzUyIDM1MlMzNjggMzQ0LjgzNiAzNjggMzM2QzM2OCAzMjcuMTYyIDM2MC44MzYgMzIwIDM1MiAzMjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CashRegister(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M160 320C151.164 320 144 327.162 144 336C144 344.836 151.164 352 160 352S176 344.836 176 336C176 327.162 168.836 320 160 320ZM208 256C199.164 256 192 263.162 192 272C192 280.836 199.164 288 208 288S224 280.836 224 272C224 263.162 216.836 256 208 256ZM272 56H80C75.578 56 72 59.578 72 64S75.578 72 80 72H272C276.422 72 280 68.422 280 64S276.422 56 272 56ZM112 256C103.164 256 96 263.162 96 272C96 280.836 103.164 288 112 288S128 280.836 128 272C128 263.162 120.836 256 112 256ZM304 256C295.164 256 288 263.162 288 272C288 280.836 295.164 288 304 288S320 280.836 320 272C320 263.162 312.836 256 304 256ZM256 320C247.164 320 240 327.162 240 336C240 344.836 247.164 352 256 352S272 344.836 272 336C272 327.162 264.836 320 256 320ZM511.219 378.76L484.469 218.76C481.844 203.385 468.594 192.135 452.844 192.135L184 192.049V127.885H304C312.836 127.885 320 120.721 320 111.885V16C320 7.162 312.836 0 304 0H48C39.164 0 32 7.162 32 16V111.885C32 120.721 39.164 127.885 48 127.885H168V192.045L59.25 192.01C43.625 192.01 30.25 203.26 27.625 218.76L0.875 378.76C0.375 382.26 0 385.76 0 389.26V480C0 497.75 14.375 512 32 512H479.969C497.719 512 511.969 497.75 511.969 480V389.26C512.094 385.76 511.844 382.26 511.219 378.76ZM48 111.885V16H304V111.885H48ZM16.656 381.398L43.4 221.432C44.717 213.654 51.383 208.01 59.25 208.01L452.844 208.135C460.713 208.135 467.379 213.736 468.688 221.398L495.469 381.572C495.602 382.324 495.545 383.238 495.627 384.01H16.438C16.535 383.154 16.545 382.186 16.656 381.398ZM495.969 480C495.969 488.971 488.941 496 479.969 496H32C23.178 496 16 488.822 16 480V400.01H495.969V480ZM400 256C391.164 256 384 263.162 384 272C384 280.836 391.164 288 400 288S416 280.846 416 272.01C416 263.172 408.836 256 400 256ZM352 320C343.164 320 336 327.162 336 336C336 344.836 343.164 352 352 352S368 344.836 368 336C368 327.162 360.836 320 352 320Z" />
        </Icon>
    </>
}