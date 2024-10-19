
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `id-card-clip` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/id-card-clip?s=solid id-card-clip}
 * @preview ![id-card-clip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTI4SDMyMEMzMzcuNjc0IDEyOCAzNTIgMTEzLjY3MiAzNTIgOTZWMzJDMzUyIDE0LjMyOCAzMzcuNjc0IDAgMzIwIDBIMjU2QzIzOC4zMjYgMCAyMjQgMTQuMzI4IDIyNCAzMlY5NkMyMjQgMTEzLjY3MiAyMzguMzI2IDEyOCAyNTYgMTI4Wk01MjggNjRIMzg0VjExMkMzODQgMTM4LjUwOCAzNjIuNTEgMTYwIDMzNiAxNjBIMjQwQzIxMy40OSAxNjAgMTkyIDEzOC41MDggMTkyIDExMlY2NEg0OEMyMS40OSA2NCAwIDg1LjQ5MiAwIDExMlY0NjRDMCA0OTAuNTA4IDIxLjQ5IDUxMiA0OCA1MTJINTI4QzU1NC41MSA1MTIgNTc2IDQ5MC41MDggNTc2IDQ2NFYxMTJDNTc2IDg1LjQ5MiA1NTQuNTEgNjQgNTI4IDY0Wk0yODggMjI0QzMyMy4zNDYgMjI0IDM1MiAyNTIuNjU2IDM1MiAyODhTMzIzLjM0NiAzNTIgMjg4IDM1MlMyMjQgMzIzLjM0NCAyMjQgMjg4UzI1Mi42NTQgMjI0IDI4OCAyMjRaTTM4NCA0NDhIMTkyQzE4My4xNjQgNDQ4IDE3NiA0NDAuODM2IDE3NiA0MzJDMTc2IDQwNS40OTIgMTk3LjQ5IDM4NCAyMjQgMzg0SDM1MkMzNzguNTEgMzg0IDQwMCA0MDUuNDkyIDQwMCA0MzJDNDAwIDQ0MC44MzYgMzkyLjgzNiA0NDggMzg0IDQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function IdCardClip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M256 128H320C337.674 128 352 113.672 352 96V32C352 14.328 337.674 0 320 0H256C238.326 0 224 14.328 224 32V96C224 113.672 238.326 128 256 128ZM528 64H384V112C384 138.508 362.51 160 336 160H240C213.49 160 192 138.508 192 112V64H48C21.49 64 0 85.492 0 112V464C0 490.508 21.49 512 48 512H528C554.51 512 576 490.508 576 464V112C576 85.492 554.51 64 528 64ZM288 224C323.346 224 352 252.656 352 288S323.346 352 288 352S224 323.344 224 288S252.654 224 288 224ZM384 448H192C183.164 448 176 440.836 176 432C176 405.492 197.49 384 224 384H352C378.51 384 400 405.492 400 432C400 440.836 392.836 448 384 448Z" />
        </Icon>
    </>
}