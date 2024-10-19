
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone-blank` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone-blank?s=duotone tombstone-blank}
 * @preview ![tombstone-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNiAxOTIuMDAxQzQxNiA4Ni4wMDEgMzMwIDAuMDAxIDIyNCAwLjAwMUMxMTggMC4wMDEgMzIgODYuMDAxIDMyIDE5Mi4wMDFWNDQ4SDQxNlYxOTIuMDAxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00MzIgNDQ4LjAwMUgxNkM3LjEyNSA0NDguMDAxIDAgNDU1LjEyNiAwIDQ2NC4wMDFWNDk2LjAwMUMwIDUwNC44NzYgNy4xMjUgNTEyLjAwMSAxNiA1MTIuMDAxSDQzMkM0NDAuODc1IDUxMi4wMDEgNDQ4IDUwNC44NzYgNDQ4IDQ5Ni4wMDFWNDY0LjAwMUM0NDggNDU1LjEyNiA0NDAuODc1IDQ0OC4wMDEgNDMyIDQ0OC4wMDFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TombstoneBlank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M416 192.001C416 86.001 330 0.001 224 0.001C118 0.001 32 86.001 32 192.001V448H416V192.001Z" />
            <path d="M432 448.001H16C7.125 448.001 0 455.126 0 464.001V496.001C0 504.876 7.125 512.001 16 512.001H432C440.875 512.001 448 504.876 448 496.001V464.001C448 455.126 440.875 448.001 432 448.001Z" />
        </Icon>
    </>
}