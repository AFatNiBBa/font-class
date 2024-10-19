
import { Icon, generic } from "../../index";

/**
 * A component that renders the `quote-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quote-left?s=sharp-duotone-solid quote-left}
 * @preview ![quote-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMjE2bDAgOCAwIDk2IDAgOTYgMTkyIDAgMC0xOTItMTI4IDAgMC04YzAtMzAuOSAyNS4xLTU2IDU2LTU2bDggMCAzMiAwIDAtNjQtMzIgMC04IDBjLTY2LjMgMC0xMjAgNTMuNy0xMjAgMTIweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTIwIDk2QzUzLjcgOTYgMCAxNDkuNyAwIDIxNmwwIDggMCA5NiAwIDk2IDE5MiAwIDAtMTkyTDY0IDIyNGwwLThjMC0zMC45IDI1LjEtNTYgNTYtNTZsOCAwIDMyIDAgMC02NC0zMiAwLTggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const QuoteLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M256 216l0 8 0 96 0 96 192 0 0-192-128 0 0-8c0-30.9 25.1-56 56-56l8 0 32 0 0-64-32 0-8 0c-66.3 0-120 53.7-120 120z" />
            <path d="M120 96C53.7 96 0 149.7 0 216l0 8 0 96 0 96 192 0 0-192L64 224l0-8c0-30.9 25.1-56 56-56l8 0 32 0 0-64-32 0-8 0z" />
    </Icon>
);

export default QuoteLeft;