
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eye` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye?s=sharp-duotone-solid eye}
 * @preview ![eye](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMzMCAxODEuMyAxMjkuNiAzMiAyODggMzJzMjU4IDE0OS4zIDI4OCAyMjRjLTMwIDc0LjctMTI5LjYgMjI0LTI4OCAyMjRTMzAgMzMwLjcgMCAyNTZ6bTE0NCAwYTE0NCAxNDQgMCAxIDAgMjg4IDAgMTQ0IDE0NCAwIDEgMCAtMjg4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTMuOCAyMzcuMmMtMS4yIDYuMS0xLjggMTIuNC0xLjggMTguOGMwIDUzIDQzIDk2IDk2IDk2czk2LTQzIDk2LTk2cy00My05Ni05Ni05NmMtNi40IDAtMTIuNyAuNi0xOC44IDEuOEwyODggMjU2bC05NC4yLTE4Ljh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Eye: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256C30 181.3 129.6 32 288 32s258 149.3 288 224c-30 74.7-129.6 224-288 224S30 330.7 0 256zm144 0a144 144 0 1 0 288 0 144 144 0 1 0 -288 0z" />
            <path d="M193.8 237.2c-1.2 6.1-1.8 12.4-1.8 18.8c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-6.4 0-12.7 .6-18.8 1.8L288 256l-94.2-18.8z" />
    </Icon>
);

export default Eye;