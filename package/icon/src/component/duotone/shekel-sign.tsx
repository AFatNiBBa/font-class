
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shekel-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shekel-sign?s=duotone shekel-sign}
 * @preview ![shekel-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMTkybDAgMjU2YzAgMTcuNyAxNC4zIDMyIDMyIDMybDE2MCAwYzcwLjcgMCAxMjgtNTcuMyAxMjgtMTI4bDAtMjg4YzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMybDAgMjg4YzAgMzUuMy0yOC43IDY0LTY0IDY0bC0xMjggMCAwLTIyNGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgNjRDMCA0Ni4zIDE0LjMgMzIgMzIgMzJsMTYwIDBjNzAuNyAwIDEyOCA1Ny4zIDEyOCAxMjhsMCAxNjBjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0xNjBjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgOTZsMCAzNTJjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJMMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ShekelSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 192l0 256c0 17.7 14.3 32 32 32l160 0c70.7 0 128-57.3 128-128l0-288c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 288c0 35.3-28.7 64-64 64l-128 0 0-224c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M0 64C0 46.3 14.3 32 32 32l160 0c70.7 0 128 57.3 128 128l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-35.3-28.7-64-64-64L64 96l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64z" />
    </Icon>
);

export default ShekelSign;