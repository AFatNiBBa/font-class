
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ellipsis-stroke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke?s=sharp-duotone-solid ellipsis-stroke}
 * @preview ![ellipsis-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMTkybDAgNDggMCAzMiAwIDQ4IDQ4IDAgMzIgMCA0OCAwIDAtNDggMC0zMiAwLTQ4LTQ4IDAtMzIgMC00OCAwem00OCA0OGwzMiAwIDAgMzItMzIgMCAwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNODAgMjcybDMyIDAgMC0zMi0zMiAwIDAgMzJ6TTMyIDMyMGwwLTQ4IDAtMzIgMC00OCA0OCAwIDMyIDAgNDggMCAwIDQ4IDAgMzIgMCA0OC00OCAwLTMyIDAtNDggMHptMzY4LTQ4bDMyIDAgMC0zMi0zMiAwIDAgMzJ6bS00OCA0OGwwLTQ4IDAtMzIgMC00OCA0OCAwIDMyIDAgNDggMCAwIDQ4IDAgMzIgMCA0OC00OCAwLTMyIDAtNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const EllipsisStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 192l0 48 0 32 0 48 48 0 32 0 48 0 0-48 0-32 0-48-48 0-32 0-48 0zm48 48l32 0 0 32-32 0 0-32z" />
            <path d="M80 272l32 0 0-32-32 0 0 32zM32 320l0-48 0-32 0-48 48 0 32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0zm368-48l32 0 0-32-32 0 0 32zm-48 48l0-48 0-32 0-48 48 0 32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0z" />
    </Icon>
);

export default EllipsisStroke;