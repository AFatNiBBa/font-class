
import { Icon } from "../../index";

/**
 * A component that renders the `phone` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone?s=sharp-thin phone}
 * @preview ![phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/phone.svg)
 */
const Phone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64C0 311.4 200.6 512 448 512l32 0 32-144L368 288l-67 83.8C232.5 335.7 176.3 279.5 140.2 211L224 144 144 0 0 32 0 64zM16 44.8L135.8 18.2 203.4 140l-73.2 58.6-10.3 8.3 6.2 11.7c37.6 71.3 96.2 129.8 167.4 167.4l11.7 6.2 8.3-10.3L372 308.6l121.7 67.6L467.1 496 448 496C209.4 496 16 302.6 16 64c0 0 0 0 0 0l0-19.2z" />
    </Icon>
);

export default Phone;