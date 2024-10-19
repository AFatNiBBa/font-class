
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sd-card` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sd-card?s=duotone sd-card}
 * @preview ![sd-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCAwSDEyOEwwIDEyOFY0NDhDMCA0ODMuMjUgMjguNzUgNTEyIDY0IDUxMkgzMjBDMzU1LjI1IDUxMiAzODQgNDgzLjI1IDM4NCA0NDhWNjRDMzg0IDI4Ljc1IDM1NS4yNSAwIDMyMCAwWk0xNjAgMTYwSDExMlY2NEgxNjBWMTYwWk0yNDAgMTYwSDE5MlY2NEgyNDBWMTYwWk0zMjAgMTYwSDI3MlY2NEgzMjBWMTYwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xMTIgMTYwSDE2MFY2NEgxMTJWMTYwWk0xOTIgMTYwSDI0MFY2NEgxOTJWMTYwWk0yNzIgNjRWMTYwSDMyMFY2NEgyNzJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SdCard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M320 0H128L0 128V448C0 483.25 28.75 512 64 512H320C355.25 512 384 483.25 384 448V64C384 28.75 355.25 0 320 0ZM160 160H112V64H160V160ZM240 160H192V64H240V160ZM320 160H272V64H320V160Z" />
            <path d="M112 160H160V64H112V160ZM192 160H240V64H192V160ZM272 64V160H320V64H272Z" />
        </Icon>
    </>
}