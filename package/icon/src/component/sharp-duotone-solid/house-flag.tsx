
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-flag` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-flag?s=sharp-duotone-solid house-flag}
 * @preview ![house-flag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI0MGwwIDQ3LjYgNjQuMSAwIDAgMjI0LjRMMTkyIDUxMmwwLTE2MCAxMjggMCAwIDE2MCA5NiAwIDAtMzQ2LjhMMjU2LjQgMzIgMCAyNDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTIgMzJsMC0zMkw0NDggMGwwIDMyIDAgMTYwIDAgMzIwIDY0IDAgMC0zMjAgMTI4IDAgMC0xNjBMNTEyIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HouseFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 240l0 47.6 64.1 0 0 224.4L192 512l0-160 128 0 0 160 96 0 0-346.8L256.4 32 0 240z" />
            <path d="M512 32l0-32L448 0l0 32 0 160 0 320 64 0 0-320 128 0 0-160L512 32z" />
    </Icon>
);

export default HouseFlag;