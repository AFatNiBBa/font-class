
import { Icon, generic } from "../../index";

/**
 * A component that renders the `overline` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/overline?s=sharp-duotone-solid overline}
 * @preview ![overline](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00MDAgMzA0QTE3NiAxNzYgMCAxIDEgNDggMzA0YTE3NiAxNzYgMCAxIDEgMzUyIDB6bS0yODggMGExMTIgMTEyIDAgMSAwIDIyNCAwIDExMiAxMTIgMCAxIDAgLTIyNCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAzMmwzMiAwIDM4NCAwIDMyIDAgMCA2NC0zMiAwTDMyIDk2IDAgOTYgMCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Overline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M400 304A176 176 0 1 1 48 304a176 176 0 1 1 352 0zm-288 0a112 112 0 1 0 224 0 112 112 0 1 0 -224 0z" />
            <path d="M0 32l32 0 384 0 32 0 0 64-32 0L32 96 0 96 0 32z" />
    </Icon>
);

export default Overline;