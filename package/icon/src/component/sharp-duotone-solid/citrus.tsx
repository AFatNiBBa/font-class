
import { Icon, generic } from "../../index";

/**
 * A component that renders the `citrus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/citrus?s=sharp-duotone-solid citrus}
 * @preview ![citrus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAyNzJjMCAxMzIuNSAxMDcuNSAyNDAgMjQwIDI0MHMyNDAtMTA3LjUgMjQwLTI0MGMwLTYxLTIyLjgtMTE2LjctNjAuMy0xNTkuMUM0MjAuOCAxMjIuNSA0MDMgMTI4IDM4NCAxMjhsLTgwIDAtMTYgMCAwLTE2IDAtMTZjMC0xLjQgMC0yLjcgLjEtNC4xcy4xLTIuNyAuMy00LjFjLjItMi43IC42LTUuMyAxLThjLjktNS4yIDIuMi0xMC4zIDMuOS0xNS4zYzMuNC05LjggOC4zLTE4LjkgMTQuNi0yN2MtMTYuNy0zLjctMzQtNS42LTUxLjgtNS42QzEyMy41IDMyIDE2IDEzOS41IDE2IDI3MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAxMjhWMTEyIDk2YzAtNTMgNDMtOTYgOTYtOTZoODAgMTZWMTYgMzJjMCA1My00MyA5Ni05NiA5NkgzMDQgMjg4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Citrus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 272c0 132.5 107.5 240 240 240s240-107.5 240-240c0-61-22.8-116.7-60.3-159.1C420.8 122.5 403 128 384 128l-80 0-16 0 0-16 0-16c0-1.4 0-2.7 .1-4.1s.1-2.7 .3-4.1c.2-2.7 .6-5.3 1-8c.9-5.2 2.2-10.3 3.9-15.3c3.4-9.8 8.3-18.9 14.6-27c-16.7-3.7-34-5.6-51.8-5.6C123.5 32 16 139.5 16 272z" />
            <path d="M288 128V112 96c0-53 43-96 96-96h80 16V16 32c0 53-43 96-96 96H304 288z" />
    </Icon>
);

export default Citrus;