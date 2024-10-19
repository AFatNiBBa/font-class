
import { Icon, generic } from "../../index";

/**
 * A component that renders the `droplet-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-slash?s=sharp-duotone-solid droplet-slash}
 * @preview ![droplet-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMzIwYzAgMTA2IDg2IDE5MiAxOTIgMTkyYzUzLjIgMCAxMDEuNC0yMS42IDEzNi4xLTU2LjZMMTU5LjggMjIxLjljLTE5IDM2LjItMzEuOCA3MC44LTMxLjggOTguMXptNjQgMGwzMiAwIDAgMTZjMCA0NC4yIDM1LjggODAgODAgODBsMTYgMCAwIDMyLTE2IDBjLTYxLjkgMC0xMTItNTAuMS0xMTItMTEybDAtMTZ6bTE3LjktMTc5LjhMNTA1LjUgMzY5LjdjNC4yLTE1LjggNi41LTMyLjUgNi41LTQ5LjdDNTEyIDIxNCAzMjAgMCAzMjAgMHMtNTcuOSA2NC41LTExMC4xIDE0MC4yeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjkuNCAuMWwxOSAxNC43TDYyMC45IDQ1OS4zbDE5IDE0LjctMjkuNCAzNy45LTE5LTE0LjdMMTkgNTIuNyAwIDM4IDI5LjQgLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
const DropletSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 320c0 106 86 192 192 192c53.2 0 101.4-21.6 136.1-56.6L159.8 221.9c-19 36.2-31.8 70.8-31.8 98.1zm64 0l32 0 0 16c0 44.2 35.8 80 80 80l16 0 0 32-16 0c-61.9 0-112-50.1-112-112l0-16zm17.9-179.8L505.5 369.7c4.2-15.8 6.5-32.5 6.5-49.7C512 214 320 0 320 0s-57.9 64.5-110.1 140.2z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default DropletSlash;