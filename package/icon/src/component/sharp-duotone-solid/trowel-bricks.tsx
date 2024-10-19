
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trowel-bricks` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trowel-bricks?s=sharp-duotone-solid trowel-bricks}
 * @preview ![trowel-bricks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NGwxNjAgMCAwIDEyOEwwIDUxMiAwIDM4NHptMTkyIDBsMzIwIDAgMCAxMjgtMzIwIDAgMC0xMjh6bTk2LTE2MGwyMjQgMCAwIDEyOC0yMjQgMCAwLTEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAyNTZsMC0xMDQgODggMCAwIDI0IDE2OCAwIDAtOTZMMzQ0IDgwbDAgMjQtODggMEwyNTYgMCAyMDggMCAwIDEyOCAyMDggMjU2bDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const TrowelBricks: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384l160 0 0 128L0 512 0 384zm192 0l320 0 0 128-320 0 0-128zm96-160l224 0 0 128-224 0 0-128z" />
            <path d="M256 256l0-104 88 0 0 24 168 0 0-96L344 80l0 24-88 0L256 0 208 0 0 128 208 256l48 0z" />
    </Icon>
);

export default TrowelBricks;