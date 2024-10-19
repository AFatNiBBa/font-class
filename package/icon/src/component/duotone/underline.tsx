
import { Icon, generic } from "../../index";

/**
 * A component that renders the `underline` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/underline?s=duotone underline}
 * @preview ![underline](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiA2NGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxNiAwIDAgMTI4YzAgODguNCA3MS42IDE2MCAxNjAgMTYwczE2MC03MS42IDE2MC0xNjBsMC0xMjggMTYgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwtOTYgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmwxNiAwIDAgMTI4YzAgNTMtNDMgOTYtOTYgOTZzLTk2LTQzLTk2LTk2bDAtMTI4IDE2IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJMNDggMzJDMzAuMyAzMiAxNiA0Ni4zIDE2IDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA0NDhjMC0xNy43IDE0LjMtMzIgMzItMzJsMzg0IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJMMzIgNDgwYy0xNy43IDAtMzItMTQuMy0zMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Underline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 64c0 17.7 14.3 32 32 32l16 0 0 128c0 88.4 71.6 160 160 160s160-71.6 160-160l0-128 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0 0 128c0 53-43 96-96 96s-96-43-96-96l0-128 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48 32C30.3 32 16 46.3 16 64z" />
            <path d="M0 448c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default Underline;