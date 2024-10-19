
import { Icon, generic } from "../../index";

/**
 * A component that renders the `card-diamond` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-diamond?s=sharp-duotone-solid card-diamond}
 * @preview ![card-diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA1MTJsMzg0IDBMMzg0IDAgMCAwek04MCAyNTZMMTkyIDE0NCAzMDQgMjU2IDE5MiAzNjggODAgMjU2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDM2OEw4MCAyNTYgMTkyIDE0NCAzMDQgMjU2IDE5MiAzNjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const CardDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l384 0L384 0 0 0zM80 256L192 144 304 256 192 368 80 256z" />
            <path d="M192 368L80 256 192 144 304 256 192 368z" />
    </Icon>
);

export default CardDiamond;