
import { Icon } from "../../index";

/**
 * A component that renders the `knife-kitchen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/knife-kitchen?s=sharp-solid knife-kitchen}
 * @preview ![knife-kitchen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/knife-kitchen.svg)
 */
const KnifeKitchen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M480 0l88 88L448 208l0 64-55.5 43.2L278.6 201.4 480 0zM448 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm40-40a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM0 480L256 224 400 368s-128 144-288 144C48 512 0 480 0 480z" />
    </Icon>
);

export default KnifeKitchen;