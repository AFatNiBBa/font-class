
import { Icon } from "../../index";

/**
 * A component that renders the `utensils` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/utensils?s=sharp-solid utensils}
 * @preview ![utensils](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/utensils.svg)
 */
const Utensils: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 160L64 0 32 0 0 160c0 47.6 34.6 87.1 80 94.7L80 480l0 32 64 0 0-32 0-225.3c45.4-7.6 80-47.1 80-94.7L192 0 160 0l0 160-16 0L128 0 96 0 80 160l-16 0zM448 0C416 0 288 32 288 176l0 176 96 0 0 128 0 32 64 0 0-32 0-128 0-112 0-32L448 0z" />
    </Icon>
);

export default Utensils;