
import { Icon, generic } from "../../index";

/**
 * A component that renders the `farm` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/farm?s=sharp-duotone-solid farm}
 * @preview ![farm](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMjY0bDU2LTEzNkwzNjggNjRsMTUyIDY0IDU2IDEzNiAwIDI0OC0xNDQgMCAwLTExMi0xMjggMCAwIDExMi0xNDQgMCAwLTI0OHptMTYwLTQwbDAgOTZjMzIgMCA2NCAwIDk2IDBsMC05NmMtMzIgMC02NCAwLTk2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDk2QzAgNDMgNDMgMCA5NiAwczk2IDQzIDk2IDk2TDAgOTZ6TTAgNTEyTDAgMTI4bDE4MS40IDAtNTEgMTIzLjhjLTEuNiAzLjktMi40IDgtMi40IDEyLjJsMCAyNDhMMCA1MTJ6TTQxNiAyMjRsMCA5Ni05NiAwIDAtOTYgOTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Farm: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M160 264l56-136L368 64l152 64 56 136 0 248-144 0 0-112-128 0 0 112-144 0 0-248zm160-40l0 96c32 0 64 0 96 0l0-96c-32 0-64 0-96 0z" />
            <path d="M0 96C0 43 43 0 96 0s96 43 96 96L0 96zM0 512L0 128l181.4 0-51 123.8c-1.6 3.9-2.4 8-2.4 12.2l0 248L0 512zM416 224l0 96-96 0 0-96 96 0z" />
    </Icon>
);

export default Farm;