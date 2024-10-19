
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-bishop-piece` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop-piece?s=duotone chess-bishop-piece}
 * @preview ![chess-bishop-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4OGMwIDEzLjMgMTAuNyAyNCAyNCAyNGwyMDggMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGMwLTUuMi0xLjctMTAuMi00LjgtMTQuNEwyMDggNDE2IDQ4IDQxNiA0LjggNDczLjZDMS43IDQ3Ny44IDAgNDgyLjggMCA0ODh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMDQgMzJDOTAuNyAzMiA4MCA0Mi43IDgwIDU2YzAgMTIuMiA5LjEgMjIuMyAyMC45IDIzLjhDNzkuNiAxMDAuMSA0OCAxMzkgNDggMTkyYzAgMjYuMyAxMy42IDQwLjUgMjYuMyA0OEw3MiAyNDBjLTEzLjMgMC0yNCAxMC43LTI0IDI0czEwLjcgMjQgMjQgMjRsNC40IDBMNDggNDE2bDE2MCAwTDE3OS42IDI4OGw0LjQgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNHMtMTAuNy0yNC0yNC0yNGwtMi4zIDBjMTIuNy03LjUgMjYuMy0yMS43IDI2LjMtNDhjMC0yNS45LTcuNS00OC40LTE3LjctNjdsLTQ4LjYgNDguNmMtMy4xIDMuMS04LjIgMy4xLTExLjMgMHMtMy4xLTguMiAwLTExLjNMMTgxLjcgMTExYy04LjgtMTIuOS0xOC41LTIzLjQtMjYuNi0zMS4yQzE2Ni45IDc4LjMgMTc2IDY4LjIgMTc2IDU2YzAtMTMuMy0xMC43LTI0LTI0LTI0bC00OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChessBishopPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 488c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416 48 416 4.8 473.6C1.7 477.8 0 482.8 0 488z" />
            <path d="M104 32C90.7 32 80 42.7 80 56c0 12.2 9.1 22.3 20.9 23.8C79.6 100.1 48 139 48 192c0 26.3 13.6 40.5 26.3 48L72 240c-13.3 0-24 10.7-24 24s10.7 24 24 24l4.4 0L48 416l160 0L179.6 288l4.4 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-2.3 0c12.7-7.5 26.3-21.7 26.3-48c0-25.9-7.5-48.4-17.7-67l-48.6 48.6c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L181.7 111c-8.8-12.9-18.5-23.4-26.6-31.2C166.9 78.3 176 68.2 176 56c0-13.3-10.7-24-24-24l-48 0z" />
    </Icon>
);

export default ChessBishopPiece;