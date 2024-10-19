
import { Icon, generic } from "../../index";

/**
 * A component that renders the `transporter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter?s=sharp-duotone-solid transporter}
 * @preview ![transporter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDExMmwzMiAxNiAxNiAzMiAxNi0zMiAzMi0xNkw2NCA5NiA0OCA2NCAzMiA5NiAwIDExMnpNNDE2IDQ4bDMyIDE2IDE2IDMyIDE2LTMyIDMyLTE2TDQ4MCAzMiA0NjQgMCA0NDggMzIgNDE2IDQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjA4IDQ4YTQ4IDQ4IDAgMSAxIDk2IDAgNDggNDggMCAxIDEgLTk2IDB6bS0xOC40IDgwbDE1LjQgMCAxMDIuMiAwIDE1LjQgMCA5LjYgMTJMNDA5IDIzNmwyMCAyNUwzNzkgMzAxbC0yMC0yNS0zMS0zOC43TDMyOCA0MTZsLTY0IDAgMC05Ni0xNiAwIDAgOTYtNjQgMCAwLTE3OC43TDE1MyAyNzZsLTIwIDI1TDgzIDI2MWwyMC0yNUwxODAgMTQwbDkuNi0xMnpNMjk2IDUxMmwtODAgMEw5NiA1MTJsMC02NCAzMjAgMCAwIDY0LTEyMCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Transporter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 112l32 16 16 32 16-32 32-16L64 96 48 64 32 96 0 112zM416 48l32 16 16 32 16-32 32-16L480 32 464 0 448 32 416 48z" />
            <path d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm-18.4 80l15.4 0 102.2 0 15.4 0 9.6 12L409 236l20 25L379 301l-20-25-31-38.7L328 416l-64 0 0-96-16 0 0 96-64 0 0-178.7L153 276l-20 25L83 261l20-25L180 140l9.6-12zM296 512l-80 0L96 512l0-64 320 0 0 64-120 0z" />
    </Icon>
);

export default Transporter;