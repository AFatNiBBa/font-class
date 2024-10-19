
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tally-2` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tally-2?s=duotone tally-2}
 * @preview ![tally-2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyIDMyLjAwMUgzMkMxNC4zMjcgMzIuMDAxIDAgNDYuMzI3IDAgNjQuMDAxVjQ0OC4wMDFDMCA0NjUuNjc0IDE0LjMyNyA0ODAuMDAxIDMyIDQ4MC4wMDFIMzJDNDkuNjczIDQ4MC4wMDEgNjQgNDY1LjY3NCA2NCA0NDguMDAxVjY0LjAwMUM2NCA0Ni4zMjcgNDkuNjczIDMyLjAwMSAzMiAzMi4wMDFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTE2MCAzMi4wMDFIMTYwQzE0Mi4zMjcgMzIuMDAxIDEyOCA0Ni4zMjcgMTI4IDY0LjAwMVY0NDguMDAxQzEyOCA0NjUuNjc0IDE0Mi4zMjcgNDgwLjAwMSAxNjAgNDgwLjAwMUgxNjBDMTc3LjY3MyA0ODAuMDAxIDE5MiA0NjUuNjc0IDE5MiA0NDguMDAxVjY0LjAwMUMxOTIgNDYuMzI3IDE3Ny42NzMgMzIuMDAxIDE2MCAzMi4wMDFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Tally_2(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M32 32.001H32C14.327 32.001 0 46.327 0 64.001V448.001C0 465.674 14.327 480.001 32 480.001H32C49.673 480.001 64 465.674 64 448.001V64.001C64 46.327 49.673 32.001 32 32.001Z" />
            <path d="M160 32.001H160C142.327 32.001 128 46.327 128 64.001V448.001C128 465.674 142.327 480.001 160 480.001H160C177.673 480.001 192 465.674 192 448.001V64.001C192 46.327 177.673 32.001 160 32.001Z" />
        </Icon>
    </>
}