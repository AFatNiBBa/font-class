
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-sparkles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-sparkles?s=sharp-duotone-solid book-sparkles}
 * @preview ![book-sparkles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA0MTZjMC0xNy43IDE0LjMtMzIgMzItMzJsMTYwIDAgOTYgMCA2NCAwIDAgNjQtNjQgMC05NiAwTDk2IDQ0OGMtMTcuNyAwLTMyLTE0LjMtMzItMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDk2QzAgNDMgNDMgMCA5NiAwTDM4NCAwbDMyIDAgMzIgMCAwIDM4NC0zMiAwLTY0IDAtOTYgMEw5NiAzODRjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsMTYwIDAgOTYgMCA2NCAwIDMyIDAgMCA2NC0zMiAwLTMyIDBMOTYgNTEyYy01MyAwLTk2LTQzLTk2LTk2TDAgOTZ6TTI2NCAyMDBsLTU2IDI0IDU2IDI0IDI0IDU2IDI0LTU2IDU2LTI0LTU2LTI0LTI0LTU2LTI0IDU2ek0xNzYgNjRMMTYwIDk2bC0zMiAxNiAzMiAxNiAxNiAzMiAxNi0zMiAzMi0xNkwxOTIgOTYgMTc2IDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BookSparkles: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 416c0-17.7 14.3-32 32-32l160 0 96 0 64 0 0 64-64 0-96 0L96 448c-17.7 0-32-14.3-32-32z" />
            <path d="M0 96C0 43 43 0 96 0L384 0l32 0 32 0 0 384-32 0-64 0-96 0L96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 96 0 64 0 32 0 0 64-32 0-32 0L96 512c-53 0-96-43-96-96L0 96zM264 200l-56 24 56 24 24 56 24-56 56-24-56-24-24-56-24 56zM176 64L160 96l-32 16 32 16 16 32 16-32 32-16L192 96 176 64z" />
    </Icon>
);

export default BookSparkles;