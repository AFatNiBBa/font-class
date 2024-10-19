
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-strong` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-strong?s=sharp-duotone-solid signal-strong}
 * @preview ![signal-strong](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik01NDQgMGwwIDMyIDAgNDQ4IDAgMzIgNjQgMCAwLTMyIDAtNDQ4IDAtMzJMNTQ0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00ODAgMTI4bDAtMzItNjQgMCAwIDMyIDAgMzUyIDAgMzIgNjQgMCAwLTMyIDAtMzUyek0zNTIgMjI0bDAtMzItNjQgMCAwIDMyIDAgMjU2IDAgMzIgNjQgMCAwLTMyIDAtMjU2ek0yMjQgMjg4bC02NCAwIDAgMzIgMCAxNjAgMCAzMiA2NCAwIDAtMzIgMC0xNjAgMC0zMnpNOTYgNDE2bDAtMzItNjQgMCAwIDMyIDAgNjQgMCAzMiA2NCAwIDAtMzIgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SignalStrong: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M544 0l0 32 0 448 0 32 64 0 0-32 0-448 0-32L544 0z" />
            <path d="M480 128l0-32-64 0 0 32 0 352 0 32 64 0 0-32 0-352zM352 224l0-32-64 0 0 32 0 256 0 32 64 0 0-32 0-256zM224 288l-64 0 0 32 0 160 0 32 64 0 0-32 0-160 0-32zM96 416l0-32-64 0 0 32 0 64 0 32 64 0 0-32 0-64z" />
    </Icon>
);

export default SignalStrong;