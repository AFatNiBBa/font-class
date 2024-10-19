
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wheelchair` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wheelchair?s=sharp-duotone-solid wheelchair}
 * @preview ![wheelchair](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmMwIDg4LjQgNzEuNiAxNjAgMTYwIDE2MHMxNjAtNzEuNiAxNjAtMTYwbC00OCAwYzAgNjEuOS01MC4xIDExMi0xMTIgMTEyUzQ4IDQxMy45IDQ4IDM1MnM1MC4xLTExMiAxMTItMTEyYzUuMyAwIDEwLjUgLjQgMTUuNiAxLjFjLTMuMy0xNi4zLTYuNS0zMi42LTkuOC00OWMtMS45LS4xLTMuOC0uMS01LjgtLjFDNzEuNiAxOTIgMCAyNjMuNiAwIDM1MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE0NCA0OGE0OCA0OCAwIDEgMSA5NiAwIDQ4IDQ4IDAgMSAxIC05NiAwem05IDgwbDM5IDAgMzIgMCAyNi4yIDAgNS4xIDI1LjcgNC41IDIyLjMgNzYuMiAwIDMyIDAgMCA2NC0zMiAwLTYzLjQgMCA5LjYgNDhMMzg0IDI4OGwyMi4yIDAgNy44IDIwLjggMzcuMSA5OSAxMC43LTMuNiAzMC4zLTEwLjIgMjAuNSA2MC42LTMwLjMgMTAuMi00MCAxMy41LTI5LjMgOS45LTEwLjktMjlMMzYxLjggMzUybC0xMDUuMiAwYy0uNCAwLS44IDAtMS4zIDBMMjI0IDM1MmwtMjYuMiAwLTUuMS0yNS43LTMyLTE2MEwxNTMgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Wheelchair: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352c0 88.4 71.6 160 160 160s160-71.6 160-160l-48 0c0 61.9-50.1 112-112 112S48 413.9 48 352s50.1-112 112-112c5.3 0 10.5 .4 15.6 1.1c-3.3-16.3-6.5-32.6-9.8-49c-1.9-.1-3.8-.1-5.8-.1C71.6 192 0 263.6 0 352z" />
            <path d="M144 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm9 80l39 0 32 0 26.2 0 5.1 25.7 4.5 22.3 76.2 0 32 0 0 64-32 0-63.4 0 9.6 48L384 288l22.2 0 7.8 20.8 37.1 99 10.7-3.6 30.3-10.2 20.5 60.6-30.3 10.2-40 13.5-29.3 9.9-10.9-29L361.8 352l-105.2 0c-.4 0-.8 0-1.3 0L224 352l-26.2 0-5.1-25.7-32-160L153 128z" />
    </Icon>
);

export default Wheelchair;