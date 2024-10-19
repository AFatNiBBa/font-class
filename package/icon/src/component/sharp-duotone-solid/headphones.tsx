
import { Icon, generic } from "../../index";

/**
 * A component that renders the `headphones` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones?s=sharp-duotone-solid headphones}
 * @preview ![headphones](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yIDI1NmwzMCAwIDE4LjQgMEM2NS44IDE1Ni4zIDE1MiA4MCAyNTYgODBzMTkwLjIgNzYuMyAyMDUuNiAxNzZsMTguNCAwIDMwIDBDNDk0LjMgMTI5LjcgMzg2LjUgMzIgMjU2IDMyUzE3LjcgMTI5LjcgMiAyNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yIDI1NmMtMS4zIDEwLjUtMiAyMS4yLTIgMzJsMCA5NiAwIDk2IDEyOCAwIDAtMjI0LTc3LjYgMEwyIDI1NnptNDU5LjYgMEwzODQgMjU2bDAgMjI0IDEyOCAwIDAtOTYgMC05NmMwLTEwLjgtLjctMjEuNS0yLTMybC00OC41IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Headphones: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2 256l30 0 18.4 0C65.8 156.3 152 80 256 80s190.2 76.3 205.6 176l18.4 0 30 0C494.3 129.7 386.5 32 256 32S17.7 129.7 2 256z" />
            <path d="M2 256c-1.3 10.5-2 21.2-2 32l0 96 0 96 128 0 0-224-77.6 0L2 256zm459.6 0L384 256l0 224 128 0 0-96 0-96c0-10.8-.7-21.5-2-32l-48.5 0z" />
    </Icon>
);

export default Headphones;