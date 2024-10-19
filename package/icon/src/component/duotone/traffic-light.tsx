
import { Icon, generic } from "../../index";

/**
 * A component that renders the `traffic-light` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light?s=duotone traffic-light}
 * @preview ![traffic-light](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMTIgMTEyYTQ4IDQ4IDAgMSAwIDk2IDAgNDggNDggMCAxIDAgLTk2IDB6bTAgMTI4YTQ4IDQ4IDAgMSAwIDk2IDAgNDggNDggMCAxIDAgLTk2IDB6bTAgMTI4YTQ4IDQ4IDAgMSAwIDk2IDAgNDggNDggMCAxIDAgLTk2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCAwQzI4LjcgMCAwIDI4LjcgMCA2NEwwIDM1MmMwIDg4LjQgNzEuNiAxNjAgMTYwIDE2MHMxNjAtNzEuNiAxNjAtMTYwbDAtMjg4YzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDB6bTk2IDQxNmE0OCA0OCAwIDEgMSAwLTk2IDQ4IDQ4IDAgMSAxIDAgOTZ6bTQ4LTE3NmE0OCA0OCAwIDEgMSAtOTYgMCA0OCA0OCAwIDEgMSA5NiAwem0tNDgtODBhNDggNDggMCAxIDEgMC05NiA0OCA0OCAwIDEgMSAwIDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TrafficLight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M112 112a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
            <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 88.4 71.6 160 160 160s160-71.6 160-160l0-288c0-35.3-28.7-64-64-64L64 0zm96 416a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm48-176a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-48-80a48 48 0 1 1 0-96 48 48 0 1 1 0 96z" />
    </Icon>
);

export default TrafficLight;