
import { Icon } from "../../index";

/**
 * A component that renders the `hockey-mask` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-mask?s=sharp-solid hockey-mask}
 * @preview ![hockey-mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hockey-mask.svg)
 */
const HockeyMask: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 240C0 432 48 512 224 512s224-80 224-272L448 0 224 0 0 0 0 240zM160 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm40 72a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM176 296a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-24 88a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM272 296a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM264 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm8 280a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-24 88a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM128 272c-35.3 0-64-28.7-64-64l0-32 128 0 0 32c0 35.3-28.7 64-64 64zm256-64c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-32 128 0 0 32z" />
    </Icon>
);

export default HockeyMask;