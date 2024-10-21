
import { Icon } from "../../index";

/**
 * A component that renders the `ban-smoking` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-smoking?s=sharp-regular ban-smoking}
 * @preview ![ban-smoking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ban-smoking.svg)
 */
const BanSmoking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M92.9 126.9L385.1 419.1C349.7 447.2 304.8 464 256 464C141.1 464 48 370.9 48 256c0-48.8 16.8-93.7 44.9-129.1zm165 97.1L126.9 92.9C162.3 64.8 207.2 48 256 48c114.9 0 208 93.1 208 208c0 48.8-16.8 93.7-44.9 129.1L353.9 320l46.1 0 16 0 0-16 0-64 0-16-16 0-142.1 0zm32 32l94.1 0 0 32-62.1 0-32-32zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM288 96l-32 0 0 16c0 26.5 21.5 48 48 48l32 0c8.8 0 16 7.2 16 16l0 16 32 0 0-16c0-26.5-21.5-48-48-48l-32 0c-8.8 0-16-7.2-16-16l0-16zM112 224l-16 0 0 16 0 64 0 16 16 0 128.8 0-96-96L112 224z" />
    </Icon>
);

export default BanSmoking;