
import { Icon, generic } from "../../index";

/**
 * A component that renders the `note` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/note?s=duotone note}
 * @preview ![note](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODBWNDMyQzAgNDU4LjUxIDIxLjQ5IDQ4MCA0OCA0ODBIMzIwVjM1Mkg0NDhWODBDNDQ4IDUzLjQ5IDQyNi41MSAzMiA0MDAgMzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ0OCAzNTJMMzIwIDQ4MFYzNTJINDQ4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Note: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M400 32H48C21.49 32 0 53.49 0 80V432C0 458.51 21.49 480 48 480H320V352H448V80C448 53.49 426.51 32 400 32Z" />
            <path d="M448 352L320 480V352H448Z" />
    </Icon>
);

export default Note;