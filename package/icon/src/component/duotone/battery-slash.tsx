
import { Icon, generic } from "../../index";

/**
 * A component that renders the `battery-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-slash?s=duotone battery-slash}
 * @preview ![battery-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxNzZsMCAxNjBjMCA0NC4yIDM1LjggODAgODAgODBsMjk0LjIgMC04MS4yLTY0TDExMiAzNTJjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTE2MGMwLTEuNCAuMi0yLjcgLjUtNEw0NS40IDEzMS43QzM2LjkgMTQ0LjQgMzIgMTU5LjYgMzIgMTc2ek0xNTQuOCA5NmMyNy4yIDIxLjMgNTQuNCA0Mi43IDgxLjcgNjRMNDk2IDE2MGM4LjggMCAxNiA3LjIgMTYgMTZsMCAxNjBjMCA4LjgtNy4yIDE2LTE2IDE2bC0xNC42IDBjMjAuNiAxNi4yIDQxLjMgMzIuMyA2MS45IDQ4LjVDNTYzLjEgMzg2IDU3NiAzNjIuNSA1NzYgMzM2bDAtMTZjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC02NGMwLTE3LjctMTQuMy0zMi0zMi0zMmwwLTE2YzAtNDQuMi0zNS44LTgwLTgwLTgwTDE1NC44IDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNS4xIDkuMkMxMy4zLTEuMiAyOC40LTMuMSAzOC44IDUuMWw1OTIgNDY0YzEwLjQgOC4yIDEyLjMgMjMuMyA0LjEgMzMuN3MtMjMuMyAxMi4zLTMzLjcgNC4xTDkuMiA0Mi45Qy0xLjIgMzQuNy0zLjEgMTkuNiA1LjEgOS4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BatterySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 176l0 160c0 44.2 35.8 80 80 80l294.2 0-81.2-64L112 352c-8.8 0-16-7.2-16-16l0-160c0-1.4 .2-2.7 .5-4L45.4 131.7C36.9 144.4 32 159.6 32 176zM154.8 96c27.2 21.3 54.4 42.7 81.7 64L496 160c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16l-14.6 0c20.6 16.2 41.3 32.3 61.9 48.5C563.1 386 576 362.5 576 336l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L154.8 96z" />
            <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default BatterySlash;