
import { Icon, generic } from "../../index";

/**
 * A component that renders the `key-skeleton` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key-skeleton?s=duotone key-skeleton}
 * @preview ![key-skeleton](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmMwIDguMiAzLjEgMTYuNCA5LjQgMjIuNmw2NCA2NGM2LjIgNi4yIDE0LjQgOS40IDIyLjYgOS40czE2LjQtMy4xIDIyLjYtOS40YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zTDc3LjMgNDE2IDk2IDM5Ny4zbDQxLjQgNDEuNGMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMHMxMi41LTMyLjggMC00NS4zTDE0MS4zIDM1Mmw4Ni4xLTg2LjFjLTE4LjMtMTEuNS0zMy44LTI3LTQ1LjMtNDUuM0w5LjQgMzkzLjRDMy4xIDM5OS42IDAgNDA3LjggMCA0MTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMDQgNjRhODAgODAgMCAxIDEgMCAxNjAgODAgODAgMCAxIDEgMC0xNjB6bTAgMjI0QTE0NCAxNDQgMCAxIDAgMzA0IDBhMTQ0IDE0NCAwIDEgMCAwIDI4OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const KeySkeleton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 416c0 8.2 3.1 16.4 9.4 22.6l64 64c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L77.3 416 96 397.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L141.3 352l86.1-86.1c-18.3-11.5-33.8-27-45.3-45.3L9.4 393.4C3.1 399.6 0 407.8 0 416z" />
            <path d="M304 64a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 224A144 144 0 1 0 304 0a144 144 0 1 0 0 288z" />
    </Icon>
);

export default KeySkeleton;