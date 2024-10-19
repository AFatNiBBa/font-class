
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `flag-swallowtail` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flag-swallowtail?s=duotone flag-swallowtail}
 * @preview ![flag-swallowtail](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwNi4zNTQgMzQ0LjUzMUM1MTIuMzY5IDM1MS42ODggNTEzLjY5NyAzNjEuNjU2IDUwOS43NiAzNzAuMTI1UzQ5Ny4zMjIgMzg0IDQ4Ny45OTYgMzg0SDY0VjMySDQ4Ny45OTZDNDk3LjMyMiAzMiA1MDUuODIyIDM3LjQwNiA1MDkuNzYgNDUuODc1UzUxMi4zNjkgNjQuMzEzIDUwNi4zNTQgNzEuNDY5TDM5MS4zNzEgMjA4TDUwNi4zNTQgMzQ0LjUzMVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzIgMEMxNC4yNSAwIDAgMTQuMjUgMCAzMlY0OTZDMCA1MDQuNzUgNy4yNSA1MTIgMTYgNTEySDQ4QzU2Ljc1IDUxMiA2NCA1MDQuNzUgNjQgNDk2VjMyQzY0IDE0LjI1IDQ5Ljc1IDAgMzIgMFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function FlagSwallowtail(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M506.354 344.531C512.369 351.688 513.697 361.656 509.76 370.125S497.322 384 487.996 384H64V32H487.996C497.322 32 505.822 37.406 509.76 45.875S512.369 64.313 506.354 71.469L391.371 208L506.354 344.531Z" />
            <path d="M32 0C14.25 0 0 14.25 0 32V496C0 504.75 7.25 512 16 512H48C56.75 512 64 504.75 64 496V32C64 14.25 49.75 0 32 0Z" />
        </Icon>
    </>
}