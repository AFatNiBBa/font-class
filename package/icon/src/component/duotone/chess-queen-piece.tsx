
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-queen-piece` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen-piece?s=duotone chess-queen-piece}
 * @preview ![chess-queen-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4OGMwIDEzLjMgMTAuNyAyNCAyNCAyNGwyMDggMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGMwLTUuMi0xLjctMTAuMi00LjgtMTQuNEwyMDggNDE2IDQ4IDQxNiA0LjggNDczLjZDMS43IDQ3Ny44IDAgNDgyLjggMCA0ODh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNTIgMjRhMjQgMjQgMCAxIDAgLTQ4IDAgMjQgMjQgMCAxIDAgNDggMHpNNjcuNiAxOTIuNEM1Ni41IDE5NC41IDQ4IDIwNC4yIDQ4IDIxNmMwIDEyLjkgMTAuMiAyMy40IDIzIDI0TDQ4IDQxNmwxNjAgMEwxODUgMjQwYzEyLjgtLjUgMjMtMTEuMSAyMy0yNGMwLTExLjgtOC41LTIxLjUtMTkuNi0yMy42bDQxLjUtNjcuNWMzLjctNiAzLTEzLjYtMS42LTE4LjlzLTEyLjEtNi45LTE4LjYtNC4xYy0zIDEuMy02LjMgMi4xLTkuOCAyLjFjLTExLjggMC0yMS42LTguNS0yMy42LTE5LjdjLTEuMS02LjMtNi0xMS40LTEyLjMtMTIuOHMtMTIuOCAxLjEtMTYuNSA2LjRDMTQzLjIgODQgMTM2LjEgODggMTI4IDg4cy0xNS4yLTQtMTkuNi0xMC4xYy0zLjctNS4zLTEwLjItNy44LTE2LjUtNi40UzgwLjggNzggNzkuNiA4NC4zQzc3LjYgOTUuNSA2Ny44IDEwNCA1NiAxMDRjLTMuNSAwLTYuOC0uNy05LjgtMi4xYy02LjQtMi45LTEzLjktMS4yLTE4LjYgNC4xcy01LjMgMTMtMS42IDE4LjlsNDEuNSA2Ny41eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChessQueenPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 488c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416 48 416 4.8 473.6C1.7 477.8 0 482.8 0 488z" />
            <path d="M152 24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM67.6 192.4C56.5 194.5 48 204.2 48 216c0 12.9 10.2 23.4 23 24L48 416l160 0L185 240c12.8-.5 23-11.1 23-24c0-11.8-8.5-21.5-19.6-23.6l41.5-67.5c3.7-6 3-13.6-1.6-18.9s-12.1-6.9-18.6-4.1c-3 1.3-6.3 2.1-9.8 2.1c-11.8 0-21.6-8.5-23.6-19.7c-1.1-6.3-6-11.4-12.3-12.8s-12.8 1.1-16.5 6.4C143.2 84 136.1 88 128 88s-15.2-4-19.6-10.1c-3.7-5.3-10.2-7.8-16.5-6.4S80.8 78 79.6 84.3C77.6 95.5 67.8 104 56 104c-3.5 0-6.8-.7-9.8-2.1c-6.4-2.9-13.9-1.2-18.6 4.1s-5.3 13-1.6 18.9l41.5 67.5z" />
    </Icon>
);

export default ChessQueenPiece;