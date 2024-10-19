
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-bars-good` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-good?s=sharp-duotone-solid signal-bars-good}
 * @preview ![signal-bars-good](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik01MTIgMGw5NiAwIDAgNTEyLTk2IDBMNTEyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggMTI4bC05NiAwIDAgMzg0IDk2IDAgMC0zODR6TTE5MiAyNTZsMCAyNTYgOTYgMCAwLTI1Ni05NiAwek0zMiAzODRsMCAxMjggOTYgMCAwLTEyOC05NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SignalBarsGood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M512 0l96 0 0 512-96 0L512 0z" />
            <path d="M448 128l-96 0 0 384 96 0 0-384zM192 256l0 256 96 0 0-256-96 0zM32 384l0 128 96 0 0-128-96 0z" />
    </Icon>
);

export default SignalBarsGood;