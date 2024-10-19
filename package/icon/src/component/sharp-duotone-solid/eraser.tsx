
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eraser` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eraser?s=sharp-duotone-solid eraser}
 * @preview ![eraser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAzMzZsNDUuMyA0NS4zTDE2MCA0ODBsMTYwIDAgMTkyIDAgMzIgMCAwLTY0LTMyIDAtMTI4IDAgMjQtMjQtNDUuMy00NS4zTDI5My41IDQxNmwtNS41IDAtMTAxLjUgMC04MC04MEwyMjkuMyAyMTMuM2MtMTUuMS0xNS4xLTMwLjItMzAuMi00NS4zLTQ1LjNjLTQwLjkgNDAuOS04MS44IDgxLjgtMTIyLjcgMTIyLjdMMTYgMzM2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTg0IDE2OEwzMzYgMTYgNTYwIDI0MCA0MDggMzkyIDE4NCAxNjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Eraser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M16 336l45.3 45.3L160 480l160 0 192 0 32 0 0-64-32 0-128 0 24-24-45.3-45.3L293.5 416l-5.5 0-101.5 0-80-80L229.3 213.3c-15.1-15.1-30.2-30.2-45.3-45.3c-40.9 40.9-81.8 81.8-122.7 122.7L16 336z" />
            <path d="M184 168L336 16 560 240 408 392 184 168z" />
    </Icon>
);

export default Eraser;