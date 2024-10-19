
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `compact-disc` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/compact-disc?s=duotone compact-disc}
 * @preview ![compact-disc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDYxIDE2IDE2IDEyMy40MTggMTYgMjU2QzE2IDM4OC41NzggMTIzLjQ2MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU3OCA0OTYgMjU2QzQ5NiAxMjMuNDE4IDM4OC41MzkgMTYgMjU2IDE2Wk05Ni4xNTIgMjQxLjM1MkM5NS40IDI0OS42MzMgODguNzcxIDI1NiA4MC43MTUgMjU2SDc5LjYyN0M3MC41NDkgMjU2IDYzLjIyOSAyNDcuOTkyIDY0LjA2NCAyMzguNjU2QzcyLjM2MyAxNDYuMDE2IDE0Ni40OSA3Mi4wNTkgMjM5LjI3MyA2NC4wNTVDMjQ4LjI5MSA2My4yNzcgMjU2IDcwLjc4OSAyNTYgODAuMTMzQzI1NiA4OC40OCAyNDkuNzg1IDk1LjM2MyAyNDEuNzI3IDk2LjA3OEMxNjQuNzQ0IDEwMi44OTggMTAzLjE0OCAxNjQuMzQ0IDk2LjE1MiAyNDEuMzUyWk0yNTYgMzUyQzIwMi45NzcgMzUyIDE2MCAzMDkgMTYwIDI1NlMyMDIuOTc3IDE2MCAyNTYgMTYwUzM1MiAyMDMgMzUyIDI1NlMzMDkuMDIzIDM1MiAyNTYgMzUyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTYgMTYwQzIwMi45NzcgMTYwIDE2MCAyMDMgMTYwIDI1NlMyMDIuOTc3IDM1MiAyNTYgMzUyUzM1MiAzMDkgMzUyIDI1NlMzMDkuMDIzIDE2MCAyNTYgMTYwWk0yNTYgMjg4QzIzOC4zMDMgMjg4IDIyNCAyNzMuNzUgMjI0IDI1NlMyMzguMzAzIDIyNCAyNTYgMjI0UzI4OCAyMzguMjUgMjg4IDI1NlMyNzMuNjk3IDI4OCAyNTYgMjg4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CompactDisc(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 16C123.461 16 16 123.418 16 256C16 388.578 123.461 496 256 496S496 388.578 496 256C496 123.418 388.539 16 256 16ZM96.152 241.352C95.4 249.633 88.771 256 80.715 256H79.627C70.549 256 63.229 247.992 64.064 238.656C72.363 146.016 146.49 72.059 239.273 64.055C248.291 63.277 256 70.789 256 80.133C256 88.48 249.785 95.363 241.727 96.078C164.744 102.898 103.148 164.344 96.152 241.352ZM256 352C202.977 352 160 309 160 256S202.977 160 256 160S352 203 352 256S309.023 352 256 352Z" />
            <path d="M256 160C202.977 160 160 203 160 256S202.977 352 256 352S352 309 352 256S309.023 160 256 160ZM256 288C238.303 288 224 273.75 224 256S238.303 224 256 224S288 238.25 288 256S273.697 288 256 288Z" />
        </Icon>
    </>
}