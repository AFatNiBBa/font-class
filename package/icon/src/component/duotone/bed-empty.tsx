
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed-empty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=duotone bed-empty}
 * @preview ![bed-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyMjRsMzIgMCA0NDggMGMyNC4zIDAgNDYuNiA5LjEgNjMuNSAyNGwuNSAwIDAgLjRjMTkuNiAxNy42IDMyIDQzLjEgMzIgNzEuNmwtMzIgMEw2NCAzMjBsMC02NCAwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgMzJjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAyNTYgNTQ0IDAgMzIgMCAwIDMyIDAgOTZjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0zMkw2NCA0MTZsMCAzMmMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMkwwIDY0QzAgNDYuMyAxNC4zIDMyIDMyIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 224l32 0 448 0c24.3 0 46.6 9.1 63.5 24l.5 0 0 .4c19.6 17.6 32 43.1 32 71.6l-32 0L64 320l0-64 0-32z" />
            <path d="M32 32c17.7 0 32 14.3 32 32l0 256 544 0 32 0 0 32 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L64 416l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32z" />
    </Icon>
);

export default BedEmpty;