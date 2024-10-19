
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ranking-star` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ranking-star?s=sharp-duotone-solid ranking-star}
 * @preview ![ranking-star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGwxOTIgMCAwIDE5MkwwIDUxMiAwIDMyMHptMjI0LTY0bDE5MiAwIDAgMjU2LTE5MiAwIDAtMjU2ek00NDggMzg0bDE5MiAwIDAgMTI4LTE5MiAwIDAtMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIwIDBsMzEuOCA2Mi4zIDY5IDExLTQ5LjQgNDkuNUwzODIuMyAxOTIgMzIwIDE2MC4zIDI1Ny43IDE5MmwxMC45LTY5LjFMMjE5LjIgNzMuM2w2OS0xMUwzMjAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const RankingStar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 320l192 0 0 192L0 512 0 320zm224-64l192 0 0 256-192 0 0-256zM448 384l192 0 0 128-192 0 0-128z" />
            <path d="M320 0l31.8 62.3 69 11-49.4 49.5L382.3 192 320 160.3 257.7 192l10.9-69.1L219.2 73.3l69-11L320 0z" />
    </Icon>
);

export default RankingStar;