
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crown` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crown?s=sharp-duotone-solid crown}
 * @preview ![crown](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEzNmE0MCA0MCAwIDEgMCA4MCAwQTQwIDQwIDAgMSAwIDAgMTM2ek0yNDggNzJhNDAgNDAgMCAxIDAgODAtLjFBNDAgNDAgMCAxIDAgMjQ4IDcyem0yNDggNjRhNDAgNDAgMCAxIDAgODAgMCA0MCA0MCAwIDEgMCAtODAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUwNCAxNjBMMzg0IDI1NiAzMDkgMTA2Yy02LjEgMy44LTEzLjMgNi0yMSA2cy0xNC45LTIuMi0yMS02TDE5MiAyNTYgNzIgMTYwYy03LjIgOS41LTE4LjUgMTUuOC0zMS4zIDE2TDk2IDQ4MGwzODQgMCA1NS4zLTMwNGMtMTIuOC0uMi0yNC4xLTYuNS0zMS4zLTE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Crown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 136a40 40 0 1 0 80 0A40 40 0 1 0 0 136zM248 72a40 40 0 1 0 80-.1A40 40 0 1 0 248 72zm248 64a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
            <path d="M504 160L384 256 309 106c-6.1 3.8-13.3 6-21 6s-14.9-2.2-21-6L192 256 72 160c-7.2 9.5-18.5 15.8-31.3 16L96 480l384 0 55.3-304c-12.8-.2-24.1-6.5-31.3-16z" />
    </Icon>
);

export default Crown;