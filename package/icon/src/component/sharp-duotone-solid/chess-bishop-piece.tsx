
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-bishop-piece` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop-piece?s=sharp-duotone-solid chess-bishop-piece}
 * @preview ![chess-bishop-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MGwwIDMyIDI1NiAwIDAtMzItNDgtNjRMNDggNDE2IDAgNDgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTc2IDMyTDgwIDMybDAgNDggMjAuNyAwQzc5LjQgMTAwLjMgNDggMTM5LjIgNDggMTkyYzAgMjYuMyAxMy42IDQwLjUgMjYuMyA0OEw3MiAyNDBsLTI0IDAgMCA0OCAyNCAwIDQuNCAwTDQ4IDQxNmwxNjAgMEwxNzkuNiAyODhsNC40IDAgMjQgMCAwLTQ4LTI0IDAtMi4zIDBjMTIuNy03LjUgMjYuMy0yMS43IDI2LjMtNDhjMC0yNS45LTcuNS00OC40LTE3LjctNjdsLTQ4LjYgNDguNi01LjcgNS43TDEyNC43IDE2OGw1LjctNS43TDE4MS43IDExMWMtOC43LTEyLjgtMTguMy0yMy4zLTI2LjQtMzFMMTc2IDgwbDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChessBishopPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 480l0 32 256 0 0-32-48-64L48 416 0 480z" />
            <path d="M176 32L80 32l0 48 20.7 0C79.4 100.3 48 139.2 48 192c0 26.3 13.6 40.5 26.3 48L72 240l-24 0 0 48 24 0 4.4 0L48 416l160 0L179.6 288l4.4 0 24 0 0-48-24 0-2.3 0c12.7-7.5 26.3-21.7 26.3-48c0-25.9-7.5-48.4-17.7-67l-48.6 48.6-5.7 5.7L124.7 168l5.7-5.7L181.7 111c-8.7-12.8-18.3-23.3-26.4-31L176 80l0-48z" />
    </Icon>
);

export default ChessBishopPiece;