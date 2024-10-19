
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bars-sort` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-sort?s=duotone bars-sort}
 * @preview ![bars-sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmMwLTE3LjcgMTQuMy0zMiAzMi0zMmwyNTYgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkwzMiAyODhjLTE3LjcgMC0zMi0xNC4zLTMyLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDk2YzAtMTcuNy0xNC4zLTMyLTMyLTMyTDMyIDY0QzE0LjMgNjQgMCA3OC4zIDAgOTZzMTQuMyAzMiAzMiAzMmwzODQgMGMxNy43IDAgMzItMTQuMyAzMi0zMnpNMTkyIDQxNmMwLTE3LjctMTQuMy0zMi0zMi0zMkwzMiAzODRjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsMTI4IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const BarsSort: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 256c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z" />
            <path d="M448 96c0-17.7-14.3-32-32-32L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zM192 416c0-17.7-14.3-32-32-32L32 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32z" />
    </Icon>
);

export default BarsSort;