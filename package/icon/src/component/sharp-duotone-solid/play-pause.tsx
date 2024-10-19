
import { Icon, generic } from "../../index";

/**
 * A component that renders the `play-pause` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play-pause?s=sharp-duotone-solid play-pause}
 * @preview ![play-pause](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zODQgNjRsMCAzMiAwIDMyMCAwIDMyIDY0IDAgMC0zMiAwLTMyMCAwLTMyLTY0IDB6bTEyOCAwbDAgMzIgMCAzMjAgMCAzMiA2NCAwIDAtMzIgMC0zMjAgMC0zMi02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgNjRWNDQ4TDMyMCAyNTYgNjQgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const PlayPause: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M384 64l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0zm128 0l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0z" />
            <path d="M64 64V448L320 256 64 64z" />
    </Icon>
);

export default PlayPause;