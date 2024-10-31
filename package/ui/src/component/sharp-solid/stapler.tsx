
import { Icon } from "../../index";

/**
 * A component that renders the `stapler` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stapler?s=sharp-solid stapler}
 * @preview ![stapler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/stapler.svg)
 */
const Stapler: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 240l0 64 0 176-96 0-96 0L32 480l0-64 416 0 0-48-320 0-64 0 0-64 0-84.6L0 208l52.1-95.6c27-49.6 79-80.4 135.4-80.4c24 0 47.6 5.6 69 16.3L640 240zm-512-9.1l0 73.1 320 0 0-16L128 230.9z" />
    </Icon>
);

export default Stapler;