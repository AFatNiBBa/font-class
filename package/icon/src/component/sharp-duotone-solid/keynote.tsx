
import { Icon, generic } from "../../index";

/**
 * A component that renders the `keynote` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keynote?s=sharp-duotone-solid keynote}
 * @preview ![keynote](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxMTJsMCA0OCA0OCAwIDAtNDhjMC0yMi4xIDE3LjktNDAgNDAtNDBsMjQgMCAwIDI0IDk2IDBjMjYuNSAwIDQ4LTIxLjUgNDgtNDhzLTIxLjUtNDgtNDgtNDhMMjA4IDBsMCAyNC0yNCAwYy00OC42IDAtODggMzkuNC04OCA4OHptMzIgMzM2bDAgNjQgMzIgMCA5NiAwIDk2IDAgMzIgMCAwLTY0LTMyIDAtNjQgMCAwLTk2LTY0IDAgMCA5Ni02NCAwLTMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTIgMzUySDBWMjg4TDY0IDE2MEg0NDhsNjQgMTI4djY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Keynote: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 112l0 48 48 0 0-48c0-22.1 17.9-40 40-40l24 0 0 24 96 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L208 0l0 24-24 0c-48.6 0-88 39.4-88 88zm32 336l0 64 32 0 96 0 96 0 32 0 0-64-32 0-64 0 0-96-64 0 0 96-64 0-32 0z" />
            <path d="M512 352H0V288L64 160H448l64 128v64z" />
    </Icon>
);

export default Keynote;