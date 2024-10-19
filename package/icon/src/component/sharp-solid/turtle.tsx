
import { Icon } from "../../index";

/**
 * A component that renders the `turtle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turtle?s=sharp-solid turtle}
 * @preview ![turtle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDI4OEwzMiAyODhsMC04MGMwLTk3LjIgNzguOC0xNzYgMTc2LTE3NnMxNzYgNzguOCAxNzYgMTc2bDAgODB6bTE5MiAwbC05NiAwIDAgNjQgMCAzMi0zMiAwLTk2IDAgMCA5Ni0xMjggMCAwLTk2LTMyIDAgMCA5Nkw2NCA0ODBsMC05Ni0zMiAwTDAgMzg0bDAtNjQgMzIgMCAzMiAwIDEyOCAwIDMyIDAgMTI4IDAgNjQgMCAwLTk2IDAtMzIgMC04MCA2NCAwYzUzIDAgOTYgNDMgOTYgOTZsMCA4MHptLTgwLTY0YTE2IDE2IDAgMSAwIDAtMzIgMTYgMTYgMCAxIDAgMCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Turtle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 288L32 288l0-80c0-97.2 78.8-176 176-176s176 78.8 176 176l0 80zm192 0l-96 0 0 64 0 32-32 0-96 0 0 96-128 0 0-96-32 0 0 96L64 480l0-96-32 0L0 384l0-64 32 0 32 0 128 0 32 0 128 0 64 0 0-96 0-32 0-80 64 0c53 0 96 43 96 96l0 80zm-80-64a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Turtle;