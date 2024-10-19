
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-j` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-j?s=sharp-duotone-solid square-j}
 * @preview ![square-j](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTExMiAyNTZsNDggMCAwIDI0IDAgOGMwIDI2LjUgMjEuNSA0OCA0OCA0OHM0OC0yMS41IDQ4LTQ4bDAtMTM2IDAtMjQgNDggMCAwIDI0IDAgMTM2YzAgNTMtNDMgOTYtOTYgOTZzLTk2LTQzLTk2LTk2bDAtOCAwLTI0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzA0IDEyOGwwIDI0IDAgMTM2YzAgNTMtNDMgOTYtOTYgOTZzLTk2LTQzLTk2LTk2bDAtOCAwLTI0IDQ4IDAgMCAyNCAwIDhjMCAyNi41IDIxLjUgNDggNDggNDhzNDgtMjEuNSA0OC00OGwwLTEzNiAwLTI0IDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareJ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM112 256l48 0 0 24 0 8c0 26.5 21.5 48 48 48s48-21.5 48-48l0-136 0-24 48 0 0 24 0 136c0 53-43 96-96 96s-96-43-96-96l0-8 0-24z" />
            <path d="M304 128l0 24 0 136c0 53-43 96-96 96s-96-43-96-96l0-8 0-24 48 0 0 24 0 8c0 26.5 21.5 48 48 48s48-21.5 48-48l0-136 0-24 48 0z" />
    </Icon>
);

export default SquareJ;