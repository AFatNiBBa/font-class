
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `shredder` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shredder?s=regular shredder}
 * @preview ![shredder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTEuOTk4IDQ4SDM2Ni4wNjFMNDAwIDgxLjk0M1YxNjBINDQ4VjgxLjk0M0M0NDggNjkuMjEzIDQ0Mi45NDMgNTcuMDA2IDQzMy45NDMgNDguMDA0TDQwMC4wMDQgMTQuMDYxQzM5MS4wMDIgNS4wNTcgMzc4Ljc5MyAwIDM2Ni4wNjEgMEgxMTEuOTk4Qzg1LjQ5NCAwIDY0LjAxMiAyMS40NzkgNjQgNDcuOTgyVjc1LjQyMkw2NC4wMDQgMTMwLjI2NEM2NC4wMDIgMTMwLjI2NCA2NC4wMDIgMTMwLjI2NCA2NCAxMzAuMjY0VjE2MEgxMTIuMDA2TDExMS45OTggNDhaTTQ0MCAxOTJINzJDMzIuMjk3IDE5MiAwIDIyNC4yOTcgMCAyNjRWMzYwQzAgMzczLjI1IDEwLjc1IDM4NCAyNCAzODRINDBWNDg4QzQwIDUwMS4yNSA1MC43NSA1MTIgNjQgNTEyUzg4IDUwMS4yNSA4OCA0ODhWMzg0SDEzNlY0ODhDMTM2IDUwMS4yNSAxNDYuNzUgNTEyIDE2MCA1MTJTMTg0IDUwMS4yNSAxODQgNDg4VjM4NEgyMzJWNDg4QzIzMiA1MDEuMjUgMjQyLjc1IDUxMiAyNTYgNTEyUzI4MCA1MDEuMjUgMjgwIDQ4OFYzODRIMzI4VjQ4OEMzMjggNTAxLjI1IDMzOC43NSA1MTIgMzUyIDUxMlMzNzYgNTAxLjI1IDM3NiA0ODhWMzg0SDQyNFY0ODhDNDI0IDUwMS4yNSA0MzQuNzUgNTEyIDQ0OCA1MTJTNDcyIDUwMS4yNSA0NzIgNDg4VjM4NEg0ODhDNTAxLjI1IDM4NCA1MTIgMzczLjI1IDUxMiAzNjBWMjY0QzUxMiAyMjQuMjk3IDQ3OS43MDMgMTkyIDQ0MCAxOTJaTTQ2NCAzMzZINDhWMjY0QzQ4IDI1MC43NjYgNTguNzY2IDI0MCA3MiAyNDBINDQwQzQ1My4yMzQgMjQwIDQ2NCAyNTAuNzY2IDQ2NCAyNjRWMzM2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Shredder(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M111.998 48H366.061L400 81.943V160H448V81.943C448 69.213 442.943 57.006 433.943 48.004L400.004 14.061C391.002 5.057 378.793 0 366.061 0H111.998C85.494 0 64.012 21.479 64 47.982V75.422L64.004 130.264C64.002 130.264 64.002 130.264 64 130.264V160H112.006L111.998 48ZM440 192H72C32.297 192 0 224.297 0 264V360C0 373.25 10.75 384 24 384H40V488C40 501.25 50.75 512 64 512S88 501.25 88 488V384H136V488C136 501.25 146.75 512 160 512S184 501.25 184 488V384H232V488C232 501.25 242.75 512 256 512S280 501.25 280 488V384H328V488C328 501.25 338.75 512 352 512S376 501.25 376 488V384H424V488C424 501.25 434.75 512 448 512S472 501.25 472 488V384H488C501.25 384 512 373.25 512 360V264C512 224.297 479.703 192 440 192ZM464 336H48V264C48 250.766 58.766 240 72 240H440C453.234 240 464 250.766 464 264V336Z" />
        </Icon>
    </>
}