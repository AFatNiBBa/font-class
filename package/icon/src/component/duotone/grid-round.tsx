
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grid-round` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-round?s=duotone grid-round}
 * @preview ![grid-round](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmE2NCA2NCAwIDEgMCAxMjggMEE2NCA2NCAwIDEgMCAwIDI1NnpNMTYwIDk2YTY0IDY0IDAgMSAwIDEyOCAwQTY0IDY0IDAgMSAwIDE2MCA5NnptMCAzMjBhNjQgNjQgMCAxIDAgMTI4IDAgNjQgNjQgMCAxIDAgLTEyOCAwek0zMjAgMjU2YTY0IDY0IDAgMSAwIDEyOCAwIDY0IDY0IDAgMSAwIC0xMjggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCA5NkE2NCA2NCAwIDEgMSAwIDk2YTY0IDY0IDAgMSAxIDEyOCAwem0wIDMyMEE2NCA2NCAwIDEgMSAwIDQxNmE2NCA2NCAwIDEgMSAxMjggMHptOTYtOTZhNjQgNjQgMCAxIDEgMC0xMjggNjQgNjQgMCAxIDEgMCAxMjh6TTQ0OCA5NkE2NCA2NCAwIDEgMSAzMjAgOTZhNjQgNjQgMCAxIDEgMTI4IDB6TTM4NCA0ODBhNjQgNjQgMCAxIDEgMC0xMjggNjQgNjQgMCAxIDEgMCAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const GridRound: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 256a64 64 0 1 0 128 0A64 64 0 1 0 0 256zM160 96a64 64 0 1 0 128 0A64 64 0 1 0 160 96zm0 320a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zM320 256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
            <path d="M128 96A64 64 0 1 1 0 96a64 64 0 1 1 128 0zm0 320A64 64 0 1 1 0 416a64 64 0 1 1 128 0zm96-96a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM448 96A64 64 0 1 1 320 96a64 64 0 1 1 128 0zM384 480a64 64 0 1 1 0-128 64 64 0 1 1 0 128z" />
    </Icon>
);

export default GridRound;