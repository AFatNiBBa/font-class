
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-cowboy` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-cowboy?s=sharp-duotone-solid hat-cowboy}
 * @preview ![hat-cowboy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNDEuMSAyOTAuOEMxODYuOCAzMDcuMSAyNDYuMiAzMjAgMzIwIDMyMGMyLjMgMCA0LjYgMCA2LjkgMHM0LjUtLjEgNi44LS4xYzQuNS0uMSA4LjktLjIgMTMuMy0uNGM4LjgtLjQgMTcuMy0xIDI1LjctMS43YzE2LjctMS41IDMyLjQtMy42IDQ3LjMtNi4yYzI5LjgtNS4zIDU2LjEtMTIuNiA3OC45LTIwLjdsLTIwLjQtNzAuNUM0MzEuOCAyNDMgMzc3LjcgMjU2IDMyMCAyNTZzLTExMS44LTEzLTE1OC41LTM1LjdsLTIwLjQgNzAuNXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIxNiAzMkwxNjEuNSAyMjAuM0MyMDguMiAyNDMgMjYyLjMgMjU2IDMyMCAyNTZzMTExLjgtMTMgMTU4LjUtMzUuN0w0MjQgMzIgMzIwIDgwIDIxNiAzMnpNMjQgMjI0TDAgMjU2czk2IDE5MiAzMjAgMTkyczMyMC0xOTIgMzIwLTE5MmwtMjQtMzJzLTk0LjUgOTYtMjk2IDk2cy0yOTYtOTYtMjk2LTk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HatCowboy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M141.1 290.8C186.8 307.1 246.2 320 320 320c2.3 0 4.6 0 6.9 0s4.5-.1 6.8-.1c4.5-.1 8.9-.2 13.3-.4c8.8-.4 17.3-1 25.7-1.7c16.7-1.5 32.4-3.6 47.3-6.2c29.8-5.3 56.1-12.6 78.9-20.7l-20.4-70.5C431.8 243 377.7 256 320 256s-111.8-13-158.5-35.7l-20.4 70.5z" />
            <path d="M216 32L161.5 220.3C208.2 243 262.3 256 320 256s111.8-13 158.5-35.7L424 32 320 80 216 32zM24 224L0 256s96 192 320 192s320-192 320-192l-24-32s-94.5 96-296 96s-296-96-296-96z" />
    </Icon>
);

export default HatCowboy;