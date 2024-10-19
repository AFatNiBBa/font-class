
import { Icon, generic } from "../../index";

/**
 * A component that renders the `layer-group` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-group?s=sharp-duotone-solid layer-group}
 * @preview ![layer-group](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkwyODggMzg0IDU3NiAyNTYgNDcxLjQgMjA5LjUgMjg4IDI5MSAxMDQuNiAyMDkuNSAwIDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAyNTZMMCAxMjggMjg4IDAgNTc2IDEyOCAyODggMjU2em0wIDE2M2wxODMuNC04MS41TDU3NiAzODQgMjg4IDUxMiAwIDM4NGwxMDQuNi00Ni41TDI4OCA0MTl6Ii8+PC9zdmc+|width=32|height=32)
 */
const LayerGroup: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256L288 384 576 256 471.4 209.5 288 291 104.6 209.5 0 256z" />
            <path d="M288 256L0 128 288 0 576 128 288 256zm0 163l183.4-81.5L576 384 288 512 0 384l104.6-46.5L288 419z" />
    </Icon>
);

export default LayerGroup;