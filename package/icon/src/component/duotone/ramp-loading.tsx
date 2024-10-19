
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ramp-loading` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ramp-loading?s=duotone ramp-loading}
 * @preview ![ramp-loading](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0OEMzMiAyMS41IDUzLjUgMCA4MCAwTDM2OCAwYzI2LjUgMCA0OCAyMS41IDQ4IDQ4bDAgMzkyLjQtNjQtMTI4TDM1MiA2NCA5NiA2NGwwIDI0OC40LTY0IDEyOEwzMiA0OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAzMjBIMzIwbDg0LjQgMTY4LjhjNS4zIDEwLjYtMi40IDIzLjItMTQuMyAyMy4ySDU3LjljLTExLjkgMC0xOS42LTEyLjUtMTQuMy0yMy4yTDEyOCAzMjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const RampLoading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 48C32 21.5 53.5 0 80 0L368 0c26.5 0 48 21.5 48 48l0 392.4-64-128L352 64 96 64l0 248.4-64 128L32 48z" />
            <path d="M128 320H320l84.4 168.8c5.3 10.6-2.4 23.2-14.3 23.2H57.9c-11.9 0-19.6-12.5-14.3-23.2L128 320z" />
    </Icon>
);

export default RampLoading;