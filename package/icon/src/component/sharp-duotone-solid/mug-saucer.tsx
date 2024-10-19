
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mug-saucer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-saucer?s=sharp-duotone-solid mug-saucer}
 * @preview ![mug-saucer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmwzMiAwIDUxMiAwIDMyIDAgMCA2NC0zMiAwTDMyIDQ4MCAwIDQ4MGwwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDMyTDk2IDMybDAgMzUyIDM4NCAwIDAtOTYgMzIgMGM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOHMtNTcuMy0xMjgtMTI4LTEyOGwtMzIgMC0zMiAwem0zMiA2NGwzMiAwYzM1LjMgMCA2NCAyOC43IDY0IDY0cy0yOC43IDY0LTY0IDY0bC0zMiAwIDAtMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MugSaucer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416l32 0 512 0 32 0 0 64-32 0L32 480 0 480l0-64z" />
            <path d="M448 32L96 32l0 352 384 0 0-96 32 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-32 0-32 0zm32 64l32 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-32 0 0-128z" />
    </Icon>
);

export default MugSaucer;