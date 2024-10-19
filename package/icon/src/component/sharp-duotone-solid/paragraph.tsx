
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paragraph` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paragraph?s=sharp-duotone-solid paragraph}
 * @preview ![paragraph](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAgOTZsMCAzNTIgMCAzMiA2NCAwIDAtMzIgMC0zNTItNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAzMmw2NCAwIDE2MCAwIDMyIDAgMCA2NC0zMiAwTDI4OCA5NmwwIDM1MiAwIDMyLTY0IDAgMC0zMiAwLTk2LTMyIDBjLTg4LjQgMC0xNjAtNzEuNi0xNjAtMTYwczcxLjYtMTYwIDE2MC0xNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Paragraph: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M320 96l0 352 0 32 64 0 0-32 0-352-64 0z" />
            <path d="M192 32l64 0 160 0 32 0 0 64-32 0L288 96l0 352 0 32-64 0 0-32 0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z" />
    </Icon>
);

export default Paragraph;