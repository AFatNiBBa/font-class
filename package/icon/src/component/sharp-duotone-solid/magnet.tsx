
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnet?s=sharp-duotone-solid magnet}
 * @preview ![magnet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgMTYwbDEyOCAwIDAtMTI4TDAgMzJ6bTMyMCAwbDAgMTI4IDEyOCAwIDAtMTI4TDMyMCAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMTYwbDAgOTZDMCAzNzkuNyAxMDAuMyA0ODAgMjI0IDQ4MHMyMjQtMTAwLjMgMjI0LTIyNGwwLTk2LTEyOCAwIDAgOTZjMCA1My00MyA5Ni05NiA5NnMtOTYtNDMtOTYtOTZsMC05NkwwIDE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Magnet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 160l128 0 0-128L0 32zm320 0l0 128 128 0 0-128L320 32z" />
            <path d="M0 160l0 96C0 379.7 100.3 480 224 480s224-100.3 224-224l0-96-128 0 0 96c0 53-43 96-96 96s-96-43-96-96l0-96L0 160z" />
    </Icon>
);

export default Magnet;