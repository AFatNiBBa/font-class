
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long?s=sharp-duotone-solid arrow-left-long}
 * @preview ![arrow-left-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05MC41IDI1NmMxMC43LTEwLjcgMjEuMy0yMS4zIDMyLTMyTDQ4MCAyMjRsMzIgMCAwIDY0LTMyIDAtMzU3LjUgMGMtMTAuNy0xMC43LTIxLjMtMjEuMy0zMi0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMjU2bDIyLjYgMjIuNiAxMjggMTI4IDIyLjYgMjIuNkwyMTguNSAzODRsLTIyLjYtMjIuNkw5MC41IDI1NiAxOTUuOSAxNTAuNiAyMTguNSAxMjggMTczLjMgODIuN2wtMjIuNiAyMi42LTEyOCAxMjhMMCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowLeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M90.5 256c10.7-10.7 21.3-21.3 32-32L480 224l32 0 0 64-32 0-357.5 0c-10.7-10.7-21.3-21.3-32-32z" />
            <path d="M0 256l22.6 22.6 128 128 22.6 22.6L218.5 384l-22.6-22.6L90.5 256 195.9 150.6 218.5 128 173.3 82.7l-22.6 22.6-128 128L0 256z" />
    </Icon>
);

export default ArrowLeftLong;