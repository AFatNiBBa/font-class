
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `beer-mug-empty` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug-empty?s=light beer-mug-empty}
 * @preview ![beer-mug-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDQgMTI4QzEzNS4xNTYgMTI4IDEyOCAxMzUuMTU2IDEyOCAxNDRWMzY4QzEyOCAzNzYuODQ0IDEzNS4xNTYgMzg0IDE0NCAzODRTMTYwIDM3Ni44NDQgMTYwIDM2OFYxNDRDMTYwIDEzNS4xNTYgMTUyLjg0NCAxMjggMTQ0IDEyOFpNMjcyIDEyOEMyNjMuMTU2IDEyOCAyNTYgMTM1LjE1NiAyNTYgMTQ0VjM2OEMyNTYgMzc2Ljg0NCAyNjMuMTU2IDM4NCAyNzIgMzg0UzI4OCAzNzYuODQ0IDI4OCAzNjhWMTQ0QzI4OCAxMzUuMTU2IDI4MC44NDQgMTI4IDI3MiAxMjhaTTIwOCAxMjhDMTk5LjE1NiAxMjggMTkyIDEzNS4xNTYgMTkyIDE0NFYzNjhDMTkyIDM3Ni44NDQgMTk5LjE1NiAzODQgMjA4IDM4NFMyMjQgMzc2Ljg0NCAyMjQgMzY4VjE0NEMyMjQgMTM1LjE1NiAyMTYuODQ0IDEyOCAyMDggMTI4Wk00MzIgOTZIMzg0VjgwQzM4NCA1My40OSAzNjIuNTEgMzIgMzM2IDMySDgwQzUzLjQ5IDMyIDMyIDUzLjQ5IDMyIDgwVjM4NEMzMiA0MzcuMDIgNzQuOTggNDgwIDEyOCA0ODBIMjg4QzM0MS4wMiA0ODAgMzg0IDQzNy4wMiAzODQgMzg0VjM3Ny44OTFMNDY3Ljc4MSAzMzZDNDk1LjA2MiAzMjIuMzU5IDUxMiAyOTQuOTUzIDUxMiAyNjQuNDUzVjE3NkM1MTIgMTMxLjg5MSA0NzYuMTI1IDk2IDQzMiA5NlpNMzUyIDM4NEMzNTIgNDE5LjI4OSAzMjMuMjkxIDQ0OCAyODggNDQ4SDEyOEM5Mi43MTEgNDQ4IDY0IDQxOS4yODkgNjQgMzg0VjgwQzY0IDcxLjE3OCA3MS4xNzggNjQgODAgNjRIMzM2QzM0NC44MjIgNjQgMzUyIDcxLjE3OCAzNTIgODBWMzg0Wk00ODAgMjY0LjQ1M0M0ODAgMjgyLjc1IDQ2OS44NDQgMjk5LjE4OCA0NTMuNDY5IDMwNy4zNzVMMzg0IDM0Mi4xMDlWMTI4SDQzMkM0NTguNDY5IDEyOCA0ODAgMTQ5LjUzMSA0ODAgMTc2VjI2NC40NTNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BeerMugEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M144 128C135.156 128 128 135.156 128 144V368C128 376.844 135.156 384 144 384S160 376.844 160 368V144C160 135.156 152.844 128 144 128ZM272 128C263.156 128 256 135.156 256 144V368C256 376.844 263.156 384 272 384S288 376.844 288 368V144C288 135.156 280.844 128 272 128ZM208 128C199.156 128 192 135.156 192 144V368C192 376.844 199.156 384 208 384S224 376.844 224 368V144C224 135.156 216.844 128 208 128ZM432 96H384V80C384 53.49 362.51 32 336 32H80C53.49 32 32 53.49 32 80V384C32 437.02 74.98 480 128 480H288C341.02 480 384 437.02 384 384V377.891L467.781 336C495.062 322.359 512 294.953 512 264.453V176C512 131.891 476.125 96 432 96ZM352 384C352 419.289 323.291 448 288 448H128C92.711 448 64 419.289 64 384V80C64 71.178 71.178 64 80 64H336C344.822 64 352 71.178 352 80V384ZM480 264.453C480 282.75 469.844 299.188 453.469 307.375L384 342.109V128H432C458.469 128 480 149.531 480 176V264.453Z" />
        </Icon>
    </>
}