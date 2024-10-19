
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lock-keyhole` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole?s=regular lock-keyhole}
 * @preview ![lock-keyhole](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMTkySDM4NFYxMjhDMzg0IDU3LjQyMiAzMjYuNTc4IDAgMjU2IDBTMTI4IDU3LjQyMiAxMjggMTI4VjE5Mkg5NkM2MC42NTQgMTkyIDMyIDIyMC42NTQgMzIgMjU2VjQ0OEMzMiA0ODMuMzQ2IDYwLjY1NCA1MTIgOTYgNTEySDQxNkM0NTEuMzQ2IDUxMiA0ODAgNDgzLjM0NiA0ODAgNDQ4VjI1NkM0ODAgMjIwLjY1NCA0NTEuMzQ2IDE5MiA0MTYgMTkyWk0xNzYgMTI4QzE3NiA4My44OTEgMjExLjg5MSA0OCAyNTYgNDhTMzM2IDgzLjg5MSAzMzYgMTI4VjE5MkgxNzZWMTI4Wk00MzIgNDQ4QzQzMiA0NTYuODIyIDQyNC44MjIgNDY0IDQxNiA0NjRIOTZDODcuMTc4IDQ2NCA4MCA0NTYuODIyIDgwIDQ0OFYyNTZDODAgMjQ3LjE3OCA4Ny4xNzggMjQwIDk2IDI0MEg0MTZDNDI0LjgyMiAyNDAgNDMyIDI0Ny4xNzggNDMyIDI1NlY0NDhaTTI1NiAzMDRDMjQyLjc1IDMwNCAyMzIgMzE0Ljc1IDIzMiAzMjhWMzc2QzIzMiAzODkuMjUgMjQyLjc1IDQwMCAyNTYgNDAwUzI4MCAzODkuMjUgMjgwIDM3NlYzMjhDMjgwIDMxNC43NSAyNjkuMjUgMzA0IDI1NiAzMDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LockKeyhole(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M416 192H384V128C384 57.422 326.578 0 256 0S128 57.422 128 128V192H96C60.654 192 32 220.654 32 256V448C32 483.346 60.654 512 96 512H416C451.346 512 480 483.346 480 448V256C480 220.654 451.346 192 416 192ZM176 128C176 83.891 211.891 48 256 48S336 83.891 336 128V192H176V128ZM432 448C432 456.822 424.822 464 416 464H96C87.178 464 80 456.822 80 448V256C80 247.178 87.178 240 96 240H416C424.822 240 432 247.178 432 256V448ZM256 304C242.75 304 232 314.75 232 328V376C232 389.25 242.75 400 256 400S280 389.25 280 376V328C280 314.75 269.25 304 256 304Z" />
        </Icon>
    </>
}