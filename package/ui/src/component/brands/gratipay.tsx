
import { Icon } from "../../index";

/**
 * A component that renders the `gratipay` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gratipay?s=brands gratipay}
 * @preview ![gratipay](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/gratipay.svg)
 */
const Gratipay: typeof Icon = x => (
    <Icon viewBox="0 0 496 512" {...x}>
        <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm114.6 226.4l-113 152.7-112.7-152.7c-8.7-11.9-19.1-50.4 13.6-72 28.1-18.1 54.6-4.2 68.5 11.9 15.9 17.9 46.6 16.9 61.7 0 13.9-16.1 40.4-30 68.1-11.9 32.9 21.6 22.6 60 13.8 72z" />
    </Icon>
);

export default Gratipay;