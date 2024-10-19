
import { Icon, generic } from "../../index";

/**
 * A component that renders the `filters` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filters?s=sharp-duotone-solid filters}
 * @preview ![filters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDE2MCAwIDAgMTMuMyA5LjQgOS40TDMyMCAyNjkuM2wwIDE4LjctMzIgMzIgMCAxOTJMMTYwIDQxNmwwLTk2TDAgMTYwIDAgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNTIgMzg0VjI1NkwxOTIgOTZWMzJINjQwVjk2TDQ4MCAyNTZWNDgwTDM1MiAzODR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Filters: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96l160 0 0 13.3 9.4 9.4L320 269.3l0 18.7-32 32 0 192L160 416l0-96L0 160 0 96z" />
            <path d="M352 384V256L192 96V32H640V96L480 256V480L352 384z" />
    </Icon>
);

export default Filters;