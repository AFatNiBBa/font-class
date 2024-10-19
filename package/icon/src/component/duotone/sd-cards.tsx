
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sd-cards` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sd-cards?s=duotone sd-cards}
 * @preview ![sd-cards](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAwSDIwOEw5NiAxMTJWMzUyQzk2IDM4Ny4yNSAxMjQuNzUgNDE2IDE2MCA0MTZIMzg0QzQxOS4yNSA0MTYgNDQ4IDM4Ny4yNSA0NDggMzUyVjY0QzQ0OCAyOC43NSA0MTkuMjUgMCAzODQgMFpNMzA0IDE2MEgyNTZWNjRIMzA0VjE2MFpNMzg0IDE2MEgzMzZWNjRIMzg0VjE2MFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzA0IDY0SDI1NlYxNjBIMzA0VjY0Wk0zMzYgNjRWMTYwSDM4NFY2NEgzMzZaTTQ4IDQzMlY5NkMyMS40OSA5NiAwIDExNy40OTIgMCAxNDRWNDQ4QzAgNDgzLjM0NCAyOC42NTQgNTEyIDY0IDUxMkgzMDRDMzMwLjUxIDUxMiAzNTIgNDkwLjUwOCAzNTIgNDY0SDgwQzYyLjMyNiA0NjQgNDggNDQ5LjY3MiA0OCA0MzJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SdCards(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 0H208L96 112V352C96 387.25 124.75 416 160 416H384C419.25 416 448 387.25 448 352V64C448 28.75 419.25 0 384 0ZM304 160H256V64H304V160ZM384 160H336V64H384V160Z" />
            <path d="M304 64H256V160H304V64ZM336 64V160H384V64H336ZM48 432V96C21.49 96 0 117.492 0 144V448C0 483.344 28.654 512 64 512H304C330.51 512 352 490.508 352 464H80C62.326 464 48 449.672 48 432Z" />
        </Icon>
    </>
}