
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `flag-swallowtail` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flag-swallowtail?s=solid flag-swallowtail}
 * @preview ![flag-swallowtail](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NCA0OTZDNjQgNTA0Ljc1IDU2Ljc1IDUxMiA0OCA1MTJIMTZDNy4yNSA1MTIgMCA1MDQuNzUgMCA0OTZWMzJDMCAxNC4yNSAxNC4yNSAwIDMyIDBTNjQgMTQuMjUgNjQgMzJWNDk2Wk0zOTEuMzcxIDIwOEw1MDYuMzU0IDcxLjQ2OUM1MTIuMzY5IDY0LjMxMiA1MTMuNjk3IDU0LjM0NCA1MDkuNzYgNDUuODc1UzQ5Ny4zMjIgMzIgNDg3Ljk5NiAzMkg5NlYzODRINDg3Ljk5NkM0OTcuMzIyIDM4NCA1MDUuODIyIDM3OC41OTQgNTA5Ljc2IDM3MC4xMjVTNTEyLjM2OSAzNTEuNjg3IDUwNi4zNTQgMzQ0LjUzMUwzOTEuMzcxIDIwOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FlagSwallowtail(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M64 496C64 504.75 56.75 512 48 512H16C7.25 512 0 504.75 0 496V32C0 14.25 14.25 0 32 0S64 14.25 64 32V496ZM391.371 208L506.354 71.469C512.369 64.312 513.697 54.344 509.76 45.875S497.322 32 487.996 32H96V384H487.996C497.322 384 505.822 378.594 509.76 370.125S512.369 351.687 506.354 344.531L391.371 208Z" />
        </Icon>
    </>
}