
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file?s=duotone file}
 * @preview ![file](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxMjhWMEg0OEMyMS40OSAwIDAgMjEuNDkgMCA0OFY0NjRDMCA0OTAuNTEgMjEuNDkgNTEyIDQ4IDUxMkgzMzZDMzYyLjUxIDUxMiAzODQgNDkwLjUxIDM4NCA0NjRWMTI4SDI1NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzg0IDEyOEgyNTZWMEwzODQgMTI4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const File: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M256 128V0H48C21.49 0 0 21.49 0 48V464C0 490.51 21.49 512 48 512H336C362.51 512 384 490.51 384 464V128H256Z" />
            <path d="M384 128H256V0L384 128Z" />
    </Icon>
);

export default File;