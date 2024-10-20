
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-half` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-half?s=sharp-regular temperature-half}
 * @preview ![temperature-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/temperature-half.svg)
 */
const TemperatureHalf: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M96 294.5L85.3 307.7C72 324.2 64 345.1 64 368c0 53 43 96 96 96s96-43 96-96c0-22.9-8-43.8-21.3-60.3L224 294.5l0-17L224 48 96 48l0 229.5 0 17zM224 0l48 0 0 48 0 229.5c20 24.7 32 56.2 32 90.5c0 79.5-64.5 144-144 144S16 447.6 16 368c0-34.3 12-65.8 32-90.5L48 48 48 0 96 0 224 0zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L144 200l0-16 32 0 0 16 0 122.8c18.6 6.6 32 24.4 32 45.3z" />
    </Icon>
);

export default TemperatureHalf;