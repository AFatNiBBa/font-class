
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `h` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/h?s=duotone h}
 * @preview ![h](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCA4MFY0MzJDMzg0IDQ1OC41IDM2Mi41MTYgNDgwIDMzNiA0ODBTMjg4IDQ1OC41IDI4OCA0MzJWMjg4SDk2VjQzMkM5NiA0NTguNSA3NC41MTYgNDgwIDQ4IDQ4MFMwIDQ1OC41IDAgNDMyVjgwQzAgNTMuNSAyMS40ODQgMzIgNDggMzJTOTYgNTMuNSA5NiA4MFYxOTJIMjg4VjgwQzI4OCA1My41IDMwOS40ODQgMzIgMzM2IDMyUzM4NCA1My41IDM4NCA4MFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function H(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M384 80V432C384 458.5 362.516 480 336 480S288 458.5 288 432V288H96V432C96 458.5 74.516 480 48 480S0 458.5 0 432V80C0 53.5 21.484 32 48 32S96 53.5 96 80V192H288V80C288 53.5 309.484 32 336 32S384 53.5 384 80Z" />
        </Icon>
    </>
}