
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple?s=duotone gauge-simple}
 * @preview ![gauge-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE5MiA5NmMwLTI2LjkgMTYuNS00OS45IDQwLTU5LjNMMjMyIDg4YzAtMTMuMyAxMC43LTI0IDI0LTI0czI0IDEwLjcgMjQgMjRsMCAyMDQuN2MyMy41IDkuNSA0MCAzMi41IDQwIDU5LjNjMCAzNS4zLTI4LjcgNjQtNjQgNjRzLTY0LTI4LjctNjQtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODAgODhjMC0xMy4zLTEwLjctMjQtMjQtMjRzLTI0IDEwLjctMjQgMjRsMCAyMDQuN2MtMjMuNSA5LjUtNDAgMzIuNS00MCA1OS4zYzAgMzUuMyAyOC43IDY0IDY0IDY0czY0LTI4LjcgNjQtNjRjMC0yNi45LTE2LjUtNDkuOS00MC01OS4zTDI4MCA4OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const GaugeSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm192 96c0-26.9 16.5-49.9 40-59.3L232 88c0-13.3 10.7-24 24-24s24 10.7 24 24l0 204.7c23.5 9.5 40 32.5 40 59.3c0 35.3-28.7 64-64 64s-64-28.7-64-64z" />
            <path d="M280 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 204.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64c0-26.9-16.5-49.9-40-59.3L280 88z" />
    </Icon>
);

export default GaugeSimple;