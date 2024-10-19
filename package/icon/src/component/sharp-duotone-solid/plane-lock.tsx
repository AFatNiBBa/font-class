
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-lock?s=sharp-duotone-solid plane-lock}
 * @preview ![plane-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGwwIDk2IDE5Mi02NCAwIDgwLTY0IDQ4IDAgNjQgMTI4LTMyIDEyOCAzMiAwLTY0LTY0LTQ4IDAtODAgNjQgMjEuMyAwLTUzLjMgMzIgMCAwLTE2YzAtMTUgMy0yOS40IDguMy00Mi41TDMyMCAxNjBsMC02Ni4zQzMyMCA1OS41IDI5MiAwIDI1NiAwYy0zNSAwLTY0IDU5LjUtNjQgOTMuN2wwIDY2LjNMMCAyODh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00OTYgMjcybDAgNDggNjQgMCAwLTQ4YzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyem0tNDggNDhsMC00OGMwLTQ0LjIgMzUuOC04MCA4MC04MHM4MCAzNS44IDgwIDgwbDAgNDggMzIgMCAwIDE5Mi0yMjQgMCAwLTE5MiAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PlaneLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 96 192-64 0 80-64 48 0 64 128-32 128 32 0-64-64-48 0-80 64 21.3 0-53.3 32 0 0-16c0-15 3-29.4 8.3-42.5L320 160l0-66.3C320 59.5 292 0 256 0c-35 0-64 59.5-64 93.7l0 66.3L0 288z" />
            <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default PlaneLock;