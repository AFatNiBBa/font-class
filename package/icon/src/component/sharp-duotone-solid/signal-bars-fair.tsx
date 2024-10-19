
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-bars-fair` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-fair?s=sharp-duotone-solid signal-bars-fair}
 * @preview ![signal-bars-fair](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNTIgMTI4bDAgMzg0IDk2IDAgMC0zODQtOTYgMHpNNTEyIDBsMCA1MTIgOTYgMEw2MDggMCA1MTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAyNTZsLTk2IDAgMCAyNTYgOTYgMCAwLTI1NnpNMTI4IDM4NGwtOTYgMCAwIDEyOCA5NiAwIDAtMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SignalBarsFair: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M352 128l0 384 96 0 0-384-96 0zM512 0l0 512 96 0L608 0 512 0z" />
            <path d="M288 256l-96 0 0 256 96 0 0-256zM128 384l-96 0 0 128 96 0 0-128z" />
    </Icon>
);

export default SignalBarsFair;