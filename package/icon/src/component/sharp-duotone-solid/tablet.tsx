
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet?s=sharp-duotone-solid tablet}
 * @preview ![tablet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NEwwIDUxMmw0NDggMCAwLTEyOEwwIDM4NHptMTc2IDQ4bDE2IDAgNjQgMCAxNiAwIDAgMzItMTYgMC02NCAwLTE2IDAgMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMEg0NDhWMzg0SDBWMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Tablet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384L0 512l448 0 0-128L0 384zm176 48l16 0 64 0 16 0 0 32-16 0-64 0-16 0 0-32z" />
            <path d="M0 0H448V384H0V0z" />
    </Icon>
);

export default Tablet;