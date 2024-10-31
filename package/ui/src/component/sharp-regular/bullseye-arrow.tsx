
import { Icon } from "../../index";

/**
 * A component that renders the `bullseye-arrow` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye-arrow?s=sharp-regular bullseye-arrow}
 * @preview ![bullseye-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bullseye-arrow.svg)
 */
const BullseyeArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M361.5 218.4c4.2 11.8 6.5 24.4 6.5 37.6c0 61.9-50.1 112-112 112s-112-50.1-112-112s50.1-112 112-112c13.2 0 25.9 2.3 37.6 6.5l4.9-4.9-7.6-45.8C279.6 97.3 268 96 256 96C167.6 96 96 167.6 96 256s71.6 160 160 160s160-71.6 160-160c0-12-1.3-23.6-3.8-34.9l-45.8-7.6-4.9 4.9zm97.4-8.1c3.3 14.7 5 30 5 45.7c0 114.9-93.1 208-208 208S48 370.9 48 256S141.1 48 256 48c15.7 0 31 1.7 45.7 5l38.8-38.8C314 5 285.6 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256c0-29.6-5-58-14.3-84.5L459 210.3zm-93.9-29.4L432 192l80-80L432 80 400 0 320 80l11.2 66.9L231 247 265 281 365.1 180.8z" />
    </Icon>
);

export default BullseyeArrow;