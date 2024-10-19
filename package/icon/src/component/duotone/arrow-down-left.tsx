
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left?s=duotone arrow-down-left}
 * @preview ![arrow-down-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMDYuN0wyOTcuNCAxMDUuNGM2LjItNi4yIDE0LjQtOS40IDIyLjYtOS40czE2LjQgMy4xIDIyLjYgOS40czkuNCAxNC40IDkuNCAyMi42cy0zLjEgMTYuNC05LjQgMjIuNkwxNDEuMyAzNTIgOTYgMzUybDAtNDUuM3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDM4NGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwyMjQgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkw5NiAzNTJsMC0xOTJjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJsMCAyMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 306.7L297.4 105.4c6.2-6.2 14.4-9.4 22.6-9.4s16.4 3.1 22.6 9.4s9.4 14.4 9.4 22.6s-3.1 16.4-9.4 22.6L141.3 352 96 352l0-45.3z" />
            <path d="M32 384c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 352l0-192c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 224z" />
    </Icon>
);

export default ArrowDownLeft;