
import { Icon } from "../../index";

/**
 * A component that renders the `clock-five` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five?s=sharp-solid clock-five}
 * @preview ![clock-five](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6bTI0LTM5MmwwIDEyOC43IDYwIDkwIDEzLjMgMjAtMzkuOSAyNi42LTEzLjMtMjAtNjQtOTYtNC02IDAtNy4zIDAtMTM2IDAtMjQgNDggMCAwIDI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ClockFive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-392l0 128.7 60 90 13.3 20-39.9 26.6-13.3-20-64-96-4-6 0-7.3 0-136 0-24 48 0 0 24z" />
    </Icon>
);

export default ClockFive;