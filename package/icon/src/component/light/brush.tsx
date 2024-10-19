
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `brush` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/brush?s=light brush}
 * @preview ![brush](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMEg2NEMyOC44MDEgMCAwIDI4LjgwMSAwIDY0VjI4OEMwIDM0MS4wMiA0Mi45OCAzODQgOTYgMzg0SDEyOFY0NDQuNjYyQzEyOCA0NzYuNTM5IDE0OS44MiA1MDYuMDQ3IDE4MS4yODcgNTExLjEzM0MyMjEuNDEgNTE3LjYxNyAyNTYgNDg2Ljg4NyAyNTYgNDQ4VjM4NEgyODhDMzQxLjAyIDM4NCAzODQgMzQxLjAyIDM4NCAyODhWNjRDMzg0IDI4LjgwMSAzNTUuMTk5IDAgMzIwIDBaTTI4OCAzNTJIMjI0VjQ0OEMyMjQgNDY1LjYyNSAyMDkuNjI1IDQ4MCAxOTIgNDgwUzE2MCA0NjUuNjI1IDE2MCA0NDhWMzUySDk2QzYwLjgwMSAzNTIgMzIgMzIzLjE5OSAzMiAyODhIMzUyQzM1MiAzMjMuMTk5IDMyMy4xOTkgMzUyIDI4OCAzNTJaTTM1MiAyNTZIMzJWNjRDMzIgNDYuMzI2IDQ2LjMyNiAzMiA2NCAzMkg5NlYxNDRDOTYgMTUyLjgzNiAxMDMuMTY0IDE2MCAxMTIgMTYwUzEyOCAxNTIuODM2IDEyOCAxNDRWMzJIMTkyVjExMkMxOTIgMTIwLjgzNiAxOTkuMTY0IDEyOCAyMDggMTI4UzIyNCAxMjAuODM2IDIyNCAxMTJWMzJIMzIwQzMzNy42NzQgMzIgMzUyIDQ2LjMyNiAzNTIgNjRWMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Brush(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 0H64C28.801 0 0 28.801 0 64V288C0 341.02 42.98 384 96 384H128V444.662C128 476.539 149.82 506.047 181.287 511.133C221.41 517.617 256 486.887 256 448V384H288C341.02 384 384 341.02 384 288V64C384 28.801 355.199 0 320 0ZM288 352H224V448C224 465.625 209.625 480 192 480S160 465.625 160 448V352H96C60.801 352 32 323.199 32 288H352C352 323.199 323.199 352 288 352ZM352 256H32V64C32 46.326 46.326 32 64 32H96V144C96 152.836 103.164 160 112 160S128 152.836 128 144V32H192V112C192 120.836 199.164 128 208 128S224 120.836 224 112V32H320C337.674 32 352 46.326 352 64V256Z" />
        </Icon>
    </>
}