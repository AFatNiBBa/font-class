
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `flag-swallowtail` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flag-swallowtail?s=regular flag-swallowtail}
 * @preview ![flag-swallowtail](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTEuMzcxIDIwOEw1MDYuMzU0IDcxLjQ2OUM1MTIuMzY5IDY0LjMxMiA1MTMuNjk3IDU0LjM0NCA1MDkuNzYgNDUuODc1UzQ5Ny4zMjIgMzIgNDg3Ljk5NiAzMkg0OFYyNEM0OCAxMC43NDIgMzcuMjU0IDAgMjQgMFMwIDEwLjc0MiAwIDI0VjQ4OEMwIDUwMS4yNTQgMTAuNzQ2IDUxMiAyNCA1MTJTNDggNTAxLjI1NCA0OCA0ODhWMzg0SDQ4Ny45OTZDNDk3LjMyMiAzODQgNTA1LjgyMiAzNzguNTk0IDUwOS43NiAzNzAuMTI1UzUxMi4zNjkgMzUxLjY4NyA1MDYuMzU0IDM0NC41MzFMMzkxLjM3MSAyMDhaTTQ4IDMzNlY4MEg0MzYuNDAyTDM0MS42MzcgMTkyLjUzMUMzMzQuMTIxIDIwMS40NjkgMzM0LjEyMSAyMTQuNTMxIDM0MS42MzcgMjIzLjQ2OUw0MzYuNDAyIDMzNkg0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FlagSwallowtail(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M391.371 208L506.354 71.469C512.369 64.312 513.697 54.344 509.76 45.875S497.322 32 487.996 32H48V24C48 10.742 37.254 0 24 0S0 10.742 0 24V488C0 501.254 10.746 512 24 512S48 501.254 48 488V384H487.996C497.322 384 505.822 378.594 509.76 370.125S512.369 351.687 506.354 344.531L391.371 208ZM48 336V80H436.402L341.637 192.531C334.121 201.469 334.121 214.531 341.637 223.469L436.402 336H48Z" />
        </Icon>
    </>
}