
import { Icon, generic } from "../../index";

/**
 * A component that renders the `siren` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/siren?s=duotone siren}
 * @preview ![siren](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCAzNTJMNzMgMTUyLjFDNzcgMTIwIDEwNC4yIDk2IDEzNi41IDk2bDE3NSAwYzMyLjMgMCA1OS41IDI0IDYzLjUgNTYuMUw0MDAgMzUybC0yNjEuOSAwIDIxLjgtMTc0YzEuMS04LjgtNS4xLTE2LjgtMTMuOS0xNy45cy0xNi44IDUuMS0xNy45IDEzLjlMMTA1LjkgMzUyIDQ4IDM1MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDM1MmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJsMCA2NGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwzODQgMGMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTY0YzAtMTcuNy0xNC4zLTMyLTMyLTMyTDMyIDM1MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Siren: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 352L73 152.1C77 120 104.2 96 136.5 96l175 0c32.3 0 59.5 24 63.5 56.1L400 352l-261.9 0 21.8-174c1.1-8.8-5.1-16.8-13.9-17.9s-16.8 5.1-17.9 13.9L105.9 352 48 352z" />
            <path d="M32 352c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L32 352z" />
    </Icon>
);

export default Siren;