
import { Icon } from "../../index";

/**
 * A component that renders the `eye` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye?s=sharp-solid eye}
 * @preview ![eye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/eye.svg)
 */
const Eye: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 32C129.6 32 30 181.3 0 256c30 74.7 129.6 224 288 224s258-149.3 288-224C546 181.3 446.4 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm48 0c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-6.4 0-12.7 .6-18.8 1.8L288 256l-94.2-18.8c-1.2 6.1-1.8 12.4-1.8 18.8z" />
    </Icon>
);

export default Eye;