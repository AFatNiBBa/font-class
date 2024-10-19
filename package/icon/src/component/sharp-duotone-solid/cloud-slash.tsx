
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-slash?s=sharp-duotone-solid cloud-slash}
 * @preview ![cloud-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMzNkwwIDQ4MGwxNDQgMCAzNDMuNCAwTDk3LjIgMTcyLjZjLS44IDYuNC0xLjIgMTIuOS0xLjIgMTkuNGwwIDguMkM0MC4xIDIyMCAwIDI3My4zIDAgMzM2ek0xMzcuOCA4NC4yQzI5OC45IDIwOS4yIDQ1OS45IDMzNC4zIDYyMC45IDQ1OS4zYzYuMiA0LjggMTIuNCA5LjYgMTguNiAxNC41Yy4xIDAgLjMgMCAuNCAuMWMuMS00MC43IC4xLTgxLjMgLjEtMTIxLjljMC01OS42LTQwLjgtMTA5LjgtOTYtMTI0bDAtMzZjMC01My00My05Ni05Ni05NmMtMTkuNyAwLTM4LjEgNi01My4zIDE2LjJDMzY3IDY0LjIgMzE1LjMgMzIgMjU2IDMyYy00Ni44IDAtODkgMjAuMS0xMTguMiA1Mi4yeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjkuNCAuMWwxOSAxNC43TDYyMC45IDQ1OS4zbDE5IDE0LjctMjkuNCAzNy45LTE5LTE0LjdMMTkgNTIuNyAwIDM4IDI5LjQgLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
const CloudSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336L0 480l144 0 343.4 0L97.2 172.6c-.8 6.4-1.2 12.9-1.2 19.4l0 8.2C40.1 220 0 273.3 0 336zM137.8 84.2C298.9 209.2 459.9 334.3 620.9 459.3c6.2 4.8 12.4 9.6 18.6 14.5c.1 0 .3 0 .4 .1c.1-40.7 .1-81.3 .1-121.9c0-59.6-40.8-109.8-96-124l0-36c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-46.8 0-89 20.1-118.2 52.2z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default CloudSlash;