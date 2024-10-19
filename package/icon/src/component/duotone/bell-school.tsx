
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-school` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-school?s=duotone bell-school}
 * @preview ![bell-school](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIwOGEyMDggMjA4IDAgMSAwIDQxNi0uMkEyMDggMjA4IDAgMSAwIDAgMjA4em0yODggMGE4MCA4MCAwIDEgMSAtMTYwIDAgODAgODAgMCAxIDEgMTYwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMDggMTYwYTQ4IDQ4IDAgMSAxIDAgOTYgNDggNDggMCAxIDEgMC05NnptMCAyNTZjNTUuOSAwIDEwNi42LTIyIDE0NC01Ny45TDM1MiA0NjRsNDAgMGMxOC42IDAgMzQuNy0xMC42IDQyLjctMjZjLTExLjQtOC44LTE4LjctMjIuNS0xOC43LTM4YzAtMjYuNSAyMS41LTQ4IDQ4LTQ4czQ4IDIxLjUgNDggNDhjMCAxOS40LTExLjUgMzYuMS0yOCA0My43Yy0xMS45IDM5LjUtNDguNiA2OC4zLTkyIDY4LjNsLTQwIDAtMjQwIDBjLTI2LjUgMC00OC0yMS41LTQ4LTQ4bDAtMTA1LjlDMTAxLjQgMzk0IDE1Mi4xIDQxNiAyMDggNDE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BellSchool: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416-.2A208 208 0 1 0 0 208zm288 0a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
            <path d="M208 160a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 256c55.9 0 106.6-22 144-57.9L352 464l40 0c18.6 0 34.7-10.6 42.7-26c-11.4-8.8-18.7-22.5-18.7-38c0-26.5 21.5-48 48-48s48 21.5 48 48c0 19.4-11.5 36.1-28 43.7c-11.9 39.5-48.6 68.3-92 68.3l-40 0-240 0c-26.5 0-48-21.5-48-48l0-105.9C101.4 394 152.1 416 208 416z" />
    </Icon>
);

export default BellSchool;