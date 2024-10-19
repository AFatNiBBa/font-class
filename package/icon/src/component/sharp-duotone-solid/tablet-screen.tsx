
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet-screen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen?s=sharp-duotone-solid tablet-screen}
 * @preview ![tablet-screen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNDQ4IDBsMCA1MTJMMCA1MTIgMCAwek02NCA2NGwwIDMyMCA0OCAwIDIyNCAwIDQ4IDAgMC0zMjAtNDggMEwxMTIgNjQgNjQgNjR6bTk2IDM2OGwwIDMyIDE2IDAgOTYgMCAxNiAwIDAtMzItMTYgMC05NiAwLTE2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCA2NEgzODRWMzg0SDY0VjY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TabletScreen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L448 0l0 512L0 512 0 0zM64 64l0 320 48 0 224 0 48 0 0-320-48 0L112 64 64 64zm96 368l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0z" />
            <path d="M64 64H384V384H64V64z" />
    </Icon>
);

export default TabletScreen;