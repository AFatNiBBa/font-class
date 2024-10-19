
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-blank` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-blank?s=duotone book-blank}
 * @preview ![book-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNiAzODRWNDQ4SDk2Qzc4LjMyNiA0NDggNjQgNDMzLjY3MiA2NCA0MTZDNjQgMzk4LjMyNiA3OC4zMjYgMzg0IDk2IDM4NEg0MTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTk2IDM4NEg0MjRDNDM3LjI1NCAzODQgNDQ4IDM3My4yNTQgNDQ4IDM2MFYzMkM0NDggMTQuMzI2IDQzMy42NzQgMCA0MTYgMEg5NkM0Mi45OCAwIDAgNDIuOTggMCA5NlY0MTZDMCA0NjkuMDIgNDIuOTggNTEyIDk2IDUxMkg0MjRDNDM3LjI1NCA1MTIgNDQ4IDUwMS4yNTQgNDQ4IDQ4OFY0NzJDNDQ4IDQ1OC43NDQgNDM3LjI1NCA0NDggNDI0IDQ0OEg5NkM3OC4zMjYgNDQ4IDY0IDQzMy42NzIgNjQgNDE2QzY0IDM5OC4zMjYgNzguMzI2IDM4NCA5NiAzODRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BookBlank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M416 384V448H96C78.326 448 64 433.672 64 416C64 398.326 78.326 384 96 384H416Z" />
            <path d="M96 384H424C437.254 384 448 373.254 448 360V32C448 14.326 433.674 0 416 0H96C42.98 0 0 42.98 0 96V416C0 469.02 42.98 512 96 512H424C437.254 512 448 501.254 448 488V472C448 458.744 437.254 448 424 448H96C78.326 448 64 433.672 64 416C64 398.326 78.326 384 96 384Z" />
        </Icon>
    </>
}