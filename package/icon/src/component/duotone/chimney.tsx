
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chimney` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chimney?s=duotone chimney}
 * @preview ![chimney](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxOTJsMCAxMjggOTYgMCAwLTEyOC05NiAwem0wIDE2MGwwIDEyOCAyNTYgMCAwLTEyOEwzMiAzNTJ6TTE2MCAxOTJsMCAxMjggMjU2IDAgMC0xMjgtMjU2IDB6TTMyMCAzNTJsMCAxMjggOTYgMCAwLTEyOC05NiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgMzJDMTQuMyAzMiAwIDQ2LjMgMCA2NGwwIDY0YzAgMTcuNyAxNC4zIDMyIDMyIDMybDM4NCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtNjRjMC0xNy43LTE0LjMtMzItMzItMzJMMzIgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Chimney: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 192l0 128 96 0 0-128-96 0zm0 160l0 128 256 0 0-128L32 352zM160 192l0 128 256 0 0-128-256 0zM320 352l0 128 96 0 0-128-96 0z" />
            <path d="M32 32C14.3 32 0 46.3 0 64l0 64c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L32 32z" />
    </Icon>
);

export default Chimney;