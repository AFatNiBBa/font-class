
import { Icon, generic } from "../../index";

/**
 * A component that renders the `family-dress` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/family-dress?s=sharp-duotone-solid family-dress}
 * @preview ![family-dress](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NGw2NCAwIDAgMTI4IDExMiAwIDAtNjQtMzIgMCAwLTMyIDAtMTYwIDAtMzIgMzIgMCAxNiAwYy0xMC0xMy40LTE2LTMwLTE2LTQ4YzAtNS41IC42LTEwLjggMS42LTE2TDY0IDE2MCAwIDM4NHpNNjQgNjRhNjQgNjQgMCAxIDAgMTI4IDBBNjQgNjQgMCAxIDAgNjQgNjR6bTI1NiAwYTY0IDY0IDAgMSAwIDEyOCAwQTY0IDY0IDAgMSAwIDMyMCA2NHptMCAxNjBsMTYgMCAzMiAwIDAgMzIgMCAxNjAgMCAzMi0zMiAwIDAgNjQgMTEyIDAgMC0xMjggNjQgMEw0NDggMTYwbC0xMTMuNiAwYzEgNS4yIDEuNiAxMC41IDEuNiAxNmMwIDE4LTYgMzQuNi0xNiA0OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIwOCAxNzZhNDggNDggMCAxIDEgOTYgMCA0OCA0OCAwIDEgMSAtOTYgMHptMTI4IDgwbDAgMTYwLTMyIDAgMCA5Ni05NiAwIDAtOTYtMzIgMCAwLTE2MCAxNjAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FamilyDress: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384l64 0 0 128 112 0 0-64-32 0 0-32 0-160 0-32 32 0 16 0c-10-13.4-16-30-16-48c0-5.5 .6-10.8 1.6-16L64 160 0 384zM64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64zm256 0a64 64 0 1 0 128 0A64 64 0 1 0 320 64zm0 160l16 0 32 0 0 32 0 160 0 32-32 0 0 64 112 0 0-128 64 0L448 160l-113.6 0c1 5.2 1.6 10.5 1.6 16c0 18-6 34.6-16 48z" />
            <path d="M208 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 80l0 160-32 0 0 96-96 0 0-96-32 0 0-160 160 0z" />
    </Icon>
);

export default FamilyDress;