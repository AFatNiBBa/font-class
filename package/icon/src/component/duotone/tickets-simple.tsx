
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tickets-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-simple?s=duotone tickets-simple}
 * @preview ![tickets-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA5NmMwLTM1LjMgMjguNy02NCA2NC02NGw0MTYgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDQ4YzAgOC44LTcuNCAxNS43LTE1LjcgMTguNkM2MDUuNSAxNjkuMSA1OTIgMTg3IDU5MiAyMDhzMTMuNSAzOC45IDMyLjMgNDUuNGM4LjMgMi45IDE1LjcgOS44IDE1LjcgMTguNmwwIDQ4YzAgMzUuMy0yOC43IDY0LTY0IDY0bC00MTYgMGMtMzUuMyAwLTY0LTI4LjctNjQtNjRsMC00OGMwLTguOCA3LjQtMTUuNyAxNS43LTE4LjZDMTMwLjUgMjQ2LjkgMTQ0IDIyOSAxNDQgMjA4cy0xMy41LTM4LjktMzIuMy00NS40QzEwMy40IDE1OS43IDk2IDE1Mi44IDk2IDE0NGwwLTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjQgOTZjMTMuMyAwIDI0IDEwLjcgMjQgMjRsMCAyNDBjMCAzOS44IDMyLjIgNzIgNzIgNzJsNDAwIDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRsLTQwMCAwQzUzLjcgNDgwIDAgNDI2LjMgMCAzNjBMMCAxMjBjMC0xMy4zIDEwLjctMjQgMjQtMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const TicketsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 96c0-35.3 28.7-64 64-64l416 0c35.3 0 64 28.7 64 64l0 48c0 8.8-7.4 15.7-15.7 18.6C605.5 169.1 592 187 592 208s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6l0 48c0 35.3-28.7 64-64 64l-416 0c-35.3 0-64-28.7-64-64l0-48c0-8.8 7.4-15.7 15.7-18.6C130.5 246.9 144 229 144 208s-13.5-38.9-32.3-45.4C103.4 159.7 96 152.8 96 144l0-48z" />
            <path d="M24 96c13.3 0 24 10.7 24 24l0 240c0 39.8 32.2 72 72 72l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-400 0C53.7 480 0 426.3 0 360L0 120c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default TicketsSimple;