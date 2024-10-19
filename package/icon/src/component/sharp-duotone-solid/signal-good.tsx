
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-good` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-good?s=sharp-duotone-solid signal-good}
 * @preview ![signal-good](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00MTYgOTZsMCAzMiAwIDM1MiAwIDMyIDY0IDAgMC0zMiAwLTM1MiAwLTMyLTY0IDB6TTU0NCAwbDAgMzIgMCA0NDggMCAzMiA2NCAwIDAtMzIgMC00NDggMC0zMkw1NDQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiAxOTJsMCAzMiAwIDI1NiAwIDMyLTY0IDAgMC0zMiAwLTI1NiAwLTMyIDY0IDB6TTIyNCAyODhsMCAzMiAwIDE2MCAwIDMyLTY0IDAgMC0zMiAwLTE2MCAwLTMyIDY0IDB6TTk2IDQxNmwwIDY0IDAgMzItNjQgMCAwLTMyIDAtNjQgMC0zMiA2NCAwIDAgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const SignalGood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M416 96l0 32 0 352 0 32 64 0 0-32 0-352 0-32-64 0zM544 0l0 32 0 448 0 32 64 0 0-32 0-448 0-32L544 0z" />
            <path d="M352 192l0 32 0 256 0 32-64 0 0-32 0-256 0-32 64 0zM224 288l0 32 0 160 0 32-64 0 0-32 0-160 0-32 64 0zM96 416l0 64 0 32-64 0 0-32 0-64 0-32 64 0 0 32z" />
    </Icon>
);

export default SignalGood;