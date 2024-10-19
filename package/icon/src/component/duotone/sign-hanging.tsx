
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=duotone sign-hanging}
 * @preview ![sign-hanging](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2YzAgMTcuNyAxNC4zIDMyIDMyIDMybDMyIDAgMCAzNTJjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTM1MiAzNTIgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkwxMjggNjRsMC0zMmMwLTE3LjctMTQuMy0zMi0zMi0zMlM2NCAxNC4zIDY0IDMybDAgMzJMMzIgNjRDMTQuMyA2NCAwIDc4LjMgMCA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAxNjBjLTE3LjcgMC0zMiAxNC4zLTMyIDMybDAgMTYwYzAgMTcuNyAxNC4zIDMyIDMyIDMybDI1NiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtMTYwYzAtMTcuNy0xNC4zLTMyLTMyLTMybC0yNTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SignHanging: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96c0 17.7 14.3 32 32 32l32 0 0 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-352 352 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L128 64l0-32c0-17.7-14.3-32-32-32S64 14.3 64 32l0 32L32 64C14.3 64 0 78.3 0 96z" />
            <path d="M192 160c-17.7 0-32 14.3-32 32l0 160c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32l-256 0z" />
    </Icon>
);

export default SignHanging;