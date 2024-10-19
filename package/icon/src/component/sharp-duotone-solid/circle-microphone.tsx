
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-microphone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone?s=sharp-duotone-solid circle-microphone}
 * @preview ![circle-microphone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOC0zMmwzMiAwIDAgMTYgMCAxNmMwIDUzIDQzIDk2IDk2IDk2czk2LTQzIDk2LTk2bDAtMTYgMC0xNiAzMiAwIDAgMTYgMCAxNmMwIDY1LjMtNDguOSAxMTkuMS0xMTIgMTI3bDAgMTcgMCAxNi0zMiAwIDAtMTYgMC0xN2MtNjMuMS03LjktMTEyLTYxLjctMTEyLTEyN2wwLTE2IDAtMTZ6TTIwOCA5Nmw5NiAwIDAgMTYwYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4cy00OC0yMS41LTQ4LTQ4bDAtMTYweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzA0IDk2bC05NiAwIDAgMTYwYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4czQ4LTIxLjUgNDgtNDhsMC0xNjB6TTE2MCAyNDBsMC0xNi0zMiAwIDAgMTYgMCAxNmMwIDY1LjMgNDguOSAxMTkuMSAxMTIgMTI3bDAgMTcgMCAxNiAzMiAwIDAtMTYgMC0xN2M2My4xLTcuOSAxMTItNjEuNyAxMTItMTI3bDAtMTYgMC0xNi0zMiAwIDAgMTYgMCAxNmMwIDUzLTQzIDk2LTk2IDk2cy05Ni00My05Ni05NmwwLTE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleMicrophone: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-32l32 0 0 16 0 16c0 53 43 96 96 96s96-43 96-96l0-16 0-16 32 0 0 16 0 16c0 65.3-48.9 119.1-112 127l0 17 0 16-32 0 0-16 0-17c-63.1-7.9-112-61.7-112-127l0-16 0-16zM208 96l96 0 0 160c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-160z" />
            <path d="M304 96l-96 0 0 160c0 26.5 21.5 48 48 48s48-21.5 48-48l0-160zM160 240l0-16-32 0 0 16 0 16c0 65.3 48.9 119.1 112 127l0 17 0 16 32 0 0-16 0-17c63.1-7.9 112-61.7 112-127l0-16 0-16-32 0 0 16 0 16c0 53-43 96-96 96s-96-43-96-96l0-16z" />
    </Icon>
);

export default CircleMicrophone;