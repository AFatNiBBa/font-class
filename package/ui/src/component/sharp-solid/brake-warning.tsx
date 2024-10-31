
import { Icon } from "../../index";

/**
 * A component that renders the `brake-warning` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brake-warning?s=sharp-solid brake-warning}
 * @preview ![brake-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/brake-warning.svg)
 */
const BrakeWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 256a224 224 0 1 1 448 0A224 224 0 1 1 96 256zM344 152l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zM296 320l0 48 48 0 0-48-48 0zM91.1 109C63.8 151.4 48 201.8 48 256s15.8 104.6 43.1 147l13 20.2-40.4 26L50.7 429C18.6 379.1 0 319.7 0 256S18.6 132.9 50.7 83l13-20.2 40.4 26L91.1 109zM589.3 83C621.4 132.9 640 192.3 640 256s-18.6 123.1-50.7 173l-13 20.2-40.4-26 13-20.2c27.3-42.4 43.1-92.8 43.1-147s-15.8-104.6-43.1-147l-13-20.2 40.4-26 13 20.2z" />
    </Icon>
);

export default BrakeWarning;