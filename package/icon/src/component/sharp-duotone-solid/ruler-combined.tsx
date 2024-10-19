
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ruler-combined` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-combined?s=sharp-duotone-solid ruler-combined}
 * @preview ![ruler-combined](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCAzMjAgMCA1MTJsMTkyIDAgMzIwIDAgMC0xOTItOTYgMCAwIDgwIDAgMTYtMzIgMCAwLTE2IDAtODAtNjQgMCAwIDgwIDAgMTYtMzIgMCAwLTE2IDAtODAtNjQgMCAwIDgwIDAgMTYtMzIgMCAwLTE2IDAtODAtODAgMC0xNiAwIDAtMzIgMTYgMCA4MCAwIDAtNjQtODAgMC0xNiAwIDAtMzIgMTYgMCA4MCAwIDAtNjQtODAgMC0xNiAwIDAtMzIgMTYgMCA4MCAwIDAtOTZMMCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTEyIDk2TDk2IDk2bDAgMzIgMTYgMCA4MCAwIDAtMzItODAgMHptODAgOTZsLTgwIDAtMTYgMCAwIDMyIDE2IDAgODAgMCAwLTMyem0wIDk2bC04MCAwLTE2IDAgMCAzMiAxNiAwIDgwIDAgMCA4MCAwIDE2IDMyIDAgMC0xNiAwLTgwLTMyIDAgMC0zMnptMTI4IDMybC0zMiAwIDAgODAgMCAxNiAzMiAwIDAtMTYgMC04MHptOTYgODBsMC04MC0zMiAwIDAgODAgMCAxNiAzMiAwIDAtMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const RulerCombined: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 320 0 512l192 0 320 0 0-192-96 0 0 80 0 16-32 0 0-16 0-80-64 0 0 80 0 16-32 0 0-16 0-80-64 0 0 80 0 16-32 0 0-16 0-80-80 0-16 0 0-32 16 0 80 0 0-64-80 0-16 0 0-32 16 0 80 0 0-64-80 0-16 0 0-32 16 0 80 0 0-96L0 0z" />
            <path d="M112 96L96 96l0 32 16 0 80 0 0-32-80 0zm80 96l-80 0-16 0 0 32 16 0 80 0 0-32zm0 96l-80 0-16 0 0 32 16 0 80 0 0 80 0 16 32 0 0-16 0-80-32 0 0-32zm128 32l-32 0 0 80 0 16 32 0 0-16 0-80zm96 80l0-80-32 0 0 80 0 16 32 0 0-16z" />
    </Icon>
);

export default RulerCombined;