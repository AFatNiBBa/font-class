
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hospital` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hospital?s=thin hospital}
 * @preview ![hospital](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDQgMEg0MEMxNy45MzggMCAwIDE3LjkzOCAwIDQwVjUwNEMwIDUwOC40MDYgMy41OTQgNTEyIDggNTEyUzE2IDUwOC40MDYgMTYgNTA0VjQwQzE2IDI2Ljc4MSAyNi43ODEgMTYgNDAgMTZIMzQ0QzM1Ny4yMTkgMTYgMzY4IDI2Ljc4MSAzNjggNDBWNTA0QzM2OCA1MDguNDA2IDM3MS41OTQgNTEyIDM3NiA1MTJTMzg0IDUwOC40MDYgMzg0IDUwNFY0MEMzODQgMTcuOTM4IDM2Ni4wNjIgMCAzNDQgMFpNMjA3LjY4OCA1NkgxNzYuMzEyQzE2Ny4zMTIgNTYgMTYwIDYzLjMxMiAxNjAgNzIuMzEyVjk2SDEzNi4zMTJDMTI3LjMxMiA5NiAxMjAgMTAzLjMxMiAxMjAgMTEyLjMxMlYxNDMuNjg4QzEyMCAxNTIuNjg4IDEyNy4zMTIgMTYwIDEzNi4zMTIgMTYwSDE1OS43ODFMMTYwIDE4My42ODhDMTYwIDE5Mi42ODggMTY3LjMxMiAyMDAgMTc2LjMxMiAyMDBIMjA3LjY4OEMyMTYuNjg4IDIwMCAyMjQgMTkyLjY4OCAyMjQgMTgzLjY4OFYxNjAuMjE5TDI0Ny42ODggMTYwQzI1Ni42ODggMTYwIDI2NCAxNTIuNjg4IDI2NCAxNDMuNjg4VjExMi4zMTJDMjY0IDEwMy4zMTIgMjU2LjY4OCA5NiAyNDcuNjg4IDk2SDIyNFY3Mi4zMTJDMjI0IDYzLjMxMiAyMTYuNjg4IDU2IDIwNy42ODggNTZaTTI0OCAxMTIuMzEyTDI0Ny41OTQgMTQ0TDIwOCAxNDQuNDA2TDIwNy42ODggMTg0TDE3NiAxODMuNTk0TDE3NS41OTQgMTQ0TDEzNiAxNDMuNjg4TDEzNi4zMTIgMTEySDE3NkwxNzYuMzEyIDcyTDIwOCA3Mi4zMTJWMTEyTDI0OCAxMTIuMzEyWk0xMzYgMjY4QzEzNiAyNTYuOTY5IDEyNy4wMzEgMjQ4IDExNiAyNDhINzZDNjQuOTY5IDI0OCA1NiAyNTYuOTY5IDU2IDI2OFYzMDhDNTYgMzE5LjAzMSA2NC45NjkgMzI4IDc2IDMyOEgxMTZDMTI3LjAzMSAzMjggMTM2IDMxOS4wMzEgMTM2IDMwOFYyNjhaTTEyMCAzMDhDMTIwIDMxMC4yMTkgMTE4LjIxOSAzMTIgMTE2IDMxMkg3NkM3My43ODEgMzEyIDcyIDMxMC4yMTkgNzIgMzA4VjI2OEM3MiAyNjUuNzgxIDczLjc4MSAyNjQgNzYgMjY0SDExNkMxMTguMjE5IDI2NCAxMjAgMjY1Ljc4MSAxMjAgMjY4VjMwOFpNMTcyIDI0OEMxNjAuOTY5IDI0OCAxNTIgMjU2Ljk2OSAxNTIgMjY4VjMwOEMxNTIgMzE5LjAzMSAxNjAuOTY5IDMyOCAxNzIgMzI4SDIxMkMyMjMuMDMxIDMyOCAyMzIgMzE5LjAzMSAyMzIgMzA4VjI2OEMyMzIgMjU2Ljk2OSAyMjMuMDMxIDI0OCAyMTIgMjQ4SDE3MlpNMjE2IDI2OFYzMDhDMjE2IDMxMC4yMTkgMjE0LjIxOSAzMTIgMjEyIDMxMkgxNzJDMTY5Ljc4MSAzMTIgMTY4IDMxMC4yMTkgMTY4IDMwOFYyNjhDMTY4IDI2NS43ODEgMTY5Ljc4MSAyNjQgMTcyIDI2NEgyMTJDMjE0LjIxOSAyNjQgMjE2IDI2NS43ODEgMjE2IDI2OFpNMzA4IDI0OEgyNjhDMjU2Ljk2OSAyNDggMjQ4IDI1Ni45NjkgMjQ4IDI2OFYzMDhDMjQ4IDMxOS4wMzEgMjU2Ljk2OSAzMjggMjY4IDMyOEgzMDhDMzE5LjAzMSAzMjggMzI4IDMxOS4wMzEgMzI4IDMwOFYyNjhDMzI4IDI1Ni45NjkgMzE5LjAzMSAyNDggMzA4IDI0OFpNMzEyIDMwOEMzMTIgMzEwLjIxOSAzMTAuMjE5IDMxMiAzMDggMzEySDI2OEMyNjUuNzgxIDMxMiAyNjQgMzEwLjIxOSAyNjQgMzA4VjI2OEMyNjQgMjY1Ljc4MSAyNjUuNzgxIDI2NCAyNjggMjY0SDMwOEMzMTAuMjE5IDI2NCAzMTIgMjY1Ljc4MSAzMTIgMjY4VjMwOFpNMTkyIDM4NEMxNjEuMTI1IDM4NCAxMzYgNDA5LjEyNSAxMzYgNDQwVjUwNEMxMzYgNTA4LjQwNiAxMzkuNTc4IDUxMiAxNDQgNTEyUzE1MiA1MDguNDA2IDE1MiA1MDRWNDQwQzE1MiA0MTcuOTM4IDE2OS45MzggNDAwIDE5MiA0MDBTMjMyIDQxNy45MzggMjMyIDQ0MFY1MDRDMjMyIDUwOC40MDYgMjM1LjU3OCA1MTIgMjQwIDUxMlMyNDggNTA4LjQwNiAyNDggNTA0VjQ0MEMyNDggNDA5LjEyNSAyMjIuODc1IDM4NCAxOTIgMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Hospital(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M344 0H40C17.938 0 0 17.938 0 40V504C0 508.406 3.594 512 8 512S16 508.406 16 504V40C16 26.781 26.781 16 40 16H344C357.219 16 368 26.781 368 40V504C368 508.406 371.594 512 376 512S384 508.406 384 504V40C384 17.938 366.062 0 344 0ZM207.688 56H176.312C167.312 56 160 63.312 160 72.312V96H136.312C127.312 96 120 103.312 120 112.312V143.688C120 152.688 127.312 160 136.312 160H159.781L160 183.688C160 192.688 167.312 200 176.312 200H207.688C216.688 200 224 192.688 224 183.688V160.219L247.688 160C256.688 160 264 152.688 264 143.688V112.312C264 103.312 256.688 96 247.688 96H224V72.312C224 63.312 216.688 56 207.688 56ZM248 112.312L247.594 144L208 144.406L207.688 184L176 183.594L175.594 144L136 143.688L136.312 112H176L176.312 72L208 72.312V112L248 112.312ZM136 268C136 256.969 127.031 248 116 248H76C64.969 248 56 256.969 56 268V308C56 319.031 64.969 328 76 328H116C127.031 328 136 319.031 136 308V268ZM120 308C120 310.219 118.219 312 116 312H76C73.781 312 72 310.219 72 308V268C72 265.781 73.781 264 76 264H116C118.219 264 120 265.781 120 268V308ZM172 248C160.969 248 152 256.969 152 268V308C152 319.031 160.969 328 172 328H212C223.031 328 232 319.031 232 308V268C232 256.969 223.031 248 212 248H172ZM216 268V308C216 310.219 214.219 312 212 312H172C169.781 312 168 310.219 168 308V268C168 265.781 169.781 264 172 264H212C214.219 264 216 265.781 216 268ZM308 248H268C256.969 248 248 256.969 248 268V308C248 319.031 256.969 328 268 328H308C319.031 328 328 319.031 328 308V268C328 256.969 319.031 248 308 248ZM312 308C312 310.219 310.219 312 308 312H268C265.781 312 264 310.219 264 308V268C264 265.781 265.781 264 268 264H308C310.219 264 312 265.781 312 268V308ZM192 384C161.125 384 136 409.125 136 440V504C136 508.406 139.578 512 144 512S152 508.406 152 504V440C152 417.938 169.938 400 192 400S232 417.938 232 440V504C232 508.406 235.578 512 240 512S248 508.406 248 504V440C248 409.125 222.875 384 192 384Z" />
        </Icon>
    </>
}