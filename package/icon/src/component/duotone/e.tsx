
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `e` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/e?s=duotone e}
 * @preview ![e](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCA0MzJDMzIwIDQ1OC41IDI5OC41MTYgNDgwIDI3MiA0ODBINDhDMjEuNDg0IDQ4MCAwIDQ1OC41IDAgNDMyVjgwQzAgNTMuNSAyMS40ODQgMzIgNDggMzJIMjcyQzI5OC41MTYgMzIgMzIwIDUzLjUgMzIwIDgwUzI5OC41MTYgMTI4IDI3MiAxMjhIOTZWMjA4SDIwOEMyMzQuNTE2IDIwOCAyNTYgMjI5LjUgMjU2IDI1NlMyMzQuNTE2IDMwNCAyMDggMzA0SDk2VjM4NEgyNzJDMjk4LjUxNiAzODQgMzIwIDQwNS41IDMyMCA0MzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function E(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path opacity={.4} d="M320 432C320 458.5 298.516 480 272 480H48C21.484 480 0 458.5 0 432V80C0 53.5 21.484 32 48 32H272C298.516 32 320 53.5 320 80S298.516 128 272 128H96V208H208C234.516 208 256 229.5 256 256S234.516 304 208 304H96V384H272C298.516 384 320 405.5 320 432Z" />
        </Icon>
    </>
}