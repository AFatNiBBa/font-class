
import { Icon, generic } from "../../index";

/**
 * A component that renders the `smog` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/smog?s=duotone smog}
 * @preview ![smog](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEzNiA0NjRIMjRDMTAuOCA0NjQgMCA0NzQuOCAwIDQ4OFY0ODhDMCA1MDEuMiAxMC44IDUxMiAyNCA1MTJIMTM2QzE0OS4yIDUxMiAxNjAgNTAxLjIgMTYwIDQ4OFY0ODhDMTYwIDQ3NC44IDE0OS4yIDQ2NCAxMzYgNDY0Wk02MTYgMzY4SDg4Qzc0LjggMzY4IDY0IDM3OC44IDY0IDM5MlYzOTJDNjQgNDA1LjIgNzQuOCA0MTYgODggNDE2SDYxNkM2MjkuMiA0MTYgNjQwIDQwNS4yIDY0MCAzOTJWMzkyQzY0MCAzNzguOCA2MjkuMiAzNjggNjE2IDM2OFpNNTUyIDQ2NEgyMzJDMjE4LjggNDY0IDIwOCA0NzQuOCAyMDggNDg4VjQ4OEMyMDggNTAxLjIgMjE4LjggNTEyIDIzMiA1MTJINTUyQzU2NS4yIDUxMiA1NzYgNTAxLjIgNTc2IDQ4OFY0ODhDNTc2IDQ3NC44IDU2NS4yIDQ2NCA1NTIgNDY0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xNDQgMjg4SDMwMC4xMjVDMzIyLjYyNSAzMDcuNzUgMzUxLjc1IDMyMCAzODQgMzIwUzQ0NS4yNSAzMDcuNzUgNDY3Ljg3NSAyODhINTI4QzU4OS44NzUgMjg4IDY0MCAyMzcuODc1IDY0MCAxNzZTNTg5Ljg3NSA2NCA1MjggNjRDNTEwIDY0IDQ5My4yNSA2OC42MjUgNDc4LjI1IDc2LjEyNUM0NTQgMzEgNDA2Ljc1IDAgMzUyIDBDMzExIDAgMjc0LjI1IDE3LjI1IDI0OCA0NC43NUMyMjEuNzUgMTcuMjUgMTg1IDAgMTQ0IDBDNjQuNSAwIDAgNjQuNSAwIDE0NFM2NC41IDI4OCAxNDQgMjg4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Smog: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M136 464H24C10.8 464 0 474.8 0 488V488C0 501.2 10.8 512 24 512H136C149.2 512 160 501.2 160 488V488C160 474.8 149.2 464 136 464ZM616 368H88C74.8 368 64 378.8 64 392V392C64 405.2 74.8 416 88 416H616C629.2 416 640 405.2 640 392V392C640 378.8 629.2 368 616 368ZM552 464H232C218.8 464 208 474.8 208 488V488C208 501.2 218.8 512 232 512H552C565.2 512 576 501.2 576 488V488C576 474.8 565.2 464 552 464Z" />
            <path d="M144 288H300.125C322.625 307.75 351.75 320 384 320S445.25 307.75 467.875 288H528C589.875 288 640 237.875 640 176S589.875 64 528 64C510 64 493.25 68.625 478.25 76.125C454 31 406.75 0 352 0C311 0 274.25 17.25 248 44.75C221.75 17.25 185 0 144 0C64.5 0 0 64.5 0 144S64.5 288 144 288Z" />
    </Icon>
);

export default Smog;