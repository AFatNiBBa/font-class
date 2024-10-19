
import { Icon } from "../../index";

/**
 * A component that renders the `circle-calendar` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-calendar?s=sharp-solid circle-calendar}
 * @preview ![circle-calendar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6TTIyNCA5NmwwIDMyIDY0IDAgMC0zMiAzMiAwIDAgMzIgNjQgMCAwIDY0LTI1NiAwIDAtNjQgNjQgMCAwLTMyIDMyIDB6TTEyOCAzODRsMC0xNjAgMjU2IDAgMCAxNjAtMjU2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleCalendar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 96l0 32 64 0 0-32 32 0 0 32 64 0 0 64-256 0 0-64 64 0 0-32 32 0zM128 384l0-160 256 0 0 160-256 0z" />
    </Icon>
);

export default CircleCalendar;