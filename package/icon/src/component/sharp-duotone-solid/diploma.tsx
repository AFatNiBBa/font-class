
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diploma` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diploma?s=sharp-duotone-solid diploma}
 * @preview ![diploma](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE0NGwxNjAgMCA0OCAwIDQ4IDAgMCAyMzZMNjQgNDE2IDAgMjg4IDAgMTQ0em0zODQgMGw0OCAwIDQ4IDAgMTYwIDAgMCAxNDRMNTc2IDQxNiAzODQgMzgwbDAtMjM2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjA4IDE0NGwtNDggMCAwLTMxYzAtNDQuNyAzNi4zLTgxIDgxLTgxYzIzLjQgMCA0NS42IDEwLjEgNjEgMjcuN2wxOCAyMC42IDE4LTIwLjZDMzUzLjQgNDIuMSAzNzUuNiAzMiAzOTkgMzJjNDQuNyAwIDgxIDM2LjMgODEgODFsMCAzMS00OCAwIDAtMzEgMC0uNSAwLS41YzAtMTcuNy0xNC4zLTMyLTMyLTMybC0xIDBjLTkuNSAwLTE4LjYgNC4xLTI0LjggMTEuM0wzMjggMTQ0bDU2IDAgMCAzMzYtNjQtNDAtNjQgNDAgMC0zMzYgNTYgMEwyNjUuOSA5MS4zQzI1OS42IDg0LjEgMjUwLjUgODAgMjQxIDgwYy0xOC4xIDAtMzIuNyAxNC41LTMzIDMyLjVsMCAuNSAwIDMxeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Diploma: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 144l160 0 48 0 48 0 0 236L64 416 0 288 0 144zm384 0l48 0 48 0 160 0 0 144L576 416 384 380l0-236z" />
            <path d="M208 144l-48 0 0-31c0-44.7 36.3-81 81-81c23.4 0 45.6 10.1 61 27.7l18 20.6 18-20.6C353.4 42.1 375.6 32 399 32c44.7 0 81 36.3 81 81l0 31-48 0 0-31 0-.5 0-.5c0-17.7-14.3-32-32-32l-1 0c-9.5 0-18.6 4.1-24.8 11.3L328 144l56 0 0 336-64-40-64 40 0-336 56 0L265.9 91.3C259.6 84.1 250.5 80 241 80c-18.1 0-32.7 14.5-33 32.5l0 .5 0 31z" />
    </Icon>
);

export default Diploma;