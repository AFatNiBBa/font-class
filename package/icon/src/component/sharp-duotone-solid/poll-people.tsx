
import { Icon, generic } from "../../index";

/**
 * A component that renders the `poll-people` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/poll-people?s=sharp-duotone-solid poll-people}
 * @preview ![poll-people](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zODQgMzIwbDAgNjQgMTkyIDAgMCAzMi0xOTIgMCAwIDY0IDE5MiAwIDY0IDAgMC02NCAwLTMyIDAtNjQtNjQgMC0xOTIgMHpNNDgwIDMybDAgNjQgOTYgMCAwIDMyLTk2IDAgMCA2NCA5NiAwIDY0IDAgMC02NCAwLTMyIDAtNjQtNjQgMC05NiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDQ4QTQ4IDQ4IDAgMSAwIDMyIDQ4YTQ4IDQ4IDAgMSAwIDk2IDB6TTQ4MCAzMkwyMjQgMzJsMCAxNjAgMjU2IDAgMC0xNjB6TTM4NCAzMjBsLTE2MCAwIDAgMTYwIDE2MCAwIDAtMTYwek0xNjAgMjI0bC0zMi05Ni05NiAwTDAgMjI0bDE2MCAwek0xMjggMzM2YTQ4IDQ4IDAgMSAwIC05NiAwIDQ4IDQ4IDAgMSAwIDk2IDB6bTMyIDE3NmwtMzItOTYtOTYgMEwwIDUxMmwxNjAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PollPeople: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M384 320l0 64 192 0 0 32-192 0 0 64 192 0 64 0 0-64 0-32 0-64-64 0-192 0zM480 32l0 64 96 0 0 32-96 0 0 64 96 0 64 0 0-64 0-32 0-64-64 0-96 0z" />
            <path d="M128 48A48 48 0 1 0 32 48a48 48 0 1 0 96 0zM480 32L224 32l0 160 256 0 0-160zM384 320l-160 0 0 160 160 0 0-160zM160 224l-32-96-96 0L0 224l160 0zM128 336a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm32 176l-32-96-96 0L0 512l160 0z" />
    </Icon>
);

export default PollPeople;