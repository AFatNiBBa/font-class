
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sensor` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor?s=sharp-duotone-solid sensor}
 * @preview ![sensor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTY0IDk2bDQ4IDAgMCAyNCAwIDE0NCAwIDI0LTQ4IDAgMC0yNCAwLTE0NCAwLTI0em05NiAwbDQ4IDAgMCAyNCAwIDE0NCAwIDI0LTQ4IDAgMC0yNCAwLTE0NCAwLTI0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTEyIDk2bDAgMjQgMCAxNDQgMCAyNC00OCAwIDAtMjQgMC0xNDQgMC0yNCA0OCAwem05NiAwbDAgMjQgMCAxNDQgMCAyNC00OCAwIDAtMjQgMC0xNDQgMC0yNCA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Sensor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM64 96l48 0 0 24 0 144 0 24-48 0 0-24 0-144 0-24zm96 0l48 0 0 24 0 144 0 24-48 0 0-24 0-144 0-24z" />
            <path d="M112 96l0 24 0 144 0 24-48 0 0-24 0-144 0-24 48 0zm96 0l0 24 0 144 0 24-48 0 0-24 0-144 0-24 48 0z" />
    </Icon>
);

export default Sensor;