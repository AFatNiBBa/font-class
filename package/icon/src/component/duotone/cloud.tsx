
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud?s=duotone cloud}
 * @preview ![cloud](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0MCAzNTJDNjQwIDQyMi43MDMgNTgyLjY4OCA0ODAgNTEyIDQ4MEgxNDRDNjQuNSA0ODAgMCA0MTUuNSAwIDMzNkMwIDI3My4yMDMgNDAuMTg4IDIxOS43OTcgOTYuMTg4IDIwMC4wOTRDOTYuMDk0IDE5Ny40MDYgOTYgMTk0LjcwMyA5NiAxOTJDOTYgMTAzLjU5NCAxNjcuNTk0IDMyIDI1NiAzMkMzMTUuMzEyIDMyIDM2NyA2NC4yMDMgMzk0LjY4OCAxMTIuMjAzQzQwOS45MDYgMTAyIDQyOC4zMTIgOTYgNDQ4IDk2QzUwMSA5NiA1NDQgMTM5IDU0NCAxOTJDNTQ0IDIwNC4yMDMgNTQxLjY4OCAyMTUuOTA2IDUzNy41OTQgMjI2LjU5NEM1OTYgMjM4LjQwNiA2NDAgMjkwLjA5NCA2NDAgMzUyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const Cloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M640 352C640 422.703 582.688 480 512 480H144C64.5 480 0 415.5 0 336C0 273.203 40.188 219.797 96.188 200.094C96.094 197.406 96 194.703 96 192C96 103.594 167.594 32 256 32C315.312 32 367 64.203 394.688 112.203C409.906 102 428.312 96 448 96C501 96 544 139 544 192C544 204.203 541.688 215.906 537.594 226.594C596 238.406 640 290.094 640 352Z" />
    </Icon>
);

export default Cloud;