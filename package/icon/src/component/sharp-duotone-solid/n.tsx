
import { Icon, generic } from "../../index";

/**
 * A component that renders the `n` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/n?s=sharp-duotone-solid n}
 * @preview ![n](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDQ3IDAgOS42IDExLjVMMzIwIDM1OS42IDMyMCA2NGwwLTMyIDY0IDAgMCAzMiAwIDM4NCAwIDMyLTQ3IDAtOS42LTExLjVMNjQgMTUyLjQgNjQgNDQ4bDAgMzJMMCA0ODBsMC0zMkwwIDY0IDAgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const N: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32l47 0 9.6 11.5L320 359.6 320 64l0-32 64 0 0 32 0 384 0 32-47 0-9.6-11.5L64 152.4 64 448l0 32L0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default N;