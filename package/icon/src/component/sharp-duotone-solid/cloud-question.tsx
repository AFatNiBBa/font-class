
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-question` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-question?s=sharp-duotone-solid cloud-question}
 * @preview ![cloud-question](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMzNkwwIDQ4MGwxNDQgMCAzNjggMCAxMjggMCAwLTEyOGMwLTU5LjYtNDAuOC0xMDkuOC05Ni0xMjRsMC0zNmMwLTUzLTQzLTk2LTk2LTk2Yy0xOS43IDAtMzguMSA2LTUzLjMgMTYuMkMzNjcgNjQuMiAzMTUuMyAzMiAyNTYgMzJDMTY3LjYgMzIgOTYgMTAzLjYgOTYgMTkybDAgOC4yQzQwLjEgMjIwIDAgMjczLjMgMCAzMzZ6TTIzMiAyMTZjMC0zMC45IDI1LjEtNTYgNTYtNTZsNTYuOSAwYzE3LjQgMCAzMy4yIDcuMSA0NC43IDE4LjVjNS43IDUuNyAxMC4zIDEyLjUgMTMuNSAyMC4xYzEuNiAzLjggMi44IDcuNyAzLjcgMTEuOGMuNCAyLjEgLjggNC4yIDEgNi40Yy4xIDEgLjIgMi4xIC4yIDMuMWMwIDEgLjEgMiAuMSAzLjJjMCAxLjQgMCAyLjgtLjEgNC4zYy0uMSAxLjQtLjIgMi43LS40IDQuMmMtLjQgMi44LS45IDUuNS0xLjYgOC4xYy0xLjQgNS4zLTMuNiAxMC40LTYuMyAxNS4xYy01LjUgOS41LTEzLjQgMTcuNS0yMy4yIDIzLjFjLTEwLjggNi4yLTIxLjUgMTIuMy0zMi4zIDE4LjVjMCAyLjUgMCA1IDAgNy42YzAgOCAwIDE2IDAgMjRsLTQ4IDBjMC04IDAtMTYgMC0yNGMwLTcuMiAwLTE0LjMgMC0yMS41YzAtNC42IDAtOS4zIDAtMTMuOWwxMi4xLTYuOSA0NC4zLTI1LjRjMi40LTEuNCA0LjMtMy4zIDUuNi01LjVjLjctMS4xIDEuMi0yLjQgMS41LTMuNmMuMi0uNiAuMy0xLjMgLjQtMS45Yy4xLTEgLjEtMSAuMS0ybDAtLjNjMC0uNCAwLS44LS4xLTEuMmMtLjEtLjUtLjEtMS0uMi0xLjVjLS4yLTEtLjUtMS45LS45LTIuOGMtLjgtMS44LTEuOS0zLjQtMy4yLTQuOGMtMi43LTIuNy02LjUtNC40LTEwLjctNC40TDI4OCAyMDhjLTQuNCAwLTggMy42LTggOGMwIDIuMiAwIDQuNCAwIDYuNWwtNDggMGMwLTIuMiAwLTQuNCAwLTYuNXptNjQgMTUybDQ4IDAgMCA0OC00OCAwYzAtMTYgMC0zMiAwLTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDE2MGMtMzAuOSAwLTU2IDI1LjEtNTYgNTZsMCA2LjUgNDggMCAwLTYuNWMwLTQuNCAzLjYtOCA4LThsNTYuOSAwYzguNCAwIDE1LjEgNi44IDE1LjEgMTUuMWMwIDUuNC0yLjkgMTAuNC03LjYgMTMuMWwtNDQuMyAyNS40TDI5NiAyNjguNmwwIDEzLjkgMCAyMS41IDAgMjQgNDggMCAwLTI0IDAtNy42IDMyLjMtMTguNWMxOS42LTExLjMgMzEuNy0zMi4yIDMxLjctNTQuOGMwLTM0LjktMjguMy02My4xLTYzLjEtNjMuMUwyODggMTYwem01NiAyMDhsLTQ4IDAgMCA0OCA0OCAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const CloudQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336L0 480l144 0 368 0 128 0 0-128c0-59.6-40.8-109.8-96-124l0-36c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192l0 8.2C40.1 220 0 273.3 0 336zM232 216c0-30.9 25.1-56 56-56l56.9 0c17.4 0 33.2 7.1 44.7 18.5c5.7 5.7 10.3 12.5 13.5 20.1c1.6 3.8 2.8 7.7 3.7 11.8c.4 2.1 .8 4.2 1 6.4c.1 1 .2 2.1 .2 3.1c0 1 .1 2 .1 3.2c0 1.4 0 2.8-.1 4.3c-.1 1.4-.2 2.7-.4 4.2c-.4 2.8-.9 5.5-1.6 8.1c-1.4 5.3-3.6 10.4-6.3 15.1c-5.5 9.5-13.4 17.5-23.2 23.1c-10.8 6.2-21.5 12.3-32.3 18.5c0 2.5 0 5 0 7.6c0 8 0 16 0 24l-48 0c0-8 0-16 0-24c0-7.2 0-14.3 0-21.5c0-4.6 0-9.3 0-13.9l12.1-6.9 44.3-25.4c2.4-1.4 4.3-3.3 5.6-5.5c.7-1.1 1.2-2.4 1.5-3.6c.2-.6 .3-1.3 .4-1.9c.1-1 .1-1 .1-2l0-.3c0-.4 0-.8-.1-1.2c-.1-.5-.1-1-.2-1.5c-.2-1-.5-1.9-.9-2.8c-.8-1.8-1.9-3.4-3.2-4.8c-2.7-2.7-6.5-4.4-10.7-4.4L288 208c-4.4 0-8 3.6-8 8c0 2.2 0 4.4 0 6.5l-48 0c0-2.2 0-4.4 0-6.5zm64 152l48 0 0 48-48 0c0-16 0-32 0-48z" />
            <path d="M288 160c-30.9 0-56 25.1-56 56l0 6.5 48 0 0-6.5c0-4.4 3.6-8 8-8l56.9 0c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4L296 268.6l0 13.9 0 21.5 0 24 48 0 0-24 0-7.6 32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1L288 160zm56 208l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default CloudQuestion;