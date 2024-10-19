
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pallet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=duotone pallet}
 * @preview ![pallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMjBjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsMzIgMCAwIDY0LTMyIDBjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsNjQgMCAyMjQgMCAyMjQgMCA2NCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC0zMiAwIDAtNjQgMzIgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwtNjQgMC0yMjQgMEw5NiAzMjBsLTY0IDB6bTk2IDY0bDE2MCAwIDAgNjQtMTYwIDAgMC02NHptMjI0IDBsMTYwIDAgMCA2NC0xNjAgMCAwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Pallet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 64-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 224 0 224 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-64 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-224 0L96 320l-64 0zm96 64l160 0 0 64-160 0 0-64zm224 0l160 0 0 64-160 0 0-64z" />
    </Icon>
);

export default Pallet;