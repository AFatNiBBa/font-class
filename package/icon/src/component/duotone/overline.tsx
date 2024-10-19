
import { Icon, generic } from "../../index";

/**
 * A component that renders the `overline` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/overline?s=duotone overline}
 * @preview ![overline](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00MDAgMzA0QTE3NiAxNzYgMCAxIDEgNDggMzA0YTE3NiAxNzYgMCAxIDEgMzUyIDB6bS0yODggMGExMTIgMTEyIDAgMSAwIDIyNCAwIDExMiAxMTIgMCAxIDAgLTIyNCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA2NEMwIDQ2LjMgMTQuMyAzMiAzMiAzMmwzODQgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkwzMiA5NkMxNC4zIDk2IDAgODEuNyAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Overline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M400 304A176 176 0 1 1 48 304a176 176 0 1 1 352 0zm-288 0a112 112 0 1 0 224 0 112 112 0 1 0 -224 0z" />
            <path d="M0 64C0 46.3 14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64z" />
    </Icon>
);

export default Overline;