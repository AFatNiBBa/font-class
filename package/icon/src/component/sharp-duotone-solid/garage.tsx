
import { Icon, generic } from "../../index";

/**
 * A component that renders the `garage` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/garage?s=sharp-duotone-solid garage}
 * @preview ![garage](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMjI0bDM4NCAwIDAgOTYtMzg0IDAgMC05NnptMCAxMjhsMzg0IDAgMCAxNjAtMzg0IDAgMC0xNjB6bTEyOCA2NGwwIDMyIDE2IDAgOTYgMCAxNiAwIDAtMzItMTYgMC05NiAwLTE2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDEyOFY1MTJIOTZWMTkySDU0NFY1MTJoOTZWMTI4TDMyMCAwIDAgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Garage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 224l384 0 0 96-384 0 0-96zm0 128l384 0 0 160-384 0 0-160zm128 64l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0z" />
            <path d="M0 128V512H96V192H544V512h96V128L320 0 0 128z" />
    </Icon>
);

export default Garage;