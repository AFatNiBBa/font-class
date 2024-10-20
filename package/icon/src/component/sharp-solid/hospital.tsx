
import { Icon } from "../../index";

/**
 * A component that renders the `hospital` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hospital?s=sharp-solid hospital}
 * @preview ![hospital](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hospital.svg)
 */
const Hospital: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 0L448 0l0 512-80 0 0-128-96 0 0 128-80 0L192 0zM160 96l0 416L0 512 0 320l80 0 16 0 0-32-16 0L0 288l0-64 80 0 16 0 0-32-16 0L0 192 0 96l160 0zm320 0l160 0 0 96-80 0-16 0 0 32 16 0 80 0 0 64-80 0-16 0 0 32 16 0 80 0 0 192-160 0 0-416zM344 64l-48 0 0 40-40 0 0 48 40 0 0 40 48 0 0-40 40 0 0-48-40 0 0-40z" />
    </Icon>
);

export default Hospital;