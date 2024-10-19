
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fan` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fan?s=sharp-duotone-solid fan}
 * @preview ![fan](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGMwIDkwLjkgNzAuOCAxNjAuNCAxNjAgMTYwYzI4LS4xIDU1LTcuNCA3OC44LTIwLjNMMjI0IDUxMmM5MC45IDAgMTYwLjQtNzAuOCAxNjAtMTYwYy0uMS0yOC03LjQtNTUtMjAuMy03OC44TDUxMiAyODhjMC05MC45LTcwLjgtMTYwLjQtMTYwLTE2MGMtMjggLjEtNTUgNy40LTc4LjggMjAuM0wyODggMEMxOTcuMSAwIDEyNy42IDcwLjggMTI4IDE2MGMuMSAyOCA3LjQgNTUgMjAuMyA3OC44TDAgMjI0em0yODggMzJhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAyMjRhMzIgMzIgMCAxIDAgMCA2NCAzMiAzMiAwIDEgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Fan: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224c0 90.9 70.8 160.4 160 160c28-.1 55-7.4 78.8-20.3L224 512c90.9 0 160.4-70.8 160-160c-.1-28-7.4-55-20.3-78.8L512 288c0-90.9-70.8-160.4-160-160c-28 .1-55 7.4-78.8 20.3L288 0C197.1 0 127.6 70.8 128 160c.1 28 7.4 55 20.3 78.8L0 224zm288 32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M256 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default Fan;