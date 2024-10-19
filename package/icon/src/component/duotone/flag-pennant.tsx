
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=duotone flag-pennant}
 * @preview ![flag-pennant](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMkw0MzMgMTcwLjRjOSAzLjQgMTUgMTIgMTUgMjEuNnMtNiAxOC4yLTE1IDIxLjZMNjQgMzUyIDY0IDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgMEM0OS43IDAgNjQgMTQuMyA2NCAzMmwwIDQ0OGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMkwwIDMyQzAgMTQuMyAxNC4zIDAgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FlagPennant: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 32L433 170.4c9 3.4 15 12 15 21.6s-6 18.2-15 21.6L64 352 64 32z" />
            <path d="M32 0C49.7 0 64 14.3 64 32l0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0z" />
    </Icon>
);

export default FlagPennant;