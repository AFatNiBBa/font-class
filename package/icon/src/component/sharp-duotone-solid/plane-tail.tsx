
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-tail` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-tail?s=sharp-duotone-solid plane-tail}
 * @preview ![plane-tail](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0tOCAwTDYxLjUgMzA4LjhjNjIuNy0xNy4zIDEyNS40LTM0LjYgMTg4LjEtNTEuOWwzLjEtLjkgMy4yIDAgOC43IDBMMzg0IDI1NiAxMzYgMC04IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTIuOCAyNTZsMy4yIDAgMjMyIDAgMjQgMCAwIDI0IDAgMjQgMCAxNjAgMCAyNCAwIDI0LTI0IDAtMjMyIDAtNC40IDAtNC4xLTEuNi0yMzItODhMMCA0MTYuNiAwIDQwMGwwLTU2IDAtMTguMyAxNy42LTQuOSAyMzItNjQgMy4xLS45ek0yMTYgMzUybC0yNCAwIDAgNDggMjQgMCAxNDQgMCAyNCAwIDAtNDgtMjQgMC0xNDQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PlaneTail: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M-8 0L61.5 308.8c62.7-17.3 125.4-34.6 188.1-51.9l3.1-.9 3.2 0 8.7 0L384 256 136 0-8 0z" />
            <path d="M252.8 256l3.2 0 232 0 24 0 0 24 0 24 0 160 0 24 0 24-24 0-232 0-4.4 0-4.1-1.6-232-88L0 416.6 0 400l0-56 0-18.3 17.6-4.9 232-64 3.1-.9zM216 352l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default PlaneTail;