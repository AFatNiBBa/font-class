
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-poll-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-poll-vertical?s=sharp-duotone-solid square-poll-vertical}
 * @preview ![square-poll-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTk2IDIyNGw2NCAwIDAgMTYwLTY0IDAgMC0xNjB6bTk2LTk2bDY0IDAgMCAyNTYtNjQgMCAwLTI1NnptOTYgMTYwbDY0IDAgMCA5Ni02NCAwIDAtOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTIgMTI4bDY0IDAgMCAyNTYtNjQgMCAwLTI1NnpNOTYgMjI0bDY0IDAgMCAxNjAtNjQgMCAwLTE2MHptMjU2IDY0bDAgOTYtNjQgMCAwLTk2IDY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquarePollVertical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 224l64 0 0 160-64 0 0-160zm96-96l64 0 0 256-64 0 0-256zm96 160l64 0 0 96-64 0 0-96z" />
            <path d="M192 128l64 0 0 256-64 0 0-256zM96 224l64 0 0 160-64 0 0-160zm256 64l0 96-64 0 0-96 64 0z" />
    </Icon>
);

export default SquarePollVertical;