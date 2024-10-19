
import { Icon, generic } from "../../index";

/**
 * A component that renders the `transporter-empty` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-empty?s=duotone transporter-empty}
 * @preview ![transporter-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OCA0NDhIMzJDMTQuMzc1IDQ0OCAwIDQ2Mi4zNzUgMCA0ODBWNTEySDMyMFY0ODBDMzIwIDQ2Mi4zNzUgMzA1LjYyNSA0NDggMjg4IDQ0OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const TransporterEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M288 448H32C14.375 448 0 462.375 0 480V512H320V480C320 462.375 305.625 448 288 448Z" />
    </Icon>
);

export default TransporterEmpty;