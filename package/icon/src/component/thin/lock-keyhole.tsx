
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lock-keyhole` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole?s=thin lock-keyhole}
 * @preview ![lock-keyhole](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMjI0SDM4NFYxMjhDMzg0IDU3LjQyMiAzMjYuNTk0IDAgMjU2IDBTMTI4IDU3LjQyMiAxMjggMTI4VjIyNEg5NkM2MC42NTIgMjI0IDMyIDI1Mi42NTYgMzIgMjg4VjQ0OEMzMiA0ODMuMzQ0IDYwLjY1MiA1MTIgOTYgNTEySDQxNkM0NTEuMzQ4IDUxMiA0ODAgNDgzLjM0NCA0ODAgNDQ4VjI4OEM0ODAgMjUyLjY1NiA0NTEuMzQ4IDIyNCA0MTYgMjI0Wk0xNDQgMTI4QzE0NCA2Ni4yNSAxOTQuMjUgMTYgMjU2IDE2UzM2OCA2Ni4yNSAzNjggMTI4VjIyNEgxNDRWMTI4Wk00NjQgNDQ4QzQ2NCA0NzQuNDY5IDQ0Mi40NjkgNDk2IDQxNiA0OTZIOTZDNjkuNTMxIDQ5NiA0OCA0NzQuNDY5IDQ4IDQ0OFYyODhDNDggMjYxLjUzMSA2OS41MzEgMjQwIDk2IDI0MEg0MTZDNDQyLjQ2OSAyNDAgNDY0IDI2MS41MzEgNDY0IDI4OFY0NDhaTTI1NiAzMjBDMjM4LjMyNiAzMjAgMjI0IDMzNC4zMjggMjI0IDM1MlYzODRDMjI0IDQwMS42NzIgMjM4LjMyNiA0MTYgMjU2IDQxNlMyODggNDAxLjY3MiAyODggMzg0VjM1MkMyODggMzM0LjMyOCAyNzMuNjc0IDMyMCAyNTYgMzIwWk0yNzIgMzg0QzI3MiAzOTIuODI0IDI2NC44MjIgNDAwIDI1NiA0MDBTMjQwIDM5Mi44MjQgMjQwIDM4NFYzNTJDMjQwIDM0My4xNzYgMjQ3LjE3OCAzMzYgMjU2IDMzNlMyNzIgMzQzLjE3NiAyNzIgMzUyVjM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LockKeyhole(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M416 224H384V128C384 57.422 326.594 0 256 0S128 57.422 128 128V224H96C60.652 224 32 252.656 32 288V448C32 483.344 60.652 512 96 512H416C451.348 512 480 483.344 480 448V288C480 252.656 451.348 224 416 224ZM144 128C144 66.25 194.25 16 256 16S368 66.25 368 128V224H144V128ZM464 448C464 474.469 442.469 496 416 496H96C69.531 496 48 474.469 48 448V288C48 261.531 69.531 240 96 240H416C442.469 240 464 261.531 464 288V448ZM256 320C238.326 320 224 334.328 224 352V384C224 401.672 238.326 416 256 416S288 401.672 288 384V352C288 334.328 273.674 320 256 320ZM272 384C272 392.824 264.822 400 256 400S240 392.824 240 384V352C240 343.176 247.178 336 256 336S272 343.176 272 352V384Z" />
        </Icon>
    </>
}