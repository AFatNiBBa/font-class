
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `grip-lines` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines?s=duotone grip-lines}
 * @preview ![grip-lines](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNiAyODhIMzJDMTQuNCAyODggMCAzMDIuNCAwIDMyMFYzMjBDMCAzMzcuNiAxNC40IDM1MiAzMiAzNTJINDE2QzQzMy42IDM1MiA0NDggMzM3LjYgNDQ4IDMyMFYzMjBDNDQ4IDMwMi40IDQzMy42IDI4OCA0MTYgMjg4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00MTYgMTYwSDMyQzE0LjQgMTYwIDAgMTc0LjQgMCAxOTJWMTkyQzAgMjA5LjYgMTQuNCAyMjQgMzIgMjI0SDQxNkM0MzMuNiAyMjQgNDQ4IDIwOS42IDQ0OCAxOTJWMTkyQzQ0OCAxNzQuNCA0MzMuNiAxNjAgNDE2IDE2MFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function GripLines(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M416 288H32C14.4 288 0 302.4 0 320V320C0 337.6 14.4 352 32 352H416C433.6 352 448 337.6 448 320V320C448 302.4 433.6 288 416 288Z" />
            <path d="M416 160H32C14.4 160 0 174.4 0 192V192C0 209.6 14.4 224 32 224H416C433.6 224 448 209.6 448 192V192C448 174.4 433.6 160 416 160Z" />
        </Icon>
    </>
}