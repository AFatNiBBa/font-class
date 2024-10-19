
import { Icon, generic } from "../../index";

/**
 * A component that renders the `drumstick` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drumstick?s=sharp-duotone-solid drumstick}
 * @preview ![drumstick](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4MGMwIDMzLjEgMjYuOSA2MCA2MCA2MGwxMiAwIDAgMTJjMCAzMy4xIDI2LjkgNjAgNjAgNjBzNjAtMjYuOSA2MC02MGMwLTE2LjItNi40LTMwLjktMTYuOC00MS43TDIzMy41IDM1MiAyMDggMzUybC00OC00OCAwLTI1LjUtNTguNCA1OC4zQzkwLjkgMzI2LjQgNzYuMiAzMjAgNjAgMzIwYy0zMy4xIDAtNjAgMjYuOS02MCA2MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAxNzZWMzA0bDQ4IDQ4SDMzNmM5Ny4yIDAgMTc2LTc4LjggMTc2LTE3NlM0MzMuMiAwIDMzNiAwUzE2MCA3OC44IDE2MCAxNzZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Drumstick: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 380c0 33.1 26.9 60 60 60l12 0 0 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-16.2-6.4-30.9-16.8-41.7L233.5 352 208 352l-48-48 0-25.5-58.4 58.3C90.9 326.4 76.2 320 60 320c-33.1 0-60 26.9-60 60z" />
            <path d="M160 176V304l48 48H336c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176z" />
    </Icon>
);

export default Drumstick;