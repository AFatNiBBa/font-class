
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tally-1` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tally-1?s=duotone tally-1}
 * @preview ![tally-1](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0IDY0LjAwMVY0NDguMDAxQzY0IDQ2NS42NzQgNDkuNjczIDQ4MC4wMDEgMzIgNDgwLjAwMUgzMkMxNC4zMjcgNDgwLjAwMSAwIDQ2NS42NzQgMCA0NDguMDAxVjY0LjAwMUMwIDQ2LjMyNyAxNC4zMjcgMzIuMDAxIDMyIDMyLjAwMUgzMkM0OS42NzMgMzIuMDAxIDY0IDQ2LjMyNyA2NCA2NC4wMDFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Tally_1(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M64 64.001V448.001C64 465.674 49.673 480.001 32 480.001H32C14.327 480.001 0 465.674 0 448.001V64.001C0 46.327 14.327 32.001 32 32.001H32C49.673 32.001 64 46.327 64 64.001Z" />
        </Icon>
    </>
}