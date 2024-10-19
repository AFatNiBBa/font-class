
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chalkboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard?s=sharp-duotone-solid chalkboard}
 * @preview ![chalkboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmwwIDY0IDMyIDAgNTEyIDAgMzIgMCAwLTY0LTMyIDAgMC0zNTIgMC0zMi0zMiAwTDY0IDMyIDMyIDMybDAgMzIgMCAzNTJMMCA0MTZ6TTk2IDk2bDM4NCAwIDAgMzIwLTY0IDAtMTkyIDBMOTYgNDE2IDk2IDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDgwIDk2TDk2IDk2bDAgMzIwIDEyOCAwIDAtNjQgMTkyIDAgMCA2NCA2NCAwIDAtMzIweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Chalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64 32 0 512 0 32 0 0-64-32 0 0-352 0-32-32 0L64 32 32 32l0 32 0 352L0 416zM96 96l384 0 0 320-64 0-192 0L96 416 96 96z" />
            <path d="M480 96L96 96l0 320 128 0 0-64 192 0 0 64 64 0 0-320z" />
    </Icon>
);

export default Chalkboard;