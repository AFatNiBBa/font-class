
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-envelope` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-envelope?s=duotone circle-envelope}
 * @preview ![circle-envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOC02NGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwxOTIgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDkuM0wyNjQuNyAyNTUuNmMtMi43IDEuMi01LjcgMS45LTguNyAxLjlzLTUuOS0uNi04LjctMS45TDEyOCAyMDEuM2wwLTkuM3ptMCA0NC41bDEwNi4xIDQ4LjNjNi45IDMuMSAxNC40IDQuOCAyMS45IDQuOHMxNS0xLjYgMjEuOS00LjhMMzg0IDIzNi41bDAgODMuNWMwIDE3LjctMTQuMyAzMi0zMiAzMmwtMTkyIDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMybDAtODMuNXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAxNjBjLTE3LjcgMC0zMiAxNC4zLTMyIDMybDAgOS4zIDExOS4zIDU0LjNjMi43IDEuMiA1LjcgMS45IDguNyAxLjlzNS45LS42IDguNy0xLjlMMzg0IDIwMS4zbDAtOS4zYzAtMTcuNy0xNC4zLTMyLTMyLTMybC0xOTIgMHptMjI0IDc2LjVMMjc3LjkgMjg0LjdjLTYuOSAzLjEtMTQuMyA0LjgtMjEuOSA0LjhzLTE1LTEuNi0yMS45LTQuOEwxMjggMjM2LjVsMCA4My41YzAgMTcuNyAxNC4zIDMyIDMyIDMybDE5MiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtODMuNXoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleEnvelope: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 9.3L264.7 255.6c-2.7 1.2-5.7 1.9-8.7 1.9s-5.9-.6-8.7-1.9L128 201.3l0-9.3zm0 44.5l106.1 48.3c6.9 3.1 14.4 4.8 21.9 4.8s15-1.6 21.9-4.8L384 236.5l0 83.5c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-83.5z" />
            <path d="M160 160c-17.7 0-32 14.3-32 32l0 9.3 119.3 54.3c2.7 1.2 5.7 1.9 8.7 1.9s5.9-.6 8.7-1.9L384 201.3l0-9.3c0-17.7-14.3-32-32-32l-192 0zm224 76.5L277.9 284.7c-6.9 3.1-14.3 4.8-21.9 4.8s-15-1.6-21.9-4.8L128 236.5l0 83.5c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-83.5z" />
    </Icon>
);

export default CircleEnvelope;