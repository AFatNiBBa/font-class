
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up?s=sharp-duotone-solid circle-up}
 * @preview ![circle-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOC0zMkwyNTYgOTYgMzg0IDIyNGwwIDMyLTgwIDBjMCA0Mi43IDAgODUuMyAwIDEyOGwtOTYgMCAwLTEyOC04MCAwIDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMDQgMjU2bDgwIDAgMC0zMkwyNTYgOTYgMTI4IDIyNGwwIDMyIDgwIDAgMCAxMjggOTYgMCAwLTEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-32L256 96 384 224l0 32-80 0c0 42.7 0 85.3 0 128l-96 0 0-128-80 0 0-32z" />
            <path d="M304 256l80 0 0-32L256 96 128 224l0 32 80 0 0 128 96 0 0-128z" />
    </Icon>
);

export default CircleUp;