
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spinner-scale` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-scale?s=duotone spinner-scale}
 * @preview ![spinner-scale](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik03Mi4yIDEyMC4yYTQ4IDQ4IDAgMSAwIDk2IDAgNDggNDggMCAxIDAgLTk2IDB6TTk3LjYgMzY5LjFhMzIgMzIgMCAxIDAgNDUuMyA0NS4yQTMyIDMyIDAgMSAwIDk3LjYgMzY5LjF6TTM1Mi4yIDgwLjZhNTYgNTYgMCAxIDAgNzkuMiA3OS4yQTU2IDU2IDAgMSAwIDM1Mi4yIDgwLjZ6bTE3IDI4OC41YTMyIDMyIDAgMSAwIDQ1LjMgNDUuMyAzMiAzMiAwIDEgMCAtNDUuMy00NS4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDEyYTUyIDUyIDAgMSAwIDAgMTA0IDUyIDUyIDAgMSAwIDAtMTA0em0wIDQwNGEzMiAzMiAwIDEgMCAwIDY0IDMyIDMyIDAgMSAwIDAtNjR6TTQ0OCAyMjRhMzIgMzIgMCAxIDAgMCA2NCAzMiAzMiAwIDEgMCAwLTY0ek05NiAyNTZhMzIgMzIgMCAxIDAgLTY0IDAgMzIgMzIgMCAxIDAgNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SpinnerScale: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M72.2 120.2a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM97.6 369.1a32 32 0 1 0 45.3 45.2A32 32 0 1 0 97.6 369.1zM352.2 80.6a56 56 0 1 0 79.2 79.2A56 56 0 1 0 352.2 80.6zm17 288.5a32 32 0 1 0 45.3 45.3 32 32 0 1 0 -45.3-45.3z" />
            <path d="M256 12a52 52 0 1 0 0 104 52 52 0 1 0 0-104zm0 404a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM448 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default SpinnerScale;