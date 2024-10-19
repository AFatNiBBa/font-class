
import { Icon, generic } from "../../index";

/**
 * A component that renders the `airplay` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/airplay?s=sharp-duotone-solid airplay}
 * @preview ![airplay](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgOTYgMCAzNTJsMCA2NCA2NCAwIDMzLjkgMCA4LjctNy44TDE2OSAzNTIgNjQgMzUyIDY0IDk2bDQ0OCAwIDAgMjU2LTEwNSAwIDYyLjUgNTYuMiA4LjcgNy44IDMzLjkgMCA2NCAwIDAtNjQgMC0yNTYgMC02NC02NCAwTDY0IDMyIDAgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggNDMyTDI4OCAyODggNDQ4IDQzMnY0OEgxMjhWNDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Airplay: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96 0 352l0 64 64 0 33.9 0 8.7-7.8L169 352 64 352 64 96l448 0 0 256-105 0 62.5 56.2 8.7 7.8 33.9 0 64 0 0-64 0-256 0-64-64 0L64 32 0 32z" />
            <path d="M128 432L288 288 448 432v48H128V432z" />
    </Icon>
);

export default Airplay;