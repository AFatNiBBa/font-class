
import { Icon, generic } from "../../index";

/**
 * A component that renders the `divide` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/divide?s=duotone divide}
 * @preview ![divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAyNTZjMCAxNy43IDE0LjMgMzIgMzIgMzJsMzUyIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJMNDggMjI0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAxNDRhNDggNDggMCAxIDAgMC05NiA0OCA0OCAwIDEgMCAwIDk2em0wIDMyMGE0OCA0OCAwIDEgMCAwLTk2IDQ4IDQ4IDAgMSAwIDAgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Divide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 256c0 17.7 14.3 32 32 32l352 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48 224c-17.7 0-32 14.3-32 32z" />
            <path d="M224 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 320a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default Divide;