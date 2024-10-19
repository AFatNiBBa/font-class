
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-off` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-off?s=duotone toggle-off}
 * @preview ![toggle-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCA2NEgxOTJDODUuOTk5IDY0IDAgMTUwIDAgMjU2QzAgMzYyIDg1Ljk5OSA0NDggMTkyIDQ0OEgzODRDNDkwIDQ0OCA1NzYgMzYyIDU3NiAyNTZDNTc2IDE1MCA0OTAgNjQgMzg0IDY0Wk0zODQgMzg0SDE5MkMxMjEuNDIgMzg0IDY0IDMyNi41OCA2NCAyNTZTMTIxLjQyIDEyOCAxOTIgMTI4SDM4NEM0NTQuNTggMTI4IDUxMiAxODUuNDIgNTEyIDI1NlM0NTQuNTggMzg0IDM4NCAzODRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI4OCAyNTZDMjg4IDMwOS4wNjIgMjQ1LjA2MiAzNTIgMTkyIDM1MlM5NiAzMDkuMDYyIDk2IDI1NlMxMzguOTM4IDE2MCAxOTIgMTYwUzI4OCAyMDIuOTM4IDI4OCAyNTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ToggleOff(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M384 64H192C85.999 64 0 150 0 256C0 362 85.999 448 192 448H384C490 448 576 362 576 256C576 150 490 64 384 64ZM384 384H192C121.42 384 64 326.58 64 256S121.42 128 192 128H384C454.58 128 512 185.42 512 256S454.58 384 384 384Z" />
            <path d="M288 256C288 309.062 245.062 352 192 352S96 309.062 96 256S138.938 160 192 160S288 202.938 288 256Z" />
        </Icon>
    </>
}