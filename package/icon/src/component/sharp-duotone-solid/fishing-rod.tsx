
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fishing-rod` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fishing-rod?s=sharp-duotone-solid fishing-rod}
 * @preview ![fishing-rod](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OEwwIDUxMmwxMjggMCAwLTIyNC00MCAwIDAtMTgxLjlMMjkxLjQgNDggMzI4IDQ4bDAgODggMCAyNCA0OCAwIDAtMjQgMC0xMTIgMC0yNEwzNTIgMCAyODggMGwtMy40IDAtMy4yIC45LTIyNCA2NEw0MCA2OS45IDQwIDg4bDAgMjAwTDAgMjg4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUyIDE5MmMtMzIgMTYtOTYgNzUuMi05NiAxNTJjMCAzMiAxNiA4MCA2NCAxMTJsLTMyIDQwIDAgMTYgMTI4IDAgMC0xNi0zMi00MGM0OC0zMiA2NC04MCA2NC0xMTJjMC03Ni44LTY0LTEzNi05Ni0xNTJ6bTggOTZhMjQgMjQgMCAxIDEgMCA0OCAyNCAyNCAwIDEgMSAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FishingRod: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 288L0 512l128 0 0-224-40 0 0-181.9L291.4 48 328 48l0 88 0 24 48 0 0-24 0-112 0-24L352 0 288 0l-3.4 0-3.2 .9-224 64L40 69.9 40 88l0 200L0 288z" />
            <path d="M352 192c-32 16-96 75.2-96 152c0 32 16 80 64 112l-32 40 0 16 128 0 0-16-32-40c48-32 64-80 64-112c0-76.8-64-136-96-152zm8 96a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FishingRod;