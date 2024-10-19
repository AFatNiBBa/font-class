
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `link-simple` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple?s=duotone link-simple}
 * @preview ![link-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiAyNTZDMTkyIDI3My42NzIgMjA2LjMxMiAyODggMjI0IDI4OEg0MTZDNDMzLjY4OCAyODggNDQ4IDI3My42NzIgNDQ4IDI1NlM0MzMuNjg4IDIyNCA0MTYgMjI0SDIyNEMyMDYuMzEyIDIyNCAxOTIgMjM4LjMyOCAxOTIgMjU2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00ODAgOTZIMzg0QzM2Ni4zMTIgOTYgMzUyIDExMC4zMjggMzUyIDEyOFMzNjYuMzEyIDE2MCAzODQgMTYwSDQ4MEM1MzIuOTM4IDE2MCA1NzYgMjAzLjA2MiA1NzYgMjU2UzUzMi45MzggMzUyIDQ4MCAzNTJIMzg0QzM2Ni4zMTIgMzUyIDM1MiAzNjYuMzI4IDM1MiAzODRTMzY2LjMxMiA0MTYgMzg0IDQxNkg0ODBDNTY4LjIxOSA0MTYgNjQwIDM0NC4yMTkgNjQwIDI1NlM1NjguMjE5IDk2IDQ4MCA5NlpNMjU2IDM1MkgxNjBDMTA3LjA2MiAzNTIgNjQgMzA4LjkzOCA2NCAyNTZTMTA3LjA2MiAxNjAgMTYwIDE2MEgyNTZDMjczLjY4OCAxNjAgMjg4IDE0NS42NzIgMjg4IDEyOFMyNzMuNjg4IDk2IDI1NiA5NkgxNjBDNzEuNzgxIDk2IDAgMTY3Ljc4MSAwIDI1NlM3MS43ODEgNDE2IDE2MCA0MTZIMjU2QzI3My42ODggNDE2IDI4OCA0MDEuNjcyIDI4OCAzODRTMjczLjY4OCAzNTIgMjU2IDM1MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function LinkSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M192 256C192 273.672 206.312 288 224 288H416C433.688 288 448 273.672 448 256S433.688 224 416 224H224C206.312 224 192 238.328 192 256Z" />
            <path d="M480 96H384C366.312 96 352 110.328 352 128S366.312 160 384 160H480C532.938 160 576 203.062 576 256S532.938 352 480 352H384C366.312 352 352 366.328 352 384S366.312 416 384 416H480C568.219 416 640 344.219 640 256S568.219 96 480 96ZM256 352H160C107.062 352 64 308.938 64 256S107.062 160 160 160H256C273.688 160 288 145.672 288 128S273.688 96 256 96H160C71.781 96 0 167.781 0 256S71.781 416 160 416H256C273.688 416 288 401.672 288 384S273.688 352 256 352Z" />
        </Icon>
    </>
}