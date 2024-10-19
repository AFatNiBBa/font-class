
import { Icon, generic } from "../../index";

/**
 * A component that renders the `link-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple?s=sharp-duotone-solid link-simple}
 * @preview ![link-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMjI0bDMyIDAgMTkyIDAgMzIgMCAwIDY0LTMyIDAtMTkyIDAtMzIgMCAwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDk2QzcxLjYgOTYgMCAxNjcuNiAwIDI1NnM3MS42IDE2MCAxNjAgMTYwbDY0IDAgMzIgMCAwLTY0LTMyIDAtNjQgMGMtNTMgMC05Ni00My05Ni05NnM0My05NiA5Ni05Nmw2NCAwIDMyIDAgMC02NC0zMiAwLTY0IDB6bTI1NiAwbC02NCAwLTMyIDAgMCA2NCAzMiAwIDY0IDBjNTMgMCA5NiA0MyA5NiA5NnMtNDMgOTYtOTYgOTZsLTY0IDAtMzIgMCAwIDY0IDMyIDAgNjQgMGM4OC40IDAgMTYwLTcxLjYgMTYwLTE2MHMtNzEuNi0xNjAtMTYwLTE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const LinkSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M160 224l32 0 192 0 32 0 0 64-32 0-192 0-32 0 0-64z" />
            <path d="M160 96C71.6 96 0 167.6 0 256s71.6 160 160 160l64 0 32 0 0-64-32 0-64 0c-53 0-96-43-96-96s43-96 96-96l64 0 32 0 0-64-32 0-64 0zm256 0l-64 0-32 0 0 64 32 0 64 0c53 0 96 43 96 96s-43 96-96 96l-64 0-32 0 0 64 32 0 64 0c88.4 0 160-71.6 160-160s-71.6-160-160-160z" />
    </Icon>
);

export default LinkSimple;