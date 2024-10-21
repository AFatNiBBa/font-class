
import { Icon } from "../../index";

/**
 * A component that renders the `bolt-lightning` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-lightning?s=regular bolt-lightning}
 * @preview ![bolt-lightning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bolt-lightning.svg)
 */
const BoltLightning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M77 48L51.4 240 208 240c7.4 0 14.4 3.4 18.9 9.2s6.2 13.4 4.4 20.6l-23 91.8L322.8 192 176 192c-7.9 0-15.3-3.9-19.8-10.4s-5.4-14.9-2.6-22.2L196.9 48 77 48zM30.4 34.7C33 14.8 50 0 70 0L208.6 0c28.1 0 47.5 28.3 37.3 54.5L211.1 144l126.8 0c32.1 0 51.1 35.8 33.2 62.4l-199.2 295c-6.5 9.7-19 13.2-29.7 8.5s-16.3-16.4-13.5-27.7L177.3 288l-135 0C18.1 288-.6 266.7 2.6 242.7l27.7-208z" />
    </Icon>
);

export default BoltLightning;