
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-star` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-star?s=sharp-duotone-solid circle-star}
 * @preview ![circle-star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEwMy44LTQ5LjRMMjA5IDE5MS4zIDI1NiA5Nmw0NyA5NS4zIDEwNS4xIDE1LjMtNzYuMSA3NC4yIDE4IDEwNC43TDI1NiAzMzZsLTk0IDQ5LjQgMTgtMTA0LjctNzYuMS03NC4yeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDk2bDQ3IDk1LjMgMTA1LjEgMTUuMy03Ni4xIDc0LjIgMTggMTA0LjdMMjU2IDMzNmwtOTQgNDkuNCAxOC0xMDQuNy03Ni4xLTc0LjJMMjA5IDE5MS4zIDI1NiA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleStar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm103.8-49.4L209 191.3 256 96l47 95.3 105.1 15.3-76.1 74.2 18 104.7L256 336l-94 49.4 18-104.7-76.1-74.2z" />
            <path d="M256 96l47 95.3 105.1 15.3-76.1 74.2 18 104.7L256 336l-94 49.4 18-104.7-76.1-74.2L209 191.3 256 96z" />
    </Icon>
);

export default CircleStar;