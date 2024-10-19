
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-outer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-outer?s=duotone border-outer}
 * @preview ![border-outer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMjU2YTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6bTk2LTk2YTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6bTAgOTZhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHptMCA5NmEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAwem05Ni05NmEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDk2bDAgMzIwTDY0IDQxNiA2NCA5NmwzMjAgMHpNNjQgMzJDMjguNyAzMiAwIDYwLjcgMCA5NkwwIDQxNmMwIDM1LjMgMjguNyA2NCA2NCA2NGwzMjAgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTMyMGMwLTM1LjMtMjguNy02NC02NC02NEw2NCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BorderOuter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M160 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M384 96l0 320L64 416 64 96l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
    </Icon>
);

export default BorderOuter;