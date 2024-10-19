
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-day` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-day?s=sharp-duotone-solid house-day}
 * @preview ![house-day](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGw2Mi40IDQwLjRMNDYuOSAyNzMuMWw3Mi43LTE1LjYgMTYuMiAyNS4xIDMuMi0yLjggNTIuMS00NS4xYy05LjYgNC0yMC4xIDYuMy0zMS4xIDYuM2MtNDQuMiAwLTgwLTM1LjgtODAtODBzMzUuOC04MCA4MC04MHM4MCAzNS44IDgwIDgwYzAgMTUuMS00LjIgMjkuMy0xMS41IDQxLjNsNjctNTguMS0zOC0yNC42IDE1LjYtNzIuN0wyMDAuNCA2Mi40IDE2MCAwIDExOS42IDYyLjQgNDYuOSA0Ni45bDE1LjYgNzIuN0wwIDE2MHptMTEyIDBhNDggNDggMCAxIDAgOTYgMCA0OCA0OCAwIDEgMCAtOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAzMDRMNDAwIDk2IDY0MCAzMDRsMCA0OC02NCAwIDAgMTYwLTM1MiAwIDAtMTYwLTY0IDAgMC00OHptMjg4LTE2bC05NiAwIDAgOTYgOTYgMCAwLTk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HouseDay: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160l62.4 40.4L46.9 273.1l72.7-15.6 16.2 25.1 3.2-2.8 52.1-45.1c-9.6 4-20.1 6.3-31.1 6.3c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80c0 15.1-4.2 29.3-11.5 41.3l67-58.1-38-24.6 15.6-72.7L200.4 62.4 160 0 119.6 62.4 46.9 46.9l15.6 72.7L0 160zm112 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
            <path d="M160 304L400 96 640 304l0 48-64 0 0 160-352 0 0-160-64 0 0-48zm288-16l-96 0 0 96 96 0 0-96z" />
    </Icon>
);

export default HouseDay;