
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-quote` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quote?s=sharp-duotone-solid square-quote}
 * @preview ![square-quote](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDQ0OCAwIDAgNDQ4TDAgNDgwIDAgMzJ6TTk2IDE2MGwwIDExMiA2NCAwIDAgOGMwIDEzLjMtMTAuNyAyNC0yNCAyNGwtMjQgMCAwIDQ4IDI0IDBjMzkuOCAwIDcyLTMyLjIgNzItNzJsMC04IDAtNTYgMC0yNCAwLTMyTDk2IDE2MHptMTQ0IDBsMCAxMTIgNjQgMCAwIDhjMCAxMy4zLTEwLjcgMjQtMjQgMjRsLTI0IDAgMCA0OCAyNCAwYzM5LjggMCA3Mi0zMi4yIDcyLTcybDAtOCAwLTU2IDAtMjQgMC0zMi0xMTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDE2MGwxMTIgMCAwIDMyIDAgMjQgMCA1NiAwIDhjMCAzOS44LTMyLjIgNzItNzIgNzJsLTI0IDAgMC00OCAyNCAwYzEzLjMgMCAyNC0xMC43IDI0LTI0bDAtOC02NCAwIDAtMTEyem0xNDQgMGwxMTIgMCAwIDMyIDAgMjQgMCA1NiAwIDhjMCAzOS44LTMyLjIgNzItNzIgNzJsLTI0IDAgMC00OCAyNCAwYzEzLjMgMCAyNC0xMC43IDI0LTI0bDAtOC02NCAwIDAtMTEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM96 160l0 112 64 0 0 8c0 13.3-10.7 24-24 24l-24 0 0 48 24 0c39.8 0 72-32.2 72-72l0-8 0-56 0-24 0-32L96 160zm144 0l0 112 64 0 0 8c0 13.3-10.7 24-24 24l-24 0 0 48 24 0c39.8 0 72-32.2 72-72l0-8 0-56 0-24 0-32-112 0z" />
            <path d="M96 160l112 0 0 32 0 24 0 56 0 8c0 39.8-32.2 72-72 72l-24 0 0-48 24 0c13.3 0 24-10.7 24-24l0-8-64 0 0-112zm144 0l112 0 0 32 0 24 0 56 0 8c0 39.8-32.2 72-72 72l-24 0 0-48 24 0c13.3 0 24-10.7 24-24l0-8-64 0 0-112z" />
    </Icon>
);

export default SquareQuote;