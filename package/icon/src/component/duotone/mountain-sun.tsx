
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mountain-sun` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain-sun?s=duotone mountain-sun}
 * @preview ![mountain-sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00ODAgODBhODAgODAgMCAxIDAgMTYwIDBBODAgODAgMCAxIDAgNDgwIDgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzgxLjEgNTEyTDU1LjkgNTEyQzI1IDUxMiAwIDQ4NyAwIDQ1Ni4xYzAtMTAuNSAzLTIwLjggOC42LTI5LjdMMjI1LjIgODFjNi42LTEwLjYgMTguMy0xNyAzMC44LTE3czI0LjEgNi40IDMwLjggMTdsMTI2IDIwMC43IDQ4LjItNzlDNDY1IDE5Ni4xIDQ3Mi4yIDE5MiA0ODAgMTkyczE1IDQuMSAxOS4xIDEwLjdsMTMyIDIxNi4zYzUuOCA5LjYgOC45IDIwLjYgOC45IDMxLjhjMCAzMy44LTI3LjQgNjEuMS02MS4xIDYxLjFsLTEyMi44IDAtNzUgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MountainSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M480 80a80 80 0 1 0 160 0A80 80 0 1 0 480 80z" />
            <path d="M381.1 512L55.9 512C25 512 0 487 0 456.1c0-10.5 3-20.8 8.6-29.7L225.2 81c6.6-10.6 18.3-17 30.8-17s24.1 6.4 30.8 17l126 200.7 48.2-79C465 196.1 472.2 192 480 192s15 4.1 19.1 10.7l132 216.3c5.8 9.6 8.9 20.6 8.9 31.8c0 33.8-27.4 61.1-61.1 61.1l-122.8 0-75 0z" />
    </Icon>
);

export default MountainSun;