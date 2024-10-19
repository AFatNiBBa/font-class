
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tag` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tag?s=solid tag}
 * @preview ![tag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDYwQzAgNDQuNTM2IDEyLjUzNiAzMiAyOCAzMkgyMTQuODA0QzIyNy41NjIgMzIgMjQ1LjM4MSAzOS4zODEgMjU0LjQwMiA0OC40MDJMNDMxLjU5OCAyMjUuNjA0QzQ1My40NjggMjQ3LjQ3NCA0NTMuNDY3IDI4Mi45MzIgNDMxLjU5NiAzMDQuODAyTDI3Mi43ODYgNDYzLjU5OUMyNTAuOTE3IDQ4NS40NjcgMjE1LjQ2MSA0ODUuNDY3IDE5My41OTIgNDYzLjU5OEwxNi40MDIgMjg2LjQwMkM3LjM4MSAyNzcuMzgxIDAgMjU5LjU2MiAwIDI0Ni44MDRWNjBaTTgwIDE0NEM4MCAxNjEuNjc3IDk0LjMzMyAxNzYgMTEyIDE3NlMxNDQgMTYxLjY3NyAxNDQgMTQ0UzEyOS42NjcgMTEyIDExMiAxMTJTODAgMTI2LjMyMyA4MCAxNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Tag(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M0 60C0 44.536 12.536 32 28 32H214.804C227.562 32 245.381 39.381 254.402 48.402L431.598 225.604C453.468 247.474 453.467 282.932 431.596 304.802L272.786 463.599C250.917 485.467 215.461 485.467 193.592 463.598L16.402 286.402C7.381 277.381 0 259.562 0 246.804V60ZM80 144C80 161.677 94.333 176 112 176S144 161.677 144 144S129.667 112 112 112S80 126.323 80 144Z" />
        </Icon>
    </>
}