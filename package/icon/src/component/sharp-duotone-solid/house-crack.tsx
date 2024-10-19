
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-crack` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-crack?s=sharp-duotone-solid house-crack}
 * @preview ![house-crack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNzJsLjEgMjQwIDE2Ni4zIDBMMTkyIDQ0OGw5Ni04MEwyMjQgMjU2IDM4NCAzNjhsLTk2IDgwIDM4LjQgNjQgMTg2LjIgMC0uNS0yMjRjLS4xLTUuMy0uMS0xMC43LS4xLTE2QzQzNy4zIDIxMC43IDM2Mi43IDE0OS4zIDI4OCA4OEMyMTMuMyAxNDkuMyAxMzguNyAyMTAuNiA2NCAyNzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDI0MEwyODggMCA1NzYgMjQwdjMySDUxMkwyODggODggNjQgMjcySDBWMjQweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HouseCrack: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 272l.1 240 166.3 0L192 448l96-80L224 256 384 368l-96 80 38.4 64 186.2 0-.5-224c-.1-5.3-.1-10.7-.1-16C437.3 210.7 362.7 149.3 288 88C213.3 149.3 138.7 210.6 64 272z" />
            <path d="M0 240L288 0 576 240v32H512L288 88 64 272H0V240z" />
    </Icon>
);

export default HouseCrack;