
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list?s=sharp-duotone-solid list}
 * @preview ![list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgNjRsMzIgMCAyODggMCAzMiAwIDAgNjQtMzIgMC0yODggMC0zMiAwIDAtNjR6bTAgMTYwbDMyIDAgMjg4IDAgMzIgMCAwIDY0LTMyIDAtMjg4IDAtMzIgMCAwLTY0em0wIDE2MGwzMiAwIDI4OCAwIDMyIDAgMCA2NC0zMiAwLTI4OCAwLTMyIDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2IDQ4bDk2IDAgMCA5Ni05NiAwIDAtOTZ6bTAgMTYwbDk2IDAgMCA5Ni05NiAwIDAtOTZ6bTk2IDE2MGwwIDk2LTk2IDAgMC05NiA5NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const List: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 64l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64zm0 160l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64zm0 160l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64z" />
            <path d="M16 48l96 0 0 96-96 0 0-96zm0 160l96 0 0 96-96 0 0-96zm96 160l0 96-96 0 0-96 96 0z" />
    </Icon>
);

export default List;