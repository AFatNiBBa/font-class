
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ellipsis-stroke-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke-vertical?s=duotone ellipsis-stroke-vertical}
 * @preview ![ellipsis-stroke-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNCAyNTZhNzIgNzIgMCAxIDAgMTQ0IDBBNzIgNzIgMCAxIDAgMjQgMjU2em05NiAwYTI0IDI0IDAgMSAxIC00OCAwIDI0IDI0IDAgMSAxIDQ4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiA3MmEyNCAyNCAwIDEgMCAwIDQ4IDI0IDI0IDAgMSAwIDAtNDh6bTAgOTZBNzIgNzIgMCAxIDEgOTYgMjRhNzIgNzIgMCAxIDEgMCAxNDR6bTAgMjI0YTI0IDI0IDAgMSAwIDAgNDggMjQgMjQgMCAxIDAgMC00OHptMCA5NmE3MiA3MiAwIDEgMSAwLTE0NCA3MiA3MiAwIDEgMSAwIDE0NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const EllipsisStrokeVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M24 256a72 72 0 1 0 144 0A72 72 0 1 0 24 256zm96 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
            <path d="M96 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm0 96A72 72 0 1 1 96 24a72 72 0 1 1 0 144zm0 224a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm0 96a72 72 0 1 1 0-144 72 72 0 1 1 0 144z" />
    </Icon>
);

export default EllipsisStrokeVertical;