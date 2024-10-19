
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `genderless` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/genderless?s=thin genderless}
 * @preview ![genderless](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgOTZDMjgwLjIyNSA5NiAzNTIgMTY3Ljc3NSAzNTIgMjU2UzI4MC4yMjUgNDE2IDE5MiA0MTZTMzIgMzQ0LjIyNSAzMiAyNTZTMTAzLjc3NSA5NiAxOTIgOTZNMTkyIDgwQzk0Ljc5OSA4MCAxNiAxNTguNzk5IDE2IDI1NlM5NC43OTkgNDMyIDE5MiA0MzJTMzY4IDM1My4yMDEgMzY4IDI1NlMyODkuMjAxIDgwIDE5MiA4MEwxOTIgODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Genderless(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 96C280.225 96 352 167.775 352 256S280.225 416 192 416S32 344.225 32 256S103.775 96 192 96M192 80C94.799 80 16 158.799 16 256S94.799 432 192 432S368 353.201 368 256S289.201 80 192 80L192 80Z" />
        </Icon>
    </>
}