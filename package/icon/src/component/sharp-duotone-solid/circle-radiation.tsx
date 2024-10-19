
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-radiation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-radiation?s=sharp-duotone-solid circle-radiation}
 * @preview ![circle-radiation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTQ0OCAwQTE5MiAxOTIgMCAxIDEgNjQgMjU2YTE5MiAxOTIgMCAxIDEgMzg0IDB6bS0yMjQgMGEzMiAzMiAwIDEgMCA2NCAwIDMyIDMyIDAgMSAwIC02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjAwIDI1NmMwLTIwLjcgMTEuMy0zOC44IDI4LTQ4LjVsLTUyLTkwLjFDMTI4LjIgMTQ1LjEgOTYgMTk2LjggOTYgMjU2bDEwNCAwem0yOCA0OC41bC01MiA5MC4xYzIzLjUgMTMuNiA1MC45IDIxLjQgODAgMjEuNHM1Ni41LTcuOCA4MC0yMS40bC01Mi05MC4xYy04LjIgNC44LTE3LjggNy41LTI4IDcuNXMtMTkuOC0yLjctMjgtNy41ek0zMTIgMjU2bDEwNCAwYzAtNTkuMi0zMi4yLTExMC45LTgwLTEzOC42bC01MiA5MC4xYzE2LjcgOS43IDI4IDI3LjggMjggNDguNXoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleRadiation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm448 0A192 192 0 1 1 64 256a192 192 0 1 1 384 0zm-224 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M200 256c0-20.7 11.3-38.8 28-48.5l-52-90.1C128.2 145.1 96 196.8 96 256l104 0zm28 48.5l-52 90.1c23.5 13.6 50.9 21.4 80 21.4s56.5-7.8 80-21.4l-52-90.1c-8.2 4.8-17.8 7.5-28 7.5s-19.8-2.7-28-7.5zM312 256l104 0c0-59.2-32.2-110.9-80-138.6l-52 90.1c16.7 9.7 28 27.8 28 48.5z" />
    </Icon>
);

export default CircleRadiation;