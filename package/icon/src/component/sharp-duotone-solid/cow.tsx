
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cow?s=sharp-duotone-solid cow}
 * @preview ![cow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGMwLTIwLjIgOS40LTM4LjIgMjQtNTBjMTEtOC44IDI0LjktMTQgNDAtMTRsOCAwIDAgMzJjMCAzNS4zLTI4LjcgNjQtNjQgNjRsLTggMCAwLTMyem0xOTItMTZsMTYwIDAgMCAxNiAwIDM5LjhjLTkuOSA2LjYtMjAuNiAxMi0zMiAxNi4xbDAgMjQuMiAwIDE2LTMyIDAgMC0xNiAwLTE2LjljLTUuMyAuNi0xMC42IC45LTE2IC45cy0xMC43LS4zLTE2LS45bDAgMTYuOSAwIDE2LTMyIDAgMC0xNiAwLTI0LjJjLTExLjQtNC0yMi4xLTkuNC0zMi0xNi4xbDAtMzkuOCAwLTE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNzIgMTg0YzAtMjQuMyAxMi4xLTQ1LjggMzAuNS01OC45Qzk4LjMgMTM1LjkgOTYgMTQ3LjcgOTYgMTYwbDAgMzIgMCA2NCAwIDE5MiA5NiAwIDAtMzIgMC0xMjggMC0xNiAxNjAgMCAwIDE2IDAgMTI4IDAgMzIgOTYgMCAwLTE5MiAzMiAzMiAwIDY0IDY0IDk2IDY0IDAgMzItMTYwLTE2LTIyLjQgMC04MS42IDAtMjQtNDggMCAwIDI0IDAgMTQuNEw0ODAgNjQgMjU2IDY0bC02NCAwLTQ4IDBDNzcuNyA2NCAyNCAxMTcuNyAyNCAxODRsMCA1NGMxMS04LjggMjQuOS0xNCA0MC0xNGw4IDAgMC00MHpNNTc2IDMyMGExNiAxNiAwIDEgMSAwIDMyIDE2IDE2IDAgMSAxIDAtMzJ6TTE2MCAxNjBsMC0zMiAyMjQgMCAwIDMyLTMwLjEgMzAuMUMzMzIuMiAyMTEuOCAzMDIuNyAyMjQgMjcyIDIyNHMtNjAuMi0xMi4yLTgxLjktMzMuOUwxNjAgMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Cow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288c0-20.2 9.4-38.2 24-50c11-8.8 24.9-14 40-14l8 0 0 32c0 35.3-28.7 64-64 64l-8 0 0-32zm192-16l160 0 0 16 0 39.8c-9.9 6.6-20.6 12-32 16.1l0 24.2 0 16-32 0 0-16 0-16.9c-5.3 .6-10.6 .9-16 .9s-10.7-.3-16-.9l0 16.9 0 16-32 0 0-16 0-24.2c-11.4-4-22.1-9.4-32-16.1l0-39.8 0-16z" />
            <path d="M72 184c0-24.3 12.1-45.8 30.5-58.9C98.3 135.9 96 147.7 96 160l0 32 0 64 0 192 96 0 0-32 0-128 0-16 160 0 0 16 0 128 0 32 96 0 0-192 32 32 0 64 64 96 64 0 32-160-16-22.4 0-81.6 0-24-48 0 0 24 0 14.4L480 64 256 64l-64 0-48 0C77.7 64 24 117.7 24 184l0 54c11-8.8 24.9-14 40-14l8 0 0-40zM576 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM160 160l0-32 224 0 0 32-30.1 30.1C332.2 211.8 302.7 224 272 224s-60.2-12.2-81.9-33.9L160 160z" />
    </Icon>
);

export default Cow;