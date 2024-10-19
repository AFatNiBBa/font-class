
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-simple` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-simple?s=duotone person-simple}
 * @preview ![person-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAxMjhDMTYzLjM3NSAxMjggMTkyIDk5LjM3NSAxOTIgNjRTMTYzLjM3NSAwIDEyOCAwUzY0IDI4LjYyNSA2NCA2NFM5Mi42MjUgMTI4IDEyOCAxMjhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTE2MCAxNjBIOTZDNjAuNjU0IDE2MCAzMiAxODguNjU0IDMyIDIyNFYzMjBDMzIgMzM3LjY3MyA0Ni4zMjcgMzUyIDY0IDM1Mkw2NCAzNTJWNDgwQzY0IDQ5Ny42NzMgNzguMzI3IDUxMiA5NiA1MTJIMTYwQzE3Ny42NzMgNTEyIDE5MiA0OTcuNjczIDE5MiA0ODBWMzUyQzIwOS42NzMgMzUyIDIyNCAzMzcuNjczIDIyNCAzMjBWMjI0QzIyNCAxODguNjU0IDE5NS4zNDYgMTYwIDE2MCAxNjBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PersonSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path class={generic.secondary} d="M128 128C163.375 128 192 99.375 192 64S163.375 0 128 0S64 28.625 64 64S92.625 128 128 128Z" />
            <path d="M160 160H96C60.654 160 32 188.654 32 224V320C32 337.673 46.327 352 64 352L64 352V480C64 497.673 78.327 512 96 512H160C177.673 512 192 497.673 192 480V352C209.673 352 224 337.673 224 320V224C224 188.654 195.346 160 160 160Z" />
        </Icon>
    </>
}