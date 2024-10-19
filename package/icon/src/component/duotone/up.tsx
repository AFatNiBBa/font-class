
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up?s=duotone up}
 * @preview ![up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMjU2YzQyLjcgMCA4NS4zIDAgMTI4IDBjMCA2MS4zIDAgMTIyLjcgMCAxODRjMCAyMi4xLTE3LjkgNDAtNDAgNDBsLTQ4IDBjLTIyLjEgMC00MC0xNy45LTQwLTQwYzAtNjEuMyAwLTEyMi43IDAtMTg0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjE0LjYgNDEuNGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBsLTE2MCAxNjBjLTkuMiA5LjItMTEuOSAyMi45LTYuOSAzNC45czE2LjYgMTkuOCAyOS42IDE5LjhsOTYgMHMwIDAgMCAwbDEyOCAwczAgMCAwIDBsOTYgMGMxMi45IDAgMjQuNi03LjggMjkuNi0xOS44czIuMi0yNS43LTYuOS0zNC45bC0xNjAtMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Up: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M128 256c42.7 0 85.3 0 128 0c0 61.3 0 122.7 0 184c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40c0-61.3 0-122.7 0-184z" />
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l96 0s0 0 0 0l128 0s0 0 0 0l96 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-160-160z" />
    </Icon>
);

export default Up;