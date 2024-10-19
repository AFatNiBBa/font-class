
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-circle-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-circle-check?s=duotone box-circle-check}
 * @preview ![box-circle-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGwyMDggMCAwLTEyOEw5My43IDMyQzc1LjUgMzIgNTguOSA0Mi4zIDUwLjcgNTguNUwwIDE2MHptMCAzMkwwIDQxNmMwIDM1LjMgMjguNyA2NCA2NCA2NGwyMzIuMiAwQzI3MS4xIDQ0OS42IDI1NiA0MTAuNSAyNTYgMzY4YzAtOTEuOCA3MC4zLTE2Ny4yIDE2MC0xNzUuM2wwLS43TDAgMTkyek0yNDAgMzJsMCAxMjggMTc2IDAgMzIgMEwzOTcuMyA1OC41QzM4OS4xIDQyLjMgMzcyLjUgMzIgMzU0LjMgMzJMMjQwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDMyIDUxMmExNDQgMTQ0IDAgMSAwIDAtMjg4IDE0NCAxNDQgMCAxIDAgMCAyODh6bTY3LjMtMTY0LjdsLTcyIDcyYy02LjIgNi4yLTE2LjQgNi4yLTIyLjYgMGwtNDAtNDBjLTYuMi02LjItNi4yLTE2LjQgMC0yMi42czE2LjQtNi4yIDIyLjYgMEw0MTYgMzg1LjRsNjAuNy02MC43YzYuMi02LjIgMTYuNC02LjIgMjIuNiAwczYuMiAxNi40IDAgMjIuNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BoxCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5L0 160zm0 32L0 416c0 35.3 28.7 64 64 64l232.2 0C271.1 449.6 256 410.5 256 368c0-91.8 70.3-167.2 160-175.3l0-.7L0 192zM240 32l0 128 176 0 32 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32z" />
            <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L416 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default BoxCircleCheck;