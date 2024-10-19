
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `scrubber` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scrubber?s=duotone scrubber}
 * @preview ![scrubber](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAzMjBDMjIwLjY3NCAzMjAgMTkyIDI5MS4yNSAxOTIgMjU2UzIyMC42NzQgMTkyIDI1NiAxOTJTMzIwIDIyMC43NSAzMjAgMjU2UzI5MS4zMjYgMzIwIDI1NiAzMjBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDYxIDE2IDE2IDEyMy40MiAxNiAyNTZTMTIzLjQ2MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU4IDQ5NiAyNTZTMzg4LjUzOSAxNiAyNTYgMTZaTTI1NiAzMjBDMjIwLjY3NCAzMjAgMTkyIDI5MS4yNSAxOTIgMjU2UzIyMC42NzQgMTkyIDI1NiAxOTJTMzIwIDIyMC43NSAzMjAgMjU2UzI5MS4zMjYgMzIwIDI1NiAzMjBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Scrubber(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 320C220.674 320 192 291.25 192 256S220.674 192 256 192S320 220.75 320 256S291.326 320 256 320Z" />
            <path d="M256 16C123.461 16 16 123.42 16 256S123.461 496 256 496S496 388.58 496 256S388.539 16 256 16ZM256 320C220.674 320 192 291.25 192 256S220.674 192 256 192S320 220.75 320 256S291.326 320 256 320Z" />
        </Icon>
    </>
}