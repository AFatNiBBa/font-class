
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blinds-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-open?s=sharp-duotone-solid blinds-open}
 * @preview ![blinds-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MmwxMjggMCAwLTY0LTg4IDBMMCAxOTJ6TTAgMzUybDE0NCAwYy0yNi41IDAtNDgtMjEuNS00OC00OGMwLS43IDAtMS40IDAtMi4xcy4xLTEuNCAuMS0yLjFjLjEtMS40IC4zLTIuNyAuNS00LjFjLjUtMi43IDEuMS01LjMgMi03LjhMNDAgMjg4IDAgMzUyek0wIDUxMmw1MTIgMC00MC02NEw0MCA0NDggMCA1MTJ6TTE0NCAzNTJsMzY4IDAtNDAtNjQtMjgyLjcgMGMxLjggNSAyLjcgMTAuNCAyLjcgMTZjMCAyNi41LTIxLjUgNDgtNDggNDh6bTE2LTIyNGwwIDY0IDM1MiAwLTQwLTY0LTMxMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgMEwwIDAgMCA2NGwzMiAwIDk2IDAgMCAxOTQuN2MtMTguNiA2LjYtMzIgMjQuNC0zMiA0NS4zYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4czQ4LTIxLjUgNDgtNDhjMC0yMC45LTEzLjQtMzguNy0zMi00NS4zTDE2MCA2NGwzMjAgMCAzMiAwIDAtNjRMNDgwIDAgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BlindsOpen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192l128 0 0-64-88 0L0 192zM0 352l144 0c-26.5 0-48-21.5-48-48c0-.7 0-1.4 0-2.1s.1-1.4 .1-2.1c.1-1.4 .3-2.7 .5-4.1c.5-2.7 1.1-5.3 2-7.8L40 288 0 352zM0 512l512 0-40-64L40 448 0 512zM144 352l368 0-40-64-282.7 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48zm16-224l0 64 352 0-40-64-312 0z" />
            <path d="M32 0L0 0 0 64l32 0 96 0 0 194.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L160 64l320 0 32 0 0-64L480 0 32 0z" />
    </Icon>
);

export default BlindsOpen;