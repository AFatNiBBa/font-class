
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `flute` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flute?s=solid flute}
 * @preview ![flute](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDE5MlYzMjBDMCAzMzcuNjI1IDE0LjM3NSAzNTIgMzIgMzUySDk2VjE2MEgzMkMxNC4zNzUgMTYwIDAgMTc0LjM3NSAwIDE5MlpNNjA4IDE2MEgxMjhWMzUySDYwOEM2MjUuNjI1IDM1MiA2NDAgMzM3LjYyNSA2NDAgMzIwVjE5MkM2NDAgMTc0LjM3NSA2MjUuNjI1IDE2MCA2MDggMTYwWk0zMjAgMjgwQzMwNi43NSAyODAgMjk2IDI2OS4yNSAyOTYgMjU2UzMwNi43NSAyMzIgMzIwIDIzMlMzNDQgMjQyLjc1IDM0NCAyNTZTMzMzLjI1IDI4MCAzMjAgMjgwWk00MTYgMjgwQzQwMi43NSAyODAgMzkyIDI2OS4yNSAzOTIgMjU2UzQwMi43NSAyMzIgNDE2IDIzMlM0NDAgMjQyLjc1IDQ0MCAyNTZTNDI5LjI1IDI4MCA0MTYgMjgwWk01MTIgMjgwQzQ5OC43NSAyODAgNDg4IDI2OS4yNSA0ODggMjU2UzQ5OC43NSAyMzIgNTEyIDIzMlM1MzYgMjQyLjc1IDUzNiAyNTZTNTI1LjI1IDI4MCA1MTIgMjgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Flute(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M0 192V320C0 337.625 14.375 352 32 352H96V160H32C14.375 160 0 174.375 0 192ZM608 160H128V352H608C625.625 352 640 337.625 640 320V192C640 174.375 625.625 160 608 160ZM320 280C306.75 280 296 269.25 296 256S306.75 232 320 232S344 242.75 344 256S333.25 280 320 280ZM416 280C402.75 280 392 269.25 392 256S402.75 232 416 232S440 242.75 440 256S429.25 280 416 280ZM512 280C498.75 280 488 269.25 488 256S498.75 232 512 232S536 242.75 536 256S525.25 280 512 280Z" />
        </Icon>
    </>
}