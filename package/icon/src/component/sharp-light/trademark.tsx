
import { Icon } from "../../index";

/**
 * A component that renders the `trademark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trademark?s=sharp-light trademark}
 * @preview ![trademark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/trademark.svg)
 */
const Trademark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 96l16 0 224 0 16 0 0 32-16 0L16 128 0 128 0 96zM112 400l0-272 32 0 0 272 0 16-32 0 0-16zM288 112l0-16 23.5 0 4.8 5.8L464 279 611.7 101.8l4.8-5.8L640 96l0 16 0 288 0 16-32 0 0-16 0-243.8L476.3 314.2 464 329l-12.3-14.7L320 156.2 320 400l0 16-32 0 0-16 0-288z" />
    </Icon>
);

export default Trademark;