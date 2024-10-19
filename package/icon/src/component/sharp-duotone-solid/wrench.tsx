
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wrench` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench?s=sharp-duotone-solid wrench}
 * @preview ![wrench](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmw5NiA5NkwyOTcuNSAzMTAuNWMtNDQuNS0xNi4xLTc5LjktNTEuNS05Ni05NkwwIDQxNnptNzAuMS04TDEwNCAzNzQuMSAxMzcuOSA0MDggMTA0IDQ0MS45IDcwLjEgNDA4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUyIDMyMGM4OC40IDAgMTYwLTcxLjYgMTYwLTE2MGMwLTIzLjUtNS4xLTQ1LjgtMTQuMS02NS45TDQwMCAxOTJsLTgwIDAgMC04MCA5Ny45LTk3LjlDMzk3LjggNS4xIDM3NS41IDAgMzUyIDBDMjYzLjYgMCAxOTIgNzEuNiAxOTIgMTYwczcxLjYgMTYwIDE2MCAxNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Wrench: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416l96 96L297.5 310.5c-44.5-16.1-79.9-51.5-96-96L0 416zm70.1-8L104 374.1 137.9 408 104 441.9 70.1 408z" />
            <path d="M352 320c88.4 0 160-71.6 160-160c0-23.5-5.1-45.8-14.1-65.9L400 192l-80 0 0-80 97.9-97.9C397.8 5.1 375.5 0 352 0C263.6 0 192 71.6 192 160s71.6 160 160 160z" />
    </Icon>
);

export default Wrench;