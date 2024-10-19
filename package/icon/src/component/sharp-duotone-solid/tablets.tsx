
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablets` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablets?s=sharp-duotone-solid tablets}
 * @preview ![tablets](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAgMTYwYzAgODguNCA3MS42IDE2MCAxNjAgMTYwYzM4LjQgMCA3My43LTEzLjUgMTAxLjMtMzYuMUwzNTYuMSA1OC43QzMzMy41IDg2LjMgMzIwIDEyMS42IDMyMCAxNjB6TTM3OC43IDM2LjFMNjAzLjkgMjYxLjNDNjI2LjUgMjMzLjcgNjQwIDE5OC40IDY0MCAxNjBDNjQwIDcxLjYgNTY4LjQgMCA0ODAgMGMtMzguNCAwLTczLjcgMTMuNS0xMDEuMyAzNi4xeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzE5LjIgMzY4TC44IDM2OEM4LjggNDQ4LjkgNzcgNTEyIDE2MCA1MTJzMTUxLjItNjMuMSAxNTkuMi0xNDR6bTAtMzJjLTgtODAuOS03Ni4yLTE0NC0xNTkuMi0xNDRTOC44IDI1NS4xIC44IDMzNmwzMTguNCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tablets: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M320 160c0 88.4 71.6 160 160 160c38.4 0 73.7-13.5 101.3-36.1L356.1 58.7C333.5 86.3 320 121.6 320 160zM378.7 36.1L603.9 261.3C626.5 233.7 640 198.4 640 160C640 71.6 568.4 0 480 0c-38.4 0-73.7 13.5-101.3 36.1z" />
            <path d="M319.2 368L.8 368C8.8 448.9 77 512 160 512s151.2-63.1 159.2-144zm0-32c-8-80.9-76.2-144-159.2-144S8.8 255.1 .8 336l318.4 0z" />
    </Icon>
);

export default Tablets;