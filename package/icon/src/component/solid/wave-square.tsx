
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wave-square` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wave-square?s=solid wave-square}
 * @preview ![wave-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzYgNDgwSDMyNEMzMDQuMTE4IDQ4MCAyODggNDYzLjg4MiAyODggNDQ0Vjk2SDE5MlYyNTJDMTkyIDI3MS44ODIgMTc1Ljg4MiAyODggMTU2IDI4OEgzMkMxNC4zMjcgMjg4IDAgMjczLjY3MyAwIDI1NlYyNTZDMCAyMzguMzI3IDE0LjMyNyAyMjQgMzIgMjI0SDEyOFY2OEMxMjggNDguMTE4IDE0NC4xMTggMzIgMTY0IDMySDMxNkMzMzUuODgyIDMyIDM1MiA0OC4xMTggMzUyIDY4VjQxNkg0NDhWMjYwQzQ0OCAyNDAuMTE4IDQ2NC4xMTggMjI0IDQ4NCAyMjRINjA4QzYyNS42NzMgMjI0IDY0MCAyMzguMzI3IDY0MCAyNTZWMjU2QzY0MCAyNzMuNjczIDYyNS42NzMgMjg4IDYwOCAyODhINTEyVjQ0NEM1MTIgNDYzLjg4MiA0OTUuODgyIDQ4MCA0NzYgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WaveSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M476 480H324C304.118 480 288 463.882 288 444V96H192V252C192 271.882 175.882 288 156 288H32C14.327 288 0 273.673 0 256V256C0 238.327 14.327 224 32 224H128V68C128 48.118 144.118 32 164 32H316C335.882 32 352 48.118 352 68V416H448V260C448 240.118 464.118 224 484 224H608C625.673 224 640 238.327 640 256V256C640 273.673 625.673 288 608 288H512V444C512 463.882 495.882 480 476 480Z" />
        </Icon>
    </>
}