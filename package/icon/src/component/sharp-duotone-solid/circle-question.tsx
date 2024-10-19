
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-question` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-question?s=sharp-duotone-solid circle-question}
 * @preview ![circle-question](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE2OC03MmMwLS41IDAtMSAwIDB6bTY0IDE1Mmw0OCAwYzAgMTYgMCAzMiAwIDQ4bC00OCAwYzAtMTYgMC0zMiAwLTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI0IDEyOGMtMzAuOSAwLTU2IDI1LjEtNTYgNTZsMCA2LjUgNDggMCAwLTYuNWMwLTQuNCAzLjYtOCA4LThsNTYuOSAwYzguNCAwIDE1LjEgNi44IDE1LjEgMTUuMWMwIDUuNC0yLjkgMTAuNC03LjYgMTMuMWwtNDQuMyAyNS40TDIzMiAyMzYuNmwwIDEzLjkgMCAyMS41IDAgMjQgNDggMCAwLTI0IDAtNy42IDMyLjMtMTguNWMxOS42LTExLjMgMzEuNy0zMi4yIDMxLjctNTQuOGMwLTM0LjktMjguMy02My4xLTYzLjEtNjMuMUwyMjQgMTI4em01NiAyMDhsLTQ4IDAgMCA0OCA0OCAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm168-72c0-.5 0-1 0 0zm64 152l48 0c0 16 0 32 0 48l-48 0c0-16 0-32 0-48z" />
            <path d="M224 128c-30.9 0-56 25.1-56 56l0 6.5 48 0 0-6.5c0-4.4 3.6-8 8-8l56.9 0c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4L232 236.6l0 13.9 0 21.5 0 24 48 0 0-24 0-7.6 32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1L224 128zm56 208l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default CircleQuestion;