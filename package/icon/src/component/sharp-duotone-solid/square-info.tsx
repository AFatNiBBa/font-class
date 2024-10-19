
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-info` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-info?s=sharp-duotone-solid square-info}
 * @preview ![square-info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTE2MCAyMjRsMjQgMCA0OCAwIDI0IDAgMCAyNCAwIDg4IDggMCAyNCAwIDAgNDgtMjQgMC04MCAwLTI0IDAgMC00OCAyNCAwIDI0IDAgMC02NC0yNCAwLTI0IDAgMC00OHptMzItOTZsNjQgMCAwIDY0LTY0IDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAxMjhsMCA2NC02NCAwIDAtNjQgNjQgMHptLTk2IDk2bDI0IDAgNDggMCAyNCAwIDAgMjQgMCA4OCA4IDAgMjQgMCAwIDQ4LTI0IDAtODAgMC0yNCAwIDAtNDggMjQgMCAyNCAwIDAtNjQtMjQgMC0yNCAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareInfo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM160 224l24 0 48 0 24 0 0 24 0 88 8 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0 24 0 0-64-24 0-24 0 0-48zm32-96l64 0 0 64-64 0 0-64z" />
            <path d="M256 128l0 64-64 0 0-64 64 0zm-96 96l24 0 48 0 24 0 0 24 0 88 8 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0 24 0 0-64-24 0-24 0 0-48z" />
    </Icon>
);

export default SquareInfo;