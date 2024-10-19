
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flashlight` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flashlight?s=duotone flashlight}
 * @preview ![flashlight](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIwOGwwIDk2YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4bDMzNiAwczgwIDY0IDE5MiA2NGwwLTMyMGMtMTEyIDAtMTkyIDY0LTE5MiA2NEw0OCAxNjBjLTI2LjUgMC00OCAyMS41LTQ4IDQ4em0yMjQgNDhjMC0xNy43IDE0LjMtMzIgMzItMzJsMzIgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMmwtMzIgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02MDggOTZsLTMyIDAgMCAzMjAgMzIgMGMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTI1NmMwLTE3LjctMTQuMy0zMi0zMi0zMnpNMjU2IDIyNGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmwzMiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC0zMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Flashlight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 208l0 96c0 26.5 21.5 48 48 48l336 0s80 64 192 64l0-320c-112 0-192 64-192 64L48 160c-26.5 0-48 21.5-48 48zm224 48c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32z" />
            <path d="M608 96l-32 0 0 320 32 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32zM256 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0z" />
    </Icon>
);

export default Flashlight;