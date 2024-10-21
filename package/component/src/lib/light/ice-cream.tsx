
import { Icon } from "../../index";

/**
 * A component that renders the `ice-cream` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-cream?s=light ice-cream}
 * @preview ![ice-cream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ice-cream.svg)
 */
const IceCream: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0C139.7 0 70.6 65.2 64.4 147.9C36.2 157.7 16 184.5 16 216c0 39.8 32.2 72 72 72l45.5 0 181 0 45.5 0c39.8 0 72-32.2 72-72c0-31.5-20.2-58.3-48.4-68.1C377.4 65.2 308.3 0 224 0zM96 160s0 0 0 0C96 89.3 153.3 32 224 32s128 57.3 128 128l0 .5c0 8 5.8 14.7 13.7 15.9c19.4 2.8 34.3 19.5 34.3 39.6c0 22.1-17.9 40-40 40l-45.5 0-181 0L88 256c-22.1 0-40-17.9-40-40c0-20.1 14.9-36.8 34.3-39.6c7.9-1.1 13.8-7.9 13.7-15.9l0-.5zM200.1 498.1c4.9 8.6 14 13.9 23.9 13.9s19-5.3 23.9-13.9L349.7 320l-36.9 0L224 475.5 135.1 320l-36.9 0L200.1 498.1z" />
    </Icon>
);

export default IceCream;