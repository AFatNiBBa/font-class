
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `signal-strong` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-strong?s=duotone signal-strong}
 * @preview ![signal-strong](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU0NCAwSDU0NEM1MjYuMzI3IDAgNTEyIDE0LjMyNyA1MTIgMzJWNDgwQzUxMiA0OTcuNjczIDUyNi4zMjcgNTEyIDU0NCA1MTJINTQ0QzU2MS42NzMgNTEyIDU3NiA0OTcuNjczIDU3NiA0ODBWMzJDNTc2IDE0LjMyNyA1NjEuNjczIDAgNTQ0IDBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMyIDM4NEgzMkMxNC4zMjcgMzg0IDAgMzk4LjMyNyAwIDQxNlY0ODBDMCA0OTcuNjczIDE0LjMyNyA1MTIgMzIgNTEySDMyQzQ5LjY3MyA1MTIgNjQgNDk3LjY3MyA2NCA0ODBWNDE2QzY0IDM5OC4zMjcgNDkuNjczIDM4NCAzMiAzODRaTTQxNiA5Nkg0MTZDMzk4LjMyNyA5NiAzODQgMTEwLjMyNyAzODQgMTI4VjQ4MEMzODQgNDk3LjY3MyAzOTguMzI3IDUxMiA0MTYgNTEySDQxNkM0MzMuNjczIDUxMiA0NDggNDk3LjY3MyA0NDggNDgwVjEyOEM0NDggMTEwLjMyNyA0MzMuNjczIDk2IDQxNiA5NlpNMTYwIDI4OEgxNjBDMTQyLjMyNyAyODggMTI4IDMwMi4zMjcgMTI4IDMyMFY0ODBDMTI4IDQ5Ny42NzMgMTQyLjMyNyA1MTIgMTYwIDUxMkgxNjBDMTc3LjY3MyA1MTIgMTkyIDQ5Ny42NzMgMTkyIDQ4MFYzMjBDMTkyIDMwMi4zMjcgMTc3LjY3MyAyODggMTYwIDI4OFpNMjg4IDE5MkgyODhDMjcwLjMyNyAxOTIgMjU2IDIwNi4zMjcgMjU2IDIyNFY0ODBDMjU2IDQ5Ny42NzMgMjcwLjMyNyA1MTIgMjg4IDUxMkgyODhDMzA1LjY3MyA1MTIgMzIwIDQ5Ny42NzMgMzIwIDQ4MFYyMjRDMzIwIDIwNi4zMjcgMzA1LjY3MyAxOTIgMjg4IDE5MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function SignalStrong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M544 0H544C526.327 0 512 14.327 512 32V480C512 497.673 526.327 512 544 512H544C561.673 512 576 497.673 576 480V32C576 14.327 561.673 0 544 0Z" />
            <path d="M32 384H32C14.327 384 0 398.327 0 416V480C0 497.673 14.327 512 32 512H32C49.673 512 64 497.673 64 480V416C64 398.327 49.673 384 32 384ZM416 96H416C398.327 96 384 110.327 384 128V480C384 497.673 398.327 512 416 512H416C433.673 512 448 497.673 448 480V128C448 110.327 433.673 96 416 96ZM160 288H160C142.327 288 128 302.327 128 320V480C128 497.673 142.327 512 160 512H160C177.673 512 192 497.673 192 480V320C192 302.327 177.673 288 160 288ZM288 192H288C270.327 192 256 206.327 256 224V480C256 497.673 270.327 512 288 512H288C305.673 512 320 497.673 320 480V224C320 206.327 305.673 192 288 192Z" />
        </Icon>
    </>
}