
import { Icon } from "../../index";

/**
 * A component that renders the `venus-mars` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/venus-mars?s=regular venus-mars}
 * @preview ![venus-mars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/venus-mars.svg)
 */
const VenusMars: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 304a128 128 0 1 0 0-256 128 128 0 1 0 0 256zM352 176c0 89.1-66.2 162.7-152 174.4l0 49.6 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-49.6C66.2 338.7 0 265.1 0 176C0 78.8 78.8 0 176 0s176 78.8 176 176zM271.9 360.6c14.6-7.6 28.1-16.8 40.4-27.5C335.2 354.8 366 368 400 368c70.7 0 128-57.3 128-128s-57.3-128-128-128c-8.6 0-17.1 .9-25.2 2.5c-4.9-15.8-11.6-30.7-19.9-44.7C369.3 66 384.4 64 400 64c39.9 0 76.8 13.3 106.3 35.7L558.1 48 504 48c-13.3 0-24-10.7-24-24s10.7-24 24-24L616 0c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-54.1-51.7 51.7C562.7 163.2 576 200.1 576 240c0 97.2-78.8 176-176 176c-50.5 0-96-21.3-128.1-55.4z" />
    </Icon>
);

export default VenusMars;