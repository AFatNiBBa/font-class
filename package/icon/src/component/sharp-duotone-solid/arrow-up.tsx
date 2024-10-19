
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up?s=sharp-duotone-solid arrow-up}
 * @preview ![arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMTU3LjNjMTAuNy0xMC43IDIxLjMtMjEuMyAzMi0zMmMxMC43IDEwLjcgMjEuMyAyMS4zIDMyIDMyTDIyNCA0NDhsMCAzMi02NCAwIDAtMzIgMC0yOTAuN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAzNC44bDIyLjYgMjIuNiAxNDQgMTQ0TDM4MS4zIDIyNCAzMzYgMjY5LjNsLTIyLjYtMjIuNkwxOTIgMTI1LjMgNzAuNiAyNDYuNiA0OCAyNjkuMyAyLjcgMjI0bDIyLjYtMjIuNiAxNDQtMTQ0TDE5MiAzNC44eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 157.3c10.7-10.7 21.3-21.3 32-32c10.7 10.7 21.3 21.3 32 32L224 448l0 32-64 0 0-32 0-290.7z" />
            <path d="M192 34.8l22.6 22.6 144 144L381.3 224 336 269.3l-22.6-22.6L192 125.3 70.6 246.6 48 269.3 2.7 224l22.6-22.6 144-144L192 34.8z" />
    </Icon>
);

export default ArrowUp;