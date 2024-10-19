
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plus-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-minus?s=sharp-duotone-solid plus-minus}
 * @preview ![plus-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGwzMiAwIDMyMCAwIDMyIDAgMCA2NC0zMiAwTDMyIDUxMiAwIDUxMmwwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI0IDMybDAtMzJMMTYwIDBsMCAzMiAwIDExMkw0OCAxNDRsLTMyIDAgMCA2NCAzMiAwIDExMiAwIDAgMTEyIDAgMzIgNjQgMCAwLTMyIDAtMTEyIDExMiAwIDMyIDAgMC02NC0zMiAwLTExMiAwIDAtMTEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PlusMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 448l32 0 320 0 32 0 0 64-32 0L32 512 0 512l0-64z" />
            <path d="M224 32l0-32L160 0l0 32 0 112L48 144l-32 0 0 64 32 0 112 0 0 112 0 32 64 0 0-32 0-112 112 0 32 0 0-64-32 0-112 0 0-112z" />
    </Icon>
);

export default PlusMinus;