
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `images-user` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/images-user?s=solid images-user}
 * @preview ![images-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjggMzJIMTQ0QzExNy40OSAzMiA5NiA1My40OTIgOTYgODBWMzM2Qzk2IDM2Mi41MDggMTE3LjQ5IDM4NCAxNDQgMzg0SDUyOEM1NTQuNTEgMzg0IDU3NiAzNjIuNTA4IDU3NiAzMzZWODBDNTc2IDUzLjQ5MiA1NTQuNTEgMzIgNTI4IDMyWk0zMzYuMDE0IDk2QzM3MS4zNTkgOTYgNDAwLjAxNCAxMjQuNjU2IDQwMC4wMTQgMTYwUzM3MS4zNTkgMjI0IDMzNi4wMTQgMjI0UzI3Mi4wMTQgMTk1LjM0NCAyNzIuMDE0IDE2MFMzMDAuNjY4IDk2IDMzNi4wMTQgOTZaTTQzMi4wMTQgMzIwSDI0MC4wMTRDMjMxLjE3OCAzMjAgMjI0LjAxNCAzMTIuODM2IDIyNC4wMTQgMzA0QzIyNC4wMTQgMjc3LjQ5MiAyNDUuNTA0IDI1NiAyNzIuMDE0IDI1Nkg0MDAuMDE0QzQyNi41MjMgMjU2IDQ0OC4wMTQgMjc3LjQ5MiA0NDguMDE0IDMwNEM0NDguMDE0IDMxMi44MzYgNDQwLjg1IDMyMCA0MzIuMDE0IDMyMFpNNDggNDAwVjk2QzIxLjQ5IDk2IDAgMTE3LjQ5MiAwIDE0NFY0MTZDMCA0NTEuMzQ0IDI4LjY1NCA0ODAgNjQgNDgwSDQzMkM0NTguNTEgNDgwIDQ4MCA0NTguNTA4IDQ4MCA0MzJIODBDNjIuMzI2IDQzMiA0OCA0MTcuNjcyIDQ4IDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ImagesUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M528 32H144C117.49 32 96 53.492 96 80V336C96 362.508 117.49 384 144 384H528C554.51 384 576 362.508 576 336V80C576 53.492 554.51 32 528 32ZM336.014 96C371.359 96 400.014 124.656 400.014 160S371.359 224 336.014 224S272.014 195.344 272.014 160S300.668 96 336.014 96ZM432.014 320H240.014C231.178 320 224.014 312.836 224.014 304C224.014 277.492 245.504 256 272.014 256H400.014C426.523 256 448.014 277.492 448.014 304C448.014 312.836 440.85 320 432.014 320ZM48 400V96C21.49 96 0 117.492 0 144V416C0 451.344 28.654 480 64 480H432C458.51 480 480 458.508 480 432H80C62.326 432 48 417.672 48 400Z" />
        </Icon>
    </>
}