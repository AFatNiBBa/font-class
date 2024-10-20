
import { Icon } from "../../index";

/**
 * A component that renders the `hockey-mask` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-mask?s=solid hockey-mask}
 * @preview ![hockey-mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/hockey-mask.svg)
 */
const HockeyMask: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 240C0 111 64 0 224 0S448 111 448 240c0 192-48 272-224 272S0 432 0 240zM160 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm88 24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM176 344a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 64a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72-104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM312 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM272 408a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM128 272c35.3 0 64-28.7 64-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32c0 35.3 28.7 64 64 64zm256-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default HockeyMask;