
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crosshairs` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs?s=sharp-duotone-solid crosshairs}
 * @preview ![crosshairs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00Mi40IDIyNGw2NSAwYzEyLjUtNTguMyA1OC40LTEwNC4xIDExNi42LTExNi42YzAtMjEuNyAwLTQzLjMgMC02NUMxMzAuMyA1Ni4zIDU2LjMgMTMwLjMgNDIuNCAyMjR6bTAgNjRjMTMuOSA5My43IDg4IDE2Ny43IDE4MS42IDE4MS42YzAtMjEuNyAwLTQzLjMgMC02NUMxNjUuNyAzOTIuMSAxMTkuOSAzNDYuMyAxMDcuNCAyODhjLTIxLjcgMC00My4zIDAtNjUgMHpNMjg4IDQyLjRsMCA2NWM1OC4zIDEyLjUgMTA0LjEgNTguNCAxMTYuNiAxMTYuNmw2NSAwQzQ1NS43IDEzMC4zIDM4MS43IDU2LjMgMjg4IDQyLjR6bTAgMzYyLjNsMCA2NWM5My43LTEzLjkgMTY3LjctODggMTgxLjYtMTgxLjZjLTIxLjcgMC00My4zIDAtNjUgMEMzOTIuMSAzNDYuMyAzNDYuMyAzOTIuMSAyODggNDA0LjZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMGwwIDMyIDAgOTYgMCAzMi02NCAwIDAtMzIgMC05NiAwLTMyIDY0IDB6TTIyNCAyNTZhMzIgMzIgMCAxIDEgNjQgMCAzMiAzMiAwIDEgMSAtNjQgMHptMjU2IDMybC05NiAwLTMyIDAgMC02NCAzMiAwIDk2IDAgMzIgMCAwIDY0LTMyIDB6TTI4OCAzNTJsMCAzMiAwIDk2IDAgMzItNjQgMCAwLTMyIDAtOTYgMC0zMiA2NCAwek0xMjggMjg4bC05NiAwTDAgMjg4bDAtNjQgMzIgMCA5NiAwIDMyIDAgMCA2NC0zMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Crosshairs: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M42.4 224l65 0c12.5-58.3 58.4-104.1 116.6-116.6c0-21.7 0-43.3 0-65C130.3 56.3 56.3 130.3 42.4 224zm0 64c13.9 93.7 88 167.7 181.6 181.6c0-21.7 0-43.3 0-65C165.7 392.1 119.9 346.3 107.4 288c-21.7 0-43.3 0-65 0zM288 42.4l0 65c58.3 12.5 104.1 58.4 116.6 116.6l65 0C455.7 130.3 381.7 56.3 288 42.4zm0 362.3l0 65c93.7-13.9 167.7-88 181.6-181.6c-21.7 0-43.3 0-65 0C392.1 346.3 346.3 392.1 288 404.6z" />
            <path d="M288 0l0 32 0 96 0 32-64 0 0-32 0-96 0-32 64 0zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm256 32l-96 0-32 0 0-64 32 0 96 0 32 0 0 64-32 0zM288 352l0 32 0 96 0 32-64 0 0-32 0-96 0-32 64 0zM128 288l-96 0L0 288l0-64 32 0 96 0 32 0 0 64-32 0z" />
    </Icon>
);

export default Crosshairs;