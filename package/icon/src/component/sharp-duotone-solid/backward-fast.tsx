
import { Icon, generic } from "../../index";

/**
 * A component that renders the `backward-fast` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-fast?s=sharp-duotone-solid backward-fast}
 * @preview ![backward-fast](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgOTYgMCA0MTZsMCAzMiA2NCAwIDAtMzIgMC0xMzYgMC00OEw2NCA5NmwwLTMyTDAgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCAyODBMMjg4IDQ0OGwwLTE2OEw1MTIgNDQ4bDAtMzg0TDI4OCAyMzJsMC0xNjhMNjQgMjMybDAgNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const BackwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 96 0 416l0 32 64 0 0-32 0-136 0-48L64 96l0-32L0 64z" />
            <path d="M64 280L288 448l0-168L512 448l0-384L288 232l0-168L64 232l0 48z" />
    </Icon>
);

export default BackwardFast;