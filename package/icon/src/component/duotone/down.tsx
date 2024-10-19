
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down?s=duotone down}
 * @preview ![down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggNzJsMCAxODRjNDIuNyAwIDg1LjMgMCAxMjggMGMwLTYxLjMgMC0xMjIuNyAwLTE4NGMwLTIyLjEtMTcuOS00MC00MC00MGwtNDggMGMtMjIuMSAwLTQwIDE3LjktNDAgNDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggMjU2czAgMCAwIDBsLTk2IDBjLTEyLjkgMC0yNC42IDcuOC0yOS42IDE5LjhzLTIuMiAyNS43IDYuOSAzNC45bDE2MCAxNjBjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBsMTYwLTE2MGM5LjItOS4yIDExLjktMjIuOSA2LjktMzQuOXMtMTYuNi0xOS44LTI5LjYtMTkuOGwtOTYgMHMwIDAgMCAwbC0xMjggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Down: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M128 72l0 184c42.7 0 85.3 0 128 0c0-61.3 0-122.7 0-184c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40z" />
            <path d="M128 256s0 0 0 0l-96 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l160 160c12.5 12.5 32.8 12.5 45.3 0l160-160c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-96 0s0 0 0 0l-128 0z" />
    </Icon>
);

export default Down;