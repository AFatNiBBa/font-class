
import { Icon, generic } from "../../index";

/**
 * A component that renders the `video-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-slash?s=sharp-duotone-solid video-slash}
 * @preview ![video-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxMjEuMkw0MTYgNDIzLjhsMCAyNC4yTDMyIDQ0OGwwLTMyNi44ek0xMTEuOCA2NEw0MTYgNjRsMCAyMzYuMkwxMTEuOCA2NHpNNDQ4IDE3NC45TDYwOCA2NGwwIDM4NC0xNS4xLTEwLjVMNDQ4IDMyNWwwLTE1MC4yeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjkuNCAuMWwxOSAxNC43TDYyMC45IDQ1OS4zbDE5IDE0LjctMjkuNCAzNy45LTE5LTE0LjdMMTkgNTIuNyAwIDM4IDI5LjQgLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
const VideoSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 121.2L416 423.8l0 24.2L32 448l0-326.8zM111.8 64L416 64l0 236.2L111.8 64zM448 174.9L608 64l0 384-15.1-10.5L448 325l0-150.2z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default VideoSlash;