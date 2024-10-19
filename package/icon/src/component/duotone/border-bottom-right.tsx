
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-bottom-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-bottom-right?s=duotone border-bottom-right}
 * @preview ![border-bottom-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0YTMyIDMyIDAgMSAwIDY0IDBBMzIgMzIgMCAxIDAgMCA2NHptMCA5NmEzMiAzMiAwIDEgMCA2NCAwQTMyIDMyIDAgMSAwIDAgMTYwem0wIDk2YTMyIDMyIDAgMSAwIDY0IDBBMzIgMzIgMCAxIDAgMCAyNTZ6bTAgOTZhMzIgMzIgMCAxIDAgNjQgMEEzMiAzMiAwIDEgMCAwIDM1MnpNOTYgNjRhMzIgMzIgMCAxIDAgNjQgMEEzMiAzMiAwIDEgMCA5NiA2NHptOTYgMGEzMiAzMiAwIDEgMCA2NCAwIDMyIDMyIDAgMSAwIC02NCAwem05NiAwYTMyIDMyIDAgMSAwIDY0IDAgMzIgMzIgMCAxIDAgLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MTYgMzJjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAzMzZjMCA0NC4yLTM1LjggODAtODAgODBMMzIgNDgwYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDMzNiAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTMzNmMwLTE3LjcgMTQuMy0zMiAzMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BorderBottomRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64a32 32 0 1 0 64 0A32 32 0 1 0 0 64zm0 96a32 32 0 1 0 64 0A32 32 0 1 0 0 160zm0 96a32 32 0 1 0 64 0A32 32 0 1 0 0 256zm0 96a32 32 0 1 0 64 0A32 32 0 1 0 0 352zM96 64a32 32 0 1 0 64 0A32 32 0 1 0 96 64zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M416 32c17.7 0 32 14.3 32 32l0 336c0 44.2-35.8 80-80 80L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l336 0c8.8 0 16-7.2 16-16l0-336c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default BorderBottomRight;