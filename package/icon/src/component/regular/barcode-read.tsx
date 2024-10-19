
import { Icon } from "../../index";

/**
 * A component that renders the `barcode-read` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/barcode-read?s=regular barcode-read}
 * @preview ![barcode-read](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzYgMEgzMkMxNC4zMjcgMCAwIDE0LjMyNyAwIDMyVjEzNkMwIDE0OS4yNSAxMC43NSAxNjAgMjQgMTYwUzQ4IDE0OS4yNSA0OCAxMzZWNDhIMTM2QzE0OS4yNSA0OCAxNjAgMzcuMjUgMTYwIDI0UzE0OS4yNSAwIDEzNiAwWk0xMzYgNDY0SDQ4VjM3NkM0OCAzNjIuNzUgMzcuMjUgMzUyIDI0IDM1MlMwIDM2Mi43NSAwIDM3NlY0ODBDMCA0OTcuNjczIDE0LjMyNyA1MTIgMzIgNTEySDEzNkMxNDkuMjUgNTEyIDE2MCA1MDEuMjUgMTYwIDQ4OFMxNDkuMjUgNDY0IDEzNiA0NjRaTTU1MiAzNTJDNTM4Ljc1IDM1MiA1MjggMzYyLjc1IDUyOCAzNzZWNDY0SDQ0MEM0MjYuNzUgNDY0IDQxNiA0NzQuNzUgNDE2IDQ4OFM0MjYuNzUgNTEyIDQ0MCA1MTJINTQ0QzU2MS42NzMgNTEyIDU3NiA0OTcuNjczIDU3NiA0ODBWMzc2QzU3NiAzNjIuNzUgNTY1LjI1IDM1MiA1NTIgMzUyWk01NDQgMEg0NDBDNDI2Ljc1IDAgNDE2IDEwLjc1IDQxNiAyNFM0MjYuNzUgNDggNDQwIDQ4SDUyOFYxMzZDNTI4IDE0OS4yNSA1MzguNzUgMTYwIDU1MiAxNjBTNTc2IDE0OS4yNSA1NzYgMTM2VjMyQzU3NiAxNC4zMjcgNTYxLjY3MyAwIDU0NCAwWk0xMjAuMDA2IDM4NEMxMzMuMjA2IDM4NCAxNDQuMDA2IDM3My4yIDE0NC4wMDYgMzYwVjE1MkMxNDQuMDA2IDEzOC44IDEzMy4yMDYgMTI4IDEyMC4wMDYgMTI4SDEyMC4wMDZDMTA2LjgwNiAxMjggOTYuMDA2IDEzOC44IDk2LjAwNiAxNTJWMzYwQzk2LjAwNiAzNzMuMiAxMDYuODA2IDM4NCAxMjAuMDA2IDM4NEgxMjAuMDA2Wk00ODAgMzY4LjAwMlYxNDMuOTk4QzQ4MCAxMzUuMTk5IDQ3Mi44MDMgMTI4IDQ2NC4wMDIgMTI4QzQ1NS4yMDMgMTI4IDQ0OC4wMDYgMTM1LjE5OSA0NDguMDA2IDE0My45OThWMzY4LjAwMkM0NDguMDA2IDM3Ni44MDEgNDU1LjIwMyAzODQgNDY0LjAwNCAzODRDNDcyLjgwMyAzODQgNDgwIDM3Ni44MDEgNDgwIDM2OC4wMDJaTTQxNi4wMDYgMTUyQzQxNi4wMDYgMTM4LjggNDA1LjIwNiAxMjggMzkyLjAwNiAxMjhIMzkyLjAwNkMzNzguODA2IDEyOCAzNjguMDA2IDEzOC44IDM2OC4wMDYgMTUyVjM2MEMzNjguMDA2IDM3My4yIDM3OC44MDYgMzg0IDM5Mi4wMDYgMzg0SDM5Mi4wMDZDNDA1LjIwNiAzODQgNDE2LjAwNiAzNzMuMiA0MTYuMDA2IDM2MFYxNTJaTTE5Mi4wMDggMTI4QzE4My4yMDkgMTI4IDE3Ni4wMTIgMTM1LjE5OSAxNzYuMDEyIDE0My45OThWMzY4LjAwMkMxNzYuMDEyIDM3Ni44MDEgMTgzLjIwOSAzODQgMTkyLjAxIDM4NEMyMDAuODA5IDM4NCAyMDguMDA2IDM3Ni44MDEgMjA4LjAwNiAzNjguMDAyVjE0My45OThDMjA4LjAwNiAxMzUuMTk5IDIwMC44MDkgMTI4IDE5Mi4wMDggMTI4Wk0yNjQuMDIzIDEyOEgyNjQuMDIzQzI1MC44MjMgMTI4IDI0MC4wMjMgMTM4LjggMjQwLjAyMyAxNTJWMzYwQzI0MC4wMjMgMzczLjIgMjUwLjgyMyAzODQgMjY0LjAyMyAzODRIMjY0LjAyM0MyNzcuMjIzIDM4NCAyODguMDIzIDM3My4yIDI4OC4wMjMgMzYwVjE1MkMyODguMDIzIDEzOC44IDI3Ny4yMjMgMTI4IDI2NC4wMjMgMTI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BarcodeRead: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M136 0H32C14.327 0 0 14.327 0 32V136C0 149.25 10.75 160 24 160S48 149.25 48 136V48H136C149.25 48 160 37.25 160 24S149.25 0 136 0ZM136 464H48V376C48 362.75 37.25 352 24 352S0 362.75 0 376V480C0 497.673 14.327 512 32 512H136C149.25 512 160 501.25 160 488S149.25 464 136 464ZM552 352C538.75 352 528 362.75 528 376V464H440C426.75 464 416 474.75 416 488S426.75 512 440 512H544C561.673 512 576 497.673 576 480V376C576 362.75 565.25 352 552 352ZM544 0H440C426.75 0 416 10.75 416 24S426.75 48 440 48H528V136C528 149.25 538.75 160 552 160S576 149.25 576 136V32C576 14.327 561.673 0 544 0ZM120.006 384C133.206 384 144.006 373.2 144.006 360V152C144.006 138.8 133.206 128 120.006 128H120.006C106.806 128 96.006 138.8 96.006 152V360C96.006 373.2 106.806 384 120.006 384H120.006ZM480 368.002V143.998C480 135.199 472.803 128 464.002 128C455.203 128 448.006 135.199 448.006 143.998V368.002C448.006 376.801 455.203 384 464.004 384C472.803 384 480 376.801 480 368.002ZM416.006 152C416.006 138.8 405.206 128 392.006 128H392.006C378.806 128 368.006 138.8 368.006 152V360C368.006 373.2 378.806 384 392.006 384H392.006C405.206 384 416.006 373.2 416.006 360V152ZM192.008 128C183.209 128 176.012 135.199 176.012 143.998V368.002C176.012 376.801 183.209 384 192.01 384C200.809 384 208.006 376.801 208.006 368.002V143.998C208.006 135.199 200.809 128 192.008 128ZM264.023 128H264.023C250.823 128 240.023 138.8 240.023 152V360C240.023 373.2 250.823 384 264.023 384H264.023C277.223 384 288.023 373.2 288.023 360V152C288.023 138.8 277.223 128 264.023 128Z" />
    </Icon>
);

export default BarcodeRead;