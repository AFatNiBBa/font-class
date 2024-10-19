
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-fire` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-fire?s=sharp-duotone-solid house-fire}
 * @preview ![house-fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI0MGwwIDQ3LjYgNjQuMSAwIDAgMjI0LjRMMjI0IDUxMmwwLTE2MCAzMiAwIDMyIDBjLjEtNTYuOCAzNi4xLTEwOC43IDcxLjgtMTQ5LjljMjQuMy0yOCA1MS4yLTUyLjYgNzkuNi03Ni4xTDI4OC40IDAgMCAyNDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMjAgMzUyYzAtODkuNiA4NS4zLTE2NS4zIDEyOC0xOTJsNjQgNjQgMzItMzJjNzYuOCA2NCA5NiAxMzMuMyA5NiAxNjBjMCA4OC40LTcxLjYgMTYwLTE2MCAxNjBzLTE2MC03MS42LTE2MC0xNjB6TTQ4MCA0NjQuMmMzNS4zIDAgNjQtMjguNyA2NC02NGMwLTQ4LTY0LTk2LTY0LTk2cy02NCA0OC02NCA5NmMwIDM1LjMgMjguNyA2NCA2NCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HouseFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 240l0 47.6 64.1 0 0 224.4L224 512l0-160 32 0 32 0c.1-56.8 36.1-108.7 71.8-149.9c24.3-28 51.2-52.6 79.6-76.1L288.4 0 0 240z" />
            <path d="M320 352c0-89.6 85.3-165.3 128-192l64 64 32-32c76.8 64 96 133.3 96 160c0 88.4-71.6 160-160 160s-160-71.6-160-160zM480 464.2c35.3 0 64-28.7 64-64c0-48-64-96-64-96s-64 48-64 96c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default HouseFire;