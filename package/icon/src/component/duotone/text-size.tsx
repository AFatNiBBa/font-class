
import { Icon, generic } from "../../index";

/**
 * A component that renders the `text-size` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-size?s=duotone text-size}
 * @preview ![text-size](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDgwbDAgNDhjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTMyIDk2IDAgMCAzMjAtMzIgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmwxMjggMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwtMzIgMCAwLTMyMCA5NiAwIDAgMzJjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTQ4YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4TDE5MiAzMiA0OCAzMkMyMS41IDMyIDAgNTMuNSAwIDgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDI4OGwwIDE2YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtMzJjMC0yNi41IDIxLjUtNDggNDgtNDhsMjI0IDBjMjYuNSAwIDQ4IDIxLjUgNDggNDhsMCAzMmMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTE2LTY0IDAgMCAxMjggMTYgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMmwtOTYgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmwxNiAwIDAtMTI4LTY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const TextSize: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 80l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 96 0 0 320-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-320 96 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-26.5-21.5-48-48-48L192 32 48 32C21.5 32 0 53.5 0 80z" />
            <path d="M384 288l0 16c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-26.5 21.5-48 48-48l224 0c26.5 0 48 21.5 48 48l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-16-64 0 0 128 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-128-64 0z" />
    </Icon>
);

export default TextSize;