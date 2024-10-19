
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right?s=sharp-duotone-solid arrow-up-right}
 * @preview ![arrow-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOC43IDM4NEw2NCA0MjkuM2wyMi42LTIyLjZMMjg4IDIwNS4zbDAtNDUuMy00NS4zIDBMNDEuNCAzNjEuNCAxOC43IDM4NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiA5NmwtMzIgMEw5NiA5NiA2NCA5NmwwIDY0IDMyIDAgMTkyIDAgMCAxOTIgMCAzMiA2NCAwIDAtMzIgMC0yMjQgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M18.7 384L64 429.3l22.6-22.6L288 205.3l0-45.3-45.3 0L41.4 361.4 18.7 384z" />
            <path d="M352 96l-32 0L96 96 64 96l0 64 32 0 192 0 0 192 0 32 64 0 0-32 0-224 0-32z" />
    </Icon>
);

export default ArrowUpRight;