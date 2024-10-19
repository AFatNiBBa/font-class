
import { Icon, generic } from "../../index";

/**
 * A component that renders the `terminal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/terminal?s=sharp-duotone-solid terminal}
 * @preview ![terminal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgNDE2bDMyIDAgMjg4IDAgMzIgMCAwIDY0LTMyIDAtMjg4IDAtMzIgMCAwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNLS41IDc2LjhMMjIuMiA5OS40IDE3OC43IDI1NiAyMi4yIDQxMi42LS41IDQzNS4ybDQ1LjMgNDUuMyAyMi42LTIyLjZMMjQ2LjYgMjc4LjYgMjY5LjMgMjU2bC0yMi42LTIyLjZMNjcuNCA1NC4yIDQ0LjggMzEuNS0uNSA3Ni44eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Terminal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M224 416l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64z" />
            <path d="M-.5 76.8L22.2 99.4 178.7 256 22.2 412.6-.5 435.2l45.3 45.3 22.6-22.6L246.6 278.6 269.3 256l-22.6-22.6L67.4 54.2 44.8 31.5-.5 76.8z" />
    </Icon>
);

export default Terminal;