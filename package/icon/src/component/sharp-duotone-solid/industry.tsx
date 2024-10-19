
import { Icon, generic } from "../../index";

/**
 * A component that renders the `industry` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/industry?s=sharp-duotone-solid industry}
 * @preview ![industry](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMmwwIDE5MiAwIDE2MCAwIDk2IDUxMiAwIDAtMjU2IDAtNjguNEwzNTIgMjY1LjRsMC00MS40IDAtMTMuOSAwLTU0LjRMMTYwIDI2NS40bDAtNDEuNCAwLTEzLjlMMTYwIDMyIDMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzYzLjkgMTQ4LjhMMTYwIDI2NS40bDAtNTUuM0wzNDAuMSAxMDcuMmwyMy44IDQxLjd6bTE5MiAwTDM1MiAyNjUuNGwwLTU1LjNMNTMyLjEgMTA3LjJsMjMuOCA0MS43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Industry: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 32l0 192 0 160 0 96 512 0 0-256 0-68.4L352 265.4l0-41.4 0-13.9 0-54.4L160 265.4l0-41.4 0-13.9L160 32 32 32z" />
            <path d="M363.9 148.8L160 265.4l0-55.3L340.1 107.2l23.8 41.7zm192 0L352 265.4l0-55.3L532.1 107.2l23.8 41.7z" />
    </Icon>
);

export default Industry;