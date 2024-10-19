
import { Icon, generic } from "../../index";

/**
 * A component that renders the `backward-step` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-step?s=sharp-duotone-solid backward-step}
 * @preview ![backward-step](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgOTYgMCA0MTZsMCAzMiA2NCAwIDAtMzIgMC0xNjBMNjQgOTZsMC0zMkwwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIwIDY0VjQ0OEw2NCAyNTYgMzIwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BackwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 96 0 416l0 32 64 0 0-32 0-160L64 96l0-32L0 64z" />
            <path d="M320 64V448L64 256 320 64z" />
    </Icon>
);

export default BackwardStep;