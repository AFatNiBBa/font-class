
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-front` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-front?s=sharp-duotone-solid truck-front}
 * @preview ![truck-front](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0NDhsOTYgMCAwIDY0LTk2IDAgMC02NHptODAtMjI0bDI0LTk2IDI0MCAwIDI0IDk2LTI4OCAwek0zODQgNDQ4bDk2IDAgMCA2NC05NiAwIDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTIgMEwwIDAgMCA0NDhsNTEyIDBMNTEyIDB6TTExMiAyMjRsMjQtOTYgMjQwIDAgMjQgOTYtMjg4IDB6TTY0IDMyMGEzMiAzMiAwIDEgMSA2NCAwIDMyIDMyIDAgMSAxIC02NCAwem0zNTItMzJhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TruckFront: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 448l96 0 0 64-96 0 0-64zm80-224l24-96 240 0 24 96-288 0zM384 448l96 0 0 64-96 0 0-64z" />
            <path d="M512 0L0 0 0 448l512 0L512 0zM112 224l24-96 240 0 24 96-288 0zM64 320a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default TruckFront;