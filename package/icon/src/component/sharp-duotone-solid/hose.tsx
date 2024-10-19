
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hose` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hose?s=sharp-duotone-solid hose}
 * @preview ![hose](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE3NmMwIDc5LjUgNjQuNSAxNDQgMTQ0IDE0NGwyNzIgMCAzMiAwIDAtNjQtMzIgMC0yNzIgMGMtNDQuMiAwLTgwLTM1LjgtODAtODBzMzUuOC04MCA4MC04MGwxNDQgMCAwLTY0TDE0NCAzMkM2NC41IDMyIDAgOTYuNSAwIDE3NnpNMCAzNTJsMCA2NCAzMiAwIDM4NCAwIDMyIDAgMC02NC0zMiAwTDMyIDM1MiAwIDM1MnptMCA5NmwwIDY0IDMyIDAgMzg0IDAgMzIgMCAwLTY0LTMyIDBMMzIgNDQ4IDAgNDQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDEyOGwwLTI0IDAtODAgMC0yNCA0OCAwIDAgMjQgMCAyLjMgODAgMTEuNEw0MTYgMjRsMzIgMCAwIDE2IDAgNDggMCAxNi0zMiAwIDAtMTMuNy04MCAxMS40IDAgMi4zIDAgMjQtNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Hose: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 176c0 79.5 64.5 144 144 144l272 0 32 0 0-64-32 0-272 0c-44.2 0-80-35.8-80-80s35.8-80 80-80l144 0 0-64L144 32C64.5 32 0 96.5 0 176zM0 352l0 64 32 0 384 0 32 0 0-64-32 0L32 352 0 352zm0 96l0 64 32 0 384 0 32 0 0-64-32 0L32 448 0 448z" />
            <path d="M288 128l0-24 0-80 0-24 48 0 0 24 0 2.3 80 11.4L416 24l32 0 0 16 0 48 0 16-32 0 0-13.7-80 11.4 0 2.3 0 24-48 0z" />
    </Icon>
);

export default Hose;