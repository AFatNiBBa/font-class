
import { Icon, generic } from "../../index";

/**
 * A component that renders the `carrot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/carrot?s=sharp-duotone-solid carrot}
 * @preview ![carrot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMkwxMjcuMiAyMTkuNWMuNi0xLjMgMS4yLTIuNiAxLjgtNGw1MS43IDUxLjdMMTkyIDI3OC42IDIxNC42IDI1NmwtMTEuMy0xMS4zLTU2LjYtNTYuNkMxNzAuMiAxNjAuNiAyMDUgMTQ0IDI0Mi40IDE0NEMzMTEuOCAxNDQgMzY4IDIwMC4yIDM2OCAyNjkuNmMwIDUwLTI5LjcgOTUuMy03NS41IDExNS4ybC05OC4zIDQyLjctNTQuOS01NC45TDEyOCAzNjEuNCAxMDUuNCAzODRsMTEuMyAxMS4zIDQ2IDQ2TDAgNTEyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIwIDgwYzAtNDAgNDAtODAgNDAtODBzNDAgMzIgNDAgODBjMCAzMi04IDQwLTggNDBzOC04IDQwLThjNDggMCA4MCA0MCA4MCA0MHMtNDAgNDAtODAgNDBzLTU1LjMtNy4zLTgwLTMycy0zMi00MC0zMi04MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Carrot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 512L127.2 219.5c.6-1.3 1.2-2.6 1.8-4l51.7 51.7L192 278.6 214.6 256l-11.3-11.3-56.6-56.6C170.2 160.6 205 144 242.4 144C311.8 144 368 200.2 368 269.6c0 50-29.7 95.3-75.5 115.2l-98.3 42.7-54.9-54.9L128 361.4 105.4 384l11.3 11.3 46 46L0 512z" />
            <path d="M320 80c0-40 40-80 40-80s40 32 40 80c0 32-8 40-8 40s8-8 40-8c48 0 80 40 80 40s-40 40-80 40s-55.3-7.3-80-32s-32-40-32-80z" />
    </Icon>
);

export default Carrot;