
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sign-posts` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-posts?s=duotone sign-posts}
 * @preview ![sign-posts](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMkM2NCAxNC4zIDc4LjMgMCA5NiAwczMyIDE0LjMgMzIgMzJMNjQgMzJ6bTAgMzg0bDY0IDAgMCA2NGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTY0ek00NDggMzJjMjYuNyAwIDUzLjMgMCA4MCAwYzI2LjUgMCA0OCAyMS41IDQ4IDQ4bDAgMjg4YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4bC0xNiAwIDAtMzg0YzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyem0wIDM4NGw2NCAwIDAgNjRjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgODBDMCA1My41IDIxLjUgMzIgNDggMzJINTI4YzI2LjUgMCA0OCAyMS41IDQ4IDQ4VjM2OGMwIDI2LjUtMjEuNSA0OC00OCA0OEg0OGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhWODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const SignPosts: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 32C64 14.3 78.3 0 96 0s32 14.3 32 32L64 32zm0 384l64 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zM448 32c26.7 0 53.3 0 80 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-16 0 0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32zm0 384l64 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64z" />
            <path d="M0 80C0 53.5 21.5 32 48 32H528c26.5 0 48 21.5 48 48V368c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80z" />
    </Icon>
);

export default SignPosts;