
import { Icon, generic } from "../../index";

/**
 * A component that renders the `notebook` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notebook?s=duotone notebook}
 * @preview ![notebook](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMEw0MzIgMGMyNi41IDAgNDggMjEuNSA0OCA0OGwwIDQxNmMwIDI2LjUtMjEuNSA0OC00OCA0OGwtMjQwIDBMMTkyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMTIgMEM4NS41IDAgNjQgMjEuNSA2NCA0OGwwIDU2LTQwIDBjLTEzLjMgMC0yNCAxMC43LTI0IDI0czEwLjcgMjQgMjQgMjRsNDAgMCAwIDgwLTQwIDBjLTEzLjMgMC0yNCAxMC43LTI0IDI0czEwLjcgMjQgMjQgMjRsNDAgMCAwIDgwLTQwIDBjLTEzLjMgMC0yNCAxMC43LTI0IDI0czEwLjcgMjQgMjQgMjRsNDAgMCAwIDU2YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4bDgwIDBMMTkyIDAgMTEyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Notebook: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 0L432 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48l-240 0L192 0z" />
            <path d="M112 0C85.5 0 64 21.5 64 48l0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 80-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 80-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56c0 26.5 21.5 48 48 48l80 0L192 0 112 0z" />
    </Icon>
);

export default Notebook;