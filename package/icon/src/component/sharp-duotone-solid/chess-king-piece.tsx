
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-king-piece` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king-piece?s=sharp-duotone-solid chess-king-piece}
 * @preview ![chess-king-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MGwwIDMyIDI1NiAwIDAtMzItNDgtNjRMNDggNDE2IDAgNDgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTQ0IDBsMCAxNiAwIDE2IDE2IDAgMTYgMCAwIDMyLTE2IDAtMTYgMCAwIDMyIDcyIDAgMCAyNC0yNS45IDg4IDE3LjkgMCAwIDQ4LTI0IDAtOCAwIDMyIDE2MEw0OCA0MTYgODAgMjU2bC04IDAtMjQgMCAwLTQ4IDE3LjkgMEw0MCAxMjBsMC0yNCA3MiAwIDAtMzJMOTYgNjQgODAgNjRsMC0zMiAxNiAwIDE2IDAgMC0xNiAwLTE2IDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChessKingPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 480l0 32 256 0 0-32-48-64L48 416 0 480z" />
            <path d="M144 0l0 16 0 16 16 0 16 0 0 32-16 0-16 0 0 32 72 0 0 24-25.9 88 17.9 0 0 48-24 0-8 0 32 160L48 416 80 256l-8 0-24 0 0-48 17.9 0L40 120l0-24 72 0 0-32L96 64 80 64l0-32 16 0 16 0 0-16 0-16 32 0z" />
    </Icon>
);

export default ChessKingPiece;