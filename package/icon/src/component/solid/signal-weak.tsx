
import { Icon } from "../../index";

/**
 * A component that renders the `signal-weak` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-weak?s=solid signal-weak}
 * @preview ![signal-weak](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAzODRIMzJDMTQuMzI3IDM4NCAwIDM5OC4zMjcgMCA0MTZWNDgwQzAgNDk3LjY3MyAxNC4zMjcgNTEyIDMyIDUxMkgzMkM0OS42NzMgNTEyIDY0IDQ5Ny42NzMgNjQgNDgwVjQxNkM2NCAzOTguMzI3IDQ5LjY3MyAzODQgMzIgMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SignalWeak: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 384H32C14.327 384 0 398.327 0 416V480C0 497.673 14.327 512 32 512H32C49.673 512 64 497.673 64 480V416C64 398.327 49.673 384 32 384Z" />
    </Icon>
);

export default SignalWeak;