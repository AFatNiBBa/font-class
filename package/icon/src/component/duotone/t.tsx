
import { Icon, generic } from "../../index";

/**
 * A component that renders the `t` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/t?s=duotone t}
 * @preview ![t](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMkMxNC4zIDMyIDAgNDYuMyAwIDY0UzE0LjMgOTYgMzIgOTZsMTI4IDAgMCAzNTJjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTM1MiAxMjggMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkwxOTIgMzIgMzIgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const T: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l128 0 0 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-352 128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 32 32 32z" />
    </Icon>
);

export default T;