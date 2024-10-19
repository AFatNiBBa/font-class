
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tv` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tv?s=duotone tv}
 * @preview ![tv](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA0NDhIMTI4QzExMC4zMjcgNDQ4IDk2IDQ2Mi4zMjcgOTYgNDgwVjQ4MEM5NiA0OTcuNjczIDExMC4zMjcgNTEyIDEyOCA1MTJINTEyQzUyOS42NzMgNTEyIDU0NCA0OTcuNjczIDU0NCA0ODBWNDgwQzU0NCA0NjIuMzI3IDUyOS42NzMgNDQ4IDUxMiA0NDhaTTU5MiAwSDQ4QzIxLjUgMCAwIDIxLjUgMCA0OFYzNjhDMCAzOTQuNSAyMS41IDQxNiA0OCA0MTZINTkyQzYxOC41IDQxNiA2NDAgMzk0LjUgNjQwIDM2OFY0OEM2NDAgMjEuNSA2MTguNSAwIDU5MiAwWk01NzYgMzUySDY0VjY0SDU3NlYzNTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTU3NiAzNTIuMDAxSDY0VjY0LjAwMUg1NzZWMzUyLjAwMVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Tv(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M512 448H128C110.327 448 96 462.327 96 480V480C96 497.673 110.327 512 128 512H512C529.673 512 544 497.673 544 480V480C544 462.327 529.673 448 512 448ZM592 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H592C618.5 416 640 394.5 640 368V48C640 21.5 618.5 0 592 0ZM576 352H64V64H576V352Z" />
            <path d="M576 352.001H64V64.001H576V352.001Z" />
        </Icon>
    </>
}