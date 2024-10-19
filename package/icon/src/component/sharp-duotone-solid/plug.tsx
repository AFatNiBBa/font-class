
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plug` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug?s=sharp-duotone-solid plug}
 * @preview ![plug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAwbDAgMzIgMCAxMjggNjQgMCAwLTEyOCAwLTMyTDY0IDB6TTI1NiAwbDAgMzIgMCAxMjggNjQgMCAwLTEyOCAwLTMyTDI1NiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAxNjBsMzIgMCAzMjAgMCAzMiAwIDAgNjQtMzIgMCAwIDMyYzAgNzcuNC01NSAxNDItMTI4IDE1Ni44bDAgOTkuMi02NCAwIDAtOTkuMkM4NyAzOTggMzIgMzMzLjQgMzIgMjU2bDAtMzJMMCAyMjRsMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Plug: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 0l0 32 0 128 64 0 0-128 0-32L64 0zM256 0l0 32 0 128 64 0 0-128 0-32L256 0z" />
            <path d="M0 160l32 0 320 0 32 0 0 64-32 0 0 32c0 77.4-55 142-128 156.8l0 99.2-64 0 0-99.2C87 398 32 333.4 32 256l0-32L0 224l0-64z" />
    </Icon>
);

export default Plug;