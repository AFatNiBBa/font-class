
import { Icon, generic } from "../../index";

/**
 * A component that renders the `option` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/option?s=duotone option}
 * @preview ![option](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00MTYgOTZjMC0xNy43IDE0LjMtMzIgMzItMzJsMTYwIDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJsLTE2MCAwYy0xNy43IDAtMzItMTQuMy0zMi0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQyMyA0MzZjNi4xIDcuNiAxNS4zIDEyIDI1IDEybDE2MCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC0xNDQuNiAwTDIxNyA3NmMtNi4xLTcuNi0xNS4zLTEyLTI1LTEyTDMyIDY0QzE0LjMgNjQgMCA3OC4zIDAgOTZzMTQuMyAzMiAzMiAzMmwxNDQuNiAwTDQyMyA0MzZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Option: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M416 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32z" />
            <path d="M423 436c6.1 7.6 15.3 12 25 12l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144.6 0L217 76c-6.1-7.6-15.3-12-25-12L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l144.6 0L423 436z" />
    </Icon>
);

export default Option;