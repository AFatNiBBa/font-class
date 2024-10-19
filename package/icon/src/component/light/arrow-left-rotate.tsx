
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-left-rotate` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-rotate?s=light arrow-left-rotate}
 * @preview ![arrow-left-rotate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMjU2QzQ4MCAzNzkuNSAzNzkuNTE2IDQ4MCAyNTYgNDgwQzE4Ni41OTQgNDgwIDEyMi4yMzQgNDQ4LjU5NCA3OS40MzggMzkzLjg0NEM3NCAzODYuOTA2IDc1LjIzNCAzNzYuODQ0IDgyLjE4OCAzNzEuNDA2Qzg5LjE3MiAzNjUuODc1IDk5LjIxOSAzNjcuMTU2IDEwNC42NTYgMzc0LjE1NkMxNDEuMzQ0IDQyMS4wOTQgMTk2LjUxNiA0NDggMjU2IDQ0OEMzNjEuODc1IDQ0OCA0NDggMzYxLjg3NSA0NDggMjU2UzM2MS44NzUgNjQgMjU2IDY0QzE4Ny4wNjQgNjQgMTI0LjQ5OCAxMDAuNzI3IDkwLjE1NCAxNjBIMTc2QzE4NC44NDQgMTYwIDE5MiAxNjcuMTU2IDE5MiAxNzZTMTg0Ljg0NCAxOTIgMTc2IDE5Mkg0OEMzOS4xNTYgMTkyIDMyIDE4NC44NDQgMzIgMTc2VjQ4QzMyIDM5LjE1NiAzOS4xNTYgMzIgNDggMzJTNjQgMzkuMTU2IDY0IDQ4VjE0MS41NTlDMTA0LjM1OSA3My44NjcgMTc2LjUyOSAzMiAyNTYgMzJDMzc5LjUxNiAzMiA0ODAgMTMyLjUgNDgwIDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowLeftRotate(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480 256C480 379.5 379.516 480 256 480C186.594 480 122.234 448.594 79.438 393.844C74 386.906 75.234 376.844 82.188 371.406C89.172 365.875 99.219 367.156 104.656 374.156C141.344 421.094 196.516 448 256 448C361.875 448 448 361.875 448 256S361.875 64 256 64C187.064 64 124.498 100.727 90.154 160H176C184.844 160 192 167.156 192 176S184.844 192 176 192H48C39.156 192 32 184.844 32 176V48C32 39.156 39.156 32 48 32S64 39.156 64 48V141.559C104.359 73.867 176.529 32 256 32C379.516 32 480 132.5 480 256Z" />
        </Icon>
    </>
}