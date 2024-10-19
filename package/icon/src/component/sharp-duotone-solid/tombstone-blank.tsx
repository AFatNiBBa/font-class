
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tombstone-blank` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone-blank?s=sharp-duotone-solid tombstone-blank}
 * @preview ![tombstone-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxOTJDMzIgODYgMTE4IDAgMjI0IDBTNDE2IDg2IDQxNiAxOTJsMCAyNTZMMzIgNDQ4bDAtMjU2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA0NDhsNDQ4IDAgMCA2NEwwIDUxMmwwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TombstoneBlank: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 192C32 86 118 0 224 0S416 86 416 192l0 256L32 448l0-256z" />
            <path d="M0 448l448 0 0 64L0 512l0-64z" />
    </Icon>
);

export default TombstoneBlank;