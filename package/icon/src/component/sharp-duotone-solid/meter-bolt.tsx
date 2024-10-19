
import { Icon, generic } from "../../index";

/**
 * A component that renders the `meter-bolt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-bolt?s=sharp-duotone-solid meter-bolt}
 * @preview ![meter-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM5Ny40IDExNC42IDUxMiAyNTYgNTEyYzgwLjggMCAxNTIuOS0zNy41IDE5OS45LTk2TDM4NCA0MTZsMC03MS43IDEyNy45LTk3LjFDNTA3LjIgMTA5LjkgMzk0LjQgMCAyNTYgMEMxMTQuNiAwIDAgMTE0LjYgMCAyNTZ6TTEyOCAxMjhsNjQgMCAwIDMyIDAgMzIgMCAzMi02NCAwIDAtMzIgMC0zMiAwLTMyem05NiAwbDY0IDAgMCAzMiAwIDMyIDAgMzItNjQgMCAwLTMyIDAtMzIgMC0zMnptOTYgMGw2NCAwIDAgMzIgMCAzMiAwIDMyLTY0IDAgMC0zMiAwLTMyIDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NDAgMzc2TDQ2NCA1MTJsNDAtMTI4SDQxNlYzNjBMNTkyIDIyNCA1NTIgMzUyaDg4djI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MeterBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c80.8 0 152.9-37.5 199.9-96L384 416l0-71.7 127.9-97.1C507.2 109.9 394.4 0 256 0C114.6 0 0 114.6 0 256zM128 128l64 0 0 32 0 32 0 32-64 0 0-32 0-32 0-32zm96 0l64 0 0 32 0 32 0 32-64 0 0-32 0-32 0-32zm96 0l64 0 0 32 0 32 0 32-64 0 0-32 0-32 0-32z" />
            <path d="M640 376L464 512l40-128H416V360L592 224 552 352h88v24z" />
    </Icon>
);

export default MeterBolt;