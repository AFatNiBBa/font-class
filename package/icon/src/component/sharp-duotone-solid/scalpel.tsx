
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scalpel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scalpel?s=sharp-duotone-solid scalpel}
 * @preview ![scalpel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMkwxNzYgMzIwbDExMiAwQzI4OCA0OTYgMCA1MTIgMCA1MTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00OTUuMSAxMTUuN0wzMjAgMzIwSDEyOEwzOTYuMiAyMkM0MDguOCA4IDQyNi44IDAgNDQ1LjYgMEM0ODIuMyAwIDUxMiAyOS43IDUxMiA2Ni40djMuN2MwIDE2LjctNiAzMi45LTE2LjkgNDUuNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Scalpel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 512L176 320l112 0C288 496 0 512 0 512z" />
            <path d="M495.1 115.7L320 320H128L396.2 22C408.8 8 426.8 0 445.6 0C482.3 0 512 29.7 512 66.4v3.7c0 16.7-6 32.9-16.9 45.6z" />
    </Icon>
);

export default Scalpel;