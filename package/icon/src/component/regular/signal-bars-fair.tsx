
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars-fair` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-fair?s=regular signal-bars-fair}
 * @preview ![signal-bars-fair](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiAzODRIMzJDMTQuMzI4IDM4NCAwIDM5OC4zMjggMCA0MTZWNDgwQzAgNDk3LjY3MiAxNC4zMjggNTEyIDMyIDUxMkg5NkMxMTMuNjc0IDUxMiAxMjggNDk3LjY3MiAxMjggNDgwVjQxNkMxMjggMzk4LjMyOCAxMTMuNjc0IDM4NCA5NiAzODRaTTgwIDQ2NEg0OFY0MzJIODBWNDY0Wk0yNDggMjU2SDE4NEMxNjYuMzI4IDI1NiAxNTIgMjcwLjMyOCAxNTIgMjg4VjQ4MEMxNTIgNDk3LjY3MiAxNjYuMzI4IDUxMiAxODQgNTEySDI0OEMyNjUuNjc0IDUxMiAyODAgNDk3LjY3MiAyODAgNDgwVjI4OEMyODAgMjcwLjMyOCAyNjUuNjc0IDI1NiAyNDggMjU2Wk0yMzIgNDY0SDIwMFYzMDRIMjMyVjQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SignalBarsFair(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M96 384H32C14.328 384 0 398.328 0 416V480C0 497.672 14.328 512 32 512H96C113.674 512 128 497.672 128 480V416C128 398.328 113.674 384 96 384ZM80 464H48V432H80V464ZM248 256H184C166.328 256 152 270.328 152 288V480C152 497.672 166.328 512 184 512H248C265.674 512 280 497.672 280 480V288C280 270.328 265.674 256 248 256ZM232 464H200V304H232V464Z" />
        </Icon>
    </>
}