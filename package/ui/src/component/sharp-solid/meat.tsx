
import { Icon } from "../../index";

/**
 * A component that renders the `meat` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meat?s=sharp-solid meat}
 * @preview ![meat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/meat.svg)
 */
const Meat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M243.6 19.6C283.7-20.4 371.9 2.8 440.5 71.5s91.9 156.8 51.8 196.9l-40.5 40.5C403.9 357 338.7 384 270.8 384l-69.2 0-26.4 26.4C185.6 421.1 192 435.8 192 452c0 33.1-26.9 60-60 60s-60-26.9-60-60l0-12-12 0c-33.1 0-60-26.9-60-60s26.9-60 60-60c16.2 0 30.9 6.4 41.7 16.8L128 310.5l0-69.2c0-67.9 27-133 75-181l40.7-40.7zm64 184.8c49.6 49.6 113.3 66.4 142.2 37.4s12.2-92.6-37.4-142.2S299.1 33.2 270.2 62.2s-12.2 92.6 37.4 142.2zm36.3-36.3c-15.3-15.3-20.4-34.9-11.5-43.8s28.5-3.7 43.8 11.5s20.4 34.9 11.5 43.8s-28.5 3.7-43.8-11.5z" />
    </Icon>
);

export default Meat;