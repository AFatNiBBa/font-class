
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left?s=duotone arrow-left}
 * @preview ![arrow-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEzMi45OTIgMjE2SDQwNy44MTJDNDI5LjkwNiAyMTYgNDQ3LjgxMiAyMzMuOTA2IDQ0Ny44MTIgMjU2UzQyOS45MDYgMjk2IDQwNy44MTIgMjk2SDEzMi45OTJMOTUgMjU2TDEzMi45OTIgMjE2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0wIDI1NkMwIDI0Ni4wNzggMy42NTYgMjM2LjE3MiAxMSAyMjguNDUzTDE2MyA2OC40NTNDMTc4LjIxOSA1Mi40MzggMjAzLjUzMSA1MS43ODEgMjE5LjU2MiA2N0MyMzUuNSA4Mi4yMzQgMjM2LjE4OCAxMDcuNTc4IDIyMSAxMjMuNTQ3TDk1LjE4OCAyNTZMMjIxIDM4OC40NTNDMjM2LjE4OCA0MDQuNDM4IDIzNS41MzEgNDI5Ljc4MSAyMTkuNTYyIDQ0NUMyMDMuNTMxIDQ2MC4yMTkgMTc4LjIxOSA0NTkuNTYyIDE2MyA0NDMuNTQ3TDExIDI4My41NDdDMy42NTYgMjc1LjgyOCAwIDI2NS45MjIgMCAyNTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M132.992 216H407.812C429.906 216 447.812 233.906 447.812 256S429.906 296 407.812 296H132.992L95 256L132.992 216Z" />
            <path d="M0 256C0 246.078 3.656 236.172 11 228.453L163 68.453C178.219 52.438 203.531 51.781 219.562 67C235.5 82.234 236.188 107.578 221 123.547L95.188 256L221 388.453C236.188 404.438 235.531 429.781 219.562 445C203.531 460.219 178.219 459.562 163 443.547L11 283.547C3.656 275.828 0 265.922 0 256Z" />
        </Icon>
    </>
}