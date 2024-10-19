
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-x` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-x?s=sharp-duotone-solid circle-x}
 * @preview ![circle-x](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTEzMC45IDEyOGw1OS44IDBjMjEuOCAyOS4zIDQzLjUgNTguNSA2NS4zIDg3LjhMMzIxLjMgMTI4bDU5LjggMEwyODUuOSAyNTZsOTUuMiAxMjgtNTkuOCAwTDI1NiAyOTYuMiAxOTAuNyAzODRsLTU5LjggMGMzMS43LTQyLjcgNjMuNS04NS4zIDk1LjItMTI4TDEzMC45IDEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyMS4zIDEyOGw1OS44IDBMMjg1LjkgMjU2bDk1LjIgMTI4LTU5LjggMEwyNTYgMjk2LjIgMTkwLjcgMzg0bC01OS44IDAgOTUuMi0xMjhMMTMwLjkgMTI4bDU5LjggMEwyNTYgMjE1LjggMzIxLjMgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleX: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM130.9 128l59.8 0c21.8 29.3 43.5 58.5 65.3 87.8L321.3 128l59.8 0L285.9 256l95.2 128-59.8 0L256 296.2 190.7 384l-59.8 0c31.7-42.7 63.5-85.3 95.2-128L130.9 128z" />
            <path d="M321.3 128l59.8 0L285.9 256l95.2 128-59.8 0L256 296.2 190.7 384l-59.8 0 95.2-128L130.9 128l59.8 0L256 215.8 321.3 128z" />
    </Icon>
);

export default CircleX;