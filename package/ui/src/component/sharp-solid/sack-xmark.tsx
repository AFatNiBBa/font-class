
import { Icon } from "../../index";

/**
 * A component that renders the `sack-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sack-xmark?s=sharp-solid sack-xmark}
 * @preview ![sack-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sack-xmark.svg)
 */
const SackXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 96l128 0L384 0 128 0l64 96zm128 32l-128 0c-3.8 2.5-8.1 5.3-13 8.4c0 0 0 0 0 0s0 0 0 0C122.3 172.7 0 250.9 0 416l0 96 96 0 320 0 96 0 0-96c0-165.1-122.3-243.3-179-279.6c-4.8-3.1-9.2-5.9-13-8.4zM222.1 336l-55-55L201 247l55 55 55-55L345 281l-55 55 55 55L311 425l-55-55-55 55L167 391l55-55z" />
    </Icon>
);

export default SackXmark;