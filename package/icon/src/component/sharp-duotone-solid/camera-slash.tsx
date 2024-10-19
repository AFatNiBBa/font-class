
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-slash?s=sharp-duotone-solid camera-slash}
 * @preview ![camera-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxNDYuNEw2NCA0ODBsNDIzLjQgMEwzNTYuNCAzNzYuOGMtMTEuMiA0LjYtMjMuNSA3LjItMzYuNCA3LjJjLTUzIDAtOTYtNDMtOTYtOTZjMC01IC40LTkuOSAxLjEtMTQuNkw2NCAxNDYuNHpNMTUzIDk2TDI4NS4xIDE5OC42YzEwLjgtNC4yIDIyLjYtNi42IDM0LjktNi42YzUzIDAgOTYgNDMgOTYgOTZjMCAzLjktLjIgNy44LS43IDExLjdjNTMuNiA0MS42IDEwNy4xIDgzLjIgMTYwLjcgMTI0LjhMNTc2IDk2IDQzNy4zIDk2IDQxNiAzMiAyMjQgMzIgMjAyLjcgOTYgMTUzIDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjkuNCAuMWwxOSAxNC43TDYyMC45IDQ1OS4zbDE5IDE0LjctMjkuNCAzNy45LTE5LTE0LjdMMTkgNTIuNyAwIDM4IDI5LjQgLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
const CameraSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 146.4L64 480l423.4 0L356.4 376.8c-11.2 4.6-23.5 7.2-36.4 7.2c-53 0-96-43-96-96c0-5 .4-9.9 1.1-14.6L64 146.4zM153 96L285.1 198.6c10.8-4.2 22.6-6.6 34.9-6.6c53 0 96 43 96 96c0 3.9-.2 7.8-.7 11.7c53.6 41.6 107.1 83.2 160.7 124.8L576 96 437.3 96 416 32 224 32 202.7 96 153 96z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default CameraSlash;