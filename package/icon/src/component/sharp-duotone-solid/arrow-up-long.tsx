
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-long?s=sharp-duotone-solid arrow-up-long}
 * @preview ![arrow-up-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMTIyLjVjMTAuNy0xMC43IDIxLjMtMjEuMyAzMi0zMmMxMC43IDEwLjcgMjEuMyAyMS4zIDMyIDMyTDIyNCA0ODBsMCAzMi02NCAwIDAtMzIgMC0zNTcuNXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAwTDE2OS40IDIyLjZsLTEyOCAxMjhMMTguNyAxNzMuMyA2NCAyMTguNWwyMi42LTIyLjZMMTkyIDkwLjUgMjk3LjQgMTk1LjkgMzIwIDIxOC41bDQ1LjMtNDUuMy0yMi42LTIyLjYtMTI4LTEyOEwxOTIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowUpLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 122.5c10.7-10.7 21.3-21.3 32-32c10.7 10.7 21.3 21.3 32 32L224 480l0 32-64 0 0-32 0-357.5z" />
            <path d="M192 0L169.4 22.6l-128 128L18.7 173.3 64 218.5l22.6-22.6L192 90.5 297.4 195.9 320 218.5l45.3-45.3-22.6-22.6-128-128L192 0z" />
    </Icon>
);

export default ArrowUpLong;