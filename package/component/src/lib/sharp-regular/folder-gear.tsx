
import { Icon } from "../../index";

/**
 * A component that renders the `folder-gear` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-gear?s=sharp-regular folder-gear}
 * @preview ![folder-gear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/folder-gear.svg)
 */
const FolderGear: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 192 0 48 0 0 48 0 288 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 176 0zm48 112l-24 0-14.4-19.2L200 80 48 80l0 352 416 0 0-288-192 0zm12 32l0 32.8c9.8 3.5 18.8 8.7 26.6 15.4L339 207.7l28 48.5-28.4 16.4c.9 5 1.4 10.1 1.4 15.4s-.5 10.4-1.4 15.4L367 319.7l-28 48.5-28.4-16.4c-7.8 6.6-16.8 11.9-26.6 15.4l0 32.8-56 0 0-32.8c-9.8-3.5-18.8-8.7-26.6-15.4L173 368.2l-28-48.5 28.4-16.4c-.9-5-1.4-10.1-1.4-15.4s.5-10.4 1.4-15.4L145 256.2l28-48.5 28.4 16.4c7.8-6.6 16.8-11.9 26.6-15.4l0-32.8 56 0zm7 112a35 35 0 1 0 -70 0 35 35 0 1 0 70 0z" />
    </Icon>
);

export default FolderGear;