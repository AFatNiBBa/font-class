
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `toggle-on` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=duotone toggle-on}
 * @preview ![toggle-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCA2NC4wMDFIMTkyQzg1Ljk5OSA2NC4wMDEgMCAxNTAuMDAxIDAgMjU2LjAwMVM4NS45OTkgNDQ4LjAwMSAxOTIgNDQ4LjAwMUgzODRDNDg5Ljk5OSA0NDguMDAxIDU3NiAzNjIuMDAxIDU3NiAyNTYuMDAxUzQ4OS45OTkgNjQuMDAxIDM4NCA2NC4wMDFaTTM4NCAzNTIuMDAxQzMzMC45MzggMzUyLjAwMSAyODggMzA5LjA2MyAyODggMjU2LjAwMVMzMzAuOTM4IDE2MC4wMDEgMzg0IDE2MC4wMDFTNDgwIDIwMi45MzggNDgwIDI1Ni4wMDFTNDM3LjA2MiAzNTIuMDAxIDM4NCAzNTIuMDAxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00ODAgMjU2QzQ4MCAzMDkuMDYyIDQzNy4wNjIgMzUyIDM4NCAzNTJTMjg4IDMwOS4wNjIgMjg4IDI1NlMzMzAuOTM4IDE2MCAzODQgMTYwUzQ4MCAyMDIuOTM4IDQ4MCAyNTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ToggleOn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M384 64.001H192C85.999 64.001 0 150.001 0 256.001S85.999 448.001 192 448.001H384C489.999 448.001 576 362.001 576 256.001S489.999 64.001 384 64.001ZM384 352.001C330.938 352.001 288 309.063 288 256.001S330.938 160.001 384 160.001S480 202.938 480 256.001S437.062 352.001 384 352.001Z" />
            <path d="M480 256C480 309.062 437.062 352 384 352S288 309.062 288 256S330.938 160 384 160S480 202.938 480 256Z" />
        </Icon>
    </>
}