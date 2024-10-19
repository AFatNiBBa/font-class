
import { Icon, generic } from "../../index";

/**
 * A component that renders the `waves-sine` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/waves-sine?s=sharp-duotone-solid waves-sine}
 * @preview ![waves-sine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmwwIDY0IDMyIDBjNTYuNyAwIDkzLjctMzQuNCAxMTguNi03NS40YzkuNS0xNS43IDE3LjktMzMuMyAyNS40LTUxLjdjLTExLjMtMjcuNi0yMC44LTU3LTI5LjctODQuOGwtLjctMi4zYy0xLjEtMy4zLTIuMS02LjYtMy4yLTkuOGMtMTQuNiA0NS4xLTI4LjMgODUuNC00Ni41IDExNS40Qzc3IDQwMi40IDU3LjQgNDE2IDMyIDQxNkwwIDQxNnpNMTc2IDE1OS4xYzExLjMgMjcuNiAyMC44IDU3IDI5LjcgODQuOGwuNyAyLjNjMS4xIDMuMyAyLjEgNi42IDMuMiA5LjhjMTQuNi00NS4xIDI4LjMtODUuNCA0Ni41LTExNS40QzI3NSAxMDkuNiAyOTQuNiA5NiAzMjAgOTZzNDUgMTMuNiA2My44IDQ0LjZjMTguMiAzMCAzMS45IDcwLjMgNDYuNSAxMTUuNGMxIDMuMiAyLjEgNi41IDMuMiA5LjhsLjcgMi4zYzguOSAyNy44IDE4LjQgNTcuMiAyOS43IDg0LjhjNy41IDE4LjQgMTUuOSAzNiAyNS40IDUxLjdjMjQuOSA0MSA2MS44IDc1LjQgMTE4LjYgNzUuNGwzMiAwIDAtNjQtMzIgMGMtMjUuNCAwLTQ1LTEzLjYtNjMuOC00NC42Yy0xOC4yLTMwLTMxLjktNzAuMy00Ni41LTExNS40Yy0xLTMuMi0yLjEtNi41LTMuMi05LjhsLS43LTIuM2MtOC45LTI3LjgtMTguNC01Ny4yLTI5LjctODQuOGMtNy41LTE4LjQtMTUuOS0zNi0yNS40LTUxLjdDNDEzLjcgNjYuNCAzNzYuNyAzMiAzMjAgMzJzLTkzLjcgMzQuNC0xMTguNiA3NS40Yy05LjUgMTUuNy0xNy45IDMzLjMtMjUuNCA1MS43eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIwIDQ4MGMtNTYuNyAwLTkzLjctMzQuNC0xMTguNi03NS40Yy0yMy44LTM5LjItNDAuMy05MC4yLTU1LjItMTM2LjVjMCAwIDAgMCAwIDBsLS43LTIuM2MtMTUuOC00OS4xLTMwLjItOTMuMS00OS43LTEyNS4yQzc3IDEwOS42IDU3LjQgOTYgMzIgOTZMMCA5NiAwIDMybDMyIDBjNTYuNyAwIDkzLjcgMzQuNCAxMTguNiA3NS40YzIzLjggMzkuMiA0MC4zIDkwLjIgNTUuMiAxMzYuNWwuNyAyLjNjMTUuOCA0OS4xIDMwLjIgOTMuMSA0OS43IDEyNS4yQzI3NSA0MDIuNCAyOTQuNiA0MTYgMzIwIDQxNnM0NS0xMy42IDYzLjgtNDQuNmMxOC4yLTMwIDMxLjktNzAuMyA0Ni41LTExNS40YzEgMy4yIDIuMSA2LjUgMy4yIDkuOGwuNyAyLjNjOC45IDI3LjggMTguNCA1Ny4yIDI5LjcgODQuOGMtNy41IDE4LjQtMTUuOSAzNi0yNS40IDUxLjdDNDEzLjcgNDQ1LjYgMzc2LjcgNDgwIDMyMCA0ODB6TTQ5Ny42IDI1NmMtMS0zLjItMi4xLTYuNS0zLjItOS44bC0uNy0yLjNjLTguOS0yNy44LTE4LjQtNTcuMi0yOS43LTg0LjhjNy41LTE4LjQgMTUuOS0zNiAyNS40LTUxLjdDNTE0LjMgNjYuNCA1NTEuMyAzMiA2MDggMzJsMzIgMCAwIDY0LTMyIDBjLTI1LjQgMC00NSAxMy42LTYzLjggNDQuNmMtMTguMiAzMC0zMS45IDcwLjMtNDYuNSAxMTUuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const WavesSine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64 32 0c56.7 0 93.7-34.4 118.6-75.4c9.5-15.7 17.9-33.3 25.4-51.7c-11.3-27.6-20.8-57-29.7-84.8l-.7-2.3c-1.1-3.3-2.1-6.6-3.2-9.8c-14.6 45.1-28.3 85.4-46.5 115.4C77 402.4 57.4 416 32 416L0 416zM176 159.1c11.3 27.6 20.8 57 29.7 84.8l.7 2.3c1.1 3.3 2.1 6.6 3.2 9.8c14.6-45.1 28.3-85.4 46.5-115.4C275 109.6 294.6 96 320 96s45 13.6 63.8 44.6c18.2 30 31.9 70.3 46.5 115.4c1 3.2 2.1 6.5 3.2 9.8l.7 2.3c8.9 27.8 18.4 57.2 29.7 84.8c7.5 18.4 15.9 36 25.4 51.7c24.9 41 61.8 75.4 118.6 75.4l32 0 0-64-32 0c-25.4 0-45-13.6-63.8-44.6c-18.2-30-31.9-70.3-46.5-115.4c-1-3.2-2.1-6.5-3.2-9.8l-.7-2.3c-8.9-27.8-18.4-57.2-29.7-84.8c-7.5-18.4-15.9-36-25.4-51.7C413.7 66.4 376.7 32 320 32s-93.7 34.4-118.6 75.4c-9.5 15.7-17.9 33.3-25.4 51.7z" />
            <path d="M320 480c-56.7 0-93.7-34.4-118.6-75.4c-23.8-39.2-40.3-90.2-55.2-136.5c0 0 0 0 0 0l-.7-2.3c-15.8-49.1-30.2-93.1-49.7-125.2C77 109.6 57.4 96 32 96L0 96 0 32l32 0c56.7 0 93.7 34.4 118.6 75.4c23.8 39.2 40.3 90.2 55.2 136.5l.7 2.3c15.8 49.1 30.2 93.1 49.7 125.2C275 402.4 294.6 416 320 416s45-13.6 63.8-44.6c18.2-30 31.9-70.3 46.5-115.4c1 3.2 2.1 6.5 3.2 9.8l.7 2.3c8.9 27.8 18.4 57.2 29.7 84.8c-7.5 18.4-15.9 36-25.4 51.7C413.7 445.6 376.7 480 320 480zM497.6 256c-1-3.2-2.1-6.5-3.2-9.8l-.7-2.3c-8.9-27.8-18.4-57.2-29.7-84.8c7.5-18.4 15.9-36 25.4-51.7C514.3 66.4 551.3 32 608 32l32 0 0 64-32 0c-25.4 0-45 13.6-63.8 44.6c-18.2 30-31.9 70.3-46.5 115.4z" />
    </Icon>
);

export default WavesSine;