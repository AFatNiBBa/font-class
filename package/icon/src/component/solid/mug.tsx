
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mug` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mug?s=solid mug}
 * @preview ![mug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNjRINTZDNDkuNjI1IDY0IDQzLjUgNjYuNSAzOSA3MVMzMiA4MS42MjUgMzIgODhWMzUyQzMyIDQwNSA3NSA0NDggMTI4IDQ0OEgzMjBDMzczIDQ0OCA0MTYgNDA1IDQxNiAzNTJWMzIwSDQ0OEM1MTguNzUgMzIwIDU3NiAyNjIuNzUgNTc2IDE5MlM1MTguNzUgNjQgNDQ4IDY0Wk00NDggMjU2SDQxNlYxMjhINDQ4QzQ4My4zNzUgMTI4IDUxMiAxNTYuNjI1IDUxMiAxOTJTNDgzLjM3NSAyNTYgNDQ4IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Mug(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M448 64H56C49.625 64 43.5 66.5 39 71S32 81.625 32 88V352C32 405 75 448 128 448H320C373 448 416 405 416 352V320H448C518.75 320 576 262.75 576 192S518.75 64 448 64ZM448 256H416V128H448C483.375 128 512 156.625 512 192S483.375 256 448 256Z" />
        </Icon>
    </>
}