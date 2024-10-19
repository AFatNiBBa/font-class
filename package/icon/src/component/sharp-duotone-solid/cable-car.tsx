
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cable-car` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cable-car?s=sharp-duotone-solid cable-car}
 * @preview ![cable-car](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zLjUgMTU3LjZsMTAuMSA0Ni45IDIzLjUtNSAxOTUtNDEuOCAwIDY2LjMgNDggMCAwLTc2LjYgMjA1LTQzLjkgMjMuNS01TDQ5OC40IDUxLjVsLTIzLjUgNS0yMjQgNDgtMjI0IDQ4LTIzLjUgNXpNODAgMjg4bDAgOTYgOTYgMCAwLTk2LTk2IDB6bTEyOCAwbDAgOTYgOTYgMCAwLTk2LTk2IDB6bTEyOCAwbDAgOTYgOTYgMCAwLTk2LTk2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggNjRhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0em0tNjQtOGEzMiAzMiAwIDEgMCAtNjQgMCAzMiAzMiAwIDEgMCA2NCAwek00ODAgNTEybDAtMjg4TDMyIDIyNGwwIDI4OCA0NDggMHpNMTc2IDI4OGwwIDk2LTk2IDAgMC05NiA5NiAwem0zMiAwbDk2IDAgMCA5Ni05NiAwIDAtOTZ6bTIyNCAwbDAgOTYtOTYgMCAwLTk2IDk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CableCar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M3.5 157.6l10.1 46.9 23.5-5 195-41.8 0 66.3 48 0 0-76.6 205-43.9 23.5-5L498.4 51.5l-23.5 5-224 48-224 48-23.5 5zM80 288l0 96 96 0 0-96-96 0zm128 0l0 96 96 0 0-96-96 0zm128 0l0 96 96 0 0-96-96 0z" />
            <path d="M288 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-64-8a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM480 512l0-288L32 224l0 288 448 0zM176 288l0 96-96 0 0-96 96 0zm32 0l96 0 0 96-96 0 0-96zm224 0l0 96-96 0 0-96 96 0z" />
    </Icon>
);

export default CableCar;