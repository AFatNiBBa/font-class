
import { Icon, generic } from "../../index";

/**
 * A component that renders the `typewriter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/typewriter?s=sharp-duotone-solid typewriter}
 * @preview ![typewriter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAwTDk2IDAgMzUyIDBsMCA5NiA5NiAwIDAgOTYtOTYgMC0zMiAzMi0xMjggMC0zMi0zMi05NiAwTDY0IDMyIDY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggODBsMCAxNi05NiAwIDAtOTYgMTYgMCAxMy4zIDAgOS40IDkuNCA0OCA0OCA5LjQgOS40TDQ0OCA4MHpNMCAyODhsMC05NiAxNjAgMCAzMiAzMiAxMjggMCAzMi0zMiAxNjAgMCAwIDk2LTMyIDAgMCAyMjRMMzIgNTEybDAtMjI0TDAgMjg4em00MDAgMGwwIDMyIDMyIDAgMC0zMi0zMiAwem0tNjQgMzJsMzIgMCAwLTMyLTMyIDAgMCAzMnptLTY0LTMybDAgMzIgMzIgMCAwLTMyLTMyIDB6bS02NCAwbDAgMzIgMzIgMCAwLTMyLTMyIDB6bS02NCAwbDAgMzIgMzIgMCAwLTMyLTMyIDB6bS02NCAwbDAgMzIgMzIgMCAwLTMyLTMyIDB6bTY0IDEyOGwwIDMyIDE2IDAgMTkyIDAgMTYgMCAwLTMyLTE2IDAtMTkyIDAtMTYgMHptMC02NGwtMzIgMCAwIDMyIDMyIDAgMC0zMnptMzIgMGwwIDMyIDMyIDAgMC0zMi0zMiAwem05NiAwbC0zMiAwIDAgMzIgMzIgMCAwLTMyem0zMiAwbDAgMzIgMzIgMCAwLTMyLTMyIDB6bTk2IDBsLTMyIDAgMCAzMiAzMiAwIDAtMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Typewriter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 0L96 0 352 0l0 96 96 0 0 96-96 0-32 32-128 0-32-32-96 0L64 32 64 0z" />
            <path d="M448 80l0 16-96 0 0-96 16 0 13.3 0 9.4 9.4 48 48 9.4 9.4L448 80zM0 288l0-96 160 0 32 32 128 0 32-32 160 0 0 96-32 0 0 224L32 512l0-224L0 288zm400 0l0 32 32 0 0-32-32 0zm-64 32l32 0 0-32-32 0 0 32zm-64-32l0 32 32 0 0-32-32 0zm-64 0l0 32 32 0 0-32-32 0zm-64 0l0 32 32 0 0-32-32 0zm-64 0l0 32 32 0 0-32-32 0zm64 128l0 32 16 0 192 0 16 0 0-32-16 0-192 0-16 0zm0-64l-32 0 0 32 32 0 0-32zm32 0l0 32 32 0 0-32-32 0zm96 0l-32 0 0 32 32 0 0-32zm32 0l0 32 32 0 0-32-32 0zm96 0l-32 0 0 32 32 0 0-32z" />
    </Icon>
);

export default Typewriter;