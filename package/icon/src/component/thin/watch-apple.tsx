
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `watch-apple` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/watch-apple?s=thin watch-apple}
 * @preview ![watch-apple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTIgODBINzJDMzIuMjk3IDgwIDAgMTEyLjMxMiAwIDE1MlYzNjBDMCAzOTkuNjg4IDMyLjI5NyA0MzIgNzIgNDMySDMxMkMzNTEuNzAzIDQzMiAzODQgMzk5LjY4OCAzODQgMzYwVjE1MkMzODQgMTEyLjMxMiAzNTEuNzAzIDgwIDMxMiA4MFpNMzY4IDM2MEMzNjggMzkwLjg3NSAzNDIuODc1IDQxNiAzMTIgNDE2SDcyQzQxLjEyNSA0MTYgMTYgMzkwLjg3NSAxNiAzNjBWMTUyQzE2IDEyMS4xMjUgNDEuMTI1IDk2IDcyIDk2SDMxMkMzNDIuODc1IDk2IDM2OCAxMjEuMTI1IDM2OCAxNTJWMzYwWk0zMTIgNDQ4QzMwNy41NzggNDQ4IDMwNCA0NTEuNTk0IDMwNCA0NTZWNDcyQzMwNCA0ODUuMjE5IDI5My4yMzQgNDk2IDI4MCA0OTZIMTA0QzkwLjc2NiA0OTYgODAgNDg1LjIxOSA4MCA0NzJWNDU2QzgwIDQ1MS41OTQgNzYuNDIyIDQ0OCA3MiA0NDhTNjQgNDUxLjU5NCA2NCA0NTZWNDcyQzY0IDQ5NC4wNjIgODEuOTM4IDUxMiAxMDQgNTEySDI4MEMzMDIuMDYyIDUxMiAzMjAgNDk0LjA2MiAzMjAgNDcyVjQ1NkMzMjAgNDUxLjU5NCAzMTYuNDIyIDQ0OCAzMTIgNDQ4Wk03MiA2NEM3Ni40MjIgNjQgODAgNjAuNDA2IDgwIDU2VjQwQzgwIDI2Ljc4MSA5MC43NjYgMTYgMTA0IDE2SDI4MEMyOTMuMjM0IDE2IDMwNCAyNi43ODEgMzA0IDQwVjU2QzMwNCA2MC40MDYgMzA3LjU3OCA2NCAzMTIgNjRTMzIwIDYwLjQwNiAzMjAgNTZWNDBDMzIwIDE3LjkzOCAzMDIuMDYyIDAgMjgwIDBIMTA0QzgxLjkzOCAwIDY0IDE3LjkzOCA2NCA0MFY1NkM2NCA2MC40MDYgNjcuNTc4IDY0IDcyIDY0Wk0yMzIgMjU2QzIzMiAyMzMuOTM4IDIxNC4wNjIgMjE2IDE5MiAyMTZTMTUyIDIzMy45MzggMTUyIDI1NlMxNjkuOTM4IDI5NiAxOTIgMjk2UzIzMiAyNzguMDYyIDIzMiAyNTZaTTE5MiAyODBDMTc4Ljc2NiAyODAgMTY4IDI2OS4yMTkgMTY4IDI1NlMxNzguNzY2IDIzMiAxOTIgMjMyUzIxNiAyNDIuNzgxIDIxNiAyNTZTMjA1LjIzNCAyODAgMTkyIDI4MFpNMjgwIDIyNEMyNjIuMzU5IDIyNCAyNDggMjM4LjM0NCAyNDggMjU2UzI2Mi4zNTkgMjg4IDI4MCAyODhTMzEyIDI3My42NTYgMzEyIDI1NlMyOTcuNjQxIDIyNCAyODAgMjI0Wk0yODAgMjcyQzI3MS4xNzIgMjcyIDI2NCAyNjQuODEyIDI2NCAyNTZTMjcxLjE3MiAyNDAgMjgwIDI0MFMyOTYgMjQ3LjE4OCAyOTYgMjU2UzI4OC44MjggMjcyIDI4MCAyNzJaTTEzNiAyNTZDMTM2IDIzOC4zNDQgMTIxLjY0MSAyMjQgMTA0IDIyNFM3MiAyMzguMzQ0IDcyIDI1NlM4Ni4zNTkgMjg4IDEwNCAyODhTMTM2IDI3My42NTYgMTM2IDI1NlpNMTA0IDI3MkM5NS4xNzIgMjcyIDg4IDI2NC44MTIgODggMjU2Uzk1LjE3MiAyNDAgMTA0IDI0MFMxMjAgMjQ3LjE4OCAxMjAgMjU2UzExMi44MjggMjcyIDEwNCAyNzJaTTE0NCAyMDBDMTYxLjY0MSAyMDAgMTc2IDE4NS42NTYgMTc2IDE2OFMxNjEuNjQxIDEzNiAxNDQgMTM2UzExMiAxNTAuMzQ0IDExMiAxNjhTMTI2LjM1OSAyMDAgMTQ0IDIwMFpNMTQ0IDE1MkMxNTIuODI4IDE1MiAxNjAgMTU5LjE4OCAxNjAgMTY4UzE1Mi44MjggMTg0IDE0NCAxODRTMTI4IDE3Ni44MTIgMTI4IDE2OFMxMzUuMTcyIDE1MiAxNDQgMTUyWk0yNDAgMjAwQzI1Ny42NDEgMjAwIDI3MiAxODUuNjU2IDI3MiAxNjhTMjU3LjY0MSAxMzYgMjQwIDEzNlMyMDggMTUwLjM0NCAyMDggMTY4UzIyMi4zNTkgMjAwIDI0MCAyMDBaTTI0MCAxNTJDMjQ4LjgyOCAxNTIgMjU2IDE1OS4xODggMjU2IDE2OFMyNDguODI4IDE4NCAyNDAgMTg0UzIyNCAxNzYuODEyIDIyNCAxNjhTMjMxLjE3MiAxNTIgMjQwIDE1MlpNMTQ0IDMxMkMxMjYuMzU5IDMxMiAxMTIgMzI2LjM0NCAxMTIgMzQ0UzEyNi4zNTkgMzc2IDE0NCAzNzZTMTc2IDM2MS42NTYgMTc2IDM0NFMxNjEuNjQxIDMxMiAxNDQgMzEyWk0xNDQgMzYwQzEzNS4xNzIgMzYwIDEyOCAzNTIuODEyIDEyOCAzNDRTMTM1LjE3MiAzMjggMTQ0IDMyOFMxNjAgMzM1LjE4OCAxNjAgMzQ0UzE1Mi44MjggMzYwIDE0NCAzNjBaTTI0MCAzMTJDMjIyLjM1OSAzMTIgMjA4IDMyNi4zNDQgMjA4IDM0NFMyMjIuMzU5IDM3NiAyNDAgMzc2UzI3MiAzNjEuNjU2IDI3MiAzNDRTMjU3LjY0MSAzMTIgMjQwIDMxMlpNMjQwIDM2MEMyMzEuMTcyIDM2MCAyMjQgMzUyLjgxMiAyMjQgMzQ0UzIzMS4xNzIgMzI4IDI0MCAzMjhTMjU2IDMzNS4xODggMjU2IDM0NFMyNDguODI4IDM2MCAyNDAgMzYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WatchApple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M312 80H72C32.297 80 0 112.312 0 152V360C0 399.688 32.297 432 72 432H312C351.703 432 384 399.688 384 360V152C384 112.312 351.703 80 312 80ZM368 360C368 390.875 342.875 416 312 416H72C41.125 416 16 390.875 16 360V152C16 121.125 41.125 96 72 96H312C342.875 96 368 121.125 368 152V360ZM312 448C307.578 448 304 451.594 304 456V472C304 485.219 293.234 496 280 496H104C90.766 496 80 485.219 80 472V456C80 451.594 76.422 448 72 448S64 451.594 64 456V472C64 494.062 81.938 512 104 512H280C302.062 512 320 494.062 320 472V456C320 451.594 316.422 448 312 448ZM72 64C76.422 64 80 60.406 80 56V40C80 26.781 90.766 16 104 16H280C293.234 16 304 26.781 304 40V56C304 60.406 307.578 64 312 64S320 60.406 320 56V40C320 17.938 302.062 0 280 0H104C81.938 0 64 17.938 64 40V56C64 60.406 67.578 64 72 64ZM232 256C232 233.938 214.062 216 192 216S152 233.938 152 256S169.938 296 192 296S232 278.062 232 256ZM192 280C178.766 280 168 269.219 168 256S178.766 232 192 232S216 242.781 216 256S205.234 280 192 280ZM280 224C262.359 224 248 238.344 248 256S262.359 288 280 288S312 273.656 312 256S297.641 224 280 224ZM280 272C271.172 272 264 264.812 264 256S271.172 240 280 240S296 247.188 296 256S288.828 272 280 272ZM136 256C136 238.344 121.641 224 104 224S72 238.344 72 256S86.359 288 104 288S136 273.656 136 256ZM104 272C95.172 272 88 264.812 88 256S95.172 240 104 240S120 247.188 120 256S112.828 272 104 272ZM144 200C161.641 200 176 185.656 176 168S161.641 136 144 136S112 150.344 112 168S126.359 200 144 200ZM144 152C152.828 152 160 159.188 160 168S152.828 184 144 184S128 176.812 128 168S135.172 152 144 152ZM240 200C257.641 200 272 185.656 272 168S257.641 136 240 136S208 150.344 208 168S222.359 200 240 200ZM240 152C248.828 152 256 159.188 256 168S248.828 184 240 184S224 176.812 224 168S231.172 152 240 152ZM144 312C126.359 312 112 326.344 112 344S126.359 376 144 376S176 361.656 176 344S161.641 312 144 312ZM144 360C135.172 360 128 352.812 128 344S135.172 328 144 328S160 335.188 160 344S152.828 360 144 360ZM240 312C222.359 312 208 326.344 208 344S222.359 376 240 376S272 361.656 272 344S257.641 312 240 312ZM240 360C231.172 360 224 352.812 224 344S231.172 328 240 328S256 335.188 256 344S248.828 360 240 360Z" />
        </Icon>
    </>
}