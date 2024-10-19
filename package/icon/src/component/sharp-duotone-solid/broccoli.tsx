
import { Icon, generic } from "../../index";

/**
 * A component that renders the `broccoli` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broccoli?s=sharp-duotone-solid broccoli}
 * @preview ![broccoli](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMTIgMzUybDEwNCAwIDQwIDgwIDQwLTgwIDEwNCAwcy01NiA2NC04OCAxNjBsLTExMiAwYy0zMi05Ni04OC0xNjAtODgtMTYweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDE2IDM1Mkw5NiAzNTIgMCAzNTJsMC05NmMwLTQ1LjUgMzEuNi04My42IDc0LjEtOTMuNUM2Ny43IDE1Mi42IDY0IDE0MC43IDY0IDEyOGMwLTM1LjMgMjguNy02NCA2NC02NGMxMi43IDAgMjQuNiAzLjcgMzQuNSAxMC4xQzE3Mi40IDMxLjYgMjEwLjUgMCAyNTYgMHM4My42IDMxLjYgOTMuNSA3NC4xQzM1OS40IDY3LjcgMzcxLjMgNjQgMzg0IDY0YzM1LjMgMCA2NCAyOC43IDY0IDY0YzAgMTIuNy0zLjcgMjQuNi0xMC4xIDM0LjVjNDIuNSA5LjkgNzQuMSA0OCA3NC4xIDkzLjVsMCA5Ni05NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Broccoli: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 352l104 0 40 80 40-80 104 0s-56 64-88 160l-112 0c-32-96-88-160-88-160z" />
            <path d="M416 352L96 352 0 352l0-96c0-45.5 31.6-83.6 74.1-93.5C67.7 152.6 64 140.7 64 128c0-35.3 28.7-64 64-64c12.7 0 24.6 3.7 34.5 10.1C172.4 31.6 210.5 0 256 0s83.6 31.6 93.5 74.1C359.4 67.7 371.3 64 384 64c35.3 0 64 28.7 64 64c0 12.7-3.7 24.6-10.1 34.5c42.5 9.9 74.1 48 74.1 93.5l0 96-96 0z" />
    </Icon>
);

export default Broccoli;