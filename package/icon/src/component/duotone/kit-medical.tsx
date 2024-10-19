
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kit-medical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kit-medical?s=duotone kit-medical}
 * @preview ![kit-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMmwzMiAwIDAgNDQ4LTMyIDBMOTYgMzJ6bTM1MiAwbDMyIDAgMCA0NDgtMzIgMCAwLTQ0OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDMyQzI4LjcgMzIgMCA2MC43IDAgOTZMMCA0MTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMzIgMEw5NiAzMiA2NCAzMnptNjQgMGwwIDQ0OCAzMjAgMCAwLTQ0OEwxMjggMzJ6TTUxMiA0ODBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0zMjBjMC0zNS4zLTI4LjctNjQtNjQtNjRsLTMyIDAgMCA0NDggMzIgMHpNMjU2IDE3NmMwLTguOCA3LjItMTYgMTYtMTZsMzIgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCA0OCA0OCAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDMyYzAgOC44LTcuMiAxNi0xNiAxNmwtNDggMCAwIDQ4YzAgOC44LTcuMiAxNi0xNiAxNmwtMzIgMGMtOC44IDAtMTYtNy4yLTE2LTE2bDAtNDgtNDggMGMtOC44IDAtMTYtNy4yLTE2LTE2bDAtMzJjMC04LjggNy4yLTE2IDE2LTE2bDQ4IDAgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const KitMedical: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 32l32 0 0 448-32 0L96 32zm352 0l32 0 0 448-32 0 0-448z" />
            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l32 0L96 32 64 32zm64 0l0 448 320 0 0-448L128 32zM512 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-32 0 0 448 32 0zM256 176c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z" />
    </Icon>
);

export default KitMedical;