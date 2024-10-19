
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-missed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-missed?s=sharp-duotone-solid phone-missed}
 * @preview ![phone-missed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQwMGMzNy4zLTQ4IDE1My42LTE0NCAzMjAtMTQ0czI4Mi43IDk2IDMyMCAxNDRMNTc2IDUxMiA0MTYgNDY0bDAtODBjLTYyLjMtMjAuOC0xMjkuNy0yMC44LTE5MiAwbDAgODBMNjQgNTEyIDAgNDAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMGwwIDEyOCAzMiAzMiA0Ny00NyA4OCA4OCA3IDcgOS45IDAgODAgMCA5LjkgMCA3LTdMNTIxIDU3bDE3LTE3TDUwNCA2LjEgNDg3IDIzbC0xMzcgMTM3LTYwLjEgMEwyMDkgNzlsNDctNDdMMjI0IDAgOTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PhoneMissed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 400c37.3-48 153.6-144 320-144s282.7 96 320 144L576 512 416 464l0-80c-62.3-20.8-129.7-20.8-192 0l0 80L64 512 0 400z" />
            <path d="M96 0l0 128 32 32 47-47 88 88 7 7 9.9 0 80 0 9.9 0 7-7L521 57l17-17L504 6.1 487 23l-137 137-60.1 0L209 79l47-47L224 0 96 0z" />
    </Icon>
);

export default PhoneMissed;