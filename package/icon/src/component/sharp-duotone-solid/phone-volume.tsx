
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-volume` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-volume?s=sharp-duotone-solid phone-volume}
 * @preview ![phone-volume](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDE0NCAwbDgwIDE0NC04My44IDY3YzM2LjEgNjguNCA5Mi4zIDEyNC42IDE2MC44IDE2MC44TDM2OCAyODhsMTQ0IDgwTDQ4MCA1MTJsLTMyIDBDMjAwLjYgNTEyIDAgMzExLjQgMCA2NEwwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDY0IDI1NmMwLTExNC45LTkzLjEtMjA4LTIwOC0yMDhsMC00OEMzOTcuNCAwIDUxMiAxMTQuNiA1MTIgMjU2bC00OCAwek0yNTYgMjI0YTMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAxIDEgLTY0IDB6bTAtODBsMC00OGM4OC40IDAgMTYwIDcxLjYgMTYwIDE2MGwtNDggMGMwLTYxLjktNTAuMS0xMTItMTEyLTExMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const PhoneVolume: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L144 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8L368 288l144 80L480 512l-32 0C200.6 512 0 311.4 0 64L0 32z" />
            <path d="M464 256c0-114.9-93.1-208-208-208l0-48C397.4 0 512 114.6 512 256l-48 0zM256 224a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm0-80l0-48c88.4 0 160 71.6 160 160l-48 0c0-61.9-50.1-112-112-112z" />
    </Icon>
);

export default PhoneVolume;