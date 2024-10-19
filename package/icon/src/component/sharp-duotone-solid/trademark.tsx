
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trademark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trademark?s=sharp-duotone-solid trademark}
 * @preview ![trademark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggOTZsNDggMCA5LjYgMTIuOEw0NjQgMjY2LjcgNTgyLjQgMTA4LjggNTkyIDk2bDQ4IDAgMCAzMiAwIDI1NiAwIDMyLTY0IDAgMC0zMiAwLTE2MEw0ODkuNiAzMzkuMiA0NjQgMzczLjNsLTI1LjYtMzQuMUwzNTIgMjI0bDAgMTYwIDAgMzItNjQgMCAwLTMyIDAtMjU2IDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiA5NkwwIDk2bDAgNjQgMzIgMCA2NCAwIDAgMjI0IDAgMzIgNjQgMCAwLTMyIDAtMjI0IDY0IDAgMzIgMCAwLTY0LTMyIDAtNjQgMEw5NiA5NiAzMiA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Trademark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 96l48 0 9.6 12.8L464 266.7 582.4 108.8 592 96l48 0 0 32 0 256 0 32-64 0 0-32 0-160L489.6 339.2 464 373.3l-25.6-34.1L352 224l0 160 0 32-64 0 0-32 0-256 0-32z" />
            <path d="M32 96L0 96l0 64 32 0 64 0 0 224 0 32 64 0 0-32 0-224 64 0 32 0 0-64-32 0-64 0L96 96 32 96z" />
    </Icon>
);

export default Trademark;