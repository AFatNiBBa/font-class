
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-slash?s=sharp-duotone-solid trash-slash}
 * @preview ![trash-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMmwxMjggMEwyNDAgMCA0MDAgMGwxNiAzMiAxMjggMCAwIDY0TDE1MyA5NiA5NiA1MS44IDk2IDMyem0zNi41IDE2OC40TDQ4OS45IDQ4MiA0ODggNTEybC0zMzYgMEwxMzIuNSAyMDAuNHpNMTk0LjIgMTI4TDUxMiAxMjggNDk3LjMgMzYzLjNDMzk2LjIgMjg0LjkgMjk1LjIgMjA2LjQgMTk0LjIgMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjkuNCAuMWwxOSAxNC43TDYyMC45IDQ1OS4zbDE5IDE0LjctMjkuNCAzNy45LTE5LTE0LjdMMTkgNTIuNyAwIDM4IDI5LjQgLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
const TrashSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l128 0L240 0 400 0l16 32 128 0 0 64L153 96 96 51.8 96 32zm36.5 168.4L489.9 482 488 512l-336 0L132.5 200.4zM194.2 128L512 128 497.3 363.3C396.2 284.9 295.2 206.4 194.2 128z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default TrashSlash;