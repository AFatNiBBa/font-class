
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `l` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/l?s=duotone l}
 * @preview ![l](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI3MiA0ODBIODBDNTMuNSA0ODAgMzIgNDU4LjUgMzIgNDMyVjgwQzMyIDUzLjUgNTMuNSAzMiA4MCAzMlMxMjggNTMuNSAxMjggODBWMzg0SDI3MkMyOTguNSAzODQgMzIwIDQwNS41IDMyMCA0MzJTMjk4LjUgNDgwIDI3MiA0ODBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function L(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M272 480H80C53.5 480 32 458.5 32 432V80C32 53.5 53.5 32 80 32S128 53.5 128 80V384H272C298.5 384 320 405.5 320 432S298.5 480 272 480Z" />
        </Icon>
    </>
}