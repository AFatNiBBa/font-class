
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-line?s=sharp-duotone-solid pen-line}
 * @preview ![pen-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgNDY0bDI0IDAgMzA0IDAgMjQgMCAwIDQ4LTI0IDAtMzA0IDAtMjQgMCAwLTQ4ek0yODggOTZMMzg0IDAgNTEyIDEyOGwtOTYgOTZMMjg4IDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgMzUyTDAgNTEybDE2MC0zMkw0MTYgMjI0IDI4OCA5NiAzMiAzNTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const PenLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M224 464l24 0 304 0 24 0 0 48-24 0-304 0-24 0 0-48zM288 96L384 0 512 128l-96 96L288 96z" />
            <path d="M32 352L0 512l160-32L416 224 288 96 32 352z" />
    </Icon>
);

export default PenLine;