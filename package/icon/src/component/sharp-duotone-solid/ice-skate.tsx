
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ice-skate` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-skate?s=sharp-duotone-solid ice-skate}
 * @preview ![ice-skate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ2NGwwIDQ4IDI0IDAgOTYgMCAyODggMCAxNDQgMCAyNCAwIDAtMjQgMC01NiAwLTI0LTQ4IDAgMCAyNCAwIDMyLTk2IDAgMC01NiAwLTI0LTQ4IDAgMCAyNCAwIDU2LTI0MCAwIDAtNTYgMC0yNC00OCAwIDAgMjQgMCA1Ni03MiAwTDAgNDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgOTZsMCAyODggNDgwIDAgMC0xNDRMMzIwIDE5MmwtNDggMC0xNiAwIDAtMzIgMTYgMCA0OCAwIDAtMzItNDggMC0xNiAwIDAtMzIgMTYgMCA0OCAwIDAtOTZMMjU2IDBsMCAzMkwzMiA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const IceSkate: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 464l0 48 24 0 96 0 288 0 144 0 24 0 0-24 0-56 0-24-48 0 0 24 0 32-96 0 0-56 0-24-48 0 0 24 0 56-240 0 0-56 0-24-48 0 0 24 0 56-72 0L0 464z" />
            <path d="M32 96l0 288 480 0 0-144L320 192l-48 0-16 0 0-32 16 0 48 0 0-32-48 0-16 0 0-32 16 0 48 0 0-96L256 0l0 32L32 96z" />
    </Icon>
);

export default IceSkate;