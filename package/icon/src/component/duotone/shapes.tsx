
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shapes` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shapes?s=duotone shapes}
 * @preview ![shapes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NGExMjggMTI4IDAgMSAwIDI1NiAwQTEyOCAxMjggMCAxIDAgMCAzODR6TTE2NC4yIDIwNy44YzUuNyAxMCAxNi4zIDE2LjIgMjcuOCAxNi4ybDE5MiAwYzExLjUgMCAyMi4yLTYuMiAyNy44LTE2LjJzNS41LTIyLjMtLjQtMzIuMmwtOTYtMTYwQzMwOS43IDUuOSAyOTkuMiAwIDI4OCAwcy0yMS43IDUuOS0yNy40IDE1LjVsLTk2IDE2MGMtNS45IDkuOS02LjEgMjIuMi0uNCAzMi4yeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzI4IDI3MmMtMjIuMSAwLTQwIDE3LjktNDAgNDBsMCAxNDRjMCAyMi4xIDE3LjkgNDAgNDAgNDBsMTQ0IDBjMjIuMSAwIDQwLTE3LjkgNDAtNDBsMC0xNDRjMC0yMi4xLTE3LjktNDAtNDAtNDBsLTE0NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Shapes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384a128 128 0 1 0 256 0A128 128 0 1 0 0 384zM164.2 207.8c5.7 10 16.3 16.2 27.8 16.2l192 0c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2z" />
            <path d="M328 272c-22.1 0-40 17.9-40 40l0 144c0 22.1 17.9 40 40 40l144 0c22.1 0 40-17.9 40-40l0-144c0-22.1-17.9-40-40-40l-144 0z" />
    </Icon>
);

export default Shapes;